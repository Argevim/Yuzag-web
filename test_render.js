const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3005', { waitUntil: 'domcontentloaded' });
  await new Promise(r => setTimeout(r, 2000));
  
  const hasProjectsSection = await page.evaluate(() => {
    return document.getElementById('custom-projects-section') !== null;
  });
  
  const hasFooter = await page.evaluate(() => {
    return document.querySelector('.custom-premium-footer') !== null;
  });
  
  console.log('Homepage Projects Section Rendered:', hasProjectsSection);
  console.log('Premium Footer Rendered:', hasFooter);
  
  await browser.close();
})();
