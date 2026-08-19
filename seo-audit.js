const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function runAudit() {
  const dataDir = path.join(__dirname, 'src', 'data');
  
  // Extract destinations
  const destFile = fs.readFileSync(path.join(dataDir, 'destinations.ts'), 'utf8');
  const destSlugs = [...destFile.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  
  // Extract packages
  const pkgFile = fs.readFileSync(path.join(dataDir, 'packages.ts'), 'utf8');
  const pkgSlugs = [...pkgFile.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

  const baseRoutes = [
    '/', '/about', '/services', '/destinations', '/packages', '/explore', '/contact'
  ];
  
  const allRoutes = [
    ...baseRoutes,
    ...destSlugs.map(s => `/destinations/${s}`),
    ...pkgSlugs.map(s => `/packages/${s}`)
  ];

  const baseUrl = 'http://localhost:3000';
  const results = [];
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log(`Starting SEO Audit on ${allRoutes.length} routes...`);

  for (const route of allRoutes) {
    const url = `${baseUrl}${route}`;
    console.log(`Auditing: ${route}`);
    
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded' });
      
      const seoData = await page.evaluate(() => {
        const title = document.title;
        const description = document.querySelector('meta[name="description"]')?.content || null;
        const canonical = document.querySelector('link[rel="canonical"]')?.href || null;
        const robots = document.querySelector('meta[name="robots"]')?.content || null;
        
        // Open Graph
        const ogTags = {};
        document.querySelectorAll('meta[property^="og:"]').forEach(el => {
          ogTags[el.getAttribute('property')] = el.content;
        });
        
        // Twitter
        const twitterTags = {};
        document.querySelectorAll('meta[name^="twitter:"]').forEach(el => {
          twitterTags[el.getAttribute('name')] = el.content;
        });

        // Headings
        const h1s = Array.from(document.querySelectorAll('h1')).map(h => h.innerText.trim());
        const h2s = Array.from(document.querySelectorAll('h2')).map(h => h.innerText.trim());
        
        // Images
        const images = Array.from(document.querySelectorAll('img')).map(img => ({
          src: img.src,
          alt: img.alt || null,
          hasAlt: img.hasAttribute('alt')
        }));
        
        // JSON-LD
        const jsonLd = Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map(script => {
          try {
            return JSON.parse(script.textContent);
          } catch (e) {
            return "INVALID_JSON";
          }
        });

        return {
          title, description, canonical, robots,
          ogTags, twitterTags,
          h1s, h2s, images, jsonLd
        };
      });
      
      results.push({
        route,
        exists: true,
        seo: seoData
      });
    } catch (e) {
      console.error(`Error auditing ${route}: ${e.message}`);
      results.push({
        route,
        exists: false,
        error: e.message
      });
    }
  }

  await browser.close();
  
  fs.writeFileSync('seo-audit-results.json', JSON.stringify(results, null, 2));
  console.log('Audit complete. Saved to seo-audit-results.json');
}

runAudit().catch(console.error);
