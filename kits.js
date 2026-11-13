'use strict';
/* ================= v7.0 : KITS DES GARDIENS =================
   Chaque gardien a maintenant : un passif, E (bouton 1), A (bouton 2), un Combo (bouton 3, qui s'allume quand sa condition est remplie) et R (l'ultime).
   Adapté de la fiche de Nolhan à l'échelle du jeu mobile (PV, distances, pas de Défense ni d'affinité d'élément).
   Tout est calculé chez l'hôte ; les invités reçoivent l'état par l'instantané (ks, al). */
const KM = 60;                                   // 1 mètre de la fiche = 60 unités du jeu
const KDEF = {
  kaelion: { n: 'Kaelion', cls: 'Paladin de l’Aube', role: 'Combattant', pv: 23, pas: ['Lumière de l’Aube', 'Tes coups marquent l’ennemi. Frapper une cible marquée te donne un petit bouclier (jusqu’à 18 % de tes PV). Il s’estompe hors combat.'],
    E: ['Lame de l’Aube', 4.5, 'Une grande lame de lumière frappe en arc devant toi.', 'Arc devant toi'], A: ['Rayon Gardien', 12, 'Un rayon sacré t’entoure 4 s : -50 % de dégâts subis et brûlure autour de toi.', '4 s · -50 % dégâts subis'],
    C: ['Rétribution solaire', 25, 'Les dégâts reçus pendant Rayon Gardien sont encore réduits de moitié, puis renvoyés ×2 à tous les monstres autour.', 'Pendant Rayon Gardien'], R: ['Explosion Solaire', 'Après une courte charge, une explosion solaire brûle tout dans un large cercle.', 'Grande explosion'] },
  elyra: { n: 'Elyra', cls: 'Sorcière du Phénix', role: 'Mage', pv: 20, pas: ['Renaissance du Phénix', 'Si Elyra tombe pendant que son phénix vole, elle prend sa place avec 50 % de ses PV. Chaque phénix abattu donne +5 % d’Attaque jusqu’à la fin de la partie.'],
    E: ['Envol Flamboyant', 5, 'Un phénix tourne autour d’Elyra et crache du feu. Il reste tant qu’il a des PV.', 'Invoque le phénix'], A: ['Lien de Braise', 5, 'Un lien de feu relie Elyra au phénix pendant 5 s et brûle tout ce qui le traverse.', 'Lien de feu 5 s'],
    C: ['Danse du Phénix', 15, 'Le phénix tourne sur un cercle trois fois plus large en continuant d’attaquer.', 'Le Lien brûle un ennemi'], R: ['Ascension du Phénix', 'Monte le phénix 10 s (plus rapide, moitié moins de dégâts subis), puis plonge en onde de choc.', 'Chevauche le phénix'] },
  aria: { n: 'Aria', cls: 'Barde des Glaces', role: 'Support', pv: 21, pas: ['Chant Apaisant', 'Toutes les 4 s, une note soigne l’allié le plus blessé (Aria comprise). Chaque coup rapproche la note suivante. Ses pas laissent du givre qui ralentit.'],
    E: ['Onde Mélodique', 4, 'Une vague musicale en ligne droite blesse les ennemis traversés et soigne Aria et les alliés touchés.', 'Vague qui blesse et soigne'], A: ['Chant de Sérénité', 12, 'Un chant de 3 s : soin de 35 % de leur vie pour Aria et les alliés proches, ennemis fortement ralentis.', 'Soin 35 % · ralentit'],
    C: ['Harmonie protectrice', 30, 'Tous les alliés sont insensibles aux dégâts pendant 5 s.', 'Ralentir 5 ennemis pendant le Chant'], R: ['Explosion Harmonique', 'Une onde frappe et étourdit tous les ennemis dans un large cercle, et soigne de 20 % Aria et les alliés touchés.', 'Étourdit · soin 20 %'] },
  vesper: { n: 'Vesper', cls: 'Lame de l’Ombre', role: 'Assassin', pv: 18, pas: ['Marque du Crépuscule', 'Chaque coup pose la Marque de l’Ombre ; un marqué sous 15 % de vie est exécuté (hors boss). Chaque exécution recharge tes compétences et fait monter la Chaîne (+5 % de vitesse et de dégâts par palier).'],
    E: ['Pas de l’Ombre', 5, 'Réapparais derrière l’ennemi visé et poignarde-le : critique garanti, dégâts doublés. S’il meurt dans les 1,5 s, le Pas revient aussitôt.', 'Téléportation + critique'], A: ['Danse des Ombres', 9, 'Deux clones combattent 7 s, marquent et exécutent comme toi et copient ton Pas de l’Ombre.', '2 clones · 7 s'],
    C: ['Échos de la Nuit', 30, 'Les clones restent jusqu’à la prochaine Nuit Éternelle et la reproduisent.', 'Un clone exécute un monstre'], R: ['Nuit Éternelle', 'Intouchable 3,5 s, Vesper bondit d’ennemi en ennemi, puis exécute les marqués sous 30 % de vie (hors boss) et explose.', 'Bonds + exécutions'] },
  brakkor: { n: 'Brakkor', cls: 'Titan de la Forge', role: 'Tank', pv: 24, pas: ['Peau de Magma', '-30 % de dégâts subis. Chaque coup subi chauffe la forge : à 4 charges, une nova de magma explose, donne un bouclier de 20 % des PV et un soin de 6 %.'],
    E: ['Frappe de l’Enclume', 7, 'Une onde de choc en ligne étourdit et enflamme. Plus tu as de PV, plus elle frappe fort.', 'Ligne · étourdit · brûle'], A: ['Forge Vivante', 9, 'Une forge posée 10 s tire des boulets de métal en fusion.', 'Tourelle 10 s'],
    C: ['Forge éternelle', 25, 'La Forge Vivante ne disparaît plus et A redevient disponible.', 'La Forge tue 10 monstres'], R: ['Colère du Volcan', 'Pendant 5,5 s, des éruptions jaillissent sous les ennemis et tu subis moitié moins de dégâts.', 'Éruptions 5,5 s'] },
  nyxara: { n: 'Dex', cls: 'Joueur d’Ombres', role: 'Polyvalent', pv: 19, pas: ['Jeu des Ombres', 'Ses compétences se rechargent 1,5 fois plus vite. À chaque vague il lance un dé : 1 à 4, il copie les compétences d’un autre gardien ; 5, il garde les siennes ; 6, il les garde avec des recharges divisées par deux.'],
    E: ['Main Chanceuse', 12, 'Pendant 6 s, +20 % d’Attaque et de chance de critique, +5 % de plus par point d’affinité.', '6 s · attaque et critique'], A: ['Voile d’Ombre', 13, 'Intangible 1 s par point d’affinité (1 s au moins).', 'Intangible'],
    C: null, R: ['Lancer du Destin', 'Un dé, puis une frappe en grand cône. 1 à 3 : dégâts × le résultat. 4 à 6 : encore plus fort, et E et A sont remis à zéro.', 'Dé + frappe en cône'] }
};
const KIDS = Object.keys(KDEF), KCOPY = ['kaelion', 'elyra', 'aria', 'vesper', 'brakkor'];
/* ---- données : noms, classes, PV, et les 4 pouvoirs de base de chaque gardien deviennent ceux de la fiche ---- */
for (const h of KIDS) { const D = KDEF[h], H = HEROES[h]; if (!H) continue; H.n = D.n; H.cls = D.cls; H.hp = Math.round(D.pv * 6.5); H.kit = 1;
  const ids = H.tox, set = (id, n, cd, d, mn) => { const T = TOX[id]; if (!T) return; T.n = n; T.d = d; T.kmn = mn; T.kit = 1; if (cd) T.cd = cd; T.t = 'kit'; };
  set(ids[0], D.E[0], D.E[1], D.E[2], D.E[3]); set(ids[1], D.A[0], D.A[1], D.A[2], D.A[3]);
  if (D.C) set(ids[2], 'Combo · ' + D.C[0], D.C[1], D.C[2] + ' Condition : ' + D.C[3].toLowerCase() + '.', 'Si : ' + D.C[3]); else set(ids[2], 'Pas de combo', 99, 'Dex n’a pas de combo : il copie ceux des autres gardiens.', 'Aucun');
  set(ids[3], D.R[0], 0, D.R[1], D.R[2]); if (TOX[ids[3]]) TOX[ids[3]].ult = 1;
  if (typeof COMBOS !== 'undefined') COMBOS[h] = []; }
{ const _tfx = tfx; tfx = function (T, l) { if (T && T.kit) return (T.ult ? 'Ultime' : 'Recharge ' + (T.cd >= 99 ? '—' : tcd(T, l) + ' s')) + ' · niveau ' + l + ' : dégâts et soins ×' + tk(l).toFixed(2); return _tfx(T, l); };
  const _tmn = tmn; tmn = function (T, l, up) { if (T && T.kit) return up ? '+12 % de puissance' : T.kmn; return _tmn(T, l, up); }; }

