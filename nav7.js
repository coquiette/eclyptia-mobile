'use strict';
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
