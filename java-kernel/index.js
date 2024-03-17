const express = require('express');
const bodyParser = require('body-parser');
const highlighter = require('./highlighter'); // Import highlighter function
const { execSync } = require('child_process');

const app = express();
const port = 3000;

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname));

// Define route handler for executing code
app.post('/execute', (req, res) => {
  const { language, code } = req.body;

  try {
    // Validate language
    if (!language || !['java', 'python', 'javascript'].includes(language)) {
      throw new Error('Invalid language specified');
    }

    // Execute code (replace with your actual code execution logic)
    let output;
    if (language === 'java') {
      output = execSync(`java -cp . Main`, { input: code }).toString();
    } else if (language === 'python') {
      output = execSync(`python -c "${code}"`).toString();
    } else if (language === 'javascript') {
      output = execSync(`node -e "${code}"`).toString();
    }

    res.send(highlighter(output, language)); // Highlight code before sending to client
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});