const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Sets up session and connect to our Sequelize db
const sess = {
  secret: 'Super secret secret',
  // express session uses cookies to keep track of our session
  cookie: {
    maxAge: 15 * 60 * 1000, //expires after 15 minutes
    httpOnly: true, //cookie is not accessible via client side JS
    secure: false, //cookie is only sent to the server with an encrypted request over the HTTPS protocol
    sameSite: 'strict', 
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store using sequelize with the express-session package
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess)); //session middleware

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Parse incoming JSON data from req.body in the browser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// setting up directory for static assets and creates a route to serve the files in the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