/* ---- outils ---- */
const kOwn = by => by && (by.own || by), kIsKit = p => p && p.k && typeof p.k === 'object';
const kd = p => p.base * p.mods.dmg;
const kHeal = (q, amt) => { if (!q || q.dead || q.gone) return; amt = Math.round(amt); if (amt <= 0 || q.hp >= q.maxhp) return; q.hp = Math.min(q.maxhp, q.hp + amt); addTxt(q.x, q.y, 180, '+' + amt, '#8cff7a', 1); };
const kStun = (e, t) => { if (!e || e.dead) return; if (e.m.boss) e.stun = Math.max(e.stun || 0, t * .5); else e.kst = Math.max(e.kst || 0, t); };
const kBurn = (e, dps, t, by) => { if (e && !e.dead) e.kbn = { t, dps, by, n: 0 }; };
const kNear = (x, y, max, skip) => { let b = null, bd = max; for (const e of G.en) { if (e.dead || (skip && skip.has(e.uid))) continue; const d = hyp(e.x - x, e.y - y) - e.r; if (d < bd) { bd = d; b = e; } } return b; };
const kLine = (x, y, ax, ay, len, wid, fn) => { for (const e of G.en.slice()) { if (e.dead) continue; const dx = e.x - x, dy = e.y - y, t = dx * ax + dy * ay; if (t < -e.r || t > len + e.r) continue; if (Math.abs(dx * ay - dy * ax) < wid / 2 + e.r) fn(e); } };
const kCone = (p, ang, half, range, fn) => { for (const e of G.en.slice()) { if (e.dead) continue; const dx = e.x - p.x, dy = e.y - p.y, d = hyp(dx, dy); if (d > range + e.r) continue; let da = Math.atan2(dy, dx) - ang; while (da > Math.PI) da -= 6.283; while (da < -Math.PI) da += 6.283; if (Math.abs(da) < half || d < e.r + 70) fn(e); } };
const kSeg = (x1, y1, x2, y2, px, py) => { const dx = x2 - x1, dy = y2 - y1, l2 = dx * dx + dy * dy || 1, t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / l2)); return hyp(px - x1 - dx * t, py - y1 - dy * t); };
const kAng = p => Math.atan2(p.fy, p.fx);
/* effet texturé, envoyé aussi aux invités */
function KV(cell, x, y, h, s0, s1, col, life, flat, spin, ang, op) { try { R3.vfx(cell, x, y, h, s0, s1, col, life, flat ? 1 : 0, spin || 0, 0, 0, op || 1, ang); } catch (e) { } evp(['v', cell, x | 0, y | 0, h | 0, s0 | 0, s1 | 0, col, life, flat ? 1 : 0, spin || 0, ang === undefined ? null : +ang.toFixed(2), op || 1]); }
{ const _pe = playEv; playEv = function (a) { if (a && a[0] === 'v') { try { R3.vfx(a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], 0, 0, a[12] || 1, a[11] === null ? undefined : a[11]); } catch (e) { } return; } return _pe(a); }; }
/* alliés invoqués (phénix, forge, clones, lien de feu) */
const kAl = () => G ? (G.al = G.al || []) : [];
function kAdd(a) { a.id = (G.aid = (G.aid | 0) + 1); a.mods = a.own.mods; a.hp = a.hp || 1; a.maxhp = a.maxhp || 1; a.dead = false; kAl().push(a); return a; }
const kMine = (p, al) => kAl().filter(a => a.own === p && (!al || a.al === al));
const kDel = a => { const L = kAl(), i = L.indexOf(a); if (i >= 0) L.splice(i, 1); };
function kClone(p, x, y) { const c = mkPlayer({ hero: p.hero, name: '', skin: p.skin }, 0, 1); c.k = null; c.al = 'clone'; c.own = p; c.x = x; c.y = y; c.inv = 0; c.t = 7; c.ft = .3; c.fx = p.fx; c.fy = p.fy; c.mv = 0; return kAdd(c); }

