const express = require('express');
const workoutController = require('../controllers/workoutController');

const router = express.Router();

router.post('/workouts', workoutController.createWorkout);

module.exports = router;
