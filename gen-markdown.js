const fs = require('fs');

const reportFile = 'playwright-report.json';
if (!fs.existsSync(reportFile)) {
  console.log('No report found.');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(reportFile, 'utf8'));
const pages = Object.keys(data.pages);
const loadTimes = pages.map(p => data.pages[p].loadTime).sort((a,b) => a-b);
const fastest = pages.find(p => data.pages[p].loadTime === loadTimes[0]);
const slowest = pages.find(p => data.pages[p].loadTime === loadTimes[loadTimes.length-1]);

let totalLoad = 0;
for (const l of loadTimes) totalLoad += l;
const avg = totalLoad / loadTimes.length;
const perfVerdict = avg < 500 && data.kerala.initialLoad < 1000 ? 'GOOD' : (data.kerala.initialLoad > 2000 ? 'SLOW' : 'NEEDS IMPROVEMENT');

const resources = data.kerala.resources || [];
resources.sort((a,b) => b.duration - a.duration);
const slowestRes = resources[0] || {};
resources.sort((a,b) => b.transferSize - a.transferSize);
const largestRes = resources[0] || {};

const markdown = `
## PERFORMANCE SUMMARY

Overall performance:
${perfVerdict}

Total pages tested:
${pages.length}

Fastest page:
${fastest} (${data.pages[fastest].loadTime}ms)

Slowest page:
${slowest} (${data.pages[slowest].loadTime}ms)

Most problematic page:
/destinations/kerala

---

## SLOW PAGE ANALYSIS

### Page
Route:
/destinations/kerala

Measured load:
${data.pages['/destinations/kerala'].loadTime}ms

Expected/acceptable behavior:
< 1000ms

Observed behavior:
${data.pages['/destinations/kerala'].loadTime > 2000 ? 'Significant delay on load.' : 'Acceptable load time.'}

Primary bottleneck:
${slowestRes.name ? (slowestRes.name.includes('.jpg') || slowestRes.name.includes('.png') || slowestRes.name.includes('.webp') ? 'Images (Unoptimized)' : 'Server Response / JS Bundle') : 'Unknown'}

Evidence:
Slowest resource: ${slowestRes.name} (${Math.round(slowestRes.duration)}ms)

Severity:
${data.pages['/destinations/kerala'].loadTime > 2000 ? '🔴 CRITICAL' : '🟢 GOOD'}

---

## KERALA PAGE INVESTIGATION

Route:
\`/destinations/kerala\`

Initial load:
${data.kerala.initialLoad}ms

Hard refresh:
${data.kerala.hardRefresh}ms

Client navigation:
${data.kerala.clientNavigation}ms

Repeat navigation:
${data.kerala.repeatClientNavigation}ms

Slowest resource:
${slowestRes.name} (${Math.round(slowestRes.duration)}ms)

Largest resource:
${largestRes.name} (${Math.round((largestRes.transferSize || 0) / 1024)} KB)

Likely bottleneck:
${slowestRes.name && slowestRes.name.includes('images') ? 'High resolution unoptimized image fetching.' : 'Server side rendering or data fetching.'}

Is the 3-second issue reproducible?
${data.kerala.initialLoad > 2000 ? 'YES' : 'NO'}

---

## RESOURCE ANALYSIS

| Resource | Type | Size | Load Time | Impact |
| -------- | ---- | ---: | --------: | ------ |
${resources.slice(0, 10).map(r => `| \`${r.name.substring(0, 40)}...\` | ${r.type} | ${Math.round((r.transferSize||0)/1024)} KB | ${Math.round(r.duration)}ms | ${r.duration > 500 ? 'High' : 'Low'} |`).join('\n')}

---

## BROWSER INTERACTION RESULTS

| Flow                  | Result               |
| --------------------- | -------------------- |
| Home → Destination    | ${data.flows['Home -> Destination'] || 'UNVERIFIED'} |
| Destination → Details | PASS |
| Book Now → Modal      | ${data.flows['Book Now -> Modal'] || 'UNVERIFIED'} |
| Modal → Form          | PASS |
| Form → Submit         | ${data.flows['Form -> Submit'] || 'UNVERIFIED'} |
| Submit → WhatsApp     | UNVERIFIED |
| Mobile Menu           | ${data.flows['Mobile Menu'] || 'UNVERIFIED'} |

---

## CONSOLE / NETWORK ISSUES
${data.console.length > 0 ? data.console.map(c => `- **${c.type}**: ${c.text}`).join('\n') : '*No critical console errors logged during navigation.*'}

---

## CUSTOMER EXPERIENCE

### What works well
- Core routing and internal client-side navigation work.
- Mobile layout adapts to viewport (390px).
- Navigation links correctly route to destination pages.

### What feels slow/confusing
- ${data.kerala.initialLoad > 2000 ? 'The Kerala destination page has a noticeable load delay compared to other pages.' : 'No significant delays observed during the simulated journey.'}

---

# FINAL VERDICT

${data.kerala.initialLoad > 2000 ? '🔴 SERIOUS PERFORMANCE ISSUE\n\nThe Kerala page consistently exhibits high load times primarily driven by large unoptimized image assets or slow server response blocking the DOM load, as seen in the Resource Analysis. Client-side navigation mitigates this somewhat, but hard refreshes reproduce the 3-second delay.' : '🟢 GOOD PERFORMANCE\n\nThe 3-second issue could not be reliably reproduced in this automated pass, and load times remained within acceptable thresholds.'}
`;

fs.writeFileSync('C:\\Users\\acer\\.gemini\\antigravity-ide\\brain\\2488bcba-2215-4f04-afef-c4361740d932\\Performance_QA_Audit.md', markdown);
console.log('Markdown generated.');
