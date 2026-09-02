const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

const targetRegex = /<li class="nav-item ms-lg-3" style="display:flex; align-items:center;">[\s\S]*?<style>\.genc-btn-hover:hover[\s\S]*?<\/style><\/li>/;

const newButtons = `<li class="nav-item ms-lg-3" style="display:flex; align-items:center;">
                    <a class="nav-link btn custom-btn gonullu-btn-hover" style="background: #14b8a6; color: white !important; border-radius: 20px; padding: 8px 20px !important; font-weight: 600; margin-top: 3px;" href="/gonullu-ol" onclick="event.preventDefault(); window.navigateTo('gonullu-ol');">Gönüllü Ol</a>
                    <style>.gonullu-btn-hover:hover { color: white !important; background-color: #0f9687 !important; }</style>
                </li>
                <li class="nav-item ms-lg-2" style="display:flex; align-items:center;">
                    <a class="nav-link btn custom-btn-outline genc-btn-hover" style="border: 2px solid #14b8a6; color: #14b8a6; border-radius: 20px; padding: 8px 20px !important; font-weight: 600; margin-top: 3px;" href="/genc-gonullu-ol" onclick="event.preventDefault(); window.navigateTo('genc-gonullu-ol');">Genç Gönüllü Ol</a>
                    <style>.genc-btn-hover:hover { color: white !important; background-color: #14b8a6 !important; }</style>
                </li>
                <li class="nav-item ms-lg-4" style="display:flex; align-items:center;">
                    <a class="nav-link btn custom-btn bagis-btn-hover" style="background: #f59e0b; color: white !important; border-radius: 25px; padding: 12px 28px !important; font-size: 1.1rem; font-weight: 700; margin-top: 3px; border: 2px solid #f59e0b; box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);" href="/bagis-yap" onclick="event.preventDefault(); window.navigateTo('bagis-yap');">BAĞIŞ YAP</a>
                    <style>.bagis-btn-hover:hover { color: white !important; background-color: #d97706 !important; border-color: #d97706 !important; transform: scale(1.05); transition: all 0.2s; box-shadow: 0 6px 20px rgba(217, 119, 6, 0.5); }</style>
                </li>`;

content = content.replace(targetRegex, newButtons);
fs.writeFileSync(path, content);
console.log('Navbar buttons reordered and resized successfully.');
