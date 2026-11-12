'use strict';
/* ECLYPTIA Mobile — extensions : comptes et pseudo, nouvel affichage en jeu, bénédictions + mini-boutique de TOX,
   boss mythiques, combos de gardien. Chargé après ui.js : il remplace certaines fonctions du jeu. */

/* ================= comptes et pseudo ================= */
function accStore() { try { localStorage.setItem(ACCK, JSON.stringify(ACC)); } catch (e) {} }
function accSync() { const a = ACC.list.find(x => x.id === ACC.cur); if (!a) return; const lv = level(); if (a.name !== S.name || a.lv !== lv || a.hero !== S.hero) { a.name = S.name; a.lv = lv; a.hero = S.hero; accStore(); } }
{ const _save = save; save = function () { _save(); try { accSync(); } catch (e) {} }; }
function askName(first) {
  if ($('#askn')) return; const d = document.createElement('div'); d.id = 'askn';
  d.innerHTML = `<div class="pn col asknp"><img class="pnlogo" src="img/ui/logo.webp" draggable="false" alt=""><div class="gold" style="font-size:58px;line-height:1">${first ? 'BIENVENUE, GARDIEN !' : 'TON PSEUDO'}</div>
    <div class="sub" style="font-size:30px">Choisis ton pseudo. Tes amis le taperont pour rejoindre ton groupe.</div>
    <input id="askin" maxlength="14" value="${esc(S.name === 'Gardien' ? '' : S.name)}" placeholder="Ton pseudo" autocomplete="off" autocapitalize="words">
    <button class="btn big" data-a="nameOk">C'EST PARTI</button></div>`;
  $('#stage').appendChild(d);
}
ACT.nameOk = () => { const e = $('#askin'), v = ((e && e.value) || '').trim().replace(/\s+/g, ' ').slice(0, 14); if (pslug(v).length < 3) return toast('Au moins 3 lettres ou chiffres'); S.name = v; S.named = true; save(); const d = $('#askn'); if (d) d.remove(); snd('buy'); if (SCREEN !== 'game') show(SCREEN); };
ACT.accGo = v => { if (+v === ACC.cur) return; save(); ACC.cur = +v; accStore(); location.reload(); };
ACT.accNew = () => { if (ACC.list.length >= 5) return toast('5 comptes maximum'); save(); const id = Date.now() % 1000000000; ACC.list.push({ id }); ACC.cur = id; accStore(); location.reload(); };
SCR.accounts = () => head('COMPTES') + `<div class="body"><div class="pn col grow" style="gap:16px;padding:26px 30px"><div class="sub" style="font-size:28px">Chaque compte a sa propre progression. Passe de l'un à l'autre quand tu veux.</div>
  <div class="accg grow">${ACC.list.map(a => `<button class="acc ${a.id === ACC.cur ? 'on' : ''}" data-a="accGo" data-v="${a.id}"><img src="img/${(HEROES[a.hero] || HEROES.kaelion).img}.jpg" draggable="false" alt=""><b>${esc(a.name || 'Nouveau compte')}</b><span>Niveau ${a.lv || 1}</span><em>${a.id === ACC.cur ? 'COMPTE ACTUEL' : 'JOUER'}</em></button>`).join('')}
  ${ACC.list.length < 5 ? `<button class="acc new" data-a="accNew"><i>+</i><b>Nouveau compte</b><span>Repart de zéro avec un autre pseudo</span><em>CRÉER</em></button>` : ''}</div></div></div>`;
{ const _show = show; show = function (n, enter) { _show(n, enter); if (n === 'menu' && !S.named) setTimeout(() => { if (SCREEN === 'menu' && !S.named) askName(true); }, 700); }; }
/* amis : les pseudos des joueurs croisés en groupe sont gardés pour les rejoindre d'un toucher */
{ const _lob = lobbyUI; lobbyUI = function () { try { let ch = 0; for (let i = 0; i < NET.lobby.length; i++) { const f = NET.lobby[i]; if (!f || i === NET.me || !f.name || pslug(f.name).length < 3 || f.name === S.name) continue; if (!S.friends.includes(f.name)) { S.friends.unshift(f.name); S.friends = S.friends.slice(0, 8); ch = 1; } } if (ch) save(); } catch (e) {} _lob(); }; }
{ const _fr = SCR.friends; SCR.friends = () => { let h = _fr(); if (!NET.role && S.friends && S.friends.length) h += `<div class="frl"><span>Mes amis :</span>${S.friends.map(n => `<button class="btn sm vio" data-a="frJoin" data-v="${esc(n)}">${esc(n)}</button>`).join('')}</div>`; if (!NET.role) h += `<div class="frme">Ton pseudo de groupe : <b>${esc(S.name)}</b></div>`; return h; }; }
ACT.frJoin = v => NET.join(v);
{ const _start = ACT.start; ACT.start = () => { _start(); const m = /[?&]g=([A-Za-z0-9]{3,14})/.exec(location.search); if (m && m[1].length !== 5) setTimeout(() => { BUSY = false; nav('friends'); NET.join(m[1]); }, 1500); }; }
/* mise à jour : on recharge les fichiers en contournant le cache, puis on redémarre sur la nouvelle version */
ACT.update = async () => {
  try { sessionStorage.setItem('ecl_upd', NEWB); } catch (e) {} if (NET.role) NET.leave(true); toast('Mise à jour en cours…');
  const t = Date.now(), base = location.pathname;
  try { const r = await fetch(base + '?v=' + NEWB + '&t=' + t, { cache: 'reload' }), html = await r.text(), urls = [...html.matchAll(/(?:src|href)="([^"]+\.(?:js|css)\?v=[^"]+)"/g)].map(m => m[1]); await Promise.all(urls.map(u => fetch(u, { cache: 'reload' }).catch(() => {}))); } catch (e) {}
  try { if (window.caches) { const ks = await caches.keys(); await Promise.all(ks.map(k => caches.delete(k))); } } catch (e) {}
  location.replace(base + '?v=' + NEWB + '&t=' + t);
};

/* ================= bénédictions (pour tous les gardiens) ================= */
const BLESS = [
  { ic: 'swords', n: 'Dégâts +10 %', r: 0, f: m => m.dmg *= 1.1 }, { ic: 'bolt', n: 'Cadence +8 %', r: 0, f: m => m.rate *= 1.08 }, { ic: 'boot', n: 'Vitesse +6 %', r: 0, f: m => m.spd *= 1.06 },
  { ic: 'heart', n: 'PV max +20', r: 0, f: (m, p) => { p.maxhp += 20; p.hp += 20; } }, { ic: 'heart', n: 'Soin : 40 % des PV', r: 0, f: (m, p) => { p.hp = Math.min(p.maxhp, p.hp + p.maxhp * .4); } },
  { ic: 'target', n: 'Critique +6 %', r: 0, f: m => m.crit += .06 }, { ic: 'hourglass', n: 'Recharge −8 %', r: 0, f: m => m.cdr *= .92 }, { ic: 'magnet', n: 'Aimant à éclats', r: 0, f: m => m.magnet += 110 },
  { ic: 'star', n: 'Chance +20 %', d: 'Des TOX plus rares dans la mini-boutique', r: 1, f: (m, p) => { p.luck = (p.luck || 0) + .2; } }, { ic: 'leech', n: 'Vol de vie', r: 1, f: m => m.leech += 1 },
  { ic: 'pierce', n: 'Perforation +1', r: 1, f: m => m.pierce += 1 }, { ic: 'swords', n: 'Dégâts +22 %', r: 1, f: m => m.dmg *= 1.22 }, { ic: 'bolt', n: 'Cadence +18 %', r: 1, f: m => m.rate *= 1.18 },
  { ic: 'boot', n: 'Vitesse +14 %', r: 1, f: m => m.spd *= 1.14 }, { ic: 'multi', n: '+1 projectile', r: 2, f: m => m.multi += 1 }, { ic: 'heart', n: 'PV max +60 et soin complet', r: 2, f: (m, p) => { p.maxhp += 60; p.hp = p.maxhp; } },
  { ic: 'star', n: 'Ultime chargé', d: 'Barre pleine et recharge −10 %', r: 2, f: (m, p) => { p.ult = 100; m.cdr *= .9; } }, { ic: 'target', n: 'Critique +18 %', r: 2, f: m => m.crit += .18 }
];
const BRN = ['COMMUNE', 'RARE', 'ÉPIQUE'], BRC = ['#b9c2ff', '#5ad8ff', '#ffb03a'];
function rollBless(p) {
  const lk = (p && p.luck) || 0, w = [70, 24 + lk * 20, 6 + lk * 10], out = [];
  for (let g = 0; out.length < 4 && g < 200; g++) { let r = Math.random() * (w[0] + w[1] + w[2]), t = r < w[0] ? 0 : r < w[0] + w[1] ? 1 : 2; const pool = BLESS.map((b, i) => i).filter(i => BLESS[i].r === t && !out.includes(i)); if (pool.length) out.push(pool[(Math.random() * pool.length) | 0]); }
  return out;
}
/* mini-boutique : 4 TOX du gardien joué, de rareté tirée selon la chance (A = commune … ultime = légendaire) */
function rollTox(p) {
  const lk = (p && p.luck) || 0, list = HTOX[p.hero] || [], w = [58, 28 * (1 + lk), 11 * (1 + lk * 1.6), 3 * (1 + lk * 2.4)], tot = w[0] + w[1] + w[2] + w[3], out = [];
  for (let g = 0; out.length < 4 && g < 300; g++) { let r = Math.random() * tot, s = 0; while (s < 3 && r >= w[s]) { r -= w[s]; s++; } const pool = list.filter(id => TOX[id].s === s && !out.includes(id)); if (pool.length) out.push(pool[(Math.random() * pool.length) | 0]); }
  return out;
}
function setTox(p, id) {
  const T = TOX[id]; if (!T || T.s === undefined || !p) return; const s = T.s;
  if (p.tx[s] === id) p.tl[s] = Math.min(TMAX + 3, (p.tl[s] || 0) + 1); else { p.tx[s] = id; p.tl[s] = Math.max(1, p.tl[s] || 0); }
  const k = 'abc'[s]; if (k) p.cdm[k] = tcd(T, p.tl[s]);
}
function refreshBtns() { const p = G && G.p; if (!p) return; ['a', 'b', 'c', 'u'].forEach((k, i) => { const el = $('#b' + k); if (!el) return; const em = el.querySelector('em'); if (em) em.innerHTML = tic(p.tx[i]); if (p.tl[i]) { el.classList.remove('lk'); const l = el.querySelector('.lkc'); if (l) l.remove(); } }); for (const k in HCA) delete HCA[k]; }
startPick = function () {
  G.state = 'pick'; G.pickT = 28;
  for (const p of G.ps) { p.picked = p.gone; if (p.gone) continue; const ch = { b: rollBless(p), t: rollTox(p) }; p.ch = ch; if (p === G.p) openPick(ch); else NET.to(p.i, { t: 'pk', ch, w: G.wave }); }
};
applyPick = function (p, i, j) {
  if (!p || p.picked || !p.ch) return; const ch = p.ch;
  if (ch.b) { const b = BLESS[ch.b[i | 0]] || BLESS[ch.b[0]]; if (b) b.f(p.mods, p); const id = ch.t[j | 0] !== undefined ? ch.t[j | 0] : ch.t[0]; if (id) setTox(p, id); }
  p.picked = true; if (G.ps.every(q => q.picked)) endPick();
};
endPick = function () { for (const p of G.ps) if (!p.picked) applyPick(p, 0, 0); if (G.state !== 'pick') return; over(''); G.state = 'play'; refreshBtns(); nextWave(); };
openPick = function (ch) { G.state = 'pick'; G.choices = ch && ch.b ? ch : { b: rollBless(G.p), t: rollTox(G.p) }; G.pb = -1; snd('pick'); pickUI(); };
function pickUI() {
  const c = G.choices, p = G.p;
  if (G.pb < 0) return over(`<div class="pkt gold">VAGUE ${G.wave} TERMINÉE</div><div class="pks">Choisis 1 bénédiction parmi 4</div><div class="row pk4">${c.b.map((b, i) => { const B = BLESS[b]; return `<button class="pick p4" data-a="bless" data-v="${i}" style="--rc:${BRC[B.r]}"><i class="prar">${BRN[B.r]}</i><em>${ic(B.ic)}</em><b>${B.n}</b>${B.d ? `<small>${B.d}</small>` : ''}</button>`; }).join('')}</div>`);
  over(`<div class="pkt gold">MINI-BOUTIQUE DE TOX</div><div class="pks">Choisis 1 TOX de ${p.h.n} parmi 4${p.luck ? ' · chance +' + Math.round(p.luck * 100) + ' %' : ''}</div><div class="row pk4">${c.t.map((id, i) => { const T = TOX[id], same = p.tx[T.s] === id, lv = same ? (p.tl[T.s] || 0) + 1 : Math.max(1, p.tl[T.s] || 0); return `<button class="pick p4 ptx" data-a="toxp" data-v="${i}" style="--rc:${RARC[T.r]}"><i class="prar">${T.s === 3 ? 'ULTIME' : 'TOX ' + 'ABC'[T.s]} · ${RARN[T.r]}</i><em>${tic(id)}</em><b>${T.n}</b><small>${tfx(T, lv)}</small><u>${same ? 'NIVEAU ' + (lv - 1) + ' ▸ ' + lv : p.tl[T.s] ? 'REMPLACE ' + (TOX[p.tx[T.s]] || {}).n : 'DÉBLOQUE'}</u></button>`; }).join('')}</div>`);
}
ACT.bless = v => { G.pb = +v; snd('buy'); pickUI(); };
ACT.toxp = v => {
  snd('buy'); const j = +v, id = G.choices.t[j], wait = '<div class="gold" style="font-size:64px">En attente des autres joueurs…</div>';
  if (NETROLE === 2) { NET.send({ t: 'pc', i: G.pb, j }); setTox(G.p, id); refreshBtns(); over(wait); return; }
  G.p.ch = G.choices; G.p.picked = false; applyPick(G.p, G.pb, j); refreshBtns(); if (G.state === 'pick') over(wait);
};