/* ---- état du kit ---- */
function kNew(p, id) { const o = p.k && typeof p.k === 'object' ? p.k : (p.k = {}); o.id = id; o.cr = 0; o.st = ''; o.sh = o.sh || 0; const D = KDEF[id]; p.cdm.a = D.E[1]; p.cdm.b = D.A[1]; p.cdm.c = D.C ? D.C[1] : 99; for (const a of kMine(p)) kDel(a); o.ray = o.ret = o.link = o.dance = o.ride = o.ch = o.night = o.volc = o.luck = 0; o.echo = 0; o.eternal = 0; o.fk = 0; o.ch4 = 0; o.note = 4; o.ex = 0; o.tier = o.tier || 0; return o; }
const kKit = (p, slot) => { if (!kIsKit(p)) return null; if (p.k.dex && p.k.id !== 'nyxara') return p.k.id; const T = TOX[p.tx[slot]]; return T && T.kit ? p.k.id : null; };
{ const _mk = mkPlayer; mkPlayer = function (info, i, n) { const p = _mk(info, i, n); if (info && KDEF[info.hero] && info.name !== '') { kNew(p, info.hero); if (info.hero === 'nyxara') { p.k.dex = 1; p.k.aff = Math.max(1, Math.min(5, Math.floor(((p.tl[0] | 0) + (p.tl[1] | 0) + (p.tl[2] | 0) + (p.tl[3] | 0)) / 4))); p.mods.cdr /= 1.5; p.k.die = 5; p.k.dw = 0; } } return p; }; }

