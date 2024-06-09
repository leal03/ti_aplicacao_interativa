const Workout = require('../models/Workout');
const FoodPlan = require('../models/FoodPlan');

exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.findAll();
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getFoodPlans = async (req, res) => {
  try {
    const foodPlans = await FoodPlan.findAll();
    res.status(200).json(foodPlans);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
