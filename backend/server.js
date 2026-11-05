const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const path = require('path');
require('dotenv').config();

const User = require('./models/User');
const Media = require('./models/Media');

for (const name of ['JWT_SECRET', 'MONGO_URI']) {
    if (!process.env[name]) {
        console.error(`❌ ${name} is not set`);
        process.exit(1);
    }
}

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/api/health', (req, res) => {
    const connected = mongoose.connection.readyState === 1;
    res.status(connected ? 200 : 503).json({ status: connected ? 'ok' : 'down', db: connected ? 'connected' : 'disconnected' });
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/appointments', require('./routes/appointmentRoutes'));
app.use('/api/reviews', require('./routes/reviewRoutes'));
app.use('/api/treatments', require('./routes/treatmentRoutes'));
app.use('/api/patients', require('./routes/patientRoutes'));
app.use('/api/medicines', require('./routes/medicineRoutes'));
app.use('/api/records', require('./routes/recordRoutes'));
app.use('/api/bills', require('./routes/billRoutes'));
app.use('/api/settings', require('./routes/settingRoutes'));

// Stream uploads from MongoDB Atlas Media collection with local cache fallback
app.get('/uploads/:filename', async (req, res) => {
    try {
        const filename = decodeURIComponent(req.params.filename);
        const localPath = path.join(__dirname, 'uploads', filename);

        // If present on local disk, serve it with long cache
        if (fs.existsSync(localPath)) {
            res.setHeader('Cache-Control', 'public, max-age=2592000, immutable');
            return res.sendFile(localPath);
        }

        // If a webp version exists on disk for png, serve it
        if (filename.toLowerCase().endsWith('.png')) {
            const webpPath = path.join(__dirname, 'uploads', filename.slice(0, -4) + '.webp');
            if (fs.existsSync(webpPath)) {
                res.setHeader('Cache-Control', 'public, max-age=2592000, immutable');
                return res.sendFile(webpPath);
            }
        }

        // Otherwise stream directly from MongoDB Atlas Media collection
        const media = await Media.findOne({ filename });
        if (media && media.data) {
            res.setHeader('Content-Type', media.contentType || 'image/png');
            res.setHeader('Content-Length', media.data.length);
            res.setHeader('Cache-Control', 'public, max-age=2592000, immutable');
            return res.end(media.data);
        }

        return res.status(404).send('Image not found');
    } catch (err) {
        console.error('Error serving upload:', err.message);
        return res.status(500).send('Error serving image');
    }
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Unknown API paths get a JSON 404 (not the SPA page below)
app.use('/api', (req, res) => res.status(404).json({ message: 'Not found' }));

// Serve the built React app (frontend/dist) from the same origin; the fallback is for React Router
const dist = path.join(__dirname, '../frontend/dist');
app.use(express.static(dist));
app.get('/{*splat}', (req, res) => res.sendFile(path.join(dist, 'index.html')));

const ensureDefaultAdmin = async () => {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@kalpvan.com';
    const adminPassword = process.env.ADMIN_PASSWORD;
    const adminName = process.env.ADMIN_NAME || 'Admin';

    const existingAdmin = await User.findOne({ email: adminEmail });
    if (existingAdmin) {
        console.log('ℹ️ Default admin already present');
        return;
    }

    if (!adminPassword) {
        console.warn('⚠️ No admin exists and ADMIN_PASSWORD is not set; skipping admin creation');
        return;
    }

    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    await User.create({
        name: adminName,
        email: adminEmail,
        password: hashedPassword,
        role: 'admin'
    });
    console.log('✅ Default admin user created');
};

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Connected to MongoDB');
        try {
            await ensureDefaultAdmin();
        } catch (seedError) {
            console.error('⚠️ Unable to seed default admin:', seedError.message);
        }
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error.message);
        process.exitCode = 1;
    }
};

startServer();
