const FoodPlan = require('../models/FoodPlan');

exports.createFoodPlan = async (req, res) => {
  console.log('Requisição recebida:', req.body); // Adicione este log para depuração
  try {
    const { foodType, mealsPerDay, supplements, frequentFoods } = req.body;
    const foodPlan = await FoodPlan.create({ foodType, mealsPerDay, supplements, frequentFoods });
    res.status(201).json({ message: 'Plano alimentar cadastrado com sucesso', foodPlan });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
