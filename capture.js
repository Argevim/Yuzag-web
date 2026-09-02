const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 1024 });
  await page.goto('http://localhost:3005', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1000));
  
  await page.screenshot({ path: '/Users/sercankostence/.gemini/antigravity-ide/brain/6f6feeeb-8180-48e9-9cfa-be21346cc2fd/current_site.png', fullPage: true });
  
  const html = await page.content();
  console.log('Page title:', await page.title());
  console.log('Main sections in DOM:', await page.evaluate(() => {
    return Array.from(document.querySelectorAll('section, header, footer, div[id]')).map(el => el.id || el.className || el.tagName);
  }));
  
  await browser.close();
})();
