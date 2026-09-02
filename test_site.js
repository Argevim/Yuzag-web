const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  
  await page.goto('http://localhost:3005', { waitUntil: 'networkidle0' });
  
  // check if custom footer exists
  const hasFooter = await page.evaluate(() => {
      return document.querySelector('.custom-premium-footer') !== null;
  });
  
  console.log('Has Premium Footer?', hasFooter);
  await browser.close();
})();
