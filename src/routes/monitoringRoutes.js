const express = require('express');
const monitoringController = require('../controllers/monitoringController');

const router = express.Router();

router.get('/workouts', monitoringController.getWorkouts);
router.get('/food-plans', monitoringController.getFoodPlans);

module.exports = router;
