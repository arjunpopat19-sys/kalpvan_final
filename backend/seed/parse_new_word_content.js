const fs = require('fs');
const path = require('path');

const txt = fs.readFileSync(path.join(__dirname, 'new_word_content_raw.txt'), 'utf8');

const SLUG_MAP = {
  1: 'microdermabrasion',
  2: 'light-therapy',
  3: 'jet-peel',
  4: 'ultrasonic',
  5: 'ozone-face',
  6: 'galvanic-treatment',
  7: 'cat-hair',
  8: 'air-hair',
  9: 'ozone-hair',
  10: 'lllt',
  11: 'mesotherapy',
  12: 'prp',
  13: 'cat-panchkarma',
  14: 'vaman',
  15: 'virechan',
  16: 'basti',
  17: 'nasya',
  18: 'raktamokshan',
  19: 'cat-supportive',
  20: 'joint-basti',
  21: 'netra-tarpan',
  22: 'abhyanga',
  23: 'swedan',
  24: 'shirodhara',
  25: 'udwartan',
  26: 'cat-weightloss',
  27: 'fat-reduction',
  28: 'body-detox',
  29: 'metabolism-boost',
  30: 'cat-wellness',
  31: 'infertility',
  32: 'pcod',
  33: 'garbhasanskar',
  34: 'suvarnaprashan',
  35: 'stress-mgmt',
  36: 'rejuvenation',
  37: 'agnikarma',
  38: 'potli-massage',
  39: 'ayurvedic-hair-spa',
  40: 'pushyavarna-karma',
  41: 'pumsavana-karma',
  42: 'viddha-karma',
  43: 'microneedling-hair'
};

const CATEGORY_ASSIGN = {
  1: 'SKIN & ADVANCED FACIAL TREATMENTS',
  2: 'SKIN & ADVANCED FACIAL TREATMENTS',
  3: 'SKIN & ADVANCED FACIAL TREATMENTS',
  4: 'SKIN & ADVANCED FACIAL TREATMENTS',
  5: 'SKIN & ADVANCED FACIAL TREATMENTS',
  6: 'SKIN & ADVANCED FACIAL TREATMENTS',
  
  7: 'HAIR & SCALP TREATMENTS',
  8: 'HAIR & SCALP TREATMENTS',
  9: 'HAIR & SCALP TREATMENTS',
  10: 'HAIR & SCALP TREATMENTS',
  11: 'HAIR & SCALP TREATMENTS',
  12: 'HAIR & SCALP TREATMENTS',
  39: 'HAIR & SCALP TREATMENTS',
  43: 'HAIR & SCALP TREATMENTS',

  13: 'PANCHKARMA (MAIN DETOX THERAPIES)',
  14: 'PANCHKARMA (MAIN DETOX THERAPIES)',
  15: 'PANCHKARMA (MAIN DETOX THERAPIES)',
  16: 'PANCHKARMA (MAIN DETOX THERAPIES)',
  17: 'PANCHKARMA (MAIN DETOX THERAPIES)',
  18: 'PANCHKARMA (MAIN DETOX THERAPIES)',

  19: 'OTHER PANCHKARMA & SUPPORTIVE THERAPIES',
  20: 'OTHER PANCHKARMA & SUPPORTIVE THERAPIES',
  21: 'OTHER PANCHKARMA & SUPPORTIVE THERAPIES',
  22: 'OTHER PANCHKARMA & SUPPORTIVE THERAPIES',
  23: 'OTHER PANCHKARMA & SUPPORTIVE THERAPIES',
  24: 'OTHER PANCHKARMA & SUPPORTIVE THERAPIES',
  25: 'OTHER PANCHKARMA & SUPPORTIVE THERAPIES',
  37: 'OTHER PANCHKARMA & SUPPORTIVE THERAPIES',
  38: 'OTHER PANCHKARMA & SUPPORTIVE THERAPIES',
  40: 'OTHER PANCHKARMA & SUPPORTIVE THERAPIES',
  42: 'OTHER PANCHKARMA & SUPPORTIVE THERAPIES',

  26: 'WEIGHT LOSS & BODY DETOX',
  27: 'WEIGHT LOSS & BODY DETOX',
  28: 'WEIGHT LOSS & BODY DETOX',
  29: 'WEIGHT LOSS & BODY DETOX',

  30: 'WELLNESS, WOMEN & IMMUNITY CARE',
  31: 'WELLNESS, WOMEN & IMMUNITY CARE',
  32: 'WELLNESS, WOMEN & IMMUNITY CARE',
  33: 'WELLNESS, WOMEN & IMMUNITY CARE',
  34: 'WELLNESS, WOMEN & IMMUNITY CARE',
  35: 'WELLNESS, WOMEN & IMMUNITY CARE',
  36: 'WELLNESS, WOMEN & IMMUNITY CARE',
  41: 'WELLNESS, WOMEN & IMMUNITY CARE'
};

const MAIN_CATS = [7, 13, 19, 26, 30];

// Load existing images
let existingMap = new Map();
try {
  const existing = require('./treatments.json');
  existing.forEach(t => {
    existingMap.set(t.treatmentId, t);
  });
} catch (e) {}

// Find all start indexes of treatments
const regex = /(?:^|\r?\n)(\d+)\.\s+([^\r\n]+)\r?\nENGLISH/g;
let m;
const matches = [];
while ((m = regex.exec(txt)) !== null) {
  matches.push({
    index: m.index,
    num: parseInt(m[1], 10),
    title: m[2].trim()
  });
}

