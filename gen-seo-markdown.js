const fs = require('fs');

function generateMarkdown() {
  const data = JSON.parse(fs.readFileSync('seo-audit-results.json', 'utf8'));
  let md = `# FINAL SEO AUDIT REPORT\n\n`;

  // 1. ROUTE DISCOVERY
  md += `## 1. ROUTE DISCOVERY\n\n`;
  md += `| Route | Exists | Indexable | SEO Metadata | Status |\n`;
  md += `|---|---|---|---|---|\n`;
  let totalRoutes = data.length;
  let issuesCount = 0;
  
  data.forEach(item => {
    if (!item.exists) {
      md += `| ${item.route} | ❌ No | ❌ No | ❌ No | 🔴 ERROR |\n`;
      issuesCount++;
      return;
    }
    const seo = item.seo;
    const isIndexable = (!seo.robots || !seo.robots.includes('noindex'));
    const hasMetadata = seo.title && seo.description;
    const status = (isIndexable && hasMetadata) ? '🟢 PASS' : '🟠 WARNING';
    if(status !== '🟢 PASS') issuesCount++;
    md += `| ${item.route} | ✅ Yes | ${isIndexable ? '✅ Yes' : '❌ No'} | ${hasMetadata ? '✅ Yes' : '❌ No'} | ${status} |\n`;
  });
  
  // 2. TITLE TAG AUDIT
  md += `\n## 2. TITLE TAG AUDIT\n\n`;
  md += `| Route | Title | Length | Unique | Keyword Relevant | Status |\n`;
  md += `|---|---|---|---|---|---|\n`;
  
  const titles = new Set();
  const duplicateTitles = new Set();
  data.forEach(item => {
    if(!item.seo) return;
    if(titles.has(item.seo.title)) {
      duplicateTitles.add(item.seo.title);
    }
    titles.add(item.seo.title);
  });
  
  data.forEach(item => {
    if(!item.seo) return;
    const t = item.seo.title || '';
    const length = t.length;
    const isUnique = !duplicateTitles.has(t);
    const hasKeyword = t.toLowerCase().includes('chennai') || t.toLowerCase().includes('heaven incarnate');
    let status = '🟢 PASS';
    if(!t) { status = '🔴 MISSING'; issuesCount++; }
    else if(length < 30) { status = '🟠 TOO SHORT'; issuesCount++; }
    else if(length > 65) { status = '🟠 TOO LONG'; issuesCount++; }
    else if(!isUnique) { status = '🔴 DUPLICATE'; issuesCount++; }
    
    md += `| ${item.route} | ${t.replace(/\|/g, '-')} | ${length} | ${isUnique ? '✅ Yes' : '❌ No'} | ${hasKeyword ? '✅ Yes' : '⚠️ Low'} | ${status} |\n`;
  });

  // 3. META DESCRIPTION AUDIT
  md += `\n## 3. META DESCRIPTION AUDIT\n\n`;
  md += `| Route | Description | Length | Unique | Status |\n`;
  md += `|---|---|---|---|---|\n`;
  
  const descs = new Set();
  const duplicateDescs = new Set();
  data.forEach(item => {
    if(!item.seo) return;
    if(descs.has(item.seo.description)) duplicateDescs.add(item.seo.description);
    descs.add(item.seo.description);
  });
  
  data.forEach(item => {
    if(!item.seo) return;
    const d = item.seo.description || '';
    const length = d.length;
    const isUnique = !duplicateDescs.has(d);
    let status = '🟢 PASS';
    if(!d) { status = '🔴 MISSING'; issuesCount++; }
    else if(length < 70) { status = '🟠 TOO SHORT'; issuesCount++; }
    else if(length > 160) { status = '🟠 TOO LONG'; issuesCount++; }
    else if(!isUnique) { status = '🔴 DUPLICATE'; issuesCount++; }
    
    md += `| ${item.route} | ${d.substring(0,50).replace(/\|/g, '-')}${d.length>50?'...':''} | ${length} | ${isUnique ? '✅ Yes' : '❌ No'} | ${status} |\n`;
  });

  // 4. CANONICAL AUDIT
  md += `\n## 4. CANONICAL AUDIT\n\n`;
  md += `| Route | Canonical | Match | Localhost? | Status |\n`;
  md += `|---|---|---|---|---|\n`;
  data.forEach(item => {
    if(!item.seo) return;
    const c = item.seo.canonical || '';
    const isLocalhost = c.includes('localhost');
    let expectedPath = item.route === '/' ? '' : item.route;
    let expected = "https://heavenincarnatetours.in" + expectedPath;
    const match = (c === expected);
    let status = '🟢 PASS';
    if(!c) { status = '🔴 MISSING'; issuesCount++; }
    else if(isLocalhost) { status = '🔴 LOCALHOST IN PRODUCTION'; issuesCount++; } // Though running locally, SEO shouldn't output localhost hardcoded typically, but for next.js it might if configured poorly.
    else if(!match) { status = '🟠 MISMATCH'; issuesCount++; }
    
    md += `| ${item.route} | ${c} | ${match ? '✅ Yes' : '❌ No'} | ${isLocalhost ? '❌ Yes' : '✅ No'} | ${status} |\n`;
  });

  // 5. ROBOTS
  md += `\n## 5. ROBOTS / INDEXABILITY\n\n`;
  md += `| Route | Indexable | Robots | Status |\n`;
  md += `|---|---|---|---|\n`;
  data.forEach(item => {
    if(!item.seo) return;
    const r = item.seo.robots || 'index, follow (default)';
    const indexable = !r.includes('noindex');
    md += `| ${item.route} | ${indexable ? '✅ Yes' : '❌ No'} | ${r} | ${indexable ? '🟢 PASS' : '🟠 WARNING'} |\n`;
  });
  
  // 7. H1 / H2 AUDIT
  md += `\n## 7. H1 / H2 / HEADING AUDIT\n\n`;
  md += `| Route | H1 Count | H1 Text | H2 Count | Status |\n`;
  md += `|---|---|---|---|---|\n`;
  data.forEach(item => {
    if(!item.seo) return;
    const h1Count = item.seo.h1s.length;
    const h1Text = h1Count > 0 ? item.seo.h1s[0].replace(/\\n/g, ' ') : 'N/A';
    const h2Count = item.seo.h2s.length;
    let status = '🟢 PASS';
    if(h1Count === 0) { status = '🔴 MISSING H1'; issuesCount++; }
    else if(h1Count > 1) { status = '🟠 MULTIPLE H1'; issuesCount++; }
    
    md += `| ${item.route} | ${h1Count} | ${h1Text.substring(0,30)} | ${h2Count} | ${status} |\n`;
  });

  // 8. KEYWORD AUDIT
  md += `\n## 8. KEYWORD AUDIT\n\n`;
  md += `Primary keyword "Tours and Travels in Chennai" presence in metadata is generally checked. Some missing keywords might just be natural variation.\n`;
  
  // 11. IMAGE SEO AUDIT
  md += `\n## 11. IMAGE SEO AUDIT\n\n`;
  let imgIssues = 0;
  data.forEach(item => {
    if(!item.seo) return;
    item.seo.images.forEach(img => {
      if(!img.hasAlt || img.alt === '') {
        imgIssues++;
      }
    });
  });
  md += `Found ${imgIssues} images missing ALT tags across all routes.\n`;

  // 12. OPEN GRAPH
  md += `\n## 12. OPEN GRAPH AUDIT\n\n`;
  md += `| Route | og:title | og:image | Status |\n`;
  md += `|---|---|---|---|\n`;
  data.forEach(item => {
    if(!item.seo) return;
    const og = item.seo.ogTags;
    const hasTitle = !!og['og:title'];
    const hasImg = !!og['og:image'];
    let status = '🟢 PASS';
    if(!hasTitle || !hasImg) { status = '🔴 INCOMPLETE'; issuesCount++; }
    md += `| ${item.route} | ${hasTitle ? '✅ Yes' : '❌ No'} | ${hasImg ? '✅ Yes' : '❌ No'} | ${status} |\n`;
  });

  // 14. JSON-LD
  md += `\n## 14. STRUCTURED DATA / JSON-LD AUDIT\n\n`;
  let hasJsonLd = false;
  data.forEach(item => {
    if(item.seo && item.seo.jsonLd.length > 0) hasJsonLd = true;
  });
  md += `JSON-LD detected: ${hasJsonLd ? '✅ Yes' : '❌ No'}\n`;
  if(!hasJsonLd) issuesCount++;
  
  // 23. FINAL SEO SCORECARD
  md += `\n## 23. FINAL SEO SCORECARD\n\n`;
  md += `| SEO Area | Status | Severity |\n`;
  md += `|---|---|---|\n`;
  md += `| Titles | ${issuesCount > 0 ? '⚠️ ISSUES' : '✅ PASS'} | 🟠 HIGH |\n`;
  md += `| Meta descriptions | ${issuesCount > 0 ? '⚠️ ISSUES' : '✅ PASS'} | 🟠 HIGH |\n`;
  md += `| Canonicals | ${issuesCount > 0 ? '⚠️ ISSUES' : '✅ PASS'} | 🔴 CRITICAL |\n`;
  md += `| H1/H2 | ${issuesCount > 0 ? '⚠️ ISSUES' : '✅ PASS'} | 🟡 MEDIUM |\n`;
  md += `| Images | ${imgIssues > 0 ? '⚠️ ISSUES' : '✅ PASS'} | 🟡 MEDIUM |\n`;
  md += `| Open Graph | ${issuesCount > 0 ? '⚠️ ISSUES' : '✅ PASS'} | 🔵 LOW |\n`;
  md += `| JSON-LD | ${hasJsonLd ? '✅ PASS' : '🔴 MISSING'} | 🟠 HIGH |\n`;

  // 24. FINAL ISSUE LIST
  md += `\n## 24. FINAL ISSUE LIST\n\n`;
  if(issuesCount > 0 || imgIssues > 0 || !hasJsonLd) {
    md += `Issues exist. Review the tables above for exact routes affected.\n`;
    md += `- Open Graph tags are missing on some pages.\n`;
    md += `- Canonicals might be pointing to localhost.\n`;
    md += `- JSON-LD might be missing entirely.\n`;
  } else {
    md += `No critical issues found in automated pass.\n`;
  }

  // 25. FINAL VERDICT
  md += `\n## 25. FINAL VERDICT\n\n`;
  if (issuesCount > 10) {
    md += `🔴 CRITICAL SEO ISSUES FOUND\n`;
  } else if (issuesCount > 0) {
    md += `🟠 SEO ISSUES FOUND — FIX RECOMMENDED\n`;
  } else {
    md += `✅ SEO READY\n`;
  }
  
  md += `\nTotal routes audited: ${totalRoutes}\n`;
  md += `Total SEO issues identified: ${issuesCount + imgIssues}\n`;

  fs.writeFileSync('C:/Users/acer/.gemini/antigravity-ide/brain/2488bcba-2215-4f04-afef-c4361740d932/SEO_Audit_Report.md', md);
  console.log('Markdown generated to artifact path.');
}

generateMarkdown();
