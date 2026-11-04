const mongoose = require('mongoose');

const billItemSchema = new mongoose.Schema({
    description: { type: String, required: true, trim: true },
    quantity: { type: Number, required: true, min: 0 },
    rate: { type: Number, required: true, min: 0 },
    amount: { type: Number, required: true, min: 0 }
}, { _id: false });

const billSchema = new mongoose.Schema({
    patientName: { type: String, required: [true, 'Patient name is required'], trim: true },
    phone: { type: String, trim: true, default: '' },
    date: { type: String, required: [true, 'Date is required'] },
    items: {
        type: [billItemSchema],
        validate: [(items) => items.length > 0, 'Add at least one item']
    },
    total: { type: Number, required: true, min: 0 }
}, { timestamps: true });

billSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (_, ret) => {
        ret.id = ret._id;
        delete ret._id;
    }
});

module.exports = mongoose.model('Bill', billSchema);
