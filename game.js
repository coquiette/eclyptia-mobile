'use strict';
let G = null, cv2 = null, cx = null, SC = 1, ROT = false;
const J = { x: 0, y: 0, id: null, bx: 0, by: 0 }, KEYS = {};
const hyp = Math.hypot;

let VW = 0, VH = 0;
function safeInsets() {
  let p = document.getElementById('safeprobe'); if (!p) { p = document.createElement('div'); p.id = 'safeprobe'; p.style.cssText = 'position:fixed;left:0;top:0;width:0;height:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)'; document.body.appendChild(p); }
  const c = getComputedStyle(p), f = k => parseFloat(c[k]) || 0; return { t: f('paddingTop'), r: f('paddingRight'), b: f('paddingBottom'), l: f('paddingLeft') };
}
let fitKey = '', fitRaf = 0;
function fitSoon() { if (fitRaf) return; fitRaf = requestAnimationFrame(() => { fitRaf = 0; fit(); }); }
function fit() {
  const de = document.documentElement; let w = window.innerWidth, h = window.innerHeight;
  const alone = navigator.standalone || (window.matchMedia && (matchMedia('(display-mode: standalone)').matches || matchMedia('(display-mode: fullscreen)').matches));
  // en mode « écran d'accueil », iOS annonce une fenêtre plus petite que l'écran : on prend la vraie taille de l'écran
  const ih = h, iw = w, full = alone && S.set.fill !== 0;
  if (full && screen.width && screen.height) { const a = Math.min(screen.width, screen.height), b = Math.max(screen.width, screen.height), port = h >= w; w = Math.max(w, port ? a : b); h = Math.max(h, port ? b : a); }
  const key = w + 'x' + h + (full ? 'f' : ''); if (key === fitKey) return; fitKey = key;   // rien n'a changé : on ne touche à rien (évite de réallouer les images en boucle)
  VW = w; VH = h; de.classList.toggle('alone', !!full); de.style.height = full ? h + 'px' : ''; document.body.style.height = full ? h + 'px' : ''; if (full) window.scrollTo(0, 0);
  ROT = h > w; const sw = ROT ? h : w, sh = ROT ? w : h, asp = sw / sh;
  if (asp >= 16 / 9) { H = 941; W = Math.ceil(941 * Math.min(asp, 2.7)); } else { W = 1672; H = Math.ceil(1672 / Math.max(asp, 1.25)); }
  SC = asp >= 1.25 && asp <= 2.7 ? Math.max(sw / W, sh / H) : Math.min(sw / W, sh / H);
  const st = $('#stage'), si = safeInsets(); st.style.width = W + 'px'; st.style.height = H + 'px'; st.style.left = w / 2 + 'px'; st.style.top = h / 2 + 'px';
  st.style.transform = 'translate(-50%,-50%) ' + (ROT ? 'rotate(90deg) ' : '') + 'scale(' + SC + ')';
  const gapT = full ? Math.max(0, ROT ? h - ih : 0) : 0, gapL = full ? Math.max(0, ROT ? 0 : w - iw) : 0;   // la barre d'état que iOS « oublie » de compter
  st.style.setProperty('--sl', Math.round(Math.max(ROT ? si.t : si.l, gapT, gapL) / SC) + 'px'); st.style.setProperty('--sr', Math.round((ROT ? si.b : si.r) / SC) + 'px');
  if (cv2 && (cv2.width !== W || cv2.height !== H)) { cv2.width = W; cv2.height = H; } if (window.R3) R3.resize();
}
function toStage(px, py) { let x = px - VW / 2, y = py - VH / 2; if (ROT) { const t = x; x = y; y = -t; } return [x / SC + W / 2, y / SC + H / 2]; }
function clampR(o, R) { const d = hyp(o.x, o.y); if (d > R) { o.x *= R / d; o.y *= R / d; } }

