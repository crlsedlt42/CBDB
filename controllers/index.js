// Initialize router and set up routes
const router = require('express').Router();

// Import all of the API routes from /api/index.js
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api'); 

// '/' is the endpoint and homeRoutes is the router object
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Exporting router object
module.exports = router;