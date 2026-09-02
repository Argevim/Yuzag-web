const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

const targetRegex = /<footer class="custom-premium-footer">[\s\S]*?<\/footer>/;

const newFooterHTML = `<footer class="custom-premium-footer">
            <div class="container">
                <div class="row">
                    <!-- Sol Sütun: Logo ve İletişim -->
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

                    <!-- Orta Sütun: Hızlı Menü -->
                    <div class="col-lg-3 col-md-6 footer-col">
                        <h4 class="footer-title">Hızlı Menü</h4>
                        <ul class="footer-menu">
                            <li><a href="#" onclick="event.preventDefault(); window.scrollToSection('root');"><i class="bi bi-house-door"></i> Anasayfa</a></li>
                            <li><a href="#" onclick="event.preventDefault(); window.navigateTo('ekibimiz');"><i class="bi bi-people"></i> Ekibimiz</a></li>
                            <li><a href="#" onclick="event.preventDefault(); window.navigateTo('sosyalmedya');"><i class="bi bi-hash"></i> Sosyal Medya</a></li>
                            <li style="margin-top: 15px;"><a href="#" onclick="event.preventDefault(); window.navigateTo('gonullu-ol');"><i class="bi bi-heart-fill"></i> Gönüllü Ol</a></li>
                            <li><a href="#" onclick="event.preventDefault(); window.navigateTo('genc-gonullu-ol');"><i class="bi bi-heart-fill"></i> Genç Gönüllü Ol</a></li>
                            <li><a href="#" onclick="event.preventDefault(); window.navigateTo('bagis-yap');">Bağış Yap</a></li>
                        </ul>
                    </div>
                    
                    <!-- Sağ Sütun: Çalışmalarımız (Projeler & Duyurular) -->
                    <div class="col-lg-5 col-md-6 footer-col">
                        <h4 class="footer-title">Çalışmalarımız</h4>
                        <ul class="footer-projects-list" id="footer-sample-projects" style="border-top: none; margin-top: 0; padding-top: 0;">
                            <!-- JS ile doldurulacak -->
                        </ul>
                        <div style="margin-top: 25px; display: flex; gap: 15px;">
                            <a href="#" onclick="event.preventDefault(); window.navigateTo('projeler');" style="color: #14b8a6; text-decoration: none; font-weight: 600; font-size: 0.95rem; border-bottom: 1px dashed #14b8a6; padding-bottom: 2px;">Tüm Projelerini Gör <i class="bi bi-arrow-right"></i></a>
                            <a href="#" onclick="event.preventDefault(); window.navigateTo('duyurular');" style="color: #14b8a6; text-decoration: none; font-weight: 600; font-size: 0.95rem; border-bottom: 1px dashed #14b8a6; padding-bottom: 2px;">Tüm Duyurular <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; 2026 YÜZAG Hareketi. Gelecek İçin Bir Adım. Tüm Hakları Saklıdır.</p>
                </div>
            </div>
        </footer>`;

content = content.replace(targetRegex, newFooterHTML);
fs.writeFileSync(path, content);
console.log('Footer layout updated.');
