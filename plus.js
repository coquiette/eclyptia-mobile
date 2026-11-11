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
  G.banner = { t: 2.4, s: bid ? (w >= LAST_WAVE ? 'BOSS MYTHIQUE !' : 'BOSS !') : 'VAGUE ' + w, boss: bid ? 1 : 0 }; music(bid ? 'boss' : w >= 6 ? 'game2' : 'game');
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
    <div class="htr"><span class="pill">${ic('shard')} <b id="shd">0</b></span><button class="rnd" data-a="pause">⏸</button></div>
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
