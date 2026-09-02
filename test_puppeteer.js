const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    
    await page.goto('http://localhost:8080/');
    
    await new Promise(r => setTimeout(r, 2000));
    
    console.log("Navigating to #projeler");
    await page.evaluate(() => window.navigateTo('projeler'));
    
    await new Promise(r => setTimeout(r, 1000));
    const isProjelerVisible = await page.evaluate(() => {
        const el = document.getElementById('custom-all-projects-view');
        return el ? window.getComputedStyle(el).display : 'null';
    });
    console.log("custom-all-projects-view display:", isProjelerVisible);

    console.log("Navigating to #proje-1");
    await page.evaluate(() => window.openDetail(1, 'project'));
    
    await new Promise(r => setTimeout(r, 1000));
    const isProje1Visible = await page.evaluate(() => {
        const el = document.getElementById('custom-project-detail-view');
        return el ? window.getComputedStyle(el).display : 'null';
    });
    console.log("custom-project-detail-view display:", isProje1Visible);

    await browser.close();
})();