/* ---------- partie : 1 à 3 joueurs. En groupe, l'hôte calcule tout ; les invités envoient leur position et leurs touches. ---------- */
let NETROLE = 0;   // 0 solo, 1 hôte, 2 invité
const multi = () => G && G.n > 1;
function myInfo() {
  const h = S.hero, bon = {}; for (const b of BOOSTS) if (S.bon[b.id] && (S.boost[b.id] || 0) > 0) bon[b.id] = 1;
  return { hero: h, name: S.name, skin: skinOf(h), hs: S.hs[h] || { hp: 0, dmg: 0, spd: 0 }, tl: HEROES[h].tox.map(id => (S.tox[id] || {}).l || 0), bon };
}
function mkPlayer(info, i, n) {
  const h = HEROES[info.hero] || HEROES.kaelion, hs = info.hs || {}, bon = info.bon || {}, tl = info.tl || [1, 0, 0, 0], T3 = h.tox.map(id => TOX[id]);
  const maxhp = Math.round(h.hp * (1 + .08 * (hs.hp || 0)) * (bon.shield ? 1.25 : 1)), a = i / n * 6.283;
  return { i, hero: info.hero, h, name: info.name || 'Gardien', skin: info.skin || 0, tl, bon, x: n > 1 ? Math.cos(a) * 110 : 0, y: n > 1 ? Math.sin(a) * 110 : 0, r: 52, hp: maxhp, maxhp, fx: 0, fy: 1, inv: 1.4, sh: 0, fireT: 1.2, dash: 0, ddx: 0, ddy: 1, atk: 0, blink: 0,
    mv: 0, mvx: 0, mvy: 1, ix: 0, iy: 0, ult: bon.start ? 100 : 0, cd: { a: 0, b: 0, c: 0, d: 0 }, cdm: { a: tcd(T3[0], tl[0]), b: tcd(T3[1], tl[1]), c: tcd(T3[2], tl[2]), d: 2.2 },
    base: h.dmg * (1 + .06 * (hs.dmg || 0)), spd0: h.spd * (1 + .03 * (hs.spd || 0)), buff: null, dead: false, gone: false, revive: bon.revive ? 1 : 0, picked: true, remote: false,
    mods: { dmg: 1, rate: 1, spd: 1, multi: h.multi || 1, pierce: h.pierce || 0, magnet: bon.magnet ? 520 : 190, cdr: 1, leech: 0, crit: h.crit || .05 } };
}
function startRun(infos, me, role) {
  NETROLE = role || 0; infos = infos || [myInfo()]; me = me || 0; const n = infos.length;
  AR = 1300 + 260 * (n - 1);
  for (const b of BOOSTS) if (infos[me].bon && infos[me].bon[b.id] && S.boost[b.id] > 0) { S.boost[b.id]--; if (S.boost[b.id] <= 0) S.bon[b.id] = false; } save();
  G = { n, me, ps: infos.map((f, i) => mkPlayer(f, i, n)), get p() { return this.ps[this.me]; }, state: 'play', t: 0, wave: 0, en: [], sh: [], gems: [], fx: [], txt: [], queue: [], tasks: [], spawnT: 0, kills: 0, shards: 0, boss: 0, kc: {},
    inter: 0, all: false, shake: 0, flash: 0, slow: 0, banner: null, combo: 0, comboT: 0, frenzy: 0, pil: [], ts: 1, slowmo: 0, stop: 0, stopCd: 0, zoomP: 0, cine: null, ann: null, uid: 1, evq: [], ql: 0, pickT: 0, bon: infos[me].bon || {} };
  G.ps.forEach((p, i) => { p.remote = i !== me; });
  J.x = J.y = 0; J.id = null; R3.reset(AR);
  if (NETROLE !== 2) { nextWave(); G.spawnT = 2.2; } else G.banner = { t: 2.4, s: 'VAGUE 1', boss: 0 };
}
const alive = () => G.ps.filter(p => !p.dead && !p.gone);
function nearest(x, y) { let b = null, bd = 1e9; for (const p of G.ps) { if (p.dead || p.gone) continue; const d = hyp(p.x - x, p.y - y); if (d < bd) { bd = d; b = p; } } return b; }
function nextWave() {
  G.wave++; G.inter = 0; G.all = false;
  for (const p of G.ps) if (p.dead && !p.gone) { p.dead = false; p.hp = Math.round(p.maxhp * .4); p.inv = 2.5; addFx(p.x, p.y, 200, '#8cff7a', .6); addPil(p.x, p.y, 90, 900, '#8cff7a', .9); }
  const w = G.wave, boss = w % 5 === 0, pool = [], k = 1 + .7 * (G.n - 1);
  for (const id of MON_IDS) { const m = MON[id]; if (!m.boss && m.from <= w) for (let i = 0; i < m.w; i++) pool.push(id); }
  let n = Math.round((10 + 6 * w) * k); if (boss) n = Math.floor(n * .5);
  G.queue = []; for (let i = 0; i < n; i++) G.queue.push(pool[(Math.random() * pool.length) | 0]);
  if (boss) G.queue.push('ver');
  G.spawnT = 1.2; G.banner = { t: 2.4, s: boss ? 'BOSS !' : 'VAGUE ' + w, boss }; gsnd(boss ? 'boss' : 'wave'); music(boss ? 'boss' : 'game'); musLevel(w / LAST_WAVE);
}
function spawn(id) {
  const m = MON[id], w = G.wave, k = 1 + .3 * (G.n - 1); let a, x, y, n = 0, pn;
  do { a = rnd(0, 6.283); const r = AR - rnd(60, 220); x = Math.cos(a) * r; y = Math.sin(a) * r; pn = nearest(x, y); } while (pn && hyp(x - pn.x, y - pn.y) < 520 && ++n < 14);
  const el = !m.boss && w >= 3 && Math.random() < .06;
  const hp = (m.boss ? m.hp * (w / 5) * 1.5 * G.n : m.hp * (1 + .2 * (w - 1)) * k) * (el ? 4.5 : 1);
  const e = { uid: G.uid++, id, m, x, y, r: Math.round(m.r * 1.45 * (el ? 1.35 : 1)), hp, max: hp, spd: m.spd * rnd(.9, 1.1) * (el ? 1.1 : 1), dmg: m.dmg * (1 + .09 * (w - 1)) * (el ? 1.4 : 1), cd: rnd(1.2, 2.6), cc: 2.5, hit: 0, flash: 0, kx: 0, ky: 0, wind: 0, chg: 0, cvx: 0, cvy: 1, bob: rnd(0, 6), o: null, el, slowT: 0 };
  G.en.push(e);
  addFx(x, y, m.boss ? 320 : 120, el ? '#ffd45e' : '#b06bff', .55); addPil(x, y, m.boss ? 160 : 46, m.boss ? 900 : 420, el ? '#ffd45e' : '#b06bff', m.boss ? 1.4 : .6); gsnd('spawn');
  if (m.boss) { G.shake = .5; cine({ t: 2.8, f: e, zoom: 1.45, title: m.n.toUpperCase(), sub: 'BOSS · VAGUE ' + w, col: '#ff5a5a' }); gsnd('boss'); vib(120); }
}
function foeShot(e, a, sp, dmg) { G.sh.push({ foe: 1, x: e.x, y: e.y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, r: 18, dmg, life: 4.5, col: e.m.col }); }
/* effets : envoyés aussi aux invités */
function evp(a) { if (NETROLE === 1 && G.evq.length < 90) G.evq.push(a); }
function addFx(x, y, r, col, life = .35) { G.fx.push({ x, y, r, col, t: life, max: life }); evp(['f', x | 0, y | 0, r | 0, col, life]); }
function addPil(x, y, r, h, col, life = .6) { if (G.pil.length < 24) G.pil.push({ x, y, r, h, col, t: life, max: life }); evp(['p', x | 0, y | 0, r | 0, h | 0, col, life]); }
function addTxt(x, y, h, s, c, big) { if (G.txt.length < 50) G.txt.push({ x: x + rnd(-16, 16), y, h, s, c, t: .7, big }); evp(['t', x | 0, y | 0, h | 0, s, c, big ? 1 : 0]); }
function spark(x, y, col, n) { R3.spark(x, y, col, n); evp(['k', x | 0, y | 0, col, n]); }
function gsnd(n, a) { snd(n, a); evp(['s', n, a]); }
function announce(s, col) { G.ann = { s, col: col || '#ffd45e', t: 1.6 }; snd('ann'); evp(['a', s, col || '#ffd45e']); }
function cine(o) { if (multi()) { if (o.title) announce(o.title, o.col); if (o.end) o.end(); return; } o.age = 0; G.cine = o; }
function playEv(a) {
  const k = a[0];
  if (k === 'f') G.fx.push({ x: a[1], y: a[2], r: a[3], col: a[4], t: a[5], max: a[5] }); else if (k === 'p') { if (G.pil.length < 24) G.pil.push({ x: a[1], y: a[2], r: a[3], h: a[4], col: a[5], t: a[6], max: a[6] }); }
  else if (k === 't') { if (G.txt.length < 50) G.txt.push({ x: a[1], y: a[2], h: a[3], s: a[4], c: a[5], t: .7, big: a[6] }); } else if (k === 'k') R3.spark(a[1], a[2], a[3], a[4]);
  else if (k === 's') snd(a[1], a[2]); else if (k === 'a') { G.ann = { s: a[1], col: a[2], t: 1.6 }; snd('ann'); } else if (k === 'tp') { if (a[1] === G.me) { G.p.x = a[2]; G.p.y = a[3]; } }
  else if (k === 'sh') { G.shake = a[1]; if (a[2]) G.flash = a[2]; }
}