/* ---- compétences ---- */
const KS = {
  kaelion: {
    E(p, K) { const a = kAng(p), d = kd(p) * 3.2 * K; kCone(p, a, 1.05, 350, e => dmgE(e, d, false, p)); KV(13, p.x + Math.cos(a) * 190, p.y + Math.sin(a) * 190, 8, 260, 620, '#ffe9a8', .32, 1, 0, -a + 1.571); KV(13, p.x + Math.cos(a) * 150, p.y + Math.sin(a) * 150, 9, 200, 460, '#ffffff', .22, 1, 0, -a + 1.571, .8); addFx(p.x + Math.cos(a) * 200, p.y + Math.sin(a) * 200, 120, '#ffd45e', .25); G.shake = Math.max(G.shake, .18); gsnd('salve'); },
    A(p) { p.k.ray = 4; p.k.rayT = 0; addPil(p.x, p.y, 120, 1300, '#ffe27a', 1); KV(2, p.x, p.y, 6, 200, 560, '#ffd45e', .8, 1, 2); gsnd('heal'); announce('RAYON GARDIEN', '#ffd45e'); },
    C(p) { p.k.ret = p.k.ray; announce('RÉTRIBUTION SOLAIRE', '#ffb52e'); KV(4, p.x, p.y, 70, 200, 700, '#ffd45e', .4, 0, 2); gsnd('ultc'); },
    R(p, K) { addFx(p.x, p.y, 760, '#ffb52e', .6); KV(2, p.x, p.y, 6, 760, 200, '#ffd45e', .6, 1, -4); fdo(.6, () => { if (p.dead) return; aoe(p, p.x, p.y, 760, kd(p) * 9 * K, 300); addFx(p.x, p.y, 900, '#ffd45e', .8); addFx(p.x, p.y, 500, '#ffffff', .5); addPil(p.x, p.y, 200, 1600, '#ffd45e', 1.1); KV(7, p.x, p.y, 80, 300, 1300, '#ffb52e', .5, 0, 1); KV(9, p.x, p.y, 8, 300, 1500, '#ff9a2e', 1.1, 1, .5, undefined, .6); G.shake = .8; G.flash = .5; evp(['sh', .8, .5]); gsnd('boom'); }); },
    tick(p, dt) { const k = p.k; if (G.t - (k.lh || 0) > 3 && k.sh > 0) k.sh = Math.max(0, k.sh - p.maxhp * .03 * dt);
      if (k.ray > 0) { k.ray -= dt; k.ret = Math.max(0, (k.ret || 0) - dt); k.rayT -= dt; if (k.rayT <= 0) { k.rayT = .5; aoe(p, p.x, p.y, 270, kd(p) * .9 * tk(p.tl[1]), 0); addFx(p.x, p.y, 270, '#ffd45e', .3); KV(12, p.x + rnd(-150, 150), p.y + rnd(-150, 150), 50, 80, 190, '#ffb52e', .45, 0, 1); addPil(p.x, p.y, 70, 900, '#ffe27a', .5); } } else k.ret = 0;
      k.cr = k.ray > 0 && !(k.ret > 0); k.st = k.sh >= 1 ? 'Bouclier ' + Math.round(k.sh) : k.ray > 0 ? 'Rayon ' + k.ray.toFixed(1) + ' s' : ''; },
    hit(p, e) { const k = p.k; if (e.kmk > G.t && G.t - (k.pt || 0) >= .25) { k.pt = G.t; k.sh = Math.min(p.maxhp * .18, k.sh + 2 + p.maxhp * .01); } e.kmk = G.t + 4; k.lh = G.t; },
    hurt(p, d) { const k = p.k; if (k.ray > 0) d *= .5; if (k.ret > 0) { const back = d * 2; d *= .5; aoe(p, p.x, p.y, 430, back * (1 + .25 * G.wave), 200); addFx(p.x, p.y, 430, '#ffb52e', .35); KV(7, p.x, p.y, 60, 150, 600, '#ffd45e', .3, 0, 1); } return d; }
  },
  elyra: {
    phx(p) { return kMine(p, 'phx')[0]; },
    call(p) { let a = this.phx(p); if (a) { a.hp = a.maxhp; a.inv = 1; return a; } a = kAdd({ al: 'phx', own: p, x: p.x + 170, y: p.y, ang: 0, rad: 170, hp: p.maxhp * 4, maxhp: p.maxhp * 4, inv: 3, ft: .4 }); addPil(a.x, a.y, 90, 900, '#ff7a2e', .8); KV(12, a.x, a.y, 80, 120, 420, '#ff7a2e', .5, 0, 1); gsnd('heal'); return a; },
    E(p) { this.call(p); announce('ENVOL FLAMBOYANT', '#ff7a2e'); },
    A(p) { if (!this.phx(p)) this.call(p); p.k.link = 5; p.k.linkT = 0; gsnd('onde'); },
    C(p) { p.k.dance = 8; announce('DANSE DU PHÉNIX', '#ffb52e'); gsnd('ultc'); },
    R(p, K) { const a = this.call(p); a.inv = 10.5; p.k.ride = 10; p.k.rideK = K; p.buff = { t: 10, rate: 1.7, spd: 1.5 }; addPil(p.x, p.y, 130, 1400, '#ff7a2e', 1); KV(11, p.x, p.y, 60, 200, 520, '#ffb52e', .6, 0, 0); gsnd('ult'); },
    tick(p, dt) { const k = p.k, a = this.phx(p);
      if (a) { const tr = k.ride > 0 ? 0 : k.dance > 0 ? 510 : 170; a.rad += (tr - a.rad) * Math.min(1, dt * 3); a.ang += dt * (k.dance > 0 ? 3.4 : 2.3); a.x = p.x + Math.cos(a.ang) * a.rad; a.y = p.y + Math.sin(a.ang) * a.rad; a.fx = -Math.sin(a.ang); a.fy = Math.cos(a.ang); a.inv -= dt;
        a.ft -= dt; if (a.ft <= 0) { const e = kNear(a.x, a.y, 620); if (e) { const an = Math.atan2(e.y - a.y, e.x - a.x); G.sh.push({ x: a.x, y: a.y, vx: Math.cos(an) * 820, vy: Math.sin(an) * 820, r: 20, dmg: kd(p) * 1.75 * tk(p.tl[0]), crit: false, pierce: 1, life: .8, col: '#ff7a2e', by: p }); a.ft = k.ride > 0 ? .28 : .6; } else a.ft = .2; }
        if (a.inv <= 0) for (const e of G.en) if (hyp(e.x - a.x, e.y - a.y) < e.r + 55) a.hp -= e.dmg * dt * 2;
        if (a.hp <= 0) { kDel(a); k.stk = (k.stk | 0) + 1; p.mods.dmg *= 1.05; addFx(a.x, a.y, 260, '#ff7a2e', .5); KV(8, a.x, a.y, 60, 120, 420, '#ff9a5e', .8, 0, .5, undefined, .6); addTxt(p.x, p.y, 220, '+5 % ATTAQUE', '#ffb52e', 1); k.link = 0; k.dance = 0; } }
      if (k.link > 0 && a) { k.link -= dt; k.linkT -= dt; if (k.linkT <= 0) { k.linkT = .3; const d = kd(p) * 1.1 * tk(p.tl[1]); for (const e of G.en.slice()) if (!e.dead && kSeg(p.x, p.y, a.x, a.y, e.x, e.y) < 46 + e.r) { dmgE(e, d, false, p); kBurn(e, d * .4, 2, p); k.lhit = G.t; } const mx = (p.x + a.x) / 2, my = (p.y + a.y) / 2; KV(12, mx + rnd(-30, 30), my + rnd(-30, 30), 50, 60, 150, '#ff7a2e', .35, 0, 1); } } else k.link = 0;
      if (k.dance > 0) k.dance -= dt;
      if (k.ride > 0) { k.ride -= dt; if (Math.random() < dt * 9) KV(11, p.x + rnd(-40, 40), p.y + rnd(-40, 40), 30, 70, 150, '#ff7a2e', .4, 0, 0); if (k.ride <= 0) { aoe(p, p.x, p.y, 540, kd(p) * 8 * (k.rideK || 1), 500); addFx(p.x, p.y, 540, '#ff7a2e', .6); addFx(p.x, p.y, 320, '#ffffff', .35); addPil(p.x, p.y, 150, 1200, '#ff7a2e', 1); KV(9, p.x, p.y, 8, 200, 1100, '#ff7a2e', 1, 1, .6, undefined, .6); G.shake = .7; evp(['sh', .7, .3]); gsnd('boom'); if (a) a.inv = 1; } }
      let b = kMine(p, 'beam')[0]; if (k.link > 0 && a) { if (!b) b = kAdd({ al: 'beam', own: p, x: 0, y: 0, col: '#ff7a2e' }); b.x = p.x; b.y = p.y; b.x2 = a.x; b.y2 = a.y; } else if (b) kDel(b);
      k.cr = !!a && G.t - (k.lhit || -99) < 6 && !(k.dance > 0); k.st = a ? 'Phénix ' + Math.max(1, Math.round(100 * a.hp / a.maxhp)) + ' %' + (k.stk ? ' · +' + k.stk * 5 + ' % atq' : '') : (k.stk ? '+' + k.stk * 5 + ' % atq' : ''); },
    hurt(p, d) { const k = p.k; if (k.ride > 0) d *= .5; const a = this.phx(p); if (a && d >= p.hp && !p.revive) { kDel(a); p.hp = Math.round(p.maxhp * .5); p.inv = 2; p.blink = 1; k.link = 0; k.dance = 0; k.ride = 0; addFx(p.x, p.y, 420, '#ff7a2e', .7); addPil(p.x, p.y, 130, 1500, '#ffb52e', 1.1); KV(11, p.x, p.y, 70, 200, 600, '#ffb52e', .7, 0, 0); announce('RENAISSANCE DU PHÉNIX', '#ff7a2e'); gsnd('heal'); return 0; } return d; }
  },
  aria: {
    E(p, K) { const a = kAng(p), ax = Math.cos(a), ay = Math.sin(a); G.sh.push({ x: p.x + ax * 50, y: p.y + ay * 50, vx: ax * 900, vy: ay * 900, r: 62, dmg: kd(p) * 2.2 * K, crit: false, pierce: 99, life: .95, col: '#8ae8ff', by: p });
      kHeal(p, p.maxhp * .08 * K); for (const q of alive()) if (q !== p) { const dx = q.x - p.x, dy = q.y - p.y, t = dx * ax + dy * ay; if (t > 0 && t < 860 && Math.abs(dx * ay - dy * ax) < 130) kHeal(q, q.maxhp * .08 * K); }
      for (let i = 1; i <= 4; i++) KV(0, p.x + ax * i * 190, p.y + ay * i * 190, 6, 60, 260, '#8ae8ff', .35 + i * .06, 1); KV(5, p.x + ax * 80, p.y + ay * 80, 60, 80, 260, '#ffffff', .3, 0, 2); gsnd('salve'); },
    A(p) { p.k.ch = 3; p.k.chT = 0; p.k.chS = new Set(); addPil(p.x, p.y, 110, 1100, '#8ae8ff', 1); announce('CHANT DE SÉRÉNITÉ', '#8ae8ff'); gsnd('heal'); },
    C(p) { for (const q of alive()) { q.inv = Math.max(q.inv, 5); q.sh = 5; addPil(q.x, q.y, 100, 1300, '#bfe8ff', 1); KV(2, q.x, q.y, 6, 120, 380, '#bfe8ff', .8, 1, 2); } announce('HARMONIE PROTECTRICE', '#bfe8ff'); gsnd('ultc'); },
    R(p, K) { aoe(p, p.x, p.y, 660, kd(p) * 7 * K, 200, e => kStun(e, 2)); for (const q of alive()) if (hyp(q.x - p.x, q.y - p.y) < 660) kHeal(q, q.maxhp * .2); addFx(p.x, p.y, 660, '#8ae8ff', .7); addFx(p.x, p.y, 400, '#ffffff', .4); KV(2, p.x, p.y, 6, 300, 1300, '#8ae8ff', .9, 1, 1.5); KV(1, p.x, p.y, 7, 200, 1400, '#bfe8ff', .7, 1); for (let i = 0; i < 8; i++) addPil(p.x + Math.cos(i * .785) * 380, p.y + Math.sin(i * .785) * 380, 50, 900, '#8ae8ff', .8); G.shake = .6; evp(['sh', .6, .3]); gsnd('boom'); },
    tick(p, dt) { const k = p.k; k.note -= dt; if (k.note <= 0) { let b = null, br = .999; for (const q of alive()) if (hyp(q.x - p.x, q.y - p.y) < 12 * KM) { const r = q.hp / q.maxhp; if (r < br) { br = r; b = q; } } if (b) { kHeal(b, b.maxhp * .06); KV(15, b.x, b.y, 110, 40, 150, '#8cff7a', .5, 0, 1); k.note = 4; } else k.note = .5; }
      k.tr = k.tr || []; k.trT = (k.trT || 0) - dt; if (p.mv > .15 && k.trT <= 0) { k.trT = .16; k.tr.push([p.x, p.y, G.t + 2.2]); KV(14, p.x, p.y, 5, 150, 190, '#8ad8ff', 2.2, 1, 0, undefined, .35); } while (k.tr.length && k.tr[0][2] < G.t) k.tr.shift();
      k.trS = (k.trS || 0) - dt; if (k.trS <= 0 && k.tr.length) { k.trS = .3; for (const e of G.en) for (const t of k.tr) if (hyp(e.x - t[0], e.y - t[1]) < 95 + e.r) { e.slowT = Math.max(e.slowT || 0, .7); break; } }
      if (k.ch > 0) { k.ch -= dt; k.chT -= dt; if (k.chT <= 0) { k.chT = .5; const K = tk(p.tl[1]); for (const q of alive()) if (hyp(q.x - p.x, q.y - p.y) < 8 * KM) kHeal(q, q.maxhp * .35 / 6 * K); for (const e of G.en) if (hyp(e.x - p.x, e.y - p.y) < 8 * KM + e.r) { e.slowT = Math.max(e.slowT || 0, 1.2); k.chS.add(e.uid); } addFx(p.x, p.y, 8 * KM, '#8ae8ff', .45); KV(15, p.x + rnd(-200, 200), p.y + rnd(-200, 200), 90, 40, 130, '#bfe8ff', .5, 0, 1); } }
      k.cr = k.ch > 0 && k.chS && k.chS.size >= 5; k.st = k.ch > 0 ? 'Ralentis : ' + Math.min(5, k.chS.size) + ' / 5' : 'Note dans ' + Math.max(1, Math.ceil(k.note)) + ' s'; },
    hit(p) { p.k.note -= .15; }
  },
  vesper: {
    exec(p, e, by) { if (e.dead) return; e.kex = 1; KV(13, e.x, e.y, 60, 80, 260, '#d06bff', .25, 0, 6); addTxt(e.x, e.y, e.r * 2.6, 'EXÉCUTÉ', '#d06bff', 1); _kDmg(e, e.hp + 1, true, by || p);
      const k = p.k; p.cd.a = Math.max(0, p.cd.a - .7); p.cd.b = Math.max(0, p.cd.b - .7); p.ult = Math.min(100, p.ult + 1.5); k.ex = (k.ex | 0) + 1; k.exT = G.t + 2.5; if (by && by.al === 'clone') k.cex = G.t; this.tier(p); },
    tier(p) { const k = p.k, t = k.ex >= 8 ? 4 : k.ex >= 5 ? 3 : k.ex >= 3 ? 2 : k.ex >= 2 ? 1 : 0; if (t === (k.tier | 0)) return; const f = (1 + .05 * t) / (1 + .05 * (k.tier | 0)); p.mods.dmg *= f; p.mods.spd *= f; if (t > (k.tier | 0)) { announce('CHAÎNE ×' + [1, 2, 3, 5, 8][t], '#d06bff'); gsnd('combo', 10); } k.tier = t; },
    stab(src, p, e, mult) { const dx = e.x - src.x, dy = e.y - src.y, d = hyp(dx, dy) || 1, ox = src.x, oy = src.y; src.x = e.x + dx / d * (e.r + 48); src.y = e.y + dy / d * (e.r + 48); clampR(src, AR - 60); src.fx = -dx / d; src.fy = -dy / d; src.atk = .25;
      addFx(ox, oy, 90, '#b07bff', .3); KV(8, ox, oy, 50, 60, 200, '#7a4ad0', .4, 0, .5, undefined, .6); KV(13, e.x, e.y, 60, 120, 330, '#e0b0ff', .22, 0, 8); e.kmk = G.t + 6; dmgE(e, kd(p) * mult, true, src); },
    E(p, K) { const a = kAng(p), e = kNear(p.x + Math.cos(a) * 240, p.y + Math.sin(a) * 240, 700) || kNear(p.x, p.y, 900); if (!e) { p.cd.a = .3; return; } this.stab(p, p, e, 4 * K); if (p.remote) evp(['tp', p.i, p.x | 0, p.y | 0]); p.inv = Math.max(p.inv, .35); p.k.et = { u: e.uid, t: G.t + 1.5 }; if (e.dead) p.cd.a = 0;
      const used = new Set([e.uid]); for (const c of kMine(p, 'clone')) { const t = kNear(c.x, c.y, 800, used); if (t) { used.add(t.uid); this.stab(c, p, t, 2 * K); } } gsnd('dash'); },
    A(p) { for (const c of kMine(p, 'clone')) kDel(c); for (const s of [-1, 1]) { const c = kClone(p, p.x + p.fy * 90 * s, p.y - p.fx * 90 * s); addFx(c.x, c.y, 110, '#7a4ad0', .4); KV(8, c.x, c.y, 60, 80, 260, '#7a4ad0', .5, 0, .5, undefined, .7); } p.k.echo = 0; announce('DANSE DES OMBRES', '#b07bff'); gsnd('pick'); },
    C(p) { p.k.echo = 1; for (const c of kMine(p, 'clone')) c.t = 9999; announce('ÉCHOS DE LA NUIT', '#d06bff'); gsnd('ultc'); },
    R(p, K) { const k = p.k; k.night = 3.5; k.nK = K; k.nT = 0; k.nEx = 0; k.nAdd = 0; k.nSeen = new Set(); p.inv = Math.max(p.inv, 3.7); G.ecl = 1.6; gsnd('ult'); },
    tick(p, dt) { const k = p.k; if (k.ex && G.t > k.exT) { k.ex = 0; this.tier(p); }
      const cl = kMine(p, 'clone'); for (const c of cl) { c.t -= dt; c.atk -= dt; c.blink = 0; if (c.t <= 0) { addFx(c.x, c.y, 90, '#7a4ad0', .3); kDel(c); continue; } if (k.night > 0) continue; const e = kNear(c.x, c.y, 900); if (!e) { c.mv = 0; continue; } const dx = e.x - c.x, dy = e.y - c.y, d = hyp(dx, dy) || 1; c.fx = dx / d; c.fy = dy / d; if (d > e.r + 110) { c.x += dx / d * 430 * dt; c.y += dy / d * 430 * dt; c.mv = 1; c.mvx = c.fx; c.mvy = c.fy; } else c.mv = 0; c.ft -= dt; if (c.ft <= 0 && d < e.r + 150) { c.ft = .45; c.atk = .2; dmgE(e, kd(p) * .6, false, c); } }
      if (k.night > 0) { k.night -= dt; p.inv = Math.max(p.inv, .3); k.nT -= dt; if (k.nT <= 0) { k.nT = .22; let e = kNear(p.x, p.y, 1000, k.nSeen); if (!e) { k.nSeen.clear(); e = kNear(p.x, p.y, 1000); } if (e) { k.nSeen.add(e.uid); this.stab(p, p, e, 3 * k.nK); if (p.remote) evp(['tp', p.i, p.x | 0, p.y | 0]); if (k.echo) for (const c of cl) { const t = kNear(c.x, c.y, 900, k.nSeen) || e; if (!t.dead) this.stab(c, p, t, 1.8 * k.nK); } gsnd('crit'); } }
        if (k.night <= 0) { for (const e of G.en.slice()) if (!e.dead && !e.m.boss && e.kmk > G.t && e.hp < e.max * .3) { this.exec(p, e); k.nEx++; if (k.nAdd < 1) { k.nAdd += .25; k.night += .25; } } if (k.night <= 0) { const m = 1 + Math.min(1, .1 * k.nEx); aoe(p, p.x, p.y, 470, kd(p) * 6 * k.nK * m, 300); addFx(p.x, p.y, 470, '#b07bff', .6); addFx(p.x, p.y, 280, '#ffffff', .35); KV(7, p.x, p.y, 70, 200, 900, '#d06bff', .45, 0, 1); KV(3, p.x, p.y, 8, 300, 900, '#7a4ad0', .9, 1, -6, undefined, .7); G.shake = .7; evp(['sh', .7, .3]); gsnd('boom'); if (k.echo) { for (const c of cl) { addFx(c.x, c.y, 200, '#b07bff', .4); kDel(c); } k.echo = 0; } } } }
      k.cr = cl.length > 0 && !k.echo && G.t - (k.cex || -99) < 8; k.st = k.tier ? 'Chaîne ×' + [1, 2, 3, 5, 8][k.tier] : ''; },
    hit(p, e, d, crit, by) { e.kmk = G.t + 6; if (!e.dead && !e.m.boss && e.hp < e.max * .15) this.exec(p, e, by); },
    kill(p, e) { const k = p.k; if (k.et && k.et.u === e.uid && G.t < k.et.t) { p.cd.a = 0; k.et = null; } }
  },
  brakkor: {
    forges(p) { return kMine(p, 'forge'); },
    E(p, K) { const a = kAng(p), ax = Math.cos(a), ay = Math.sin(a), d = (kd(p) * 3 + p.maxhp * .06) * K; kLine(p.x, p.y, ax, ay, 740, 160, e => { dmgE(e, d, false, p); kStun(e, 1.2); kBurn(e, kd(p) * .5, 3, p); });
      for (let i = 1; i <= 5; i++) { const x = p.x + ax * i * 140, y = p.y + ay * i * 140; addPil(x, y, 46, 500 + i * 60, '#ff9d3d', .5 + i * .05); KV(12, x, y, 40, 90, 240, '#ff7a2e', .45 + i * .04, 0, 1); KV(0, x, y, 6, 60, 240, '#ffb52e', .4, 1); } G.shake = .45; evp(['sh', .45, 0]); gsnd('slam'); },
    A(p) { const L = this.forges(p); if (L.length >= (p.k.eternal ? 2 : 1)) kDel(L[0]); const a = kAng(p), f = kAdd({ al: 'forge', own: p, x: p.x + Math.cos(a) * 130, y: p.y + Math.sin(a) * 130, t: p.k.eternal ? 9999 : 10, ft: .5 }); clampR(f, AR - 80); addPil(f.x, f.y, 80, 900, '#ff9d3d', .8); KV(7, f.x, f.y, 50, 100, 380, '#ff9d3d', .35, 0, 1); gsnd('slam'); },
    C(p) { p.k.eternal = 1; for (const f of this.forges(p)) f.t = 9999; p.cd.b = 0; announce('FORGE ÉTERNELLE', '#ff9d3d'); gsnd('ultc'); },
    R(p, K) { p.k.volc = 5.5; p.k.vK = K; p.k.vT = 0; addPil(p.x, p.y, 150, 1500, '#ff5a1e', 1.1); G.shake = .5; gsnd('ult'); },
    tick(p, dt) { const k = p.k; for (const f of this.forges(p)) { f.t -= dt; if (f.t <= 0) { addFx(f.x, f.y, 120, '#ff9d3d', .3); kDel(f); continue; } f.ft -= dt; if (f.ft <= 0) { const e = kNear(f.x, f.y, 760); if (e) { const an = Math.atan2(e.y - f.y, e.x - f.x); f.fx = Math.cos(an); f.fy = Math.sin(an); G.sh.push({ x: f.x, y: f.y, vx: Math.cos(an) * 760, vy: Math.sin(an) * 760, r: 26, dmg: kd(p) * 2 * tk(p.tl[1]), crit: false, pierce: 1, life: 1, col: '#ff9d3d', by: f }); f.ft = .7; KV(11, f.x, f.y, 70, 50, 130, '#ffb52e', .25, 0, 0); } else f.ft = .2; } }
      if (k.volc > 0) { k.volc -= dt; k.vT -= dt; if (k.vT <= 0) { k.vT = .35; const pool = G.en.filter(e => !e.dead && hyp(e.x - p.x, e.y - p.y) < 950); for (let i = 0; i < 4 && pool.length; i++) { const e = pool.splice((Math.random() * pool.length) | 0, 1)[0], x = e.x, y = e.y, d = kd(p) * 2.5 * k.vK; addFx(x, y, 135, '#ff5a1e', .25); fdo(.25, () => { aoe(p, x, y, 135, d, 0); addPil(x, y, 60, 800, '#ff5a1e', .6); KV(11, x, y, 70, 100, 320, '#ff7a2e', .5, 0, 0); KV(9, x, y, 7, 80, 300, '#ff5a1e', .7, 1, .5, undefined, .5); }); } } }
      k.cr = this.forges(p).length > 0 && !k.eternal && (k.fk | 0) >= 10; k.st = (k.sh >= 1 ? 'Bouclier ' + Math.round(k.sh) + ' · ' : '') + 'Forge ' + (k.ch4 | 0) + ' / 4' + (this.forges(p).length && !k.eternal ? ' · ' + Math.min(10, k.fk | 0) + ' / 10 tués' : ''); },
    hurt(p, d) { const k = p.k; d *= .7; if (k.volc > 0) d *= .5; k.ch4 = (k.ch4 | 0) + 1; if (k.ch4 >= 4) { k.ch4 = 0; aoe(p, p.x, p.y, 330, kd(p) * 3, 300); k.sh = p.maxhp * .2; kHeal(p, p.maxhp * .06); addFx(p.x, p.y, 330, '#ff5a1e', .5); KV(7, p.x, p.y, 60, 150, 620, '#ff7a2e', .4, 0, 1); KV(9, p.x, p.y, 8, 150, 700, '#ff5a1e', .8, 1, .5, undefined, .6); gsnd('boom'); } return d; },
    kill(p, e, by) { if (by && by.al === 'forge') p.k.fk = (p.k.fk | 0) + 1; }
  },
  nyxara: {
    E(p) { const k = p.k, m = .2 + .05 * k.aff; if (k.luck > 0) { k.luck = 6; return; } k.luck = 6; k.lm = m; p.mods.dmg *= 1 + m; p.mods.crit += m; addPil(p.x, p.y, 90, 1000, '#ffd45e', .9); KV(15, p.x, p.y, 120, 60, 260, '#ffd45e', .6, 0, 2); announce('MAIN CHANCEUSE', '#ffd45e'); gsnd('pick'); },
    A(p) { const t = Math.max(1, p.k.aff); p.inv = Math.max(p.inv, t); p.sh = t; addFx(p.x, p.y, 160, '#7a4ad0', .5); KV(8, p.x, p.y, 60, 120, 380, '#7a4ad0', .7, 0, .5, undefined, .7); gsnd('dash'); },
    C() { },
    R(p, K) { const k = p.k, r = 1 + ((Math.random() * 6) | 0), a = kAng(p), big = r >= 4, d = kd(p) * 3 * K * r * (big ? 1 + .2 * k.aff : 1); announce('DÉ : ' + r + (big ? ' · COUP DE CHANCE !' : ''), big ? '#ffd45e' : '#d06bff'); kCone(p, a, .95, 640, e => dmgE(e, d, big, p));
      for (let i = 1; i <= 4; i++) KV(13, p.x + Math.cos(a) * i * 140, p.y + Math.sin(a) * i * 140, 8, 200 + i * 60, 420 + i * 110, big ? '#ffd45e' : '#d06bff', .3 + i * .05, 1, 0, -a + 1.571); KV(4, p.x + Math.cos(a) * 200, p.y + Math.sin(a) * 200, 80, 150, 600, '#ffffff', .25, 0, 2, undefined, .6); addFx(p.x, p.y, 640, big ? '#ffd45e' : '#d06bff', .5); G.shake = .3 + r * .08; evp(['sh', .5, .2]); gsnd('boom'); if (big) { p.cd.a = 0; p.cd.b = 0; } },
    tick(p, dt) { const k = p.k; if (k.luck > 0) { k.luck -= dt; if (k.luck <= 0) { p.mods.dmg /= 1 + k.lm; p.mods.crit -= k.lm; } } k.cr = 0; k.st = 'Dé : ' + k.die + ' · affinité ' + k.aff; }
  }
};
/* le dé de Dex : à chaque nouvelle vague */
function kDexRoll(p) { const k = p.k; if (k.luck > 0) { p.mods.dmg /= 1 + k.lm; p.mods.crit -= k.lm; k.luck = 0; } if (k.tier) { k.ex = 0; KS.vesper.tier(p); } if (k.cdk === .5) p.mods.cdr *= 2; k.cdk = 1;
  const r = 1 + ((Math.random() * 6) | 0); k.die = r; let id = 'nyxara', msg; if (r <= 4) { id = KCOPY[(Math.random() * KCOPY.length) | 0]; msg = 'DÉ : ' + r + ' · Dex copie ' + KDEF[id].n; } else if (r === 5) msg = 'DÉ : 5 · Dex garde ses compétences'; else { msg = 'DÉ : 6 · recharges divisées par deux !'; k.cdk = .5; p.mods.cdr *= .5; }
  kNew(p, id); k.dex = 1; p.cd.a = p.cd.b = 0; p.cd.c = 0; announce(msg, '#d06bff'); addPil(p.x, p.y, 90, 1000, '#d06bff', .9); evp(['kx', p.i, id]); if (p === G.p) kIcons(id); }
