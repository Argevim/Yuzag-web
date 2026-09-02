const fs = require('fs');
const path = '/Users/sercankostence/Downloads/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

const newHTML = `
        <div id="custom-all-projects-view" class="custom-detail-page" style="display:none; background: #f8f9fa; min-height: 100vh;">
            <div class="detail-header-bg" style="height: 300px; background-image: url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');">
                <div class="back-button-wrapper">
                    <a href="#" class="btn-back" onclick="event.preventDefault(); window.scrollToSection('root');">
                        <i class="bi bi-arrow-left"></i> Anasayfaya Dön
                    </a>
                </div>
                <div class="container detail-header-content">
                    <h1 class="detail-title">Gönüllü Projelerimiz</h1>
                    <div class="detail-meta">
                        <span>Topluma dokunan tüm projelerimizi buradan inceleyebilirsiniz.</span>
                    </div>
                </div>
            </div>
            <div class="container" style="padding: 60px 0 80px 0;">
                <div class="row gy-4" id="all-projects-grid"></div>
            </div>
        </div>

        <div id="custom-all-announcements-view" class="custom-detail-page" style="display:none; background: #fff; min-height: 100vh;">
            <div class="detail-header-bg" style="height: 300px; background-image: url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');">
                <div class="back-button-wrapper">
                    <a href="#" class="btn-back" onclick="event.preventDefault(); window.scrollToSection('root');">
                        <i class="bi bi-arrow-left"></i> Anasayfaya Dön
                    </a>
                </div>
                <div class="container detail-header-content">
                    <h1 class="detail-title">Tüm Duyurular</h1>
                    <div class="detail-meta">
                        <span>Güncel haberler ve yaklaşan etkinliklerimiz.</span>
                    </div>
                </div>
            </div>
            <div class="container" style="padding: 60px 0 80px 0;">
                <div class="row gy-4" id="all-announcements-grid"></div>
            </div>
        </div>
`;

content = content.replace(
    /<div id="custom-sosyal-medya-view"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/,
    match => match + newHTML
);

// Update addNavbarLink
content = content.replace(
    /window\.scrollToSection\('custom-announcements-section'\)/g,
    "window.navigateTo('duyurular')"
);
content = content.replace(
    /window\.scrollToSection\('custom-projects-section'\)/g,
    "window.navigateTo('projeler')"
);

// Add Render Functions
const renderFns = `
function renderAllProjectsPage() {
    const grid = document.getElementById('all-projects-grid');
    grid.innerHTML = projectsData.map(p => {
        const badgeColor = 'rgba(20, 184, 166, 0.9)';
        return \`
            <div class="col-md-6 col-lg-4">
                <div class="custom-project-card" style="height: 100%; display: flex; flex-direction: column; cursor: pointer;" onclick="window.openDetail(\${p.id}, 'project')">
                    <div class="custom-project-badge" style="background: \${badgeColor};">\${p.status}</div>
                    <div class="custom-project-img-wrapper">
                        <img src="\${p.image}" alt="\${p.title}" class="custom-project-img">
                    </div>
                    <div class="custom-project-content" style="flex: 1; display: flex; flex-direction: column;">
                        <h3 class="custom-project-title">\${p.title}</h3>
                        <p class="custom-project-desc" style="flex: 1;">\${p.shortDesc}</p>
                        <span class="custom-project-btn" style="color: #14b8a6; margin-top: auto;">Detayları İncele <i class="bi bi-arrow-right"></i></span>
                    </div>
                </div>
            </div>
        \`;
    }).join('');
}

function renderAllAnnouncementsPage() {
    const grid = document.getElementById('all-announcements-grid');
    grid.innerHTML = announcementsData.map(a => {
        const badgeColor = 'rgba(239, 68, 68, 0.9)';
        return \`
            <div class="col-md-6 col-lg-4">
                <div class="custom-project-card" style="height: 100%; display: flex; flex-direction: column; cursor: pointer;" onclick="window.openDetail(\${a.id}, 'announcement')">
                    <div class="custom-project-badge" style="background: \${badgeColor};">\${a.status}</div>
                    <div class="custom-project-img-wrapper">
                        <img src="\${a.image}" alt="\${a.title}" class="custom-project-img">
                    </div>
                    <div class="custom-project-content" style="flex: 1; display: flex; flex-direction: column;">
                        <h3 class="custom-project-title">\${a.title}</h3>
                        <p class="custom-project-desc" style="flex: 1;">\${a.shortDesc}</p>
                        <span class="custom-project-btn" style="color: #ef4444; margin-top: auto;">Duyuru Detayı <i class="bi bi-arrow-right"></i></span>
                    </div>
                </div>
            </div>
        \`;
    }).join('');
}
`;

content = content.replace(/function renderBilgilendiriyorPage\(\) \{[\s\S]*?\}\n/, match => match + renderFns);

// Update handleRouting
content = content.replace(
    /if \(hash === 'ekibimiz' \|\| hash === 'bilgilendiriyor' \|\| hash === 'sosyalmedya'\) \{/,
    "if (hash === 'ekibimiz' || hash === 'bilgilendiriyor' || hash === 'sosyalmedya' || hash === 'projeler' || hash === 'duyurular') {"
);

content = content.replace(
    /sosyal: document\.getElementById\('custom-sosyal-medya-view'\)/,
    "sosyal: document.getElementById('custom-sosyal-medya-view'),\n        projeler: document.getElementById('custom-all-projects-view'),\n        duyurular: document.getElementById('custom-all-announcements-view')"
);

content = content.replace(
    /else if\(sayfa === 'sosyalmedya' && views\.sosyal\) \{ views\.sosyal\.style\.display = 'block'; window\.scrollTo\(0,0\); \}/,
    `else if(sayfa === 'sosyalmedya' && views.sosyal) { views.sosyal.style.display = 'block'; window.scrollTo(0,0); }
        else if(sayfa === 'projeler' && views.projeler) { views.projeler.style.display = 'block'; window.scrollTo(0,0); renderAllProjectsPage(); }
        else if(sayfa === 'duyurular' && views.duyurular) { views.duyurular.style.display = 'block'; window.scrollTo(0,0); renderAllAnnouncementsPage(); }`
);

content = content.replace(
    /const isDetailPage = hash === 'ekibimiz' \|\| hash === 'bilgilendiriyor' \|\| hash === 'sosyalmedya' \|\| hash\.startsWith\('proje-'\) \|\| hash\.startsWith\('duyuru-'\) \|\| hash\.startsWith\('bilgi-'\);/,
    "const isDetailPage = hash === 'ekibimiz' || hash === 'bilgilendiriyor' || hash === 'sosyalmedya' || hash === 'projeler' || hash === 'duyurular' || hash.startsWith('proje-') || hash.startsWith('duyuru-') || hash.startsWith('bilgi-');"
);

fs.writeFileSync(path, content);
console.log("Pages added.");
