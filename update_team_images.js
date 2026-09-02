const fs = require('fs');
const path = './assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

// The teamData looks like:
// const teamData = [
//     { name: "Güleser Topuz", role: "Genel Başkan", image: "https://images.unsplash.com/..." }, ...
// ];

content = content.replace(/image:\s*"https:\/\/images\.unsplash\.com\/[^"]+"/g, 'image: "https://placehold.co/400x400/f8f9fa/a3a3a3?text=Görsel+Yok"');

fs.writeFileSync(path, content);
console.log('Team images updated successfully!');
