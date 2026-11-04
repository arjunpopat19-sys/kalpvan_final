/**
 * Safe Database Update Script
 * 1. Backs up existing treatments to a timestamped JSON file.
 * 2. Updates / Inserts all 43 bilingual treatments without losing images or relationships.
 * 3. Does not run until explicitly executed.
 */
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const Treatment = require('../models/Treatment');

async function applyTreatments() {
  if (!process.env.MONGO_URI) {
    console.error('❌ MONGO_URI is missing in .env');
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // 1. Create a safety backup
    const existing = await Treatment.find({});
    const backupPath = path.join(__dirname, `treatments_backup_${Date.now()}.json`);
    fs.writeFileSync(backupPath, JSON.stringify(existing, null, 2), 'utf8');
    console.log(`📦 Safety backup created at: ${backupPath} (${existing.length} records)`);

    // 2. Load the 43 parsed bilingual treatments
    const newTreatments = require('./treatments_43_bilingual.json');
    console.log(`🚀 Applying ${newTreatments.length} treatments...`);

    let updatedCount = 0;
    let insertedCount = 0;

    for (const t of newTreatments) {
      const filter = { treatmentId: t.treatmentId };
      const existingDoc = await Treatment.findOne(filter);

      // Preserve image from existing doc if already set
      if (existingDoc && existingDoc.image && !t.image) {
        t.image = existingDoc.image;
      }

      const updateData = {
        title: t.title,
        titleHi: t.titleHi,
        category: t.category,
        isMainCategory: t.isMainCategory,
        shortDescription: t.shortDescription,
        shortDescriptionHi: t.shortDescriptionHi,
        description: t.description,
        descriptionHi: t.descriptionHi,
        benefits: t.benefits,
        benefitsHi: t.benefitsHi,
        whoCanBenefit: t.whoCanBenefit,
        whoCanBenefitHi: t.whoCanBenefitHi,
        whyChooseUs: t.whyChooseUs,
        whyChooseUsHi: t.whyChooseUsHi,
        process: t.process,
        processHi: t.processHi,
        sequence: t.sequence,
        ...(t.image ? { image: t.image } : {})
      };

      const res = await Treatment.findOneAndUpdate(
        filter,
        { $set: updateData },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );

      if (existingDoc) {
        updatedCount++;
      } else {
        insertedCount++;
      }
    }

    console.log(`🎉 Completed! Updated: ${updatedCount}, Inserted: ${insertedCount}`);
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('❌ Error during update:', err);
    process.exit(1);
  }
}

// Only run if called directly
if (require.main === module) {
  applyTreatments();
}

module.exports = { applyTreatments };
