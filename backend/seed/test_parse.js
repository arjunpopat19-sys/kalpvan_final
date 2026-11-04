const fs = require('fs');
const path = require('path');

const txt = fs.readFileSync(path.join(__dirname, 'new_word_content_raw.txt'), 'utf8');

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

const treatments = [];

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

for (let i = 0; i < matches.length; i++) {
  const current = matches[i];
  const next = matches[i + 1];
  const block = txt.substring(current.index, next ? next.index : txt.length);

  const engIdx = block.indexOf('ENGLISH');
  const hiIdx = block.indexOf('हिन्दी');

  const engPart = block.substring(engIdx, hiIdx);
  const hiPart = block.substring(hiIdx);

  // English
  const tName = extractSection(engPart, 'Treatment Name', 'Tagline');
  const tagline = extractSection(engPart, 'Tagline', 'Short Description');
  const shortDesc = extractSection(engPart, 'Short Description', 'Full Treatment Description');
  const fullDesc = extractSection(engPart, 'Full Treatment Description', 'Key Benefits');
  const benefitsStr = extractSection(engPart, 'Key Benefits', 'Who Can Benefit');
  const whoCanStr = extractSection(engPart, 'Who Can Benefit', 'Why Choose Us');
  const whyUsStr = extractSection(engPart, 'Why Choose Us', 'Treatment Process');
  const processStr = extractSection(engPart, 'Treatment Process', null);

  // Hindi
  const tNameHi = extractSection(hiPart, 'उपचार का नाम', 'टैगलाइन');
  const taglineHi = extractSection(hiPart, 'टैगलाइन', 'संक्षिप्त विवरण');
  const shortDescHi = extractSection(hiPart, 'संक्षिप्त विवरण', 'उपचार का पूरा विवरण');
  const fullDescHi = extractSection(hiPart, 'उपचार का पूरा विवरण', 'मुख्य लाभ');
  const benefitsHiStr = extractSection(hiPart, 'मुख्य लाभ', 'किन लोगों को लाभ');
  const whoCanHiStr = extractSection(hiPart, 'किन लोगों को लाभ', 'हमें क्यों चुनें');
  const whyUsHiStr = extractSection(hiPart, 'हमें क्यों चुनें', 'उपचार प्रक्रिया');
  const processHiStr = extractSection(hiPart, 'उपचार प्रक्रिया', null);

  treatments.push({
    num: current.num,
    headerTitle: current.title,
    tName,
    tagline,
    shortDescLen: shortDesc.length,
    fullDescLen: fullDesc.length,
    benefitsCount: benefitsStr.split(/,\s*/).filter(Boolean).length,
    whoCanCount: whoCanStr.split(/,\s*/).filter(Boolean).length,
    whyUsCount: whyUsStr.split(/,\s*/).filter(Boolean).length,
    tNameHi,
    taglineHi,
    shortDescHiLen: shortDescHi.length,
    fullDescHiLen: fullDescHi.length,
    benefitsHiCount: benefitsHiStr.split(/,\s*/).filter(Boolean).length,
    whoCanHiCount: whoCanHiStr.split(/,\s*/).filter(Boolean).length,
    whyUsHiCount: whyUsHiStr.split(/,\s*/).filter(Boolean).length
  });
}

console.log(`Parsed ${treatments.length} treatments`);
console.log('Sample item #1:');
console.log(treatments[0]);
console.log('Sample item #43:');
console.log(treatments[42]);