/* ================= boss : plus présents, plus grands, mythiques à plusieurs phases ================= */
Object.assign(MON, {
  xalven: { n: 'Xalven, souverain de cristal', img: 'm7', hp: 2300, spd: 96, dmg: 28, r: 118, col: '#6af4ff', from: 99, w: 0, boss: 1, myth: 1, pat: ['nova', 'rain', 'blink', 'ring'], d: 'BOSS MYTHIQUE. Trois phases : pluie de cristaux, novas tournantes et téléportations.' },
  cyclope: { n: 'Le Cyclope', img: 'm7', hp: 2700, spd: 82, dmg: 32, r: 128, col: '#ffb03a', from: 99, w: 0, boss: 1, myth: 1, pat: ['beam', 'slam', 'charge', 'ring'], d: 'BOSS MYTHIQUE. Trois phases : rayon dévastateur, frappes au sol et charges.' },
  scorch: { n: 'Scorch, le brasier vivant', img: 'm7', hp: 2100, spd: 112, dmg: 28, r: 114, col: '#ff5a1e', from: 99, w: 0, boss: 1, myth: 1, pat: ['trail', 'rain', 'nova', 'charge'], d: 'BOSS MYTHIQUE. Trois phases : charges enflammées, pluie de feu et novas.' }
});
MON.ver.r = 100; for (const id of ['xalven', 'cyclope', 'scorch']) if (!MON_IDS.includes(id)) MON_IDS.push(id);
const MYTH = ['xalven', 'cyclope', 'scorch'], BOSSW = [4, 7];   /* boss moyens aux vagues 4 et 7, gros boss mythique à la dernière */
function ftask(x, y, rad, dmg, delay, col) { if (!G.ftasks) G.ftasks = []; G.ftasks.push({ t: delay, x, y, rad, dmg, col: col || '#ff3a3a' }); addFx(x, y, rad, '#ff3a3a', delay); addFx(x, y, rad * .45, '#ffffff', Math.min(.4, delay)); }
function fdo(delay, fn) { if (!G.ftasks) G.ftasks = []; G.ftasks.push({ t: delay, fn }); }
function plusTick(dt) {
  if (!G || NETROLE === 2 || !G.ftasks || dt <= 0) return;
  for (let i = G.ftasks.length - 1; i >= 0; i--) { const k = G.ftasks[i]; k.t -= dt; if (k.t > 0) continue; G.ftasks.splice(i, 1); if (k.fn) { try { k.fn(); } catch (e) {} continue; }
    for (const q of G.ps) { if (q.dead || q.gone) continue; if (hyp(q.x - k.x, q.y - k.y) < k.rad + q.r * .5) hurt(q, k.dmg); }
    addFx(k.x, k.y, k.rad * 1.15, k.col, .4); addFx(k.x, k.y, k.rad * .6, '#fff2c0', .25); addPil(k.x, k.y, k.rad * .5, 800, k.col, .5); spark(k.x, k.y, k.col, 10); G.shake = Math.max(G.shake, .22); gsnd('boom'); }
}
function ringShot(e, n, off, sp, k) { if (e.dead) return; for (let i = 0; i < n; i++) foeShot(e, i * 6.283 / n + off, sp, e.dmg * (k || .55)); addFx(e.x, e.y, 240, e.m.col, .4); gsnd('boom'); }
function mythAI(e, p, dt, slow, ux, uy, d) {
  const want = e.med ? (e.hp < e.max * .5 ? 2 : 1) : e.hp < e.max * .33 ? 3 : e.hp < e.max * .66 ? 2 : 1; e.ph = e.ph || 1;
  if (want > e.ph) {
    e.ph = want; e.stun = 1.7; e.wind = 0; e.chg = 0; G.shake = .9; G.flash = .5; evp(['sh', .9, .5]); vib(160); gsnd('boss');
    addFx(e.x, e.y, 700, e.m.col, .8); addFx(e.x, e.y, 420, '#ffffff', .5); for (let i = 0; i < 8; i++) addPil(e.x + Math.cos(i * .785) * 260, e.y + Math.sin(i * .785) * 260, 70, 1100, e.m.col, 1);
    ringShot(e, 26, G.t, 320, .5); fdo(.5, () => ringShot(e, 26, G.t + .12, 260, .5));
    for (let i = 0; i < 4 + 3 * want; i++) G.queue.push(i % 3 ? 'larve' : 'chauve');
    cine({ t: 2.6, f: e, zoom: 1.55, orbit: .9, title: 'PHASE ' + want, sub: e.m.n.toUpperCase(), col: e.m.col });
  }
  if (e.stun > 0) { e.stun -= dt; return [0, ux, uy]; }
  const rate = 1 + .4 * (e.ph - 1);
  if (e.wind > 0) { e.wind -= dt; if (e.wind <= 0) { e.chg = .8; gsnd('dash'); } return [0, ux, uy]; }
  if (e.chg > 0) {
    e.chg -= dt; if (e.trail && Math.random() < dt * 10) ftask(e.x, e.y, 120, e.dmg * .5, .6, '#ff5a1e'); if (Math.random() < .5) addFx(e.x, e.y, 160, e.m.col, .3);
    if (e.chg <= 0 && e.chn > 0) { e.chn--; e.wind = .38; const q = nearest(e.x, e.y); if (q) { const dd = hyp(q.x - e.x, q.y - e.y) || 1; e.cvx = (q.x - e.x) / dd; e.cvy = (q.y - e.y) / dd; } }
    return [720 * slow, e.cvx, e.cvy];
  }
  e.ai = (e.ai === undefined ? 2.2 : e.ai) - dt * slow * rate;
  if (e.ai <= 0) {
    e.ai = 3; e.pi = (e.pi || 0) + 1; const pat = e.m.pat[e.pi % e.m.pat.length], col = e.m.col, ph = e.ph;
    if (pat === 'ring') { ringShot(e, 16 + 4 * ph, G.t, 300); fdo(.45, () => ringShot(e, 16 + 4 * ph, G.t + .2, 250)); }
    else if (pat === 'nova') { for (let w = 0; w < 2 + ph; w++) fdo(w * .34, () => ringShot(e, 14, w * .23 + G.t * .3, 250 + 40 * w, .5)); }
    else if (pat === 'rain') { for (const q of G.ps) { if (q.dead || q.gone) continue; ftask(q.x, q.y, 150, e.dmg * .8, .85, col); for (let k = 0; k < 2 + 2 * ph; k++) ftask(q.x + rnd(-300, 300), q.y + rnd(-300, 300), 140, e.dmg * .8, 1 + k * .14, col); } }
    else if (pat === 'beam') { for (const off of ph > 1 ? [-.38, 0, .38] : [0]) { const a = Math.atan2(uy, ux) + off, bx = Math.cos(a), by = Math.sin(a); for (let k = 0; k < 9; k++) ftask(e.x + bx * (150 + k * 150), e.y + by * (150 + k * 150), 105, e.dmg, .75 + k * .05, '#ffb03a'); } e.stun = .9; }
    else if (pat === 'slam') { ftask(e.x, e.y, 400 + 70 * ph, e.dmg * 1.2, 1, col); e.stun = 1.05; fdo(1.05, () => ringShot(e, 12 + 4 * ph, G.t, 330)); }
    else if (pat === 'charge' || pat === 'trail') { e.wind = .6; e.cvx = ux; e.cvy = uy; e.chn = pat === 'trail' ? ph : ph - 1; e.trail = pat === 'trail' || e.id === 'scorch'; addFx(e.x, e.y, 260, '#ff3a3a', .6); }
    else if (pat === 'blink') { const tx = p.x - ux * 60, ty = p.y - uy * 60; ftask(tx, ty, 250, e.dmg, .85, col); fdo(.8, () => { if (e.dead) return; addFx(e.x, e.y, 260, col, .4); e.x = tx; e.y = ty; addPil(tx, ty, 120, 1200, col, .8); }); e.stun = .85; }
  }
  return [e.spd * slow * (1 + .15 * (e.ph - 1)), ux, uy];
}
/* vagues : moins de monstres, un boss une vague sur deux (Ver des sables puis les trois mythiques, et un mythique enragé à la fin) */
{ const _nw = nextWave; nextWave = function () {
  _nw(); const w = G.wave; if (!G.myth) { G.myth = MYTH.slice().sort(() => Math.random() - .5); }
  let q = G.queue.filter(id => !MON[id].boss); const boss = BOSSW.includes(w) || w >= LAST_WAVE;
  q = q.slice(0, Math.max(8, Math.round(q.length * (boss ? .3 : .55)))); let bid = null;
  if (boss) bid = w >= LAST_WAVE ? G.myth[1] : w === BOSSW[0] ? 'ver' : G.myth[0];
  if (bid) q.push(bid); G.queue = q; G.wtot = q.length; G.bossW = bid;
  G.banner = { t: 1.7, s: bid ? (w >= LAST_WAVE ? 'BOSS MYTHIQUE !' : 'BOSS !') : 'VAGUE ' + w, boss: bid ? 1 : 0 }; music(bid ? 'boss' : w >= 6 ? 'game2' : 'game');
}; }
{ const _sp = spawn; spawn = function (id) {
  _sp(id); const m = MON[id]; if (!m || !m.boss) return; const e = G.en[G.en.length - 1]; if (!e || e.id !== id) return;
  const w = G.wave, med = m.myth && w < LAST_WAVE; if (med) { e.med = 1; e.r = Math.round(e.r * .72); }
  const hp = m.hp * (.55 + w * .26) * 1.8 * G.n * (med ? .55 : m.myth ? 1.35 : 1); e.hp = e.max = hp; e.dmg = m.dmg * (1 + .05 * (w - 1)) * (med ? .85 : 1);
  if (m.myth) { e.ai = 2.6; if (G.cine) { G.cine.t = med ? 3.2 : 4.4; G.cine.zoom = med ? 1.6 : 1.8; G.cine.orbit = 1.3; G.cine.sub = (med ? 'BOSS' : 'BOSS MYTHIQUE') + ' · VAGUE ' + w; } G.flash = .5; G.shake = .8; for (let i = 0; i < 10; i++) addPil(e.x + Math.cos(i * .628) * 300, e.y + Math.sin(i * .628) * 300, 60, 1300, m.col, 1.6); addFx(e.x, e.y, 900, m.col, 1.2); }
}; }
{ const _kill = kill; kill = function (e) {
  if (e && e.m && e.m.myth && !e.med && !e._kd) { e._kd = 1; G.shards += 150; const x = e.x, y = e.y, col = e.m.col; for (let i = 0; i < 12; i++) fdo(i * .12, () => { const a = Math.random() * 6.283, r = Math.random() * 260; addFx(x + Math.cos(a) * r, y + Math.sin(a) * r, 260, i % 2 ? col : '#ffd45e', .5); addPil(x + Math.cos(a) * r, y + Math.sin(a) * r, 80, 1400, col, .8); G.shake = Math.max(G.shake, .4); gsnd('boom'); }); cine({ t: 3, f: { x, y }, zoom: 1.6, orbit: 1.1, title: e.m.n.split(',')[0].toUpperCase() + ' EST VAINCU', sub: 'BOSS MYTHIQUE', col: '#ffd45e' }); }
  return _kill(e);
}; }

/* ================= combos de gardien : une suite précise de pouvoirs, difficile mais dévastatrice ================= */
const COMBOS = {
  kaelion: [{ n: 'Jugement solaire', q: ['a', 'c', 'b'] }, { n: 'AUBE ÉTERNELLE', q: ['d', 'b', 'a', 'u'], big: 1 }], elyra: [{ n: 'Brasier', q: ['b', 'a', 'c'] }, { n: 'SUPERNOVA', q: ['d', 'c', 'b', 'u'], big: 1 }],
  aria: [{ n: 'Marée vive', q: ['c', 'a', 'b'] }, { n: 'DÉLUGE SACRÉ', q: ['d', 'a', 'c', 'u'], big: 1 }], vesper: [{ n: 'Danse des lames', q: ['a', 'b', 'c'] }, { n: 'NUIT SANS FIN', q: ['d', 'c', 'a', 'u'], big: 1 }],
  brakkor: [{ n: 'Forge vive', q: ['b', 'c', 'a'] }, { n: 'MARTEAU DES RUNES', q: ['d', 'a', 'b', 'u'], big: 1 }], nyxara: [{ n: 'Maléfice', q: ['c', 'b', 'a'] }, { n: 'ÉCLIPSE TOTALE', q: ['d', 'b', 'c', 'u'], big: 1 }]
};
const CWIN = 2.8, KLAB = { a: 'A', b: 'B', c: 'C', u: 'ULT', d: 'DASH' };
function comboFire(p, c, idx) {
  const d = p.base * p.mods.dmg, col = p.h.col, heal = k => { for (const q of G.ps) if (!q.dead && !q.gone) { q.hp = Math.min(q.maxhp, q.hp + q.maxhp * k); addFx(q.x, q.y, 150, '#8cff7a', .5); } };
  p.cbt = p.cbt || [0, 0]; p.cbt[idx] = G.t + (c.big ? 30 : 12); p.cq = [];
  if (!c.big) {
    announce('COMBO · ' + c.n.toUpperCase(), col); G.shake = .55; G.flash = .25; evp(['sh', .55, .25]); p.inv = Math.max(p.inv, 1); if (!multi()) { G.ts = .3; G.slowmo = .45; }
    aoe(p, p.x, p.y, 560, d * 9, 520); addFx(p.x, p.y, 560, col, .5); addFx(p.x, p.y, 340, '#ffffff', .3); for (let i = 0; i < 8; i++) addPil(p.x + Math.cos(i * .785) * 330, p.y + Math.sin(i * .785) * 330, 70, 1000, col, .7);
    spark(p.x, p.y, col, 30); gsnd('ult'); if (p.hero === 'aria') heal(.25); p.ult = Math.min(100, p.ult + 25); addTxt(p.x, p.y, 240, 'COMBO !', col, 1); return;
  }
  p.inv = Math.max(p.inv, 3.4); gsnd('ultc');
  cine({ t: 2.6, f: p, zoom: 1.75, orbit: 1.5, title: c.n, sub: 'COMBO MYTHIQUE · ' + p.h.n.toUpperCase(), col, end: () => {
    G.shake = 1; G.flash = .7; evp(['sh', 1, .7]); vib(220); gsnd('ult'); gsnd('boom');
    for (const e of G.en.slice()) { addPil(e.x, e.y, e.r, 1300, col, .9); dmgE(e, d * (e.m.boss ? 30 : 26), true, p); }
    for (let i = 0; i < 3; i++) addFx(p.x, p.y, 500 + i * 380, i % 2 ? '#ffffff' : col, .6 + i * .15); for (let i = 0; i < 12; i++) addPil(p.x + Math.cos(i * .524) * 420, p.y + Math.sin(i * .524) * 420, 80, 1500, col, 1.1);
    heal(.35); p.sh = Math.max(p.sh || 0, 5); G.frenzy = Math.max(G.frenzy || 0, 6); addTxt(p.x, p.y, 260, 'COMBO MYTHIQUE !', '#ffd45e', 1);
  } });
}
function comboKey(p, k) {
  const cs = COMBOS[p.hero]; if (!cs) return; p.cq = (p.cq || []).filter(x => G.t - x[1] < CWIN * 4); const last = p.cq[p.cq.length - 1]; if (last && G.t - last[1] > CWIN) p.cq = [];
  p.cq.push([k, G.t]); const seq = p.cq.map(x => x[0]);
  cs.forEach((c, idx) => { if (p.cbt && p.cbt[idx] > G.t) return; const n = c.q.length; if (seq.length >= n && c.q.every((x, i) => seq[seq.length - n + i] === x)) comboFire(p, c, idx); });
}
function comboProg(p, c) { const seq = (p.cq || []).filter(x => G.t - x[1] < CWIN * 4).map(x => x[0]), last = p.cq && p.cq[p.cq.length - 1]; if (!last || G.t - last[1] > CWIN) return 0; for (let n = Math.min(c.q.length - 1, seq.length); n > 0; n--) if (c.q.slice(0, n).every((x, i) => seq[seq.length - n + i] === x)) return n; return 0; }
{ const _skill = skill; skill = function (k, p) {
  const q = p || (G && G.p); if (!G || !q || G.state !== 'play' || q.dead) return _skill(k, p);
  const cd0 = k === 'u' ? q.ult : q.cd[k]; _skill(k, p); const fired = k === 'u' ? (cd0 >= 100 && q.ult < 100) : (cd0 <= 0 && q.cd[k] > 0);
  if (fired) { q.skt = G.t; q.skk = k; if (NETROLE !== 2) comboKey(q, k); }
}; }

