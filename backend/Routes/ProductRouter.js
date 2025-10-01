const router = require('express').Router();
const { ensureAuthenticated } = require('../MiddleWares/Auth');  // Ensure correct spelling of the middleware

// Define a route that requires authentication middleware
router.get('/', ensureAuthenticated, (req, res) => {
    res.status(200).json([
        {
            name: 'mobile',
            price: 2000
        },
        {
            name: 'tv',
            price: 40000
        }
    ]);
});

// Export the router correctly
module.exports = router;
