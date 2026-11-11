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
/* une étoile = une carte de TOX de la même rareté (ou des pièces / prismes) ; une étoile légendaire peut cacher une tenue rare */
/* une étoile = une carte de TOX de la même rareté (ou des pièces / prismes) ; une étoile légendaire peut cacher une tenue rare */
function starRw(rar) {
  let rw; const early = (S.bopen || 0) <= 3, card = n => { const id = randCard(rar, early ? S.hero : undefined, early); const unl = addCard(id, n); return { card: id, n, unl, up: LASTUP }; };
  if (rar === 0) rw = Math.random() < .25 ? { coins: 60 + ((Math.random() * 5) | 0) * 10 } : card(Math.random() < .3 ? 2 : 1);
  else if (rar === 1) rw = Math.random() < .15 ? { prisms: 15 } : card(1);
  else if (rar === 2) rw = Math.random() < .12 ? { prisms: 40 } : card(1);
  else { const lk = S.owned.filter(h => !S.skins.includes(h)); if (lk.length && Math.random() < .3) { const h = lk[(Math.random() * lk.length) | 0]; S.skins.push(h); S.skin[h] = 1; rw = { skin: h }; } else { rw = card(1); rw.prisms = 50; } }
  if (rw.coins) S.coins += rw.coins; if (rw.prisms) S.prisms += rw.prisms; save();
  return rw;
}
/* la carte affichée quand une étoile est révélée : image du TOX, ce qu'il fait, nombre de copies possédées */
function starCard(rw, rar) {
  const R = RAR[rar], rc = `style="--rc:${R.c}"`;
  if (rw.skin) { const h = rw.skin; return `<div class="ccard" ${rc}><div class="cr">TENUE RARE</div><div class="cimg hp">${himg(h, 1)}</div><div class="cn">${SKINS[h].n}</div><div class="ch">${HEROES[h].n}</div><div class="cd">Une nouvelle apparence pour ${HEROES[h].n}, déjà équipée. Tu peux la changer dans sa boutique.</div><div class="cunl">NOUVELLE TENUE !</div></div>`; }
  if (rw.card) {
    const T = TOX[rw.card], s = S.tox[rw.card], max = s.l >= TMAX, need = tneed(s.l);
    return `<div class="ccard" ${rc}><div class="cr">${T.r === 3 ? 'ULTIME · ' : ''}${R.n}</div><div class="cimg">${tic(rw.card)}${rw.n > 1 ? `<b>×${rw.n}</b>` : ''}</div><div class="cn">${T.n}</div><div class="ch">${T.h ? HEROES[T.h].n : 'Passif · tous les gardiens'} · Niveau ${s.l}</div><div class="cd">${T.d}</div>
      ${rw.unl ? '<div class="cunl">TOX DÉBLOQUÉ !</div>' : rw.up ? '<div class="cunl up">NIVEAU ' + s.l + ' !</div>' : ''}<div class="bar"><i style="width:${max ? 100 : Math.min(100, 100 * s.c / need)}%"></i><span>${max ? 'Niveau max' : 'Copies : ' + s.c + ' / ' + need}</span></div>${rw.prisms ? `<div class="cbonus">${ic('prism')} +${rw.prisms}</div>` : ''}</div>`;
  }
  return `<div class="ccard" ${rc}><div class="cr">${R.n}</div><div class="cimg">${ic(rw.prisms ? 'prism' : 'coin')}</div><div class="cn">+${rw.prisms || rw.coins} ${rw.prisms ? 'PRISMES' : 'PIÈCES'}</div><div class="cd">${rw.prisms ? 'La monnaie précieuse : boosts et boosters.' : 'Pour améliorer tes gardiens et leurs TOX.'}</div></div>`;
}
let OB = null, ORBMUS = ''; const PICKS = 4, PTAPS = 3;
function openOrb() {
  if (OB) return; if ((S.orbs || 0) <= 0) { snd('err'); toast('Aucun booster : gagne une partie ou achètes-en à la Boutique'); return; }
  S.orbs--; S.bopen = (S.bopen || 0) + 1; save(); const el = $('#orb'), cst = CONST[(Math.random() * CONST.length) | 0], cx = W / 2, cy = Math.round(H * .44), sp = Math.min(372, (W - 150) / 4);
  let rs = [0, 0, 0, 0].map(() => { const r = Math.random(); return r < .55 ? 0 : r < .83 ? 1 : r < .96 ? 2 : 3; }); if (Math.max(...rs) < 1) rs[(Math.random() * 4) | 0] = Math.random() < .25 ? 2 : 1;
  if (S.bopen === 1) rs = [0, 1, 2, 3]; else if (S.bopen <= 3) rs = [0, 1, 1, 2];   // les premiers boosters sont généreux pour débloquer les TOX du gardien
  rs.sort((a, b) => a - b);
  OB = { ph: 'drop', t: 0, pt: 0, cst, cx, cy, sp, n: 0, ps: [], rings: [], flash: 0, hits: 0, kick: 0, kv: 0, rw: { coins: 0, prisms: 0 }, best: 0, epic: null, dark: 0,
    stars: rs.map((r, i) => ({ i, x: cx + (i - 1.5) * sp, y: cy, rar: r, st: 0, k: 0, a: 0, ph: Math.random() * 6, d: i * .1 })),
    bg: Array.from({ length: 90 }, () => ({ x: Math.random(), y: Math.random(), s: .8 + Math.random() * 2.2, p: Math.random() * 6 })) };
  el.innerHTML = `<canvas id="ocv"></canvas><div class="ohint" id="ohint">TOUCHE L'ÉTOILE POUR OUVRIR LA CONSTELLATION</div><div id="clabs"></div><div id="ocard"></div>`; el.classList.add('on'); OB.ctx = $('#ocv').getContext('2d');
  ['bstar', 'st_m', 'st_0', 'st_1', 'st_2', 'st_3'].forEach(stImg); snd('orbIn'); if (musMode !== 'booster') ORBMUS = musMode; music('booster'); duck(1);
  el.onpointerdown = e => { if (!OB) return; const [x, y] = toStage(e.clientX, e.clientY); if (OB.epic) { if (OB.epic.t > 2) OB.epic.t = Math.max(OB.epic.t, OB.epic.end - .05); } else if (OB.ph === 'idle') packHit(x, y); else if (OB.ph === 'pick') starHit(x, y); };
}
function cSpark(o, x, y, n, col, sp) { for (let i = 0; i < n; i++) { const a = Math.random() * 6.283, s = sp * (.25 + Math.random()); o.ps.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - sp * .2, l: .5 + Math.random() * .7, m: 1.2, c: i % 3 ? col : '#ffffff', s: 3 + Math.random() * 6, g: 900, spark: i % 2 }); } }
function packHit(x, y) {
  const o = OB; o.hits++; o.kv = -10 - o.hits * 2; o.flash = Math.max(o.flash, .15 + o.hits * .06); vib(30 + o.hits * 20);
  cSpark(o, x, y, 30 + o.hits * 10, '#ffd45e', 700); o.rings.push({ x: o.cx, y: o.cy, r: 160, v: 800, l: .5, c: '#e9a8ff' }); snd('orbCrack' + o.hits);
  const h = $('#ohint'); if (h) h.textContent = o.hits === 1 ? 'ENCORE !' : 'ENCORE UNE FOIS !';
  if (o.hits >= PTAPS) {
    o.ph = 'open'; o.pt = 0; o.flash = .9; vib(200); snd('orbBoom'); snd('orbShatter'); cSpark(o, o.cx, o.cy, lite() ? 70 : 170, '#e9a8ff', 1500);
    for (let i = 0; i < 4; i++) o.rings.push({ x: o.cx, y: o.cy, r: 60, v: 700 + i * 450, l: 1, c: '#ffd45e' });
    if (h) h.remove(); o.stars.forEach((s, i) => setTimeout(() => { if (OB === o) snd('note', i * 2); }, 260 + i * 110));
  }
}
function starHit(x, y) {
  const o = OB; let b = null, bd = 190; for (const s of o.stars) { if (s.st) continue; const d = Math.hypot(s.x - x, s.y - y); if (d < bd) { bd = d; b = s; } } if (!b) return;
  const R = RAR[b.rar], rw = starRw(b.rar); b.st = 1; b.k = 1; b.rw = rw; o.n++; o.best = Math.max(o.best, b.rar);
  if (rw.coins) o.rw.coins += rw.coins; if (rw.prisms) o.rw.prisms += rw.prisms;
  const p = $('#opips'); if (p && p.children[o.n - 1]) p.children[o.n - 1].className = 'on';
  if (b.rar === 3) { o.epic = { t: 0, s: b, end: 4.6, boom: 0, fw: 0 }; snd('orbCharge'); duck(.1); vib(80); $('#orb').classList.add('epic'); return; }
  o.flash = Math.max(o.flash, .14 + b.rar * .16); vib(40 + b.rar * 50); cSpark(o, b.x, b.y, (lite() ? 20 : 40) + b.rar * 30, R.c, 600 + b.rar * 300);
  for (let i = 0; i <= b.rar; i++) o.rings.push({ x: b.x, y: b.y, r: 50, v: 500 + i * 320, l: .7, c: R.c });
  snd('star', [b.rar, o.n - 1]); if (rw.up) setTimeout(() => snd('lvl'), 350); placeCard(b);
}
function placeCard(b) {
  const o = OB, l = $('#clabs'); if (l) l.insertAdjacentHTML('beforeend', `<div class="cslot" style="left:${b.x}px;top:${o.cy + 44}px">${starCard(b.rw, b.rar)}</div>`);
  if (o.n >= PICKS && !o.epic) { o.ph = 'end'; o.pt = 0; ['#ohint', '#opips'].forEach(s => { const e = $(s); if (e) e.remove(); }); }
}
/* révélation spectaculaire d'une étoile légendaire (TOX ultime ou tenue rare) */
function epicBoom(o) {
  const e = o.epic, b = e.s, col = '#ffd45e'; e.boom = 1; o.flash = 1; vib(300); snd('orbBoom'); snd('rar3'); duck(.25);
  cSpark(o, o.cx, o.cy, lite() ? 120 : 260, col, 1900); for (let i = 0; i < 6; i++) o.rings.push({ x: o.cx, y: o.cy, r: 60, v: 600 + i * 420, l: 1.2, c: i % 2 ? '#ffffff' : col });
  $('#ocard').insertAdjacentHTML('beforeend', `<div class="cbig" id="cbig"><div class="cbt">${b.rw.skin ? 'TENUE RARE !' : 'LÉGENDAIRE !'}</div>${starCard(b.rw, 3)}</div>`);
}
function epicEnd(o) { const b = o.epic.s; o.epic = null; const c = $('#cbig'); if (c) c.remove(); $('#orb').classList.remove('epic'); duck(1); placeCard(b); o.flash = .3; }
function cstDone() {
  const o = OB; o.ph = 'done'; o.pt = 0; o.flash = .4; if (o.best < 3) snd('rar' + o.best); else snd('claim');
  $('#ocard').insertAdjacentHTML('beforeend', `<div class="ctitle" style="--rc:${RAR[o.best].c}"><small>CONSTELLATION</small>${o.cst.n}</div>
    <div class="row obt"><button class="btn big" data-a="orbClose">CONTINUER</button>${S.orbs > 0 ? `<button class="btn vio" data-a="orbAgain">OUVRIR ENCORE (${S.orbs})</button>` : ''}</div>`);
}
function closeOrb(again) { const rw = OB && OB.rw; OB = null; duck(1); if (!again) music(ORBMUS || 'menu'); const el = $('#orb'); el.classList.remove('on'); el.innerHTML = ''; if (SCREEN !== 'game') { show(SCREEN); if (rw) flyRw(rw); } if (again) setTimeout(openOrb, 120); }
function cLine(c, A, B, k, col, w) { const x = A.cx + (B.cx - A.cx) * k, y = A.cy + (B.cy - A.cy) * k; c.beginPath(); c.moveTo(A.cx, A.cy); c.lineTo(x, y); c.strokeStyle = col; c.globalAlpha = .4; c.lineWidth = w * 3.6; c.stroke(); c.globalAlpha = 1; c.strokeStyle = '#fff'; c.lineWidth = w; c.stroke(); }
function rays(c, x, y, t, col, al, n, w) { c.save(); c.translate(x, y); c.rotate(t); c.fillStyle = col; c.globalAlpha = al; for (let i = 0; i < n; i++) { c.rotate(6.283 / n); c.beginPath(); c.moveTo(0, 0); c.lineTo(-w, 1700); c.lineTo(w, 1700); c.fill(); } c.restore(); c.globalAlpha = 1; }
function orbTick(raw) {
  const o = OB, c = o.ctx, ok = lite() ? .5 : .7, cw = Math.round(W * ok), chh = Math.round(H * ok); if (c.canvas.width !== cw || c.canvas.height !== chh) { c.canvas.width = cw; c.canvas.height = chh; }
  c.setTransform(ok, 0, 0, ok, 0, 0); o.t += raw; o.pt += raw; const cx = o.cx, cy = o.cy, E = o.epic;
  if (o.ph === 'drop' && o.pt > .7) { o.ph = 'idle'; o.pt = 0; }
  if (o.ph === 'open' && o.pt > 1.5) { o.ph = 'pick'; o.pt = 0; $('#orb').insertAdjacentHTML('beforeend', `<div class="ohint otop" id="ohint">TOUCHE LES ${PICKS} ÉTOILES</div><div class="opips otop" id="opips">${'<i></i>'.repeat(PICKS)}</div>`); }
  if (o.ph === 'end' && o.pt > .7) cstDone();
  const done = o.ph === 'done', col = done ? RAR[o.best].c : '#a66bff';
  o.kv += (-o.kick * 190 - o.kv * 11) * raw; o.kick += o.kv * raw;
  // ciel
  let g = c.createLinearGradient(0, 0, 0, H); g.addColorStop(0, '#070318'); g.addColorStop(.6, '#150a36'); g.addColorStop(1, '#2a1260'); c.fillStyle = g; c.fillRect(0, 0, W, H);
  g = c.createRadialGradient(cx, cy, 40, cx, cy, 900); g.addColorStop(0, col + '55'); g.addColorStop(.5, col + '18'); g.addColorStop(1, 'rgba(6,2,18,0)'); c.fillStyle = g; c.fillRect(0, 0, W, H);
  c.fillStyle = '#fff'; for (const p of o.bg) { c.globalAlpha = .2 + .6 * Math.abs(Math.sin(o.t * 1.5 + p.p)); c.beginPath(); c.arc(p.x * W, p.y * H, p.s, 0, 7); c.fill(); } c.globalAlpha = 1;
  if (done || o.ph === 'idle') rays(c, cx, cy, o.t * (done ? .25 : .1), col, done ? .13 : .05 + o.hits * .03, 16, 70);
  // l'étoile du booster
  if (o.ph === 'drop' || o.ph === 'idle' || (o.ph === 'open' && o.pt < .25)) {
    const im = stImg('bstar'); if (im.complete && im.naturalWidth) {
      const k = o.ph === 'drop' ? Math.min(1, o.pt / .7) : 1, drop = (1 - k) * (1 - k) * 760, bounce = o.ph === 'drop' ? Math.sin(k * Math.PI) * 40 : 0, dmg = o.hits / PTAPS, jit = dmg * dmg * 12, sc = (1 + o.kick * .06) * (o.ph === 'open' ? 1 + o.pt * 3 : 1), h = 450 * sc, w = h * im.naturalWidth / im.naturalHeight;
      c.save(); c.translate(cx + (Math.random() - .5) * jit, cy - drop - bounce + Math.sin(o.t * 2.2) * 12 + (Math.random() - .5) * jit); c.rotate(Math.sin(o.t * 1.7) * .08 + o.kick * .05 + (o.ph === 'open' ? o.pt * 6 : 0));
      g = c.createRadialGradient(0, 0, 60, 0, 0, 380); g.addColorStop(0, '#e9a8ff' + (dmg > .5 ? 'aa' : '66')); g.addColorStop(1, '#e9a8ff00'); c.fillStyle = g; c.globalAlpha = .7 + Math.sin(o.t * 5) * .2; c.beginPath(); c.arc(0, 0, 380, 0, 7); c.fill();
      c.globalAlpha = o.ph === 'open' ? Math.max(0, 1 - o.pt * 4) : 1; c.drawImage(im, -w / 2, -h / 2, w, h); c.restore(); c.globalAlpha = 1;
    }
    if (o.ph === 'idle' && o.ps.length < 120 && Math.random() < raw * 22) { const a = Math.random() * 6.283; o.ps.push({ x: cx + Math.cos(a) * 240, y: cy + Math.sin(a) * 260, vx: Math.cos(a) * 40, vy: -90 - Math.random() * 90, l: 1.3, m: 1.3, c: Math.random() < .5 ? '#ffd45e' : '#e9a8ff', s: 3 + Math.random() * 4, g: 0 }); }
  }
  // les 4 étoiles
  if (o.ph !== 'drop' && o.ph !== 'idle') {
    const ap = o.ph === 'open' ? o.pt : 9;
    for (const s of o.stars) { const k = Math.max(0, Math.min(1, (ap - .15 - s.d) / .75)), e = 1 - Math.pow(1 - k, 3), ty = s.st ? cy - 252 : s.y; s.a = k; s.yy = (s.yy === undefined ? s.y : s.yy) + (ty - (s.yy === undefined ? s.y : s.yy)) * Math.min(1, raw * 9); s.cx = cx + (s.x - cx) * e; s.cy = cy + (s.yy - cy) * e - Math.sin(k * Math.PI) * 110; if (k > 0 && k < 1 && Math.random() < .6) o.ps.push({ x: s.cx, y: s.cy, vx: 0, vy: 0, l: .35, m: .35, c: '#e9a8ff', s: 6, g: 0 }); }
    c.lineCap = 'round';
    for (let i = 1; i < 4; i++) { const A = o.stars[i - 1], B = o.stars[i]; if (A.a < 1 || B.a < 1) continue; if (A.st && B.st && !E) { B.lg = Math.min(1, (B.lg || 0) + raw * 3); cLine(c, A, B, B.lg, done ? col : '#ffd45e', 3); } else { c.strokeStyle = '#cdb6ff'; c.globalAlpha = .22; c.lineWidth = 3; c.setLineDash([6, 14]); c.beginPath(); c.moveTo(A.cx, A.cy); c.lineTo(B.cx, B.cy); c.stroke(); c.setLineDash([]); c.globalAlpha = 1; } }
    for (const s of o.stars) {
      if (s.a <= 0 || (E && E.s === s)) continue; s.k = Math.max(0, s.k - raw * 2.2); const rev = s.st > 0, im = stImg(rev ? 'st_' + s.rar : 'st_m'), rc = rev ? RAR[s.rar].c : '#b890ff';
      const sz = (rev ? 132 : 230) * (1 + Math.sin(o.t * 3 + s.ph) * .06) * (1 + s.k * .7) * Math.min(1, s.a * 1.3);
      g = c.createRadialGradient(s.cx, s.cy, 0, s.cx, s.cy, sz * .9); g.addColorStop(0, rc + 'bb'); g.addColorStop(1, rc + '00'); c.fillStyle = g; c.globalAlpha = .55 + .3 * Math.sin(o.t * 4 + s.ph); c.beginPath(); c.arc(s.cx, s.cy, sz * .9, 0, 7); c.fill();
      c.globalAlpha = 1; if (im.complete && im.naturalWidth) { c.save(); c.translate(s.cx, s.cy); c.rotate(Math.sin(o.t * 1.3 + s.ph) * .12 + s.k * 1.5); c.drawImage(im, -sz / 2, -sz / 2, sz, sz); c.restore(); } else { c.fillStyle = rc; c.beginPath(); c.arc(s.cx, s.cy, sz * .25, 0, 7); c.fill(); }
      if (!rev && o.ph === 'pick' && !E) { c.strokeStyle = '#fff'; c.globalAlpha = .35 + .3 * Math.sin(o.t * 5 + s.ph); c.lineWidth = 4; c.beginPath(); c.arc(s.cx, s.cy, 140 + Math.sin(o.t * 4 + s.ph) * 8, 0, 7); c.stroke(); c.globalAlpha = 1; }
    }
    if (done && o.ps.length < 200 && Math.random() < raw * 40) o.ps.push({ x: cx + (Math.random() - .5) * 1500, y: H + 10, vx: (Math.random() - .5) * 60, vy: -260 - Math.random() * 320, l: 2.4, m: 2.4, c: Math.random() < .6 ? col : '#ffffff', s: 4 + Math.random() * 7, g: 0 });
  }
  // séquence légendaire : la scène s'assombrit, l'étoile monte au centre, se charge, explose, puis la carte apparaît en grand
  if (E) {
    E.t += raw; const s = E.s, gold = '#ffd45e', k = Math.min(1, E.t / 1.5), ek = k * k * (3 - 2 * k);
    o.dark = Math.min(.82, o.dark + raw * 2); c.fillStyle = 'rgba(4,1,12,' + o.dark + ')'; c.fillRect(0, 0, W, H);
    rays(c, cx, cy, o.t * (.5 + ek * 2), gold, .08 + ek * .22 + (E.boom ? .1 : 0), 20, 40 + ek * 50); rays(c, cx, cy, -o.t * .8, '#ffffff', .04 + ek * .08, 9, 18);
    if (!E.boom) {
      const sx = s.cx + (cx - s.cx) * ek, sy = s.cy + (cy - 20 - s.cy) * ek, jit = ek * ek * 16, sz = 230 * (1 + ek * 1.5) * (1 + Math.sin(E.t * 40) * .03 * ek), im = stImg('st_m');
      g = c.createRadialGradient(sx, sy, 0, sx, sy, sz * 1.2); g.addColorStop(0, '#fff6c8'); g.addColorStop(.35, gold + 'cc'); g.addColorStop(1, gold + '00'); c.fillStyle = g; c.globalAlpha = .5 + ek * .5; c.beginPath(); c.arc(sx, sy, sz * 1.2, 0, 7); c.fill(); c.globalAlpha = 1;
      if (im.complete && im.naturalWidth) { c.save(); c.translate(sx + (Math.random() - .5) * jit, sy + (Math.random() - .5) * jit); c.rotate(E.t * E.t * 3); c.drawImage(im, -sz / 2, -sz / 2, sz, sz); c.restore(); }
      if (o.ps.length < 260) for (let i = 0; i < 3; i++) { const a = Math.random() * 6.283, r = 700 + Math.random() * 300; o.ps.push({ x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r, vx: -Math.cos(a) * 1500, vy: -Math.sin(a) * 1500, l: .45, m: .45, c: i % 2 ? gold : '#ffffff', s: 4 + Math.random() * 5, g: 0, spark: 1, nd: 1 }); }
      if (Math.random() < raw * (4 + ek * 22)) { c.strokeStyle = '#fff'; c.lineWidth = 3; c.globalAlpha = .9; c.beginPath(); let a = Math.random() * 6.283, r = 40; c.moveTo(sx + Math.cos(a) * r, sy + Math.sin(a) * r); while (r < 520) { r += 40 + Math.random() * 60; a += (Math.random() - .5) * .7; c.lineTo(sx + Math.cos(a) * r, sy + Math.sin(a) * r); } c.stroke(); c.globalAlpha = 1; if (Math.random() < .5) snd('zap'); }
      if (E.t >= 1.5) epicBoom(o);
    } else {
      E.fw -= raw; if (E.fw <= 0 && E.t < E.end - .6) { E.fw = .22; const fx = cx + (Math.random() - .5) * W * .8, fy = 120 + Math.random() * (H * .5); cSpark(o, fx, fy, lite() ? 20 : 46, ['#ffd45e', '#ff6adf', '#7ad8ff', '#8cff7a', '#ffffff'][(Math.random() * 5) | 0], 700); o.rings.push({ x: fx, y: fy, r: 20, v: 500, l: .5, c: gold }); snd('fw'); }
      if (E.t >= E.end) epicEnd(o);
    }
  } else o.dark = Math.max(0, o.dark - raw * 3);
  // particules, anneaux, éclair blanc
  for (const q of o.ps) {
    q.l -= raw; q.vy += (q.g || 0) * raw; if (!q.nd) { q.vx *= 1 - raw * 1.3; q.vy *= 1 - raw * .5; } q.x += q.vx * raw; q.y += q.vy * raw; c.globalAlpha = Math.max(0, Math.min(1, q.l / q.m * 2.2));
    if (q.spark) { c.strokeStyle = q.c; c.lineWidth = q.s * .7; c.lineCap = 'round'; c.beginPath(); c.moveTo(q.x, q.y); c.lineTo(q.x - q.vx * .035, q.y - q.vy * .035); c.stroke(); } else { c.fillStyle = q.c; c.beginPath(); c.arc(q.x, q.y, q.s * (.5 + q.l / q.m), 0, 7); c.fill(); }
  }
  o.ps = o.ps.filter(q => q.l > 0); c.globalAlpha = 1;
  for (const r of o.rings) { r.r += r.v * raw; r.l -= raw; c.globalAlpha = Math.max(0, Math.min(1, r.l)); c.strokeStyle = r.c; c.lineWidth = 20 * Math.max(0, Math.min(1, r.l)); c.beginPath(); c.arc(r.x, r.y, r.r, 0, 7); c.stroke(); } o.rings = o.rings.filter(r => r.l > 0); c.globalAlpha = 1;
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
