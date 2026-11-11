'use strict';
/* Effets de menus (étincelles au toucher, récompenses qui volent) et boosters de constellations. */
const fxl = () => $('#fxl');
function tapFx(x, y) {
  const l = fxl(); if (!l) return; const g = document.createElement('div'); g.className = 'tapfx'; g.style.left = x + 'px'; g.style.top = y + 'px';
  let h = '<i class="tr"></i>'; for (let i = 0; i < 7; i++) { const a = i / 7 * 6.283 + Math.random(), d = 70 + Math.random() * 60; h += `<i class="ts" style="--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d}px;background:${i % 2 ? '#ffd45e' : '#e9a8ff'}"></i>`; }
  g.innerHTML = h; l.appendChild(g); setTimeout(() => g.remove(), 650);
}
document.addEventListener('pointerdown', e => { if (SCREEN === 'game' && G && !$('#over.on') && !OB) return; const [x, y] = toStage(e.clientX, e.clientY); tapFx(x, y); }, true);
function stagePos(el) { const r = el.getBoundingClientRect(); return toStage(r.left + r.width / 2, r.top + r.height / 2); }
function flyReward(sym, n, target) {
  const l = fxl(), tg = target || document.querySelector('.cur .pill,.m2cur .pill'); if (!l || !tg) return; const [tx, ty] = stagePos(tg);
  for (let i = 0; i < Math.min(12, n); i++) {
    const el = document.createElement('div'); el.className = 'fly'; el.innerHTML = ic(sym); l.appendChild(el);
    const sx = W / 2 + (Math.random() - .5) * 260, sy = H / 2 + (Math.random() - .5) * 200, mx = sx + (Math.random() - .5) * 300, my = sy - 120 - Math.random() * 160;
    const an = el.animate([{ transform: `translate(${sx}px,${sy}px) scale(.2)`, opacity: 0 }, { transform: `translate(${mx}px,${my}px) scale(1.4)`, opacity: 1, offset: .35 }, { transform: `translate(${tx}px,${ty}px) scale(.5)`, opacity: .9 }], { duration: 750 + i * 70, easing: 'cubic-bezier(.5,0,.3,1)', delay: i * 45, fill: 'both' });
    an.onfinish = () => { el.remove(); snd('coin'); tg.classList.remove('bump'); void tg.offsetWidth; tg.classList.add('bump'); };
  }
}
function flyRw(r) { if (r.coins) flyReward('coin', Math.ceil(r.coins / 40), document.querySelectorAll('.cur .pill,.m2cur .pill')[1]); if (r.prisms) flyReward('prism', Math.ceil(r.prisms / 8), document.querySelectorAll('.cur .pill,.m2cur .pill')[0]); }

