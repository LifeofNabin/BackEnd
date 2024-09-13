const express = require('express');
const app = express();

// Middleware function 1
app.use((req, res, next) => {
  console.log('Middleware 1');
  next(); // Passes control to the next middleware function
});

// Middleware function 2
app.use((req, res, next) => {
  console.log('Middleware 2');
  next(); // Passes control to the next middleware function
});

// Route handler
app.get('/', (req, res) => {
  res.send('Hello from the route handler!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
