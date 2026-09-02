const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

// Replace all occurrences of !important
content = content.replace(/!important/g, '');

fs.writeFileSync(path, content);
console.log('Removed all !important declarations.');