function hurt(p, d) {
  if (!p || p.dead || p.gone || p.inv > 0 || G.state !== 'play') return;
  p.hp -= d; p.inv = .5; p.blink = .5; G.combo = 0; spark(p.x, p.y, '#ff5a5a', 8); gsnd('hurt');
  if (p === G.p) { G.shake = .28; G.hurtT = .35; if (!multi()) G.stop = .07; vib(40); } else evp(['hu', p.i]);
  addTxt(p.x, p.y, 170, '-' + Math.round(d), '#ff6a6a', 1);
  if (p.hp <= 0) {
    if (p.revive) { p.revive = 0; p.hp = Math.round(p.maxhp * .5); p.inv = 3; p.sh = 3; addFx(p.x, p.y, 420, '#ffd45e', .7); addPil(p.x, p.y, 110, 1200, '#ffd45e', 1); announce('SECONDE CHANCE !', '#ffd45e'); gsnd('heal'); return; }
    p.hp = 0; p.dead = true; addFx(p.x, p.y, 260, '#ff5a5a', .6);
    if (!alive().length) { cine({ t: 1.8, f: p, zoom: 1.7, title: '', gray: 1 }); endRun(false); } else announce(p.name + ' est à terre', '#ff6a6a');
  }
}
function dmgE(e, d, crit, by) {
  if (e.dead) return;
  e.hp -= d; e.flash = .1; e.by = by || e.by; addTxt(e.x, e.y, e.r * 2.2, Math.round(d) + (crit ? '!' : ''), crit ? '#ffd45e' : '#fff', crit);
  spark(e.x, e.y, crit ? '#ffd45e' : '#ffffff', crit ? 5 : 2); gsnd(crit ? 'crit' : 'hit');
  if (e.hp <= 0) kill(e);
}
function kill(e) {
  const by = e.by || G.p;
  e.dead = true; G.kills++; G.kc[e.id] = (G.kc[e.id] || 0) + 1; for (const p of G.ps) p.ult = Math.min(100, p.ult + (p === by ? 4 : 2)); G.combo++; G.comboT = 2.8;
  const n = e.m.boss ? 30 : e.el ? 9 : e.id === 'garde' ? 4 : e.id === 'mage' ? 2 : 1;
  for (let i = 0; i < n; i++) G.gems.push({ x: e.x + rnd(-e.r, e.r), y: e.y + rnd(-e.r, e.r) });
  if (by.mods.leech && !by.dead) by.hp = Math.min(by.maxhp, by.hp + by.mods.leech);
  addFx(e.x, e.y, e.r * 2, e.el ? '#ffd45e' : e.m.col); gsnd('kill', G.combo); if (!multi() && G.stopCd <= 0) { G.stop = .04; G.stopCd = .3; } G.zoomP = Math.max(G.zoomP, .03);
  if (e.el) { announce('ÉLITE VAINCUE !', '#ffd45e'); addPil(e.x, e.y, 70, 800, '#ffd45e', .8); }
  if ([10, 25, 50, 100, 200].includes(G.combo)) { announce('COMBO ×' + G.combo + ' !', G.combo >= 50 ? '#ff6adf' : '#ffd45e'); gsnd('combo', G.combo); }
  if (G.combo > 0 && G.combo % 30 === 0) { G.frenzy = 7; announce('FRÉNÉSIE !', '#ff6adf'); gsnd('ultc'); for (const p of alive()) addPil(p.x, p.y, 90, 700, '#ff6adf', .8); }
  if (e.m.boss) { G.boss++; G.shake = .7; G.flash = .4; evp(['sh', .7, .4]); vib(200); gsnd('boom'); addFx(e.x, e.y, 500, '#ffd45e', .7); addFx(e.x, e.y, 800, '#ffffff', .9); for (let i = 0; i < 6; i++) addPil(e.x + rnd(-200, 200), e.y + rnd(-200, 200), rnd(40, 110), 1100, i % 2 ? '#ffd45e' : '#ffffff', 1.2); if (!multi()) { G.ts = .18; G.slowmo = 1.3; G.zoomP = .4; } announce('BOSS VAINCU !', '#ffd45e'); for (const s of G.sh) if (s.foe) s.life = 0; }
}
function fire(p) {
  let best = null, bd = 700;
  for (const e of G.en) { const d = hyp(e.x - p.x, e.y - p.y); if (d < bd) { bd = d; best = e; } }
  if (!best) return false;
  const a0 = Math.atan2(best.y - p.y, best.x - p.x), n = p.mods.multi;
  for (let i = 0; i < n; i++) {
    const a = a0 + (i - (n - 1) / 2) * .17, crit = Math.random() < p.mods.crit;
    G.sh.push({ x: p.x + Math.cos(a) * 40, y: p.y + Math.sin(a) * 40, vx: Math.cos(a) * 960, vy: Math.sin(a) * 960, r: 15, dmg: p.base * p.mods.dmg * (crit ? 2 : 1), crit, pierce: p.mods.pierce, life: .9, col: p.h.col, by: p });
  }
  p.fx = Math.cos(a0); p.fy = Math.sin(a0); p.atk = .2; return true;
}
function aoe(p, x, y, rad, dmg, kb, fn) { for (const e of G.en.slice()) { const dd = hyp(e.x - x, e.y - y); if (dd < rad + e.r) { const u = dd || 1; if (kb) { e.kx = (e.x - x) / u * kb; e.ky = (e.y - y) / u * kb; } if (fn) fn(e); dmgE(e, dmg, false, p); } } }
/* les TOX : a, b, c = pouvoirs du gardien, u = ultime, d = esquive */
function skill(k, p) {
  if (!G || G.state !== 'play') return; p = p || G.p; if (p.dead) return;
  if (NETROLE === 2) { if (k === 'd') { if (p.cd.d > 0) return; p.cd.d = p.cdm.d; if (p.mv > .15) { p.ddx = p.mvx; p.ddy = p.mvy; } else { p.ddx = p.fx; p.ddy = p.fy; } p.dash = .16; snd('dash'); } NET.send({ t: 'k', k }); return; }
  const slot = { a: 0, b: 1, c: 2, u: 3 }[k], d = p.base * p.mods.dmg, col = p.h.col;
  if (k === 'd') {
    if (p.cd.d > 0) return; p.cd.d = p.cdm.d;
    if (p.mv > .15) { p.ddx = p.mvx; p.ddy = p.mvy; } else { p.ddx = p.fx; p.ddy = p.fy; }
    p.dash = .16; p.inv = Math.max(p.inv, .32); addFx(p.x, p.y, 90, '#ffffff', .25); gsnd('dash'); return;
  }
  const lv = p.tl[slot]; if (!lv) { if (p === G.p) { snd('err'); toast('TOX verrouillé : trouve sa carte dans un booster'); } return; }
  const T = TOX[p.h.tox[slot]], K = tk(lv);
  if (k === 'u') {
    if (p.ult < 100) return;
    p.ult = 0; gsnd('ultc'); if (p === G.p) vib(60);
    cine({ t: 1.0, f: p, zoom: 1.75, title: T.n.toUpperCase(), sub: p.h.n, col, end() {
      G.flash = .8; G.shake = .7; evp(['sh', .7, .8]); if (T.slow) G.slow = T.slow; else G.slow = 2; G.ecl = 1.6; G.zoomP = .25; vib(160); gsnd('ult');
      for (const s of G.sh) if (s.foe) s.life = 0;
      for (const e of G.en.slice()) { addPil(e.x, e.y, e.r * .9, 1000, col, .8); dmgE(e, d * (e.m.boss ? T.bk : T.dk) * K, true, p); }
      addFx(p.x, p.y, 1300, col, .8); addFx(p.x, p.y, 800, '#ffd45e', .6); addFx(p.x, p.y, 420, '#ffffff', .45); addPil(p.x, p.y, 120, 1400, '#ffd45e', 1);
    } }); return;
  }
  if (p.cd[k] > 0) return;
  p.cd[k] = p.cdm[k] * p.mods.cdr; p.atk = .2;
  if (T.t === 'salve') {
    const full = T.cone > 6, a0 = Math.atan2(p.fy, p.fx), sp = T.sp || 700;
    for (let i = 0; i < T.num; i++) { const a = full ? i * 6.283 / T.num : a0 + (i - (T.num - 1) / 2) * (T.cone / Math.max(1, T.num - 1)); G.sh.push({ x: p.x, y: p.y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, r: T.r || 19, dmg: d * T.dk * K, pierce: T.pierce + p.mods.pierce, life: full ? 1.1 : 1.3, col: T.col || col, by: p }); }
    addFx(p.x, p.y, 150, T.col || col, .3); addFx(p.x, p.y, 320, col, .35); G.zoomP = .06; gsnd('salve');
  } else if (T.t === 'onde') {
    aoe(p, p.x, p.y, T.rad, d * T.dk * K, T.kb);
    addFx(p.x, p.y, T.rad, col, .45); addFx(p.x, p.y, T.rad * .65, '#ffffff', .3); spark(p.x, p.y, col, 22); addFx(p.x, p.y, T.rad * 1.4, col, .6); G.shake = .3; G.zoomP = .1; gsnd('onde');
  } else if (T.t === 'heal') {
    const amt = Math.round(p.maxhp * T.pct * K); p.hp = Math.min(p.maxhp, p.hp + amt); p.inv = Math.max(p.inv, T.sh); p.sh = T.sh;
    if (multi()) for (const q of alive()) if (q !== p && hyp(q.x - p.x, q.y - p.y) < 420) { q.hp = Math.min(q.maxhp, q.hp + Math.round(amt * .5)); addTxt(q.x, q.y, 180, '+' + Math.round(amt * .5), '#8cff7a', 1); addPil(q.x, q.y, 70, 500, '#8cff7a', .6); }
    addFx(p.x, p.y, 150, '#8cff7a', .55); addPil(p.x, p.y, 80, 600, '#8cff7a', .7); spark(p.x, p.y, '#8cff7a', 16); addTxt(p.x, p.y, 180, '+' + amt, '#8cff7a', 1); gsnd('heal');
  } else if (T.t === 'rain') {
    const tg = G.en.filter(e => hyp(e.x - p.x, e.y - p.y) < 900);
    for (let i = 0; i < T.num; i++) { const e = tg.length ? tg[(Math.random() * tg.length) | 0] : null, x = e ? e.x + rnd(-40, 40) : p.x + rnd(-400, 400), y = e ? e.y + rnd(-40, 40) : p.y + rnd(-400, 400); G.tasks.push({ t: .15 + i * .12, x, y, rad: T.rad, dmg: d * T.dk * K, col, p }); addFx(x, y, T.rad, '#ff3a3a', .15 + i * .12); }
    gsnd('ultc');
  } else if (T.t === 'buff') {
    p.buff = { t: T.dur * (1 + .05 * (lv - 1)), rate: T.rate, spd: T.spd }; addFx(p.x, p.y, 220, col, .5); addPil(p.x, p.y, 80, 700, col, .8); spark(p.x, p.y, col, 20); announce('FRÉNÉSIE !', col); gsnd('pick');
  } else if (T.t === 'blink') {
    const ox = p.x, oy = p.y, dx = p.mv > .15 ? p.mvx : p.fx, dy = p.mv > .15 ? p.mvy : p.fy; p.x += dx * T.dist; p.y += dy * T.dist; clampR(p, AR - 60); p.inv = Math.max(p.inv, .5);
    if (p.remote) evp(['tp', p.i, p.x | 0, p.y | 0]);
    addFx(ox, oy, 120, col, .4); for (let i = 1; i < 5; i++) addFx(ox + (p.x - ox) * i / 5, oy + (p.y - oy) * i / 5, 60, col, .25 + i * .04);
    aoe(p, p.x, p.y, T.rad, d * T.dk * K, 300); addFx(p.x, p.y, T.rad, col, .45); addFx(p.x, p.y, T.rad * .6, '#ffffff', .3); spark(p.x, p.y, col, 20); G.shake = .25; gsnd('dash'); gsnd('onde');
  } else if (T.t === 'slow') {
    aoe(p, p.x, p.y, T.rad, d * T.dk * K, 0, e => { e.slowT = T.dur; });
    addFx(p.x, p.y, T.rad, col, .7); addFx(p.x, p.y, T.rad * .7, '#7ad8ff', .5); for (let i = 0; i < 6; i++) { const a = i * 1.047; addPil(p.x + Math.cos(a) * T.rad * .6, p.y + Math.sin(a) * T.rad * .6, 40, 380, col, .7); } G.shake = .4; gsnd('onde'); gsnd('boom');
  } else if (T.t === 'drain') {
    let n = 0; aoe(p, p.x, p.y, T.rad, d * T.dk * K, 0, e => { n++; addFx(e.x, e.y, 60, '#ff4d8d', .3); });
    const amt = Math.round(p.maxhp * Math.min(.4, T.heal * n) * K); if (amt) { p.hp = Math.min(p.maxhp, p.hp + amt); addTxt(p.x, p.y, 180, '+' + amt, '#8cff7a', 1); }
    addFx(p.x, p.y, T.rad, '#ff4d8d', .5); addPil(p.x, p.y, 80, 600, '#ff4d8d', .7); gsnd('heal'); gsnd('onde');
  }
}

