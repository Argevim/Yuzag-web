const fs = require('fs');
const path = './assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

// Replace Instagram
content = content.replace(
    /<div class="col-lg-12">\s*<div class="social-media-card"([\s\S]*?)<div class="col-md-5">\s*<img src="[^"]*" alt="Instagram"[\s\S]*?<\/div>\s*<div class="col-md-7 d-flex align-items-center">\s*<div style="padding:40px;">\s*<h2 style="([^"]*)"><i class="bi bi-instagram me-2"><\/i> Instagram<\/h2>\s*<p style="([^"]*)">([\s\S]*?)<\/p>\s*<a href="([^"]*)" target="_blank" class="btn btn-primary" style="([^"]*)">([^<]*)<i class="bi bi-arrow-right"><\/i><\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/,
    `<div class="col-lg-4 col-md-6">
                        <div class="social-media-card" style="display:flex; flex-direction:column; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.05); transition:transform 0.3s; height: 100%;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                            <div style="padding:40px; display:flex; flex-direction:column; height:100%;">
                                <h2 style="$2"><i class="bi bi-instagram me-2"></i> Instagram</h2>
                                <p style="$3; flex-grow:1;">$4</p>
                                <a href="$5" target="_blank" class="btn btn-primary" style="$6; align-self: flex-start;">$7<i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>`
);

// Replace Twitter
content = content.replace(
    /<div class="col-lg-12">\s*<div class="social-media-card"([\s\S]*?)<div class="col-md-5 order-md-2">\s*<img src="[^"]*" alt="Twitter"[\s\S]*?<\/div>\s*<div class="col-md-7 order-md-1 d-flex align-items-center">\s*<div style="padding:40px;">\s*<h2 style="([^"]*)"><i class="bi bi-twitter-x me-2"><\/i> Twitter \/ X<\/h2>\s*<p style="([^"]*)">([\s\S]*?)<\/p>\s*<a href="([^"]*)" target="_blank" class="btn btn-primary" style="([^"]*)">([^<]*)<i class="bi bi-arrow-right"><\/i><\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/,
    `<div class="col-lg-4 col-md-6">
                        <div class="social-media-card" style="display:flex; flex-direction:column; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.05); transition:transform 0.3s; height: 100%;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                            <div style="padding:40px; display:flex; flex-direction:column; height:100%;">
                                <h2 style="$2"><i class="bi bi-twitter-x me-2"></i> Twitter / X</h2>
                                <p style="$3; flex-grow:1;">$4</p>
                                <a href="$5" target="_blank" class="btn btn-primary" style="$6; align-self: flex-start;">$7<i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>`
);

// Replace YouTube
content = content.replace(
    /<div class="col-lg-12">\s*<div class="social-media-card"([\s\S]*?)<div class="col-md-5">\s*<img src="[^"]*" alt="YouTube"[\s\S]*?<\/div>\s*<div class="col-md-7 d-flex align-items-center">\s*<div style="padding:40px;">\s*<h2 style="([^"]*)"><i class="bi bi-youtube me-2"><\/i> YouTube<\/h2>\s*<p style="([^"]*)">([\s\S]*?)<\/p>\s*<a href="([^"]*)" target="_blank" class="btn btn-primary" style="([^"]*)">([^<]*)<i class="bi bi-arrow-right"><\/i><\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/,
    `<div class="col-lg-4 col-md-6">
                        <div class="social-media-card" style="display:flex; flex-direction:column; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.05); transition:transform 0.3s; height: 100%;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                            <div style="padding:40px; display:flex; flex-direction:column; height:100%;">
                                <h2 style="$2"><i class="bi bi-youtube me-2"></i> YouTube</h2>
                                <p style="$3; flex-grow:1;">$4</p>
                                <a href="$5" target="_blank" class="btn btn-primary" style="$6; align-self: flex-start;">$7<i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>`
);

fs.writeFileSync(path, content);
console.log('Social media layout updated successfully!');
