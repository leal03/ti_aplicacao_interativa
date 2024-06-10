const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Workout = sequelize.define('Workout', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  workoutType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  exercises: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'workouts', // especifica o nome da tabela
  timestamps: true
});

module.exports = Workout;