function localInput(p, dt) {
  let ix = J.x, iy = J.y;
  if (KEYS.ArrowLeft || KEYS.q || KEYS.a) ix -= 1; if (KEYS.ArrowRight || KEYS.d) ix += 1;
  if (KEYS.ArrowUp || KEYS.z || KEYS.w) iy -= 1; if (KEYS.ArrowDown || KEYS.s) iy += 1;
  let im = hyp(ix, iy); if (im > 1) { ix /= im; iy /= im; im = 1; }
  const wx = (ix + iy) * .7071, wy = (iy - ix) * .7071;   // repère écran -> repère isométrique
  p.mv = im; if (im > .05) { p.mvx = wx / im; p.mvy = wy / im; }
  if (p.dash > 0) { p.dash -= dt; p.x += p.ddx * 1500 * dt; p.y += p.ddy * 1500 * dt; p.mv = 1; p.mvx = p.ddx; p.mvy = p.ddy; if (NETROLE !== 2 && Math.random() < .7) addFx(p.x, p.y, 46, p.h.col, .22); }
  else { const sp = p.spd0 * p.mods.spd * (p.buff ? p.buff.spd : 1) * (G.frenzy > 0 ? 1.15 : 1); p.x += wx * sp * dt; p.y += wy * sp * dt; }
  clampR(p, AR - 60);
}
function update(dt) {
  G.t += dt;
  if (NETROLE === 2) return updateGuest(dt);
  G.slow -= dt; G.comboT -= dt; if (G.comboT <= 0) G.combo = 0; G.stopCd -= dt; G.frenzy -= dt;
  for (const p of G.ps) {
    if (p.gone) continue;
    p.inv -= dt; p.sh -= dt; p.atk -= dt; p.blink = (p.blink || 0) - dt; if (p.buff) { p.buff.t -= dt; if (p.buff.t <= 0) p.buff = null; }
    for (const k in p.cd) if (p.cd[k] > 0) p.cd[k] -= dt;
    if (p.dead) { p.mv = 0; continue; }
    if (!p.remote) localInput(p, dt);
    p.ult = Math.min(100, p.ult + dt * 1.2);
    p.fireT -= dt; if (p.fireT <= 0) { if (fire(p)) { p.fireT = 1 / (p.h.rate * p.mods.rate * (p.buff ? p.buff.rate : 1) * (G.frenzy > 0 ? 1.4 : 1)); gsnd('shoot'); } else p.fireT = .1; }
  }
  const me = G.p; if (!me.dead && me.hp < me.maxhp * .3) { G.hb = (G.hb || 0) - dt; if (G.hb <= 0) { G.hb = .85; snd('heart'); } }
  if (G.queue.length && G.en.length < 30 + 14 * (G.n - 1)) { G.spawnT -= dt; if (G.spawnT <= 0) { spawn(G.queue.pop()); G.spawnT = Math.max(.16, (.75 - .05 * G.wave) / (1 + .6 * (G.n - 1))); } }
  for (let i = G.tasks.length - 1; i >= 0; i--) { const k = G.tasks[i]; k.t -= dt; if (k.t <= 0) { G.tasks.splice(i, 1); aoe(k.p, k.x, k.y, k.rad, k.dmg, 200); addFx(k.x, k.y, k.rad * 1.2, k.col, .4); addFx(k.x, k.y, k.rad * .7, '#ffe07a', .3); addPil(k.x, k.y, k.rad * .5, 900, k.col, .5); spark(k.x, k.y, k.col, 10); G.shake = Math.max(G.shake, .2); gsnd('boom'); } }
  const gs = G.slow > 0 ? .4 : 1;
  for (const e of G.en) {
    if (e.dead) continue;
    const p = nearest(e.x, e.y); if (!p) break;
    const slow = gs * (e.slowT > 0 ? .35 : 1); e.slowT -= dt;
    const dx = p.x - e.x, dy = p.y - e.y, d = hyp(dx, dy) || 1, ux = dx / d, uy = dy / d;
    e.hit -= dt; e.flash -= dt; e.cd -= dt * slow;
    if (e.el && Math.random() < dt * 2.5) addFx(e.x, e.y, e.r * 1.6, '#ffd45e', .35);
    let mv = e.spd * slow, mx = ux, my = uy;
    if (e.m.boss) {
      if (e.wind > 0) { e.wind -= dt; mv = 0; if (e.wind <= 0) { e.chg = .85; gsnd('dash'); } }
      else if (e.chg > 0) { e.chg -= dt; mx = e.cvx; my = e.cvy; mv = 640 * slow; if (Math.random() < .5) addFx(e.x, e.y, 130, '#e2b04a', .3); }
      else {
        e.cc -= dt * slow; if (e.cc <= 0) { e.cc = 3.4; e.wind = .7; e.cvx = ux; e.cvy = uy; }
        if (e.cd <= 0) { e.cd = 4; for (let i = 0; i < 16; i++) foeShot(e, i * Math.PI / 8 + G.t, 290, e.dmg * .6); addFx(e.x, e.y, 220, '#ff4d6d', .4); gsnd('boom'); }
      }
    } else if (e.m.ranged) {
      if (d < 270) { mx = -ux; my = -uy; } else if (d < 400) mv = 0;
      if (e.cd <= 0 && d < 660) { e.cd = e.m.ranged > 1 ? 3.2 : 2.3; const a = Math.atan2(dy, dx), n = e.m.ranged; for (let i = 0; i < n; i++) foeShot(e, a + (i - (n - 1) / 2) * .28, 340, e.dmg); }
    }
    e.x += (mx * mv + e.kx) * dt; e.y += (my * mv + e.ky) * dt; e.kx *= .88; e.ky *= .88; clampR(e, AR - 20);
    if (d < e.r + p.r - 10) {
      if (e.m.boom) { e.dead = true; G.kc[e.id] = (G.kc[e.id] || 0) + 1; G.kills++; addFx(e.x, e.y, 190, '#ff7a2e', .45); addFx(e.x, e.y, 120, '#ffe07a', .3); spark(e.x, e.y, '#ff7a2e', 18); G.shake = .35; gsnd('boom'); hurt(p, e.dmg); }
      else if (e.hit <= 0) { hurt(p, e.dmg); e.hit = .8; }
    }
  }
  for (const s of G.sh) {
    s.x += s.vx * dt * (s.foe ? gs : 1); s.y += s.vy * dt * (s.foe ? gs : 1); s.life -= dt;
    if (s.foe) { for (const p of G.ps) { if (p.dead || p.gone) continue; if (hyp(s.x - p.x, s.y - p.y) < p.r + s.r - 8) { hurt(p, s.dmg); s.life = 0; break; } } continue; }
    for (const e of G.en) {
      if (e.dead || (s.hs && s.hs.has(e))) continue;
      if (hyp(s.x - e.x, s.y - e.y) < e.r + s.r) {
        dmgE(e, s.dmg, s.crit, s.by); e.kx += s.vx * .1; e.ky += s.vy * .1;
        if (s.pierce > 0) { s.pierce--; (s.hs = s.hs || new Set()).add(e); } else { s.life = 0; break; }
      }
    }
  }
  G.sh = G.sh.filter(s => s.life > 0 && hyp(s.x, s.y) < AR + 120);
  for (const e of G.en) if (e.dead) R3.gone(e);
  G.en = G.en.filter(e => !e.dead);
  for (const g of G.gems) {
    const p = nearest(g.x, g.y); if (!p) break; const dx = p.x - g.x, dy = p.y - g.y, d = hyp(dx, dy) || 1;
    if (G.all || d < p.mods.magnet) { const sp = G.all ? 2200 : 900; g.x += dx / d * sp * dt; g.y += dy / d * sp * dt; }
    if (d < 66) { g.got = 1; G.shards += G.combo >= 25 ? 2 : 1; gsnd('gem'); }
  }
  G.gems = G.gems.filter(g => !g.got);
  tickFx(dt);
  if (G.state === 'play' && !G.queue.length && !G.en.length) {
    G.all = true; G.inter += dt;
    if (G.inter - dt <= 0 && G.wave < LAST_WAVE) { announce('VAGUE TERMINÉE', '#8cff7a'); if (!multi()) { G.ts = .35; G.slowmo = .5; } }
    if (G.inter > 1.3 && (!G.gems.length || G.inter > 4)) { if (G.wave >= LAST_WAVE) { cine({ t: 3, f: G.p, zoom: 1.6, orbit: .9, title: 'VICTOIRE', sub: (multi() ? 'Le groupe' : G.p.h.n) + ' a repoussé l\'Éclipse', col: '#ffd45e', fire: 1 }); endRun(true); } else startPick(); }
  }
}
/* choix d'une bénédiction entre deux vagues (chacun la sienne en groupe) */
function rollChoices() { const pool = UPG.map((_, i) => i), ch = []; while (ch.length < 3) ch.push(pool.splice((Math.random() * pool.length) | 0, 1)[0]); return ch; }
function startPick() {
  G.state = 'pick'; G.pickT = 14;
  for (const p of G.ps) { p.picked = p.gone; if (p.gone) continue; const ch = rollChoices(); p.ch = ch; if (p === G.p) openPick(ch); else NET.to(p.i, { t: 'pk', ch, w: G.wave }); }
}
function applyPick(p, i) { if (!p || p.picked || !p.ch) return; const u = UPG[p.ch[i]] || UPG[p.ch[0]]; u.f(p.mods, p); p.picked = true; if (G.ps.every(q => q.picked)) endPick(); }
function endPick() { for (const p of G.ps) if (!p.picked) applyPick(p, 0); if (G.state !== 'pick') return; over(''); G.state = 'play'; nextWave(); }

