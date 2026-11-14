'use strict';
/* v7.6 : position d'un élément dans le repère de la scène, que l'écran soit tourné (téléphone tenu droit) ou non */
function sbx(el) { const st = $('#stage'), W = st.offsetWidth, H = st.offsetHeight, sr = st.getBoundingClientRect(), r = el.getBoundingClientRect();
  if (!ROT) { const k = sr.width / (W || 1); return { l: (r.left - sr.left) / k, t: (r.top - sr.top) / k, r: (r.right - sr.left) / k, b: (r.bottom - sr.top) / k }; }
  const k = sr.height / (W || 1), cx = sr.left + sr.width / 2, cy = sr.top + sr.height / 2;
  return { l: W / 2 + (r.top - cy) / k, r: W / 2 + (r.bottom - cy) / k, t: H / 2 - (r.right - cx) / k, b: H / 2 - (r.left - cx) / k }; }
/* ================= v7.1 : NOUVELLE ORGANISATION DES MENUS =================
   - barre d'onglets en bas sur l'accueil et sur toutes les pages
   - accueil : ton gardien en grand au centre, modes + JOUER en bas à droite, réglages en haut à droite
   - pages regroupées : Gardiens (choix · pouvoirs · tenues), Collection (collection · codex · cosmétiques), Social (amis · profil) */
const TB7 = [
  { k: 'shop', n: 'BOUTIQUE', im: 'img/ui/b_shop.webp', g: ['shop'] },
  { k: 'hero', n: 'GARDIENS', hero: 1, g: ['hero', 'htox', 'skins'] },
  { k: 'pass', n: 'PASS', im: 'img/ui/b_pass.webp', g: ['pass'] },
  { k: 'menu', n: 'ACCUEIL', home: 1, g: ['menu'] },
  { k: 'quests', n: 'QUÊTES', im: 'img/ui/b_quests.webp', g: ['quests'] },
  { k: 'collection', n: 'COLLECTION', im: 'img/ui/b_collection.webp', g: ['collection', 'codex', 'cosm'] },
  { k: 'friends', n: 'SOCIAL', im: 'img/ui/b_friends.webp', g: ['friends', 'profile', 'fprof', 'accounts'] }
];
/* sous-pages affichées à la place du titre */
const SUB7 = {
  hero: [['hero', 'CHOIX'], ['htox', 'POUVOIRS'], ['skins', 'TENUES']],
  collection: [['collection', 'COLLECTION'], ['codex', 'CODEX'], ['cosm', 'COSMÉTIQUES']],
  friends: [['friends', 'AMIS'], ['profile', 'PROFIL']]
};
const tb7Grp = s => TB7.find(t => t.g.includes(s));
const tb7Dot = k => { try { if (k === 'shop') return typeof dayFree === 'function' && dayFree(); if (k === 'pass') { const lv = Math.min(PASS.length, Math.floor(S.passXp / PASS_STEP)); for (let i = 0; i < lv; i++) if (!S.passClaim.includes(i) || (S.premium && !S.passClaimP.includes(i))) return true; } } catch (e) { } return false; };
function tb7() {
  const cur = tb7Grp(SCREEN), act = cur ? cur.k : '';
  return `<nav class="tb7">${TB7.map((t, i) => { const on = t.k === act, dot = tb7Dot(t.k) ? '<i class="dot"></i>' : '';
    if (t.home) return `<button class="tb7h ${on ? 'on' : ''}" data-a="go" data-v="menu" aria-label="Accueil"><img src="img/kit/r_home.webp" draggable="false" alt=""><b>ACCUEIL</b></button>`;
    if (t.hero) return `<button class="tb7b tb7g ${on ? 'on' : ''}" data-a="go" data-v="hero" style="--i:${i}"><span class="av">${himg(S.hero)}</span><b>${t.n}</b></button>`;
    return `<button class="tb7b ${on ? 'on' : ''}" data-a="go" data-v="${t.k}" style="--i:${i}"><img src="${t.im}" draggable="false" alt="${t.n}">${dot}</button>`; }).join('')}</nav>`;
}
function st7() { const g = tb7Grp(SCREEN), L = g && SUB7[g.k]; if (!L) return ''; return `<div class="st7">${L.map(x => `<button class="${x[0] === SCREEN || (x[0] === 'profile' && SCREEN === 'fprof') ? 'on' : ''}" data-a="go" data-v="${x[0]}">${x[1]}</button>`).join('')}</div>`; }

