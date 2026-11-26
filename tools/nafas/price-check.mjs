// Nafas price check: do the ad pages show the same plans as their region's Residential page?
// For every home size (Studio, 1, 2, 3 Bed) it reads, on each ad page, the Annual and Monthly price, the yearly
// saving, the setup fee and the devices, and compares them with /<region>/residential. Residential itself should match
// the region shop (shop.nafas.com "Choose your plan"); check that by hand in Safari, one size at a time
// (playbooks/nafas-website.md).
// Usage: node tools/nafas/price-check.mjs <site-or-url>
//   node tools/nafas/price-check.mjs ../nafas.website/site     (the repo, before a release)
//   node tools/nafas/price-check.mjs https://nafas.com           (what visitors see)
// Exit code 2 when anything differs. Add new ad pages to PAGES below.
import { startChrome, sleep } from '../chrome.mjs';

const PAGES = [
  { ad: 'ads/20261118ads/version-1', res: 'qa-en/residential' },
  { ad: 'ads/20261013ads/version-3', res: 'qa-en/residential' },     // repo copy; live one is on the old server until routed
  { ad: 'ads/20261013ads/version-3-id', res: 'id-en/residential' },
];
const SIZES = ['studio', '1br', '2br', '3br'];

const site = process.argv[2];
if (!site) { console.error('Usage: node price-check.mjs <site-or-url>'); process.exit(1); }
const isUrl = /^https?:/.test(site);
const base = site.replace(/\/$/, '');

const num = s => (s || '').replace(/[^0-9]/g, '');
const device = s => /pure40/i.test(s) ? 'Pure40' : /pure60/i.test(s) ? 'Pure60' : /app/i.test(s) ? 'app' : /monitor|airtest/i.test(s) ? 'monitor' : s;

// Residential: everything is in the page, one span per size (data-for)
const readRes = `JSON.stringify(Object.fromEntries(${JSON.stringify(SIZES)}.map(k=>{
  const amt=[...document.querySelectorAll('.nf-res-size__amt')].map(p=>(p.querySelector('[data-for="'+k+'"]')||{}).textContent);
  const save=(document.querySelector('.nf-res-size__save [data-for="'+k+'"]')||{}).textContent;
  const fee=(document.querySelector('.nf-res-size__fee')||{}).textContent;
  const dev=[...document.querySelectorAll('.nf-res-size__devices[data-for="'+k+'"] img')].map(i=>i.alt);
  return [k,{annual:amt[0],monthly:amt[1],save,fee,dev}];
})))`;
// Ad page: the prices are written by its script, so click each tab and read what shows
const readAd = k => `(async()=>{
  document.querySelector('.tab[data-k="${k}"]').click();
  await new Promise(r=>setTimeout(r,2500));
  const g=i=>(document.getElementById(i)||{}).textContent;
  const fee=document.querySelector('.fee')||document.querySelector('[data-i18n="t20"]');
  return JSON.stringify({annual:g('pA'),monthly:g('pM'),save:g('pS'),fee:fee&&fee.textContent,
    dev:[...document.querySelectorAll('#irow img')].filter(i=>i.offsetParent).map(i=>i.alt)});
})()`;

// A fresh Chrome per page: these pages carry autoplay videos, and one Chrome reused across them quits partway
async function onPage(path, fn) {
  const chrome = await startChrome();
  try {
    const t = await chrome.tab({ width: 1440 });
    if (isUrl) { await t.send('Page.navigate', { url: `${base}/${path}?lang=en&v=${Date.now()}` }); await sleep(5000); }
    else await t.open(`${base}/${path}${path.endsWith('residential') ? '.html' : '/index.html'}`, 3000);
    return await fn(t);
  } finally { await chrome.stop(); }
}
const within = (p, ms = 30000) => Promise.race([p, sleep(ms).then(() => null)]);

let bad = 0; const resCache = {};
for (const p of PAGES) {
  if (!resCache[p.res]) resCache[p.res] = await onPage(p.res, async t => JSON.parse(await within(t.evaluate(readRes)) || 'null'));
  const res = resCache[p.res];
  if (!res) { bad++; console.log(`## ${p.res}: COULD NOT READ`); continue; }
  if (isUrl) {   // the live version-3 is still the old server's Framer copy until Ardimas routes it to nafas-website
    const html = await (await fetch(`${base}/${p.ad}/`)).text().catch(() => '');
    if (/framerusercontent/.test(html)) { console.log(`## ${p.ad}  skipped: still served by the old server (not this repo)`); continue; }
  }
  console.log(`## ${p.ad}  vs  ${p.res}`);
  await onPage(p.ad, async t => {
    for (const k of SIZES) {
      let ad = null;
      try { ad = JSON.parse(await within(t.evaluate(readAd(k))) || 'null'); } catch {}
      if (!ad) { bad++; console.log(`  ${k.padEnd(6)} COULD NOT READ (no pricing tabs, or the page didn't answer)`); continue; }
      const r = res[k];
      const diffs = [];
      for (const f of ['annual', 'monthly', 'save']) if (num(ad[f]) !== num(r[f])) diffs.push(`${f} ${ad[f]} (Residential ${r[f]})`);
      // setup fee: the Residential amount must appear in the ad page's Monthly note
      if (r.fee && !num(ad.fee).includes(num(r.fee))) diffs.push(`setup fee "${ad.fee}" (Residential "${r.fee}")`);
      const da = ad.dev.map(device).join('+'), dr = r.dev.map(device).join('+');
      if (da !== dr) diffs.push(`devices ${da} (Residential ${dr})`);
      if (diffs.length) bad++;
      console.log(`  ${k.padEnd(6)} ${diffs.length ? 'DIFFERS: ' + diffs.join('; ') : `ok  ${r.annual} / ${r.monthly}, ${r.save.trim()}  ${dr}`}`);
    }
  });
}
console.log(bad ? `\n${bad} size(s) differ.` : '\nAll ad pages match Residential.');
process.exit(bad ? 2 : 0);