/* ----- invité : on affiche ce que l'hôte envoie, on ne prédit que son propre déplacement ----- */
function updateGuest(dt) {
  const me = G.p;
  for (const p of G.ps) {
    p.atk -= dt; p.blink = (p.blink || 0) - dt; p.sh -= dt; for (const k in p.cd) if (p.cd[k] > 0) p.cd[k] -= dt;
    if (p === me) { if (!p.dead) localInput(p, dt); else p.mv = 0; }
    else if (p.tx !== undefined) { const k = Math.min(1, dt * 14); p.x += (p.tx - p.x) * k; p.y += (p.ty - p.y) * k; }
  }
  for (const e of G.en) { if (e.tx !== undefined) { const k = Math.min(1, dt * 12); e.x += (e.tx - e.x) * k; e.y += (e.ty - e.y) * k; } e.flash -= dt; e.cd -= dt; }
  for (const s of G.sh) { s.x += s.vx * dt; s.y += s.vy * dt; }
  if (!me.dead && me.hp < me.maxhp * .3) { G.hb = (G.hb || 0) - dt; if (G.hb <= 0) { G.hb = .85; snd('heart'); } }
  tickFx(dt);
  G.sendT = (G.sendT || 0) - dt; if (G.sendT <= 0) { G.sendT = .05; NET.send({ t: 'i', x: Math.round(me.x), y: Math.round(me.y), m: +me.mv.toFixed(2), a: +me.mvx.toFixed(2), b: +me.mvy.toFixed(2) }); }
}
function snapshot() {
  const r = Math.round, evs = G.evq; G.evq = [];
  return { t: 's', st: G.state, w: G.wave, q: G.queue.length, sd: G.shards, k: G.kills, cb: G.combo, sl: G.slow > 0 ? 1 : 0, fz: G.frenzy > 0 ? 1 : 0, bn: G.banner ? [G.banner.s, G.banner.boss ? 1 : 0, +G.banner.t.toFixed(1)] : 0,
    ps: G.ps.map(p => [r(p.x), r(p.y), r(p.hp), p.maxhp, +p.fx.toFixed(2), +p.fy.toFixed(2), p.atk > 0 ? 1 : 0, p.blink > 0 ? 1 : 0, p.sh > 0 ? +p.sh.toFixed(1) : 0, r(p.ult), +Math.max(0, p.cd.a).toFixed(1), +Math.max(0, p.cd.b).toFixed(1), +Math.max(0, p.cd.c).toFixed(1), p.dead ? 1 : p.gone ? 2 : 0, +p.mv.toFixed(1), +p.mvx.toFixed(2), +p.mvy.toFixed(2), r(p.spd0 * p.mods.spd * (p.buff ? p.buff.spd : 1)), p.dash > 0 ? 1 : 0]),
    en: G.en.map(e => [e.uid, MON_IDS.indexOf(e.id), r(e.x), r(e.y), r(e.hp), r(e.max), e.r, e.flash > 0 ? 1 : 0, +Math.max(0, e.wind).toFixed(2), +Math.max(0, e.chg).toFixed(2), +e.cvx.toFixed(2), +e.cvy.toFixed(2), e.cd < .5 ? 1 : 0]),
    pr: G.sh.slice(0, 220).map(s => [r(s.x), r(s.y), r(s.vx), r(s.vy), s.r, s.foe ? 1 : 0, s.col]), gm: G.gems.slice(0, 140).map(g => [r(g.x), r(g.y)]), ev: evs };
}
const GEN = new Map();
function applySnap(d) {
  if (!G || NETROLE !== 2) return; const me = G.p;
  if (d.w !== G.wave && d.w > 1) musLevel(d.w / LAST_WAVE);
  G.wave = d.w; G.ql = d.q; G.shards = d.sd; G.kills = d.k; G.combo = d.cb; G.slow = d.sl ? 1 : 0; G.frenzy = d.fz ? 1 : 0;
  if (d.bn) { if (!G.banner || G.banner.s !== d.bn[0]) { music(d.bn[1] ? 'boss' : 'game'); } G.banner = { s: d.bn[0], boss: d.bn[1], t: d.bn[2] }; } else G.banner = null;
  if (G.state !== 'end' && (d.st === 'play' || d.st === 'pick') && !(G.state === 'pick' && d.st === 'pick')) { if (G.state === 'pick' && d.st === 'play') over(''); if (d.st === 'play') G.state = 'play'; }
  d.ps.forEach((a, i) => {
    const p = G.ps[i]; if (!p) return;
    if (p !== me) { p.tx = a[0]; p.ty = a[1]; if (hyp(p.x - a[0], p.y - a[1]) > 500) { p.x = a[0]; p.y = a[1]; } p.fx = a[4]; p.fy = a[5]; p.mv = a[14]; p.mvx = a[15]; p.mvy = a[16]; p.dash = a[18] ? .1 : 0; }
    else { if (hyp(p.x - a[0], p.y - a[1]) > 700) { p.x = a[0]; p.y = a[1]; } if (p.mv < .1) { p.fx = a[4]; p.fy = a[5]; } p.spd0 = a[17]; p.mods.spd = 1; p.buff = null; }
    p.hp = a[2]; p.maxhp = a[3]; if (a[6]) p.atk = .15; if (a[7] && p.blink <= 0) p.blink = .4; p.sh = a[8]; p.ult = a[9]; p.cd.a = a[10]; p.cd.b = a[11]; p.cd.c = a[12]; p.dead = a[13] === 1; p.gone = a[13] === 2;
  });
  const seen = new Set();
  for (const a of d.en) {
    let e = GEN.get(a[0]); seen.add(a[0]);
    if (!e) { const id = MON_IDS[a[1]]; e = { uid: a[0], id, m: MON[id], x: a[2], y: a[3], bob: rnd(0, 6), o: null, flash: 0, cd: 2 }; GEN.set(a[0], e); G.en.push(e); }
    e.tx = a[2]; e.ty = a[3]; e.hp = a[4]; e.max = a[5]; e.r = a[6]; if (a[7]) e.flash = .1; e.wind = a[8]; e.chg = a[9]; e.cvx = a[10]; e.cvy = a[11]; e.cd = a[12] ? .3 : 2;
  }
  for (const e of G.en) if (!seen.has(e.uid)) { e.dead = true; R3.gone(e); GEN.delete(e.uid); }
  G.en = G.en.filter(e => !e.dead);
  G.sh = d.pr.map(a => ({ x: a[0], y: a[1], vx: a[2], vy: a[3], r: a[4], foe: a[5], col: a[6], life: 1 }));
  G.gems = d.gm.map(a => ({ x: a[0], y: a[1] }));
  for (const a of d.ev) { if (a[0] === 'hu') { if (a[1] === G.me) { G.shake = .28; G.hurtT = .35; vib(40); } } else playEv(a); }
}

