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
  supplements: {
    type: DataTypes.STRING, // Corrigido para aceitar string
    allowNull: false,
  },
  frequentFoods: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'foodplans', // especifica o nome da tabela
  timestamps: true
});

module.exports = FoodPlan;
