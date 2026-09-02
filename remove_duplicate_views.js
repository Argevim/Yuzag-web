const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

// Find the first injectCustomViews and remove it up to function injectSections
const firstViewsIdx = content.indexOf('function injectCustomViews() {');
const firstSectionsIdx = content.indexOf('function injectSections() {');

if (firstViewsIdx !== -1 && firstSectionsIdx !== -1 && firstViewsIdx < firstSectionsIdx) {
    content = content.substring(0, firstViewsIdx) + content.substring(firstSectionsIdx);
    fs.writeFileSync(path, content);
    console.log("Removed duplicate old injectCustomViews!");
} else {
    console.log("Could not find duplicate to remove.");
}