/* ---------- boosters de constellations : on ouvre le booster, une constellation apparaît, on choisit 4 étoiles ---------- */
const RAR = [{ n: 'COMMUNE', c: '#7fe0f0' }, { n: 'RARE', c: '#5aa8ff' }, { n: 'ÉPIQUE', c: '#d58bff' }, { n: 'LÉGENDAIRE', c: '#ffd45e' }];
const CONST = [
  { n: 'LE GARDIEN', p: [[-.8, -.55], [-.35, -.85], [.1, -.45], [.7, -.75], [.45, .05], [-.1, .3], [-.65, .7], [.7, .75]], e: [[0, 1], [1, 2], [2, 3], [2, 4], [4, 5], [5, 6], [4, 7]] },
  { n: 'LA COURONNE', p: [[-.9, .35], [-.62, -.55], [-.3, .05], [0, -.9], [.3, .05], [.62, -.55], [.9, .35], [0, .75]], e: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0]] },
  { n: 'LE DRAGON', p: [[-.95, -.35], [-.58, -.8], [-.22, -.3], [.15, -.7], [.52, -.2], [.25, .35], [-.3, .6], [.85, .75]], e: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [5, 7]] },
  { n: "L'ÉCLIPSE", p: [[0, -.9], [.62, -.62], [.9, 0], [.62, .68], [0, .9], [-.62, .68], [-.9, 0], [-.62, -.62]], e: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0]] },
  { n: 'LE PHÉNIX', p: [[0, -.85], [-.45, -.35], [.45, -.35], [-.95, -.6], [.95, -.6], [0, .1], [-.35, .8], [.35, .8]], e: [[0, 1], [0, 2], [1, 3], [2, 4], [1, 5], [2, 5], [5, 6], [5, 7]] },
  { n: 'LA LYRE', p: [[-.5, -.85], [.5, -.85], [-.75, -.1], [.75, -.1], [-.4, .7], [.4, .7], [0, -.25], [0, .9]], e: [[0, 2], [1, 3], [2, 4], [3, 5], [4, 7], [5, 7], [0, 6], [1, 6], [6, 7]] }
];
const STI = {};
function stImg(k) { if (!STI[k]) { const i = new Image(); i.src = 'img/ui/' + k + '.webp'; STI[k] = i; } return STI[k]; }
function orbImg(k, cls) { return `<img class="orbimg ${cls || ''}" src="img/ui/${k === 'myst' ? 'bstar' : 'st_' + k}.webp" draggable="false">`; }
let OB = null; const PICKS = 4, PTAPS = 3;
/* une étoile = une carte de TOX de la même rareté (ou des pièces / prismes) ; une étoile légendaire peut cacher une tenue rare */
function starRw(rar) {
  let rw; const early = (S.bopen || 0) <= 3, card = n => { const id = randCard(rar, early ? S.hero : undefined); return { card: id, n, unl: addCard(id, n) }; };
  if (rar === 0) rw = Math.random() < .4 ? { coins: 40 + ((Math.random() * 5) | 0) * 10 } : card(Math.random() < .3 ? 2 : 1);
  else if (rar === 1) rw = Math.random() < .25 ? { prisms: 10 } : card(1);
  else if (rar === 2) rw = Math.random() < .2 ? { prisms: 30 } : card(1);
  else { const lk = S.owned.filter(h => !S.skins.includes(h)); if (lk.length && Math.random() < .3) { const h = lk[(Math.random() * lk.length) | 0]; S.skins.push(h); S.skin[h] = 1; rw = { skin: h }; } else { rw = card(1); rw.prisms = 50; } }
  if (rw.coins) S.coins += rw.coins; if (rw.prisms) S.prisms += rw.prisms; save();
  return rw;
}
function rwTxt(rw) {
  if (rw.skin) return `<span class="hp">${himg(rw.skin, 1)}</span> Tenue : ${SKINS[rw.skin].n}`;
  if (rw.card) return tic(rw.card) + ' ' + TOX[rw.card].n + (rw.unl ? ' <b class="unl">DÉBLOQUÉ !</b>' : ' ×' + rw.n) + (rw.prisms ? ' · ' + ic('prism') + ' +' + rw.prisms : '');
  return rw.prisms ? ic('prism') + ' +' + rw.prisms : ic('coin') + ' +' + rw.coins;
}
function openOrb() {
  if (OB) return; if ((S.orbs || 0) <= 0) { snd('err'); toast('Aucun booster : gagne une partie ou achètes-en à la Boutique'); return; }
  S.orbs--; S.bopen = (S.bopen || 0) + 1; save(); const el = $('#orb'), cst = CONST[(Math.random() * CONST.length) | 0], cx = W / 2, cy = Math.round(H * .42), sx = Math.min(700, W * .36);
  let rs = cst.p.map(() => { const r = Math.random(); return r < .5 ? 0 : r < .78 ? 1 : r < .93 ? 2 : 3; }); if (Math.max(...rs) < 2) rs[(Math.random() * rs.length) | 0] = 2;
  if (S.bopen <= 3) rs = [3, 2, 2, 1, 1, 1, 0, 0].sort(() => Math.random() - .5);   // les 3 premiers boosters contiennent toujours une étoile de chaque rareté
  OB = { ph: 'drop', t: 0, pt: 0, cst, cx, cy, picks: [], ps: [], rings: [], flash: 0, hits: 0, kick: 0, kv: 0, rw: { coins: 0, prisms: 0 }, best: 0,
    stars: cst.p.map((p, i) => ({ x: cx + p[0] * sx, y: cy + p[1] * 205, rar: rs[i], st: 0, k: 0, a: 0, ph: Math.random() * 6, d: i * .07 })),
    bg: Array.from({ length: 90 }, () => ({ x: Math.random(), y: Math.random(), s: .8 + Math.random() * 2.2, p: Math.random() * 6 })) };
  el.innerHTML = `<canvas id="ocv"></canvas><div class="ohint" id="ohint">TOUCHE L'ÉTOILE POUR OUVRIR LA CONSTELLATION</div><div id="clabs"></div><div id="ocard"></div>`; el.classList.add('on'); OB.ctx = $('#ocv').getContext('2d');
  ['bstar', 'st_m', 'st_0', 'st_1', 'st_2', 'st_3'].forEach(stImg); snd('orbIn'); duck(.35);
  el.onpointerdown = e => { if (!OB) return; const [x, y] = toStage(e.clientX, e.clientY); if (OB.ph === 'idle') packHit(x, y); else if (OB.ph === 'pick') starHit(x, y); };
}
function cSpark(o, x, y, n, col, sp) { for (let i = 0; i < n; i++) { const a = Math.random() * 6.283, s = sp * (.25 + Math.random()); o.ps.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - sp * .2, l: .5 + Math.random() * .7, m: 1.2, c: i % 3 ? col : '#ffffff', s: 3 + Math.random() * 6, g: 900, spark: i % 2 }); } }
function packHit(x, y) {
  const o = OB; o.hits++; o.kv = -10 - o.hits * 2; o.flash = Math.max(o.flash, .15 + o.hits * .06); vib(30 + o.hits * 20);
  cSpark(o, x, y, 30 + o.hits * 10, '#ffd45e', 700); o.rings.push({ x: o.cx, y: o.cy, r: 160, v: 800, l: .5, c: '#e9a8ff' }); snd('orbCrack' + o.hits);
  const h = $('#ohint'); if (h) h.textContent = o.hits === 1 ? 'ENCORE !' : 'ENCORE UNE FOIS !';
  if (o.hits >= PTAPS) {
    o.ph = 'open'; o.pt = 0; o.flash = .9; vib(200); snd('orbBoom'); snd('orbShatter'); cSpark(o, o.cx, o.cy, lite() ? 70 : 170, '#e9a8ff', 1500);
    for (let i = 0; i < 4; i++) o.rings.push({ x: o.cx, y: o.cy, r: 60, v: 700 + i * 450, l: 1, c: '#ffd45e' });
    if (h) h.remove(); o.stars.forEach((s, i) => setTimeout(() => { if (OB === o) snd('note', i); }, 260 + i * 70));
  }
}
function starHit(x, y) {
  const o = OB; let b = null, bd = 125; for (const s of o.stars) { if (s.st) continue; const d = Math.hypot(s.x - x, s.y - y); if (d < bd) { bd = d; b = s; } } if (!b) return;
  const n = o.picks.length, R = RAR[b.rar], rw = starRw(b.rar); b.st = 1; b.k = 1; b.rw = rw; b.lg = 0; o.picks.push(b); o.best = Math.max(o.best, b.rar);
  if (rw.coins) o.rw.coins += rw.coins; if (rw.prisms) o.rw.prisms += rw.prisms;
  o.flash = Math.max(o.flash, .14 + b.rar * .16); vib(40 + b.rar * 50); cSpark(o, b.x, b.y, (lite() ? 20 : 40) + b.rar * 30, R.c, 600 + b.rar * 300);
  for (let i = 0; i <= b.rar; i++) o.rings.push({ x: b.x, y: b.y, r: 50, v: 500 + i * 320, l: .7, c: R.c });
  snd('star', [b.rar, n]);
  const l = $('#clabs'); if (l) l.insertAdjacentHTML('beforeend', `<div class="clab" style="left:${b.x}px;top:${b.y + 82}px;--rc:${R.c}"><small>${R.n}</small><span>${rwTxt(rw)}</span></div>`);
  const p = $('#opips'); if (p && p.children[n]) p.children[n].className = 'on'; declutter();
  if (o.picks.length >= PICKS) { o.ph = 'end'; o.pt = 0; ['#ohint', '#opips'].forEach(s => { const e = $(s); if (e) e.remove(); }); }
}
/* écarte les étiquettes de récompense qui se recouvrent */
function declutter() {
  const l = $('#clabs'); if (!l) return; const els = [...l.children].map(e => ({ e, x: e.offsetLeft, y: e.offsetTop, w: e.offsetWidth, h: e.offsetHeight })).sort((a, b) => a.y - b.y);
  for (let pass = 0; pass < 4; pass++) for (let i = 0; i < els.length; i++) for (let j = i + 1; j < els.length; j++) { const a = els[i], b = els[j]; if (Math.abs(a.x - b.x) < (a.w + b.w) / 2 + 6 && b.y < a.y + a.h + 4 && b.y + b.h > a.y) { const dx = (a.w + b.w) / 2 + 8 - Math.abs(a.x - b.x), dy = a.y + a.h + 6 - b.y; if (dx < dy * 1.6) { const s = (b.x >= a.x ? 1 : -1) * dx / 2; a.x -= s; b.x += s; } else b.y += dy; } }
  for (const o of els) { o.x = Math.max(o.w / 2 + 10, Math.min(W - o.w / 2 - 10, o.x)); o.e.style.left = o.x + 'px'; o.e.style.top = Math.min(H - 190, o.y) + 'px'; }
}
function cstDone() {
  const o = OB; o.ph = 'done'; o.pt = 0; o.flash = .5; snd('rar' + o.best); const l = $('#clabs');
  for (const s of o.stars) if (!s.st) { s.st = 2; s.k = .6; if (l) l.insertAdjacentHTML('beforeend', `<div class="clab miss" style="left:${s.x}px;top:${s.y + 62}px;--rc:${RAR[s.rar].c}"><small>${RAR[s.rar].n}</small></div>`); }
  $('#ocard').innerHTML = `<div class="ctitle" style="--rc:${RAR[o.best].c}"><small>CONSTELLATION</small>${o.cst.n}</div>
    <div class="row obt"><button class="btn big" data-a="orbClose">CONTINUER</button>${S.orbs > 0 ? `<button class="btn vio" data-a="orbAgain">OUVRIR ENCORE (${S.orbs})</button>` : ''}</div>`;
  declutter();
}
function closeOrb(again) { const rw = OB && OB.rw; OB = null; duck(1); const el = $('#orb'); el.classList.remove('on'); el.innerHTML = ''; if (SCREEN !== 'game') { show(SCREEN); if (rw) flyRw(rw); } if (again) setTimeout(openOrb, 120); }
function cLine(c, A, B, k, col, w) { const x = A.cx + (B.cx - A.cx) * k, y = A.cy + (B.cy - A.cy) * k; c.beginPath(); c.moveTo(A.cx, A.cy); c.lineTo(x, y); c.strokeStyle = col; c.globalAlpha = .4; c.lineWidth = w * 3.6; c.stroke(); c.globalAlpha = 1; c.strokeStyle = '#fff'; c.lineWidth = w; c.stroke(); }
function orbTick(raw) {
  const o = OB, c = o.ctx, ok = lite() ? .5 : .7, cw = Math.round(W * ok), chh = Math.round(H * ok); if (c.canvas.width !== cw || c.canvas.height !== chh) { c.canvas.width = cw; c.canvas.height = chh; }
  c.setTransform(ok, 0, 0, ok, 0, 0); o.t += raw; o.pt += raw; const cx = o.cx, cy = o.cy;
  if (o.ph === 'drop' && o.pt > .7) { o.ph = 'idle'; o.pt = 0; }
  if (o.ph === 'open' && o.pt > 1.5) { o.ph = 'pick'; o.pt = 0; $('#orb').insertAdjacentHTML('beforeend', `<div class="ohint otop" id="ohint">CHOISIS ${PICKS} ÉTOILES</div><div class="opips otop" id="opips">${'<i></i>'.repeat(PICKS)}</div>`); }
  if (o.ph === 'end' && o.pt > .9) cstDone();
  const done = o.ph === 'done', col = done ? RAR[o.best].c : '#a66bff';
  o.kv += (-o.kick * 190 - o.kv * 11) * raw; o.kick += o.kv * raw;
  // ciel
  let g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#070318'); g.addColorStop(.6, '#150a36'); g.addColorStop(1, '#2a1260'); c.fillStyle = g; c.fillRect(0, 0, W, H);
  g = c.createRadialGradient(cx, cy, 40, cx, cy, 900); g.addColorStop(0, col + '55'); g.addColorStop(.5, col + '18'); g.addColorStop(1, 'rgba(6,2,18,0)'); c.fillStyle = g; c.fillRect(0, 0, W, H);
  c.fillStyle = '#fff'; for (const p of o.bg) { c.globalAlpha = .2 + .6 * Math.abs(Math.sin(o.t * 1.5 + p.p)); c.beginPath(); c.arc(p.x * W, p.y * H, p.s, 0, 7); c.fill(); } c.globalAlpha = 1;
  if (done || o.ph === 'idle') { c.save(); c.translate(cx, cy); c.rotate(o.t * (done ? .25 : .1)); c.fillStyle = col; c.globalAlpha = done ? .13 : .05 + o.hits * .03; for (let i = 0; i < 16; i++) { c.rotate(6.283 / 16); c.beginPath(); c.moveTo(0, 0); c.lineTo(-70, 1600); c.lineTo(70, 1600); c.fill(); } c.restore(); c.globalAlpha = 1; }
  // booster
  if (o.ph === 'drop' || o.ph === 'idle' || (o.ph === 'open' && o.pt < .25)) {
    const im = stImg('bstar'); if (im.complete && im.naturalWidth) {
      const k = o.ph === 'drop' ? Math.min(1, o.pt / .7) : 1, drop = (1 - k) * (1 - k) * 760, bounce = o.ph === 'drop' ? Math.sin(k * Math.PI) * 40 : 0, dmg = o.hits / PTAPS, jit = dmg * dmg * 12, sc = (1 + o.kick * .06) * (o.ph === 'open' ? 1 + o.pt * 3 : 1), h = 450 * sc, w = h * im.naturalWidth / im.naturalHeight;
      c.save(); c.translate(cx + (Math.random() - .5) * jit, cy - drop - bounce + Math.sin(o.t * 2.2) * 12 + (Math.random() - .5) * jit); c.rotate(Math.sin(o.t * 1.7) * .08 + o.kick * .05 + (o.ph === 'open' ? o.pt * 6 : 0));
      g = c.createRadialGradient(0, 0, 60, 0, 0, 380); g.addColorStop(0, '#e9a8ff' + (dmg > .5 ? 'aa' : '66')); g.addColorStop(1, '#e9a8ff00'); c.fillStyle = g; c.globalAlpha = .7 + Math.sin(o.t * 5) * .2; c.beginPath(); c.arc(0, 0, 380, 0, 7); c.fill();
      c.globalAlpha = o.ph === 'open' ? Math.max(0, 1 - o.pt * 4) : 1; c.drawImage(im, -w / 2, -h / 2, w, h); c.restore(); c.globalAlpha = 1;
    }
    if (o.ph === 'idle' && o.ps.length < 120 && Math.random() < raw * 22) { const a = Math.random() * 6.283; o.ps.push({ x: cx + Math.cos(a) * 240, y: cy + Math.sin(a) * 260, vx: Math.cos(a) * 40, vy: -90 - Math.random() * 90, l: 1.3, m: 1.3, c: Math.random() < .5 ? '#ffd45e' : '#e9a8ff', s: 3 + Math.random() * 4, g: 0 }); }
  }
  // constellation
  if (o.ph !== 'drop' && o.ph !== 'idle') {
    const ap = o.ph === 'open' ? o.pt : 9;
    for (const s of o.stars) { const k = Math.max(0, Math.min(1, (ap - .15 - s.d) / .75)), e = 1 - Math.pow(1 - k, 3); s.a = k; s.cx = cx + (s.x - cx) * e; s.cy = cy + (s.y - cy) * e - Math.sin(k * Math.PI) * 110; if (k > 0 && k < 1 && Math.random() < .6) o.ps.push({ x: s.cx, y: s.cy, vx: 0, vy: 0, l: .35, m: .35, c: '#e9a8ff', s: 6, g: 0 }); }
    c.lineCap = 'round'; const lg = done ? Math.min(1, o.pt / .9) : 0;
    for (const [a, b] of o.cst.e) { const A = o.stars[a], B = o.stars[b]; if (A.a < 1 || B.a < 1) continue; c.strokeStyle = '#cdb6ff'; c.globalAlpha = .2; c.lineWidth = 3; c.setLineDash([6, 14]); c.beginPath(); c.moveTo(A.cx, A.cy); c.lineTo(B.cx, B.cy); c.stroke(); c.setLineDash([]); c.globalAlpha = 1; if (lg > 0) cLine(c, A, B, lg, col, 3); }
    if (!done) for (let i = 1; i < o.picks.length; i++) { const B = o.picks[i]; B.lg = Math.min(1, B.lg + raw * 4); cLine(c, o.picks[i - 1], B, B.lg, '#ffd45e', 3.5); }
    for (const s of o.stars) {
      if (s.a <= 0) continue; s.k = Math.max(0, s.k - raw * 2.2); const rev = s.st > 0, im = stImg(rev ? 'st_' + s.rar : 'st_m'), rc = rev ? RAR[s.rar].c : '#b890ff', al = s.st === 2 ? .5 : 1;
      const sz = (s.st === 1 ? 180 : s.st === 2 ? 110 : 150) * (1 + Math.sin(o.t * 3 + s.ph) * .06) * (1 + s.k * .7) * Math.min(1, s.a * 1.3);
      g = c.createRadialGradient(s.cx, s.cy, 0, s.cx, s.cy, sz * .9); g.addColorStop(0, rc + 'bb'); g.addColorStop(1, rc + '00'); c.fillStyle = g; c.globalAlpha = al * (.55 + .3 * Math.sin(o.t * 4 + s.ph)); c.beginPath(); c.arc(s.cx, s.cy, sz * .9, 0, 7); c.fill();
      c.globalAlpha = al; if (im.complete && im.naturalWidth) { c.save(); c.translate(s.cx, s.cy); c.rotate(Math.sin(o.t * 1.3 + s.ph) * .12 + s.k * 1.5); c.drawImage(im, -sz / 2, -sz / 2, sz, sz); c.restore(); } else { c.fillStyle = rc; c.beginPath(); c.arc(s.cx, s.cy, sz * .25, 0, 7); c.fill(); }
      c.globalAlpha = 1; if (s.st === 1 && s.rar >= 2 && Math.random() < raw * 14) o.ps.push({ x: s.cx + (Math.random() - .5) * 90, y: s.cy + (Math.random() - .5) * 90, vx: 0, vy: -70, l: .8, m: .8, c: rc, s: 3 + Math.random() * 4, g: 0 });
    }
    if (done && o.ps.length < 200 && Math.random() < raw * 40) o.ps.push({ x: cx + (Math.random() - .5) * 1300, y: H + 10, vx: (Math.random() - .5) * 60, vy: -260 - Math.random() * 320, l: 2.4, m: 2.4, c: Math.random() < .6 ? col : '#ffffff', s: 4 + Math.random() * 7, g: 0 });
  }
  // particules, anneaux, éclair blanc
  for (const q of o.ps) {
    q.l -= raw; q.vy += (q.g || 0) * raw; q.vx *= 1 - raw * 1.3; q.vy *= 1 - raw * .5; q.x += q.vx * raw; q.y += q.vy * raw; c.globalAlpha = Math.max(0, Math.min(1, q.l / q.m * 2.2));
    if (q.spark) { c.strokeStyle = q.c; c.lineWidth = q.s * .7; c.lineCap = 'round'; c.beginPath(); c.moveTo(q.x, q.y); c.lineTo(q.x - q.vx * .035, q.y - q.vy * .035); c.stroke(); } else { c.fillStyle = q.c; c.beginPath(); c.arc(q.x, q.y, q.s * (.5 + q.l / q.m), 0, 7); c.fill(); }
  }
  o.ps = o.ps.filter(q => q.l > 0); c.globalAlpha = 1;
  for (const r of o.rings) { r.r += r.v * raw; r.l -= raw; c.globalAlpha = Math.max(0, r.l); c.strokeStyle = r.c; c.lineWidth = 20 * Math.max(0, r.l); c.beginPath(); c.arc(r.x, r.y, r.r, 0, 7); c.stroke(); } o.rings = o.rings.filter(r => r.l > 0); c.globalAlpha = 1;
  if (o.flash > 0) { o.flash -= raw * 1.8; c.fillStyle = 'rgba(255,255,255,' + Math.max(0, Math.min(1, o.flash)) + ')'; c.fillRect(0, 0, W, H); }
}

