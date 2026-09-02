const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3005', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 2000));
  
  const navText = await page.evaluate(() => {
    const nav = document.querySelector('.navbar-nav');
    return nav ? nav.innerText : 'NO NAV';
  });
  
  console.log('NAVBAR TEXT:', navText);
  await browser.close();
})();
