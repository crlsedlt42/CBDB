const User = require('./user');
const Review = require('./review');
const Movie = require('./movie');

User.hasMany(Review,{

  // foreignKey:'user_id',
  // onDelete:'CASCADE' -- Deletes all reviews by user if user is deleted
  onDelete:'CASCADE'
});

Review.belongsTo(User, {
  foreignKey:'user_id'
})

Movie.hasMany(Review)

Review.belongsTo(Movie,{
  foreignKey:'movie_id'
})

// Package two models and export them as an object so we can import them together and use their proper names
module.exports = { User, Review, Movie };