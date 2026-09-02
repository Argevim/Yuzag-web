const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('http://localhost:8080/');
    await new Promise(r => setTimeout(r, 2000));
    const dom = await page.evaluate(() => {
        return document.getElementById('root').innerHTML.substring(0, 500);
    });
    console.log("DOM:", dom);
    await browser.close();
})();
