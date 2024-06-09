const express = require('express');
const foodPlanController = require('../controllers/foodPlanController');

const router = express.Router();

router.post('/food-plans', foodPlanController.createFoodPlan);
router.get('/food-plans', foodPlanController.getFoodPlans);

module.exports = router;
