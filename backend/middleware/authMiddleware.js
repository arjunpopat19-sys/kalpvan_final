const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        token = req.headers.authorization.split(' ')[1];
        if (token) {
            token = token.replace(/^["']|["']$/g, '');
        }
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, token missing' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        let user = null;

        // 1. Try finding by ID
        if (decoded.id) {
            user = await User.findById(decoded.id).select('-password');
        }

        // 2. Migration fallback: If ID not found, look up by email
        if (!user && decoded.email) {
            user = await User.findOne({ email: decoded.email }).select('-password');
        }

        // 3. Admin migration fallback: If token was signed for admin, map to database admin
        if (!user && decoded.role === 'admin') {
            user = await User.findOne({ role: 'admin' }).select('-password');
        }

        if (!user) {
            return res.status(401).json({ message: 'User no longer exists. Please log in again.' });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error("Auth Middleware Error:", error.message);
        res.status(401).json({ message: 'Not authorized, session expired: ' + error.message });
    }
};

const requireAdmin = (req, res, next) => {
    if (req.user?.role !== 'admin') {
        return res.status(403).json({ message: 'Admin access required' });
    }
    next();
};

module.exports = { protect, requireAdmin };
