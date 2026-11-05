const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const {
    getTreatments,
    getMainCategories,
    getSubTreatmentsByCategory,
    getTreatmentById,
    createTreatment,
    updateTreatment,
    deleteTreatment,
    reorderTreatments
} = require('../controllers/treatmentController');
const { protect, requireAdmin } = require('../middleware/authMiddleware');
const Media = require('../models/Media');

// Configure multer for treatment image upload
const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, 'treatment-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|webp|avif/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Images only (jpeg, jpg, png, webp, avif)'));
        }
    }
});

// POST upload treatment image
router.post('/upload-image', protect, requireAdmin, upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

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
        console.log(`✅ Treatment image saved to MongoDB Atlas: ${req.file.filename}`);
    } catch (err) {
        console.error('⚠️ Error saving treatment image to MongoDB Atlas:', err.message);
    }

    const imageUrl = `/uploads/${req.file.filename}`;
    res.json({ message: 'Image uploaded successfully', imageUrl });
});

// GET all treatments | POST create new
router.route('/')
    .get(getTreatments)
    .post(protect, requireAdmin, createTreatment);

// GET only main category treatments (for homepage)
router.get('/main-categories', getMainCategories);

// GET sub-treatments by category name
router.get('/category/:category', getSubTreatmentsByCategory);

// GET single treatment by treatmentId (custom string ID)
router.get('/by-treatment-id/:id', getTreatmentById);

// PUT batch reorder treatments (drag-and-drop & category transfer)
router.put('/reorder', protect, requireAdmin, reorderTreatments);

// PUT update | DELETE remove by MongoDB _id
router.route('/:id')
    .put(protect, requireAdmin, updateTreatment)
    .delete(protect, requireAdmin, deleteTreatment);

module.exports = router;