function kIcons(id) { try { const ids = HEROES[id].tox; ['a', 'b', 'c', 'u'].forEach((k, i) => { const im = document.querySelector('#b' + k + ' img.tic'); if (im) im.src = 'img/tx/' + ids[i] + '.webp'; }); const b = $('#k7n'); if (b) b.textContent = KDEF[id].C ? KDEF[id].C[0] : 'Pas de combo'; const c = $('#k7q'); if (c) c.textContent = KDEF[id].C ? KDEF[id].C[3] : 'Dex copie les autres gardiens'; } catch (e) { } }
{ const _pe2 = playEv; playEv = function (a) { if (a && a[0] === 'kx') { if (G && a[1] === G.me) kIcons(a[2]); return; } return _pe2(a); }; }

/* ---- branchements dans le moteur ---- */
let _kIn = 0; const _kDmg = dmgE;
dmgE = function (e, d, crit, by) { _kDmg(e, d, crit, by); const p = kOwn(by); if (_kIn || !kIsKit(p) || NETROLE === 2) return; const S2 = KS[p.k.id]; if (S2 && S2.hit) { _kIn = 1; try { S2.hit(p, e, d, crit, by); } catch (x) { } _kIn = 0; } };
{ const _kill = kill; kill = function (e) { const by = e.by, p = kOwn(by); if (by && by.al && !by.mods) by.mods = (p && p.mods) || { leech: 0 }; _kill(e); if (kIsKit(p)) { const S2 = KS[p.k.id]; if (S2 && S2.kill) { try { S2.kill(p, e, by); } catch (x) { } } } };
  const _hurt = hurt; hurt = function (p, d) { if (!kIsKit(p) || !p || p.dead || p.gone || p.inv > 0 || !G || G.state !== 'play') return _hurt(p, d); const S2 = KS[p.k.id]; if (S2 && S2.hurt) { try { d = S2.hurt(p, d); } catch (x) { } } const k = p.k; if (d > 0 && k.sh > 0) { const a = Math.min(k.sh, d); k.sh -= a; d -= a; if (d <= 0) { p.inv = .35; addTxt(p.x, p.y, 170, 'BOUCLIER', '#ffe27a', 1); spark(p.x, p.y, '#ffe27a', 6); return; } } if (d <= 0) return; return _hurt(p, d); };
  const _skill = skill; skill = function (k, p) { if (!G || G.state !== 'play' || NETROLE === 2) return _skill(k, p); p = p || G.p; if (!kIsKit(p) || p.dead || k === 'd') return _skill(k, p);
    const slot = { a: 0, b: 1, c: 2, u: 3 }[k], id = kKit(p, slot); if (!id) return _skill(k, p); const lv = p.tl[slot] || (p.k.dex && p.k.id !== 'nyxara' ? 1 : 0); if (!lv) return _skill(k, p); const S2 = KS[id], K = tk(lv), D = KDEF[id];
    if (k === 'u') { if (p.ult < 100) return; p.ult = 0; gsnd('ultc'); if (p === G.p) vib(60); cine({ t: .9, f: p, zoom: 1.7, title: D.R[0].toUpperCase(), sub: D.n, col: p.h.col, end() { try { S2.R(p, K); } catch (x) { } } }); return; }
    if (p.cd[k] > 0) return; if (k === 'c') { if (!D.C) { if (p === G.p) toast('Dex n’a pas de combo'); return; } if (!p.k.cr) { if (p === G.p) { snd('no'); toast('Combo pas prêt : ' + D.C[3].toLowerCase()); } return; } }
    _skill(k, p); if (!(p.cd[k] > 0)) return; p.cd[k] = p.cdm[k] * p.mods.cdr; p.atk = .2; try { S2[k === 'a' ? 'E' : k === 'b' ? 'A' : 'C'](p, K); } catch (x) { } if (k === 'c') { G.shake = Math.max(G.shake, .4); } };
  const _upd = update; update = function (dt) { if (!G || NETROLE === 2 || G.state !== 'play') return _upd(dt);
    const held = []; for (const e of G.en) { if (e.kst > 0) { e.kst -= dt; held.push([e, e.x, e.y]); e.cd = Math.max(e.cd, .4); } if (e.kbn) { const b = e.kbn; b.t -= dt; b.n += dt; if (b.n >= .5) { b.n = 0; _kDmg(e, b.dps * .5, false, b.by); } if (b.t <= 0 || e.dead) e.kbn = null; } }
    _upd(dt); for (const h of held) if (!h[0].dead) { h[0].x = h[1]; h[0].y = h[2]; }
    if (!G || G.state !== 'play') return; for (const p of G.ps) { if (!kIsKit(p) || p.gone) continue; const k = p.k; if (k.dex && G.wave !== k.dw) { const first = !k.dw; k.dw = G.wave; if (!first) kDexRoll(p); } if (p.dead) { for (const a of kMine(p)) kDel(a); k.cr = 0; continue; } const S2 = KS[k.id]; if (S2 && S2.tick) { try { S2.tick(p, dt); } catch (x) { } } }
    const L = G.al; if (L) for (let i = L.length - 1; i >= 0; i--) if (!L[i].own || L[i].own.gone) L.splice(i, 1); }; }
