const express = require('express');
const foodPlanController = require('../controllers/foodPlanController');

const router = express.Router();

router.post('/foodplans', foodPlanController.createFoodPlan);
router.get('/foodplans', foodPlanController.getFoodPlans);

module.exports = router;