function tickFx(dt) {
  for (const f of G.fx) f.t -= dt; G.fx = G.fx.filter(f => f.t > 0);
  for (const f of G.pil) f.t -= dt; G.pil = G.pil.filter(f => f.t > 0);
  for (const t of G.txt) { t.t -= dt; t.h += 110 * dt; } G.txt = G.txt.filter(t => t.t > 0);
}
function grant(res) {
  dayCheck(); const b = G.bon || {}; res.orb = res.win ? 1 : 0;
  res.coins = (res.shards + res.wave * 20 + (res.win ? 200 : 0)) * (b.coins ? 2 : 1); res.prisms = res.win ? 40 : Math.floor(res.wave / 3) * 5; res.xp = (res.kills + res.wave * 40 + (res.win ? 200 : 0)) * (b.xp ? 2 : 1); res.passXp = (res.wave * 30 + (res.win ? 100 : 0)) * (b.xp ? 2 : 1);
  const l0 = level();
  S.coins += res.coins; S.prisms += res.prisms; S.xp += res.xp; S.passXp += res.passXp;
  S.stats.games++; if (res.win) S.stats.wins++; S.stats.maxWave = Math.max(S.stats.maxWave, res.wave); S.stats.kills += res.kills; S.stats.boss += res.boss || 0; S.stats.time += res.time;
  for (const k in res.kc) S.codex[k] = (S.codex[k] || 0) + res.kc[k];
  S.q.kills += res.kills; S.q.games++; S.q.wave = Math.max(S.q.wave, res.wave);
  if (res.win) S.orbs = (S.orbs || 0) + 1;
  res.lvlUp = level() > l0; save(); snd(res.win ? 'win' : 'lose'); duck(.15, res.win ? 3 : 2.2); setTimeout(() => { if (G && G.state === 'end') music('menu'); }, res.win ? 2800 : 1900);
  setTimeout(() => showEnd(res), res.win ? 3100 : 1900);
}
function endRun(win) {
  if (!G || G.state === 'end') return; G.state = 'end';
  const res = { win, wave: G.wave, kills: G.kills, shards: G.shards, time: G.t, boss: G.boss, kc: G.kc, n: G.n };
  if (NETROLE === 1) NET.cast({ t: 'end', res });
  grant(res);
}

