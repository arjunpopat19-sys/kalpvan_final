// Re-numbers `sequence`: main categories 1..n in CATEGORY_ORDER, sub-treatments 1..n per category (by title).
// usage: node final_seq.js   (reads MONGO_URI from .env)
require('dotenv').config();
const mongoose = require('mongoose');

const CATEGORY_ORDER = [
    'SKIN & ADVANCED FACIAL TREATMENTS',
    'HAIR & SCALP TREATMENTS',
    'PANCHKARMA (MAIN DETOX THERAPIES)',
    'OTHER PANCHKARMA & SUPPORTIVE THERAPIES',
    'WEIGHT LOSS & BODY DETOX',
    'WELLNESS, WOMEN & IMMUNITY CARE'
];

const setSeq = (t, sequence) => ({ updateOne: { filter: { _id: t._id }, update: { $set: { sequence } } } });

(async () => {
    await mongoose.connect(process.env.MONGO_URI);
    const col = mongoose.connection.db.collection('treatments');
    const treatments = await col.find({}).toArray();

    const ops = treatments.filter(t => t.isMainCategory).map(t => setSeq(t, CATEGORY_ORDER.indexOf(t.category) + 1));
    for (const cat of CATEGORY_ORDER) {
        treatments
            .filter(t => t.category === cat && !t.isMainCategory)
            .sort((a, b) => a.title.localeCompare(b.title))
            .forEach((t, i) => ops.push(setSeq(t, i + 1)));
    }

    if (ops.length) await col.bulkWrite(ops);
    console.log(`Updated sequence on ${ops.length} treatments`);
    await mongoose.disconnect();
})().catch(err => { console.error(err); process.exit(1); });
