const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

const targetStr = `const rootDiv = document.getElementById('root');
    if (rootDiv) {
        rootDiv.insertAdjacentHTML('beforeend', footerHTML);
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }`;

const newStr = `// Always append to body to avoid React overwriting it
    document.body.insertAdjacentHTML('beforeend', footerHTML);`;

if (content.includes(targetStr)) {
    content = content.replace(targetStr, newStr);
    fs.writeFileSync(path, content);
    console.log('Fixed footer insertion.');
} else {
    console.log('Target string not found.');
}
