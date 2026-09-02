const fs = require('fs');
const path = '/Users/sercankostence/Downloads/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

const targetFunction = `function handleRouting() {
    const hash = window.location.hash.replace('#', '');
    let sayfa = null;
    let id = null;
    let type = null;

    if (hash === 'ekibimiz' || hash === 'bilgilendiriyor' || hash === 'sosyalmedya') {
        sayfa = hash;
    } else if (hash.startsWith('proje-')) {
        type = 'project';
        id = hash.split('-')[1];
    } else if (hash.startsWith('duyuru-')) {
        type = 'announcement';
        id = hash.split('-')[1];
    } else if (hash.startsWith('bilgi-')) {
        type = 'bilgilendiriyor';
        id = hash.split('-')[1];
    }

    const views = {
        detail: document.getElementById('custom-project-detail-view'),
        team: document.getElementById('custom-team-detail-view'),
        bilgi: document.getElementById('custom-bilgilendiriyor-view'),
        sosyal: document.getElementById('custom-sosyal-medya-view')
    };

    // Tüm detay sayfalarını gizle
    Object.values(views).forEach(v => { if(v) v.style.display = 'none'; });

    const isHomePage = !sayfa && !id;

    if(isHomePage) {
        document.body.classList.remove('page-detail-active');
    } else {
        document.body.classList.add('page-detail-active');
        
        // Sadece ilgili sayfayı göster
        if(sayfa === 'ekibimiz' && views.team) { views.team.style.display = 'block'; window.scrollTo(0,0); renderTeamPage(); }
        else if(sayfa === 'bilgilendiriyor' && views.bilgi) { views.bilgi.style.display = 'block'; window.scrollTo(0,0); renderBilgilendiriyorPage(); }
        else if(sayfa === 'sosyalmedya' && views.sosyal) { views.sosyal.style.display = 'block'; window.scrollTo(0,0); }
        else if(id && views.detail) { views.detail.style.display = 'block'; window.scrollTo(0,0); renderDetail(id, type); }
    }
}`;

// Find handleRouting to end of file and replace
content = content.replace(/function handleRouting\(\) \{[\s\S]*\}\s*$/, targetFunction + '\n');
fs.writeFileSync(path, content);
console.log("handleRouting fixed.");
