const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Favorite extends Model {}

Favorite.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    overview: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    collection: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Favorite',
  }
);

module.exports = Favorite;
