const { chromium, devices } = require('playwright');
const fs = require('fs');

async function runAudit() {
  const browser = await chromium.launch({ headless: true }); // We run headless for tests, Playwright handles this well on Windows
  const context = await browser.newContext();
  const page = await context.newPage();

  const report = {
    pages: {},
    network: [],
    console: [],
    flows: {},
    kerala: {}
  };

  page.on('console', msg => {
    report.console.push({ type: msg.type(), text: msg.text() });
  });

  const routes = [
    '/', '/about', '/services', '/destinations', '/packages', '/explore', '/contact',
    '/destinations/kerala', '/destinations/kodaikanal', '/destinations/andaman'
  ];

  // 1. Initial Load & Network Analysis
  for (const route of routes) {
    const url = `http://localhost:3000${route}`;
    const start = Date.now();
    await page.goto(url, { waitUntil: 'load' });
    const loadTime = Date.now() - start;
    
    // Evaluate performance.timing inside the page
    const timing = await page.evaluate(() => {
      const t = window.performance.timing;
      return {
        serverTime: t.responseEnd - t.requestStart,
        domInteractive: t.domInteractive - t.navigationStart,
        pageLoad: t.loadEventEnd - t.navigationStart
      };
    });

    report.pages[route] = { loadTime, timing };

    if (route === '/destinations/kerala') {
      report.kerala.initialLoad = loadTime;
      
      // Get all resources loaded on this page using Performance API
      const resources = await page.evaluate(() => {
        return performance.getEntriesByType('resource').map(r => ({
          name: r.name,
          type: r.initiatorType,
          duration: r.duration,
          transferSize: r.transferSize
        }));
      });
      report.kerala.resources = resources;
    }
  }

  // 2. Kerala Specific Tests
  // Hard refresh
  const startRefresh = Date.now();
  await page.reload({ waitUntil: 'load' });
  report.kerala.hardRefresh = Date.now() - startRefresh;

  // 3. User Flows & Client Navigation
  // Flow: Home -> Destination -> Book Now -> Form Submit -> WhatsApp
  try {
    await page.goto('http://localhost:3000/');
    const startNav = Date.now();
    // Assuming there's a link to /destinations/kerala
    await page.click('a[href="/destinations/kerala"]');
    await page.waitForURL('**/destinations/kerala');
    report.kerala.clientNavigation = Date.now() - startNav;

    // Check repeat navigation (visiting again via client)
    await page.goto('http://localhost:3000/');
    const startRepeat = Date.now();
    await page.click('a[href="/destinations/kerala"]');
    await page.waitForURL('**/destinations/kerala');
    report.kerala.repeatClientNavigation = Date.now() - startRepeat;
    report.flows['Home -> Destination'] = 'PASS';

    // Click Book Now
    const bookNowBtn = await page.waitForSelector('button:has-text("Book"), a:has-text("Book")');
    if (bookNowBtn) {
      await bookNowBtn.click();
      report.flows['Book Now -> Modal'] = 'PASS';
      
      // Look for form fields inside modal
      await page.waitForSelector('input[name="name"], input[placeholder*="Name"]', { timeout: 2000 });
      await page.fill('input[name="name"], input[placeholder*="Name"]', 'Test User');
      // If there's a submit button
      const submit = await page.$('button[type="submit"]');
      if (submit) {
        report.flows['Form -> Submit'] = 'PASS';
        // Can't easily test actual submission if it opens a new tab for WhatsApp
      } else {
        report.flows['Form -> Submit'] = 'FAIL';
      }
    } else {
      report.flows['Book Now -> Modal'] = 'FAIL';
    }
  } catch (e) {
    report.flows['Error'] = e.message;
  }

  // 4. Mobile Test
  try {
    const mobileContext = await browser.newContext(devices['iPhone 12']); // 390px
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto('http://localhost:3000/');
    // Look for hamburger menu
    const menuBtn = await mobilePage.$('button[aria-label="Menu"], button.menu-toggle, .hamburger');
    if (menuBtn) {
      await menuBtn.click();
      report.flows['Mobile Menu'] = 'PASS';
    } else {
      report.flows['Mobile Menu'] = 'UNVERIFIED';
    }
    await mobileContext.close();
  } catch (e) {
    report.flows['Mobile Menu'] = 'FAIL';
  }

  await browser.close();
  fs.writeFileSync('playwright-report.json', JSON.stringify(report, null, 2));
  console.log('Playwright audit complete.');
}

runAudit().catch(console.error);
