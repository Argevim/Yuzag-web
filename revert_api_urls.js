const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

// Replace all occurrences of https://yuzag.org/api with http://127.0.0.1:8000/api
content = content.replace(/https:\/\/yuzag\.org\/api/g, "http://127.0.0.1:8000/api");

fs.writeFileSync(path, content);
console.log('All API URLs updated to localhost.');
