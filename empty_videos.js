const fs = require('fs');
const path = './assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

// Replace the array content with empty array
content = content.replace(/const bilgilendiriyorData = \[[\s\S]*?\];/, 'const bilgilendiriyorData = [];');

fs.writeFileSync(path, content);
console.log('Videos removed!');
