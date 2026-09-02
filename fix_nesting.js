const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

// Find custom-sosyal-medya-view opening
const sosyalStart = content.indexOf('<!-- Sosyal Medya Sayfası -->');
const bagisStart = content.indexOf('<!-- Bağış Yap Sayfası -->');

if (sosyalStart !== -1 && bagisStart !== -1) {
    let beforeSosyal = content.substring(0, sosyalStart);
    let afterBagis = content.substring(bagisStart);
    
    // The problematic block
    let block = content.substring(sosyalStart, bagisStart);
    
    // We need to extract all-projects and all-announcements from INSIDE sosyal-medya.
    const projectsStart = block.indexOf('<!-- Tüm Projeler Sayfası -->');
    const announcementsStart = block.indexOf('<!-- Tüm Duyurular Sayfası -->');
    
    // The nesting issue is that the <!-- Tüm Projeler Sayfası --> is inside the container of sosyal medya.
    // Let's just manually re-build the block strings properly.
    
    // 1. Sosyal medya
    let newSosyal = `<!-- Sosyal Medya Sayfası -->
        <div id="custom-sosyal-medya-view" class="custom-detail-page" style="display:none; background: #f8f9fa; min-height: 100vh;">
            <div class="detail-header-bg" style="height: 300px; background-color: #14b8a6;">
                <div class="back-button-wrapper">
                    <a href="#" class="btn-back" onclick="event.preventDefault(); window.scrollToSection('root');">
                        <i class="bi bi-arrow-left"></i> Anasayfaya Dön
                    </a>
                </div>
                <div class="container detail-header-content">
                    <h1 class="detail-title text-white">Sosyal Medya</h1>
                    <div class="detail-meta">
                        <span class="text-white">Bizi sosyal medya hesaplarımızdan takip edin.</span>
                    </div>
                </div>
            </div>
            <div class="container" style="padding: 60px 0 80px 0;">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="card border-0 shadow-sm" style="border-radius:20px; overflow:hidden;">
                            <div class="row g-0">
                                <div class="col-md-6 bg-light d-flex align-items-center justify-content-center p-5">
                                    <div class="text-center">
                                        <i class="bi bi-instagram" style="font-size: 4rem; color: #E1306C; margin-bottom: 20px;"></i>
                                        <h3 style="font-weight:700; color:#0f172a;">Instagram</h3>
                                        <p class="text-muted">Etkinliklerimizden anında haberdar olmak için takip edin.</p>
                                        <a href="https://instagram.com/yuzag_hareketi" target="_blank" class="btn btn-outline-dark rounded-pill px-4 mt-3">Profili Gör</a>
                                    </div>
                                </div>
                                <div class="col-md-6 d-flex align-items-center justify-content-center p-5">
                                    <div class="text-center">
                                        <i class="bi bi-youtube" style="font-size: 4rem; color: #FF0000; margin-bottom: 20px;"></i>
                                        <h3 style="font-weight:700; color:#0f172a;">YouTube</h3>
                                        <p class="text-muted">Eğitim, seminer ve söyleşi videolarımızı kanalımızda izleyin.</p>
                                        <a href="https://youtube.com" target="_blank" class="btn btn-outline-dark rounded-pill px-4 mt-3">Kanala Git</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card border-0 shadow-sm mt-4" style="border-radius:20px; overflow:hidden;">
                            <div class="row g-0">
                                <div class="col-md-12 bg-light d-flex align-items-center justify-content-center p-5">
                                    <div class="text-center">
                                        <i class="bi bi-twitter-x" style="font-size: 4rem; color: #000000; margin-bottom: 20px;"></i>
                                        <h3 style="font-weight:700; color:#0f172a;">X (Twitter)</h3>
                                        <p class="text-muted">Güncel açıklamalar ve duyurularımız için bizi takip edebilirsiniz.</p>
                                        <a href="https://twitter.com" target="_blank" class="btn btn-outline-dark rounded-pill px-4 mt-3">Profili Gör</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;

    // 2. Tüm Projeler
    let newProjects = `
        <!-- Tüm Projeler Sayfası -->
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
`;

    // 3. Tüm Duyurular
    let newAnnouncements = `
        <!-- Tüm Duyurular Sayfası -->
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

    content = beforeSosyal + newSosyal + newProjects + newAnnouncements + afterBagis;
    fs.writeFileSync(path, content);
    console.log("Nesting fixed!");
} else {
    console.log("Could not find blocks.");
}
