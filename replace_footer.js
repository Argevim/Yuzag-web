const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

const targetRegex = /function injectCustomFooter\(\) \{[\s\S]*?\}\n\nfunction initProjectsPlugin\(\) \{/m;

const newFooter = `function injectCustomFooter() {
    if (document.querySelector('.custom-premium-footer')) return;
    
    // Eski footer varsa sil
    const oldFooter = document.querySelector('.custom-unified-footer');
    if (oldFooter) oldFooter.remove();

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
            .highlight-btn {
                display: inline-block;
                background: rgba(20,184,166,0.15);
                border: 1px solid rgba(20,184,166,0.3);
                padding: 4px 12px;
                border-radius: 20px;
                margin-right: 10px;
                margin-bottom: 10px;
                color: #5eead4 !important;
                font-size: 0.9rem !important;
            }
            .highlight-btn:hover {
                background: #14b8a6;
                color: #fff !important;
                transform: none !important;
            }
        </style>
        
        <footer class="custom-premium-footer">
            <div class="container">
                <div class="row">
                    <!-- Sol Sütun: Hızlı Menü (Navbar İçeriği) -->
                    <div class="col-lg-3 col-md-6 footer-col">
                        <h4 class="footer-title">Hızlı Menü</h4>
                        <ul class="footer-menu">
                            <li><a href="#" onclick="event.preventDefault(); window.scrollToSection('root');"><i class="bi bi-house-door"></i> Anasayfa</a></li>
                            <li><a href="#" onclick="event.preventDefault(); window.navigateTo('ekibimiz');"><i class="bi bi-people"></i> Ekibimiz</a></li>
                            <li><a href="#" onclick="event.preventDefault(); window.navigateTo('sosyalmedya');"><i class="bi bi-hash"></i> Sosyal Medya</a></li>
                            <li style="margin-top: 25px;"><a href="#" onclick="event.preventDefault(); window.navigateTo('gonullu-ol');"><i class="bi bi-heart-fill"></i> Gönüllü Ol</a></li>
                            <li><a href="#" onclick="event.preventDefault(); window.navigateTo('genc-gonullu-ol');"><i class="bi bi-lightning-charge-fill"></i> Genç Gönüllü Ol</a></li>
                            <li><a href="#" onclick="event.preventDefault(); window.navigateTo('bagis-yap');"><i class="bi bi-wallet2"></i> Bağış Yap</a></li>
                        </ul>
                    </div>
                    
                    <!-- Orta Sütun: Projeler & Duyurular ve 5 Örnek -->
                    <div class="col-lg-5 col-md-6 footer-col">
                        <h4 class="footer-title">Çalışmalarımız</h4>
                        <div style="display:flex; flex-wrap:wrap; margin-bottom:10px;">
                            <a href="#" class="highlight-btn" onclick="event.preventDefault(); window.navigateTo('projeler');"><i class="bi bi-folder2-open me-2"></i>Tüm Projeler</a>
                            <a href="#" class="highlight-btn" onclick="event.preventDefault(); window.navigateTo('duyurular');"><i class="bi bi-megaphone me-2"></i>Tüm Duyurular</a>
                        </div>
                        <ul class="footer-projects-list" id="footer-sample-projects">
                            <!-- JS ile doldurulacak -->
                        </ul>
                    </div>
                    
                    <!-- Sağ Sütun: İletişim ve Logo -->
                    <div class="col-lg-4 col-md-12 footer-col">
                        <img src="/assets/images/logo.png" alt="YÜZAG Logo" class="footer-logo">
                        <ul class="footer-contact footer-menu">
                            <li>
                                <i class="bi bi-geo-alt-fill"></i>
                                <span><strong>Genel Merkez:</strong><br> Fatih, İstanbul, Türkiye</span>
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
                </div>
                
                <div class="footer-bottom">
                    <p>&copy; 2026 YÜZAG Hareketi. Gelecek İçin Bir Adım. Tüm Hakları Saklıdır.</p>
                </div>
            </div>
        </footer>
    \`;

    const rootDiv = document.getElementById('root');
    if (rootDiv) {
        rootDiv.insertAdjacentHTML('beforeend', footerHTML);
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }

    // Projelerden ilk 5 tanesini doldur
    const sampleProjectsContainer = document.getElementById('footer-sample-projects');
    if (sampleProjectsContainer && typeof projectsData !== 'undefined') {
        let samplesHTML = "";
        projectsData.slice(0, 5).forEach(p => {
            samplesHTML += \`<li><a href="#" onclick="event.preventDefault(); window.openDetail(\${p.id}, 'project');">\${p.title}</a></li>\`;
        });
        sampleProjectsContainer.innerHTML = samplesHTML;
    }
}

function initProjectsPlugin() {`;

content = content.replace(targetRegex, newFooter);
fs.writeFileSync(path, content);
console.log('Premium footer injected successfully.');
