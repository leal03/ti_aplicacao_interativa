const FoodPlan = require('../models/FoodPlan');

exports.createFoodPlan = async (req, res) => {
  try {
    const foodPlan = await FoodPlan.create(req.body);
    res.status(201).json(foodPlan);
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
