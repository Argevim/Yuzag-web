const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

// Replace the banner API URL
content = content.replace(/fetch\('https:\/\/yuzag\.org\/api\/settings\/home_banner_text'\)/, "fetch('http://127.0.0.1:8000/api/settings/home_banner_text')");

fs.writeFileSync(path, content);
console.log('API URL updated to localhost.');
