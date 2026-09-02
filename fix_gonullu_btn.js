const fs = require('fs');
const path = './assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

const targetStr = '<li class="nav-item ms-lg-3"><a class="nav-link btn custom-btn" style="background: #14b8a6; color: white !important; border-radius: 20px; padding: 8px 20px !important; font-weight: 600;" href="/gonullu-ol" onclick="event.preventDefault(); window.navigateTo(\'gonullu-ol\');">Gönüllü Ol</a></li>';

const newStr = '<li class="nav-item ms-lg-3" style="display:flex; align-items:center;"><a class="nav-link btn custom-btn gonullu-btn-hover" style="background: #14b8a6; color: white !important; border-radius: 20px; padding: 8px 20px !important; font-weight: 600; margin-top: 3px;" href="/gonullu-ol" onclick="event.preventDefault(); window.navigateTo(\'gonullu-ol\');">Gönüllü Ol</a><style>.gonullu-btn-hover:hover { color: white !important; background-color: #0f9687 !important; }</style></li>';

content = content.replace(targetStr, newStr);

fs.writeFileSync(path, content);
console.log('Gonullu button updated!');