/* ---------- ciel animé de l'écran de chargement ---------- */
let SP = null;
function splashFx() { const cv = $('#scv'); if (!cv || lite()) { SP = null; return; } SP = { c: cv.getContext('2d'), t: 0, st: Array.from({ length: 110 }, () => ({ x: Math.random(), y: Math.random(), s: .6 + Math.random() * 2.4, p: Math.random() * 6 })), sh: [], em: [] }; }
function splashTick(raw) {
  const s = SP, c = s.c; if (!document.getElementById('scv')) { SP = null; return; } const cw = Math.round(W * .5), chh = Math.round(H * .5); if (c.canvas.width !== cw || c.canvas.height !== chh) { c.canvas.width = cw; c.canvas.height = chh; } c.setTransform(.5, 0, 0, .5, 0, 0); s.t += raw; c.clearRect(0, 0, W, H);
  c.globalCompositeOperation = 'lighter';
  for (let i = 0; i < 3; i++) { const col = ['rgba(255,106,223,', 'rgba(90,168,255,', 'rgba(176,107,255,'][i], y0 = 150 + i * 150; const g = c.createLinearGradient(0, y0 - 160, 0, y0 + 220); g.addColorStop(0, col + '0)'); g.addColorStop(.5, col + '.20)'); g.addColorStop(1, col + '0)'); c.fillStyle = g; c.beginPath(); c.moveTo(0, y0 + 220); for (let x = 0; x <= W; x += 40) c.lineTo(x, y0 - 110 + Math.sin(x * .004 + s.t * (.5 + i * .2) + i * 2) * 70 + Math.sin(x * .011 - s.t * .7) * 26); for (let x = W; x >= 0; x -= 40) c.lineTo(x, y0 + 130 + Math.sin(x * .005 - s.t * (.4 + i * .15) + i) * 60); c.closePath(); c.fill(); }
  for (const p of s.st) { c.globalAlpha = .35 + .65 * Math.abs(Math.sin(s.t * 1.6 + p.p)); c.fillStyle = '#fff'; c.beginPath(); c.arc(p.x * W, p.y * H * .8, p.s, 0, 7); c.fill(); }
  if (Math.random() < raw * .9) s.sh.push({ x: Math.random() * W, y: Math.random() * 300, l: .9 });
  for (const q of s.sh) { q.l -= raw; q.x += 900 * raw; q.y += 420 * raw; c.globalAlpha = Math.max(0, q.l); const g = c.createLinearGradient(q.x - 190, q.y - 90, q.x, q.y); g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(1, '#fff'); c.strokeStyle = g; c.lineWidth = 4; c.lineCap = 'round'; c.beginPath(); c.moveTo(q.x - 190, q.y - 90); c.lineTo(q.x, q.y); c.stroke(); } s.sh = s.sh.filter(q => q.l > 0);
  if (s.em.length < 70 && Math.random() < raw * 26) s.em.push({ x: Math.random() * W, y: H + 10, v: 60 + Math.random() * 140, s: 2 + Math.random() * 5, p: Math.random() * 6, c: Math.random() < .5 ? '#ffd45e' : '#e9a8ff' });
  for (const e of s.em) { e.y -= e.v * raw; e.x += Math.sin(s.t * 1.5 + e.p) * 40 * raw; c.globalAlpha = Math.min(1, e.y / 300) * (.5 + .5 * Math.sin(s.t * 4 + e.p)); c.fillStyle = e.c; c.beginPath(); c.arc(e.x, e.y, e.s, 0, 7); c.fill(); } s.em = s.em.filter(e => e.y > -10);
  c.globalAlpha = 1; c.globalCompositeOperation = 'source-over';
}
function fxTick(raw) { if (OB) orbTick(raw); if (SP) splashTick(raw); }
