const fs = require('fs');
const path = require('path');

const raw = fs.readFileSync(path.join(__dirname, 'word_content_raw.txt'), 'utf8');

// Load existing seed data to reuse image / existing treatmentId if matched
let existingMap = new Map();
try {
  const existing = require('./treatments.json');
  existing.forEach(t => {
    existingMap.set(t.title.toLowerCase().trim(), t);
  });
} catch (e) {
  console.log('No existing treatments.json found to map against.');
}

const CATEGORY_MAP = {
  'skin & facial': 'SKIN & ADVANCED FACIAL TREATMENTS',
  'hair & scalp': 'HAIR & SCALP TREATMENTS',
  'panchakarma': 'PANCHKARMA (MAIN DETOX THERAPIES)',
  'weight & body wellness': 'WEIGHT LOSS & BODY DETOX',
  'women & general wellness': 'WELLNESS, WOMEN & IMMUNITY CARE',
  'specialized ayurvedic': 'OTHER PANCHKARMA & SUPPORTIVE THERAPIES'
};

// Split by numbered sections: "\n1. ", "\n2. ", etc.
// Note: first one might start with "1. "
const chunks = raw.split(/\n(?=\d+\.\s+[A-Za-z])/);

const parsedTreatments = [];

chunks.forEach(chunk => {
  const matchNum = chunk.match(/^(\d+)\.\s+([^\r\n]+)/);
  if (!matchNum) return;

  const num = parseInt(matchNum[1], 10);
  const headerTitle = matchNum[2].trim();

  // Category
  const catMatch = chunk.match(/Category:\s*([^\r\n]+)/i);
  const rawCat = catMatch ? catMatch[1].trim() : '';
  let mappedCategory = CATEGORY_MAP[rawCat.toLowerCase()] || rawCat;

  // Items 21-28 in Panchakarma are "OTHER PANCHKARMA & SUPPORTIVE THERAPIES"
  if (num >= 21 && num <= 28) {
    mappedCategory = 'OTHER PANCHKARMA & SUPPORTIVE THERAPIES';
  }

  // English section
  const engIdx = chunk.indexOf('ENGLISH CONTENT');
  const hiIdx = chunk.indexOf('हिन्दी सामग्री');

  let engText = '';
  let hiText = '';

  if (engIdx !== -1 && hiIdx !== -1) {
    engText = chunk.substring(engIdx, hiIdx);
    hiText = chunk.substring(hiIdx);
  } else if (engIdx !== -1) {
    engText = chunk.substring(engIdx);
  }

  // Helper to extract line
  const extractField = (text, fieldName) => {
    const regex = new RegExp(`${fieldName}:\\s*([^\\r\\n]+)`, 'i');
    const m = text.match(regex);
    return m ? m[1].trim() : '';
  };

  // Helper to extract multi-line or paragraph until next heading
  const extractSection = (text, startHeader, nextHeaders) => {
    const startIdx = text.indexOf(startHeader);
    if (startIdx === -1) return '';
    const sub = text.substring(startIdx + startHeader.length).replace(/^:\s*/, '');
    
    // find closest next header
    let minIdx = sub.length;
    for (const h of nextHeaders) {
      const idx = sub.indexOf(h);
      if (idx !== -1 && idx < minIdx) {
        minIdx = idx;
      }
    }
    return sub.substring(0, minIdx).trim();
  };

  // English fields
  const title = extractField(engText, 'Treatment Name') || headerTitle;
  const tagline = extractField(engText, 'Tagline');
  const shortDescription = extractField(engText, 'Short Description');
  const description = extractSection(engText, 'Full Treatment Description', ['Key Benefits', 'Who Can Benefit', 'Why Choose Us', 'Treatment Steps']);
  
  const benefitsRaw = extractSection(engText, 'Key Benefits (12)', ['Who Can Benefit', 'Why Choose Us', 'Treatment Steps', 'हिन्दी']);
  const benefits = benefitsRaw ? benefitsRaw.split(/\s*•\s*/).map(s => s.trim()).filter(Boolean) : [];

  const whoCanBenefitRaw = extractSection(engText, 'Who Can Benefit? (8)', ['Why Choose Us', 'Treatment Steps', 'हिन्दी']);
  const whoCanBenefit = whoCanBenefitRaw ? whoCanBenefitRaw.split(/\s*•\s*/).map(s => s.trim()).filter(Boolean) : [];

  const whyChooseUsRaw = extractSection(engText, 'Why Choose Us? (5)', ['Treatment Steps', 'हिन्दी']);
  const whyChooseUs = whyChooseUsRaw ? whyChooseUsRaw.split(/\s*•\s*/).map(s => s.trim()).filter(Boolean) : [];

  // Steps English
  const process = [];
  for (let p = 1; p <= 4; p++) {
    const phaseRegex = new RegExp(`Phase ${p}:\\s*([^—\\r\\n]+)(?:—|--|-)\\s*([^\\r\\n]+(?:\\r?\\n(?!Phase|हिन्दी)[^\\r\\n]+)*)`, 'i');
    const pm = engText.match(phaseRegex);
    if (pm) {
      process.push({
        name: pm[1].trim(),
        description: pm[2].replace(/\r?\n/g, ' ').trim()
      });
    }
  }

  // Hindi fields
  const titleHi = extractField(hiText, 'उपचार का नाम') || '';
  const taglineHi = extractField(hiText, 'टैगलाइन') || '';
  const shortDescriptionHi = extractField(hiText, 'संक्षिप्त विवरण') || '';
  const descriptionHi = extractSection(hiText, 'विस्तृत उपचार विवरण', ['मुख्य लाभ', 'किन लोगों के लिए', 'हमें क्यों चुनें', 'Treatment Steps']);

  const benefitsHiRaw = extractSection(hiText, 'मुख्य लाभ (12)', ['किन लोगों के लिए उपयुक्त हो सकता है?', 'किन लोगों के लिए', 'हमें क्यों चुनें', 'Treatment Steps']);
  const benefitsHi = benefitsHiRaw ? benefitsHiRaw.split(/\s*•\s*/).map(s => s.trim()).filter(Boolean) : [];

  const whoCanBenefitHiRaw = extractSection(hiText, 'किन लोगों के लिए उपयुक्त हो सकता है? (8)', ['हमें क्यों चुनें', 'Treatment Steps']);
  const whoCanBenefitHi = whoCanBenefitHiRaw ? whoCanBenefitHiRaw.split(/\s*•\s*/).map(s => s.trim()).filter(Boolean) : [];

  const whyChooseUsHiRaw = extractSection(hiText, 'हमें क्यों चुनें? (5)', ['Treatment Steps']);
  const whyChooseUsHi = whyChooseUsHiRaw ? whyChooseUsHiRaw.split(/\s*•\s*/).map(s => s.trim()).filter(Boolean) : [];

  // Steps Hindi
  const processHi = [];
  for (let p = 1; p <= 4; p++) {
    const phaseRegex = new RegExp(`Phase ${p}:\\s*([^—\\r\\n]+)(?:—|--|-)\\s*([^\\r\\n]+(?:\\r?\\n(?!Phase|Antigravity)[^\\r\\n]+)*)`, 'i');
    const pm = hiText.match(phaseRegex);
    if (pm) {
      processHi.push({
        name: pm[1].trim(),
        description: pm[2].replace(/\r?\n/g, ' ').trim()
      });
    }
  }

  // Generate treatmentId slug
  let slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  // Check if existing item exists
  const existingItem = existingMap.get(title.toLowerCase().trim()) || 
                       existingMap.get(headerTitle.toLowerCase().trim());

  let image = '';
  let isMainCategory = false;
  if (existingItem) {
    slug = existingItem.treatmentId || slug;
    image = existingItem.image || '';
    isMainCategory = existingItem.isMainCategory || false;
  }

  // Items designated as main categories in existing system
  if ([7, 15, 21, 29, 33].includes(num)) {
    isMainCategory = true;
  }

  parsedTreatments.push({
    orderNumber: num,
    treatmentId: slug,
    title,
    titleHi,
    tagline,
    taglineHi,
    category: mappedCategory,
    isMainCategory,
    shortDescription,
    shortDescriptionHi,
    description,
    descriptionHi,
    benefits,
    benefitsHi,
    whoCanBenefit,
    whoCanBenefitHi,
    whyChooseUs,
    whyChooseUsHi,
    process,
    processHi,
    image,
    sequence: num
  });
});

fs.writeFileSync(path.join(__dirname, 'treatments_43_bilingual.json'), JSON.stringify(parsedTreatments, null, 2), 'utf8');
console.log(`Parsed ${parsedTreatments.length} treatments successfully!`);
