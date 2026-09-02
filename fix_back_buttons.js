const fs = require('fs');
const path = '/Users/sercankostence/Downloads/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

// Replace all history.pushState({}, '', '/'); handleRouting(); in btn-back with window.scrollToSection('root');
content = content.replace(
    /history\.pushState\(\{\}, '', '\/'\); handleRouting\(\);/g,
    `window.scrollToSection('root');`
);

fs.writeFileSync(path, content);
console.log("Back buttons fixed.");
