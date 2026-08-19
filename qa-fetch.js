const fs = require('fs');
const { JSDOM } = require('jsdom');

async function runAudit() {
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
    '/destinations/andaman',
    '/this-route-does-not-exist'
  ];

  for (const route of routes) {
    try {
      const url = `http://localhost:3000${route}`;
      const start = Date.now();
      
      const response = await fetch(url);
      const loadTime = Date.now() - start;
      const html = await response.text();
      
      const status = response.status;
      
      results.pages[route] = { status, loadTime };
      results.performance[route] = loadTime;
      
      if (status === 200) {
        const dom = new JSDOM(html);
        const doc = dom.window.document;
        
        // Collect links
        const aTags = Array.from(doc.querySelectorAll('a'));
        const links = aTags.map(a => ({
          text: a.textContent.trim(),
          href: a.href || a.getAttribute('href'),
          page: route
        }));
        results.links.push(...links);

        // Collect buttons
        const btnTags = Array.from(doc.querySelectorAll('button'));
        const buttons = btnTags.map(btn => ({
          text: btn.textContent.trim(),
          page: route
        }));
        results.buttons.push(...buttons);
      }
    } catch (e) {
      results.errors.push(`Failed to load ${route}: ${e.message}`);
    }
  }

  fs.writeFileSync('audit-results.json', JSON.stringify(results, null, 2));
  console.log('Audit complete, saved to audit-results.json');
}

runAudit().catch(console.error);