function extractSection(text, startLabel, endLabel) {
  const startRegex = new RegExp(`(?:^|\\r?\\n)\\s*\\d+\\.\\s*${startLabel}[^\\r\\n]*\\r?\\n`, 'i');
  const sm = text.match(startRegex);
  if (!sm) return '';
  const start = sm.index + sm[0].length;
  let end = text.length;
  if (endLabel) {
    const endRegex = new RegExp(`(?:^|\\r?\\n)\\s*\\d+\\.\\s*${endLabel}`, 'i');
    const em = text.substring(start).match(endRegex);
    if (em) {
      end = start + em.index;
    }
  }
  return text.substring(start, end).trim();
}

const parsedList = [];

for (let i = 0; i < matches.length; i++) {
  const current = matches[i];
  const next = matches[i + 1];
  const block = txt.substring(current.index, next ? next.index : txt.length);

  const engIdx = block.indexOf('ENGLISH');
  const hiIdx = block.indexOf('हिन्दी');

  const engPart = block.substring(engIdx, hiIdx);
  const hiPart = block.substring(hiIdx);

  // English
  const tName = extractSection(engPart, 'Treatment Name', 'Tagline') || current.title;
  const tagline = extractSection(engPart, 'Tagline', 'Short Description');
  const shortDesc = extractSection(engPart, 'Short Description', 'Full Treatment Description');
  const fullDesc = extractSection(engPart, 'Full Treatment Description', 'Key Benefits');
  const benefitsStr = extractSection(engPart, 'Key Benefits', 'Who Can Benefit');
  const whoCanStr = extractSection(engPart, 'Who Can Benefit', 'Why Choose Us');
  const whyUsStr = extractSection(engPart, 'Why Choose Us', 'Treatment Process');

  const benefits = benefitsStr.split(/,\s*/).map(s => s.trim().replace(/\r?\n/g, ' ')).filter(Boolean);
  const whoCanBenefit = whoCanStr.split(/,\s*/).map(s => s.trim().replace(/\r?\n/g, ' ')).filter(Boolean);
  const whyChooseUs = whyUsStr.split(/,\s*/).map(s => s.trim().replace(/\r?\n/g, ' ')).filter(Boolean);

  const process = [];
  for (let p = 1; p <= 4; p++) {
    const phaseRegex = new RegExp(`Phase ${p}:\\s*([^\\r\\n]+)\\r?\\n([^\\r\\n]+(?:\\r?\\n(?!Phase)[^\\r\\n]+)*)`, 'i');
    const pm = engPart.match(phaseRegex);
    if (pm) {
      process.push({
        name: pm[1].trim(),
        description: pm[2].replace(/\r?\n/g, ' ').trim()
      });
    }
  }

  // Hindi
  const tNameHi = extractSection(hiPart, 'उपचार का नाम', 'टैगलाइन');
  const taglineHi = extractSection(hiPart, 'टैगलाइन', 'संक्षिप्त विवरण');
  const shortDescHi = extractSection(hiPart, 'संक्षिप्त विवरण', 'उपचार का पूरा विवरण');
  const fullDescHi = extractSection(hiPart, 'उपचार का पूरा विवरण', 'मुख्य लाभ');
  const benefitsHiStr = extractSection(hiPart, 'मुख्य लाभ', 'किन लोगों को लाभ');
  const whoCanHiStr = extractSection(hiPart, 'किन लोगों को लाभ', 'हमें क्यों चुनें');
  const whyUsHiStr = extractSection(hiPart, 'हमें क्यों चुनें', 'उपचार प्रक्रिया');

  const benefitsHi = benefitsHiStr.split(/,\s*/).map(s => s.trim().replace(/\r?\n/g, ' ')).filter(Boolean);
  const whoCanBenefitHi = whoCanHiStr.split(/,\s*/).map(s => s.trim().replace(/\r?\n/g, ' ')).filter(Boolean);
  const whyChooseUsHi = whyUsHiStr.split(/,\s*/).map(s => s.trim().replace(/\r?\n/g, ' ')).filter(Boolean);

  const processHi = [];
  for (let p = 1; p <= 4; p++) {
    const charanRegex = new RegExp(`(?:चरण|Phase)\\s*${p}:\\s*([^\\r\\n]+)\\r?\\n([^\\r\\n]+(?:\\r?\\n(?!(?:चरण|Phase))[^\\r\\n]+)*)`, 'i');
    const cm = hiPart.match(charanRegex);
    if (cm) {
      processHi.push({
        name: cm[1].trim(),
        description: cm[2].replace(/\r?\n/g, ' ').trim()
      });
    }
  }

  const slug = SLUG_MAP[current.num] || tName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const category = CATEGORY_ASSIGN[current.num] || 'GENERAL AYURVEDIC';
  const isMainCategory = MAIN_CATS.includes(current.num);

  const existingItem = existingMap.get(slug);
  const image = existingItem ? existingItem.image || '' : '';

  parsedList.push({
    orderNumber: current.num,
    treatmentId: slug,
    title: tName,
    titleHi: tNameHi,
    tagline,
    taglineHi,
    category,
    isMainCategory,
    shortDescription: shortDesc,
    shortDescriptionHi: shortDescHi,
    description: fullDesc,
    descriptionHi: fullDescHi,
    benefits,
    benefitsHi,
    whoCanBenefit,
    whoCanBenefitHi,
    whyChooseUs,
    whyChooseUsHi,
    process,
    processHi,
    image,
    sequence: current.num
  });
}

fs.writeFileSync(path.join(__dirname, 'treatments_43_updated.json'), JSON.stringify(parsedList, null, 2), 'utf8');
console.log(`Successfully generated treatments_43_updated.json with ${parsedList.length} treatments!`);
