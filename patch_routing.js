const fs = require('fs');
const path = '/Users/sercankostence/Desktop/build/assets/js/custom-projects.js';
let content = fs.readFileSync(path, 'utf8');

const newRoutingLogic = `
window.scrollToSection = function (sectionId) {
    const rootNode = document.getElementById('root');
    if (rootNode) {
        Array.from(rootNode.children).forEach(child => {
            if (!child.id || (!child.id.startsWith('custom-') && child.id !== 'splash')) {
                child.style.display = '';
            } else if (child.id.startsWith('custom-') && child.id.endsWith('-view')) {
                child.style.display = 'none';
            }
        });
    }

    if (sectionId && sectionId !== 'root') {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    history.pushState(null, null, '/');
};

window.navigateTo = function (target) {
    if (!target || target === 'root' || target === 'anasayfa') {
        history.pushState(null, null, '/');
    } else {
        history.pushState(null, null, '#' + target);
    }
    handleRouting();
};

function handleRouting() {
    let hash = window.location.hash.replace('#', '');
    let pathname = window.location.pathname.replace(/^\\//, '');
    
    // Normalize target route from hash or pathname
    let route = hash || pathname;
    
    const rootNode = document.getElementById('root');

    const views = {
        detail: document.getElementById('custom-project-detail-view'),
        team: document.getElementById('custom-team-detail-view'),
        bilgi: document.getElementById('custom-bilgilendiriyor-view'),
        sosyal: document.getElementById('custom-sosyal-medya-view'),
        projeler: document.getElementById('custom-all-projects-view'),
        duyurular: document.getElementById('custom-all-announcements-view'),
        gonullu: document.getElementById('custom-gonullu-ol-view'),
        gencGonullu: document.getElementById('custom-genc-gonullu-ol-view'),
        bagis: document.getElementById('custom-bagis-yap-view')
    };

    const isDetailPage = route === 'ekibimiz' || 
                         route === 'bilgilendiriyor' || 
                         route === 'sosyalmedya' || 
                         route === 'projeler' || 
                         route === 'duyurular' || 
                         route === 'gonullu-ol' || 
                         route === 'genc-gonullu-ol' || 
                         route === 'bagis-yap' || 
                         route.startsWith('proje-') || 
                         route.startsWith('duyuru-') || 
                         route.startsWith('bilgi-');

    if (rootNode) {
        Array.from(rootNode.children).forEach(child => {
            if (!child.id || (!child.id.startsWith('custom-') && child.id !== 'splash')) {
                child.style.display = isDetailPage ? 'none' : '';
            }
        });
    }

    Object.values(views).forEach(v => { if (v) v.style.display = 'none'; });

    if (isDetailPage) {
        let sayfa = 'detail';
        if (route === 'ekibimiz') sayfa = 'team';
        else if (route === 'bilgilendiriyor') sayfa = 'bilgi';
        else if (route === 'sosyalmedya') sayfa = 'sosyal';
        else if (route === 'projeler') sayfa = 'projeler';
        else if (route === 'duyurular') sayfa = 'duyurular';
        else if (route === 'gonullu-ol') sayfa = 'gonullu';
        else if (route === 'genc-gonullu-ol') sayfa = 'gencGonullu';
        else if (route === 'bagis-yap') sayfa = 'bagis';

        if (sayfa === 'detail' && views.detail) { views.detail.style.display = 'block'; }
        else if (sayfa === 'team' && views.team) { views.team.style.display = 'block'; window.scrollTo(0, 0); renderTeamPage(); }
        else if (sayfa === 'bilgi' && views.bilgi) { views.bilgi.style.display = 'block'; window.scrollTo(0, 0); renderBilgilendiriyorPage(); }
        else if (sayfa === 'sosyal' && views.sosyal) { views.sosyal.style.display = 'block'; window.scrollTo(0, 0); }
        else if (sayfa === 'projeler' && views.projeler) { views.projeler.style.display = 'block'; window.scrollTo(0, 0); renderAllProjectsPage(); }
        else if (sayfa === 'duyurular' && views.duyurular) { views.duyurular.style.display = 'block'; window.scrollTo(0, 0); renderAllAnnouncementsPage(); }
        else if (sayfa === 'gonullu' && views.gonullu) { views.gonullu.style.display = 'block'; window.scrollTo(0, 0); }
        else if (sayfa === 'gencGonullu' && views.gencGonullu) { views.gencGonullu.style.display = 'block'; window.scrollTo(0, 0); }
        else if (sayfa === 'bagis' && views.bagis) { views.bagis.style.display = 'block'; window.scrollTo(0, 0); }
    } else {
        window.scrollTo(0, 0);
    }
}

window.addEventListener('popstate', handleRouting);
window.addEventListener('hashchange', handleRouting);
`;

// Replace from window.scrollToSection up to handleRouting
const startIdx = content.indexOf('window.scrollToSection = function');
const endIdx = content.indexOf('function fixCorporateTexts()');

if (startIdx !== -1 && endIdx !== -1) {
    content = content.substring(0, startIdx) + newRoutingLogic + '\n\n' + content.substring(endIdx);
    fs.writeFileSync(path, content);
    console.log("Routing patched successfully!");
} else {
    console.log("Could not find start/end indices for routing!");
}
