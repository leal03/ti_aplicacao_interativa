const FoodPlan = require('../models/FoodPlan');

exports.createFoodPlan = async (req, res) => {
  try {
    const { foodType, mealsPerDay, supplements, frequentFoods } = req.body;
    const foodPlan = await FoodPlan.create({ foodType, mealsPerDay, supplements, frequentFoods });
    res.status(201).json({ message: 'Plano alimentar cadastrado com sucesso', foodPlan });
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
