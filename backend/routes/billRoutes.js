const express = require('express');
const router = express.Router();
const Bill = require('../models/Bill');
const { protect, requireAdmin } = require('../middleware/authMiddleware');

router.use(protect, requireAdmin);

router.get('/', async (req, res) => {
    try {
        res.json(await Bill.find().sort({ date: -1, createdAt: -1 }));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Amounts and total are computed here, so a client can't store a total that disagrees with the items.
router.post('/', async (req, res) => {
    try {
        const { patientName, phone, date, items = [] } = req.body;
        const lines = items.map(({ description, quantity, rate }) => ({
            description, quantity, rate, amount: Number(quantity) * Number(rate)
        }));
        const total = lines.reduce((sum, line) => sum + line.amount, 0);
        res.status(201).json(await Bill.create({ patientName, phone, date, items: lines, total }));
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Bill.findByIdAndDelete(req.params.id);
        res.json({ message: 'Bill deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
