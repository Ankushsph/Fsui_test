const express = require('express');
const { mongoose } = require('./config/db');
const routes = require('./routes');

const app = express();
app.use(express.json());

// Database connection
require('./config/db');

// Register routes
routes(app);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
