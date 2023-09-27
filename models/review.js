const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
    movieName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviewTxt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      refrences:{
        model:'user',
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
