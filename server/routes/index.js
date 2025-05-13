const authRoutes = require('./auth.routes');
const taskRoutes = require('./task.routes');

module.exports = (app) => {
  app.use('/api/auth', authRoutes);
  app.use('/api/tasks', taskRoutes);
};
