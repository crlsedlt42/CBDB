const express = require('express'); // Import express
const passport = require('passport'); // Import the passport
const bodyParser = require('body-parser'); // Import body-parser
const session = require('express-session'); // Import session
const LocalStrategy = require('passport-local').Strategy; // Import LocalStrategy
const app = express(); // Initialize app
exports.app = app;
const PORT = process.env.PORT || 5000; // Set port to 5000


//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize()); // Initialize passport

//passport config
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//database synchronization

sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables synchronized!')
})
.catch(err => {
    console.log('Error syncing!', err)
});

//authentication route
app.post('/login', passport.authenticate('local'), (req, res) => {
//authentication has been successful, return user data 
    res.status(200).json({message: 'success', user: req.user});
});

//logout route
app.get('/api/logout', (req, res) => {
    req.logout();
    res.status(200).json({message: 'success'});
});

//ensure auth middleware
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status(401).json({message: 'Unauthorized'});
    }
}

//protected route
app.get('/api/protected', ensureAuthenticated, (req, res) => {
    res.status(200).json({message: 'This route is protected!'});
});

//start server 
app.listen(PORT, () => {
    console.log(`Server is on port ${5000}`);
})






















const User = require('./user');
const Review = require('./review');
const sequelize = require('../config/connection');

User.hasMany(Review, {
 foreignKey: 'user_id',
 onDelete: 'CASCADE'   
});

Review.belongsTo(User, {
    foreignKey: 'user_id',   
})
module.exports = { User };