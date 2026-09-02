const fs = require('fs');
const path = '/Users/sercankostence/Downloads/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

// The string to find
const duplicateStr = `function initProjectsPlugin() {
    console.log("YÜZAG Projeler Eklentisi Başlıyor...");
    injectCustomViews();
    
    const rootNode = document.getElementById('root');
    if(rootNode) {
        const observer = new MutationObserver((mutations) => {
            if(rootNode.children.length > 0 && !document.getElementById('custom-projects-section')) {
                if(window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname === '') {
                    setTimeout(() => {
                        injectSections();
                        enhanceContactFormAndMap();
                        fixCorporateTexts();
                        handleRouting(); 
                    }, 500);
                } else {
                    setTimeout(() => { enhanceContactFormAndMap(); addNavbarLink(); handleRouting(); }, 800);
                }
            }
        });
        observer.observe(rootNode, { childList: true, subtree: true });
        
        if(rootNode.children.length > 0) {
            if(window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname === '') {
                setTimeout(() => { injectSections(); enhanceContactFormAndMap(); fixCorporateTexts(); handleRouting(); }, 500);
            } else {
                setTimeout(() => { enhanceContactFormAndMap(); addNavbarLink(); handleRouting(); }, 800);
            }
        }
    } else {
        console.error("#root elementi bulunamadı!");
    }
}

initProjectsPlugin();`;

// If it appears multiple times, let's just keep the last one.
const index1 = content.indexOf('function initProjectsPlugin()');
const index2 = content.lastIndexOf('function initProjectsPlugin()');

if (index1 !== index2 && index1 !== -1 && index2 !== -1) {
    // Keep everything up to index2
    content = content.substring(0, index1) + content.substring(index2);
    fs.writeFileSync(path, content);
    console.log("Duplicate initProjectsPlugin removed.");
} else {
    console.log("No duplicates found.");
}
