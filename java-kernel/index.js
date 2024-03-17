// index.js
const express = require('express');
const bodyParser = require('body-parser');
const highlightCode = require('./highlighter'); // Import highlighter function
const { execSync } = require('child_process');

const app = express();
const port = 3000;

app.use(bodyParser.text());

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Define route handler for executing code
app.post('/execute', (req, res) => {
  const code = req.body;
  try {
    // Execute code (replace with your actual code execution logic)
    const output = execSync(`java -cp . Main`, { input: code }).toString();
    res.send(highlightCode(output)); // Highlight code before sending to client
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
