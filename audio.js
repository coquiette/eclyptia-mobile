/* ===== ECLYPTIA — moteur audio v2 : instruments synthétisés, réverbération, vraies musiques (aucun fichier audio) ===== */
let SB = null, AC = null, OUT = null, MG = null, MUS = null, RV = null, NB = null, TRK = null, VOX = 0, CUR = [440, 523.25, 659.25];
let musT = 0, musStep = 0, musMode = '', musTimer = 0, duckK = 1, musLv = 0, DLY = null, clickI = 0;
function musLevel(v) { musLv = Math.max(0, Math.min(1, v || 0)); }
const MUSV = .5;
function audio() {
  if (AC) { if (AC.state !== 'running' && !document.hidden) { try { AC.resume(); } catch (e) {} } return AC; }
  try {
    try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) {}   // le son sort même si l'iPhone est en mode silencieux
    AC = new (window.AudioContext || window.webkitAudioContext)();
    const cp = AC.createDynamicsCompressor(); cp.threshold.value = -15; cp.knee.value = 20; cp.ratio.value = 5; cp.attack.value = .004; cp.release.value = .18;
    OUT = AC.createGain(); OUT.gain.value = .95; OUT.connect(cp); cp.connect(AC.destination);
    MG = AC.createGain(); MG.gain.value = .8; MG.connect(OUT);
    MUS = AC.createGain(); MUS.gain.value = S.set.mus ? MUSV : 0; MUS.connect(OUT);
    const sr = AC.sampleRate; NB = AC.createBuffer(1, sr * 2, sr); const ch = NB.getChannelData(0); for (let i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1;
    if (!lite()) {   // réverbération : une salle synthétique
      const len = Math.floor(sr * 1.7), ir = AC.createBuffer(2, len, sr);
      for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); let lp = 0; for (let i = 0; i < len; i++) { lp += ((Math.random() * 2 - 1) - lp) * .45; d[i] = lp * Math.pow(1 - i / len, 2.8); } }
      RV = AC.createConvolver(); RV.buffer = ir; const ro = AC.createGain(); ro.gain.value = .9; RV.connect(ro); ro.connect(OUT);
      const s1 = AC.createGain(); s1.gain.value = .2; MG.connect(s1); s1.connect(RV);
      /* écho rythmé pour les mélodies */
      DLY = AC.createGain(); DLY.gain.value = 1; const dn = AC.createDelay(1), fb = AC.createGain(), df = AC.createBiquadFilter(); dn.delayTime.value = .33; fb.gain.value = .38; df.type = 'lowpass'; df.frequency.value = 2600; DLY.connect(dn); dn.connect(df); df.connect(fb); fb.connect(dn); const dout = AC.createGain(); dout.gain.value = .4; df.connect(dout); dout.connect(MUS); const s2 = AC.createGain(); s2.gain.value = .32; MUS.connect(s2); s2.connect(RV);
    }
  } catch (e) { AC = null; }
  return AC;
}
document.addEventListener('visibilitychange', () => { if (!AC) return; try { if (document.hidden) AC.suspend(); else AC.resume(); } catch (e) {} });

/* ---------- briques ---------- */
function vend() { VOX--; }
function osc(type, f, t, d, dest, slide, det) {
  const o = AC.createOscillator(); o.type = type; o.frequency.setValueAtTime(f, t); if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, slide), t + d); if (det) o.detune.value = det;
  o.connect(dest); o.start(t); o.stop(t + d + .05); VOX++; o.onended = vend; return o;
}
function genv(v, t, a, d, out) { const g = AC.createGain(); g.gain.setValueAtTime(.0001, t); g.gain.linearRampToValueAtTime(v, t + a); g.gain.exponentialRampToValueAtTime(.0001, t + d); g.connect(out || SB || MG); return g; }
function tone(f, d, type, v, slide, at, out) { const t = AC.currentTime + (at || 0); osc(type || 'sine', f, t, d, genv(v, t, Math.min(.02, d / 4), d, out), slide); }
function noise(d, v, f0, f1, q, at, type, out) {
  const t = AC.currentTime + (at || 0), s = AC.createBufferSource(), fl = AC.createBiquadFilter(), g = AC.createGain();
  s.buffer = NB; s.loop = true; fl.type = type || 'bandpass'; fl.Q.value = q || 1; fl.frequency.setValueAtTime(f0, t); if (f1) fl.frequency.exponentialRampToValueAtTime(f1, t + d);
  g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(.0001, t + d); s.connect(fl); fl.connect(g); g.connect(out || SB || MG); s.start(t, Math.random()); s.stop(t + d + .03); VOX++; s.onended = vend;
}
/* cloche / célesta (synthèse FM) */
function bell(f, d, v, at, out) {
  const t = AC.currentTime + (at || 0), g = genv(v, t, .004, d, out), c = osc('sine', f, t, d, g), mg = AC.createGain();
  mg.gain.setValueAtTime(f * 2.4, t); mg.gain.exponentialRampToValueAtTime(1, t + d * .55); osc('sine', f * 3.01, t, d, mg); mg.connect(c.frequency);
  if (v > .03) osc('sine', f * 1.004, t, d * .8, genv(v * .35, t, .006, d * .8, out));   // léger chœur : son plus riche
}
/* corde pincée */
function pluck(f, d, v, at, out, type) {
  const t = AC.currentTime + (at || 0), fl = AC.createBiquadFilter(); fl.type = 'lowpass'; fl.Q.value = 3; fl.frequency.setValueAtTime(Math.min(11000, f * 9), t); fl.frequency.exponentialRampToValueAtTime(Math.max(200, f * 1.4), t + d * .7);
  fl.connect(genv(v, t, .004, d, out)); osc(type || 'sawtooth', f, t, d, fl);
}
/* nappe douce */
function pad(fs, d, v, at, out) {
  const t = AC.currentTime + (at || 0), fl = AC.createBiquadFilter(), g = AC.createGain(); fl.type = 'lowpass'; fl.frequency.value = 1500; fl.Q.value = .6;
  g.gain.setValueAtTime(.0001, t); g.gain.linearRampToValueAtTime(v, t + Math.min(.35, d * .3)); g.gain.setValueAtTime(v, t + d * .7); g.gain.linearRampToValueAtTime(.0001, t + d);
  fl.connect(g); g.connect(out || SB || MG); for (const f of fs) { osc('sawtooth', f, t, d, fl, 0, -8); osc('sawtooth', f, t, d, fl, 0, 8); }
}
function kick(at, v, out) { const t = AC.currentTime + (at || 0); osc('sine', 150, t, .22, genv(v, t, .003, .24, out), 42); noise(.02, v * .25, 3000, 0, 1, at, 'highpass', out); }
function snare(at, v, out) { noise(.15, v, 1900, 1200, .9, at, 'bandpass', out); tone(200, .08, 'triangle', v * .7, 130, at, out); }
function hat(at, v, out, d) { noise(d || .04, v, 8000, 0, 1, at, 'highpass', out); }
const NT = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }, NFC = {};
function nf(s) { if (NFC[s]) return NFC[s]; let i = 1, n = NT[s[0]]; if (s[1] === '#') { n++; i++; } else if (s[1] === 'b') { n--; i++; } return NFC[s] = 440 * Math.pow(2, (n - 9 + (+s.slice(i) - 4) * 12) / 12); }
const PEN = [0, 2, 4, 7, 9], pen = (i, base) => base * Math.pow(2, (PEN[i % 5] + 12 * Math.floor(i / 5)) / 12);
const CHN = {};
function chain(k, win, max) { const n = AC.currentTime, c = CHN[k] || (CHN[k] = { t: -9, i: 0 }); c.i = n - c.t < win ? Math.min(max, c.i + 1) : 0; c.t = n; return c.i; }
const rr = (a, b) => a + Math.random() * (b - a);