/* ================= affichage en jeu ================= */
SCR.game = function () {
  const L = LAUNCH || { infos: [myInfo()], me: 0 }, f = L.infos[L.me], h = HEROES[f.hero], tb = (k, i, big) => { const id = (f.tx || h.tox)[i], lk = !f.tl[i]; return `<button class="ab ${lk ? 'lk' : ''}" id="b${k}" data-k="${k}"><em>${tic(id)}</em>${big ? '<small>ULTIME</small>' : ''}${lk ? '<span class="lkc">' + ic('lock') + '</span>' : ''}<div class="cd" id="cd${k}"></div>${big ? '' : `<div class="ct" id="ct${k}"></div>`}</button>`; };
  const cs = COMBOS[f.hero] || [];
  return `<div id="g3"><div class="neb"></div><div class="neb b"></div>${stars(40)}<div class="ecl"></div></div><canvas id="cv2" width="${W}" height="${H}"></canvas><div id="hud" class="h2 ${S.set.lefty ? 'lefty' : ''}">
    <div id="joyzone"><div id="joyb"><div id="joyk"></div></div></div>
    <div class="hhp"><div class="hav">${himg(f.hero, f.skin)}</div><div class="grow"><div class="hnm">${esc(f.name || h.n)}<small>${h.n} · ${h.cls}</small></div><div class="bar hpb"><i id="hpf"></i><span id="hpt"></span></div><div class="bar ulb"><i id="ulf"></i><span>ULTIME</span></div></div></div>
    <div id="team">${L.infos.map((q, i) => i === L.me ? '' : `<div class="tmb" id="tb${i}">${himg(q.hero, q.skin)}<div class="grow"><span>${esc(q.name)}</span><div class="bar"><i id="tm${i}" style="width:100%"></i></div></div></div>`).join('')}</div>
    <div class="hwave"><b id="wv">VAGUE 1</b><div class="wpips" id="wpips">${Array.from({ length: LAST_WAVE }, (_, i) => `<i class="${BOSSW.includes(i + 1) || i + 1 === LAST_WAVE ? 'bs' : ''}"></i>`).join('')}</div><div class="bar wbar"><i id="wpf"></i><span id="lf"></span></div></div>
    <div id="bossb"><b id="bsn"></b><div class="bar"><i id="bsf"></i></div><span id="bsp"></span></div>
    <div class="htr"><span class="pill">${ic('shard')} <b id="shd">0</b></span><button class="rnd rb" data-a="pause"><img src="img/kit/r_pause.webp" draggable="false" alt="Pause"></button></div>
    <div id="cmbs">${cs.map((c, i) => `<div class="cmb ${c.big ? 'big' : ''}" id="cmb${i}"><b>${c.n}</b><span>${c.q.map((k, j) => `<i id="cq${i}_${j}" class="k${k}">${KLAB[k]}</i>`).join('<u>▸</u>')}</span></div>`).join('')}</div>
    <div id="btns" style="transform:scale(${S.set.btn})">${tb('a', 0)}${tb('b', 1)}${tb('c', 2)}${tb('u', 3, 1)}
      <button class="ab" id="bd" data-k="d"><em>${ic('dash')}</em><div class="cd" id="cdd"></div><div class="ct" id="ctd"></div></button>
    </div><div id="over"></div></div>`;
};
{ const _hud = hudTick; let lt = 0; hudTick = function () {
  _hud(); const p = G.p, dt = G.t - (G._lt === undefined ? G.t : G._lt); G._lt = G.t; if (dt > 0 && dt < .5) plusTick(dt);
  if (G._ww !== G.wave) { G._ww = G.wave; G._wm = 0; const pp = $('#wpips'); if (pp) [...pp.children].forEach((el, i) => { el.className = (BOSSW.includes(i + 1) || i + 1 === LAST_WAVE ? 'bs ' : '') + (i < G.wave - 1 ? 'dn' : i === G.wave - 1 ? 'cu' : ''); }); }
  const rem = G.en.length + (NETROLE === 2 ? G.ql : G.queue.length); G._wm = Math.max(G._wm || 0, G.wtot || 0, rem);
  hset('wpf', 'width', Math.round(100 * (1 - rem / Math.max(1, G._wm))) + '%'); hset('lf', 'text', rem + (rem > 1 ? ' ennemis' : ' ennemi'));
  let bs = null; for (const e of G.en) if (e.m && e.m.boss && !e.dead) { bs = e; break; }
  hset('bossb', 'cls', bs ? 'on' + (bs.m.myth && !bs.med ? ' my' : '') : ''); if (bs) { hset('bsn', 'text', bs.m.n.toUpperCase()); hset('bsf', 'width', Math.max(0, Math.round(100 * bs.hp / bs.max)) + '%'); hset('bsp', 'text', bs.m.myth ? 'PHASE ' + (bs.ph || 1) + ' / ' + (bs.med ? 2 : 3) : 'BOSS'); }
  const cs = COMBOS[p.hero]; if (cs) cs.forEach((c, i) => { const n = NETROLE === 2 ? 0 : comboProg(p, c), cd = p.cbt && p.cbt[i] > G.t; hset('cmb' + i, 'cls', 'cmb' + (c.big ? ' big' : '') + (cd ? ' cd' : '') + (n ? ' go' : '')); c.q.forEach((k, j) => hset('cq' + i + '_' + j, 'cls', 'k' + k + (j < n ? ' ok' : ''))); });
}; }

/* ================= « +1 » qui s'envolent vers les compteurs ================= */
function popPlus(el, txt, col) { if (!el) return; const i = document.createElement('i'); i.className = 'plus1'; i.textContent = txt; if (col) i.style.color = col; i.style.left = (30 + Math.random() * 40) + '%'; el.appendChild(i); el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); setTimeout(() => i.remove(), 900); }
{ const _hud2 = hudTick; hudTick = function () { _hud2(); const s = G.shards | 0; if (G._sh === undefined) G._sh = s; if (s > G._sh) { const el = $('#shd'); if (el && (!G._pp || G.t - G._pp > .07)) { G._pp = G.t; popPlus(el.parentNode, '+' + (s - G._sh), '#e9a8ff'); G._sh = s; snd('coin'); } } else G._sh = s; }; }
{ const _give = give; give = function (r) { const c0 = S.coins, p0 = S.prisms, out = _give(r); setTimeout(() => { if (SCREEN === 'game') return; const dc = S.coins - c0, dp = S.prisms - p0, cu = document.querySelectorAll('.m2cur .pill, .top .cur .pill, .cur .pill'); if (cu.length >= 2) { if (dp > 0) popPlus(cu[0], '+' + dp, '#e9a8ff'); if (dc > 0) popPlus(cu[1], '+' + dc, '#ffd45e'); } }, 120); return out; }; }

/* ================= classé : des rangs, une difficulté qui monte, des étoiles de booster à chaque partie ================= */
const RANKS = [['Bronze', '#d08a5a'], ['Argent', '#cfd8e6'], ['Or', '#ffd45e'], ['Platine', '#7af0e0'], ['Diamant', '#7ac4ff'], ['Maître', '#c58bff'], ['Mythique', '#ff6a5a']], RSTEP = 100;
function rankOf(rp) { const t = Math.floor((rp || 0) / RSTEP), i = Math.min(RANKS.length - 1, Math.floor(t / 3)), dv = i === RANKS.length - 1 ? 0 : 3 - (t % 3); return { i, n: RANKS[i][0] + (dv ? ' ' + ['', 'I', 'II', 'III'][dv] : ''), c: RANKS[i][1], tier: Math.min(t, (RANKS.length - 1) * 3), in: (rp || 0) % RSTEP }; }
{ const _mi = myInfo; myInfo = function () { const f = _mi(); f.rk = rankOf(S.rp).tier; return f; }; }
{ const _sp2 = spawn; spawn = function (id) { _sp2(id); const e = G.en[G.en.length - 1], rk = G.rk || 0; if (!e || e.id !== id || !rk || e._rk) return; e._rk = 1; e.hp = e.max = e.hp * (1 + .1 * rk); e.dmg *= 1 + .05 * rk; e.spd *= 1 + .012 * rk; }; }
{ const _sr = startRun; startRun = function (infos, me, role) { _sr(infos, me, role); G.rk = (G && infos && infos[0] && infos[0].rk) | 0; if (!infos) G.rk = rankOf(S.rp).tier; }; }
{ const _se = showEnd; showEnd = function (r) {
  let extra = '';
  if (!G._rkd) { G._rkd = 1; const w = G.wave | 0, win = !!r.win, st = win ? 2 : w >= 4 ? 1 : 0, r0 = rankOf(S.rp), d = win ? 60 + 4 * r0.i : w >= 4 ? 8 + 3 * w : -12;
    S.rp = Math.max(0, (S.rp || 0) + d); S.bst = (S.bst || 0) + st; let nb = 0; while (S.bst >= 4) { S.bst -= 4; S.orbs = (S.orbs || 0) + 1; nb++; } save(); const r1 = rankOf(S.rp);
    extra = `<div class="rkend"><span class="rkb" style="--rc:${r1.c}">${r1.n}</span><b class="${d >= 0 ? 'up' : 'dn'}">${d >= 0 ? '+' : ''}${d} points</b>${r1.tier > r0.tier ? '<em>RANG SUPÉRIEUR !</em>' : ''}<span class="rks">${st ? '★'.repeat(st) + ' +' + st + ' étoile' + (st > 1 ? 's' : '') + ' de booster' : 'Atteins la vague 4 pour gagner une étoile'} · ${S.bst} / 4${nb ? ' · +' + nb + ' BOOSTER !' : ''}</span></div>`; }
  _se(r); const o = $('#over'); if (o && extra) o.insertAdjacentHTML('beforeend', extra);
}; }
{ const _menu = SCR.menu; SCR.menu = () => { const k = rankOf(S.rp); return _menu().replace("Gardien de l'Aube", `<b style="color:${k.c}">${k.n}</b> · ${k.in} / ${RSTEP}`).replace('<span class="olab">BOOSTERS</span>', `<span class="olab">BOOSTERS</span><i class="bst">★ ${S.bst || 0} / 4</i>`); }; }

/* ================= monstres propres à chaque carte : nom, portrait et caractère ================= */
const MAPFAM = ['arc', 'nat', 'nat', 'mar', 'feu', 'arc', 'arc', 'arc', 'mar'], FAMK = { nat: { hp: 1.18, spd: .95, dmg: 1 }, mar: { hp: .92, spd: 1.13, dmg: 1 }, feu: { hp: 1, spd: 1, dmg: 1.16 } };
const FAMN = {
  nat: { larve: ['Limace-champignon', 'Lente mais coriace, elle rampe en bande dans les sous-bois.'], chauve: ['Guêpe géante', 'Fonce en piqué sur le gardien.'], esprit: ['Feu follet des bois', 'Reste à distance et crache des graines.'], bombe: ['Cactus explosif', 'Court vers sa cible et éclate en épines.'], mage: ['Chaman des bois', 'Lance trois orbes de sève en éventail.'], garde: ['Golem de bois', 'Lent, très résistant, frappe fort.'] },
  mar: { larve: ['Méduse des abysses', 'Fragile mais rapide, elle arrive en banc.'], chauve: ['Piranha volant', 'Le plus rapide des monstres marins.'], esprit: ['Esprit d\'eau', 'Garde ses distances et tire des gouttes.'], bombe: ['Poisson-globe', 'Gonfle, fonce et explose au contact.'], mage: ['Pieuvre mage', 'Lance trois orbes d\'encre en éventail.'], garde: ['Crabe géant', 'Carapace épaisse et pinces redoutables.'] },
  feu: { larve: ['Larve de magma', 'Brûlante, elle frappe plus fort que ses cousines.'], chauve: ['Chauve-souris de feu', 'Fonce droit sur le gardien en laissant des braises.'], esprit: ['Feu follet', 'Tire des flammèches à distance.'], bombe: ['Bombe de lave', 'Explose violemment au contact.'], mage: ['Mage de cendre', 'Lance trois orbes de feu en éventail.'], garde: ['Golem de lave', 'Lent, très résistant, ses coups brûlent.'] }
};
for (const f in FAMN) for (const b in FAMN[f]) { const id = b + '_' + f, k = FAMK[f], B = MON[b]; MON[id] = Object.assign({}, B, { n: FAMN[f][b][0], d: FAMN[f][b][1], img: 'mx_' + id, hp: Math.round(B.hp * k.hp), spd: Math.round(B.spd * k.spd), dmg: Math.round(B.dmg * k.dmg), w: 0, vr: b }); if (!MON_IDS.includes(id)) MON_IDS.push(id); }
for (const id of MYTH) MON[id].img = 'mx_' + id;
{ const _sp3 = spawn; spawn = function (id) { _sp3(id); const e = G.en[G.en.length - 1], f = MAPFAM[G.map | 0], k = FAMK[f]; if (!e || e.id !== id || !k || !FAMN[f][id] || e.vid) return; e.vid = id + '_' + f; e.hp = e.max = e.hp * k.hp; e.spd *= k.spd; e.dmg *= k.dmg; }; }
{ const _k3 = kill; kill = function (e) { const r = _k3(e); if (e && e.vid && !e._vc && G.kc[e.id] > 0) { e._vc = 1; G.kc[e.id]--; if (!G.kc[e.id]) delete G.kc[e.id]; G.kc[e.vid] = (G.kc[e.vid] || 0) + 1; } return r; }; }
{ const _cx = SCR.codex; SCR.codex = () => _cx().replace('grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,1fr)', 'grid-template-columns:repeat(7,1fr);grid-template-rows:repeat(4,1fr)" class="cx28').replace('Dès la vague<b>5</b>', 'Dès la vague<b>' + (MON[CSEL] && MON[CSEL].myth ? '7' : '4') + '</b>'); }

