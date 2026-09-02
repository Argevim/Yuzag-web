const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

const targetRegex = /<li class="nav-item ms-lg-3" style="display:flex; align-items:center;">[\s\S]*?<style>\.bagis-btn-hover:hover[\s\S]*?<\/style>[\n\s]*<\/li>/;

const newButtons = `<li class="nav-item ms-lg-3" style="display:flex; align-items:center;">
                    <a class="nav-link btn custom-btn gonullu-btn-hover" style="background: #14b8a6; color: white !important; border-radius: 20px; padding: 8px 20px !important; font-weight: 600; margin-top: 3px; display:flex; justify-content:center; align-items:center;" href="/gonullu-ol" onclick="event.preventDefault(); window.navigateTo('gonullu-ol');">Gönüllü Ol</a>
                    <style>.gonullu-btn-hover:hover { color: white !important; background-color: #0f9687 !important; }</style>
                </li>
                <li class="nav-item ms-lg-2" style="display:flex; align-items:center;">
                    <a class="nav-link btn custom-btn-outline genc-btn-hover" style="border: 2px solid #14b8a6; color: #14b8a6 !important; border-radius: 20px; padding: 8px 20px !important; font-weight: 600; margin-top: 3px; display:flex; justify-content:center; align-items:center;" href="/genc-gonullu-ol" onclick="event.preventDefault(); window.navigateTo('genc-gonullu-ol');">Genç Gönüllü Ol</a>
                    <style>.genc-btn-hover:hover { color: white !important; background-color: #14b8a6 !important; }</style>
                </li>
                <li class="nav-item ms-lg-2" style="display:flex; align-items:center;">
                    <a class="nav-link btn custom-btn bagis-btn-hover" style="background: #f59e0b; color: white !important; border-radius: 20px; padding: 8px 20px !important; font-weight: 600; margin-top: 3px; border: 2px solid #f59e0b; display:flex; justify-content:center; align-items:center;" href="/bagis-yap" onclick="event.preventDefault(); window.navigateTo('bagis-yap');">Bağış Yap</a>
                    <style>.bagis-btn-hover:hover { color: white !important; background-color: #d97706 !important; border-color: #d97706 !important; }</style>
                </li>`;

content = content.replace(targetRegex, newButtons);
fs.writeFileSync(path, content);
console.log('Navbar buttons resized to match each other.');
