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

exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.findAll();
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    await Workout.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
