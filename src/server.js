const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const foodPlanRoutes = require('./routes/foodPlanRoutes');
const workoutRoutes = require('./routes/workoutRoutes');
const authRoutes = require('./routes/authRoutes');
const monitoringRoutes = require('./routes/monitoringRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use('/api', foodPlanRoutes);
app.use('/api', workoutRoutes);
app.use('/api', authRoutes);
app.use('/api', monitoringRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
