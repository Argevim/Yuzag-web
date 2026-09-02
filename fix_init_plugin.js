const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

// Ensure addNavbarLink() is called in all branches of initProjectsPlugin
content = content.replace(
    `injectSections(); enhanceContactFormAndMap(); fixCorporateTexts(); handleRouting(); fetchDatabaseData();`,
    `injectSections(); enhanceContactFormAndMap(); fixCorporateTexts(); addNavbarLink(); handleRouting(); fetchDatabaseData();`
);

content = content.replace(
    `injectSections();\n                        enhanceContactFormAndMap();\n                        fixCorporateTexts();\n                        handleRouting();\n                        fetchDatabaseData();`,
    `injectSections();\n                        enhanceContactFormAndMap();\n                        fixCorporateTexts();\n                        addNavbarLink();\n                        handleRouting();\n                        fetchDatabaseData();`
);

fs.writeFileSync(path, content);
console.log("addNavbarLink() added to homepage initialization!");
