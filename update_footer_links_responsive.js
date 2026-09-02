const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

const targetRegex = /<style>[\s\S]*?\.custom-premium-footer \{[\s\S]*?<\/footer>/;

const newFooterHTML = `<style>
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
                            <li><a href="/" onclick="event.preventDefault(); window.scrollToSection('root');"><i class="bi bi-house-door"></i> Anasayfa</a></li>
                            <li><a href="/#ekibimiz" onclick="event.preventDefault(); window.navigateTo('ekibimiz');"><i class="bi bi-people"></i> Ekibimiz</a></li>
                            <li><a href="/#sosyalmedya" onclick="event.preventDefault(); window.navigateTo('sosyalmedya');"><i class="bi bi-hash"></i> Sosyal Medya</a></li>
                            <li style="margin-top: 15px;"><a href="/gonullu-ol" onclick="event.preventDefault(); window.navigateTo('gonullu-ol');"><i class="bi bi-heart-fill"></i> Gönüllü Ol</a></li>
                            <li><a href="/genc-gonullu-ol" onclick="event.preventDefault(); window.navigateTo('genc-gonullu-ol');"><i class="bi bi-heart-fill"></i> Genç Gönüllü Ol</a></li>
                            <li><a href="/bagis-yap" onclick="event.preventDefault(); window.navigateTo('bagis-yap');">Bağış Yap</a></li>
                        </ul>
                    </div>
                    
                    <!-- Sağ Sütun: Çalışmalarımız (Projeler & Duyurular) -->
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
        </footer>`;

content = content.replace(targetRegex, newFooterHTML);

// Update footer sample projects to use correct href
content = content.replace(
    /samplesHTML \+= \`<li><a href="#" onclick="event\.preventDefault\(\); window\.openDetail\(\\\$\\{p\.id\\}, 'project'\);">\\\$\\{p\.title\\}<\/a><\/li>\`;/,
    "samplesHTML += `<li><a href=\"/#proje-${p.id}\" onclick=\"event.preventDefault(); window.openDetail(${p.id}, 'project');\">${p.title}</a></li>`;"
);

fs.writeFileSync(path, content);
console.log('Footer links and responsiveness updated.');
