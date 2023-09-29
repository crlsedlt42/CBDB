const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {} 

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
    reviewText: {
      type: DataTypes.STRING,
      allowNull: false, 
        
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = Review;
