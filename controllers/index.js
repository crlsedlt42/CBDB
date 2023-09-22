const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const sequelize = require('./config/database'); // Import sequelize
const User = require('./models/user'); // Import user model
const apiRoutes =  require('./routes/api'); // Import all of the API routes

const app = express();
const PORT = process.env.PORT || 3000; // Default PORT





// // Initialize router and set up routes
// const router = require('express').Router();

// // Import all of the API routes from /api/index.js
// const homeRoutes = require('./homeRoutes');


// // '/' is the endpoint and homeRoutes is the router object
// router.use('/', homeRoutes);

// // Exporting router object
// module.exports = router;