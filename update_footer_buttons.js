const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

// Replace the dashed links with solid elegant buttons
const oldProjectsBtn = `<a href="/#projeler" onclick="event.preventDefault(); window.navigateTo('projeler');" style="color: #14b8a6; text-decoration: none; font-weight: 600; font-size: 0.95rem; border-bottom: 1px dashed #14b8a6; padding-bottom: 2px;">Tüm Projelerini Gör <i class="bi bi-arrow-right"></i></a>`;
const newProjectsBtn = `<a href="/#projeler" class="btn custom-btn" onclick="event.preventDefault(); window.navigateTo('projeler');" style="background: rgba(20, 184, 166, 0.1); color: #14b8a6; border: 1px solid #14b8a6; border-radius: 20px; padding: 8px 20px; font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: all 0.3s ease;">Tüm Projeler <i class="bi bi-arrow-right"></i></a>`;

const oldAnnouncementsBtn = `<a href="/#duyurular" onclick="event.preventDefault(); window.navigateTo('duyurular');" style="color: #14b8a6; text-decoration: none; font-weight: 600; font-size: 0.95rem; border-bottom: 1px dashed #14b8a6; padding-bottom: 2px;">Tüm Duyurular <i class="bi bi-arrow-right"></i></a>`;
const newAnnouncementsBtn = `<a href="/#duyurular" class="btn custom-btn" onclick="event.preventDefault(); window.navigateTo('duyurular');" style="background: rgba(20, 184, 166, 0.1); color: #14b8a6; border: 1px solid #14b8a6; border-radius: 20px; padding: 8px 20px; font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: all 0.3s ease;">Tüm Duyurular <i class="bi bi-arrow-right"></i></a>`;

content = content.replace(oldProjectsBtn, newProjectsBtn);
content = content.replace(oldAnnouncementsBtn, newAnnouncementsBtn);

// Make sure the container looks good
content = content.replace('<div class="mobile-justify-center" style="margin-top: 25px; display: flex; gap: 15px;">', '<div class="mobile-justify-center" style="margin-top: 25px; display: flex; gap: 15px; flex-wrap: wrap;">');

fs.writeFileSync(path, content);
console.log("Footer action buttons updated.");