/* ---------- rendu : scène 3D + calque 2D (textes, barres, annonces) ---------- */
function draw(dt, raw) {
  if (!G) return; R3.render(G, dt, raw === undefined ? dt : raw);
  if (!cx) return; const x = cx; x.clearRect(0, 0, W, H);
  for (const e of G.en) {
    if (e.hp >= e.max) continue; const [sx, sy] = R3.proj(e.x, e.y, e.r * 2.4 + (e.id === 'chauve' ? 60 : 0)), w = e.m.boss ? 240 : 86, hh = e.m.boss ? 18 : 10;
    x.fillStyle = '#150a2e'; x.fillRect(sx - w / 2 - 3, sy - 3, w + 6, hh + 6); x.fillStyle = e.m.boss ? '#ff5a5a' : '#ff9a2e'; x.fillRect(sx - w / 2, sy, w * Math.max(0, e.hp / e.max), hh);
  }
  x.textAlign = 'center'; x.lineJoin = 'round'; x.strokeStyle = '#150a2e';
  for (const t of G.txt) { const [sx, sy] = R3.proj(t.x, t.y, t.h), k = Math.min(1, (.7 - t.t) * 8); x.globalAlpha = Math.min(1, t.t * 3); x.font = '800 ' + Math.round((t.big ? 54 : 38) * (.6 + .4 * k)) + 'px "Baloo 2",sans-serif'; x.lineWidth = 7; x.strokeText(t.s, sx, sy); x.fillStyle = t.c; x.fillText(t.s, sx, sy); }
  x.globalAlpha = 1;
  drawTeam(x); if (G.frenzy > 0 && G.state === 'play') { const gg = x.createRadialGradient(W / 2, H / 2, H * .42, W / 2, H / 2, W * .62); gg.addColorStop(0, 'rgba(255,106,223,0)'); gg.addColorStop(1, 'rgba(255,106,223,' + (.16 + Math.sin(G.t * 9) * .06) + ')'); x.fillStyle = gg; x.fillRect(0, 0, W, H); }
  if (G.combo >= 5) { x.font = '800 54px "Baloo 2",sans-serif'; x.lineWidth = 8; x.textAlign = 'right'; const s = 'COMBO ×' + G.combo + (G.combo >= 25 ? '  éclats ×2' : ''); x.font = '800 44px "Baloo 2",sans-serif'; x.strokeText(s, W - 70, 138); x.fillStyle = G.frenzy > 0 ? '#ff6adf' : '#ffd45e'; x.fillText(s, W - 70, 138); x.textAlign = 'center'; }
  if (G.hurtT > 0) { const g = x.createRadialGradient(W / 2, H / 2, H * .35, W / 2, H / 2, W * .62); g.addColorStop(0, 'rgba(255,0,40,0)'); g.addColorStop(1, 'rgba(255,0,40,' + Math.min(.6, G.hurtT * 2) + ')'); x.fillStyle = g; x.fillRect(0, 0, W, H); }
  if (G.p.hp < G.p.maxhp * .3 && !G.p.dead && G.state === 'play') { const g = x.createRadialGradient(W / 2, H / 2, H * .4, W / 2, H / 2, W * .62); g.addColorStop(0, 'rgba(255,0,40,0)'); g.addColorStop(1, 'rgba(255,0,40,' + (.18 + Math.sin(G.t * 6) * .1) + ')'); x.fillStyle = g; x.fillRect(0, 0, W, H); }
  if (G.ecl > 0) { const k = Math.min(1, G.ecl), r = 150 + (1.6 - G.ecl) * 60; x.globalAlpha = k * .55; x.fillStyle = '#0d061d'; x.fillRect(0, 0, W, H); x.globalAlpha = k; x.fillStyle = '#ffd45e'; x.beginPath(); x.arc(W / 2, 300, r + 14, 0, 7); x.fill(); x.fillStyle = '#0d061d'; x.beginPath(); x.arc(W / 2 + 10, 296, r, 0, 7); x.fill(); x.globalAlpha = 1; }
  if (G.banner && !G.cine) {
    const b = G.banner, a = clamp(Math.min(b.t * 2, (2.4 - b.t) * 5), 0, 1), sc = 1 + Math.max(0, 2.2 - (2.4 - b.t) * 8) * .25;
    x.globalAlpha = a; x.save(); x.translate(W / 2, 250); x.scale(sc, sc);
    x.fillStyle = 'rgba(13,6,29,.6)'; x.fillRect(-W, -90, W * 2, 130); x.fillStyle = b.boss ? '#ff5a5a' : '#ffd45e'; x.fillRect(-W, -94, W * 2, 6); x.fillRect(-W, 38, W * 2, 6);
    x.font = '800 130px "Baloo 2",sans-serif'; x.lineWidth = 16; x.strokeStyle = b.boss ? '#4a0010' : '#5a2a00'; x.strokeText(b.s, 0, 20); x.fillStyle = b.boss ? '#ff6a6a' : '#ffd45e'; x.fillText(b.s, 0, 20); x.restore(); x.globalAlpha = 1; x.strokeStyle = '#150a2e';
  }
  if (G.ann) { const a = G.ann, k = 1.6 - a.t, sc = k < .15 ? 3 - k * 13.3 : 1, al = clamp(a.t * 3, 0, 1); x.globalAlpha = al; x.save(); x.translate(W / 2, G.banner && !G.cine ? 400 : 240); x.scale(sc, sc); x.rotate(-.04); x.font = '800 96px "Baloo 2",sans-serif'; x.lineWidth = 14; x.strokeStyle = '#1a0c36'; x.strokeText(a.s, 0, 0); x.fillStyle = a.col; x.fillText(a.s, 0, 0); x.restore(); x.globalAlpha = 1; x.strokeStyle = '#150a2e'; }
  if (G.cine) {
    const c = G.cine, k = clamp(Math.min(c.age * 5, c.t * 5), 0, 1), bh = 96 * k;
    if (c.gray) { x.fillStyle = 'rgba(20,10,40,' + (.5 * k) + ')'; x.fillRect(0, 0, W, H); }
    x.fillStyle = '#05020c'; x.fillRect(0, 0, W, bh); x.fillRect(0, H - bh, W, bh);
    if (c.title) { const sl = clamp(c.age * 4, 0, 1), ox = (1 - sl) * (1 - sl) * -700; x.textAlign = 'left'; x.globalAlpha = k;
      x.fillStyle = c.col; x.fillRect(110 + ox, H - 300, 14, 150); x.font = '800 120px "Baloo 2",sans-serif'; x.lineWidth = 16; x.strokeStyle = '#05020c'; x.strokeText(c.title, 150 + ox, H - 200); x.fillStyle = c.col; x.fillText(c.title, 150 + ox, H - 200);
      if (c.sub) { x.font = '800 44px "Baloo 2",sans-serif'; x.lineWidth = 9; x.strokeText(c.sub, 154 + ox, H - 148); x.fillStyle = '#fff'; x.fillText(c.sub, 154 + ox, H - 148); }
      x.textAlign = 'center'; x.globalAlpha = 1; x.strokeStyle = '#150a2e'; }
  }
  if (G.flash > 0) { x.fillStyle = 'rgba(233,168,255,' + Math.min(.8, G.flash) + ')'; x.fillRect(0, 0, W, H); }
  hudTick();
}
const HCA = {};
function hset(id, prop, v) { const k = id + prop; if (HCA[k] === v) return; HCA[k] = v; const el = document.getElementById(id); if (!el) return; if (prop === 'text') el.textContent = v; else if (prop === 'cls') el.className = v; else el.style[prop] = v; }
function drawTeam(x) {
  if (G.n < 2) return; x.textAlign = 'center'; x.lineJoin = 'round';
  for (const p of G.ps) { if (p === G.p || p.gone) continue; const [sx, sy] = R3.proj(p.x, p.y, 230); x.font = '800 30px "Baloo 2",sans-serif'; x.lineWidth = 7; x.strokeStyle = '#150a2e'; x.strokeText(p.name, sx, sy); x.fillStyle = p.dead ? '#ff6a6a' : p.h.col; x.fillText(p.name, sx, sy);
    x.fillStyle = '#150a2e'; x.fillRect(sx - 53, sy + 7, 106, 14); x.fillStyle = '#8cff7a'; x.fillRect(sx - 50, sy + 10, 100 * Math.max(0, p.hp / p.maxhp), 8); }
}
function hudTick() {
  const p = G.p;
  hset('hpf', 'width', Math.round(100 * p.hp / p.maxhp) + '%'); hset('hpt', 'text', Math.ceil(p.hp) + ' / ' + p.maxhp);
  hset('ulf', 'width', Math.round(p.ult) + '%'); hset('shd', 'text', '' + G.shards);
  hset('wv', 'text', 'VAGUE ' + G.wave + ' / ' + LAST_WAVE); hset('lf', 'text', (G.en.length + (NETROLE === 2 ? G.ql : G.queue.length)) + ' ennemis');
  for (const k of ['a', 'b', 'c', 'd']) { const c = Math.max(0, p.cd[k]); hset('cd' + k, 'height', Math.round(100 * Math.min(1, c / p.cdm[k])) + '%'); hset('ct' + k, 'text', c > 0 ? '' + Math.ceil(c) : ''); }
  hset('bu', 'cls', 'ab' + (p.tl[3] ? '' : ' lk') + (p.ult >= 100 && p.tl[3] ? ' rdy' : '')); hset('cdu', 'height', (100 - Math.round(p.ult)) + '%');
  if (G.n > 1) G.ps.forEach((q, i) => { if (q !== p) { hset('tm' + i, 'width', Math.round(100 * Math.max(0, q.hp) / q.maxhp) + '%'); hset('tb' + i, 'opacity', q.gone ? '.3' : q.dead ? '.55' : '1'); } });
}

