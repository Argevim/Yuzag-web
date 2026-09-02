const fs = require('fs');
const srcPath = '/Users/sercankostence/Desktop/build/assets/js/custom-projects-new.js';
const targetPath = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';

let content = fs.readFileSync(srcPath, 'utf8');

// The unclosed template string starts at line 1157: nav.innerHTML = `
// And at line 1191 it has <style> without closing the nav.innerHTML string!
const cutoffIndex = content.indexOf('<style>\n            .custom-premium-footer {');

if (cutoffIndex !== -1) {
    // 1. Get code before <style>
    let beforeCut = content.substring(0, cutoffIndex);
    
    // Replace the end of navbar buttons with proper closing, including all 3 buttons!
    const newButtonsHTML = `<!-- Action Buttons Container: Right aligned, side by side -->
                <li class="nav-item ms-lg-3" style="display:flex; align-items:center; gap: 8px;">
                    <!-- Gönüllü Ol -->
                    <a class="nav-link btn custom-btn gonullu-btn-hover" style="background: #14b8a6; color: white !important; border-radius: 20px; padding: 8px 16px !important; font-weight: 600; display:flex; align-items:center; justify-content:center; gap: 5px; font-size: 0.95rem; line-height: 1;" href="/#gonullu-ol" onclick="event.preventDefault(); window.navigateTo('gonullu-ol');">
                        <i class="bi bi-heart-fill"></i> Gönüllü Ol
                    </a>
                    
                    <!-- Genç Gönüllü Ol -->
                    <a class="nav-link btn custom-btn genc-btn-hover" style="background: #3b82f6; color: white !important; border-radius: 20px; padding: 8px 16px !important; font-weight: 600; display:flex; align-items:center; justify-content:center; gap: 5px; font-size: 0.95rem; line-height: 1;" href="/#genc-gonullu-ol" onclick="event.preventDefault(); window.navigateTo('genc-gonullu-ol');">
                        <i class="bi bi-heart-fill"></i> Genç Gönüllü
                    </a>

                    <!-- Bağış Yap -->
                    <a class="nav-link btn custom-btn bagis-btn-hover" style="background: #f59e0b !important; color: white !important; border-radius: 25px; padding: 10px 22px !important; font-weight: 700; display:flex; align-items:center; justify-content:center; font-size: 1.1rem; border: 2px solid #f59e0b; margin-left: 5px; line-height: 1;" href="/#bagis-yap" onclick="event.preventDefault(); window.navigateTo('bagis-yap');">
                        Bağış Yap
                    </a>
                    
                    <style>
                        .gonullu-btn-hover:hover { color: white !important; background-color: #0f9687 !important; }
                        .genc-btn-hover:hover { color: white !important; background-color: #2563eb !important; }
                        .bagis-btn-hover:hover { color: white !important; background-color: #d97706 !important; border-color: #d97706 !important; transform: scale(1.05); transition: transform 0.2s ease; }
                    </style>
                </li>
            \`;
        }
    });
}
`;

    // Replace from `<li class="nav-item ms-lg-3"` to cutoffIndex
    const liIndex = beforeCut.indexOf('<li class="nav-item ms-lg-3"');
    if (liIndex !== -1) {
        beforeCut = beforeCut.substring(0, liIndex) + newButtonsHTML;
    }

    // 2. Get the style and footer code from cutoffIndex up to initProjectsPlugin
    let footerSection = content.substring(cutoffIndex);
    
    // Find where initProjectsPlugin begins
    const initIdx = footerSection.indexOf('function initProjectsPlugin()');
    let footerHTMLBlock = footerSection;
    let restOfFile = "";
    
    if (initIdx !== -1) {
        footerHTMLBlock = footerSection.substring(0, initIdx);
        restOfFile = footerSection.substring(initIdx);
    }

    // Turn footerHTMLBlock into proper function injectCustomFooter()
    const customFooterFunc = `
function injectCustomFooter() {
    if (document.querySelector('.custom-premium-footer')) return;

    const footerHTML = \`
        ${footerHTMLBlock}
    \`;

    document.body.insertAdjacentHTML('beforeend', footerHTML);

    const sampleProjectsContainer = document.getElementById('footer-sample-projects');
    if (sampleProjectsContainer && typeof projectsData !== 'undefined') {
        let samplesHTML = "";
        projectsData.slice(0, 5).forEach(p => {
            samplesHTML += \`<li><a href="/#proje-\${p.id}" onclick="event.preventDefault(); window.openDetail(\${p.id}, 'project');">\${p.title}</a></li>\`;
        });
        sampleProjectsContainer.innerHTML = samplesHTML;
    }
}
`;

    // Remove old footer inline code snippets if any
    const finalContent = beforeCut + '\n' + customFooterFunc + '\n' + restOfFile;
    
    fs.writeFileSync(targetPath, finalContent);
    fs.writeFileSync(srcPath, finalContent);
    console.log("Fixed custom-projects-new.js and copied to custom-projects.js!");
} else {
    console.log("Cutoff index not found.");
}
