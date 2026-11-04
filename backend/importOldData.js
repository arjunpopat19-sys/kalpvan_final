// One-off: load a mongoexport JSON file into an EMPTY collection. Never overwrites existing data.
// usage: node importOldData.js <file.json> <collection>
//   e.g. node importOldData.js "../../Kalpavan Old Data/kalpvan.treatments2.json" treatments
require('dotenv').config();
const fs = require('fs');
const mongoose = require('mongoose');
const { EJSON } = mongoose.mongo.BSON; // understands {"$oid":..} / {"$date":..}

(async () => {
    const [file, name] = process.argv.slice(2);
    if (!file || !name) throw new Error('usage: node importOldData.js <file.json> <collection>');

    const docs = EJSON.parse(fs.readFileSync(file, 'utf8'));
    if (!docs.length) throw new Error(`${file} has no documents`);

    await mongoose.connect(process.env.MONGO_URI);
    const col = mongoose.connection.db.collection(name);
    const existing = await col.countDocuments();
    if (existing) throw new Error(`${name} already has ${existing} documents; refusing to import`);

    await col.insertMany(docs);
    console.log(`Imported ${docs.length} documents into ${name}`);
    await mongoose.disconnect();
})().catch(err => { console.error('❌', err.message); process.exit(1); });
