// Broken images: opens each page on a phone (390, 3x) and a computer
// (1440, 2x), loads every image (lazy ones too) and lists any that fail.
// Usage: node broken-images.mjs <site> [page.html ...]   (or pages on stdin)
import { startChrome, readPages, sleep } from './chrome.mjs';

const [, , site, ...rest] = process.argv;
if (!site) { console.error('Usage: node broken-images.mjs <site> [pages...]'); process.exit(1); }
const pages = readPages(rest);
const chrome = await startChrome();
let total = 0; const broken = [];
for (const page of pages) for (const [width, dpr] of [[390, 3], [1440, 2]]) {
  const tab = await chrome.tab({ width, dpr });
  await tab.open(`${site}/${page}`, 1500);
  await tab.evaluate(`document.querySelectorAll('img[loading=lazy]').forEach(i => i.loading = 'eager')`);
  await tab.scrollToEnd(600, 40); await sleep(2500);
  const [n, bad] = JSON.parse(await tab.evaluate(`JSON.stringify([
    [...document.images].filter(i => i.complete).length,
    [...document.images].filter(i => i.complete && i.naturalWidth === 0 && (i.currentSrc || i.src)).map(i => i.currentSrc || i.src)])`));
  total += n; bad.forEach(src => broken.push(`${page} @${width}: ${decodeURIComponent(src.split('/').slice(-2).join('/'))}`));
  tab.close();
}
await chrome.stop();
console.log(`images loaded: ${total}, broken: ${broken.length}`);
broken.forEach(b => console.log('  ' + b));
process.exit(broken.length ? 2 : 0);
