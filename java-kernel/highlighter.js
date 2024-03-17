// highlighter.js
const hljs = require('highlight.js');

function highlightCode(code) {
  const highlighted = hljs.highlightAuto(code).value;
  return `<pre><code class="hljs">${highlighted}</code></pre>`;
}

module.exports = highlightCode;
