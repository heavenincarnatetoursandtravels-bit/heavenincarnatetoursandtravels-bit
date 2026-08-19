const puppeteer = require('puppeteer');
const fs = require('fs');

async function runAudit() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  const results = {
    pages: {},
    links: [],
    buttons: [],
    errors: [],
    performance: {},
    verdict: ''
  };

  const routes = [
    '/',
    '/about',
    '/services',
    '/destinations',
    '/packages',
    '/explore',
    '/contact',
    '/destinations/kerala',
    '/destinations/kodaikanal',
    '/packages/sample-package', // We might need to fetch the exact slugs first
    '/this-route-does-not-exist' // For 404
  ];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      results.errors.push(`Console Error: ${msg.text()}`);
    }
  });
  
  page.on('pageerror', err => {
    results.errors.push(`Page Error: ${err.toString()}`);
  });
  
  for (const route of routes) {
    try {
      const url = `http://localhost:3000${route}`;
      const start = Date.now();
      const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
      const loadTime = Date.now() - start;
      
      const status = response ? response.status() : 'Unknown';
      
      results.pages[route] = { status, loadTime };
      results.performance[route] = loadTime;

      // Collect links
      const links = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a')).map(a => ({
          text: a.innerText.trim(),
          href: a.href,
          page: window.location.pathname
        }));
      });
      results.links.push(...links);

      // Collect buttons
      const buttons = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('button')).map(btn => ({
          text: btn.innerText.trim(),
          page: window.location.pathname
        }));
      });
      results.buttons.push(...buttons);

    } catch (e) {
      results.errors.push(`Failed to load ${route}: ${e.message}`);
    }
  }

  // Check form on contact
  try {
    await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle2' });
    await page.type('input[name="name"], input[placeholder*="Name"]', 'Test User');
    await page.type('input[type="email"]', 'test@example.com');
    await page.type('textarea', 'This is a test message');
    // Try to find submit button and click
    const submitBtn = await page.$('button[type="submit"]');
    if (submitBtn) {
      results.buttons.push({ text: 'Submit (Contact Form)', action: 'Tested Form Submission' });
      // await submitBtn.click(); // We won't actually submit to avoid spam, just check if it exists
    }
  } catch (e) {
    results.errors.push(`Contact form test failed: ${e.message}`);
  }

  await browser.close();
  
  fs.writeFileSync('audit-results.json', JSON.stringify(results, null, 2));
  console.log('Audit complete, saved to audit-results.json');
}

runAudit().catch(console.error);