/* ---------- bruitages ---------- */
function crack(n) {
  noise(.08 + n * .015, .14 + n * .02, 5000 + n * 300, 1600, 1.4, 0, 'highpass'); tone(130 - n * 8, .16 + n * .02, 'sine', .14 + n * .02, 55);
  for (let i = 0; i < 2 + n; i++) bell(rr(1800, 4400), rr(.18, .38), .04, i * .025); bell(pen(n * 2, 659.25), .35, .07);
}
const SFX = {
  click(key) {
    let h = 0; for (const ch of String(key || '')) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    const seq = [0, 2, 4, 5, 7, 5, 4, 2, 3, 5, 7, 9], i = clickI++, f = pen((seq[i % seq.length] + h % 4) % 10, 523.25), k = (i + h) % 4;
    tone(rr(420, 520), .06, 'sine', .07, rr(800, 950)); tone(170, .05, 'sine', .05, 90);
    if (k === 0) bell(f * 2, .16, .04, .01); else if (k === 1) pluck(f, .14, .05, .008, 0, 'triangle'); else if (k === 2) { bell(f, .12, .035, .008); bell(f * 1.5, .14, .025, .05); } else { tone(f, .09, 'triangle', .05, f * 1.02, .008); noise(.03, .02, 3000, 1200, 1); }
  },
  back() { const f = [784, 698.46, 659.25, 587.33][clickI++ % 4]; tone(f, .09, 'sine', .08, f * .55); bell(f, .12, .025, .02); },
  tick() { tone(rr(1400, 1600), .03, 'square', .018); },
  err() { tone(196, .12, 'square', .05, 150); tone(147, .2, 'square', .05, 110, .11); },
  note(i) { bell(pen(i, 523.25), .4, .07); tone(pen(i, 261.63), .12, 'triangle', .05); noise(.04, .03, 2500, 900, 1); },
  open() { const b = [1046.5, 1174.7, 1318.5, 1568][clickI % 4]; bell(b, .35, .03, .06); bell(b * 1.5, .45, .025, .13); if (clickI % 2) bell(b * 2, .4, .015, .2); },
  buy() { tone(196, .14, 'triangle', .08); bell(1318.5, .12, .07); bell(1760, .55, .08, .09); bell(2637, .5, .04, .09); noise(.28, .05, 7000, 10000, 2, .09, 'highpass'); },
  claim() { for (let i = 0; i < 6; i++) bell(pen(i, 783.99), .38, .05, i * .05); pad([523.25, 783.99, 1046.5], .8, .022, .1); },
  lvl() { [[523.25, 0], [659.25, .1], [783.99, .2], [1046.5, .32], [1318.5, .44], [1568, .56]].forEach(([f, t]) => { pluck(f, .4, .06, t); bell(f * 2, .5, .03, t); }); pad([261.63, 392, 523.25, 659.25], 1.3, .045, .3); kick(.56, .3); noise(.8, .05, 6000, 10000, 1, .56, 'highpass'); },
  wipe() { noise(.45, .08, 250, 4500, 1.2); tone(200, .4, 'sine', .04, 800); },
  whoosh() { const up = clickI % 2; noise(rr(.22, .3), .055, up ? 300 : 3200, up ? 3400 : 400, 1.5); },
  start() { noise(.5, .08, 300, 6000, 1.3); [0, 1, 2, 3, 4].forEach(i => pluck(pen(i, 392), .3, .06, i * .06)); kick(0, .35); bell(1568, .8, .05, .32); },
  pop() { tone(rr(900, 1400), .06, 'sine', .05, 1750); },
  slam() { kick(0, .34); noise(.09, .08, 2800, 500, 1); [523.25, 659.25, 783.99, 1046.5].forEach(f => bell(f, .6, .04, .02)); },
  coin() { const i = chain('coin', .5, 12); bell(pen(i, 1046.5), .18, .05); tone(pen(i, 2093), .05, 'square', .012); },
  shoot() { pluck(CUR[(Math.random() * CUR.length) | 0] * 2, .09, .028, 0, 0, 'triangle'); noise(.03, .014, 4000, 0, 1, 0, 'highpass'); },
  hit() { noise(.04, .045, rr(2200, 3000), 700, 1.2); tone(rr(200, 250), .05, 'triangle', .05, 120); },
  crit() { noise(.06, .07, 5000, 1500, 1.5, 0, 'highpass'); bell(1976, .2, .06); tone(160, .1, 'sine', .12, 60); },
  kill(c) { const i = Math.min(14, Math.max(0, (c || 1) - 1)); tone(260, .09, 'sine', .1, 90); noise(.07, .05, 1400, 300, .8); bell(pen(i, 523.25), .22, .045, .01); },
  gem() { const i = chain('gem', .7, 14), f = pen(i, 880); tone(f, .09, 'sine', .045, f * 1.5); bell(f * 2, .12, .018); },
  hurt() { tone(190, .25, 'sawtooth', .11, 60); noise(.16, .1, 800, 150, .7); tone(95, .2, 'sine', .15, 50); },
  heart() { tone(62, .12, 'sine', .24, 40); tone(56, .14, 'sine', .18, 38, .17); },
  dash() { noise(.2, .09, 500, 5000, 2.5); tone(300, .16, 'sine', .04, 1200); },
  salve() { [0, 1, 2].forEach(i => pluck(pen(i + 2, 523.25), .22, .05, i * .035)); noise(.22, .05, 2500, 8000, 1.5); },
  onde() { tone(120, .55, 'sine', .24, 36); noise(.5, .13, 1200, 80, .7, 0, 'lowpass'); bell(196, .6, .05); },
  heal() { for (let i = 0; i < 5; i++) bell(pen(i, 659.25), .42, .05, i * .07); pad([523.25, 659.25, 783.99], .9, .022); },
  ultc() { tone(110, .95, 'sawtooth', .09, 1320); tone(165, .95, 'triangle', .07, 1980); noise(.95, .1, 300, 9000, 2); },
  ult() { kick(0, .5); tone(55, 1.3, 'sine', .3, 28); noise(1.1, .18, 6000, 100, .5, 0, 'lowpass'); pad([146.83, 220, 293.66, 440], 1.7, .05); for (let i = 0; i < 6; i++) bell(pen(i * 2, 587.33), .7, .05, i * .07); },
  boom() { kick(0, .45); tone(80, .5, 'sine', .28, 30); noise(.45, .18, 2500, 80, .6, 0, 'lowpass'); noise(.3, .06, 6000, 9000, 1, 0, 'highpass'); },
  wave() { [392, 523.25, 659.25, 783.99].forEach((f, i) => { pluck(f, .3, .06, i * .09); bell(f * 2, .35, .03, i * .09); }); snare(.36, .05); },
  boss() { for (let i = 0; i < 3; i++) { tone(466.16, .22, 'square', .04, 0, i * .5); tone(369.99, .22, 'square', .04, 0, i * .5 + .25); } tone(55, 1.6, 'sawtooth', .14, 49); noise(1.5, .06, 100, 500, 1); pad([73.42, 110, 146.83], 1.8, .06); },
  pick() { for (let i = 0; i < 4; i++) bell(pen(i + 1, 523.25), .42, .055, i * .06); noise(.3, .04, 5000, 9000, 1, .1, 'highpass'); },
  win() {
    [[392, 0, .14], [523.25, .14, .14], [659.25, .28, .14], [783.99, .42, .3], [659.25, .72, .14], [783.99, .86, .3], [1046.5, 1.16, 1.3]].forEach(([f, t, d]) => { pluck(f, d + .15, .08, t); bell(f * 2, d + .3, .04, t); });
    pad([261.63, 329.63, 392], .75, .05); pad([349.23, 440, 523.25], .45, .05, .72); pad([261.63, 392, 523.25, 659.25], 1.7, .06, 1.16);
    kick(0, .3); kick(.42, .3); kick(1.16, .42); for (let i = 0; i < 6; i++) snare(.86 + i * .05, .03 + i * .008); noise(1.4, .06, 6000, 10000, 1, 1.16, 'highpass');
  },
  lose() { [[440, 0], [415.3, .3], [392, .6], [329.63, .9], [293.66, 1.2]].forEach(([f, t]) => bell(f, .7, .07, t)); pad([146.83, 174.61, 220], 2.1, .05); tone(110, 1.6, 'sine', .12, 55, .2); },
  spawn() { tone(180, .3, 'sine', .04, 520); noise(.2, .02, 800, 2500, 3); },
  ann() { [523.25, 783.99, 1046.5].forEach((f, i) => pluck(f, .22, .06, i * .05, 0, 'square')); noise(.25, .05, 2500, 7000, 1.5); kick(0, .2); },
  combo(n) { const k = Math.max(0, [10, 25, 50, 100, 200].indexOf(n)), b = 523.25 * Math.pow(2, k * 2 / 12); [1, 1.26, 1.5, 2].forEach((r, i) => { pluck(b * r, .3, .06, i * .04); bell(b * r * 2, .4, .03, i * .04); }); kick(0, .3); },
  fw() { noise(.25, .05, 3000, 600, 1); tone(rr(900, 1500), .2, 'sine', .04, 300); bell(rr(1500, 3000), .3, .03, .12); },
  orbIn() { tone(110, .9, 'sine', .16, 440); noise(.7, .05, 400, 2500, 2); pad([220, 277.18, 329.63, 415.3], 1.4, .04); bell(1760, .8, .03, .3); },
  orbTick() { tone(rr(1800, 2700), .04, 'square', .03); },
  orbCharge() { tone(90, 1.5, 'sawtooth', .1, 1400); tone(135, 1.5, 'triangle', .08, 2100); noise(1.5, .09, 200, 9000, 1.2); },
  orbCrack1() { crack(1); }, orbCrack2() { crack(2); }, orbCrack3() { crack(3); }, orbCrack4() { crack(4); },
  orbBoom() { kick(0, .6); tone(65, 1.1, 'sine', .32, 26); noise(.9, .22, 5000, 80, .5, 0, 'lowpass'); noise(.6, .1, 7000, 10000, 1, 0, 'highpass'); pad([130.81, 196, 261.63, 329.63], 1.6, .05); },
  orbShatter() { for (let i = 0; i < 12; i++) bell(rr(1800, 4600), rr(.15, .4), .04, i * .03 + Math.random() * .03); noise(.5, .16, 7000, 3000, 1, 0, 'highpass'); },
  star(a) { const r = a[0], n = a[1], k = n * 2 + r; bell(pen(k, 659.25), .55, .08); pluck(pen(k, 329.63), .3, .05); noise(.25, .05, 5000, 9000, 1, 0, 'highpass'); tone(150, .12, 'sine', .1, 60); if (r >= 2) { kick(0, .32); for (let i = 0; i < 4; i++) bell(pen(i + k, 783.99), .5, .05, .08 + i * .06); } },
  zap() { tone(rr(900, 2300), .07, 'sawtooth', .035, rr(200, 500)); noise(.05, .04, 6000, 0, 2, 0, 'highpass'); },
  rar0() { [523.25, 659.25, 783.99].forEach((f, i) => bell(f, .45, .07, i * .08)); pad([261.63, 329.63, 392], .8, .03); },
  rar1() { [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => { bell(f, .5, .07, i * .08); pluck(f / 2, .3, .04, i * .08); }); pad([261.63, 329.63, 392], 1, .035); },
  rar2() { [440, 554.37, 659.25, 880, 1108.7, 1318.5].forEach((f, i) => { bell(f, .6, .07, i * .075); pluck(f, .35, .05, i * .075); }); pad([220, 277.18, 329.63, 440], 1.6, .05); kick(0, .35); kick(.45, .3); noise(1, .05, 6000, 10000, 1, .3, 'highpass'); },
  rar3() {
    kick(0, .5); tone(65, 1, 'sine', .2, 30); pad([130.81, 196, 261.63, 329.63, 392], 1.3, .06); pad([174.61, 261.63, 349.23, 440], .7, .06, 1.2); pad([196, 293.66, 392, 493.88], .7, .06, 1.8); pad([261.63, 392, 523.25, 659.25, 783.99], 2.2, .07, 2.4);
    for (let i = 0; i < 12; i++) { bell(pen(i, 523.25), .7, .06, i * .09); } [[1046.5, 1.2], [1174.7, 1.5], [1318.5, 1.8], [1568, 2.1], [2093, 2.4]].forEach(([f, t]) => { pluck(f / 2, .5, .07, t); bell(f, .9, .06, t); });
    kick(1.2, .35); kick(1.8, .35); kick(2.4, .5); for (let i = 0; i < 6; i++) snare(2.1 + i * .05, .03 + i * .01); noise(2, .07, 6000, 11000, 1, 2.4, 'highpass');
  }
};
const GAP = { shoot: .07, hit: .05, gem: .035, coin: .03, zap: .05, tick: .03 };
let sfxLast = {};
function snd(name, a) {
  if (!S.set.snd || !audio() || !SFX[name] || VOX > 90) return;
  const n = AC.currentTime; if (sfxLast[name] && n - sfxLast[name] < (GAP[name] || .04)) return; sfxLast[name] = n;
  try { if (AC.createStereoPanner) { const p = AC.createStereoPanner(); p.pan.value = rr(-.38, .38); p.connect(MG); SB = p; } SFX[name](a); } catch (e) {} SB = null;
}

