// Shared helper: start headless Chrome and open tabs on local HTML files.
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

export const sleep = ms => new Promise(r => setTimeout(r, ms));

// Pages come from the arguments, or one per line on stdin.
export function readPages(args) {
  if (args.length) return args;
  return fs.readFileSync(0, 'utf8').trim().split('\n').filter(Boolean);
}

export async function startChrome() {
  const port = 9300 + Math.floor(Math.random() * 600);
  const prof = fs.mkdtempSync(path.join(os.tmpdir(), 'cos-chrome-'));
  const proc = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    ['--headless=new', `--remote-debugging-port=${port}`, '--allow-file-access-from-files',
     '--user-data-dir=' + prof, 'about:blank'], { stdio: 'ignore' });
  for (let k = 0; k < 80; k++) {
    try { await fetch(`http://127.0.0.1:${port}/json/version`); break; } catch { await sleep(250); }
  }
  return {
    // One tab at a given screen size. onEvent sees Chrome events (e.g. network).
    async tab({ width, height = 900, dpr = 1, onEvent } = {}) {
      const t = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })).json();
      const ws = new WebSocket(t.webSocketDebuggerUrl);
      await new Promise(r => (ws.onopen = r));
      let id = 0; const wait = {};
      ws.onmessage = m => {
        const d = JSON.parse(m.data);
        if (d.id && wait[d.id]) { wait[d.id](d); delete wait[d.id]; } else if (onEvent) onEvent(d);
      };
      const send = (method, params = {}) => new Promise(r => { const i = ++id; wait[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
      const evaluate = async expression => {
        const r = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
        return r.result?.result?.value;
      };
      await send('Network.enable');
      await send('Page.enable');
      await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: dpr, mobile: width < 800 });
      await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
      return {
        send, evaluate,
        async open(file, settle = 2000) { await send('Page.navigate', { url: 'file://' + path.resolve(file) }); await sleep(settle); },
        async scrollToEnd(step = 500, pause = 60) {
          await evaluate(`(async()=>{for(let y=0;y<document.body.scrollHeight;y+=${step}){scrollTo(0,y);await new Promise(r=>setTimeout(r,${pause}))}})()`);
        },
        close: () => ws.close(),
      };
    },
    async stop() {
      const exited = new Promise(r => proc.once('exit', r));
      proc.kill(); await Promise.race([exited, sleep(3000)]);
      try { fs.rmSync(prof, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 }); } catch {}
    },
  };
}
