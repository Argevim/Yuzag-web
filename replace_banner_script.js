const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

const oldScript = `// Fetch and update dynamic banner text
document.addEventListener('DOMContentLoaded', () => {
    // Look for the banner h1 inside carousel
    const h1s = document.querySelectorAll('.carousel-item h1');
    let targetH1 = null;
    h1s.forEach(h1 => {
        if(h1.innerText.includes('Aile Temelimiz')) {
            targetH1 = h1;
        }
    });
    
    if (targetH1) {
        fetch('http://127.0.0.1:8000/api/settings/home_banner_text')
            .then(res => res.json())
            .then(data => {
                if(data && data.value) {
                    targetH1.innerText = data.value;
                }
            })
            .catch(err => console.error("Banner fetch error", err));
    }
});`;

const newScript = `// Fetch and update dynamic banners (images + text)
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://127.0.0.1:8000/api/banners')
        .then(res => res.json())
        .then(data => {
            if (data && data.length > 0) {
                const carouselInner = document.querySelector('.carousel-inner');
                if (carouselInner) {
                    // Generate new items
                    const newItemsHtml = data.map((banner, index) => {
                        const activeClass = index === 0 ? 'active' : '';
                        return \`
                            <div class="carousel-item \${activeClass}">
                                <img src="\${banner.image_url}" class="carousel-image" alt="\${banner.title || 'Banner'}">
                                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                    <div class="p-3" style="max-width: 900px;">
                                        <h1 class="display-3 text-white mb-4 animated zoomIn" style="text-shadow: 2px 2px 8px rgba(0,0,0,0.7);">
                                            \${banner.title || ''}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        \`;
                    }).join('');
                    
                    // Replace existing content
                    carouselInner.innerHTML = newItemsHtml;
                    
                    // Re-initialize Bootstrap carousel if it exists
                    if (window.bootstrap && window.bootstrap.Carousel) {
                        const carouselElement = document.querySelector('#header-carousel');
                        if (carouselElement) {
                            new window.bootstrap.Carousel(carouselElement);
                        }
                    }
                }
            }
        })
        .catch(err => console.error("Banners fetch error", err));
});`;

content = content.replace(oldScript, newScript);
fs.writeFileSync(path, content);
console.log('Script updated successfully.');
