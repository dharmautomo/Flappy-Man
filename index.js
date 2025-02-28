
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static(__dirname));

// Route for the game
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'game.html'));
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Game server running at http://0.0.0.0:${port}`);
});
