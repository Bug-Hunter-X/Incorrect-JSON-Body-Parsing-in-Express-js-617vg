const express = require('express');
const app = express();
// Middleware to parse JSON request body
app.use(express.json());
app.post('/data', (req, res) => {
  console.log(req.body); 
  res.send('Data received');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});