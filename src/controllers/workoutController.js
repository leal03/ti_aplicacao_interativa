const Workout = require('../models/Workout');

exports.createWorkout = async (req, res) => {
  try {
    const { workoutType, duration, quantity, exercises } = req.body;
    const workout = await Workout.create({ workoutType, duration, quantity, exercises });
    res.status(201).json({ message: 'Treino cadastrado com sucesso', workout });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
