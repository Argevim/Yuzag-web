const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let lines = fs.readFileSync(path, 'utf8').split('\n');

while (lines.length > 0 && !lines[0].trim().startsWith('//') && !lines[0].trim().startsWith('let') && !lines[0].trim().startsWith('const') && !lines[0].trim().startsWith('var') && !lines[0].trim().startsWith('function')) {
    lines.shift();
}

fs.writeFileSync(path, lines.join('\n'));
console.log("Headers cleaned!");
