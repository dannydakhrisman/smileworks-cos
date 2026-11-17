// Did anything move? Compares the position and size of every element on
// each page between two copies of a site (before and after a change).
// Usage: node layout-diff.mjs <before-site> <after-site> [page.html ...]
// Pages can also come one per line on stdin. Widths: 390, 1000, 1440.
// Optional: IGNORE="main.nf-main" skips wrapper elements you added on purpose.
import { startChrome, readPages } from './chrome.mjs';

const [, , siteA, siteB, ...rest] = process.argv;
if (!siteA || !siteB) { console.error('Usage: node layout-diff.mjs <before-site> <after-site> [pages...]'); process.exit(1); }
const pages = readPages(rest);
const ignore = process.env.IGNORE || '';
const chrome = await startChrome();

async function boxes(site, page, width) {
  const tab = await chrome.tab({ width });
  await tab.open(`${site}/${page}`, 2200);
  const json = await tab.evaluate(`JSON.stringify([...document.querySelectorAll('body *')]
    .filter(e => !['SCRIPT','STYLE','SOURCE','BR'].includes(e.tagName) && !(${JSON.stringify(ignore)} && e.matches(${JSON.stringify(ignore || '*')})))
    .map(e => { const b = e.getBoundingClientRect(); const c = typeof e.className === 'string' ? e.className.split(' ')[0] : '';
      return [e.tagName + (c ? '.' + c : ''), Math.round(b.x), Math.round(b.y + scrollY), Math.round(b.width), Math.round(b.height)]; }))`);
  tab.close();
  return JSON.parse(json);
}

let moved = 0;
for (const page of pages) for (const width of [390, 1000, 1440]) {
  const a = await boxes(siteA, page, width), b = await boxes(siteB, page, width);
  if (a.length !== b.length) { moved++; console.log(`DIFF  ${page} @${width}: element count ${a.length} -> ${b.length}`); continue; }
  let diff = 0, first = null;
  for (let i = 0; i < a.length; i++) {
    const x = a[i], y = b[i];
    if (x[0] !== y[0] || x.slice(1).some((v, k) => Math.abs(v - y[k + 1]) > 1)) { diff++; first ||= [x, y]; }
  }
  if (diff) { moved++; console.log(`DIFF  ${page} @${width}: ${diff} of ${a.length} moved, first ${JSON.stringify(first[0])} -> ${JSON.stringify(first[1])}`); }
  else console.log(`same  ${page} @${width} (${a.length} elements)`);
}
await chrome.stop();
console.log(moved ? `\n${moved} page/width checks changed` : '\nNothing moved');
process.exit(moved ? 2 : 0);
