const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const user = require('./user');
const movie = require('./movie');

class Review extends Model {
  }

// Initialize Review model
Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    review_txt: {
      type: DataTypes.STRING,
      allowNull: false,
      varchar: 140
    },
    user_id: {
      type: DataTypes.INTEGER,
      refrences:{
        model: user,
        key:'id'
      }
    },

    movie_id: {
      type: DataTypes.INTEGER,
      refrences:{
        model: movie,
        key:'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'review',
  }
);

module.exports = Review;