/* ================= effets visuels des armes, des pouvoirs et des ultimes ================= */
{ const _fire = fire; fire = function (p) { const ok = _fire(p); if (ok && p && (!p._mf || G.t - p._mf > .09)) { p._mf = G.t; const x = p.x + p.fx * 62, y = p.y + p.fy * 62; addFx(x, y, 46, p.h.col, .14); if (Math.random() < .5) spark(x, y, p.h.col, 2); } return ok; }; }
{ const _sk4 = skill; skill = function (k, p) {
  const q = p || (G && G.p); if (!G || !q || G.state !== 'play' || q.dead || NETROLE === 2) return _sk4(k, p);
  const t0 = q.skt; _sk4(k, p); if (q.skt === t0 || q.skt !== G.t) return; const col = q.h.col, x = q.x, y = q.y;
  if (k === 'd') { for (let i = 1; i <= 3; i++) addFx(x - q.ddx * i * 46, y - q.ddy * i * 46, 70 - i * 12, col, .22 + i * .05); return; }
  const rc = RARC[{ a: 0, b: 1, c: 2, u: 3 }[k]] || col;
  addFx(x, y, 150, '#ffffff', .18); addFx(x, y, 210, rc, .34); addPil(x, y, 54, 620, rc, .42); spark(x, y, rc, 12);
  if (k === 'u') { G.flash = Math.max(G.flash, .35); evp(['sh', .6, .35]); for (let i = 0; i < 4; i++) fdo(i * .1, () => addFx(x, y, 320 + i * 260, i % 2 ? '#ffffff' : col, .5)); for (let i = 0; i < 10; i++) fdo(.05 + i * .03, () => addPil(x + Math.cos(i * .628) * 300, y + Math.sin(i * .628) * 300, 56, 1300, i % 2 ? '#ffd45e' : col, .8)); spark(x, y, '#ffd45e', 30); }
}; }
{ const _dm = dmgE; let lastB = 0; dmgE = function (e, d, crit, by) { const r = _dm(e, d, crit, by); if (e && crit && G.t - lastB > .05) { lastB = G.t; addFx(e.x, e.y, e.r * 1.5, '#ffd45e', .16); } return r; }; }

/* ================= mini-boutique façon « roguelite » : liste, prix en éclats, relance payante, bouton Prêt ================= */
const shopPrice = id => [14, 30, 55, 95][TOX[id].r] + (G.wave | 0) * 2, wallet = () => Math.max(0, (G.shards | 0) - (G.p.spent | 0)), rollCost = () => 3 + (G.wave | 0) + 3 * (G.rolls | 0);
applyPick = function (p, i, j, buy) {
  if (!p || p.picked || !p.ch) return; const ch = p.ch;
  if (ch.b) { const b = BLESS[ch.b[i | 0]] || BLESS[ch.b[0]]; if (b) { b.f(p.mods, p); (p.bl = p.bl || []).push(b.n); } if (Array.isArray(buy)) for (const id of buy.slice(0, 12)) if (TOX[id] && TOX[id].h === p.hero) setTox(p, id); }
  p.picked = true; if (G.ps.every(q => q.picked)) endPick();
};
startPick = function () { G.state = 'pick'; G.pickT = 60; for (const p of G.ps) { p.picked = p.gone; if (p.gone) continue; const ch = { b: rollBless(p), t: rollTox(p) }; p.ch = ch; if (p === G.p) openPick(ch); else NET.to(p.i, { t: 'pk', ch, w: G.wave }); } };
openPick = function (ch) { G.state = 'pick'; G.choices = ch && ch.b ? ch : { b: rollBless(G.p), t: rollTox(G.p) }; G.pb = -1; G.rolls = 0; G.sold = {}; G.bought = []; G.justB = G.justS = -1; G.justP = G.justR = 0; snd('pick'); pickUI(); };
pickUI = function () {
  const c = G.choices, p = G.p;
  if (G.pb < 0) return over(`<div class="pkt gold">VAGUE ${G.wave} TERMINÉE</div><div class="pks">Choisis 1 bénédiction parmi 4</div><div class="row pk4">${c.b.map((b, i) => { const B = BLESS[b]; return `<button class="pick p4" data-a="bless" data-v="${i}" style="--rc:${BRC[B.r]}"><i class="prar">${BRN[B.r]}</i><em>${ic(B.ic)}</em><b>${B.n}</b>${B.d ? `<small>${B.d}</small>` : ''}</button>`; }).join('')}</div>`);
  const w = wallet(), rc = rollCost(), bl = (p.bl || []).concat(NETROLE === 2 || !BLESS[c.b[G.pb]] ? [] : [BLESS[c.b[G.pb]].n]);
  over(`<div class="shx"><div class="shxt"><span class="pill shxw ${G.justP ? 'spent' : ''}">${ic('shard')} <b>${w}</b>${G.justP ? `<i class="minus">-${G.justP}</i>` : ''}</span><div class="pkt gold">BOUTIQUE</div><button class="shxr ${w < rc ? 'poor' : ''}" data-a="shopRoll">RELANCER <b>${rc}</b> ${ic('shard')}</button></div>
    <div class="shxb"><div class="shxl ${G.justR ? 'rl' : ''}">${c.t.map((id, i) => { const T = TOX[id], same = p.tx[T.s] === id, lv = same ? (p.tl[T.s] || 0) + 1 : Math.max(1, p.tl[T.s] || 0), pr = shopPrice(id), sold = G.sold[i];
      return `<button class="shxi ${sold ? 'sold' : ''} ${G.justB === i ? 'just' : ''} ${!sold && w < pr ? 'poor' : ''}" data-a="shopBuy" data-v="${i}" style="--rc:${RARC[T.r]};--i:${i}"><em>${tic(id)}</em><span class="shxn"><b>${T.n}</b><i>${T.s === 3 ? 'ULTIME' : 'TOX ' + 'ABC'[T.s]} · ${RARN[T.r]} · ${same ? 'NIVEAU ' + (lv - 1) + ' ▸ ' + lv : p.tl[T.s] ? 'REMPLACE ' + (TOX[p.tx[T.s]] || {}).n : 'DÉBLOQUE'}</i><small>${tfx(T, lv)}</small></span><u>${sold ? 'ACHETÉ' : pr + ' ' + ic('shard')}</u></button>`; }).join('')}</div>
    <div class="shxs"><div class="shxh">MES TOX</div><div class="shxg">${p.tx.map((id, i) => `<div class="shxo ${p.tl[i] ? '' : 'lk'} ${G.justS === i ? 'lvl' : ''}" style="--rc:${RARC[i]}">${tic(id)}<b>${p.tl[i] ? 'Niv. ' + p.tl[i] : ic('lock')}</b></div>`).join('')}</div>
      <div class="shxh">BÉNÉDICTIONS (${bl.length})</div><div class="shxc">${bl.length ? bl.slice(-9).map(n => `<i>${n}</i>`).join('') : '<i class="none">Aucune pour l’instant</i>'}</div></div></div>
    <button class="btn big shxgo" data-a="shopReady">PRÊT (VAGUE ${G.wave + 1})</button></div>`);
};
ACT.shopBuy = v => { const i = +v, id = G.choices.t[i]; if (G.sold[i] || !id) return; const pr = shopPrice(id); if (wallet() < pr) { snd('no'); return toast('Pas assez d\'éclats'); } G.p.spent = (G.p.spent | 0) + pr; G.sold[i] = 1; G.bought.push(id); setTox(G.p, id); refreshBtns(); snd('buy'); G.justB = i; G.justS = TOX[id].s; G.justP = pr; pickUI(); G.justB = G.justS = -1; G.justP = 0; };
ACT.shopRoll = () => { const rc = rollCost(); if (wallet() < rc) { snd('no'); return toast('Pas assez d\'éclats'); } G.p.spent = (G.p.spent | 0) + rc; G.rolls++; G.choices.t = rollTox(G.p); G.sold = {}; snd('pick'); G.justR = 1; G.justP = rc; pickUI(); G.justR = 0; G.justP = 0; };
ACT.shopReady = () => { snd('buy'); const wait = '<div class="gold" style="font-size:64px">En attente des autres joueurs…</div>'; if (NETROLE === 2) { NET.send({ t: 'pc', i: G.pb, j: 0, buy: G.bought }); over(wait); return; } G.p.ch = G.choices; G.p.picked = false; applyPick(G.p, G.pb, 0, []); refreshBtns(); if (G.state === 'pick') over(wait); };
ACT.toxp = () => {};

/* ================= animation d'achat : rayons, anneau, étincelles, compteur qui descend ================= */
function buyFx(html, title, sub, col, curr, cost) {
  const host = $('#toast').parentNode, old = $('#bfx'); if (old) old.remove();
  const d = document.createElement('div'); d.id = 'bfx'; d.style.setProperty('--rc', col || '#ffd45e'); const n = lite() ? 8 : 18;
  d.innerHTML = `<i class="bfr"></i><i class="bfo"></i>${Array.from({ length: n }, (_, i) => `<i class="bfs" style="--a:${i * 360 / n + (i % 2) * 9}deg;--d:${330 + (i * 53) % 190}px;--t:${(i % 5) * .04}s"></i>`).join('')}<div class="bfi">${html}</div><b class="bft">${title}</b>${sub ? `<span class="bfu">${sub}</span>` : ''}`;
  host.appendChild(d); snd('slam'); setTimeout(() => snd('pop'), 260); setTimeout(() => d.remove(), 1750);
  if (cost) { const p = document.querySelectorAll('.top .cur .pill, .m2cur .pill')[curr === 'coins' ? 1 : 0]; if (p) { p.classList.add('spent'); p.insertAdjacentHTML('beforeend', `<i class="minus">-${cost}</i>`); } }
}
for (const [k, f] of [
  ['buyBoost', v => { const b = BOOSTS.find(x => x.id === v); return [`<img src="img/tx/${b.ic}.webp" draggable="false" alt="">`, b.n, 'Prêt pour ta prochaine partie', '#d58bff', 'prisms', b.cost]; }],
  ['buyOrb', () => [orbImg('myst'), '+1 PACK ÉTOILE', 'À ouvrir depuis le menu', '#ffd45e', 'prisms', 80]],
  ['buyHero', v => [himg(v), HEROES[v].n, 'NOUVEAU GARDIEN !', HEROES[v].col, HEROES[v].curr, HEROES[v].cost]]]) { const o = ACT[k]; ACT[k] = v => { const a = S.prisms + S.coins; o(v); if (S.prisms + S.coins < a) { const x = f(v); $('#toast').classList.remove('on'); buyFx(...x); } }; }

/* ================= boutique à onglets : TOX du jour, offres, tenues, boosts ================= */
let STAB = 0;
/* le jour qui compte est le plus grand jour déjà vu : reculer l'horloge du téléphone ne redonne pas les cadeaux */
const dayNum = () => { const d = new Date(), t = Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 864e5); if (t > (S.dmax | 0)) { S.dmax = t; try { save(); } catch (e) {} } return Math.max(t, S.dmax | 0); };
const dayKey = () => 'j' + dayNum();
const DQ = [[5, .55, ''], [10, .28, 'CHANCE !'], [20, .12, 'GROSSE CHANCE !'], [50, .05, 'JACKPOT !']], SKINP = 300;
function daily() {
  const k = dayKey(); if (S.daily && S.daily.d === k && S.daily.t && S.daily.t.length === 4) return S.daily;
  const t = [], used = {};
  for (let i = 0; i < 4; i++) { const x = Math.random(), r = x < .5 ? 0 : x < .8 ? 1 : x < .95 ? 2 : 3; let pool = []; for (const h of S.owned) for (const id of HTOX[h]) if (!used[id]) pool.push(id); const pr = pool.filter(id => TOX[id].r === r); if (pr.length) pool = pr; const id = pool[(Math.random() * pool.length) | 0]; used[id] = 1;
    let y = Math.random(), q = DQ[0][0]; for (const [n, p] of DQ) { if (y < p) { q = n; break; } y -= p; } t.push([id, q]); }
  S.daily = { d: k, t, got: -1 }; save(); return S.daily;
}
const dayLeft = () => { const n = new Date(), m = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1), s = Math.max(0, (m - n) / 1000) | 0; return ((s / 3600) | 0) + ' h ' + String(((s % 3600) / 60) | 0).padStart(2, '0'); };
const dayFree = () => !(S.daily && S.daily.d === dayKey() && S.daily.got >= 0);
setInterval(() => { const e = $('#dcd'); if (e) { if (S.daily && S.daily.d !== dayKey()) show('shop'); else e.textContent = dayLeft(); } }, 20000);
const EUR = [
  { ic: () => ic('prism'), n: 'Poignée de prismes', d: '300 prismes', p: '1,99 €' }, { ic: () => ic('prism'), n: 'Sac de prismes', d: '900 prismes', p: '4,99 €', tag: 'POPULAIRE' }, { ic: () => ic('prism'), n: 'Coffre de prismes', d: '2 000 prismes', p: '9,99 €', tag: 'MEILLEUR PRIX' },
  { ic: () => orbImg('myst'), n: 'Pack de départ', d: '5 packs étoiles + 500 prismes', p: '2,99 €', tag: 'UNE SEULE FOIS' }, { ic: () => ic('crown'), n: 'Pass Premium', d: 'Toutes les récompenses du pass', p: '4,99 €' }, { ic: () => orbImg(3), n: 'Pluie d’étoiles', d: '12 packs étoiles', p: '7,99 €' }];