/* toutes les pages : barre d'onglets + sous-pages à la place du titre */
{ const _sh = show; show = function (n, e) { _sh(n, e); try { if (n === 'game' || n === 'load') return; const s = ui().querySelector('.scr'); if (!s || s.querySelector('.tb7')) return; const top = s.querySelector('.top');
    if (top) { s.classList.add('p7'); const st = st7(); if (st) { const t = top.querySelector('.ttl'); if (t) t.outerHTML = st; } }
    if (top || n === 'menu') s.insertAdjacentHTML('beforeend', tb7()); } catch (x) { } }; }

/* accueil */
ACT.hm7 = v => { const o = S.owned.filter(h => HEROES[h]); if (!o.length) return; const i = (o.indexOf(S.hero) + (+v) + o.length) % o.length; S.hero = o[i]; SEL = S.hero; save(); snd('pick'); show('menu'); };
ACT.play7 = () => { SEL = S.hero; snd('buy'); ACT.play(); };
{ const _mn = SCR.menu; SCR.menu = function () { let h = _mn.apply(this, arguments); const H = HEROES[S.hero] || HEROES.kaelion, k = rankOf(S.rp), r = typeof rkOn === 'function' && rkOn(), gst = typeof NET !== 'undefined' && NET.role === 2;
  const D = typeof KDEF !== 'undefined' && KDEF[S.hero], cls = D ? D.cls : H.cls, role = D ? D.role : '';
  const card = `<div class="hm7" style="--hc:${H.col}"><button class="hm7a" data-a="hm7" data-v="-1" aria-label="Gardien précédent"><img src="img/kit/r_left.webp" draggable="false" alt=""></button>
    <button class="hm7c" data-a="go" data-v="hero"><span class="hm7r"></span><span class="hm7p">${himg(S.hero)}</span><span class="hm7n"><b>${H.n.toUpperCase()}</b><small>${role ? role + ' · ' : ''}${cls}</small></span></button>
    <button class="hm7a" data-a="hm7" data-v="1" aria-label="Gardien suivant"><img src="img/kit/r_right.webp" draggable="false" alt=""></button></div>`;
  const md = `<div class="md7 hmd7 ${gst ? 'gst' : ''}"><button class="${r ? '' : 'on'}" data-a="mode" data-v="n"><b>NORMALE</b><small>Le rang ne bouge pas</small></button><button class="rk ${r ? 'on' : ''}" data-a="mode" data-v="r"><b>CLASSÉE</b><small>${gst ? 'Le chef choisit' : `<i style="color:${k.c}">${k.n}</i>`}</small></button></div>`;
  h = h.replace(/<div class="m2grid">[\s\S]*?<\/div>\s*<button class="m2play" data-a="go" data-v="hero">/, `</div>${card}<div class="pl7">${md}<button class="m2play" data-a="play7">`);
  h = h.replace('<div class="m2cur">', '<button class="set7" data-a="go" data-v="settings" aria-label="Réglages"><img src="img/kit/r_gear.webp" draggable="false" alt=""></button><div class="m2cur">');
  return h; }; }

