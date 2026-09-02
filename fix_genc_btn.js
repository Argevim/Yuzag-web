const fs = require('fs');
const path = './assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

const targetStr = '<li class="nav-item ms-lg-2"><a class="nav-link btn custom-btn-outline" style="border: 2px solid #14b8a6; color: #14b8a6; border-radius: 20px; padding: 6px 18px !important; font-weight: 600;" href="/genc-gonullu-ol" onclick="event.preventDefault(); window.navigateTo(\'genc-gonullu-ol\');">Genç Gönüllü Ol</a></li>';

const newStr = '<li class="nav-item ms-lg-2" style="display:flex; align-items:center;"><a class="nav-link btn custom-btn-outline genc-btn-hover" style="border: 2px solid #14b8a6; color: #14b8a6; border-radius: 20px; padding: 6px 18px !important; font-weight: 600; margin-top: 3px;" href="/genc-gonullu-ol" onclick="event.preventDefault(); window.navigateTo(\'genc-gonullu-ol\');">Genç Gönüllü Ol</a><style>.genc-btn-hover:hover { color: white !important; background-color: #14b8a6; }</style></li>';

content = content.replace(targetStr, newStr);

fs.writeFileSync(path, content);
console.log('Button updated!');
