const express = require('express');
const workoutController = require('../controllers/workoutController');

const router = express.Router();

router.post('/workouts', workoutController.createWorkout);
router.get('/workouts', workoutController.getWorkouts);
router.delete('/workouts/:id', workoutController.deleteWorkout);

module.exports = router;