/* ---------- entrées ---------- */
function bindGame() {
  for (const k in HCA) delete HCA[k];
  $('#g3').appendChild(R3.canvas); cv2 = $('#cv2'); if (cv2.width !== W || cv2.height !== H) { cv2.width = W; cv2.height = H; } cx = cv2.getContext('2d'); R3.resize();
  const z = $('#joyzone'), b = $('#joyb'), kn = $('#joyk');
  const reset = () => { J.id = null; J.x = J.y = 0; kn.style.transform = ''; b.style.left = ''; b.style.top = ''; b.classList.remove('on'); };
  z.addEventListener('pointerdown', e => { if (J.id !== null) return; J.id = e.pointerId; try { z.setPointerCapture(e.pointerId); } catch (_) {} const [sx, sy] = toStage(e.clientX, e.clientY); J.bx = sx; J.by = sy; b.style.left = (sx - z.offsetLeft) + 'px'; b.style.top = (sy - z.offsetTop) + 'px'; b.classList.add('on'); e.preventDefault(); });
  z.addEventListener('pointermove', e => { if (e.pointerId !== J.id) return; const [sx, sy] = toStage(e.clientX, e.clientY); let vx = (sx - J.bx) / 95, vy = (sy - J.by) / 95; const m = hyp(vx, vy); if (m > 1) { vx /= m; vy /= m; } J.x = vx; J.y = vy; kn.style.transform = 'translate(' + vx * 80 + 'px,' + vy * 80 + 'px)'; });
  const up = e => { if (e.pointerId === J.id) reset(); };
  z.addEventListener('pointerup', up); z.addEventListener('pointercancel', up); z.addEventListener('lostpointercapture', up);
  document.querySelectorAll('.ab').forEach(el => el.addEventListener('pointerdown', e => { e.preventDefault(); el.classList.remove('hit'); void el.offsetWidth; el.classList.add('hit'); skill(el.dataset.k); }));
}
addEventListener('keydown', e => { KEYS[e.key] = 1; if (G && G.state === 'play') { const m = { j: 'a', k: 'b', l: 'c', u: 'u', ' ': 'd', Shift: 'd' }[e.key]; if (m) skill(m); } });
addEventListener('keyup', e => { KEYS[e.key] = 0; });
addEventListener('scroll', () => { if (document.documentElement.classList.contains('alone') && (scrollX || scrollY)) scrollTo(0, 0); }, { passive: true });
addEventListener('resize', fitSoon); addEventListener('orientationchange', () => { setTimeout(fit, 300); setTimeout(fit, 800); }); addEventListener('pageshow', () => setTimeout(fit, 60));
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('gesturestart', e => e.preventDefault());
document.addEventListener('visibilitychange', () => { if (document.hidden && G && G.state === 'play' && !multi()) pauseGame(); });

let lastTs = 0; const FT = { s: 0, n: 0 };
function frame(ts) {
  const raw = Math.min(.05, (ts - lastTs) / 1000 || 0); lastTs = ts;
  if (G && SCREEN === 'game') {
    let dt = raw; G.zoomP = Math.max(0, G.zoomP - raw * 1.2); G.shake -= raw; G.flash -= raw; G.hurtT = (G.hurtT || 0) - raw; G.ecl = (G.ecl || 0) - raw; if (G.banner && !G.cine && G.state === 'play') { G.banner.t -= raw; if (G.banner.t <= 0) G.banner = null; } hset('hud', 'opacity', G.cine ? '0' : '1'); if (G.ann) { G.ann.t -= raw; if (G.ann.t <= 0) G.ann = null; }
    if (G.cine) {
      const c = G.cine; c.t -= raw; c.age += raw; dt = 0; tickFx(raw * .6);
      if (c.fire && Math.random() < raw * 9) { const a = rnd(0, 6.283), r = rnd(120, 520); R3.fire(G.p.x + Math.cos(a) * r, G.p.y + Math.sin(a) * r, ['#ffd45e', '#ff6adf', '#7ad8ff', '#8cff7a'][(Math.random() * 4) | 0]); snd('fw'); }
      if (c.t <= 0) { G.cine = null; if (c.end) c.end(); }
    } else if (G.stop > 0) { G.stop -= raw; dt = 0; }
    else { if (G.slowmo > 0) G.slowmo -= raw; else G.ts += (1 - G.ts) * Math.min(1, raw * 5); dt = raw * G.ts; }
    if (NETROLE === 2) { if (G.state !== 'end') update(raw); else tickFx(raw); }
    else if (G.state === 'play' && dt > 0) update(dt);
    else if (G.state === 'end' && !G.cine) tickFx(raw);
    if (NETROLE === 1 && G.state !== 'end') { if (G.state === 'pick') { G.pickT -= raw; tickFx(raw); if (G.pickT <= 0) endPick(); } G.snapT = (G.snapT || 0) - raw; if (G.snapT <= 0) { G.snapT = .066; NET.cast(snapshot()); } }
    draw(NETROLE === 2 ? raw : G.state === 'pause' || G.state === 'pick' ? 0 : (G.cine ? raw * .3 : G.stop > 0 ? 0 : dt || raw), raw);
  }
  // résolution dynamique : si le téléphone peine, on baisse la finesse du rendu plutôt que la fluidité
  if (G && SCREEN === 'game' && G.state === 'play' && !G.cine) { FT.s += raw; if (++FT.n >= 50) { const avg = FT.s / FT.n; FT.s = FT.n = 0; if (avg > .023 && (R3.q || 1) > .5) { R3.q = (R3.q || 1) - .15; R3.resize(); } } }
  if (typeof fxTick === 'function') fxTick(raw);
  requestAnimationFrame(frame);
}
