const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

if (content.startsWith('Created At:')) {
    content = content.substring(content.indexOf('\n') + 1);
    fs.writeFileSync(path, content);
    console.log("Line 1 header removed!");
} else {
    console.log("No header on line 1.");
}
