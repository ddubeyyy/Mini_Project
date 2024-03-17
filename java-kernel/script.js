// script.js

// Define addCellButton by selecting the button element with id 'add-cell'
const addCellButton = document.getElementById('add-cell');

// Function to add a new code cell
function addCell() {
    const cell = document.createElement('div');
    cell.className = 'cell';

    const codeArea = document.createElement('textarea');
    codeArea.className = 'code';
    codeArea.placeholder = 'Enter Java code here...';
    cell.appendChild(codeArea);

    const executionBlock = document.createElement('div');
    executionBlock.className = 'execution-block';
    const executeButton = document.createElement('button');
    executeButton.textContent = 'Execute';
    executionBlock.appendChild(executeButton);
    cell.appendChild(executionBlock);

    const outputArea = document.createElement('div');
    outputArea.className = 'output';
    cell.appendChild(outputArea);

    cellContainer.appendChild(cell);

    // Set up CodeMirror for syntax highlighting
    const editor = CodeMirror.fromTextArea(codeArea, {
        lineNumbers: true,
        mode: 'text/x-java', // Set mode to Java for syntax highlighting
        theme: 'default'
    });

    // Add event listener to execute code when execute button is clicked
    executeButton.addEventListener('click', () => {
        executeCode(editor, outputArea);
    });

    // Add event listener to execute code when code is changed
    editor.on('change', () => {
        executeCode(editor, outputArea);
    });
}

// Event listener for add cell button
// Ensure that addCellButton is defined before adding the event listener
if (addCellButton) {
    addCellButton.addEventListener('click', addCell);
}

// Add initial cell when page loads
addCell();
