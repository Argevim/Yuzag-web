const fs = require('fs');

const srcContent = fs.readFileSync('/Users/sercankostence/Desktop/build/assets/js/custom-projects-new.js', 'utf8');
const lines = srcContent.split('\n');

// Up to line 1188 is perfect!
const headPart = lines.slice(0, 1188).join('\n');

const navbarEndAndRoutingAndFooter = `
                <!-- Action Buttons Container: Right aligned, side by side -->
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

// 5. Yönlendirme ve Sayfa Yönetimi (Routing)
window.scrollToSection = function (sectionId) {
    const rootNode = document.getElementById('root');
    if (rootNode) {
        Array.from(rootNode.children).forEach(child => {
            if (!child.id || (!child.id.startsWith('custom-') && child.id !== 'splash')) {
                child.style.display = '';
            } else if (child.id.startsWith('custom-') && child.id.endsWith('-view')) {
                child.style.display = 'none';
            }
        });
    }

    if (sectionId && sectionId !== 'root') {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    history.pushState(null, null, '/');
};

window.navigateTo = function (target) {
    if (!target || target === 'root' || target === 'anasayfa') {
        history.pushState(null, null, '/');
    } else {
        history.pushState(null, null, '#' + target);
    }
    handleRouting();
};

window.openDetail = function (id, type) {
    if (type === 'project') {
        window.navigateTo('proje-' + id);
    } else if (type === 'announcement') {
        window.navigateTo('duyuru-' + id);
    }
};

function handleRouting() {
    // Guarantees all custom view DIVs exist in DOM BEFORE checking elements
    if (typeof injectCustomViews === 'function') {
        injectCustomViews();
    }

    let hash = window.location.hash.replace('#', '');
    let pathname = window.location.pathname.replace(/^\\//, '');
    let route = hash || pathname;
    
    const rootNode = document.getElementById('root');

    const views = {
        detail: document.getElementById('custom-project-detail-view'),
        team: document.getElementById('custom-team-detail-view'),
        bilgi: document.getElementById('custom-bilgilendiriyor-view'),
        sosyal: document.getElementById('custom-sosyal-medya-view'),
        projeler: document.getElementById('custom-all-projects-view'),
        duyurular: document.getElementById('custom-all-announcements-view'),
        gonullu: document.getElementById('custom-gonullu-ol-view'),
        gencGonullu: document.getElementById('custom-genc-gonullu-ol-view'),
        bagis: document.getElementById('custom-bagis-yap-view')
    };

    const isDetailPage = route === 'ekibimiz' || 
                         route === 'bilgilendiriyor' || 
                         route === 'sosyalmedya' || 
                         route === 'projeler' || 
                         route === 'duyurular' || 
                         route === 'gonullu-ol' || 
                         route === 'genc-gonullu-ol' || 
                         route === 'bagis-yap' || 
                         route.startsWith('proje-') || 
                         route.startsWith('duyuru-') || 
                         route.startsWith('bilgi-');

    if (rootNode) {
        Array.from(rootNode.children).forEach(child => {
            if (!child.id || (!child.id.startsWith('custom-') && child.id !== 'splash')) {
                child.style.display = isDetailPage ? 'none' : '';
            }
        });
    }

    Object.values(views).forEach(v => { if (v) v.style.display = 'none'; });

    if (isDetailPage) {
        let sayfa = 'detail';
        if (route === 'ekibimiz') sayfa = 'team';
        else if (route === 'bilgilendiriyor') sayfa = 'bilgi';
        else if (route === 'sosyalmedya') sayfa = 'sosyal';
        else if (route === 'projeler') sayfa = 'projeler';
        else if (route === 'duyurular') sayfa = 'duyurular';
        else if (route === 'gonullu-ol') sayfa = 'gonullu';
        else if (route === 'genc-gonullu-ol') sayfa = 'gencGonullu';
        else if (route === 'bagis-yap') sayfa = 'bagis';

        if (sayfa === 'detail' && views.detail) { views.detail.style.display = 'block'; }
        else if (sayfa === 'team' && views.team) { views.team.style.display = 'block'; window.scrollTo(0, 0); renderTeamPage(); }
        else if (sayfa === 'bilgi' && views.bilgi) { views.bilgi.style.display = 'block'; window.scrollTo(0, 0); renderBilgilendiriyorPage(); }
        else if (sayfa === 'sosyal' && views.sosyal) { views.sosyal.style.display = 'block'; window.scrollTo(0, 0); }
        else if (sayfa === 'projeler' && views.projeler) { views.projeler.style.display = 'block'; window.scrollTo(0, 0); renderAllProjectsPage(); }
        else if (sayfa === 'duyurular' && views.duyurular) { views.duyurular.style.display = 'block'; window.scrollTo(0, 0); renderAllAnnouncementsPage(); }
        else if (sayfa === 'gonullu' && views.gonullu) { views.gonullu.style.display = 'block'; window.scrollTo(0, 0); }
        else if (sayfa === 'gencGonullu' && views.gencGonullu) { views.gencGonullu.style.display = 'block'; window.scrollTo(0, 0); }
        else if (sayfa === 'bagis' && views.bagis) { views.bagis.style.display = 'block'; window.scrollTo(0, 0); }
    } else {
        window.scrollTo(0, 0);
    }
}

window.addEventListener('popstate', handleRouting);
window.addEventListener('hashchange', handleRouting);

function renderAllProjectsPage() {
    const grid = document.getElementById('all-projects-grid');
    if (grid && typeof projectsData !== 'undefined') {
        grid.innerHTML = projectsData.map(p => \`
            <div class="col-lg-4 col-md-6">
                <div class="custom-card h-100" style="background:#fff; border-radius:15px; overflow:hidden; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
                    <img src="\${p.image}" style="width:100%; height:200px; object-fit:cover;" alt="\${p.title}">
                    <div style="padding:20px;">
                        <h4 style="font-weight:700; color:#0f172a; margin-bottom:10px;">\${p.title}</h4>
                        <p style="color:#64748b; font-size:0.9rem;">\${p.shortDesc}</p>
                        <a href="#" onclick="event.preventDefault(); window.openDetail(\${p.id}, 'project');" class="btn custom-btn" style="background:#14b8a6; color:#fff; border-radius:10px; width:100%; text-align:center; display:block; margin-top:15px;">Detayları İncele</a>
                    </div>
                </div>
            </div>
        \`).join('');
    }
}

function renderAllAnnouncementsPage() {
    const grid = document.getElementById('all-announcements-grid');
    if (grid && typeof announcementsData !== 'undefined') {
        grid.innerHTML = announcementsData.map(a => \`
            <div class="col-lg-4 col-md-6">
                <div class="custom-card h-100" style="background:#fff; border-radius:15px; overflow:hidden; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
                    <img src="\${a.image}" style="width:100%; height:200px; object-fit:cover;" alt="\${a.title}">
                    <div style="padding:20px;">
                        <span class="badge bg-secondary mb-2">\${a.date}</span>
                        <h4 style="font-weight:700; color:#0f172a; margin-bottom:10px;">\${a.title}</h4>
                        <p style="color:#64748b; font-size:0.9rem;">\${a.shortDesc}</p>
                        <a href="#" onclick="event.preventDefault(); window.openDetail(\${a.id}, 'announcement');" class="btn custom-btn" style="background:#14b8a6; color:#fff; border-radius:10px; width:100%; text-align:center; display:block; margin-top:15px;">Detayları İncele</a>
                    </div>
                </div>
            </div>
        \`).join('');
    }
}

function renderTeamPage() {
    const grid = document.getElementById('team-grid');
    if (grid && typeof teamData !== 'undefined') {
        grid.innerHTML = teamData.map(t => \`
            <div class="col-lg-4 col-md-6">
                <div class="team-card text-center" style="background:#fff; padding:30px; border-radius:15px; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
                    <div class="team-img-wrapper" style="width:120px; height:120px; margin:0 auto 20px; border-radius:50%; overflow:hidden;">
                        <img src="\${t.image}" style="width:100%; height:100%; object-fit:cover;" alt="\${t.name}">
                    </div>
                    <h4 style="font-weight:700; color:#0f172a;">\${t.name}</h4>
                    <p style="color:#14b8a6; font-weight:600; font-size:0.9rem;">\${t.role}</p>
                </div>
            </div>
        \`).join('');
    }
}

function renderBilgilendiriyorPage() {
    const grid = document.getElementById('bilgilendiriyor-grid');
    if (grid && typeof bilgilendiriyorData !== 'undefined') {
        grid.innerHTML = bilgilendiriyorData.map(b => \`
            <div class="col-lg-4 col-md-6">
                <div class="custom-card h-100" style="background:#fff; border-radius:15px; overflow:hidden; box-shadow:0 5px 15px rgba(0,0,0,0.05);">
                    <div style="position:relative; padding-top:56.25%;">
                        <iframe src="\${b.videoUrl}" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" allowfullscreen></iframe>
                    </div>
                    <div style="padding:20px;">
                        <h4 style="font-weight:700; color:#0f172a;">\${b.title}</h4>
                    </div>
                </div>
            </div>
        \`).join('');
    }
}

// 6. Özel Footer Enjeksiyonu
function injectCustomFooter() {
    if (document.querySelector('.custom-premium-footer')) return;

    const footerHTML = \`
        <footer class="custom-premium-footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12 footer-col pe-lg-5">
                        <img src="/assets/images/logo.png" alt="YÜZAG Logo" class="footer-logo">
                        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 25px; line-height: 1.6;">YÜZAG; yüzyılın aile, gençlik ve toplum yapısını güçlendirmek adına eğitim, kültür ve sosyal yardımlaşma projeleri yürüten öncü bir sivil inisiyatiftir.</p>
                        <div class="footer-social-links">
                            <a href="https://instagram.com/yuzag_hareketi" target="_blank" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                            <a href="https://youtube.com" target="_blank" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
                            <a href="https://twitter.com" target="_blank" aria-label="X"><i class="bi bi-twitter-x"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-col">
                        <h4 class="footer-title">Hızlı Menü</h4>
                        <ul class="footer-menu">
                            <li><a href="#" onclick="event.preventDefault(); window.scrollToSection('root');">Anasayfa</a></li>
                            <li><a href="/#projeler" onclick="event.preventDefault(); window.navigateTo('projeler');">Projelerimiz</a></li>
                            <li><a href="/#duyurular" onclick="event.preventDefault(); window.navigateTo('duyurular');">Duyurular</a></li>
                            <li><a href="/#ekibimiz" onclick="event.preventDefault(); window.navigateTo('ekibimiz');">Ekibimiz</a></li>
                            <li><a href="/#bilgilendiriyor" onclick="event.preventDefault(); window.navigateTo('bilgilendiriyor');">YÜZAG Bilgilendiriyor</a></li>
                            <li><a href="/#sosyalmedya" onclick="event.preventDefault(); window.navigateTo('sosyalmedya');">Sosyal Medya</a></li>
                            <li><a href="/#gonullu-ol" onclick="event.preventDefault(); window.navigateTo('gonullu-ol');"><i class="bi bi-heart-fill"></i> Gönüllü Ol</a></li>
                            <li><a href="/#genc-gonullu-ol" onclick="event.preventDefault(); window.navigateTo('genc-gonullu-ol');"><i class="bi bi-heart-fill"></i> Genç Gönüllü Ol</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-5 col-md-6 footer-col">
                        <h4 class="footer-title">Çalışmalarımız</h4>
                        <ul class="footer-projects-list" id="footer-sample-projects" style="margin-top: 0; padding-top: 0;">
                        </ul>
                        <div class="mobile-justify-center" style="margin-top: 25px; display: flex; gap: 15px; flex-wrap: wrap;">
                            <a href="/#projeler" class="btn custom-btn" onclick="event.preventDefault(); window.navigateTo('projeler');" style="background: rgba(20, 184, 166, 0.1); color: #14b8a6; border: 1px solid #14b8a6; border-radius: 20px; padding: 8px 20px; font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: all 0.3s ease;">Tüm Projeler <i class="bi bi-arrow-right"></i></a>
                            <a href="/#duyurular" class="btn custom-btn" onclick="event.preventDefault(); window.navigateTo('duyurular');" style="background: rgba(20, 184, 166, 0.1); color: #14b8a6; border: 1px solid #14b8a6; border-radius: 20px; padding: 8px 20px; font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: all 0.3s ease;">Tüm Duyurular <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2026 YÜZAG Hareketi. Gelecek İçin Bir Adım. Tüm Hakları Saklıdır.</p>
                </div>
            </div>
        </footer>
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

// 7. Eklenti Başlatıcı (Plugin Init)
function initProjectsPlugin() {
    console.log("YÜZAG Projeler Eklentisi Başlıyor...");
    
    // Run immediately to inject views & footer
    injectCustomViews();
    injectCustomFooter();
    addNavbarLink();
    handleRouting();

    const rootNode = document.getElementById('root');
    if (rootNode) {
        const observer = new MutationObserver((mutations) => {
            injectCustomViews();
            injectCustomFooter();
            if (rootNode.children.length > 0 && !document.getElementById('custom-projects-section')) {
                injectSections();
                addNavbarLink();
                handleRouting();
            }
        });
        observer.observe(rootNode, { childList: true, subtree: true });

        if (rootNode.children.length > 0 && !document.getElementById('custom-projects-section')) {
            injectSections();
            addNavbarLink();
            handleRouting();
        }
    }
}

// Run immediately on script execution + DOMContentLoaded + window load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectsPlugin);
} else {
    initProjectsPlugin();
}
window.addEventListener('load', handleRouting);

// Fetch and update dynamic banners (images + text)
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://127.0.0.1:8000/api/banners')
        .then(res => res.json())
        .then(data => {
            if (data && data.length > 0) {
                const carouselInner = document.querySelector('.carousel-inner');
                if (carouselInner) {
                    const newItemsHtml = data.map((banner, index) => {
                        const activeClass = index === 0 ? 'active' : '';
                        return \`
                            <div class="carousel-item \${activeClass}">
                                <img src="\${banner.image_url}" class="carousel-image" alt="\${banner.title || 'Banner'}">
                                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div class="p-3" style="max-width: 900px;">
                                        <h1 class="display-3 text-white mb-4 animated zoomIn" style="text-shadow: 2px 2px 8px rgba(0,0,0,0.7);">
                                            \${banner.title || ''}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        \`;
                    }).join('');

                    carouselInner.innerHTML = newItemsHtml;

                    if (window.bootstrap && window.bootstrap.Carousel) {
                        const carouselElement = document.querySelector('#header-carousel');
                        if (carouselElement) {
                            new window.bootstrap.Carousel(carouselElement);
                        }
                    }
                }
            }
        })
        .catch(err => console.error("Banners fetch error", err));
});
`;

const fullCleanCode = headPart + '\n' + navbarEndAndRoutingAndFooter;
fs.writeFileSync('/Users/sercankostence/Desktop/build/assets/js/custom-projects.js', fullCleanCode);
fs.writeFileSync('/Users/sercankostence/Desktop/build/assets/js/custom-projects-new.js', fullCleanCode);
console.log("Rebuilt with synchronous view injection & immediate routing!");
