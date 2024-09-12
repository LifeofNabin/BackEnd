const express = require('express');
const app = express();

// Middleware function
app.use((req, res, next) => {
  console.log('Request received:', req.method, req.url);
  next(); // Pass control to the next middleware function
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
