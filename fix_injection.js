const fs = require('fs');
const path = '/Users/sercankostence/Downloads/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

// Move injectCustomViews() into the setTimeouts inside initProjectsPlugin
// Remove it from the top
content = content.replace(/    injectCustomViews\(\);\n\s*const rootNode/g, '    const rootNode');

// Add it before injectSections()
content = content.replace(/injectSections\(\);/g, 'injectCustomViews();\n                        injectSections();');

fs.writeFileSync(path, content);
console.log("Injection timing fixed!");