SCR.shop = function () {
  const T = [['tox', 'DU JOUR', dayFree() ? 'GRATUIT' : 'Pris'], ['prism', 'OFFRES', 'En euros'], ['crown', 'TENUES', 'En prismes'], ['bolt', 'BOOSTS', 'En prismes']];
  let b = '';
  if (STAB === 0) { const D = daily(), got = D.got >= 0;
    b = `<div class="s3h"><b>TOX DU JOUR</b><span>${got ? 'Déjà pris aujourd’hui' : 'Choisis-en 1 seul, il est offert'} · nouvelle sélection dans <i id="dcd">${dayLeft()}</i></span></div>
      <div class="s3d">${D.t.map(([id, q], i) => { const X = TOX[id], tg = (DQ.find(z => z[0] === q) || [])[2], s = S.tox[id] || { l: 0 }; return `<div class="s3c ${got ? (D.got === i ? 'mine' : 'off') : ''} ${q >= 20 ? 'luck' : ''}" style="--rc:${RARC[X.r]};--i:${i}">${tg ? `<i class="s3tag">${tg}</i>` : ''}<em>${tic(id)}<u>×${q}</u></em><b>${X.n}</b><small>${X.h && HEROES[X.h] ? HEROES[X.h].n + ' · ' : ''}${RARN[X.r]}</small><small class="s3l">${s.l ? 'Niveau ' + s.l : 'Pas encore débloqué'}</small>
        <button class="btn ${got ? 'gray' : ''}" data-a="dayTake" data-v="${i}">${got ? (D.got === i ? 'PRIS ✓' : 'DEMAIN') : 'PRENDRE'}</button></div>`; }).join('')}</div>
      <div class="s3o">Chances par TOX : ${DQ.map(z => '×' + z[0] + ' → ' + Math.round(z[1] * 100) + ' %').join(' · ')}</div>`; }
  else if (STAB === 1) b = `<div class="s3h"><b>OFFRES</b><span>${PAYL.some(Boolean) ? 'Paiement sécurisé par carte' : 'Le paiement en ligne n’est pas encore ouvert : ces offres arrivent bientôt'}</span></div><div class="s3g">${EUR.map((o, i) => `<button class="s3e" data-a="buyEur" data-v="${i}" style="--i:${i}">${o.tag ? `<i class="s3tag">${o.tag}</i>` : ''}<em>${o.ic()}</em><b>${o.n}</b><small>${o.d}</small><span class="s3p">${o.p}${PAYL[i] ? '' : '<i>BIENTÔT</i>'}</span></button>`).join('')}</div>`;
  else if (STAB === 2) b = `<div class="s3h"><b>TENUES</b><span>Une tenue rare par gardien · ${SKINP} prismes</span></div><div class="s3g">${Object.keys(SKINS).map((h, i) => { const own = S.owned.includes(h), has = S.skins.includes(h), on = has && S.skin[h]; return `<div class="s3e sk ${own ? '' : 'off'}" style="--i:${i}"><em class="s3a">${himg(h, 1)}</em><b>${SKINS[h].n}</b><small>${HEROES[h].n}</small>
      <button class="btn ${has ? (on ? 'gray' : 'vio') : own && S.prisms >= SKINP ? '' : 'gray'}" data-a="buySkin" data-v="${h}">${has ? (on ? 'ÉQUIPÉE ✓' : 'ÉQUIPER') : own ? SKINP + ' ' + ic('prism') : ic('lock') + ' Gardien'}</button></div>`; }).join('')}</div>`;
  else b = `<div class="s3h"><b>BOOSTS ET PACKS</b><span>Un boost sert pour une partie</span></div><div class="s3g g4">${BOOSTS.map((x, i) => `<div class="s3e bo" style="--i:${i}"><i class="s3n">${S.boost[x.id] || 0}</i><em><img src="img/tx/${x.ic}.webp" draggable="false" alt=""></em><b>${x.n}</b><small>${x.d}</small><button class="btn ${S.prisms < x.cost ? 'gray' : ''}" data-a="buyBoost" data-v="${x.id}">${x.cost} ${ic('prism')}</button></div>`).join('')}
      <div class="s3e bo pk" style="--i:6"><i class="s3n">${S.orbs || 0}</i><em>${orbImg('myst')}</em><b>Pack étoile</b><small>4 étoiles, 1 TOX à choisir</small><button class="btn ${S.prisms < 80 ? 'gray' : ''}" data-a="buyOrb">80 ${ic('prism')}</button></div>
      <button class="s3e bo pk" data-a="orb" style="--i:7"><em>${orbImg(3)}</em><b>Ouvrir mes packs</b><small>${S.orbs || 0} en réserve</small><span class="btn vio">OUVRIR</span></button></div>`;
  return head('BOUTIQUE') + `<div class="body s3"><div class="s3t">${T.map((t, i) => `<button class="s3b ${i === STAB ? 'on' : ''}" data-a="stab" data-v="${i}">${ic(t[0])}<span>${t[1]}<small>${t[2]}</small></span>${i === 0 && dayFree() ? '<i class="dot"></i>' : ''}</button>`).join('')}</div><div class="s3m" data-k="${STAB}">${b}</div></div>`;
};
ACT.stab = v => { STAB = +v; snd('pick'); show('shop'); const m = $('.s3m'); if (m) m.classList.add('sw'); };
ACT.dayGo = () => { STAB = 0; nav('shop'); };
/* paiements : un lien de paiement Stripe par offre (vide = pas encore ouvert). Au retour du paiement, l'offre est créditée une seule fois. */
const PAYL = ['', '', '', '', '', ''], PAYR = [{ prisms: 300 }, { prisms: 900 }, { prisms: 2000 }, { orbs: 5, prisms: 500 }, { premium: 1 }, { orbs: 12 }];
ACT.buyEur = v => { const u = PAYL[+v]; if (!u) return no('Paiement en ligne pas encore ouvert : cette offre arrive bientôt'); if (+v === 3 && S.starter) return no('Pack de départ déjà acheté'); if (+v === 4 && S.premium) return no('Tu as déjà le Pass Premium'); save(); location.href = u; };
function payBack() { const m = /[?&]paid=(\d)&cs=(cs_[A-Za-z0-9_]{10,})/.exec(location.search); if (!m || !PAYL[+m[1]]) return; S.paid = S.paid || []; try { history.replaceState(null, '', location.pathname); } catch (e) {} if (S.paid.includes(m[2])) return; S.paid.push(m[2]); const r = PAYR[+m[1]], o = EUR[+m[1]];
  if (r.premium) S.premium = true; if (+m[1] === 3) S.starter = true; if (r.prisms) S.prisms += r.prisms; if (r.orbs) S.orbs = (S.orbs || 0) + r.orbs; save(); setTimeout(() => { if (SCREEN === 'menu') show('menu'); buyFx(o.ic(), 'MERCI !', o.n + ' · ' + o.d, '#ffd45e'); }, 1200); }
{ const _st = ACT.start; ACT.start = () => { _st(); try { payBack(); } catch (e) {} }; }
ACT.dayTake = v => { const D = daily(), i = +v; if (D.got >= 0 || !D.t[i]) return no(D.got === i ? 'Déjà pris : reviens demain' : 'Un seul TOX par jour : reviens demain'); const [id, q] = D.t[i], l0 = (S.tox[id] || { l: 0 }).l; D.got = i; save(); addCard(id, q); save(); snd('buy'); show('shop'); const l1 = S.tox[id].l; buyFx(tic(id), TOX[id].n, '×' + q + ' copies' + (l1 > l0 ? (l0 ? ' · NIVEAU ' + l1 + ' !' : ' · DÉBLOQUÉ !') : ''), RARC[TOX[id].r]); };
ACT.buySkin = h => { if (!S.owned.includes(h)) return no('Débloque d’abord ' + HEROES[h].n); if (S.skins.includes(h)) { S.skin[h] = S.skin[h] ? 0 : 1; save(); snd('pick'); return show('shop'); } if (S.prisms < SKINP) return no('Pas assez de prismes'); S.prisms -= SKINP; S.skins.push(h); S.skin[h] = 1; save(); snd('buy'); show('shop'); buyFx(himg(h, 1), SKINS[h].n, 'TENUE DÉBLOQUÉE ET ÉQUIPÉE', '#ffd45e', 'prisms', SKINP); };

/* ================= menu : packs étoiles en bas à gauche, boutons mieux rangés ================= */
SCR.menu = () => {
  const k = rankOf(S.rp), st = S.bst || 0, B = [['shop', 'Boutique'], ['codex', 'Codex'], ['pass', 'Pass'], ['quests', 'Quêtes'], ['profile', 'Profil'], ['collection', 'Collection'], ['friends', 'Groupe'], ['settings', 'Réglages']];
  return `<div class="m2 m3"><div class="m2bg"></div><div class="m2sh"></div>${spk(10)}
    <button class="m2prof" data-a="go" data-v="profile"><span class="av">${himg(S.hero)}</span><span class="tx">${esc(S.name)}<span class="sub">Niv. ${level()} · <b style="color:${k.c}">${k.n}</b> · ${k.in} / ${RSTEP}</span><span class="bar"><i style="width:${(S.xp % 400) / 4}%"></i></span></span></button>
    <div class="m2cur"><span class="pill">${ic('prism')} ${S.prisms}</span><span class="pill">${ic('coin')} ${S.coins}</span></div>
    <div class="m2col"><img class="m2logo" src="img/ui/logo.webp" draggable="false" alt="Eclyptia">
      <div class="m2grid">${B.map((b, i) => `<button class="m2b" data-a="go" data-v="${b[0]}" style="--i:${i}"><img src="img/ui/b_${b[0]}.webp" draggable="false" alt="${b[1]}">${b[0] === 'shop' && dayFree() ? '<i class="dot"></i>' : ''}</button>`).join('')}</div>
      <button class="m2play" data-a="go" data-v="hero"><img src="img/ui/play.webp" draggable="false" alt="Jouer"></button></div>
    <div class="m3bl"><button class="m3day ${dayFree() ? 'free' : ''}" data-a="dayGo">${ic('tox')}<span>TOX DU JOUR<small>${dayFree() ? 'Gratuit : à prendre !' : 'Revient dans ' + dayLeft()}</small></span>${dayFree() ? '<i class="dot"></i>' : ''}</button>
      <button class="m3pk" data-a="orb">${orbImg('myst')}<span class="m3pt"><b>PACKS ÉTOILES</b><span class="m3st">${[0, 1, 2, 3].map(i => `<i class="${i < st ? 'on' : ''}">★</i>`).join('')}</span><small>${4 - st} étoile${4 - st > 1 ? 's' : ''} avant le prochain pack</small></span><u>${S.orbs || 0}</u></button></div>
    <div class="ver">${VERSION}</div></div>`;
};

/* ================= Codex aéré : monstres par pages de 10, grandes cartes ================= */
let CPG = -1;
{ const _cx2 = SCR.codex; SCR.codex = () => {
  if (CTAB === 'tox') return _cx2();
  const seen = MON_IDS.filter(i => S.codex[i]).length, tn = TOX_IDS.filter(i => (S.tox[i] || {}).l).length, NP = Math.ceil(MON_IDS.length / 10);
  if (CPG < 0 || CPG >= NP) CPG = Math.max(0, Math.floor(MON_IDS.indexOf(CSEL) / 10));
  const ids = MON_IDS.slice(CPG * 10, CPG * 10 + 10), m = MON[CSEL], ok = !!S.codex[CSEL];
  return head('CODEX') + `<div class="body cdx cx3"><div class="col cxl" style="width:270px;flex:none"><button class="tab on" data-a="ctab" data-v="mon">${ic('skull')}<span>Monstres<small>${seen} / ${MON_IDS.length}</small></span></button><button class="tab" data-a="ctab" data-v="tox">${ic('tox')}<span>TOX<small>${tn} / ${TOX_IDS.length}</small></span></button><div class="pn sub grow">Chaque monstre vaincu en partie est ajouté ici, avec ses forces.</div></div>
    <div class="col grow cx3m"><div class="cx3g">${ids.map((id, i) => { const o = !!S.codex[id]; return `<button class="cx3c ${id === CSEL ? 'on' : ''} ${o ? '' : 'lock'}" data-a="csel" data-v="${id}" style="--i:${i}"><img src="img/${MON[id].img}.jpg" draggable="false" alt="">${o ? `<u>×${S.codex[id]}</u>` : '<span class="lk">' + ic('lock') + '</span>'}<b>${o ? MON[id].n : '???'}</b></button>`; }).join('')}</div>
      <div class="cx3p"><button class="rb" data-a="cpg" data-v="-1"><img src="img/kit/r_left.webp" draggable="false" alt="Précédent"></button><span>${Array.from({ length: NP }, (_, i) => `<i class="${i === CPG ? 'on' : ''}"></i>`).join('')}<b>Page ${CPG + 1} / ${NP}</b></span><button class="rb" data-a="cpg" data-v="1"><img src="img/kit/r_right.webp" draggable="false" alt="Suivant"></button></div></div>
    <div class="pn col cxm cx3d" style="width:470px;flex:none">${ok ? `<div class="cx3i"><img src="img/${m.img}.jpg" draggable="false" alt=""></div><div class="gold cx3n">${m.n.toUpperCase()}</div><div class="sub">${m.d}</div>
      <div class="cx3s"><div class="tile">PV<b>${m.hp}</b></div><div class="tile">Dégâts<b>${m.dmg}</b></div><div class="tile">Vitesse<b>${m.spd}</b></div><div class="tile">Vaincus<b>${S.codex[CSEL]}</b></div><div class="tile">Dès la vague<b>${m.boss ? (m.myth ? 7 : 4) : m.from}</b></div></div>` : `<div class="grow col" style="align-items:center;justify-content:center;text-align:center;gap:20px"><div class="cx3k">${ic('lock')}</div><div class="sub">Vaincs cette créature en partie pour la découvrir.</div></div>`}</div></div>`;
}; }
ACT.cpg = v => { const NP = Math.ceil(MON_IDS.length / 10); CPG = (CPG + (+v) + NP) % NP; CSEL = MON_IDS[CPG * 10]; snd('pick'); show('codex'); };


/* ================= affichage en jeu : pouvoirs qui flashent quand ils sont prêts, barre de vie qui réagit ================= */
{ const _ht2 = hudTick, CDP = {}; hudTick = function () { _ht2.apply(this, arguments); if (!G || !G.p) return;
  for (const k of 'abcdu') { const c = $('#cd' + k), b = $('#b' + k); if (!c || !b) continue; const on = parseFloat(c.style.height) > 1; if (CDP[k] && !on && !b.classList.contains('lk')) { b.classList.remove('rdy'); void b.offsetWidth; b.classList.add('rdy'); } CDP[k] = on; }
  const hp = $('.hhp'), f = $('#hpf'); if (hp && f) { const low = parseFloat(f.style.width) < 30, hit = G.hurtT > 0; if (hp._l !== low) { hp._l = low; hp.classList.toggle('low', low); } if (hp._h !== hit) { hp._h = hit; hp.classList.toggle('hit', hit); } }
}; }

