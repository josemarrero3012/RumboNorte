// Mini driver CDP: lanza Chromium headless con WebGL y expone acciones de prueba.
import { spawn } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
const dir = `${tmpdir()}/rumbo-norte-pruebas/`;
export async function open({ w = 1440, h = 900, mobile = false, port = 9333, url = 'about:blank', reduced = false, dpr = 0 } = {}) {
  mkdirSync(dir, { recursive: true });
  const proc = spawn('chromium', ['--headless=new', '--no-first-run', `--user-data-dir=${dir}prof${port}`, '--use-angle=gl', '--ignore-gpu-blocklist', '--disable-gpu-watchdog', '--disable-gpu-process-crash-limit', '--hide-scrollbars', `--remote-debugging-port=${port}`, `--window-size=${w},${h}`, 'about:blank'], { stdio: 'ignore' });
  let tgt;
  for (let i = 0; i < 60 && !tgt; i++) {
    await new Promise((r) => setTimeout(r, 200));
    try { tgt = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === 'page'); } catch {}
  }
  const ws = new WebSocket(tgt.webSocketDebuggerUrl);
  await new Promise((r) => (ws.onopen = r));
  let id = 0; const wait = new Map(); const logs = [];
  ws.onmessage = (e) => {
    const m = JSON.parse(e.data);
    if (m.id && wait.has(m.id)) { wait.get(m.id)(m); wait.delete(m.id); }
    if (m.method === 'Runtime.consoleAPICalled') logs.push(m.params.type + ': ' + m.params.args.map((a) => a.value ?? a.description).join(' '));
    if (m.method === 'Runtime.exceptionThrown') logs.push('EXC: ' + (m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text));
  };
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; wait.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
  await send('Page.enable'); await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: dpr || (mobile ? 2 : 1), mobile });
  if (mobile) await send('Emulation.setTouchEmulationEnabled', { enabled: true });
  if (reduced) await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  await send('Page.navigate', { url });
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const ev = async (expression) => { const r = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true }); return r.result?.result?.value ?? r.result?.exceptionDetails?.exception?.description; };
  const shot = async (name) => { const r = await send('Page.captureScreenshot', { format: 'png' }); mkdirSync(dir + 'shots', { recursive: true }); writeFileSync(`${dir}shots/${name}.png`, Buffer.from(r.result.data, 'base64')); };
  const move = (x, y) => send('Input.dispatchMouseEvent', { type: 'mouseMoved', x, y });
  const click = async (x, y) => { await move(x, y); await send('Input.dispatchMouseEvent', { type: 'mousePressed', x, y, button: 'left', clickCount: 1 }); await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x, y, button: 'left', clickCount: 1 }); };
  const tap = async (x, y) => { await send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] }); await send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); };
  const close = () => { ws.close(); proc.kill(); };
  return { send, ev, shot, move, click, tap, sleep, logs, close };
}
