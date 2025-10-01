// ../MiddleWares/Auth.js
const jwt = require('jsonwebtoken');

// Fixed the typo here
const ensureAuthenticated = (req, res, next) => {
    console.log("Ensuring authentication...");

    const auth = req.header('authorization'); // Make sure this is the correct header name
    if (!auth) {
        return res.status(403).json({ message: 'Unauthorized token, JWT token is required' });
    }

    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET); // Fixed typo 'proccess' to 'process'
        req.user = decoded; // Attach decoded user to the request
        next(); // Call the next middleware or route handler
    } catch (err) {
        res.status(400).json({ message: 'Unauthorized token, or expired token' });
    }
};

module.exports = { ensureAuthenticated }; // Export properly
