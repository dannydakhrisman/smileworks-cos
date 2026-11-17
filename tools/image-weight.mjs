// Image weight: how many bytes of images a visitor downloads per page,
// on a phone (390, 3x) and a computer (1440, 2x). "first" = before any
// scrolling, "all" = after scrolling to the end. Sizes are read from the
// site's own files, so the numbers don't swing between runs.
// Usage: node image-weight.mjs <site> [page.html ...] > baseline.json
import fs from 'node:fs';
import path from 'node:path';
import { startChrome, readPages, sleep } from './chrome.mjs';

const [, , site, ...rest] = process.argv;
if (!site) { console.error('Usage: node image-weight.mjs <site> [pages...]'); process.exit(1); }
const root = path.resolve(site);
const pages = readPages(rest);
const chrome = await startChrome();
const size = files => [...files].reduce((s, f) => { try { return s + fs.statSync(f).size; } catch { return s; } }, 0);
const out = {};
for (const page of pages) for (const [width, dpr, height] of [[390, 3, 844], [1440, 2, 900]]) {
  const files = new Set();
  const tab = await chrome.tab({ width, dpr, height, onEvent: d => {
    if (d.method !== 'Network.requestWillBeSent' || d.params.type !== 'Image') return;
    const u = d.params.request.url;
    if (u.startsWith('file://')) files.add(decodeURIComponent(new URL(u).pathname));
  } });
  await tab.open(`${root}/${page}`, 2500);
  const first = size(files);
  await tab.scrollToEnd(); await sleep(2500);
  out[`${page} @${width}`] = { first, all: size(files), images: files.size };
  tab.close();
}
await chrome.stop();
const mb = b => (b / 1e6).toFixed(1);
for (const w of [390, 1440]) {
  const rows = Object.entries(out).filter(([k]) => k.endsWith('@' + w));
  console.error(`@${w}: first load ${mb(rows.reduce((s, [, v]) => s + v.first, 0))} MB, whole page ${mb(rows.reduce((s, [, v]) => s + v.all, 0))} MB, ${rows.length} pages`);
}
console.log(JSON.stringify(out, null, 1));