/* ================= v7.2 : accueil qui s'adapte à la place libre (encoche, petits écrans) ================= */
function hm7Fit() {
  try { if (SCREEN !== 'menu') return; const m = ui().querySelector('.m2'), hm = m && m.querySelector('.hm7'); if (!hm) return; const sr = $('#stage').getBoundingClientRect(), k = sr.width / ($('#stage').offsetWidth || 1); if (!k) return;
    const box = el => (!el || !el.offsetParent) ? null : sbx(el);
    const Wd = $('#stage').offsetWidth, Hd = $('#stage').offsetHeight, L = box(m.querySelector('.m3bl')), P = box(m.querySelector('.pl7')), tb = box(m.querySelector('.tb7'));
    const tops = ['.m2prof', '.m2cur', '.set7'].map(s => box(m.querySelector(s))).filter(Boolean), lg = m.querySelector('.m2logo'), lgb = lg && getComputedStyle(lg.parentElement).display !== 'none' ? box(lg) : null;
    const IP = box(m.querySelector('.ip7')), left = (L ? L.r : 0) + 24, right = Math.min(P ? P.l : Wd, IP ? IP.l : Wd) - 24, bottom = (tb ? tb.t + 18 : Hd - 130) - 14;
    let top = Math.max(120, ...tops.map(b => b.b + 12)); if (lgb && lgb.r > left && lgb.l < right) top = Math.max(top, lgb.b + 6);
    const aw = right - left, ah = bottom - top, h = Math.max(220, Math.min(620, ah, aw / .86)), cx = (left + right) / 2;
    Object.assign(hm.style, { left: Math.round(cx) + 'px', top: Math.round(top + (ah - h) / 2) + 'px', height: Math.round(h) + 'px', bottom: 'auto' });
    hm.classList.toggle('sm', h < 470);
  } catch (e) { } }
{ const _sh2 = show; show = function (n, e) { _sh2(n, e); if (n === 'menu') { hm7Fit(); requestAnimationFrame(hm7Fit); setTimeout(hm7Fit, 450); setTimeout(hm7Fit, 1200); } }; }
addEventListener('resize', () => setTimeout(hm7Fit, 300)); addEventListener('orientationchange', () => setTimeout(hm7Fit, 600));
/* ouverture de pack : la barre d'onglets se cache (aussi sur les vieux iPhone qui ne gèrent pas :has) */
{ const _oo = openOrb, _co = closeOrb; openOrb = function () { const r = _oo.apply(this, arguments); if (typeof OB !== 'undefined' && OB) $('#stage').classList.add('orbon'); return r; }; closeOrb = function () { $('#stage').classList.remove('orbon'); return _co.apply(this, arguments); }; }

/* ================= v7.3 : accueil compact — rail de raccourcis à gauche, éléments plus petits ================= */
{ const _mn3 = SCR.menu; SCR.menu = function () { let h = _mn3.apply(this, arguments); const i0 = h.indexOf('<div class="m3bl">'), i1 = h.indexOf('<div class="ver">'); if (i0 < 0 || i1 < 0) return h;
  const dr = typeof drState === 'function' ? drState() : { can: 0 }, df = typeof dayFree === 'function' && dayFree(), pf = typeof dpkFree === 'function' && dpkFree(), n = S.orbs || 0, st = S.bst || 0;
  const it = (a, img, lab, sub, hot, badge) => `<button class="rl7b ${hot ? 'hot' : ''}" data-a="${a}"><span class="ic">${img}${badge ? `<u>${badge}</u>` : ''}${hot ? '<i class="dot"></i>' : ''}</span><b>${lab}</b><small>${sub}</small></button>`;
  const rail = `<div class="rl7">${it('drOpen', '<img src="img/kit/r_gift.webp" draggable="false" alt="">', 'CADEAU', dr.can ? 'À prendre !' : 'Demain', dr.can)}${it('dayGo', ic('tox'), 'TOX DU JOUR', df ? 'Gratuit !' : 'Pris', df)}${it('orb', orbImg('myst'), 'PACKS', pf ? 'Gratuit !' : '★'.repeat(st) + '☆'.repeat(Math.max(0, 4 - st)), pf, n || '')}</div>`;
  return h.slice(0, i0) + rail + h.slice(i1); }; }

