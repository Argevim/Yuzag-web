const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

// We will replace everything inside navbars.forEach(nav => { ... }) up to the closing `        }
//    });`

const startIndex = content.indexOf('navbars.forEach(nav => {');
const endIndex = content.indexOf('    });\n}\n\n// 2. Özel Görünümler');
if (startIndex !== -1 && endIndex !== -1) {
    const partToReplace = content.substring(startIndex, endIndex);

    const newNavbarsLogic = `navbars.forEach(nav => {
        if (!nav.dataset.customLinksAdded) {
            nav.dataset.customLinksAdded = 'true';

            nav.innerHTML = \`
                <li class="nav-item"><a class="nav-link click-scroll" href="#" onclick="event.preventDefault(); window.scrollToSection('root');">Anasayfa</a></li>
                
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Duyurular</a>
                    <ul class="dropdown-menu">
                        \${announcementsDropdown}
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#" onclick="event.preventDefault(); window.navigateTo('duyurular');">Tüm Duyurular</a></li>
                    </ul>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Bilgilendiriyor</a>
                    <ul class="dropdown-menu">
                        \${bilgiDropdown}
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#" onclick="event.preventDefault(); window.navigateTo('bilgilendiriyor');">Tüm Videolar</a></li>
                    </ul>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projeler</a>
                    <ul class="dropdown-menu">
                        \${projectsDropdown}
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#" onclick="event.preventDefault(); window.navigateTo('projeler');">Tüm Projeler</a></li>
                    </ul>
                </li>

                <li class="nav-item"><a class="nav-link click-scroll" href="#" onclick="event.preventDefault(); window.navigateTo('ekibimiz');">Ekibimiz</a></li>
                <li class="nav-item"><a class="nav-link click-scroll" href="#" onclick="event.preventDefault(); window.navigateTo('sosyalmedya');">Sosyal Medya</a></li>
                
                <!-- Action Buttons Container: Right aligned, side by side -->
                <li class="nav-item ms-lg-3" style="display:flex; align-items:center; gap: 8px;">
                    <!-- Gönüllü Ol -->
                    <a class="nav-link btn custom-btn gonullu-btn-hover" style="background: #14b8a6; color: white !important; border-radius: 20px; padding: 8px 16px !important; font-weight: 600; display:flex; align-items:center; justify-content:center; gap: 5px; font-size: 0.95rem; line-height: 1;" href="/gonullu-ol" onclick="event.preventDefault(); window.navigateTo('gonullu-ol');">
                        <i class="bi bi-heart-fill"></i> Gönüllü Ol
                    </a>
                    
                    <!-- Genç Gönüllü Ol -->
                    <a class="nav-link btn custom-btn genc-btn-hover" style="background: #3b82f6; color: white !important; border-radius: 20px; padding: 8px 16px !important; font-weight: 600; display:flex; align-items:center; justify-content:center; gap: 5px; font-size: 0.95rem; line-height: 1;" href="/genc-gonullu-ol" onclick="event.preventDefault(); window.navigateTo('genc-gonullu-ol');">
                        <i class="bi bi-heart-fill"></i> Genç Gönüllü
                    </a>

                    <!-- Bağış Yap -->
                    <a class="nav-link btn custom-btn bagis-btn-hover" style="background: #f59e0b !important; color: white !important; border-radius: 25px; padding: 10px 22px !important; font-weight: 700; display:flex; align-items:center; justify-content:center; font-size: 1.1rem; border: 2px solid #f59e0b; margin-left: 5px; line-height: 1;" href="/bagis-yap" onclick="event.preventDefault(); window.navigateTo('bagis-yap');">
                        Bağış Yap
                    </a>
                    
                    <style>
                        .gonullu-btn-hover:hover { color: white !important; background-color: #0f9687 !important; }
                        .genc-btn-hover:hover { color: white !important; background-color: #2563eb !important; }
                        .bagis-btn-hover:hover { color: white !important; background-color: #d97706 !important; border-color: #d97706 !important; transform: scale(1.05); transition: transform 0.2s ease; }
                    </style>
                </li>
            \`;
        }`;

    content = content.replace(partToReplace, newNavbarsLogic);
    fs.writeFileSync(path, content);
    console.log("Navbar buttons updated successfully.");
} else {
    console.log("Could not find navbars.forEach logic!");
}
