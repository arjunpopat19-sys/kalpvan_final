const Setting = require('../models/Setting');
const Media = require('../models/Media');
const path = require('path');
const fs = require('fs');

// Get a setting by key
const getSetting = async (req, res) => {
    try {
        const { key } = req.params;
        const setting = await Setting.findOne({ key });
        if (!setting) {
            return res.status(404).json({ message: 'Setting not found' });
        }
        res.json(setting);
    } catch (error) {
        console.error("Error fetching setting", error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Upload doctor image and update setting
const uploadDoctorImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        const filePath = `/uploads/${req.file.filename}`;

        // Save uploaded doctor image to MongoDB Atlas Media collection
        try {
            const fileBuffer = fs.readFileSync(req.file.path);
            await Media.findOneAndUpdate(
                { filename: req.file.filename },
                {
                    filename: req.file.filename,
                    data: fileBuffer,
                    contentType: req.file.mimetype || 'image/jpeg',
                    size: req.file.size,
                    uploadedAt: new Date()
                },
                { upsert: true, returnDocument: 'after' }
            );
            console.log(`✅ Doctor image saved to MongoDB Atlas: ${req.file.filename}`);
        } catch (mediaErr) {
            console.error('⚠️ Error saving doctor image to Atlas Media:', mediaErr.message);
        }
        
        // Find if setting exists
        let setting = await Setting.findOne({ key: 'homePageDoctorImage' });
        
        if (setting) {
            // Delete old file if it exists
            const oldFilePath = path.join(__dirname, '..', setting.value);
            if (fs.existsSync(oldFilePath)) {
                try {
                    fs.unlinkSync(oldFilePath);
                } catch (e) {}
            }
            const oldFilename = path.basename(setting.value);
            if (oldFilename && oldFilename !== req.file.filename) {
                await Media.deleteOne({ filename: oldFilename }).catch(() => {});
            }

            setting.value = filePath;
            await setting.save();
        } else {
            setting = await Setting.create({ key: 'homePageDoctorImage', value: filePath });
        }
        
        res.json({ message: 'Image uploaded successfully', setting });
    } catch (error) {
        console.error("Error uploading image", error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getSetting,
    uploadDoctorImage
};
