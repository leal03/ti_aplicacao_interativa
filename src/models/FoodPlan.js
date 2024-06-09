const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const FoodPlan = sequelize.define('FoodPlan', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  foodType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mealsPerDay: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  supplementation: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  frequentFoods: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = FoodPlan;
