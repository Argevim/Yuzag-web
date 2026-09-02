const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  const routesToTest = ['#gonullu-ol', '#genc-gonullu-ol', '#bagis-yap', '#ekibimiz', '#sosyalmedya', '#projeler', '#duyurular'];
  
  for (const route of routesToTest) {
      await page.goto('http://localhost:3005/' + route, { waitUntil: 'domcontentloaded' });
      await new Promise(r => setTimeout(r, 500));
      
      const visibleView = await page.evaluate(() => {
          const views = document.querySelectorAll('.custom-detail-page');
          for (let v of views) {
              if (v.style.display === 'block') return v.id;
          }
          return 'NONE_VISIBLE';
      });
      
      console.log(`Route ${route} -> Active View: ${visibleView}`);
  }
  
  await browser.close();
})();