/* instantané pour les invités : état du kit + alliés invoqués */
{ const AK = ['phx', 'forge', 'beam', 'clone'];
  const _sn = snapshot; snapshot = function () { const d = _sn(), r = Math.round; d.ks = G.ps.map(p => kIsKit(p) ? [p.k.cr ? 1 : 0, p.k.st || ''] : 0); d.al = (G.al || []).map(a => [a.id, AK.indexOf(a.al), r(a.x), r(a.y), a.al === 'beam' ? r(a.x2) : +(a.fx || 0).toFixed(2), a.al === 'beam' ? r(a.y2) : +(a.fy || 1).toFixed(2), G.ps.indexOf(a.own), a.atk > 0 ? 1 : 0, a.mv ? 1 : 0]); return d; };
  const _as = applySnap; applySnap = function (d) { _as(d); if (!G || NETROLE !== 2 || !d) return; if (d.ks) d.ks.forEach((s, i) => { const p = G.ps[i]; if (p && s) { p.k = p.k && typeof p.k === 'object' ? p.k : { id: p.hero }; p.k.cr = s[0]; p.k.st = s[1]; } });
    if (d.al) { const old = new Map((G.al || []).map(a => [a.id, a])); G.al = d.al.map(s => { let a = old.get(s[0]); const own = G.ps[s[6]] || G.p, kind = AK[s[1]]; if (!a) { a = kind === 'clone' ? Object.assign(mkPlayer({ hero: own.hero, name: '', skin: own.skin }, 0, 1), { k: null }) : {}; a.id = s[0]; a.al = kind; a.own = own; a.col = '#ff7a2e'; } a.x = s[2]; a.y = s[3]; if (kind === 'beam') { a.x2 = s[4]; a.y2 = s[5]; } else { a.fx = s[4]; a.fy = s[5]; a.mvx = s[4]; a.mvy = s[5]; } a.atk = s[7] ? .2 : 0; a.mv = s[8]; a.inv = 0; a.blink = 0; return a; }); } }; }
