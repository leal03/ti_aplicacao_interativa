const Workout = require('../models/Workout');

exports.createWorkout = async (req, res) => {
  try {
    const workout = await Workout.create(req.body);
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.findAll();
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
