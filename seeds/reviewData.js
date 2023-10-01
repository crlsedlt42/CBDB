const sequelize = require('../config/connection');
const { User, Review } = require('../models');

const userData = require('./userData.json');
const reviewData = require('./reviewData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  //userData is an array of objects, each object is a user
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  //This is an array of objects, each object is a review
  for (const review of reviewData) {
    await Review.create({
      ...review,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      
    });
  }

  process.exit(0);
};

seedDatabase();