/* ---- affichage en partie : combo (nom, condition, prêt ou non) et état du passif ---- */
{ const _ht = hudTick; hudTick = function () { _ht(); const p = G.p; if (!kIsKit(p)) return; const id = p.k.id || p.hero, D = KDEF[id] || KDEF[p.hero];
    if (!$('#k7c')) { const box = $('#cmbs'); if (!box) return; box.insertAdjacentHTML('beforeend', `<div class="cmb k7" id="k7c"><b id="k7n">${D.C ? D.C[0] : 'Pas de combo'}</b><span id="k7q">${D.C ? D.C[3] : 'Dex copie les autres gardiens'}</span></div><div class="k7p" id="k7p"></div>`); }
    const rdy = !!p.k.cr && !(p.cd.c > 0); hset('k7c', 'cls', 'cmb k7' + (rdy ? ' go' : '')); hset('k7p', 'text', p.k.st || ''); hset('bc', 'cls', 'ab' + (p.tl[2] || p.k.dex ? '' : ' lk') + (rdy ? ' rdy cnx' : ' k7w')); }; }
/* fiche du gardien : passif affiché dans le choix du gardien */
{ const _hr = SCR.hero; SCR.hero = function () { let h = _hr.apply(this, arguments); const D = KDEF[SEL]; if (!D) return h; return h.replace(/<button class="btn vio" data-a="go" data-v="htox"/, `<div class="k7pas"><b>${D.role} · Passif : ${D.pas[0]}</b><span>${D.pas[1]}</span></div><button class="btn vio" data-a="go" data-v="htox"`); }; }
