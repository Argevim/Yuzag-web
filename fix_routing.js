const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

// Update navigateTo
content = content.replace(
    /\} else if \(sayfa === 'genc-gonullu-ol'\) \{\n        history\.pushState\(\{\}, '', '\/genc-gonullu-ol\/'\);\n        handleRouting\(\);\n    \}/,
    `} else if (sayfa === 'genc-gonullu-ol') {\n        history.pushState({}, '', '/genc-gonullu-ol/');\n        handleRouting();\n    } else if (sayfa === 'bagis-yap') {\n        history.pushState({}, '', '/bagis-yap/');\n        handleRouting();\n    }`
);
content = content.replace(/!window\.location\.pathname\.includes\('genc-gonullu-ol'\)/, "!window.location.pathname.includes('genc-gonullu-ol') && !window.location.pathname.includes('bagis-yap')");

// Update scrollToSection
content = content.replace(/const isCustomPath = path\.includes\('gonullu-ol'\) \|\| path\.includes\('genc-gonullu-ol'\);/, "const isCustomPath = path.includes('gonullu-ol') || path.includes('genc-gonullu-ol') || path.includes('bagis-yap');");

// Update handleRouting
content = content.replace(
    /\} else if \(path\.includes\('\/genc-gonullu-ol'\)\) \{\n        sayfa = 'genc-gonullu';\n    \}/,
    `} else if (path.includes('/genc-gonullu-ol')) {\n        sayfa = 'genc-gonullu';\n    } else if (path.includes('/bagis-yap')) {\n        sayfa = 'bagis';\n    }`
);

content = content.replace(
    /\} else if \(hash === 'genc-gonullu-ol'\) \{\n        sayfa = 'genc-gonullu';\n    \}/,
    `} else if (hash === 'genc-gonullu-ol') {\n        sayfa = 'genc-gonullu';\n    } else if (hash === 'bagis-yap') {\n        sayfa = 'bagis';\n    }`
);

fs.writeFileSync(path, content);
console.log('Routing fixed successfully.');