/* ================= v7.3 : accueil plus rempli — rang, pass et quêtes du jour à droite ================= */
{ const _mn4 = SCR.menu; SCR.menu = function () { let h = _mn4.apply(this, arguments); try { if (typeof dayCheck === 'function') dayCheck();
  const k = rankOf(S.rp), lv = Math.min(PASS.length, Math.floor(S.passXp / PASS_STEP)), full = lv >= PASS.length, into = full ? PASS_STEP : S.passXp % PASS_STEP, nx = full ? null : (typeof pRw === 'function' ? pRw(PASS[lv]) : null);
  const qs = QUESTS.map(q => ({ q, v: Math.min(q.goal, q.get(S)), cl: S.q.claimed.includes(q.id) })), done = qs.filter(x => x.cl).length, ready = qs.filter(x => !x.cl && x.v >= x.q.goal).length;
  const show3 = qs.filter(x => !x.cl).sort((a, b) => (b.v >= b.q.goal) - (a.v >= a.q.goal) || b.v / b.q.goal - a.v / a.q.goal).slice(0, 3);
  const bar = (p, c) => `<span class="ip7bar"><i style="width:${Math.round(100 * Math.max(0, Math.min(1, p)))}%;${c ? 'background:' + c : ''}"></i></span>`;
  const side = `<div class="ip7">
    <button class="ip7c" data-a="go" data-v="hero"><span class="ip7i rk" style="--rc:${k.c}">${ic('crown')}</span><span class="ip7t"><small>MON RANG</small><b style="color:${k.c}">${k.n}</b>${bar(k.in / RSTEP, k.c)}<small>${k.in} / ${RSTEP} points</small></span></button>
    <button class="ip7c" data-a="go" data-v="pass"><span class="ip7i">${ic('star')}</span><span class="ip7t"><small>PASS · PALIER ${lv} / ${PASS.length}</small>${bar(into / PASS_STEP)}<small>${full ? 'Pass terminé !' : into + ' / ' + PASS_STEP + ' XP' + (nx ? ' · prochain ' + nx.n : '')}</small></span>${nx ? `<span class="ip7n">${nx.i}</span>` : ''}</button>
    <button class="ip7c ip7q ${ready ? 'hot' : ''}" data-a="go" data-v="quests"><span class="ip7h"><b>QUÊTES DU JOUR</b><small>${done} / ${QUESTS.length}${ready ? ` · <em>${ready} à réclamer !</em>` : ''}</small></span>
      ${show3.length ? show3.map(x => `<span class="ip7r ${x.v >= x.q.goal ? 'ok' : ''}"><span>${x.q.t}</span>${bar(x.v / x.q.goal, x.v >= x.q.goal ? '#5ee06a' : '')}<small>${x.v >= x.q.goal ? '✔' : x.v + ' / ' + x.q.goal}</small></span>`).join('') : '<span class="ip7r"><span>Toutes les quêtes sont faites !</span></span>'}</button></div>`;
  h = h.replace('<div class="pl7">', side + '<div class="pl7">'); } catch (e) { } return h; }; }