let SV2CARD = null, SV2BL = () => '';
/* ================= mini-boutique v2 : 4 grandes cartes illustrées, ce que l'achat change est montré en images ================= */
{ const _pu = pickUI; pickUI = function () {
  if (G.pb < 0) return _pu();
  const c = G.choices, p = G.p, w = wallet(), rc = rollCost(), bl = (p.bl || []).concat(NETROLE === 2 || !BLESS[c.b[G.pb]] ? [] : [BLESS[c.b[G.pb]].n]);
  const card = (id, i) => { const T = TOX[id], cur = p.tx[T.s], has = !!p.tl[T.s], same = has && cur === id, lv = T.it ? 1 : same ? p.tl[T.s] + 1 : Math.max(1, p.tl[T.s] || 0), pr = shopPrice(id), sold = G.sold[i], poor = !sold && wallet() < pr, n0 = (p.itn && p.itn[id]) || 0;
    const chg = T.it ? `<span class="sv2c up"><b>+${T.v} %</b><i>${ITL[T.k]}</i><small>${n0 ? 'TU EN AS ' + n0 : "S'AJOUTE"}</small></span>` : same ? `<span class="sv2c up"><i>Niv. ${lv - 1}</i><u>▸</u><b>Niv. ${lv}</b><small>AMÉLIORE</small></span>` : has ? `<span class="sv2c sw">${tic(cur)}<u>▸</u>${tic(id)}<small>REMPLACE</small></span>` : `<span class="sv2c nw">${ic('lock')}<u>▸</u>${tic(id)}<small>DÉBLOQUE</small></span>`;
    const lk = !sold && (p.lock || []).includes(id); return `<div class="sv2w ${lk ? 'lk' : ''}" style="--i:${i}"><button class="sv2k ${sold ? 'sold' : ''} ${poor ? 'poor' : ''} ${G.justB === i ? 'just' : ''}" data-a="shopBuy" data-v="${i}" style="--rc:${RARC[T.r]};--i:${i}"><i class="sv2s">${T.it ? 'OBJET' : T.s === 3 ? 'ULTIME' : 'TOX ' + 'ABC'[T.s]}</i><i class="sv2r">${RARN[T.r]}</i><em>${tic(id)}</em><b>${T.n}</b>${chg}<small class="sv2d">${T.it ? 'Objet : dure toute la partie, se cumule' : tfx(T, lv)}</small><span class="sv2p">${sold ? 'ACHETÉ ✓' : pr + ' ' + ic('shard')}</span></button>${sold ? '' : `<button class="sv2lk ${lk ? 'on' : ''}" data-a="shopLock" data-v="${i}"><img src="img/kit/r_lock.webp" draggable="false" alt="Garder"></button>`}</div>`; };
  SV2CARD = card; SV2BL = () => Object.keys(p.itn || {}).map(id => `<i class="it">${tic(id)}×${p.itn[id]}</i>`).join('') + (bl.length ? bl.slice(-5).map(n => `<i>${n}</i>`).join('') : (p.itn && Object.keys(p.itn).length ? '' : '<i class="none">Aucun pour l’instant</i>'));
  over(`<div class="sv2"><div class="sv2t"><span class="pill shxw ${G.justP ? 'spent' : ''}">${ic('shard')} <b>${w}</b>${G.justP ? `<i class="minus">-${G.justP}</i>` : ''}</span><div class="sv2h"><b class="gold">BOUTIQUE</b><small>Vague ${G.wave} terminée · achète ce que tu veux · le cadenas garde une carte</small></div><button class="shxr ${w < rc ? 'poor' : ''}" data-a="shopRoll"><img class="sv2dice" src="img/kit/r_dice.webp" draggable="false" alt="">RELANCER <b>${rc}</b> ${ic('shard')}</button></div>
    <div class="sv2g ${G.justR ? 'rl' : ''}">${c.t.map(card).join('')}</div>
    <div class="sv2b"><div class="sv2m"><small>MES TOX</small><div>${p.tx.map((id, i) => `<span class="shxo ${p.tl[i] ? '' : 'lk'} ${G.justS === i ? 'lvl' : ''}" style="--rc:${RARC[i]}">${tic(id)}<b>${p.tl[i] ? 'Niv. ' + p.tl[i] : ic('lock')}</b></span>`).join('')}</div></div>
      <div class="sv2l"><small>OBJETS ET BÉNÉDICTIONS</small><div>${SV2BL()}</div></div>
      <button class="btn big shxgo" data-a="shopReady">PRÊT ▸ VAGUE ${G.wave + 1}</button></div></div>`);
}; }


/* ================= OBJETS : des TOX passifs propres à chaque gardien, qui renforcent le gardien lui-même (pas ses compétences) ================= */
const ITL = { hp: 'PV max', spd: 'vitesse', dmg: 'dégâts', rate: 'cadence de tir', crit: 'chance de critique', cdr: 'recharge plus courte', magnet: 'portée de l’aimant', luck: 'chance' }, HITEM = {};
const ITEMS = {
  kaelion: [['Anneau de l’aube', 'spd', 3, 0], ['Plastron solaire', 'hp', 5, 1], ['Gantelets du zénith', 'dmg', 3, 1], ['Éperons dorés', 'rate', 2, 0], ['Œil du soleil', 'crit', 2, 2], ['Sablier de lumière', 'cdr', 2, 2], ['Médaillon du pèlerin', 'magnet', 8, 0], ['Trèfle solaire', 'luck', 4, 1]],
  elyra: [['Anneau de braise', 'dmg', 4, 1], ['Cape ignifuge', 'hp', 3, 0], ['Bottes de cendre', 'spd', 3, 0], ['Bracelet d’étincelles', 'rate', 3, 1], ['Rubis ardent', 'crit', 3, 2], ['Bougie éternelle', 'cdr', 2, 2], ['Lanterne à braises', 'magnet', 8, 0], ['Plume de phénix', 'luck', 4, 1]],
  aria: [['Coquillage chantant', 'cdr', 3, 2], ['Perle des abysses', 'hp', 4, 1], ['Sandales d’écume', 'spd', 4, 0], ['Diapason de corail', 'rate', 3, 1], ['Écaille de sirène', 'crit', 2, 2], ['Collier de vagues', 'dmg', 3, 1], ['Filet d’argent', 'magnet', 10, 0], ['Étoile de mer', 'luck', 5, 0]],
  vesper: [['Bague du néant', 'crit', 4, 2], ['Cape de fumée', 'spd', 4, 0], ['Masque d’ombre', 'dmg', 3, 1], ['Gants furtifs', 'rate', 3, 1], ['Amulette du vide', 'hp', 3, 0], ['Montre brisée', 'cdr', 2, 2], ['Bourse du voleur', 'magnet', 10, 0], ['Pièce truquée', 'luck', 5, 1]],
  brakkor: [['Ceinture de forge', 'hp', 6, 1], ['Enclume de poche', 'dmg', 4, 2], ['Bottes ferrées', 'spd', 2, 0], ['Soufflet runique', 'rate', 2, 0], ['Rune d’acier', 'crit', 2, 1], ['Tablier de cuir', 'cdr', 2, 2], ['Aimant de forge', 'magnet', 12, 0], ['Fer à cheval', 'luck', 4, 1]],
  nyxara: [['Anneau maudit', 'dmg', 4, 2], ['Chapeau pointu', 'cdr', 3, 2], ['Balai miniature', 'spd', 3, 0], ['Patte de corbeau', 'crit', 3, 1], ['Fiole de lune', 'hp', 3, 0], ['Grimoire de poche', 'rate', 3, 1], ['Chaudron d’âmes', 'magnet', 10, 0], ['Chat noir', 'luck', 5, 1]]
};
for (const h in ITEMS) { HITEM[h] = []; ITEMS[h].forEach((x, i) => { const id = h[0] + 'i' + (i + 1); TOX[id] = { id, n: x[0], t: 'pas', it: 1, h, s: 4, k: x[1], v: x[2], r: x[3], d: 'Objet de ' + HEROES[h].n + ' : renforce le gardien, toujours actif.' }; HITEM[h].push(id); HTOX[h].push(id); TOX_IDS.push(id); }); }
function applyItem(p, T, l) { if (!p || !T || !l) return; const x = T.v * l / 100, m = p.mods;
  if (T.k === 'hp') { const a = Math.round(p.maxhp * x); p.maxhp += a; p.hp += a; } else if (T.k === 'spd') m.spd *= 1 + x; else if (T.k === 'dmg') m.dmg *= 1 + x; else if (T.k === 'rate') m.rate *= 1 + x;
  else if (T.k === 'crit') m.crit += x; else if (T.k === 'cdr') m.cdr *= Math.max(.5, 1 - x); else if (T.k === 'magnet') m.magnet *= 1 + x; else if (T.k === 'luck') p.luck = (p.luck || 0) + x; }
{ const _tf = tfx; tfx = function (T, l) { return T && T.it ? '+' + T.v * l + ' % ' + ITL[T.k] + ' · toujours actif' : _tf(T, l); }; }
{ const _mi2 = myInfo; myInfo = function () { const f = _mi2(); f.it = {}; for (const id of HITEM[f.hero] || []) { const l = (S.tox[id] || {}).l; if (l) f.it[id] = l; } return f; }; }
{ const _mk = mkPlayer; mkPlayer = function (info, i, n) { const p = _mk(info, i, n); const it = info.it || {}; for (const id in it) { const T = TOX[id]; if (T && T.it && T.h === p.hero) applyItem(p, T, Math.min(TMAX, it[id] | 0)); } p.itn = {}; return p; }; }
{ const _st = setTox; setTox = function (p, id) { const T = TOX[id]; if (T && T.it) { if (!p) return; applyItem(p, T, 1); p.itn = p.itn || {}; p.itn[id] = (p.itn[id] || 0) + 1; return; } return _st(p, id); }; }
{ const _rt = rollTox; rollTox = function (p) { const out = _rt(p), pool = (HITEM[p.hero] || []).slice(); for (let i = 0; i < out.length && pool.length; i++) if (Math.random() < .3) out[i] = pool.splice((Math.random() * pool.length) | 0, 1)[0]; return out; }; }
{ const _cx3 = SCR.codex; SCR.codex = () => _cx3().replace('EMPLACEMENT undefined', 'OBJET'); }

/* ================= garde-fou : si le téléphone a fermé le jeu (mémoire saturée), on le sait au retour et on allège l'affichage ================= */
const HBK = 'ecl_hb';
function heartbeat(clean) { try { localStorage.setItem(HBK, JSON.stringify({ t: Date.now(), b: BUILD, s: SCREEN, w: G ? G.wave | 0 : 0, st: G ? G.state : '', c: clean ? 1 : 0 })); } catch (e) {} }
{ let last = null; try { last = JSON.parse(localStorage.getItem(HBK) || 'null'); } catch (e) {}
  if (last && !last.c && Date.now() - last.t < 5 * 60000 && last.s && last.s !== 'load') { S.crash = (S.crash | 0) + 1; S.crashAt = (last.s === 'game' ? 'en partie, vague ' + last.w : 'écran ' + last.s) + ' · v' + last.b; save();
    setTimeout(() => toast('Le jeu s’était fermé tout seul (' + S.crashAt + ') : affichage allégé'), 2500); }
  if ((S.crash | 0) > 0) { document.documentElement.classList.add('slow'); if (window.R3) R3.q = .7; }
  setInterval(() => heartbeat(document.hidden), 4000); addEventListener('pagehide', () => heartbeat(true)); document.addEventListener('visibilitychange', () => heartbeat(document.hidden));
  for (const k of ['update', 'accGo', 'accNew']) { const o = ACT[k]; if (o) ACT[k] = function () { heartbeat(true); return o.apply(this, arguments); }; }
  const _m3 = SCR.menu; SCR.menu = () => _m3().replace(`<div class="ver">${VERSION}</div>`, `<div class="ver">${VERSION}${S.crashAt ? ' · dernier arrêt : ' + S.crashAt : ''}</div>`); }

/* ================= récompenses quotidiennes : 7 jours qui s'enchaînent, la série repart à zéro si on saute un jour ================= */
const DRW = [{ coins: 100 }, { prisms: 20 }, { cards: 3 }, { coins: 250 }, { prisms: 40 }, { orbs: 1 }, { orbs: 2, prisms: 100 }];
const drState = () => { const s = S.dr || { t: 0, n: -1 }, t = dayNum(), can = s.t !== t, keep = t - s.t === 1 || (!can && s.n >= 0), n = can ? (keep ? s.n + 1 : 0) : s.n; return { can, n: n % 7, tot: n }; };
const drIc = r => r.orbs ? orbImg('myst') : r.cards ? ic('tox') : r.prisms ? ic('prism') : ic('coin');
const drTx = r => [r.coins ? r.coins + ' pièces' : '', r.orbs ? r.orbs + ' pack' + (r.orbs > 1 ? 's' : '') + ' étoile' : '', r.cards ? r.cards + ' cartes TOX' : '', r.prisms ? r.prisms + ' prismes' : ''].filter(Boolean).join(' + ');
function drUI() {
  let d = $('#drw'); if (!d) { d = document.createElement('div'); d.id = 'drw'; $('#stage').appendChild(d); } const st = drState();
  d.innerHTML = `<div class="drp"><button class="rb drx" data-a="drClose"><img src="img/kit/r_close.webp" draggable="false" alt="Fermer"></button><div class="drt"><b class="gold">RÉCOMPENSES QUOTIDIENNES</b><span>${st.can ? 'Reviens chaque jour : la série repart à zéro si tu sautes un jour' : 'Déjà récupérée aujourd’hui · prochaine dans ' + dayLeft()}</span></div>
    <div class="drg">${DRW.map((r, i) => { const done = st.can ? i < st.n : i <= st.n, cur = st.can && i === st.n; return `<div class="drc ${done ? 'done' : ''} ${cur ? 'cur' : ''} ${i === 6 ? 'big' : ''}" style="--i:${i}"><i>JOUR ${i + 1}</i><em>${drIc(r)}</em><b>${drTx(r)}</b>${done ? '<u>✓</u>' : ''}</div>`; }).join('')}</div>
    <div class="row" style="gap:24px;justify-content:center">${st.can ? '<button class="btn big" data-a="drTake">RÉCUPÉRER</button>' : '<button class="btn big vio" data-a="drClose">FERMER</button>'}</div></div>`;
}
ACT.drOpen = () => { snd('open'); drUI(); };
ACT.drClose = () => { const d = $('#drw'); if (d) d.remove(); snd('pick'); if (SCREEN === 'menu') show('menu'); };
ACT.drTake = () => { const st = drState(); if (!st.can) return ACT.drClose(); const r = DRW[st.n]; S.dr = { t: dayNum(), n: st.tot }; save(); give(r); save(); snd('buy'); const d = $('#drw'); if (d) d.remove(); if (SCREEN === 'menu') show('menu'); buyFx(drIc(r), 'JOUR ' + (st.n + 1), drTx(r), '#ffd45e'); };
{ const _sh = show; show = function (n, enter) { _sh(n, enter); if (n === 'menu' && enter && drState().can) setTimeout(() => { if (SCREEN === 'menu' && !$('#pnotes') && !$('#drw') && !$('#upd') && !$('#askn') && drState().can) drUI(); }, 1900); }; }
{ const _m4 = SCR.menu; SCR.menu = () => { const st = drState(); return _m4().replace('<div class="m3bl">', `<div class="m3bl"><button class="m3day ${st.can ? 'free' : ''}" data-a="drOpen"><img class="ici" src="img/kit/r_gift.webp" draggable="false" alt=""><span>CADEAU DU JOUR<small>${st.can ? 'Jour ' + (st.n + 1) + ' : à récupérer !' : 'Jour ' + (st.n + 1) + ' sur 7 · dans ' + dayLeft()}</small></span>${st.can ? '<i class="dot"></i>' : ''}</button>`); }; }


