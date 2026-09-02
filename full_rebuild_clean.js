const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';

// 1. Load recovered_content.txt for data (projectsData, announcementsData, etc.)
const recovered = fs.readFileSync('/Users/sercankostence/Desktop/build/recovered_content.txt', 'utf8');

// Find where data section ends (before injectCustomViews)
const dataEndIndex = recovered.indexOf('// 2. Özel Görünümler');
const dataSection = recovered.substring(0, dataEndIndex);

// Now construct the complete clean single file:
const fullCode = `${dataSection}

// 2. Özel Görünümler (Detail, Team, Bilgilendiriyor, Sosyal Medya, Projeler, Duyurular, Bağış, Gönüllü, Genç Gönüllü)
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
            <div class="detail-header-bg" style="height: 300px; background-image: url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');">
                <div class="back-button-wrapper">
                    <a href="#" class="btn-back" onclick="event.preventDefault(); window.scrollToSection('root');">
                        <i class="bi bi-arrow-left"></i> Anasayfaya Dön
                    </a>
                </div>
                <div class="container detail-header-content">
                    <h1 class="detail-title">Gönüllü Ol</h1>
                    <div class="detail-meta">
                        <span>YÜZAG ailesine katılarak geleceğe umut olun.</span>
                    </div>
                </div>
            </div>
            
            <div class="container custom-form-container">
                <div class="form-card">
                    <div class="form-card-header">
                        <h2 class="form-card-title">YÜZAG Gönüllü Başvuru Formu</h2>
                        <p class="form-card-subtitle">Siz de YÜZAG Gönüllüsü Olabilirsiniz. Lütfen aşağıdaki formu doldurun:</p>
                    </div>
                    
                    <form id="gonullu-form" onsubmit="window.handleFormSubmit(event, 'gonullu')">
                        <h3 class="form-section-title">Kişisel Bilgiler</h3>
                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">TC Kimlik Numaranız <span class="required">*</span></label>
                                <input type="text" name="tc" class="form-control-custom" placeholder="11 Haneli TC Kimlik Numaranız" maxlength="11" required>
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">Ad Soyadınız <span class="required">*</span></label>
                                <input type="text" name="adSoyad" class="form-control-custom" placeholder="Adınız ve Soyadınız" required>
                            </div>
                        </div>
                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">Doğum Tarihiniz <span class="required">*</span></label>
                                <input type="date" name="dogumTarihi" class="form-control-custom" required>
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">Aktif öğrenci misiniz? <span class="required">*</span></label>
                                <div class="form-radio-group-custom">
                                    <label class="form-radio-custom">
                                        <input type="radio" name="aktifOgrenci" value="Evet" class="form-radio-input-custom" required> Evet
                                    </label>
                                    <label class="form-radio-custom">
                                        <input type="radio" name="aktifOgrenci" value="Hayır" class="form-radio-input-custom" required> Hayır
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">Okumakta olduğunuz / en son mezun olduğunuz okul <span class="required">*</span></label>
                                <input type="text" name="okul" class="form-control-custom" placeholder="Okul Adı ve Bölümünüz" required>
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">Öğrenim Durumunuz <span class="required">*</span></label>
                                <select name="ogrenimDurumu" class="form-control-custom" required style="appearance: auto;">
                                    <option value="" disabled selected>Seçiniz</option>
                                    <option value="İlköğretim">İlköğretim</option>
                                    <option value="Lise">Lise</option>
                                    <option value="Ön Lisans">Ön Lisans</option>
                                    <option value="Lisans">Lisans</option>
                                    <option value="Yüksek Lisans">Yüksek Lisans</option>
                                    <option value="Doktora">Doktora</option>
                                </select>
                            </div>
                        </div>
                        <h3 class="form-section-title">İletişim Bilgileri</h3>
                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">Cep Numaranız <span class="required">*</span></label>
                                <input type="tel" name="tel" class="form-control-custom" placeholder="05xx xxx xx xx" required>
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">E-Postanız <span class="required">*</span></label>
                                <input type="email" name="email" class="form-control-custom" placeholder="Örn: isim@eposta.com" required>
                            </div>
                        </div>
                        <div class="form-group-custom">
                            <label class="form-label-custom">Yaşadığınız İl <span class="required">*</span></label>
                            <input type="text" name="il" class="form-control-custom" placeholder="Örn: İstanbul" required>
                        </div>
                        <h3 class="form-section-title">Motivasyon</h3>
                        <div class="form-group-custom">
                            <label class="form-label-custom">YÜZAG gönüllüsü olma motivasyonunuz nedir? <span class="required">*</span></label>
                            <textarea name="motivasyon" class="form-control-custom" rows="4" placeholder="Kendinizi kısaca açıklayınız..." required></textarea>
                        </div>
                        <button type="submit" class="form-btn-submit" id="gonullu-submit-btn">Başvuruyu Gönder</button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Genç Gönüllü Ol Form Sayfası -->
        <div id="custom-genc-gonullu-ol-view" class="custom-detail-page" style="display:none; background: #f0fdfa; min-height: 100vh;">
            <div class="detail-header-bg" style="height: 300px; background-image: url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');">
                <div class="back-button-wrapper">
                    <a href="#" class="btn-back" onclick="event.preventDefault(); window.scrollToSection('root');">
                        <i class="bi bi-arrow-left"></i> Anasayfaya Dön
                    </a>
                </div>
                <div class="container detail-header-content">
                    <h1 class="detail-title">Genç Gönüllü Ol</h1>
                    <div class="detail-meta">
                        <span>Genç YÜZAG çatısı altında topluma değer katın.</span>
                    </div>
                </div>
            </div>
            
            <div class="container custom-form-container">
                <div class="form-card" style="border-color: rgba(20, 184, 166, 0.15);">
                    <div class="form-card-header">
                        <h2 class="form-card-title">Genç YÜZAG Gönüllü Başvuru Formu</h2>
                        <p class="form-card-subtitle">Siz de Genç YÜZAG Gönüllüsü Olabilirsiniz. Lütfen aşağıdaki formu doldurun:</p>
                    </div>
                    
                    <form id="genc-gonullu-form" onsubmit="window.handleFormSubmit(event, 'genc-gonullu')">
                        <h3 class="form-section-title">Kişisel Bilgiler</h3>
                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">TC Kimlik Numaranız <span class="required">*</span></label>
                                <input type="text" name="tc" class="form-control-custom" placeholder="11 Haneli TC Kimlik Numaranız" maxlength="11" required>
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">Ad Soyadınız <span class="required">*</span></label>
                                <input type="text" name="adSoyad" class="form-control-custom" placeholder="Adınız ve Soyadınız" required>
                            </div>
                        </div>
                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">Doğum Tarihiniz <span class="required">*</span></label>
                                <input type="date" name="dogumTarihi" class="form-control-custom" required>
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">Aktif öğrenci misiniz? <span class="required">*</span></label>
                                <div class="form-radio-group-custom">
                                    <label class="form-radio-custom">
                                        <input type="radio" name="aktifOgrenci" value="Evet" class="form-radio-input-custom" required> Evet
                                    </label>
                                    <label class="form-radio-custom">
                                        <input type="radio" name="aktifOgrenci" value="Hayır" class="form-radio-input-custom" required> Hayır
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">Okumakta olduğunuz / en son mezun olduğunuz okul <span class="required">*</span></label>
                                <input type="text" name="okul" class="form-control-custom" placeholder="Okul Adı ve Bölümünüz" required>
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">Öğrenim Durumunuz <span class="required">*</span></label>
                                <select name="ogrenimDurumu" class="form-control-custom" required style="appearance: auto;">
                                    <option value="" disabled selected>Seçiniz</option>
                                    <option value="İlköğretim">İlköğretim</option>
                                    <option value="Lise">Lise</option>
                                    <option value="Ön Lisans">Ön Lisans</option>
                                    <option value="Lisans">Lisans</option>
                                    <option value="Yüksek Lisans">Yüksek Lisans</option>
                                    <option value="Doktora">Doktora</option>
                                </select>
                            </div>
                        </div>
                        <h3 class="form-section-title">İletişim Bilgileri</h3>
                        <div class="form-grid-2">
                            <div class="form-group-custom">
                                <label class="form-label-custom">Cep Numaranız <span class="required">*</span></label>
                                <input type="tel" name="tel" class="form-control-custom" placeholder="05xx xxx xx xx" required>
                            </div>
                            <div class="form-group-custom">
                                <label class="form-label-custom">E-Postanız <span class="required">*</span></label>
                                <input type="email" name="email" class="form-control-custom" placeholder="Örn: isim@eposta.com" required>
                            </div>
                        </div>
                        <div class="form-group-custom">
                            <label class="form-label-custom">Yaşadığınız İl <span class="required">*</span></label>
                            <input type="text" name="il" class="form-control-custom" placeholder="Örn: İstanbul" required>
                        </div>
                        <h3 class="form-section-title">Motivasyon</h3>
                        <div class="form-group-custom">
                            <label class="form-label-custom">Genç YÜZAG gönüllüsü olma motivasyonunuz nedir? <span class="required">*</span></label>
                            <textarea name="motivasyon" class="form-control-custom" rows="4" placeholder="Kendinizi kısaca açıklayınız..." required></textarea>
                        </div>
                        <button type="submit" class="form-btn-submit" id="genc-gonullu-submit-btn">Başvuruyu Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    \`;

    const rootDiv = document.getElementById('root');
    if (rootDiv) {
        if (!document.getElementById('custom-toast-container')) {
            const footer = rootDiv.querySelector('footer');
            if (footer) footer.insertAdjacentHTML('beforebegin', toastContainer + detailHTML);
            else rootDiv.insertAdjacentHTML('beforeend', toastContainer + detailHTML);
        }
    } else {
        document.body.insertAdjacentHTML('beforeend', toastContainer + detailHTML);
    }
}

// 3. Anasayfa Bölümleri Enjeksiyonu (Projeler, Duyurular, Ekibimiz, vb.)
function injectSections() {
    if (document.getElementById('custom-projects-section')) return;

    let announcementSlidesHTML = announcementsData.map(a => createSlideHTML(a, 'announcement')).join('');
    const announcementsHTML = \`
        <section id="custom-announcements-section" class="custom-announcements-section">
            <div class="container">
                <div class="section-header-wrapper">
                    <h2 class="custom-section-title">Duyurular</h2>
                    <div class="custom-filters" id="announcement-filters">
                        <button class="filter-btn active" onclick="window.filterAnnouncements('Tümü', this)">Tümü</button>
                        <button class="filter-btn" onclick="window.filterAnnouncements('Yeni', this)">Yeni</button>
                        <button class="filter-btn" onclick="window.filterAnnouncements('Yakında', this)">Yakında</button>
                    </div>
                    <a href="#" class="btn-see-all" onclick="event.preventDefault(); window.navigateTo('duyurular');">Tüm Duyurular <i class="bi bi-arrow-right"></i></a>
                </div>
                <div class="swiper announcements-swiper">
                    <div class="swiper-wrapper" id="announcements-swiper-wrapper">
                        \${announcementSlidesHTML}
                    </div>
                    <div class="swiper-pagination announcements-pagination"></div>
                </div>
            </div>
        </section>
    \`;

    let projectSlidesHTML = projectsData.map(p => createSlideHTML(p, 'project')).join('');
    const projectsHTML = \`
        <section id="custom-projects-section" class="custom-projects-section">
            <div class="container">
                <div class="section-header-wrapper">
                    <h2 class="custom-section-title">Gönüllü Projelerimiz</h2>
                    <div class="custom-filters" id="project-filters">
                        <button class="filter-btn active" onclick="window.filterProjects('Tümü', this)">Tümü</button>
                        <button class="filter-btn" onclick="window.filterProjects('Devam Ediyor', this)">Devam Edenler</button>
                        <button class="filter-btn" onclick="window.filterProjects('Tamamlandı', this)">Tamamlananlar</button>
                    </div>
                    <a href="#" class="btn-see-all" onclick="event.preventDefault(); window.navigateTo('projeler');">Tümünü Gör <i class="bi bi-arrow-right"></i></a>
                </div>
                <div class="swiper projects-swiper">
                    <div class="swiper-wrapper" id="projects-swiper-wrapper">
                        \${projectSlidesHTML}
                    </div>
                    <div class="swiper-pagination projects-pagination"></div>
                </div>
            </div>
        </section>
    \`;

    let teamCardsHTML = teamData.slice(0, 4).map(t => \`
        <div class="team-card">
            <div class="team-img-wrapper"><img src="\${t.image}" alt="\${t.name}"></div>
            <div class="team-info"><h3 class="team-name">\${t.name}</h3><p class="team-role">\${t.role}</p></div>
        </div>
    \`).join('');

    const teamHTML = \`
        <section id="custom-team-section" class="custom-team-section">
            <div class="container">
                <div class="section-header-wrapper">
                    <h2 class="custom-section-title">Yönetim ve Komisyonlarımız</h2>
                    <a href="#" class="btn-see-all" onclick="event.preventDefault(); window.navigateTo('ekibimiz');">Ekibimizi ve Organizasyon Şemasını İncele <i class="bi bi-arrow-right"></i></a>
                </div>
                <div class="team-grid">\${teamCardsHTML}</div>
            </div>
        </section>
    \`;

    let videoSlidesHTML = bilgilendiriyorData.map(v => createVideoSlideHTML(v)).join('');
    const bilgilendiriyorHTML = \`
        <section id="custom-bilgilendiriyor-section" class="custom-announcements-section" style="background: #fff;">
            <div class="container">
                <div class="section-header-wrapper">
                    <h2 class="custom-section-title">YÜZAG Bilgilendiriyor</h2>
                    <a href="#" class="btn-see-all" onclick="event.preventDefault(); window.navigateTo('bilgilendiriyor');">Tüm Videoları Gör <i class="bi bi-arrow-right"></i></a>
                </div>
                <div class="swiper bilgilendiriyor-swiper">
                    <div class="swiper-wrapper">
                        \${videoSlidesHTML}
                    </div>
                    <div class="swiper-pagination bilgilendiriyor-pagination"></div>
                </div>
            </div>
        </section>
    \`;

    const fullHTML = bilgilendiriyorHTML + announcementsHTML + projectsHTML + teamHTML;

    const rootDiv = document.getElementById('root');
    if (rootDiv) {
        let insertTarget = null;
        const allHeadings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
        allHeadings.forEach(h => {
            const txt = h.innerText.trim().toLowerCase();
            if ((txt === 'iletişim' || txt === 'iletisim' || txt.includes('bize ulaşın') || txt.includes('bizimle iletişime geçin')) && !h.classList.contains('custom-section-title')) {
                const sec = h.closest('section');
                if (sec) insertTarget = sec;
            }
        });

        if (!insertTarget) {
            const form = document.querySelector('form');
            if (form) insertTarget = form.closest('section');
        }

        if (!insertTarget) {
            insertTarget = rootDiv.querySelector('footer');
        }

        if (insertTarget) {
            insertTarget.insertAdjacentHTML('beforebegin', fullHTML);
        } else {
            if (rootDiv.children[0]) rootDiv.children[0].insertAdjacentHTML('beforeend', fullHTML);
            else rootDiv.insertAdjacentHTML('beforeend', fullHTML);
        }

        setTimeout(() => { initSwipers(); addNavbarLink(); }, 100);
    }
}

// 4. Navbar Linkleri Ekleme
function addNavbarLink() {
    let projectsDropdown = projectsData.map(p => \`<li><a class="dropdown-item" href="#" onclick="event.preventDefault(); window.openDetail(\${p.id}, 'project')">\${p.title}</a></li>\`).join('');
    let announcementsDropdown = announcementsData.map(a => \`<li><a class="dropdown-item" href="#" onclick="event.preventDefault(); window.openDetail(\${a.id}, 'announcement')">\${a.title}</a></li>\`).join('');
    let bilgiDropdown = bilgilendiriyorData.map(b => \`<li><a class="dropdown-item" href="#" onclick="event.preventDefault(); window.navigateTo('bilgilendiriyor')">\${b.title}</a></li>\`).join('');

    const navbars = document.querySelectorAll('.navbar-nav, .nav-menu, ul.nav:not(.custom-nav-tabs)');
    navbars.forEach(nav => {
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

function handleRouting() {
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

function fixCorporateTexts() {}
function enhanceContactFormAndMap() {}
function fetchDatabaseData() {}

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
    const rootNode = document.getElementById('root');

    injectCustomFooter();

    if (rootNode) {
        const observer = new MutationObserver((mutations) => {
            injectCustomFooter();

            if (rootNode.children.length > 0 && !document.getElementById('custom-projects-section')) {
                setTimeout(() => {
                    injectCustomViews();
                    injectCustomFooter();
                    injectSections();
                    addNavbarLink();
                    handleRouting();
                }, 400);
            }
        });
        observer.observe(rootNode, { childList: true, subtree: true });

        if (rootNode.children.length > 0) {
            setTimeout(() => {
                injectCustomViews();
                injectCustomFooter();
                injectSections();
                addNavbarLink();
                handleRouting();
            }, 400);
        }
    }
}

initProjectsPlugin();
`;

fs.writeFileSync(path, fullCode);
console.log("Full clean rebuild complete!");