/* ================= v7.3 : plus de barre en bas — boutons à gauche et à droite ================= */
{ const _sh3 = show; show = function (n, e) { _sh3(n, e); try { ui().querySelectorAll('.tb7').forEach(x => x.remove()); const s = ui().querySelector('.scr'); if (s) s.classList.add('nb7'); } catch (x) { } }; }
{ const _mn5 = SCR.menu; SCR.menu = function () { let h = _mn5.apply(this, arguments);
  const N = [['shop', 'BOUTIQUE'], ['pass', 'PASS'], ['quests', 'QUÊTES'], ['collection', 'COLLECTION'], ['friends', 'AMIS']];
  const nav = `<div class="ln7">${N.map(([k, n], i) => `<button class="ln7b" data-a="go" data-v="${k}" style="--i:${i}"><img src="img/ui/b_${k}.webp" draggable="false" alt="${n}">${tb7Dot(k) ? '<i class="dot"></i>' : ''}</button>`).join('')}</div>`;
  const gd = `<button class="gd7" data-a="go" data-v="hero"><span class="av">${himg(S.hero)}</span><b>GARDIENS</b><small>Choix · pouvoirs · tenues</small></button>`;
  h = h.replace('<div class="rl7">', nav + '<div class="rl7">').replace('<div class="pl7">', gd + '<div class="pl7">');
  return h; }; }
{ const _fit = hm7Fit; hm7Fit = function () { _fit(); try { if (SCREEN !== 'menu') return; const m = ui().querySelector('.m2'), hm = m && m.querySelector('.hm7'), rl = m && m.querySelector('.rl7'); if (!hm || !rl) return;
    const st = $('#stage'), sr = st.getBoundingClientRect(), k = sr.width / (st.offsetWidth || 1); if (!k) return; const bx = sbx;
    const ln = m.querySelector('.ln7'), L = bx(ln || rl), R = ['.ip7', '.pl7'].map(s => m.querySelector(s)).filter(Boolean).map(bx), tops = ['.m2prof', '.m2cur', '.set7'].map(s => m.querySelector(s)).filter(Boolean).map(bx);
    const left = L.r + 26, right = Math.min(...R.map(b => b.l)) - 26, Hd = st.offsetHeight, top = Math.max(110, ...tops.filter(b => b.r > left && b.l < right).map(b => b.b + 14)), bottom = Hd - 34;
    const lg = m.querySelector('.m2logo'); let t2 = top; if (lg && getComputedStyle(lg.parentElement).display !== 'none') { const g = bx(lg); if (g.r > left && g.l < right) t2 = Math.max(t2, g.b + 6); }
    const aw = right - left, ah = bottom - t2, hh = Math.max(220, Math.min(500, ah * .82, aw / .86));
    Object.assign(hm.style, { left: Math.round((left + right) / 2) + 'px', top: Math.round(t2 + (ah - hh) / 2) + 'px', height: Math.round(hh) + 'px', bottom: 'auto' }); hm.classList.toggle('sm', hh < 470); } catch (e) { } }; }

/* ================= v7.3 : accueil épuré — une seule colonne de boutons, moins de doublons ================= */
{ const _mn6 = SCR.menu; SCR.menu = function () { let h = _mn6.apply(this, arguments); const n = S.orbs || 0, pf = typeof dpkFree === 'function' && dpkFree(), dr = typeof drState === 'function' ? drState() : { can: 0 };
  const pk = `<button class="ln7b ln7p ${pf ? 'hot' : ''}" data-a="orb"><span class="ic">${orbImg('myst')}${n ? `<u>${n}</u>` : ''}${pf ? '<i class="dot"></i>' : ''}</span><b>PACKS</b></button>`;
  const gift = dr.can ? `<button class="gf7" data-a="drOpen" aria-label="Cadeau du jour"><img src="img/kit/r_gift.webp" draggable="false" alt=""><i class="dot"></i></button>` : '';
  h = h.replace(/<\/button><\/div><div class="rl7">/, '</button>' + pk + '</div><div class="rl7">').replace('<button class="set7"', gift + '<button class="set7"');
  return h; }; }

