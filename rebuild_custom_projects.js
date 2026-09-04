const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

// Find where the regex broke the file
const brokenIndex = content.indexOf('<style>\n            .custom-premium-footer {');

if (brokenIndex !== -1) {
    // Cut the file right before the broken part
    content = content.substring(0, brokenIndex);
    
    // 1. Close addNavbarLink properly
    const closeNavbar = `<style>.gonullu-btn-hover:hover { color: white !important; background-color: #0f9687 !important; }</style></li>
                <li class="nav-item ms-lg-2" style="display:flex; align-items:center;">
                    <a class="nav-link btn custom-btn bagis-btn-hover" style="background: #f59e0b !important; color: white !important; border-radius: 20px; padding: 6px 18px !important; font-weight: 600; margin-top: 3px; border: 2px solid #f59e0b;" href="/bagis-yap" onclick="event.preventDefault(); window.navigateTo('bagis-yap');">Bağış Yap</a>
                    <style>.bagis-btn-hover:hover { color: white !important; background-color: #d97706 !important; border-color: #d97706 !important; }</style>
                </li>
            \`;
        }
    });
}
`;

    // 2. Add injectCustomViews
    const injectViews = `
// 2. Özel Görünümler (Detail, Team, Bilgilendiriyor, vb.)
function injectCustomViews() {
    if (document.getElementById('custom-project-detail-view')) return;

    const toastContainer = \`<div id="custom-toast-container"></div>\`;

    const detailHTML = \`
        <!-- Proje/Duyuru Detay Sayfası -->
        <div id="custom-project-detail-view" class="custom-detail-page" style="display:none; background: #fff; min-height: 100vh;">
            <div class="detail-header-bg" id="detail-header-bg">
                <div class="back-button-wrapper">
                    <a href="#" class="btn-back" onclick="event.preventDefault(); window.scrollToSection('root');">
                        <i class="bi bi-arrow-left"></i> Anasayfaya Dön
                    </a>
                </div>
                <div class="header-overlay"></div>
                <div class="container detail-header-content">
                    <div class="custom-badge mb-3" id="detail-status">Durum</div>
                    <h1 class="detail-title" id="detail-title">Başlık</h1>
                    <div class="detail-meta">
                        <span><i class="bi bi-calendar3"></i> <span id="detail-date">Tarih</span></span>
                        <span><i class="bi bi-geo-alt"></i> <span id="detail-location">Konum</span></span>
                    </div>
                </div>
            </div>

            <div class="container detail-body">
                <p class="detail-intro" id="detail-short-desc">Kısa Açıklama</p>

                <ul class="nav custom-nav-tabs" id="detailTabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="asamalar-tab" data-bs-toggle="tab" data-bs-target="#asamalar-pane" type="button" role="tab" aria-controls="asamalar-pane" aria-selected="true">
                            <i class="bi bi-info-circle"></i> Proje Hakkında
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="etkinlikler-tab" data-bs-toggle="tab" data-bs-target="#etkinlikler-pane" type="button" role="tab" aria-controls="etkinlikler-pane" aria-selected="false">
                            <i class="bi bi-calendar-event"></i> Etkinlikler
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="gorev-tab" data-bs-toggle="tab" data-bs-target="#gorev-pane" type="button" role="tab" aria-controls="gorev-pane" aria-selected="false">
                            <i class="bi bi-people"></i> Görev Alanlar
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="iletisim-tab" data-bs-toggle="tab" data-bs-target="#iletisim-pane" type="button" role="tab" aria-controls="iletisim-pane" aria-selected="false">
                            <i class="bi bi-link-45deg"></i> Bağlantılar
                        </button>
                    </li>
                </ul>
                <div class="tab-content custom-tab-content" id="detailTabsContent">
                    <div class="tab-pane fade show active" id="asamalar-pane" role="tabpanel" aria-labelledby="asamalar-tab" tabindex="0">
                        <div class="content-box" id="detail-asamalar"></div>
                    </div>
                    <div class="tab-pane fade" id="etkinlikler-pane" role="tabpanel" aria-labelledby="etkinlikler-tab" tabindex="0">
                        <div class="content-box" id="detail-etkinlikler"></div>
                    </div>
                    <div class="tab-pane fade" id="gorev-pane" role="tabpanel" aria-labelledby="gorev-tab" tabindex="0">
                        <div class="content-box" id="detail-gorev"></div>
                    </div>
                    <div class="tab-pane fade" id="iletisim-pane" role="tabpanel" aria-labelledby="iletisim-tab" tabindex="0">
                        <div class="content-box" id="detail-iletisim"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Ekibimiz Sayfası -->
        <div id="custom-team-detail-view" class="custom-detail-page" style="display:none; background: #f8f9fa; min-height: 100vh;">
            <div class="detail-header-bg" style="height: 300px; background-image: url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');">
                <div class="back-button-wrapper">
                    <a href="#" class="btn-back" onclick="event.preventDefault(); window.scrollToSection('root');">
                        <i class="bi bi-arrow-left"></i> Anasayfaya Dön
                    </a>
                </div>
                <div class="container detail-header-content">
                    <h1 class="detail-title">Ekibimiz</h1>
                    <div class="detail-meta">
                        <span>YÜZAG Hareketi'ne gönül vermiş yönetim kadromuz ve komisyonlarımız.</span>
                    </div>
                </div>
            </div>
            
            <div class="container" style="padding: 60px 0 80px 0;">
                <div id="team-president-message-container" style="margin-bottom: 50px;"></div>
                
                <h3 class="text-center mb-5" style="color:#0f172a; font-weight:700;">Yönetim ve Komisyonlar</h3>
                <div class="row gy-5" id="team-grid"></div>
            </div>
        </div>

        <!-- Yüzag Bilgilendiriyor Sayfası -->
        <div id="custom-bilgilendiriyor-view" class="custom-detail-page" style="display:none; background: #fff; min-height: 100vh;">
            <div class="detail-header-bg" style="height: 300px; background-image: url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');">
                <div class="back-button-wrapper">
                    <a href="#" class="btn-back" onclick="event.preventDefault(); window.scrollToSection('root');">
                        <i class="bi bi-arrow-left"></i> Anasayfaya Dön
                    </a>
                </div>
                <div class="container detail-header-content">
                    <h1 class="detail-title">YÜZAG Bilgilendiriyor</h1>
                    <div class="detail-meta">
                        <span>Videolu anlatımlar ve bilgilendirici içerikler.</span>
                    </div>
                </div>
            </div>
            <div class="container" style="padding: 60px 0 80px 0;">
                <div class="row gy-4" id="bilgilendiriyor-grid"></div>
            </div>
        </div>

        <!-- Sosyal Medya Sayfası -->
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

        <!-- Bağış Yap Sayfası -->
        <div id="custom-bagis-yap-view" class="custom-detail-page" style="display:none; background: #f8f9fa; min-height: 100vh;">
            <div class="detail-header-bg" style="height: 300px; background-image: url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'); background-color: #14b8a6;">
                <div class="back-button-wrapper">
                    <a href="#" class="btn-back" onclick="event.preventDefault(); window.scrollToSection('root');">
                        <i class="bi bi-arrow-left"></i> Anasayfaya Dön
                    </a>
                </div>
                <div class="header-overlay"></div>
            </div>
            
            <div class="container" style="margin-top: -100px; padding-bottom: 80px; position: relative; z-index: 10;">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="card shadow-sm border-0" style="border-radius: 20px; padding: 40px;">
                            <h1 class="detail-title text-center mb-4" style="color: #f59e0b;">Bağış Yap</h1>
                            <p class="text-center mb-5" style="font-size: 1.1rem; color: #4b5563;">
                                Yüzyılın Aile ve Gençlik Hareketi Derneği faaliyetlerine destek olmak için aşağıdaki banka hesap bilgilerimizi kullanabilirsiniz.
                            </p>
                            
                            <div class="bank-details" style="background: #f1f5f9; padding: 30px; border-radius: 15px; margin-bottom: 20px;">
                                <h4 style="color: #1e293b; font-weight: 700; margin-bottom: 10px;">Banka Hesap Bilgileri</h4>
                                <div style="margin-bottom: 25px;">
                                    <strong style="color: #64748b; font-size: 0.9rem; text-transform: uppercase;">Hesap Adı:</strong><br>
                                    <span style="font-size: 1.1rem; color: #0f172a; font-weight: 600;">Yüzyılın Aile ve Gençlik Hareketi Derneği</span>
                                </div>
                                
                                <div class="iban-group" style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #cbd5e1;">
                                    <strong style="color: #14b8a6; font-size: 1rem;">Türk Lirası IBAN:</strong><br>
                                    <span style="font-size: 1.2rem; color: #0f172a; font-family: monospace; font-weight: 600;">TR39 0001 0014 8598 1000 2950 01</span>
                                </div>
                                
                                <div class="iban-group" style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #cbd5e1;">
                                    <strong style="color: #3b82f6; font-size: 1rem;">Euro IBAN:</strong><br>
                                    <span style="font-size: 1.2rem; color: #0f172a; font-family: monospace; font-weight: 600;">TR12 0001 0014 8598 1000 2950 02</span>
                                </div>
                                
                                <div class="iban-group">
                                    <strong style="color: #10b981; font-size: 1rem;">Dolar IBAN:</strong><br>
                                    <span style="font-size: 1.2rem; color: #0f172a; font-family: monospace; font-weight: 600;">TR82 0001 0014 8598 1000 2950 03</span>
                                </div>
                            </div>
                            
                            <div class="alert alert-info text-center" style="border-radius: 10px; background-color: #e0f2fe; border: none; color: #0369a1;">
                                <i class="bi bi-info-circle-fill me-2"></i> Lütfen bağış yaparken açıklama kısmına adınızı, soyadınızı ve iletişim numaranızı yazmayı unutmayınız.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Gönüllü Ol Form Sayfası -->
        <div id="custom-gonullu-ol-view" class="custom-detail-page" style="display:none; background: #f8f9fa; min-height: 100vh;">
            <div class="detail-header-bg" style="height: 300px; background-image: url('https://images.unsplash.com/photo-1593113565214-80af5dff60f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'); background-color: #14b8a6;">
                <div class="back-button-wrapper">
                    <a href="#" class="btn-back" onclick="event.preventDefault(); window.scrollToSection('root');">
                        <i class="bi bi-arrow-left"></i> Anasayfaya Dön
                    </a>
                </div>
                <div class="header-overlay"></div>
            </div>
            
            <div class="container" style="margin-top: -100px; padding-bottom: 80px; position: relative; z-index: 10;">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="card form-card shadow-sm border-0" style="border-radius: 20px; padding: 40px; background: #fff;">
                            <h2 class="detail-title text-center mb-4" style="color: #0f172a;">Gönüllü Başvuru Formu</h2>
                            <p class="text-center text-muted mb-4">YÜZAG Hareketi ailesine katılmak için lütfen aşağıdaki formu eksiksiz doldurun.</p>
                            
                            <form id="gonullu-form" onsubmit="event.preventDefault(); window.submitGonulluForm();">
                                <!-- Form içeriği API vs bağlanacaksa buraya -->
                                <div class="mb-3">
                                    <label class="form-label" style="font-weight:600;">Ad Soyad</label>
                                    <input type="text" class="form-control" required style="border-radius:10px; padding:12px;">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" style="font-weight:600;">Telefon</label>
                                    <input type="tel" class="form-control" required style="border-radius:10px; padding:12px;">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" style="font-weight:600;">E-posta</label>
                                    <input type="email" class="form-control" required style="border-radius:10px; padding:12px;">
                                </div>
                                <div class="mb-4">
                                    <label class="form-label" style="font-weight:600;">Mesajınız / Neden Gönüllü Olmak İstiyorsunuz?</label>
                                    <textarea class="form-control" rows="4" style="border-radius:10px; padding:12px;"></textarea>
                                </div>
                                <button type="submit" class="btn w-100 py-3" style="background:#14b8a6; color:#fff; border-radius:10px; font-weight:bold; font-size:1.1rem;">Başvuruyu Gönder</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Genç Gönüllü Ol Form Sayfası -->
        <div id="custom-genc-gonullu-ol-view" class="custom-detail-page" style="display:none; background: #f8f9fa; min-height: 100vh;">
            <div class="detail-header-bg" style="height: 300px; background-image: url('https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'); background-color: #14b8a6;">
                <div class="back-button-wrapper">
                    <a href="#" class="btn-back" onclick="event.preventDefault(); window.scrollToSection('root');">
                        <i class="bi bi-arrow-left"></i> Anasayfaya Dön
                    </a>
                </div>
                <div class="header-overlay"></div>
            </div>
            
            <div class="container" style="margin-top: -100px; padding-bottom: 80px; position: relative; z-index: 10;">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="card form-card shadow-sm border-0" style="border-radius: 20px; padding: 40px; background: #fff;">
                            <h2 class="detail-title text-center mb-4" style="color: #0f172a;">Genç Gönüllü Başvuru Formu</h2>
                            <p class="text-center text-muted mb-4">Lise veya Üniversite okuyan genç gönüllülerimiz için özel form.</p>
                            
                            <form id="genc-gonullu-form" onsubmit="event.preventDefault(); window.submitGonulluForm();">
                                <div class="mb-3">
                                    <label class="form-label" style="font-weight:600;">Ad Soyad</label>
                                    <input type="text" class="form-control" required style="border-radius:10px; padding:12px;">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" style="font-weight:600;">Telefon</label>
                                    <input type="tel" class="form-control" required style="border-radius:10px; padding:12px;">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" style="font-weight:600;">E-posta</label>
                                    <input type="email" class="form-control" required style="border-radius:10px; padding:12px;">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" style="font-weight:600;">Okul / Bölüm</label>
                                    <input type="text" class="form-control" required style="border-radius:10px; padding:12px;">
                                </div>
                                <button type="submit" class="btn w-100 py-3" style="background:#14b8a6; color:#fff; border-radius:10px; font-weight:bold; font-size:1.1rem;">Başvuruyu Gönder</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    \`;

    const rootDiv = document.getElementById('root');
    if (rootDiv) {
        // Zaten eklenmişse ekleme yapma
        if (!document.getElementById('custom-toast-container')) {
            const footer = rootDiv.querySelector('footer');
            if (footer) footer.insertAdjacentHTML('beforebegin', toastContainer + detailHTML);
            else rootDiv.insertAdjacentHTML('beforeend', toastContainer + detailHTML);
        }
    }
}

function renderAllProjectsPage() {
    const grid = document.getElementById('all-projects-grid');
    if (!grid) return;
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
    if (!grid) return;
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

function renderTeamPage() {
    const teamGrid = document.getElementById('team-grid');
    if(teamGrid) {
        teamGrid.innerHTML = teamData.map(member => \`
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="card border-0 shadow-sm text-center h-100" style="border-radius: 15px; overflow: hidden; transition: transform 0.3s ease;">
                    <div class="bg-light d-flex align-items-center justify-content-center" style="height: 250px;">
                        <img src="\${member.image}" alt="\${member.name}" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="card-body p-4">
                        <h5 class="card-title" style="font-weight: 700; color: #0f172a;">\${member.name}</h5>
                        <p class="card-text" style="color: #14b8a6; font-weight: 600; font-size: 0.95rem;">\${member.role}</p>
                    </div>
                </div>
            </div>
        \`).join('');
    }
}

function renderBilgilendiriyorPage() {
    const grid = document.getElementById('bilgilendiriyor-grid');
    if(grid) {
        grid.innerHTML = bilgilendiriyorData.map(v => \`
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card border-0 shadow-sm h-100" style="border-radius: 15px; overflow: hidden;">
                    \${v.videoId 
                        ? \`<div class="ratio ratio-16x9"><iframe src="https://www.youtube.com/embed/\${v.videoId}" allowfullscreen></iframe></div>\`
                        : \`<div class="bg-light d-flex align-items-center justify-content-center" style="height:200px;"><i class="bi bi-play-circle" style="font-size:3rem; color:#cbd5e1;"></i></div>\`
                    }
                    <div class="card-body p-4">
                        <h5 class="card-title" style="font-weight: 600; color: #0f172a;">\${v.title}</h5>
                        <p class="text-muted small mt-2"><i class="bi bi-calendar3"></i> \${v.date}</p>
                    </div>
                </div>
            </div>
        \`).join('');
    }
}
`;

    // 3. Add window.openDetail
    const openDetail = `
window.openDetail = function(id, type) {
    let dataObj = null;
    if (type === 'project') dataObj = projectsData.find(p => p.id == id);
    else if (type === 'announcement') dataObj = announcementsData.find(p => p.id == id);
    else return;

    if (!dataObj) return;

    window.navigateTo(type + '-' + id);

    document.getElementById('detail-title').innerText = dataObj.title;
    document.getElementById('detail-date').innerText = dataObj.date;
    document.getElementById('detail-location').innerText = dataObj.location;
    document.getElementById('detail-short-desc').innerText = dataObj.shortDesc;
    
    document.getElementById('detail-status').innerText = dataObj.status;
    document.getElementById('detail-status').className = 'custom-badge mb-3 ' + (dataObj.status === 'Tamamlandı' ? 'badge-completed' : 'badge-ongoing');

    const headerBg = document.getElementById('detail-header-bg');
    if (headerBg) {
        headerBg.style.backgroundImage = \`url('\${dataObj.image}')\`;
    }

    document.getElementById('detail-asamalar').innerHTML = dataObj.tabs.asamalar || '<p>İçerik bulunamadı.</p>';
    document.getElementById('detail-etkinlikler').innerHTML = dataObj.tabs.etkinlikler || '<p>İçerik bulunamadı.</p>';
    document.getElementById('detail-gorev').innerHTML = dataObj.tabs.gorevAlanlar || '<p>İçerik bulunamadı.</p>';
    document.getElementById('detail-iletisim').innerHTML = dataObj.tabs.iletisim || '<p>İçerik bulunamadı.</p>';

    document.getElementById('asamalar-tab').click();
    window.scrollTo(0,0);
};

window.submitGonulluForm = function() {
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.innerHTML = \`<i class="bi bi-check-circle-fill"></i> Başvurunuz alınmıştır. Teşekkür ederiz.\`;
    document.getElementById('custom-toast-container').appendChild(toast);
    
    setTimeout(() => { toast.classList.add('show'); }, 10);
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3000);
    
    event.target.reset();
};
`;

    // 4. Add window.scrollToSection and navigateTo (handleRouting logic)
    const routingLogic = `
window.scrollToSection = function(sectionId) {
    const rootNode = document.getElementById('root');
    if(rootNode) {
        Array.from(rootNode.children).forEach(child => {
            if(!child.id || (!child.id.startsWith('custom-') && child.id !== 'splash')) {
                child.style.display = '';
            } else if (child.id.startsWith('custom-') && child.id.endsWith('-view')) {
                child.style.display = 'none';
            }
        });
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    history.pushState(null, null, '/');
};

window.navigateTo = function(hash) {
    history.pushState(null, null, '#' + hash);
    handleRouting();
};

function handleRouting() {
    const hash = window.location.hash.replace('#', '');
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

    const isDetailPage = hash === 'ekibimiz' || hash === 'bilgilendiriyor' || hash === 'sosyalmedya' || hash === 'projeler' || hash === 'duyurular' || hash === 'gonullu-ol' || hash === 'genc-gonullu-ol' || hash === 'bagis-yap' || hash.startsWith('proje-') || hash.startsWith('duyuru-') || hash.startsWith('bilgi-');

    if (rootNode) {
        Array.from(rootNode.children).forEach(child => {
            if(!child.id || (!child.id.startsWith('custom-') && child.id !== 'splash')) {
                child.style.display = isDetailPage ? 'none' : '';
            }
        });
    }

    Object.values(views).forEach(v => { if(v) v.style.display = 'none'; });

    if (isDetailPage) {
        let sayfa = 'detail';
        if (hash === 'ekibimiz') sayfa = 'team';
        else if (hash === 'bilgilendiriyor') sayfa = 'bilgi';
        else if (hash === 'sosyalmedya') sayfa = 'sosyal';
        else if (hash === 'projeler') sayfa = 'projeler';
        else if (hash === 'duyurular') sayfa = 'duyurular';
        else if (hash === 'gonullu-ol') sayfa = 'gonullu';
        else if (hash === 'genc-gonullu-ol') sayfa = 'gencGonullu';
        else if (hash === 'bagis-yap') sayfa = 'bagis';

        if(sayfa === 'detail' && views.detail) { views.detail.style.display = 'block'; }
        else if(sayfa === 'team' && views.team) { views.team.style.display = 'block'; window.scrollTo(0,0); renderTeamPage(); }
        else if(sayfa === 'bilgi' && views.bilgi) { views.bilgi.style.display = 'block'; window.scrollTo(0,0); renderBilgilendiriyorPage(); }
        else if(sayfa === 'sosyal' && views.sosyal) { views.sosyal.style.display = 'block'; window.scrollTo(0,0); }
        else if(sayfa === 'projeler' && views.projeler) { views.projeler.style.display = 'block'; window.scrollTo(0,0); renderAllProjectsPage(); }
        else if(sayfa === 'duyurular' && views.duyurular) { views.duyurular.style.display = 'block'; window.scrollTo(0,0); renderAllAnnouncementsPage(); }
        else if(sayfa === 'gonullu' && views.gonullu) { views.gonullu.style.display = 'block'; window.scrollTo(0,0); }
        else if(sayfa === 'gencGonullu' && views.gencGonullu) { views.gencGonullu.style.display = 'block'; window.scrollTo(0,0); }
        else if(sayfa === 'bagis' && views.bagis) { views.bagis.style.display = 'block'; window.scrollTo(0,0); }
    } else {
        window.scrollTo(0,0);
    }
}
window.addEventListener('hashchange', handleRouting);
`;

    // 5. Add fixCorporateTexts, enhanceContactFormAndMap, injectSections
    const utilFunctions = `
function fixCorporateTexts() {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    headings.forEach(h => {
        const text = h.innerText.trim().toLowerCase();
        const section = h.closest('section') || h.parentElement.parentElement;
        if (!section || section.classList.contains('custom-team-section')) return;

        if (text.includes('afiş yarışması') || text.includes('afis yarismasi') || text.includes('duyuru')) {
            section.style.display = 'none';
        }

        if (text.includes('başkan') || text.includes('baskan') || text.includes('mesaj') || text.includes('davet')) {
            const teamPresidentContainer = document.getElementById('team-president-message-container');
            if (teamPresidentContainer && !teamPresidentContainer.innerHTML.includes(text)) {
                teamPresidentContainer.innerHTML = section.outerHTML;
            }
            section.style.display = 'none';
        }
    });
}

function enhanceContactFormAndMap() {
    const forms = document.querySelectorAll('form:not(#gonullu-form):not(#genc-gonullu-form)');
    forms.forEach(form => {
        if (!form.dataset.enhanced) {
            form.dataset.enhanced = 'true';
            const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]');
            if(submitBtn) {
                submitBtn.innerHTML = 'Gönder <i class="bi bi-send ms-2"></i>';
                submitBtn.className = 'btn form-btn-submit';
            }
            
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const toast = document.createElement('div');
                toast.className = 'custom-toast';
                toast.innerHTML = '<i class="bi bi-check-circle-fill"></i> Mesajınız başarıyla iletildi. Teşekkür ederiz.';
                document.getElementById('custom-toast-container').appendChild(toast);
                setTimeout(() => toast.classList.add('show'), 10);
                setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3000);
                form.reset();
            });
        }
    });
}

function injectSections() {
    // Left empty for compatibility
}
`;

    // 6. Add footer logic back
    const footerLogic = `
function fetchDatabaseData() {
    fetch('http://127.0.0.1:8000/api/projects')
        .then(res => res.json())
        .then(data => {
            if(data && data.length > 0) projectsData = data;
        }).catch(err => {
            console.warn("Database connection could not be established. Falling back to default static data.", err);
        });
}

function injectCustomFooter() {
    if (document.querySelector('.custom-premium-footer')) return;
    
    const footerHTML = \`
        <style>
            .custom-premium-footer {
                background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                color: #e2e8f0;
                padding: 80px 0 30px 0;
                font-family: 'Inter', sans-serif;
                border-top: 5px solid #14b8a6;
                position: relative;
                overflow: hidden;
            }
            .custom-premium-footer::before {
                content: '';
                position: absolute;
                top: -50px;
                right: -50px;
                width: 300px;
                height: 300px;
                background: radial-gradient(circle, rgba(20,184,166,0.1) 0%, rgba(20,184,166,0) 70%);
                border-radius: 50%;
            }
            .footer-col {
                margin-bottom: 40px;
            }
            .footer-title {
                color: #fff;
                font-size: 1.5rem;
                font-weight: 700;
                margin-bottom: 25px;
                position: relative;
                padding-bottom: 12px;
            }
            .footer-title::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 50px;
                height: 3px;
                background: #14b8a6;
                border-radius: 2px;
            }
            .footer-menu {
                list-style: none;
                padding: 0;
                margin: 0;
            }
            .footer-menu li {
                margin-bottom: 15px;
            }
            .footer-menu a {
                color: #cbd5e1;
                text-decoration: none;
                font-size: 1.05rem;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
            }
            .footer-menu a i {
                margin-right: 10px;
                color: #14b8a6;
                font-size: 1.1rem;
                transition: transform 0.3s;
            }
            .footer-menu a:hover {
                color: #14b8a6;
                transform: translateX(5px);
            }
            .footer-menu a:hover i {
                transform: scale(1.2);
            }
            .footer-projects-list {
                list-style: none;
                padding: 0;
                margin: 0;
                margin-top: 20px;
                border-top: 1px solid rgba(255,255,255,0.1);
                padding-top: 20px;
            }
            .footer-projects-list li {
                margin-bottom: 12px;
            }
            .footer-projects-list a {
                color: #94a3b8;
                text-decoration: none;
                font-size: 0.95rem;
                transition: color 0.3s;
                display: flex;
                align-items: flex-start;
            }
            .footer-projects-list a::before {
                content: '•';
                color: #f59e0b;
                font-weight: bold;
                margin-right: 8px;
            }
            .footer-projects-list a:hover {
                color: #f59e0b;
            }
            .footer-logo {
                max-width: 220px;
                margin-bottom: 25px;
                filter: brightness(0) invert(1);
            }
            .footer-contact li {
                display: flex;
                align-items: flex-start;
                margin-bottom: 20px;
                color: #cbd5e1;
            }
            .footer-contact i {
                font-size: 1.3rem;
                color: #14b8a6;
                margin-right: 15px;
                margin-top: 3px;
            }
            .footer-social {
                display: flex;
                gap: 15px;
                margin-top: 30px;
            }
            .footer-social a {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 45px;
                height: 45px;
                border-radius: 50%;
                background: rgba(255,255,255,0.05);
                color: #fff;
                font-size: 1.2rem;
                transition: all 0.3s ease;
                text-decoration: none;
            }
            .footer-social a:hover {
                background: #14b8a6;
                transform: translateY(-5px);
                box-shadow: 0 10px 20px rgba(20,184,166,0.3);
            }
            .footer-bottom {
                margin-top: 60px;
                padding-top: 25px;
                border-top: 1px solid rgba(255,255,255,0.1);
                text-align: center;
                color: #64748b;
                font-size: 0.9rem;
            }

            /* Mobil Uyumlu Düzenlemeler */
            @media (max-width: 768px) {
                .custom-premium-footer {
                    padding: 50px 0 20px 0;
                    text-align: center;
                }
                .footer-col {
                    margin-bottom: 50px;
                }
                .footer-logo {
                    margin-left: auto;
                    margin-right: auto;
                    display: block;
                }
                .footer-contact li {
                    justify-content: center;
                    text-align: center;
                }
                .footer-social {
                    justify-content: center;
                }
                .footer-menu a {
                    justify-content: center;
                }
                .footer-projects-list a {
                    justify-content: center;
                }
                .footer-projects-list a::before {
                    display: none;
                }
                .footer-title::after {
                    left: 50%;
                    transform: translateX(-50%);
                }
                .footer-projects-list {
                    border-top: none;
                }
                .mobile-justify-center {
                    justify-content: center !important;
                }
            }
        </style>
        
        <footer class="custom-premium-footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12 footer-col pe-lg-5">
                        <img src="/assets/images/logo.png" alt="YÜZAG Logo" class="footer-logo">
                        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 25px; line-height: 1.6;">YÜZAG; yüzyılın aile, gençlik ve toplum yapısını güçlendirmek adına eğitim, kültür ve sosyal yardımlaşma projeleri yürüten öncü bir sivil inisiyatiftir.</p>
                        <ul class="footer-contact footer-menu" style="margin-bottom: 25px;">
                            <li>
                                <i class="bi bi-geo-alt-fill"></i>
                                <span>Fatih, İstanbul, Türkiye</span>
                            </li>
                            <li>
                                <i class="bi bi-envelope-fill"></i>
                                <span><a href="mailto:info@yuzag.org" style="color:#cbd5e1;">info@yuzag.org</a></span>
                            </li>
                        </ul>
                        <div class="footer-social">
                            <a href="https://instagram.com/yuzag_hareketi" target="_blank" title="Instagram"><i class="bi bi-instagram"></i></a>
                            <a href="https://twitter.com" target="_blank" title="X (Twitter)"><i class="bi bi-twitter-x"></i></a>
                            <a href="https://youtube.com" target="_blank" title="YouTube"><i class="bi bi-youtube"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-col">
                        <h4 class="footer-title">Hızlı Menü</h4>
                        <ul class="footer-menu">
                            <li><a href="/" onclick="event.preventDefault(); window.scrollToSection('root');"><i class="bi bi-house-door"></i> Anasayfa</a></li>
                            <li><a href="/#ekibimiz" onclick="event.preventDefault(); window.navigateTo('ekibimiz');"><i class="bi bi-people"></i> Ekibimiz</a></li>
                            <li><a href="/#sosyalmedya" onclick="event.preventDefault(); window.navigateTo('sosyalmedya');"><i class="bi bi-hash"></i> Sosyal Medya</a></li>
                            <li style="margin-top: 15px;"><a href="/gonullu-ol" onclick="event.preventDefault(); window.navigateTo('gonullu-ol');"><i class="bi bi-heart-fill"></i> Gönüllü Ol</a></li>
                            <li><a href="/genc-gonullu-ol" onclick="event.preventDefault(); window.navigateTo('genc-gonullu-ol');"><i class="bi bi-heart-fill"></i> Genç Gönüllü Ol</a></li>
                            <li><a href="/bagis-yap" onclick="event.preventDefault(); window.navigateTo('bagis-yap');">Bağış Yap</a></li>
                        </ul>
                    </div>
                    
                    <div class="col-lg-5 col-md-6 footer-col">
                        <h4 class="footer-title">Çalışmalarımız</h4>
                        <ul class="footer-projects-list" id="footer-sample-projects" style="margin-top: 0; padding-top: 0;">
                            <!-- JS ile doldurulacak -->
                        </ul>
                        <div class="mobile-justify-center" style="margin-top: 25px; display: flex; gap: 15px;">
                            <a href="/#projeler" onclick="event.preventDefault(); window.navigateTo('projeler');" style="color: #14b8a6; text-decoration: none; font-weight: 600; font-size: 0.95rem; border-bottom: 1px dashed #14b8a6; padding-bottom: 2px;">Tüm Projelerini Gör <i class="bi bi-arrow-right"></i></a>
                            <a href="/#duyurular" onclick="event.preventDefault(); window.navigateTo('duyurular');" style="color: #14b8a6; text-decoration: none; font-weight: 600; font-size: 0.95rem; border-bottom: 1px dashed #14b8a6; padding-bottom: 2px;">Tüm Duyurular <i class="bi bi-arrow-right"></i></a>
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
`;

    // Write it all back out
    content = content + closeNavbar + injectViews + openDetail + routingLogic + utilFunctions + footerLogic + '\n';
    
    // Add the rest of the file that was kept (like initProjectsPlugin)
    const initPluginStr = `function initProjectsPlugin() {`;
    const restIndex = fs.readFileSync(path, 'utf8').indexOf(initPluginStr);
    
    if (restIndex !== -1) {
       content += fs.readFileSync(path, 'utf8').substring(restIndex);
    }
    
    fs.writeFileSync(path, content);
    console.log('Restored the missing functions successfully!');
}