/* ---------- musiques : chaque morceau a deux parties (A et B), jouées A A B A, avec des couches qui s'ajoutent ---------- */
const SONGS = {
  menu: { bpm: 108, style: 0, form: 'AABA',
    A: { ch: ['F3 A3 C4 E4', 'G3 B3 D4', 'E3 G3 B3 D4', 'A3 C4 E4 G4', 'F3 A3 C4 E4', 'G3 B3 D4 F4', 'C4 E4 G4 B4', 'G3 C4 D4'], bass: 'F2 G2 E2 A2 F2 G2 C2 G2',
      mel: ['A4 C5 E5 C5 A4 C5 E5 -', 'B4 D5 G5 D5 B4 D5 G5 -', 'G5 - E5 D5 E5 - B4 -', 'C5 - A4 - E5 D5 C5 -', 'A4 C5 F5 C5 A5 - F5 -', 'G5 - D5 - B5 A5 G5 -', 'E5 G5 C6 G5 E5 G5 C6 -', 'D6 C6 G5 E5 D5 - - -'],
      cm: ['- - - - C6 - - -', '- - - - D6 - - -', '- - B5 - - - G5 -', '- - E5 - - - - -', '- - - - C6 - A5 -', '- - B5 - - - - -', '- - - - G6 - - -', '- - - - - G5 A5 B5'] },
    B: { ch: ['D3 F3 A3 C4', 'G3 B3 D4', 'C4 E4 G4', 'A3 C4 E4', 'D3 F3 A3 C4', 'E3 G#3 B3', 'A3 C4 E4', 'G3 B3 D4'], bass: 'D2 G2 C2 A2 D2 E2 A2 G2',
      mel: ['F5 - A5 - D6 - C6 A5', 'G5 - B5 - D6 - - -', 'E5 G5 C6 - E6 - D6 C6', 'A5 - - G5 E5 - - -', 'F5 - A5 - D6 - F6 E6', 'E6 - D6 - B5 - G#5 -', 'A5 - C6 - E6 - A6 -', 'G6 - D6 - B5 - G5 -'],
      cm: ['- - - - - - - -', '- G6 - - - - B5 D6', '- - - - - - - -', '- - C6 - - - E5 G5', '- - - - - - - -', '- - - - - E5 - -', '- - - - - - - -', '- - - - - - D5 G5'] } },
  game: { bpm: 140, style: 1, form: 'AABA',
    A: { ch: ['A3 C4 E4', 'F3 A3 C4', 'C4 E4 G4', 'G3 B3 D4', 'A3 C4 E4', 'F3 A3 C4', 'E3 G#3 B3', 'E3 G#3 B3'], bass: 'A1 F1 C2 G1 A1 F1 E1 E1',
      mel: ['A4 - E5 - A5 - G5 E5', 'F5 - C5 - F5 - E5 C5', 'E5 - G5 - C6 - B5 G5', 'D5 - G5 - B5 - A5 G5', 'A5 - - E5 A5 B5 C6 -', 'A5 - - F5 A5 G5 F5 -', 'G#5 - E5 - B5 - G#5 -', 'E5 G#5 B5 E6 - - - -'],
      cm: ['- - - - - - - -', '- - A5 - - - - -', '- - - - - - - -', '- - D6 - - - - -', '- E6 - - - - - -', '- C6 - - - - - -', '- - - B5 - - - E6', '- - - - E6 D6 C6 B5'] },
    B: { ch: ['D3 F3 A3', 'G3 B3 D4', 'C4 E4 G4', 'A3 C4 E4', 'D3 F3 A3', 'G3 B3 D4', 'E3 G#3 B3', 'E3 G#3 B3'], bass: 'D1 G1 C2 A1 D1 G1 E1 E1',
      mel: ['D5 F5 A5 D6 - A5 F5 -', 'D6 - B5 - G5 - B5 D6', 'E6 - C6 - G5 - C6 E6', 'E6 D6 C6 A5 - - C6 -', 'D6 - F6 - A6 - F6 D6', 'B5 D6 G6 - F6 - D6 -', 'E6 - - B5 G#5 - B5 -', 'E6 - G#6 - B6 - - -'],
      cm: ['- - - - - - - -', '- - - - - - - -', '- - - - - - - -', '- - - - E5 A5 - -', '- - - - - - - -', '- - - - - - - -', '- - - - - - - E5', '- B5 - E6 - G#6 B6 -'] } },
  boss: { bpm: 156, style: 2, form: 'ABAB',
    A: { ch: ['D3 F3 A3', 'Bb2 D3 F3', 'G3 Bb3 D4', 'A3 C#4 E4', 'D3 F3 A3', 'Bb2 D3 F3', 'G3 Bb3 D4', 'A3 C#4 E4'], bass: 'D1 Bb0 G1 A1 D1 Bb0 G1 A1',
      mel: ['D5 - F5 - A5 - D6 -', 'D6 - Bb5 - F5 - D5 -', 'G5 - Bb5 - D6 - G6 -', 'A5 C#6 E6 C#6 A5 - E5 -', 'D6 - A5 - F5 - A5 D6', 'F6 - D6 - Bb5 - D6 -', 'G6 F6 D6 Bb5 G5 - Bb5 -', 'A5 - C#6 - E6 - A6 -'],
      cm: ['- - - - - - - -', '- - - - - - - -', '- - - - - - - -', '- - - - - - - -', '- - - A6 - - - -', '- - - - - - - F6', '- - - - - - - -', '- E6 - A6 - C#7 - -'] },
    B: { ch: ['G3 Bb3 D4', 'D3 F3 A3', 'Eb3 G3 Bb3', 'A3 C#4 E4', 'G3 Bb3 D4', 'D3 F3 A3', 'E3 G3 Bb3', 'A3 C#4 E4'], bass: 'G1 D1 Eb1 A1 G1 D1 E1 A1',
      mel: ['G5 Bb5 D6 G6 - D6 Bb5 -', 'F6 - D6 - A5 - F5 -', 'Eb6 - G6 - Bb6 - G6 Eb6', 'E6 - C#6 - A5 - - -', 'G6 - D6 - Bb5 - D6 G6', 'A6 - F6 - D6 - A5 -', 'G6 - E6 - Bb5 - G5 -', 'A5 C#6 E6 A6 - - - -'],
      cm: ['- - - - - - - -', '- A6 - - - - - -', '- - - - - - - -', '- - - - - E5 A5 C#6', '- - - - - - - -', '- - - - - - - D6', '- - - - - - - -', '- - - - C#7 A6 E6 A5'] } }
};
Object.assign(SONGS, {
  /* pages (boutique, codex, pass…) : calme et chaleureux */
  pages: { bpm: 92, style: 0, form: 'AABA',
    A: { ch: ['D3 F#3 A3', 'A2 C#3 E3', 'B2 D3 F#3', 'G2 B2 D3', 'D3 F#3 A3', 'A2 C#3 E3', 'G2 B2 D3', 'A2 C#3 E3'], bass: 'D2 A1 B1 G1 D2 A1 G1 A1',
      mel: ['F#5 - A5 - D6 - A5 -', 'E5 - A5 - C#6 - - -', 'D5 - F#5 - B5 - A5 F#5', 'G5 - - - B5 - D6 -', 'F#5 A5 D6 - F#6 - D6 -', 'E6 - C#6 - A5 - - -', 'B5 - D6 - G5 - B5 -', 'A5 - - - C#6 - E6 -'] },
    B: { ch: ['B2 D3 F#3', 'G2 B2 D3', 'D3 F#3 A3', 'A2 C#3 E3', 'B2 D3 F#3', 'G2 B2 D3', 'D3 F#3 A3', 'A2 C#3 E3'], bass: 'B1 G1 D2 A1 B1 G1 D2 A1',
      mel: ['B5 - D6 - F#6 - D6 -', 'B5 - G5 - D6 - B5 -', 'A5 - F#5 - D6 - A5 -', 'C#6 - - - E6 - - -', 'D6 - F#6 - B6 - F#6 -', 'G6 - D6 - B5 - G5 -', 'F#5 A5 D6 F#6 - - A6 -', 'E6 - C#6 - A5 - - -'] } },
  /* combat, deuxième moitié de la partie : plus tendu */
  game2: { bpm: 146, style: 1, form: 'AABA',
    A: { ch: ['E3 G3 B3', 'C3 E3 G3', 'G3 B3 D4', 'D3 F#3 A3', 'E3 G3 B3', 'C3 E3 G3', 'B2 D#3 F#3', 'B2 D#3 F#3'], bass: 'E1 C1 G1 D1 E1 C1 B0 B0',
      mel: ['E5 - B5 - E6 - D6 B5', 'C6 - G5 - E6 - D6 C6', 'B5 - D6 - G6 - F#6 D6', 'A5 - D6 - F#6 - E6 D6', 'E6 - - B5 E6 F#6 G6 -', 'E6 - - C6 E6 D6 C6 -', 'D#6 - B5 - F#6 - D#6 -', 'B5 D#6 F#6 B6 - - - -'] },
    B: { ch: ['A2 C3 E3', 'D3 F#3 A3', 'G3 B3 D4', 'C3 E3 G3', 'A2 C3 E3', 'D3 F#3 A3', 'B2 D#3 F#3', 'B2 D#3 F#3'], bass: 'A1 D1 G1 C1 A1 D1 B0 B0',
      mel: ['A5 C6 E6 A6 - E6 C6 -', 'A6 - F#6 - D6 - F#6 A6', 'B6 - G6 - D6 - G6 B6', 'G6 E6 C6 G5 - - C6 -', 'A5 - C6 - E6 - A6 -', 'F#6 A6 D7 - A6 - F#6 -', 'F#6 - - D#6 B5 - D#6 -', 'B5 - D#6 - F#6 - B6 -'] } },
  /* constellations : mystérieux, sans batterie */
  booster: { bpm: 84, style: 3, form: 'AB',
    A: { ch: ['A3 C4 E4 B4', 'F3 A3 C4 G4', 'C4 E4 G4 D5', 'G3 B3 D4 A4', 'A3 C4 E4 B4', 'F3 A3 C4 G4', 'C4 E4 G4 D5', 'G3 B3 D4 A4'], bass: 'A1 F1 C2 G1 A1 F1 C2 G1',
      mel: ['E6 - - - B5 - - -', 'C6 - - - G5 - A5 -', 'G5 - - - D6 - E6 -', 'D6 - - - B5 - - -', 'E6 - A6 - B6 - - -', 'A6 - G6 - E6 - - -', 'G6 - E6 - D6 - C6 -', 'B5 - - - D6 - - -'] },
    B: { ch: ['D3 F3 A3 E4', 'A3 C4 E4 B4', 'F3 A3 C4 G4', 'E3 G#3 B3 E4', 'D3 F3 A3 E4', 'A3 C4 E4 B4', 'F3 A3 C4 G4', 'E3 G#3 B3 E4'], bass: 'D2 A1 F1 E1 D2 A1 F1 E1',
      mel: ['F6 - - - A6 - - -', 'E6 - - - C6 - B5 -', 'A5 - C6 - F6 - - -', 'E6 - - - G#6 - B6 -', 'A6 - F6 - D6 - - -', 'C6 - E6 - A6 - - -', 'C7 - A6 - F6 - C6 -', 'B5 - - - E6 - - -'] } }
});
Object.assign(SONGS, {
  game3: { bpm: 138, style: 1, form: 'AABA',
    A: { ch: ['D3 F3 A3', 'Bb2 D3 F3', 'F3 A3 C4', 'C3 E3 G3', 'D3 F3 A3', 'Bb2 D3 F3', 'G3 Bb3 D4', 'A3 C#4 E4'], bass: 'D1 Bb0 F1 C1 D1 Bb0 G1 A1' },
    B: { ch: ['G3 Bb3 D4', 'D3 F3 A3', 'Bb2 D3 F3', 'A3 C#4 E4', 'G3 Bb3 D4', 'C3 E3 G3', 'F3 A3 C4', 'A3 C#4 E4'], bass: 'G1 D1 Bb0 A1 G1 C1 F1 A1' } },
  game4: { bpm: 150, style: 1, form: 'ABAB',
    A: { ch: ['F#3 A3 C#4', 'D3 F#3 A3', 'A3 C#4 E4', 'E3 G#3 B3', 'F#3 A3 C#4', 'D3 F#3 A3', 'B2 D3 F#3', 'C#3 F3 G#3'], bass: 'F#1 D1 A1 E1 F#1 D1 B0 C#1' },
    B: { ch: ['B2 D3 F#3', 'F#3 A3 C#4', 'D3 F#3 A3', 'E3 G#3 B3', 'B2 D3 F#3', 'D3 F#3 A3', 'E3 G#3 B3', 'C#3 F3 G#3'], bass: 'B0 F#1 D1 E1 B0 D1 E1 C#1' } },
  game5: { bpm: 132, style: 1, form: 'AABA',
    A: { ch: ['C3 Eb3 G3', 'Ab2 C3 Eb3', 'Eb3 G3 Bb3', 'Bb2 D3 F3', 'C3 Eb3 G3', 'Ab2 C3 Eb3', 'F3 Ab3 C4', 'G3 B3 D4'], bass: 'C1 Ab0 Eb1 Bb0 C1 Ab0 F1 G1' },
    B: { ch: ['F3 Ab3 C4', 'C3 Eb3 G3', 'Ab2 C3 Eb3', 'G3 B3 D4', 'F3 Ab3 C4', 'Bb2 D3 F3', 'Eb3 G3 Bb3', 'G3 B3 D4'], bass: 'F1 C1 Ab0 G1 F1 Bb0 Eb1 G1' } },
  menu2: { bpm: 104, style: 0, form: 'AABA',
    A: { ch: ['C3 E3 G3 B3', 'G3 B3 D4', 'A3 C4 E4 G4', 'F3 A3 C4 E4', 'C3 E3 G3 B3', 'G3 B3 D4', 'F3 A3 C4', 'G3 B3 D4 F4'], bass: 'C2 G1 A1 F1 C2 G1 F1 G1' },
    B: { ch: ['A3 C4 E4', 'F3 A3 C4 E4', 'C4 E4 G4', 'G3 B3 D4', 'D3 F3 A3 C4', 'F3 A3 C4', 'G3 B3 D4', 'G3 B3 D4 F4'], bass: 'A1 F1 C2 G1 D2 F1 G1 G1' } },
  boss2: { bpm: 160, style: 2, form: 'ABAB',
    A: { ch: ['E3 G3 B3', 'C3 E3 G3', 'A2 C3 E3', 'B2 D#3 F#3', 'E3 G3 B3', 'C3 E3 G3', 'D3 F#3 A3', 'B2 D#3 F#3'], bass: 'E1 C1 A0 B0 E1 C1 D1 B0' },
    B: { ch: ['A2 C3 E3', 'E3 G3 B3', 'F3 A3 C4', 'B2 D#3 F#3', 'A2 C3 E3', 'G3 B3 D4', 'F#3 A3 C4', 'B2 D#3 F#3'], bass: 'A0 E1 F1 B0 A0 G1 F#1 B0' } }
});
/* variété : plusieurs morceaux par ambiance, arrangement qui change toutes les 8 mesures, mélodies improvisées, changements de tonalité */
const POOL = { game: ['game', 'game3', 'game5'], game2: ['game2', 'game4', 'game3'], menu: ['menu', 'menu2'], pages: ['pages', 'menu2'], boss: ['boss', 'boss2'] };
const ARRS = { 0: [{ m: 1 }, { m: 1, cm: 1 }, { m: 2 }, { m: 0, arp: 1, d: 0 }, { m: 3, cm: 1 }, { m: 2, arp: 1 }], 1: [{ m: 1 }, { m: 1, cm: 1 }, { d: 3, m: 2 }, { d: 2, m: 0, arp: 1 }, { m: 3, cm: 1 }, { d: 3, m: 2, cm: 1 }, { d: 0, m: 1, arp: 1 }, { d: 3, m: 2 }], 2: [{ m: 1 }, { d: 3, m: 2 }, { m: 3, cm: 1 }, { d: 3, m: 2, cm: 1 }] };
const KEYC = [0, 0, 2, -3, 5, -2, 3, -5]; let musKey = 0, musSeed = (Math.random() * 9999) | 0, MGEN = null, MTHM = null, MPK = '';
function musMap(i) { musKey = [0, 2, -2, 3, -3, 5, -1, -5, 4][i | 0] || 0; musSeed = ((Math.random() * 9999) | 0) + (i | 0) * 13; }
function phrase(c, seed, busy) {
  let a = (seed * 2654435761) >>> 0; const r = () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const pool = []; for (const f of c) pool.push(f * 2, f * 4); pool.sort((x, y) => x - y);
  const mk = (busy ? ['x.xxx.xx', 'xx.xx.x.', 'x.x.xxxx', 'xxx.x.x.', 'x.xx.xx.'] : ['x...x.x.', 'x.x...x.', 'x..x..x.', '..x.x.x.', 'x.x.x...', 'x.....xx'])[(r() * (busy ? 5 : 6)) | 0];
  let i = (r() * pool.length) | 0; const out = []; for (let k = 0; k < 8; k++) { if (mk[k] === 'x') { i = Math.max(0, Math.min(pool.length - 1, i + ((r() * 5) | 0) - 2)); out.push(pool[i]); } else out.push(0); } return out;
}
function song(m) { const s = SONGS[m]; if (!s.p) { s.p = 1; for (const k of ['A', 'B']) { const x = s[k], nt = b => b.split(' ').map(v => v === '-' ? 0 : nf(v)); x.ch = x.ch.map(c => c.split(' ').map(nf)); x.bass = x.bass.split(' ').map(nf); x.mel = x.mel ? x.mel.map(nt) : null; x.cm = (x.cm || x.ch.map(() => '- - - - - - - -')).map(nt); } } return s; }
function musTick() {
  if (!AC || !S.set.mus || !TRK || !SONGS[musMode] || AC.state !== 'running') return;
  if (musT < AC.currentTime - .25) musT = AC.currentTime + .05;
  const o = TRK, lead = DLY || o;
  while (musT < AC.currentTime + .32) {
    const barAll = musStep >> 4, cyc = barAll >> 5, sec = barAll >> 3, pl = POOL[musMode], sn = pl ? pl[(cyc + (musSeed % pl.length)) % pl.length] : musMode, s = song(sn), sd = 15 / s.bpm;
    const at = Math.max(0, musT - AC.currentTime), st = musStep % 16, bar = barAll % 8, rep = (barAll >> 3) % 4, fk = s.form[rep % s.form.length], part = s[fk], full = barAll >= 8, lv = s.style ? musLv : (full ? .6 : 0);
    const isB = fk === 'B', al = ARRS[s.style], arr = al ? al[sec % al.length] : { m: 1 }, D = arr.d === undefined ? 1 : arr.d, K = Math.pow(2, ((s.style === 3 ? 0 : KEYC[cyc % 8]) + (s.style === 1 || s.style === 2 ? musKey : 0)) / 12);
    const c = part.ch[bar].map(f => f * K), b = part.bass[bar] * K;
    const pk = sn + '|' + sec + '|' + bar; if (pk !== MPK) { MPK = pk; MGEN = arr.m === 2 ? phrase(c, musSeed * 131 + sec * 17 + bar * 7 + 1, D === 3) : null; MTHM = part.mel ? null : phrase(c, sn.length * 977 + bar * 31 + (isB ? 500 : 0) + 5, false); }
    let m = 0; if (!(st % 2) && arr.m) { m = arr.m === 2 ? (MGEN ? MGEN[st >> 1] : 0) : (part.mel ? part.mel[bar][st >> 1] * K : (MTHM ? MTHM[st >> 1] : 0)); if (arr.m === 3 && m && m < 900) m *= 2; }
    const m2 = st % 2 || !arr.cm ? 0 : part.cm[bar][st >> 1] * K;
    if (arr.arp && st % 2 === 0 && s.style !== 3) bell(c[(st >> 1) % c.length] * 4, sd * 2.2, .018, at, lead);
    if (st === 0) CUR = c;
    if (s.style === 3) {
      if (st === 0) { pad(c, sd * 16.5, .034, at, o); tone(b, sd * 14, 'sine', .11, 0, at, o); tone(b * 2, sd * 12, 'triangle', .03, 0, at, o); }
      if (st % 2 === 0) bell(c[[0, 1, 2, 3, 2, 1, 3, 2][st >> 1] % c.length] * 2, sd * 5, .026, at, lead);
      if (st % 4 === 2) bell(c[(bar + (st >> 2)) % c.length] * 4, sd * 3, .01, at, lead);
      if (m) { bell(m, sd * 7, .05, at, lead); bell(m * 2, sd * 5, .012, at, o); }
      if (st === 0 || st === 3) tone(55, .16, 'sine', st ? .09 : .13, 38, at, o);
      if (st === 8) noise(sd * 6, .012, 5000, 9000, 1, at, 'highpass', o);
    } else if (s.style === 0) {
      if (st === 0) pad(c, sd * 16.5, .024, at, o);
      if (st === 0 || st === 6 || st === 8 || st === 14 || (isB && st === 11)) { tone(b, sd * 3, 'triangle', .1, 0, at, o); tone(b, sd * 3, 'sine', .08, 0, at, o); }
      if (st % 2 === 0 || (full && st % 4 === 3)) pluck(c[[0, 2, 1, 2, 3 % c.length, 2, 1, c.length - 1][(st >> 1) % 8]] * 2, sd * 2.4, .019, at, o, 'triangle');
      if (m) { bell(m, sd * 5, .055, at, lead); if (isB) pluck(m / 2, sd * 3, .02, at, o, 'triangle'); }
      if (m2 && full) bell(m2, sd * 4, .026, at, lead);
      if (D) { if (st === 0 || st === 8 || (full && st === 10) || (isB && st === 3)) kick(at, .15, o);
      if (st === 4 || st === 12) snare(at, .035, o); } if (isB && bar === 7 && st >= 12) snare(at, .02 + (st - 12) * .01, o);
      if (D) { if (st % 2 === 0) hat(at, st % 4 === 2 ? .022 : .012, o); else if (full) hat(at, .007, o, .025); }
    } else {
      const boss = s.style === 2;
      if (st === 0) { pad(c, sd * 16.5, boss ? .03 : .02, at, o); if (boss || lv > .5) c.forEach(f => tone(f, sd * 3, 'sawtooth', .02, 0, at, o)); }
      if (boss || st % 2 === 0 || (lv > .4 && st % 4 === 3)) pluck(b * (st % 4 === 2 ? 4 : st % 8 === 7 ? 3 : 2), sd * (boss ? 1.3 : 2), boss ? .075 : .085, at, o);
      if (st % 8 === 0) tone(b * 2, sd * 4, 'sine', .1, 0, at, o);
      if (m) { if (arr.m === 2 && sec % 2) bell(m, sd * 4, .05, at, lead); else pluck(m, sd * 3.2, .048, at, lead, ['square', 'sawtooth', 'triangle'][cyc % 3]); if (lv > .3 || boss) pluck(m * (boss ? 1.5 : 2), sd * 2.6, .017, at, o); }
      if (m2 && (lv > .2 || boss)) bell(m2, sd * 3, .03, at, lead);
      if (lv > .15 || full) pluck(c[st % 3] * 2, sd * 1.2, .012 + lv * .008, at, o, 'triangle');
      if (D === 2 ? st === 0 || st === 10 : D && (boss ? [0, 3, 6, 8, 11, 14].includes(st) : (st % 4 === 0 || ((lv > .6 || D === 3) && st === 14)))) kick(at, .2, o);
      if (D === 2 ? st === 8 : D && (st === 4 || st === 12)) snare(at, .075, o); if (D && (lv > .7 || D === 3) && st === 10) snare(at, .03, o);
      if (D) { if (st % 4 === 2) hat(at, .03, o, .06); else if (st % 2 || lv > .5 || D === 3) hat(at, .01, o, .025); }
      if (bar === 7 && st >= 12) snare(at, .03 + (st - 12) * .012, o); if (bar === 3 && st === 14 && lv > .3) { tone(b * 4, sd * 2, 'sawtooth', .04, b * 8, at, o); }
    }
    musT += sd; musStep++;
  }
}
function music(mode) {
  if (!audio()) return; const n = AC.currentTime;
  MUS.gain.cancelScheduledValues(n); MUS.gain.setTargetAtTime(S.set.mus ? MUSV * duckK : 0, n, .08);
  if (mode && mode !== musMode) {
    musMode = mode; if (TRK) { const o = TRK; o.gain.cancelScheduledValues(n); o.gain.setTargetAtTime(0, n, .1); setTimeout(() => { try { o.disconnect(); } catch (e) {} }, 1600); }
    TRK = AC.createGain(); TRK.gain.setValueAtTime(.0001, n); TRK.gain.linearRampToValueAtTime(1, n + .6); TRK.connect(MUS); musStep = 0; musT = n + .15;
  }
  clearInterval(musTimer); if (S.set.mus) musTimer = setInterval(musTick, 90);
}
/* baisse la musique un instant pour laisser passer un moment fort */
function duck(k, secs) { duckK = k; if (!AC || !MUS) return; MUS.gain.setTargetAtTime(S.set.mus ? MUSV * k : 0, AC.currentTime, .12); if (secs) setTimeout(() => duck(1), secs * 1000); }