/* ================= v7.3 : fiche du gardien à côté du portrait (stats, passif, compétences) ================= */
{ const _mn7 = SCR.menu; SCR.menu = function () { let h = _mn7.apply(this, arguments); try { const id = S.hero, H = HEROES[id], D = typeof KDEF !== 'undefined' && KDEF[id], hs = S.hs[id] || {};
  const st = (n, v, max, c) => `<span class="hi7s"><small>${n}</small><span class="ip7bar"><i style="width:${Math.min(100, 100 * v / max)}%;background:${c}"></i></span><b>${Math.round(v)}</b></span>`;
  const sk = D ? [['E', D.E], ['A', D.A], ['C', D.C], ['R', D.R]].map(([k, x], i) => x ? `<span class="hi7k"><span class="tq">${tic(H.tox[i])}<i>${k === 'C' ? 'COMBO' : k}</i></span><small>${x[0]}</small></span>` : '').join('') : '';
  const info = `<button class="hi7" data-a="go" data-v="hero" style="--hc:${H.col}"><span class="hi7h"><b>${H.n.toUpperCase()}</b><small>${D ? D.role + ' · ' + D.cls : H.cls}</small></span>
    <span class="hi7g">${st('PV', H.hp * (1 + .08 * (hs.hp || 0)), 200, '#5ee06a')}${st('Dégâts', H.dmg * (1 + .06 * (hs.dmg || 0)), 25, '#ff7a4a')}${st('Vitesse', H.spd * (1 + .03 * (hs.spd || 0)), 420, '#5ac8ff')}</span>
    ${D ? `<span class="hi7p"><b>Passif · ${D.pas[0]}</b><small>${D.pas[1]}</small></span>` : ''}<span class="hi7ks">${sk}</span><span class="hi7c">TOUCHE POUR CHANGER DE GARDIEN ›</span></button>`;
  h = h.replace('<div class="pl7">', info + '<div class="pl7">'); } catch (e) { } return h; }; }
{ const _fit2 = hm7Fit; hm7Fit = function () { _fit2(); try { if (SCREEN !== 'menu') return; const m = ui().querySelector('.m2'), hm = m && m.querySelector('.hm7'), hi = m && m.querySelector('.hi7'), ln = m && m.querySelector('.ln7'); if (!hm || !hi || !ln) return;
    const st = $('#stage'), sr = st.getBoundingClientRect(), k = sr.width / (st.offsetWidth || 1); if (!k) return; const bx = sbx;
    const L = bx(ln), R = ['.ip7', '.pl7'].map(s => m.querySelector(s)).filter(Boolean).map(bx), tops = ['.m2prof', '.m2cur', '.set7'].map(s => m.querySelector(s)).filter(Boolean).map(bx);
    const left = L.r + 150, right = Math.min(...R.map(b => b.l)) - 30, Hd = st.offsetHeight, aw = right - left, iw = Math.max(300, Math.min(540, aw * .46)), gap = 140;
    let top = Math.max(118, ...tops.filter(b => b.r > left && b.l < right).map(b => b.b + 14)); const lg = m.querySelector('.m2logo'); if (lg && getComputedStyle(lg.parentElement).display !== 'none') { const g = bx(lg); if (g.r > left && g.l < right) top = Math.max(top, g.b + 8); }
    const ah = Hd - 36 - top, ch = Math.max(230, Math.min(640, ah * .96, (aw - iw - gap) / .86)), cw = ch * .86, gw = cw + gap + iw, gl = (left + right) / 2 - gw / 2, ty = top + (ah - ch) / 2;
    Object.assign(hm.style, { left: Math.round(gl + cw / 2) + 'px', top: Math.round(ty) + 'px', height: Math.round(ch) + 'px', bottom: 'auto' }); hm.classList.toggle('sm', ch < 470);
    Object.assign(hi.style, { left: Math.round(gl + cw + gap) + 'px', top: Math.round(ty) + 'px', width: Math.round(iw) + 'px', height: Math.round(ch - 24) + 'px' }); hi.classList.toggle('sm', iw < 400 || ch < 470); hi.classList.toggle('xs', ch < 400); } catch (e) { } }; }