/* ================= sauvegarde du compte : code à garder, restauration, copies automatiques des 3 derniers jours ================= */
let BKCODE = '', BKMSG = '';
const b64e = u8 => { let s = ''; for (let i = 0; i < u8.length; i += 8192) s += String.fromCharCode.apply(null, u8.subarray(i, i + 8192)); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
const b64d = s => { s = s.replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '='; const b = atob(s), u = new Uint8Array(b.length); for (let i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return u; };
async function bkPack(obj) { const raw = new TextEncoder().encode(JSON.stringify(obj)); try { if (window.CompressionStream) { const cs = new Blob([raw]).stream().pipeThrough(new CompressionStream('deflate-raw')); return 'ECL2.' + b64e(new Uint8Array(await new Response(cs).arrayBuffer())); } } catch (e) {} return 'ECL1.' + b64e(raw); }
async function bkUnpack(code) { code = String(code || '').replace(/\s+/g, ''); const m = /^(ECL[12])\.([A-Za-z0-9_-]+)$/.exec(code); if (!m) throw new Error('code'); let u = b64d(m[2]); if (m[1] === 'ECL2') { const ds = new Blob([u]).stream().pipeThrough(new DecompressionStream('deflate-raw')); u = new Uint8Array(await new Response(ds).arrayBuffer()); } const o = JSON.parse(new TextDecoder().decode(u)); if (!o || typeof o !== 'object' || !o.tox || !o.owned || typeof o.name !== 'string') throw new Error('contenu'); return o; }
function bkAuto() { try { const k = KEY + '_bk', a = JSON.parse(localStorage.getItem(k) || '[]'), t = dayNum(); if (a.length && a[0].t === t) a[0].s = JSON.stringify(S); else a.unshift({ t, s: JSON.stringify(S) }); localStorage.setItem(k, JSON.stringify(a.slice(0, 3))); } catch (e) {} }
const bkList = () => { try { return JSON.parse(localStorage.getItem(KEY + '_bk') || '[]'); } catch (e) { return []; } };
setTimeout(() => { bkAuto(); try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch (e) {} }, 4000); setInterval(bkAuto, 120000);
SCR.backup = () => { const L = bkList(), t = dayNum(), ago = S.bkAt ? t - S.bkAt : -1;
  return head('SAUVEGARDE', 'profile') + `<div class="body bk"><div class="pn col grow bkp"><div class="bkh">${ic('shield')}<b>Sauvegarder ${esc(S.name)}</b></div>
    <div class="sub">Ce code contient tout ton compte : niveau, TOX, objets, monnaies, rang. Garde-le hors du jeu (envoie-le-toi par message ou par mail).</div>
    <textarea id="bkout" readonly>${BKCODE || 'Préparation du code…'}</textarea>
    <div class="row" style="gap:16px"><button class="btn grow" data-a="bkCopy">COPIER LE CODE</button><button class="btn vio grow" data-a="bkShare">ENVOYER</button></div>
    <div class="sub bks">${ago < 0 ? 'Tu n’as encore jamais sauvegardé ce compte.' : ago === 0 ? 'Dernière sauvegarde : aujourd’hui.' : 'Dernière sauvegarde : il y a ' + ago + ' jour' + (ago > 1 ? 's' : '') + '.'}</div></div>
    <div class="pn col grow bkp"><div class="bkh">${ic('chest')}<b>Restaurer un compte</b></div>
    <div class="sub">Colle un code de sauvegarde : il remplace le compte actuel sur cet appareil.</div>
    <textarea id="bkin" placeholder="Colle ton code ici" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea>
    <button class="btn" data-a="bkLoad">${BKMSG || 'RESTAURER CE CODE'}</button>
    ${L.length ? `<div class="sub bks">Copies automatiques sur cet appareil :</div><div class="row" style="gap:12px;flex-wrap:wrap">${L.map((x, i) => `<button class="btn sm vio" data-a="bkOld" data-v="${i}">${t - x.t === 0 ? 'Aujourd’hui' : t - x.t === 1 ? 'Hier' : 'Il y a ' + (t - x.t) + ' jours'}</button>`).join('')}</div>` : ''}</div></div>`; };
{ const _sh5 = show; show = function (n, enter) { _sh5(n, enter); if (n === 'backup' && enter) { BKMSG = ''; BKCODE = ''; bkPack(S).then(c => { BKCODE = c; const e = $('#bkout'); if (e) e.value = c; }); } }; }
ACT.bkCopy = () => { if (!BKCODE) return no('Le code se prépare, réessaie dans une seconde'); const e = $('#bkout'); let ok = false; try { e.focus(); e.select(); e.setSelectionRange(0, 999999); ok = document.execCommand('copy'); } catch (x) {} if (navigator.clipboard) navigator.clipboard.writeText(BKCODE).then(() => {}, () => {}); S.bkAt = dayNum(); save(); snd('buy'); toast(ok || navigator.clipboard ? 'Code copié : colle-le dans un message pour le garder' : 'Sélectionne le code et copie-le'); };
ACT.bkShare = () => { if (!BKCODE) return no('Le code se prépare, réessaie dans une seconde'); if (!navigator.share) return ACT.bkCopy(); navigator.share({ title: 'Sauvegarde ECLYPTIA de ' + S.name, text: BKCODE }).then(() => { S.bkAt = dayNum(); save(); toast('Sauvegarde envoyée'); }, () => {}); };
function bkApply(o) { try { heartbeat(true); } catch (e) {} bkAuto(); localStorage.setItem(KEY, JSON.stringify(o)); toast('Compte restauré : redémarrage…'); setTimeout(() => location.reload(), 900); }
ACT.bkLoad = async () => { const e = $('#bkin'), v = e ? e.value : ''; if (!v.trim()) return no('Colle d’abord ton code'); let o; try { o = await bkUnpack(v); } catch (x) { return no('Ce code n’est pas valide ou il est incomplet'); } if (BKMSG && ACT._bk === v) return bkApply(o); ACT._bk = v; BKMSG = 'CONFIRMER : REMPLACER PAR « ' + esc(o.name).slice(0, 14) + ' »'; const b = document.querySelector('[data-a="bkLoad"]'); if (b) { b.innerHTML = BKMSG; b.classList.add('vio'); } snd('pick'); };
ACT.bkOld = v => { const x = bkList()[+v]; if (!x) return; if (ACT._bo !== v) { ACT._bo = v; return toast('Touche encore une fois pour revenir à cette copie'); } try { bkApply(JSON.parse(x.s)); } catch (e) { no('Copie illisible'); } };
{ const _pf = SCR.profile; SCR.profile = () => _pf().replace('<button class="btn sm vio" data-a="go" data-v="accounts" style="width:100%">CHANGER DE COMPTE</button>', '<div class="row" style="gap:10px;width:100%"><button class="btn sm vio grow" data-a="go" data-v="accounts" style="min-width:0;padding:0 8px 5px;font-size:28px">COMPTES</button><button class="btn sm grow" data-a="go" data-v="backup" style="min-width:0;padding:0 8px 5px;font-size:28px">SAUVEGARDE</button></div>'); }

/* ================= jeu hors ligne : tous les fichiers sont gardés sur l'appareil, le jeu se lance sans réseau (solo) ================= */
let OFFL = { d: 0, tot: 0, ok: false, on: false };
function swFill() { try { navigator.serviceWorker.ready.then(r => { if (r.active) r.active.postMessage('fill'); }); } catch (e) {} }
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  navigator.serviceWorker.register('sw.js').then(() => { OFFL.on = true; setTimeout(swFill, 3000); }).catch(() => {});
  navigator.serviceWorker.addEventListener('controllerchange', () => setTimeout(swFill, 1500));
  navigator.serviceWorker.addEventListener('message', e => { const m = e.data || {}; if (m.t !== 'sw' && m.t !== 'swdone') return; OFFL.d = m.d; OFFL.tot = m.tot;
    if (m.t === 'swdone') { const was = OFFL.ok; OFFL.ok = !m.fail && m.d >= m.tot; if (OFFL.ok && !was && !S.offOk) { S.offOk = 1; save(); toast('Jeu prêt à être joué hors ligne'); } if (!OFFL.ok) setTimeout(swFill, 60000); }
    const v = document.querySelector('.ver'); if (v && SCREEN === 'menu') v.textContent = verTxt(); });
  addEventListener('online', () => { setTimeout(swFill, 2000); checkUpdate(); });
}
const verTxt = () => VERSION + (OFFL.on ? (OFFL.ok ? ' · hors ligne prêt' : OFFL.tot ? ' · hors ligne ' + Math.floor(100 * OFFL.d / OFFL.tot) + ' %' : '') : '') + (navigator.onLine === false ? ' · sans réseau' : '') + (S.crashAt ? ' · dernier arrêt : ' + S.crashAt : '');
{ const _m5 = SCR.menu; SCR.menu = () => _m5().replace(/<div class="ver">[^<]*<\/div>/, `<div class="ver">${verTxt()}</div>`); }
/* mise à jour : on demande d'abord la nouvelle liste de fichiers, puis on redémarre (les fichiers hors ligne ne sont plus effacés) */
ACT.update = async () => {
  try { heartbeat(true); sessionStorage.setItem('ecl_upd', NEWB); } catch (e) {} if (NET.role) NET.leave(true); toast('Mise à jour en cours…');
  try { const reg = await navigator.serviceWorker.getRegistration(); if (reg) await Promise.race([reg.update(), new Promise(r => setTimeout(r, 6000))]); } catch (e) {}
  location.replace(location.pathname + '?v=' + NEWB + '&t=' + Date.now());
};
/* sans réseau : le groupe en ligne est indisponible, on le dit clairement */
{ const _go = ACT.go; ACT.go = v => { if (v === 'friends' && navigator.onLine === false) return no('Le groupe a besoin d’internet. En solo, tu peux jouer hors ligne.'); return _go(v); }; }
{ const _sh6 = show; show = function (n, enter) { if (n !== 'menu') { const d = $('#drw'); if (d) d.remove(); } _sh6(n, enter); }; }


/* ================= mini-boutique : garder (verrouiller) une carte pour les relances et pour la vague suivante ================= */
ACT.shopLock = v => { const p = G.p, i = +v, id = G.choices && G.choices.t[i]; if (!id || G.sold[i]) return; p.lock = p.lock || []; const k = p.lock.indexOf(id); if (k >= 0) p.lock.splice(k, 1); else { if (p.lock.length >= 3) return no('3 cartes gardées au maximum'); p.lock.push(id); } snd(k >= 0 ? 'back' : 'pick'); const w = document.querySelectorAll('.sv2w')[i]; if (w) { const on = k < 0; w.classList.toggle('lk', on); const b = w.querySelector('.sv2lk'); if (b) { b.classList.toggle('on', on); b.classList.remove('tap'); void b.offsetWidth; b.classList.add('tap'); } } else pickUI(); };
{ const _sb = ACT.shopBuy; ACT.shopBuy = v => { const id = G.choices && G.choices.t[+v], was = G.sold[+v]; _sb(v); if (id && !was && G.sold[+v] && G.p.lock) { const k = G.p.lock.indexOf(id); if (k >= 0) { G.p.lock.splice(k, 1); pickUI(); } } }; }
ACT.shopRoll = () => { const rc = rollCost(), p = G.p; if (wallet() < rc) { snd('no'); return toast('Pas assez d’éclats'); } const old = G.choices.t, L = p.lock || [], keep = old.map((id, i) => !G.sold[i] && L.includes(id)); if (keep.every(Boolean)) return no('Toutes les cartes sont gardées');
  p.spent = (p.spent | 0) + rc; G.rolls++; let nw = rollTox(p).filter(id => !old.some((o, i) => keep[i] && o === id)); for (let g = 0; nw.length < 4 && g < 6; g++) for (const id of rollTox(p)) if (!nw.includes(id) && !old.some((o, i) => keep[i] && o === id)) nw.push(id);
  G.choices.t = old.map((id, i) => keep[i] ? id : (nw.shift() || id)); G.sold = {}; snd('pick'); G.justR = 1; G.justP = rc; pickUI(); G.justR = 0; G.justP = 0; };
{ const _op = openPick; openPick = function (ch) { _op(ch); try { const p = G.p, L = (p.lock || []).filter(id => TOX[id] && TOX[id].h === p.hero); p.lock = L; const t = G.choices.t; let j = 0; for (const id of L) { if (t.includes(id)) continue; while (j < t.length && L.includes(t[j])) j++; if (j < t.length) t[j++] = id; } } catch (e) {} if (G.pb >= 0) pickUI(); }; }
/* les monstres s'annoncent : un son à chaque apparition */
{ const _sp2 = spawn; spawn = function (id) { const r = _sp2.apply(this, arguments); try { const m = MON[id]; if (m && !m.boss) gsnd('spawn'); } catch (e) {} return r; }; }
/* style de musique au choix */
ACT.mst = v => { S.set.mst = +v; save(); if (typeof musStyle === 'function') musStyle(); snd('pick'); show('settings'); };
{ const _se2 = SCR.settings; SCR.settings = () => _se2().replace('<div class="sub">La progression est enregistrée sur cet appareil, dans ce navigateur.</div>', `<div class="sub" style="font-size:26px;color:#ffd45e">Style de musique</div><div class="row" style="gap:8px">${['Doux', 'Épique', 'Rétro'].map((n, i) => `<button class="btn sm ${(S.set.mst | 0) === i ? '' : 'gray'}" data-a="mst" data-v="${i}" style="min-width:0;flex:1;padding:0 6px 5px;font-size:27px">${n}</button>`).join('')}</div>`); }


/* ================= achat dans la mini-boutique : tout se met à jour sur place, l'icône s'envole vers son emplacement ================= */
ACT.shopBuy = v => {
  const i = +v, p = G.p, id = G.choices && G.choices.t[i]; if (!id || G.sold[i]) return; const T = TOX[id], pr = shopPrice(id), ws = document.querySelectorAll('.sv2w'), w = ws[i];
  if (wallet() < pr) { if (w) { w.classList.remove('nope'); void w.offsetWidth; w.classList.add('nope'); } return no('Pas assez d’éclats'); }
  p.spent = (p.spent | 0) + pr; G.sold[i] = 1; G.bought.push(id); setTox(p, id); refreshBtns(); snd('buy'); if (p.lock) { const k = p.lock.indexOf(id); if (k >= 0) p.lock.splice(k, 1); }
  if (!w || !SV2CARD) return pickUI();
  /* la carte achetée : flash, étincelles, tampon « ACHETÉ » */
  const card = w.querySelector('.sv2k'), pp = w.querySelector('.sv2p'), lk = w.querySelector('.sv2lk'), src = w.querySelector('em .tic'); w.classList.remove('lk'); if (lk) lk.remove(); card.classList.add('just'); if (pp) pp.innerHTML = 'ACHETÉ ✓';
  const n = lite() ? 6 : 12; for (let k = 0; k < n; k++) { const s = document.createElement('i'); s.className = 'bfs sv2sp'; s.style.cssText = `--rc:${RARC[T.r]};--a:${k * 360 / n}deg;--d:${200 + (k * 47) % 120}px;--t:${(k % 4) * .03}s`; w.appendChild(s); setTimeout(() => s.remove(), 1200); }
  setTimeout(() => { card.classList.remove('just'); w.classList.add('noan'); card.classList.add('sold'); }, 560);
  /* les autres cartes : prix accessibles ou non, « remplace / améliore » à jour, sans rejouer leur entrée */
  ws.forEach((x, j) => { if (j === i || G.sold[j]) return; const t = document.createElement('div'); t.innerHTML = SV2CARD(G.choices.t[j], j); const nw = t.firstChild; nw.classList.add('noan'); x.replaceWith(nw); });
  /* le compteur d'éclats descend */
  const wl = document.querySelector('.shxw'); if (wl) { const b = wl.querySelector('b'); if (b) b.textContent = wallet(); wl.querySelectorAll('.minus').forEach(m => m.remove()); wl.classList.remove('spent'); void wl.offsetWidth; wl.classList.add('spent'); wl.insertAdjacentHTML('beforeend', `<i class="minus">-${pr}</i>`); }
  const rr = document.querySelector('.shxr'); if (rr) rr.classList.toggle('poor', wallet() < rollCost());
  /* l'icône s'envole vers son emplacement, qui se met à jour à l'arrivée */
  const land = () => { if (T.it) { const l = document.querySelector('.sv2l>div'); if (l) { l.innerHTML = SV2BL(); const f = l.querySelector('.it:last-of-type') || l; f.classList.add('lvl2'); } } else { const o = document.querySelectorAll('.sv2m .shxo')[T.s]; if (o) { o.classList.remove('lk', 'lvl'); o.innerHTML = tic(p.tx[T.s]) + '<b>Niv. ' + p.tl[T.s] + '</b>'; void o.offsetWidth; o.classList.add('lvl'); } } snd('pop'); };
  const dst = T.it ? document.querySelector('.sv2l') : document.querySelectorAll('.sv2m .shxo')[T.s];
  if (!src || !dst || lite()) return land();
  const a = src.getBoundingClientRect(), b = dst.getBoundingClientRect(), f = document.createElement('img'); f.src = src.src; f.className = 'sv2fly'; f.style.cssText = `left:${a.left}px;top:${a.top}px;width:${a.width}px;height:${a.height}px`; document.body.appendChild(f);
  const bw = T.it ? Math.min(b.height, 60) : b.width, tx = (T.it ? b.left + 30 : b.left + b.width / 2) - (a.left + a.width / 2), ty = b.top + b.height / 2 - (a.top + a.height / 2);
  requestAnimationFrame(() => requestAnimationFrame(() => { f.style.transform = `translate(${tx}px,${ty}px) scale(${bw / a.width}) rotate(360deg)`; })); setTimeout(() => { f.remove(); land(); }, 620);
};


/* ================= énergie : moins de chauffe. Éco = 30 images/s et image plus légère ; Auto s'adapte tout seul ; Max = tout à fond ================= */
function ecoApply() { const e = S.set.eco | 0; ECO30 = e === 1; document.documentElement.classList.toggle('slow', e === 1 || (S.crash | 0) > 0); if (window.R3) { R3.q = e === 1 ? .72 : e === 2 ? 1.1 : ((S.crash | 0) > 0 ? .7 : .9); try { R3.resize(); } catch (x) {} } }
ecoApply();
ACT.eco = v => { S.set.eco = +v; save(); ecoApply(); snd('pick'); show('settings'); };
{ const _se3 = SCR.settings; SCR.settings = () => _se3().replace(/<div class="sub">Astuce[^<]*<\/div>/, `<div class="sub" style="font-size:26px;color:#ffd45e">Énergie</div><div class="row" style="gap:8px">${['Auto', 'Éco', 'Max'].map((n, i) => `<button class="btn sm ${(S.set.eco | 0) === i ? '' : 'gray'}" data-a="eco" data-v="${i}" style="min-width:0;flex:1;padding:0 6px 5px;font-size:27px">${n}</button>`).join('')}</div><div class="sub" style="font-size:20px">Éco : le téléphone chauffe moins (30 images/s)</div>`); }
/* menus : après 20 s sans toucher l'écran, les animations se mettent en pause (le téléphone se repose) */
{ let idleT = 0; const wake = () => { clearTimeout(idleT); document.documentElement.classList.remove('idle'); idleT = setTimeout(() => { if (SCREEN !== 'game') document.documentElement.classList.add('idle'); }, 20000); }; for (const ev of ['pointerdown', 'touchstart', 'keydown']) addEventListener(ev, wake, { passive: true }); wake(); }

/* ================= relance de la mini-boutique : les cartes se retournent une à une, sans recharger la page ================= */
ACT.shopRoll = () => {
  const rc = rollCost(), p = G.p; if (G.rolling) return; if (wallet() < rc) { const b = document.querySelector('.shxr'); if (b) { b.classList.remove('nope'); void b.offsetWidth; b.classList.add('nope'); } return no('Pas assez d’éclats'); }
  const old = G.choices.t.slice(), L = p.lock || [], keep = old.map((id, i) => !G.sold[i] && L.includes(id)); if (keep.every(Boolean)) return no('Toutes les cartes sont gardées');
  p.spent = (p.spent | 0) + rc; G.rolls++; let nw = rollTox(p).filter(id => !old.some((o, i) => keep[i] && o === id)); for (let g = 0; nw.length < 4 && g < 6; g++) for (const id of rollTox(p)) if (!nw.includes(id) && !old.some((o, i) => keep[i] && o === id)) nw.push(id);
  G.choices.t = old.map((id, i) => keep[i] ? id : (nw.shift() || id)); G.sold = {}; snd('pick');
  const ws = [...document.querySelectorAll('.sv2w')]; if (ws.length !== 4 || !SV2CARD) return pickUI();
  const wl = document.querySelector('.shxw'); if (wl) { const b = wl.querySelector('b'); if (b) b.textContent = wallet(); wl.querySelectorAll('.minus').forEach(m => m.remove()); wl.classList.remove('spent'); void wl.offsetWidth; wl.classList.add('spent'); wl.insertAdjacentHTML('beforeend', `<i class="minus">-${rc}</i>`); }
  const rb = document.querySelector('.shxr'); if (rb) { const b = rb.querySelector('b'); if (b) b.textContent = rollCost(); rb.classList.toggle('poor', wallet() < rollCost()); const d = rb.querySelector('.sv2dice'); if (d) { d.classList.remove('spin'); void d.offsetWidth; d.classList.add('spin'); } }
  const mk = i => { const t = document.createElement('div'); t.innerHTML = SV2CARD(G.choices.t[i], i); const n = t.firstChild; n.classList.add('nop'); return n; };
  if (lite()) { ws.forEach((x, i) => { if (!keep[i]) x.replaceWith(mk(i)); }); return; }
  G.rolling = 1; let k = 0, last = 0;
  ws.forEach((x, i) => { if (keep[i]) { x.classList.remove('kept'); void x.offsetWidth; x.classList.add('kept'); return; } const dl = k++ * 90; last = dl; x.style.animationDelay = dl + 'ms'; x.classList.add('flipo');
    setTimeout(() => { const n = mk(i); n.classList.add('flipi'); x.replaceWith(n); snd('tick'); setTimeout(() => n.classList.remove('flipi'), 520); }, dl + 230); });
  setTimeout(() => { G.rolling = 0; snd('pop'); }, last + 520);
};

/* ================= vagues au temps : il faut tenir jusqu'à la fin du chrono (les vagues de boss se gagnent toujours en battant le boss) ================= */
{ const _nw3 = nextWave; nextWave = function () { _nw3(); const w = G.wave; if (G.bossW) { G.wtimed = false; G.wt = 0; return; }
  G.wtimed = true; G.wdur = G.wt = Math.min(50, 22 + 3 * w); const q = G.queue.slice(), pool = [...new Set(q)], n = Math.max(10, Math.round(q.length * 1.5)); while (q.length < n) q.push(pool[(Math.random() * pool.length) | 0]);
  G.wpool = pool; G.wn = q.length; G.queue = q.splice(0, Math.min(6, q.length)); G.wq = q; G.wrel = 1.2; G.wtot = G.wn; }; }
function waveClock(dt) {
  if (!G.wtimed || G.state !== 'play' || NETROLE === 2 || G.cine || !(dt > 0) || G.wt <= 0) return; G.wt -= dt;
  if (G.wt <= 0) { G.wt = 0; G.queue.length = 0; if (G.wq) G.wq.length = 0; for (const e of G.en) { e.dead = true; e.nost = 1; try { R3.gone(e); } catch (x) {} } G.en.length = 0; G.flash = Math.max(G.flash || 0, .25); return; }
  if (G.wt > 1.2) { G.wrel -= dt; if (G.wrel <= 0) { const prog = 1 - G.wt / G.wdur; G.wrel = Math.max(.12, (G.wdur * .88 / G.wn) * (1.4 - .8 * prog)); G.queue.push((G.wq && G.wq.pop()) || G.wpool[(Math.random() * G.wpool.length) | 0]); } }
}
{ const _sn = snapshot; snapshot = function () { const s = _sn(); s.wt = G.wtimed ? Math.ceil(G.wt) : -1; return s; }; }
{ const _as = applySnap; applySnap = function (d) { _as(d); if (G && NETROLE === 2 && d.wt !== undefined) { G.wtimed = d.wt >= 0; G.wt = Math.max(0, d.wt); } }; }
{ const _g2 = SCR.game; SCR.game = function () { return _g2().replace(/<div class="hwave">[\s\S]*?<\/div><\/div>/, '<div class="hwave hw3"><b id="wv3">VAGUE 1</b><i id="wtm"></i></div>'); }; }
{ const _ht3 = hudTick; hudTick = function () { _ht3.apply(this, arguments); if (!G) return; const dt = G.t - (G._lt3 === undefined ? G.t : G._lt3); G._lt3 = G.t; if (dt > 0 && dt < .5) waveClock(dt);
  hset('wv3', 'text', 'VAGUE ' + G.wave); const s = Math.ceil(G.wt || 0), boss = !G.wtimed;
  hset('wtm', 'text', boss ? (G.state === 'play' ? 'BOSS' : '') : Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0')); hset('wtm', 'cls', boss ? 'bs' : s <= 5 ? 'end' : '');
  if (!boss && s <= 3 && s > 0 && G._ws !== s && G.state === 'play') snd('tick'); G._ws = s; }; }


/* ================= relance v2 : les cartes se retournent face cachée, puis se dévoilent une à une (les rares avec éclat) ================= */
ACT.shopRoll = () => {
  const rc = rollCost(), p = G.p; if (G.rolling) return; if (wallet() < rc) { const b = document.querySelector('.shxr'); if (b) { b.classList.remove('nope'); void b.offsetWidth; b.classList.add('nope'); } return no('Pas assez d’éclats'); }
  const old = G.choices.t.slice(), L = p.lock || [], keep = old.map((id, i) => !G.sold[i] && L.includes(id)); if (keep.every(Boolean)) return no('Toutes les cartes sont gardées');
  p.spent = (p.spent | 0) + rc; G.rolls++; let nw = rollTox(p).filter(id => !old.some((o, i) => keep[i] && o === id)); for (let g = 0; nw.length < 4 && g < 6; g++) for (const id of rollTox(p)) if (!nw.includes(id) && !old.some((o, i) => keep[i] && o === id)) nw.push(id);
  G.choices.t = old.map((id, i) => keep[i] ? id : (nw.shift() || id)); G.sold = {}; snd('whoosh');
  const ws = [...document.querySelectorAll('.sv2w')]; if (ws.length !== 4 || !SV2CARD) return pickUI();
  const wl = document.querySelector('.shxw'); if (wl) { const b = wl.querySelector('b'); if (b) b.textContent = wallet(); wl.querySelectorAll('.minus').forEach(m => m.remove()); wl.classList.remove('spent'); void wl.offsetWidth; wl.classList.add('spent'); wl.insertAdjacentHTML('beforeend', `<i class="minus">-${rc}</i>`); }
  const rb = document.querySelector('.shxr'); if (rb) { const b = rb.querySelector('b'); if (b) b.textContent = rollCost(); rb.classList.toggle('poor', wallet() < rollCost()); const d = rb.querySelector('.sv2dice'); if (d) { d.classList.remove('spin'); void d.offsetWidth; d.classList.add('spin'); } }
  const mk = i => { const t = document.createElement('div'); t.innerHTML = SV2CARD(G.choices.t[i], i); const n = t.firstChild; n.classList.add('nop'); return n; };
  if (lite()) { ws.forEach((x, i) => { if (!keep[i]) x.replaceWith(mk(i)); }); return; }
  G.rolling = 1; let k = 0, end = 0;
  ws.forEach((x, i) => { if (keep[i]) { x.classList.remove('kept'); void x.offsetWidth; x.classList.add('kept'); return; } const j = k++, h = x.offsetHeight, id = G.choices.t[i], r = TOX[id].r;
    x.style.animationDelay = j * 60 + 'ms'; x.classList.add('flipo');
    const back = document.createElement('div'); back.className = 'sv2w sv2bk'; back.style.minHeight = h + 'px'; back.innerHTML = '<div class="sv2bf"><img src="img/kit/r_dice.webp" draggable="false" alt=""></div>';
    setTimeout(() => { x.replaceWith(back); }, j * 60 + 220);
    const tr = 720 + j * 240; end = tr;
    setTimeout(() => { const n = mk(i); n.style.setProperty('--rc', RARC[r]); n.classList.add('rev'); if (r >= 2) n.classList.add('revx'); back.replaceWith(n); snd(r >= 3 ? 'rar2' : r === 2 ? 'rar1' : 'note', j + 2);
      const sp = r >= 2 ? 12 : 5; for (let q = 0; q < sp; q++) { const s = document.createElement('i'); s.className = 'bfs sv2sp'; s.style.cssText = `--rc:${RARC[r]};--a:${q * 360 / sp}deg;--d:${180 + (q * 47) % 130}px;--t:${(q % 4) * .03}s`; n.appendChild(s); setTimeout(() => s.remove(), 1200); }
      setTimeout(() => n.classList.remove('rev', 'revx'), 700); }, tr); });
  setTimeout(() => { G.rolling = 0; }, end + 450);
};
