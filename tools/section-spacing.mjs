// Section spacing: for every section, the room between its top edge and its first visible thing (text, picture,
// card, button), and between its last visible thing and its bottom edge. Not the CSS padding: inner boxes, fixed
// heights and absolutely placed cards count. Animations are switched off first (a reveal still moving reads as
// extra room). Nafas phones should read 64/64 (playbooks/nafas-website.md).
// Usage: node section-spacing.mjs <site-or-url> [page.html ...] [--width 390]   (pages on stdin also work)
//   node tools/section-spacing.mjs ../nafas.website/site residential.html id-id/residential.html
//   node tools/section-spacing.mjs https://nafas.dev residential
// Sections are elements with data-section (SEL="..." to change). Output: "name top/bottom h<height>".
import { startChrome, readPages, sleep } from './chrome.mjs';

const args = process.argv.slice(2);
let width = 390; const wi = args.indexOf('--width');
if (wi >= 0) { width = +args[wi + 1]; args.splice(wi, 2); }
const [site, ...rest] = args;
if (!site) { console.error('Usage: node section-spacing.mjs <site-or-url> [pages...] [--width 390]'); process.exit(1); }
const SEL = process.env.SEL || '[data-section]';
const isUrl = /^https?:/.test(site);

const measure = `(async()=>{
const s=document.createElement('style');
s.textContent='*,*::before,*::after{transition:none!important;animation:none!important} [class*=reveal],[class*=appear],[class*=fade],[data-reveal],[class*=-in]{transform:none!important;opacity:1!important}';
document.head.appendChild(s);
await new Promise(r=>setTimeout(r,1500));
for(let y=0;y<document.body.scrollHeight;y+=500){scrollTo(0,y);await new Promise(r=>setTimeout(r,80));}
scrollTo(0,0); await new Promise(r=>setTimeout(r,800));
const out=[];
for(const sec of document.querySelectorAll(${JSON.stringify(SEL)})){
  const name=sec.dataset.section||sec.className.toString().split(' ')[0];
  if(/footer|^nav/.test(name))continue;
  const R=sec.getBoundingClientRect(); if(R.height<60)continue;
  let t=1e9,b=-1e9;
  for(const e of sec.querySelectorAll('*')){
    const r=e.getBoundingClientRect(); if(!r.width||!r.height)continue;
    if(r.right<0||r.left>innerWidth)continue;
    const cs=getComputedStyle(e); if(cs.visibility==='hidden'||cs.opacity==='0'||cs.display==='none')continue;
    const own=[...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim());
    const media=/^(IMG|VIDEO|SVG|PICTURE|CANVAS)$/i.test(e.tagName);
    const box=(cs.backgroundColor!=='rgba(0, 0, 0, 0)'||cs.backgroundImage!=='none'||parseFloat(cs.borderTopWidth)>0)&&!(r.width>=R.width*0.95&&r.height>=R.height*0.6);
    if(!(own||media||box))continue;
    t=Math.min(t,r.top);b=Math.max(b,r.bottom);
  }
  out.push(name+' '+Math.round(t-R.top)+'/'+Math.round(R.bottom-b)+' h'+Math.round(R.height));
}
return out.join('\\n');
})()`;

const pages = rest.length || isUrl ? (rest.length ? rest : ['']) : readPages(rest);
const chrome = await startChrome();
for (const page of pages) {
  const tab = await chrome.tab({ width, height: 844 });
  if (isUrl) { await tab.send('Page.navigate', { url: `${site.replace(/\/$/, '')}/${page}${page.includes('?') ? '&' : '?'}v=${Date.now()}` }); await sleep(3000); }
  else await tab.open(`${site}/${page}`, 2500);
  console.log(`## ${page || site} @${width}\n${await tab.evaluate(measure)}\n`);
  tab.close();
}
await chrome.stop();