/* v7.3 : beaux boutons de mode */
{ const _mn8 = SCR.menu; SCR.menu = function () { let h = _mn8.apply(this, arguments); const k = rankOf(S.rp), r = typeof rkOn === 'function' && rkOn(), gst = typeof NET !== 'undefined' && NET.role === 2;
  const md = `<div class="mb7 ${gst ? 'gst' : ''}"><button class="mb7b n ${r ? '' : 'on'}" data-a="mode" data-v="n"><span class="mi">${ic('swords')}</span><span class="mt"><b>NORMALE</b><small>Pour s’amuser</small></span>${r ? '' : '<i class="ck">✔</i>'}</button><button class="mb7b r ${r ? 'on' : ''}" data-a="mode" data-v="r" style="--rc:${k.c}"><span class="mi">${ic('crown')}</span><span class="mt"><b>CLASSÉE</b><small>${gst ? 'Le chef choisit' : k.n}</small></span>${r ? '<i class="ck">✔</i>' : ''}</button></div>`;
  return h.replace(/<div class="md7 hmd7[^"]*">[\s\S]*?<\/button><\/div>/, md); }; }

/* ================= v7.4 : page TENUES refaite — un gardien à la fois, 5 tenues en cartes, une barre d'action ================= */
{ const RAR = [['CLASSIQUE', '#a8b0c8'], ['RARE', '#5aa8ff'], ['ÉPIQUE', '#c58bff'], ['LÉGENDAIRE', '#ffd45e'], ['MYTHIQUE', '#ff7ad8']], hx = c => '#' + c.toString(16).padStart(6, '0');
  SCR.skins = () => { if (!SKP) SKP = S.hero + ':' + skinOf(S.hero); let [ph, pk0] = SKP.split(':'); if (!HEROES[ph]) { ph = S.hero; pk0 = '0'; } const pk = +pk0 || 0, D = skDef(ph, pk), own = S.owned.includes(ph), has = skOwn(ph, pk), on = skinOf(ph) === pk, cur = D.curr === 'coins' ? 'coin' : 'prism';
    const chips = HERO_IDS.map(h => `<button class="sk7h ${h === ph ? 'on' : ''} ${S.owned.includes(h) ? '' : 'off'}" data-a="skPick" data-v="${h}:${skinOf(h)}" style="--rc:${HEROES[h].col}"><em>${himg(h, 0)}</em><b>${HEROES[h].n}</b><i>${[0, 1, 2, 3, 4].filter(k => skOwn(h, k)).length}/5</i></button>`).join('');
    const card = k => { const d = skDef(ph, k), hs = skOwn(ph, k), eq = own && skinOf(ph) === k, rc = RAR[k][1]; return `<button class="sk7c ${k === pk ? 'sel' : ''} ${hs ? '' : 'lk'} ${k >= 4 ? 'my' : ''}" data-a="skPick" data-v="${ph}:${k}" style="--rc:${rc};--ac:${k ? hx(d.acc) : HEROES[ph].col}"><span class="sk7q">${RAR[k][0]}</span><em>${himg(ph, k)}</em><b>${d.n}</b><span class="st ${eq ? 'eq' : hs ? 'ok' : ''}">${eq ? 'ÉQUIPÉE ✓' : hs ? 'POSSÉDÉE' : d.cost + ' ' + ic(d.curr === 'coins' ? 'coin' : 'prism')}</span></button>`; };
    const desc = !own ? 'Débloque d’abord ' + HEROES[ph].n + ' pour porter ses tenues' : pk >= 4 ? 'Tenue MYTHIQUE : ailes ou couronne, cercle de runes, aura et lueur en partie' : pk ? 'Change les couleurs du gardien, de son arme et de ses tirs' : 'La tenue de départ du gardien';
    return head('TENUES', SKBK) + `<div class="body sk7"><div class="sk7s">${chips}</div><div class="sk7r">${[0, 1, 2, 3, 4].map(card).join('')}</div>
      <div class="sk7f ${pk >= 4 ? 'my' : ''}" style="--rc:${RAR[pk][1]}"><span class="sk7q">${RAR[pk][0]}</span><span class="sk7t"><b>${D.n}</b><small>${HEROES[ph].n} · ${desc}</small></span>
      <button class="btn big ${!own || on || (!has && (S[D.curr] || 0) < D.cost) ? 'gray' : ''}" data-a="skDo">${!own ? ic('lock') + ' VERROUILLÉ' : on ? 'ÉQUIPÉE ✓' : has ? 'ÉQUIPER' : 'ACHETER ' + D.cost + ' ' + ic(cur)}</button></div></div>`; }; }

/* v7.5 : page des gardiens plus simple — sans barres de stats ni bandeau d'astuce */
{ const _h9 = SCR.hero; SCR.hero = function () { let h = _h9.apply(this, arguments);
  h = h.replace(/<div class="col" style="width:100%;gap:8px">(?:<div class="row">[\s\S]*?<\/div><\/div>){3}<\/div>/, '');
  h = h.replace(/<div class="pn grow row sub"[^>]*><img class="ici[^>]*>\s*Survis à[^<]*<\/div>/, '');
  return h; }; }
