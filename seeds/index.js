const sequelize = require('../config/connection');
const seedReview = require('./reviewData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedReview();

  process.exit(0);
};

seedAll();
