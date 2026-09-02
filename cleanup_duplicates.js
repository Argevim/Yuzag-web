const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

// Remove the empty injectSections at line 2784
content = content.replace(`function injectSections() {\n    // Left empty for compatibility\n}`, '');

fs.writeFileSync(path, content);
console.log("Removed empty injectSections override!");
