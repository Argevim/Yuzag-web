const fs = require('fs');
const path = './assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/http:\/\/127\.0\.0\.1:8000/g, 'https://yuzag.org');

fs.writeFileSync(path, content);
console.log('API URLs updated to yuzag.org!');
