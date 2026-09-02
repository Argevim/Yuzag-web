const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

// 1. Add nav-link for Bağış Yap
const navLinkStr = '<li class="nav-item ms-lg-3" style="display:flex; align-items:center;"><a class="nav-link btn custom-btn gonullu-btn-hover" style="background: #14b8a6; color: white !important; border-radius: 20px; padding: 8px 20px !important; font-weight: 600; margin-top: 3px;" href="/gonullu-ol" onclick="event.preventDefault(); window.navigateTo(\'gonullu-ol\');">Gönüllü Ol</a><style>.gonullu-btn-hover:hover { color: white !important; background-color: #0f9687 !important; }</style></li>';
const bagisLink = '<li class="nav-item ms-lg-2" style="display:flex; align-items:center;"><a class="nav-link btn custom-btn bagis-btn-hover" style="background: #f59e0b !important; color: white !important; border-radius: 20px; padding: 6px 18px !important; font-weight: 600; margin-top: 3px; border: 2px solid #f59e0b;" href="/bagis-yap" onclick="event.preventDefault(); window.navigateTo(\'bagis-yap\');">Bağış Yap</a><style>.bagis-btn-hover:hover { color: white !important; background-color: #d97706 !important; border-color: #d97706 !important; }</style></li>';
content = content.replace(navLinkStr, navLinkStr + '\n                ' + bagisLink);

// 2. Add custom-bagis-yap-view html
const bagisHtml = `
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
`;
content = content.replace('        <!-- Gönüllü Ol Form Sayfası -->', bagisHtml + '\n        <!-- Gönüllü Ol Form Sayfası -->');

// 3. Update routing logic
content = content.replace("else if (hash === 'gonullu' || hash === 'genc-gonullu-ol')", "else if (hash === 'gonullu' || hash === 'genc-gonullu-ol' || hash === 'bagis-yap')");
content = content.replace("hash === 'genc-gonullu-ol' ? 'genc-gonullu' : 'gonullu'", "hash === 'bagis-yap' ? 'bagis' : (hash === 'genc-gonullu-ol' ? 'genc-gonullu' : 'gonullu')");
content = content.replace("gonullu: document.getElementById('custom-gonullu-ol-view'),", "gonullu: document.getElementById('custom-gonullu-ol-view'),\n        bagis: document.getElementById('custom-bagis-yap-view'),");
content = content.replace("else if(sayfa === 'gonullu' && views.gonullu) { views.gonullu.style.display = 'block'; window.scrollTo(0,0); }", "else if(sayfa === 'gonullu' && views.gonullu) { views.gonullu.style.display = 'block'; window.scrollTo(0,0); }\n        else if(sayfa === 'bagis' && views.bagis) { views.bagis.style.display = 'block'; window.scrollTo(0,0); }");

fs.writeFileSync(path, content);
console.log('Bağış Yap page and button added successfully.');
