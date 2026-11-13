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
/* v7.4 : les 7 nouveaux gardiens (fiche de Nolhan, adaptée au jeu mobile) */
Object.assign(KDEF, {
  aaron: { n: 'Aaron', cls: 'Cavalier Dimensionnel', role: 'Duelliste', pv: 19, pas: ['Système de Phase Inversé', 'Traverser un portail étourdit les ennemis à la sortie et libère 2 échos d’ombre qui frappent à 35 % de tes dégâts tant que les portails restent ouverts (recharge 6 s).'],
    E: ['Portails Jumeaux', 4, 'Pose un portail sous toi et un second 9 m devant. Pendant 8 s, ce qui entre dans l’un ressort par l’autre.', '2 portails · 8 s'], A: ['Ligne de Faille', 4.5, 'Une fracture relie tes portails 2,5 s : blessures répétées, ralentit et marque d’une Faille (+15 % de dégâts subis). Sans portails, elle part devant toi, plus large.', 'Fracture 2,5 s'],
    C: ['Attraction dimensionnelle', 15, 'Les portails attirent violemment les monstres proches et les écrasent.', 'Un monstre traverse un portail'], R: ['Phase Totale', '6 s intouchable et plus rapide : tu blesses tout ce que tu traverses, puis une onde étourdit autour de toi.', 'Intangible 6 s'] },
  seren: { n: 'Seren', cls: 'Chasseresse Lunaire', role: 'Tireuse', pv: 20, pas: ['Clair de Lune', 'Tes coups à plus de 7 m posent la Marque Lunaire. Tous les 4 coups lointains, un rayon de lune frappe la cible et soigne de 5 % Seren et les alliés proches.'],
    E: ['Volée Lunaire', 7, 'Un éventail de 7 flèches d’argent qui transpercent et marquent.', '7 flèches perçantes'], A: ['Puits de Lune', 10, 'Un puits de 6 s soigne les alliés à l’intérieur et ralentit les ennemis.', 'Puits 6 s · soin'],
    C: ['Renaissance lunaire', 30, 'La prochaine Éclipse Lunaire rend 100 % de leurs PV à tous les alliés.', 'Tuer 10 monstres de loin'], R: ['Éclipse Lunaire', 'Pendant 4 s, une pluie de flèches célestes, puis l’équipe récupère 20 % de vie.', 'Pluie de flèches 4 s'] },
  sahra: { n: 'Sahra', cls: 'Danseuse des Sables', role: 'Mage', pv: 19, pas: ['Danse des Sables', 'Chaque attaque ralentit l’ennemi touché. +5 % d’Attaque par ennemi ralenti (10 max). Une zone de sable t’entoure : elle grandit et fait plus mal avec les charges.'],
    E: ['Sables Mouvants', 5, 'Pendant 6 s, tes attaques ralentissent plus longtemps et laissent du sable au sol.', '6 s · sable au sol'], A: ['Dune Protectrice', 12, 'Une dune se dresse sous toi 3 s : elle encaisse tous les coups et blesse les ennemis à son pied.', 'Bouclier de sable 3 s'],
    C: ['Chute de sable', 18, 'Une zone de sable se forme sous chaque ennemi ralenti et le blesse pendant 5 s.', 'La dune se termine'], R: ['Tempête de Sable', 'Une marée de sable déferle en ligne droite : gros dégâts, puis zone qui ralentit sur tout le passage pendant 5 s.', 'Vague de sable'] },
  aurion: { n: 'Aurion', cls: 'Jouteur Mécanique', role: 'Combattant', pv: 22, pas: ['Destrier du Zénith', 'PV +30 % et dégâts subis réduits. Tant qu’il avance sans s’arrêter, sa vitesse grimpe jusqu’à ×2 en 10 s. S’il tombe, il est désarçonné : 50 % de PV, à pied, sans compétences, plus lent. Il remonte à la vague suivante (ou avec R après 60 s).'],
    E: ['Charge de Joute', 6.5, 'Charge en ligne droite qui empale et emporte les ennemis. Plus tu vas vite, plus elle frappe fort. Le mur t’étourdit et écrase les empalés.', 'Charge · empale'], A: ['Rempart d’Acier', 16, 'Pendant 10 s, -55 % de dégâts subis, mais tes armes cessent d’attaquer.', 'Défense 10 s'],
    C: ['Charge triomphale', 40, 'Ta prochaine Charge Triomphale dure 2 s de plus et rebondit vers les ennemis proches.', '15 monstres entraînés'], R: ['Charge Triomphale', 'Embroche l’ennemi le plus proche, le projette vers le plus gros groupe, puis charge 3 s dans cette direction en empalant tout.', 'Charge de 3 s'] },
  ashryn: { n: 'Ashryn', cls: 'Sang-Dragon des Plaines', role: 'Tank', pv: 23, pas: ['Peau de Dragon', '-20 % de dégâts subis, -40 % quand un ennemi qui brûle est tout près.'],
    E: ['Tourbillon de Braise', 7, 'Deux frappes tout autour qui enflamment. Pendant 5 s, +25 % de dégâts et chaque attaque brûle.', '2 tourbillons · 5 s'], A: ['Envol Draconique', 11, 'Vol jusqu’à 9 m, invulnérable, puis écrasement dans une gerbe de flammes qui étourdit.', 'Saut · étourdit'],
    C: ['Éternuement draconique', 18, 'Une énorme explosion de feu en cône.', 'L’envol touche 8 monstres'], R: ['Ciel de Feu', 'Intouchable 5 s dans les airs : pluie de feu sur toute la carte, puis retombée en explosion qui étourdit.', 'Pluie de feu 5 s'] },
  golem: { n: 'Golem', cls: 'Colosse de Cristal', role: 'Tank', pv: 26, pas: ['Cœur de Cristal', 'À la fin de chaque vague, tes éclats deviennent des PV max (+1 PV par 4 éclats). Le Marchand te coûte 20 % plus cher.'],
    E: ['Faim de Cristal', 6, 'Pendant 5 s, chaque éclat ramassé en donne 1 de plus.', 'Éclats ×2 · 5 s'], A: ['Petit Golem', 7, 'Dépense 20 éclats pour invoquer 10 s un petit golem solide qui attire les monstres (hors boss) et laisse tomber des éclats.', '20 éclats · 10 s'],
    C: ['Surcharge cristalline', 10, 'Consomme la moitié de tes éclats et frappe en cercle selon le nombre que tu avais.', 'Plus d’éclats que de PV max'], R: ['Forteresse de Cristal', 'Soin de 15 % des PV max + 1 PV par 4 éclats : 60 % tout de suite, le reste en 10 s.', 'Gros soin'] },
  arven: { n: 'Arven', cls: 'Souverain des Marées', role: 'Duelliste', pv: 21, pas: ['Maîtrise des Marées', 'Chaque Danse des Trois Marées réussie donne une charge : +5 % de dégâts par charge (5 max) et -1 s de recharge de la Danse. Un coup de la Danse dans le vide fait perdre toutes les charges.'],
    E: ['Danse des Trois Marées', 6, 'Trois coups enchaînés (touche E à nouveau) : Tranchant Aquatique, Fouet des Marées, Percée des Abysses. Chacun ne se débloque que si le précédent touche.', '3 coups enchaînés'], A: ['Rempart des Marées', 12, 'Un mur d’eau t’entoure 6 s : il a sa propre vie, absorbe coups et tirs et repousse les monstres.', 'Mur d’eau 6 s'],
    C: ['Marée haute', 20, '+30 % d’Attaque tant que la Maîtrise reste à 5 charges.', 'Réussir la Danse à 5 charges'], R: ['Souverain des Marées', 'Remet la Danse à zéro. Pendant 10 s : +50 % d’Attaque, vol de vie, régénération, et un combo raté n’a plus de pénalité.', 'Puissance 10 s'] } });
const KIDS = Object.keys(KDEF), KCOPY = ['kaelion', 'elyra', 'aria', 'vesper', 'brakkor', 'aaron', 'seren', 'sahra', 'ashryn', 'arven'];
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
/* ================= v7.4 : compétences des 7 nouveaux gardiens ================= */
const kOwnW = p => Math.max(0, (G.shards | 0) - (p.spent | 0));       // éclats du joueur
const kTp = p => { clampR(p, AR - 60); if (p.remote) evp(['tp', p.i, p.x | 0, p.y | 0]); };
const kMul = (p, key, f) => { p.mods[key] *= f; };                    // modificateur réversible
/* IA simple des invocations qui se battent (échos d'Aaron, petit golem) */
function kFight(p, c, dt, dmg, rate, sp) { const e = kNear(c.x, c.y, 900); c.atk -= dt; c.blink = 0; if (!e) { c.mv = 0; return; } const dx = e.x - c.x, dy = e.y - c.y, d = hyp(dx, dy) || 1; c.fx = dx / d; c.fy = dy / d;
  if (d > e.r + 110) { c.x += dx / d * sp * dt; c.y += dy / d * sp * dt; c.mv = 1; c.mvx = c.fx; c.mvy = c.fy; } else c.mv = 0; c.ft -= dt; if (c.ft <= 0 && d < e.r + 150) { c.ft = rate; c.atk = .2; dmgE(e, dmg, false, c); } }
/* charge d'Aurion : avance en ligne, empale, s'arrête au mur */
function kChargeStep(p, dt) { const k = p.k, c = k.chg; if (!c) return; c.t -= dt; p.inv = Math.max(p.inv, .15);
  if (c.bounce && (c.rt = (c.rt || 0) - dt) <= 0) { c.rt = .8; const e = kNear(p.x + c.ax * 300, p.y + c.ay * 300, 900, c.hit); if (e) { const dx = e.x - p.x, dy = e.y - p.y, d = hyp(dx, dy) || 1; c.ax = dx / d; c.ay = dy / d; } }
  p.x += c.ax * c.sp * dt; p.y += c.ay * c.sp * dt; p.fx = c.ax; p.fy = c.ay; p.mvx = c.ax; p.mvy = c.ay; p.mv = 1;
  const wall = hyp(p.x, p.y) > AR - 90;
  for (const e of G.en) { if (e.dead) continue; const dx = e.x - p.x, dy = e.y - p.y; if (hyp(dx, dy) > p.r + e.r + 40) continue; if (!c.hit.has(e.uid)) { c.hit.add(e.uid); dmgE(e, kd(p) * c.dm, false, p); if (!e.m.boss && c.imp.length < 12) { c.imp.push(e); k.drag = (k.drag | 0) + 1; } } }
  c.imp = c.imp.filter(e => !e.dead); c.imp.forEach((e, i) => { const o = p.r + e.r + 10 + (i % 3) * 22, s = ((i % 3) - 1) * 46; e.x = p.x + c.ax * o - c.ay * s; e.y = p.y + c.ay * o + c.ax * s; e.kx = e.ky = 0; e.kst = Math.max(e.kst || 0, .2); });
  if (Math.random() < dt * 14) KV(9, p.x - c.ax * 60, p.y - c.ay * 60, 20, 60, 160, c.col, .5, 1, .4, undefined, .5);
  if (wall && c.bounce && c.t > .4) { c.ax = -p.x / (hyp(p.x, p.y) || 1); c.ay = -p.y / (hyp(p.x, p.y) || 1); c.rt = .3; }
  if (wall && !c.bounce) { for (const e of c.imp) { dmgE(e, kd(p) * 3 * c.K, true, p); kStun(e, 1.5); } addFx(p.x, p.y, 320, '#ffe9a8', .5); KV(7, p.x, p.y, 60, 150, 560, '#ffd45e', .4, 0, 1); G.shake = .6; evp(['sh', .6, .2]); gsnd('slam'); k.stun = 1.5; k.sx = p.x; k.sy = p.y; c.t = 0; announce('MUR !', '#ffe9a8'); }
  kTp(p); if (c.t <= 0) { for (const e of c.imp) { e.kx = c.ax * 600; e.ky = c.ay * 600; } k.chg = null; if (c.end) c.end(); } }

Object.assign(KS, {
  aaron: {
    pts(p) { return kMine(p, 'portal'); },
    E(p) { for (const a of this.pts(p)) kDel(a); const an = kAng(p), x2 = p.x + Math.cos(an) * 9 * KM, y2 = p.y + Math.sin(an) * 9 * KM, b = { x: x2, y: y2 }; clampR(b, AR - 110);
      const A = kAdd({ al: 'portal', own: p, x: p.x, y: p.y, t: 8 }), B = kAdd({ al: 'portal', own: p, x: b.x, y: b.y, t: 8 }); A.o = B; B.o = A; p.k.ppt = G.t + .8;
      for (const q of [A, B]) { addPil(q.x, q.y, 70, 900, '#8a6aff', .7); KV(3, q.x, q.y, 6, 80, 260, '#b07bff', .6, 1, 4); } gsnd('dash'); },
    A(p, K) { const L = this.pts(p); let x1 = p.x, y1 = p.y, x2, y2, w = 70; if (L.length === 2) { x1 = L[0].x; y1 = L[0].y; x2 = L[1].x; y2 = L[1].y; w = 52; } else { const an = kAng(p); x2 = p.x + Math.cos(an) * 720; y2 = p.y + Math.sin(an) * 720; }
      for (const b of kMine(p, 'rift')) kDel(b); kAdd({ al: 'rift', own: p, x: x1, y: y1, x2, y2, t: 2.5, w, ft: 0, K }); gsnd('onde'); },
    C(p) { p.k.pull = 3; p.k.pullT = 0; p.k.trav = 0; announce('ATTRACTION DIMENSIONNELLE', '#b07bff'); gsnd('ultc'); },
    R(p, K) { const k = p.k; k.ph = 6; k.phK = K; kMul(p, 'spd', 1.5); p.inv = Math.max(p.inv, 6.2); addPil(p.x, p.y, 100, 1200, '#8a6aff', 1); KV(3, p.x, p.y, 6, 120, 600, '#b07bff', .8, 1, 6); G.ecl = 1.2; gsnd('ult'); },
    off(p) { const k = p.k; if (k.ph > 0) { kMul(p, 'spd', 1 / 1.5); k.ph = 0; } },
    tick(p, dt) { const k = p.k, L = this.pts(p);
      for (const a of L) { a.t -= dt; if (a.t <= 0) { addFx(a.x, a.y, 120, '#8a6aff', .3); kDel(a); } } const P2 = this.pts(p);
      if (P2.length === 2) { for (const a of P2) { if (Math.random() < dt * 5) KV(3, a.x, a.y, 6, 120, 150, '#8a6aff', .5, 1, 5, undefined, .7);
          for (const e of G.en) { if (e.dead || e.m.boss || (e.kpt || 0) > G.t || hyp(e.x - a.x, e.y - a.y) > 70 + e.r * .5) continue; const o = a.o, an = Math.random() * 6.283; e.x = o.x + Math.cos(an) * 90; e.y = o.y + Math.sin(an) * 90; e.kpt = G.t + 1.4; k.trav = 1; KV(4, o.x, o.y, 60, 60, 200, '#d0b0ff', .3, 0, 2); }
          if ((k.ppt || 0) < G.t && hyp(p.x - a.x, p.y - a.y) < 70) { const o = a.o; p.x = o.x; p.y = o.y; kTp(p); k.ppt = G.t + 1.2; addFx(o.x, o.y, 160, '#b07bff', .4); KV(4, o.x, o.y, 70, 80, 300, '#ffffff', .3, 0, 2); gsnd('dash');
            if ((k.pcd || 0) <= G.t) { k.pcd = G.t + 6; aoe(p, o.x, o.y, 230, kd(p) * 1.2, 300, e => kStun(e, 1.2)); addFx(o.x, o.y, 230, '#8a6aff', .45);
              for (const c of kMine(p, 'clone')) kDel(c); for (const sg of [-1, 1]) { const c = kClone(p, o.x + sg * 90, o.y); c.t = Math.max(a.t, 2); c.echo = 1; } announce('ÉCHOS D’OMBRE', '#b07bff'); } } } }
      for (const c of kMine(p, 'clone')) { c.t -= dt; if (c.t <= 0 || P2.length < 2) { addFx(c.x, c.y, 90, '#7a4ad0', .3); kDel(c); continue; } kFight(p, c, dt, kd(p) * .35 * 2, .4, 430); }
      for (const b of kMine(p, 'rift')) { b.t -= dt; if (b.t <= 0) { kDel(b); continue; } const pr = P2.length === 2 && b.w < 60; if (pr) { b.x = P2[0].x; b.y = P2[0].y; b.x2 = P2[1].x; b.y2 = P2[1].y; }
        b.ft -= dt; if (b.ft <= 0) { b.ft = .3; const d = kd(p) * .9 * b.K; for (const e of G.en.slice()) if (!e.dead && kSeg(b.x, b.y, b.x2, b.y2, e.x, e.y) < b.w + e.r) { dmgE(e, d, false, p); e.slowT = Math.max(e.slowT || 0, .8); e.kfl = G.t + 6; } const f = Math.random(); KV(13, b.x + (b.x2 - b.x) * f, b.y + (b.y2 - b.y) * f, 40, 80, 220, '#b07bff', .3, 0, 3); } }
      if (k.pull > 0) { k.pull -= dt; k.pullT -= dt; const ctr = P2.length ? P2 : [p]; for (const e of G.en) { if (e.dead || e.m.boss) continue; let c = null, cd = 560; for (const q of ctr) { const d = hyp(e.x - q.x, e.y - q.y); if (d < cd) { cd = d; c = q; } } if (!c || cd < 30) continue; const f = Math.min(cd, 900 * dt); e.x += (c.x - e.x) / cd * f; e.y += (c.y - e.y) / cd * f; }
        if (k.pullT <= 0) { k.pullT = .3; for (const q of ctr) { aoe(p, q.x, q.y, 160, kd(p) * .8, 0); KV(3, q.x, q.y, 6, 300, 120, '#8a6aff', .4, 1, -6); } } }
      if (k.ph > 0) { k.ph -= dt; p.inv = Math.max(p.inv, .2); for (const e of G.en.slice()) if (!e.dead && (e.kph || 0) < G.t && hyp(e.x - p.x, e.y - p.y) < p.r + e.r + 30) { e.kph = G.t + .5; dmgE(e, kd(p) * 2 * k.phK, false, p); KV(13, e.x, e.y, 50, 80, 220, '#d0b0ff', .25, 0, 6); }
        if (Math.random() < dt * 10) KV(8, p.x, p.y, 60, 60, 180, '#7a4ad0', .5, 0, .5, undefined, .5);
        if (k.ph <= 0) { kMul(p, 'spd', 1 / 1.5); aoe(p, p.x, p.y, 400, kd(p) * 3 * k.phK, 400, e => kStun(e, 1.5)); addFx(p.x, p.y, 400, '#8a6aff', .6); KV(3, p.x, p.y, 6, 200, 900, '#b07bff', .8, 1, -5); G.shake = .5; evp(['sh', .5, .2]); gsnd('boom'); } }
      k.cr = !!k.trav && !(k.pull > 0); k.st = P2.length === 2 ? 'Portails ' + Math.ceil(P2[0].t) + ' s' : (k.pcd > G.t ? 'Échos dans ' + Math.ceil(k.pcd - G.t) + ' s' : ''); },
    hit(p, e, d) { if (e.kfl > G.t && !e.dead) _kDmg(e, d * .15, false, p); }
  },
  seren: {
    E(p, K) { const a = kAng(p); for (let i = -3; i <= 3; i++) { const an = a + i * .13; G.sh.push({ x: p.x + Math.cos(an) * 40, y: p.y + Math.sin(an) * 40, vx: Math.cos(an) * 1150, vy: Math.sin(an) * 1150, r: 22, dmg: kd(p) * 2.1 * K, crit: false, pierce: 99, life: .9, col: '#e8f4ff', by: p }); }
      KV(5, p.x + Math.cos(a) * 70, p.y + Math.sin(a) * 70, 60, 60, 220, '#ffffff', .25, 0, 2); gsnd('salve'); },
    A(p, K) { for (const w of kMine(p, 'well')) kDel(w); kAdd({ al: 'well', own: p, x: p.x, y: p.y, t: 6, ft: 0, K }); addPil(p.x, p.y, 120, 1000, '#bfe0ff', .9); KV(2, p.x, p.y, 6, 120, 520, '#bfe0ff', .8, 1, 1); gsnd('heal'); },
    C(p) { p.k.reb = 1; p.k.fk = 0; announce('RENAISSANCE LUNAIRE', '#e8f4ff'); KV(1, p.x, p.y, 80, 100, 420, '#e8f4ff', .6, 0, 0); gsnd('ultc'); },
    R(p, K) { const k = p.k; k.ecl = 4; k.eK = K; k.eT = 0; G.ecl = 1; addPil(p.x, p.y, 140, 1500, '#e8f4ff', 1); gsnd('ult'); },
    tick(p, dt) { const k = p.k;
      for (const w of kMine(p, 'well')) { w.t -= dt; if (w.t <= 0) { kDel(w); continue; } w.ft -= dt; if (w.ft <= 0) { w.ft = .5; for (const q of alive()) if (hyp(q.x - w.x, q.y - w.y) < 270) kHeal(q, q.maxhp * .035 * w.K); for (const e of G.en) if (hyp(e.x - w.x, e.y - w.y) < 270 + e.r) e.slowT = Math.max(e.slowT || 0, 1); KV(15, w.x + rnd(-150, 150), w.y + rnd(-150, 150), 60, 40, 120, '#e8f4ff', .6, 0, 1); } }
      if (k.ecl > 0) { k.ecl -= dt; k.eT -= dt; if (k.eT <= 0) { k.eT = .1; const pool = G.en.filter(e => !e.dead && hyp(e.x - p.x, e.y - p.y) < 1100); const e = pool[(Math.random() * pool.length) | 0]; if (e) { const x = e.x, y = e.y; KV(13, x, y, 120, 60, 260, '#e8f4ff', .22, 0, 0, 1.571); fdo(.12, () => { aoe(p, x, y, 90, kd(p) * 1.7 * k.eK, 0); addPil(x, y, 26, 700, '#e8f4ff', .35); }); } }
        if (k.ecl <= 0) { const f = k.reb ? 1 : .2; for (const q of alive()) { kHeal(q, q.maxhp * f); addPil(q.x, q.y, 90, 1100, '#e8f4ff', .9); } announce(k.reb ? 'RENAISSANCE LUNAIRE' : 'LA LUNE VOUS SOIGNE', '#e8f4ff'); k.reb = 0; gsnd('heal'); } }
      k.cr = (k.fk | 0) >= 10 && !k.reb; k.st = k.reb ? 'Renaissance prête' : 'Tirs lointains ' + (k.fh | 0) + ' / 4' + ((k.fk | 0) < 10 ? ' · ' + (k.fk | 0) + ' / 10' : ''); },
    hit(p, e, d, crit, by) { if (by !== p || hyp(e.x - p.x, e.y - p.y) < 7 * KM) return; const k = p.k; e.kml = G.t + 6; k.fh = (k.fh | 0) + 1; if (k.fh < 4) return; k.fh = 0;
      if (!e.dead) dmgE(e, kd(p) * 2.5, true, p); addPil(e.x, e.y, 50, 1100, '#e8f4ff', .6); KV(1, e.x, e.y, 70, 60, 200, '#e8f4ff', .4, 0, 0); for (const q of alive()) if (hyp(q.x - p.x, q.y - p.y) < 8 * KM) kHeal(q, q.maxhp * .05); },
    kill(p, e, by) { if (by === p && hyp(e.x - p.x, e.y - p.y) > 7 * KM && !p.k.reb) p.k.fk = (p.k.fk | 0) + 1; }
  },
  sahra: {
    sand(p, x, y, r, t) { const k = p.k; (k.sp = k.sp || []).push([x, y, r, G.t + t]); if (k.sp.length > 40) k.sp.shift(); KV(9, x, y, 5, r * 1.6, r * 2, '#e8c06a', t, 1, .15, undefined, .4); },
    E(p) { p.k.qs = 6; announce('SABLES MOUVANTS', '#e8c06a'); KV(3, p.x, p.y, 6, 100, 360, '#e8c06a', .6, 1, 3); gsnd('onde'); },
    A(p) { const k = p.k; for (const d of kMine(p, 'dune')) kDel(d); const d = kAdd({ al: 'dune', own: p, x: p.x, y: p.y, t: 3, hp: p.maxhp * .7, maxhp: p.maxhp * .7, ft: 0 }); k.dune = d; addFx(p.x, p.y, 220, '#e8c06a', .4); KV(9, p.x, p.y, 6, 120, 360, '#e8c06a', .7, 1, .3); gsnd('slam'); },
    C(p) { const k = p.k; k.dend = -99; let n = 0; for (const e of G.en) if (!e.dead && e.slowT > 0) { kBurn(e, kd(p) * .9, 5, p); this.sand(p, e.x, e.y, 70, 5); n++; } announce('CHUTE DE SABLE · ' + n, '#e8c06a'); gsnd('ultc'); },
    R(p, K) { const a = kAng(p), ax = Math.cos(a), ay = Math.sin(a); const hitS = new Set(), d0 = kd(p) * 6 * K;
      for (let i = 1; i <= 8; i++) { const x = p.x + ax * i * 140, y = p.y + ay * i * 140; fdo(i * .14, () => { this.sand(p, x, y, 130, 5); KV(9, x, y, 40, 120, 340, '#ffd890', .6, 0, .5, undefined, .7); KV(12, x, y, 70, 80, 260, '#e8c06a', .45, 0, 1); for (const e of G.en.slice()) if (!e.dead && !hitS.has(e.uid) && hyp(e.x - x, e.y - y) < 150 + e.r) { hitS.add(e.uid); dmgE(e, d0, false, p); e.kx = ax * 500; e.ky = ay * 500; } }); } G.shake = .5; evp(['sh', .5, .2]); gsnd('boom'); },
    off(p) { const k = p.k; if (k.chm) { p.mods.dmg /= 1 + .05 * k.chm; k.chm = 0; } },
    tick(p, dt) { const k = p.k; k.qs = Math.max(0, (k.qs || 0) - dt);
      k.cT = (k.cT || 0) - dt; if (k.cT <= 0) { k.cT = .25; let n = 0; for (const e of G.en) if (!e.dead && e.slowT > 0) n++; n = Math.min(10, n); if (n !== (k.chm | 0)) { p.mods.dmg *= (1 + .05 * n) / (1 + .05 * (k.chm | 0)); k.chm = n; } }
      k.aT = (k.aT || 0) - dt; if (k.aT <= 0) { k.aT = .5; const r = 150 + 16 * (k.chm | 0); aoe(p, p.x, p.y, r, kd(p) * .3 * (1 + .1 * (k.chm | 0)), 0, e => { e.slowT = Math.max(e.slowT || 0, .7); }); KV(9, p.x, p.y, 5, r * 1.5, r * 1.9, '#e8c06a', .7, 1, .4, undefined, .3); }
      if (k.sp && k.sp.length) { k.sp = k.sp.filter(s => s[3] > G.t); k.sT = (k.sT || 0) - dt; if (k.sT <= 0) { k.sT = .3; for (const e of G.en) for (const s of k.sp) if (hyp(e.x - s[0], e.y - s[1]) < s[2] + e.r) { e.slowT = Math.max(e.slowT || 0, .6); break; } } }
      const d = k.dune; if (d) { d.x = p.x; d.y = p.y; d.t -= dt; d.ft -= dt; if (d.ft <= 0) { d.ft = .5; aoe(p, p.x, p.y, 210, kd(p) * .6, 120); }
        if (d.t <= 0 || d.hp <= 0) { kDel(d); k.dune = null; k.dend = G.t; addFx(p.x, p.y, 240, '#e8c06a', .45); KV(9, p.x, p.y, 20, 200, 420, '#e8c06a', .8, 0, .4, undefined, .6); } }
      k.cr = !k.dune && G.t - (k.dend || -99) < 8; k.st = 'Sable ' + (k.chm | 0) + ' / 10' + (k.dune ? ' · Dune ' + Math.round(100 * Math.max(0, k.dune.hp) / k.dune.maxhp) + ' %' : ''); },
    hit(p, e, d, crit, by) { if (e.dead) return; const k = p.k; e.slowT = Math.max(e.slowT || 0, k.qs > 0 ? 2.5 : 1.4); if (k.qs > 0 && G.t - (k.lsd || 0) > .2) { k.lsd = G.t; this.sand(p, e.x, e.y, 80, 4); } },
    hurt(p, d) { const k = p.k; if (k.dune && k.dune.hp > 0) { k.dune.hp -= d; addTxt(p.x, p.y, 170, 'DUNE', '#e8c06a', 1); KV(9, p.x, p.y, 30, 80, 200, '#e8c06a', .4, 0, .5, undefined, .6); return 0; } return d; }
  },
  aurion: {
    init(p) { const k = p.k; k.mount = 1; k.rf = 1; p.maxhp = Math.round(p.maxhp * 1.3); p.hp = p.maxhp; k.wv = G ? G.wave : 0; },
    can(p, key) { const k = p.k; if (k.mount) return true; if (key === 'u' && G.t - (k.foot || 0) >= 60) { this.mountUp(p); return false; } if (p === G.p) { snd('no'); toast('Désarçonné : pas de compétences' + (G.t - (k.foot || 0) < 60 ? ' (R rappelle le destrier dans ' + Math.ceil(60 - (G.t - k.foot)) + ' s)' : '')); } return false; },
    mountUp(p) { const k = p.k; if (k.mount) return; k.mount = 1; kMul(p, 'spd', 1 / .4); addPil(p.x, p.y, 110, 1200, '#ffe9a8', 1); KV(15, p.x, p.y, 100, 80, 300, '#ffe9a8', .6, 0, 1); announce('LE DESTRIER REVIENT', '#ffe9a8'); gsnd('heal'); },
    E(p, K) { const k = p.k, a = p.mv > .3 ? Math.atan2(p.mvy, p.mvx) : kAng(p), m = 1 + Math.min(1, (k.rt || 0) / 10); k.chg = { t: .75, ax: Math.cos(a), ay: Math.sin(a), sp: 1500, dm: 2.6 * m * K, K, hit: new Set(), imp: [], col: '#ffe9a8' }; gsnd('dash'); },
    A(p) { p.k.ram = 10; addPil(p.x, p.y, 100, 1100, '#c0c8d8', .9); KV(2, p.x, p.y, 6, 140, 420, '#e8d8a0', .8, 1, 2); announce('REMPART D’ACIER', '#e8d8a0'); gsnd('heal'); },
    C(p) { p.k.tri = 1; p.k.drag = 0; announce('CHARGE TRIOMPHALE PRÊTE', '#ffd45e'); gsnd('ultc'); },
    R(p, K) { const k = p.k, n0 = kNear(p.x, p.y, 1100); let best = null, bn = -1; for (const e of G.en) { if (e.dead) continue; let n = 0; for (const f of G.en) if (hyp(f.x - e.x, f.y - e.y) < 300) n++; if (n > bn) { bn = n; best = e; } }
      let a = kAng(p); if (best) a = Math.atan2(best.y - p.y, best.x - p.x); if (n0 && !n0.m.boss) { n0.kx = Math.cos(a) * 1600; n0.ky = Math.sin(a) * 1600; dmgE(n0, kd(p) * 4 * K, true, p); }
      const tri = k.tri; k.tri = 0; k.chg = { t: 3 + (tri ? 2 : 0), ax: Math.cos(a), ay: Math.sin(a), sp: 1050, dm: 3.2 * K, K, hit: new Set(), imp: [], col: '#ffd45e', bounce: tri, end() { aoe(p, p.x, p.y, 380, kd(p) * 4 * K, 500); addFx(p.x, p.y, 380, '#ffd45e', .5); gsnd('boom'); } }; addPil(p.x, p.y, 130, 1400, '#ffd45e', 1); gsnd('ult'); },
    off(p) { const k = p.k; if (k.rf && k.rf !== 1) { p.mods.spd /= k.rf; k.rf = 1; } if (!k.mount) { k.mount = 1; p.mods.spd /= .4; } },
    tick(p, dt) { const k = p.k; if (k.wv !== G.wave) { k.wv = G.wave; if (!k.mount) this.mountUp(p); }
      if (k.stun > 0) { k.stun -= dt; p.x = k.sx; p.y = k.sy; kTp(p); p.mv = 0; if (Math.random() < dt * 6) KV(15, p.x, p.y, 150, 40, 90, '#ffe9a8', .4, 0, 3); }
      if (k.chg) kChargeStep(p, dt);
      if (k.mount) { if (p.mv > .4 || k.chg) k.rt = Math.min(10, (k.rt || 0) + dt); else k.rt = 0; const f = 1 + Math.min(1, k.rt / 10); if (Math.abs(f - (k.rf || 1)) > .02) { p.mods.spd *= f / (k.rf || 1); k.rf = f; } if (k.rt > 4 && Math.random() < dt * k.rt) KV(9, p.x, p.y, 10, 40, 120, '#c0c8d8', .4, 1, .3, undefined, .4); }
      if (k.ram > 0) { k.ram -= dt; p.fireT = Math.max(p.fireT, .2); if (Math.random() < dt * 3) KV(2, p.x, p.y, 8, 120, 200, '#e8d8a0', .5, 1, 2, undefined, .5); }
      k.cr = (k.drag | 0) >= 15 && !k.tri; k.st = !k.mount ? 'À pied' + (G.t - k.foot < 60 ? ' · ' + Math.ceil(60 - (G.t - k.foot)) + ' s' : ' · R pour remonter') : 'Élan ×' + (k.rf || 1).toFixed(1) + (k.tri ? ' · triomphe prêt' : (k.drag | 0) < 15 ? ' · ' + (k.drag | 0) + ' / 15' : ''); },
    hurt(p, d) { const k = p.k; if (k.mount) d *= .82; if (k.ram > 0) d *= .45;
      if (k.mount && d >= p.hp && !p.revive) { k.mount = 0; k.foot = G.t; if (k.rf !== 1) { p.mods.spd /= k.rf; k.rf = 1; } k.rt = 0; kMul(p, 'spd', .4); k.chg = null; p.hp = Math.round(p.maxhp * .5); p.inv = 2; p.blink = 1; addFx(p.x, p.y, 300, '#c0c8d8', .6); KV(9, p.x, p.y, 20, 150, 420, '#c0c8d8', .8, 0, .5, undefined, .6); announce('DÉSARÇONNÉ !', '#ff9a6a'); gsnd('hurt'); return 0; } return d; }
  },
  ashryn: {
    E(p, K) { const k = p.k, hit = () => { aoe(p, p.x, p.y, 310, kd(p) * 2.2 * K, 260, e => kBurn(e, kd(p) * .6, 3, p)); addFx(p.x, p.y, 310, '#ff6a3a', .4); KV(3, p.x, p.y, 8, 140, 640, '#ff7a2e', .4, 1, 9); KV(12, p.x, p.y, 60, 120, 380, '#ffb52e', .35, 0, 1); };
      hit(); fdo(.25, () => { if (!p.dead) { hit(); gsnd('slam'); } }); if (!(k.fury > 0)) kMul(p, 'dmg', 1.25); k.fury = 5; gsnd('slam'); },
    A(p, K) { const k = p.k, a = kAng(p), x1 = p.x + Math.cos(a) * 9 * KM, y1 = p.y + Math.sin(a) * 9 * KM, b = { x: x1, y: y1 }; clampR(b, AR - 80); k.fly = { t: .55, T: .55, x0: p.x, y0: p.y, x1: b.x, y1: b.y, K }; p.inv = Math.max(p.inv, .75); KV(8, p.x, p.y, 20, 100, 300, '#ff7a2e', .6, 0, .5, undefined, .6); gsnd('dash'); },
    C(p, K) { const a = kAng(p); k8(p, a, K); p.k.c8 = -99; },
    R(p, K) { const k = p.k; k.sky = 5; k.sK = K; k.sT = 0; p.inv = Math.max(p.inv, 5.2); G.ecl = 1; addPil(p.x, p.y, 140, 1500, '#ff5a1e', 1); KV(11, p.x, p.y, 60, 200, 600, '#ff7a2e', .7, 0, 0); gsnd('ult'); },
    off(p) { const k = p.k; p.lift = 0; if (k.fury > 0) { p.mods.dmg /= 1.25; k.fury = 0; } },
    tick(p, dt) { const k = p.k;
      if (k.fury > 0) { k.fury -= dt; if (Math.random() < dt * 8) KV(12, p.x + rnd(-40, 40), p.y + rnd(-40, 40), 40, 50, 120, '#ff7a2e', .35, 0, 1); if (k.fury <= 0) p.mods.dmg /= 1.25; }
      const f = k.fly; if (f) { f.t -= dt; const u = 1 - Math.max(0, f.t) / f.T; p.x = f.x0 + (f.x1 - f.x0) * u; p.y = f.y0 + (f.y1 - f.y0) * u; p.lift = Math.sin(u * Math.PI) * 280; p.inv = Math.max(p.inv, .2); kTp(p); if (Math.random() < dt * 20) KV(11, p.x, p.y, 80 + Math.sin(u * 3.14) * 160, 60, 160, '#ff7a2e', .35, 0, 0);
        if (f.t <= 0) { k.fly = null; p.lift = 0; let n = 0; aoe(p, p.x, p.y, 340, kd(p) * 3.5 * f.K, 400, e => { kStun(e, 1.2); kBurn(e, kd(p) * .6, 3, p); n++; }); if (n >= 8) { k.c8 = G.t; } addFx(p.x, p.y, 340, '#ff5a1e', .55); addFx(p.x, p.y, 200, '#ffffff', .3); KV(7, p.x, p.y, 60, 160, 700, '#ff7a2e', .5, 0, 1); KV(9, p.x, p.y, 8, 150, 600, '#ff5a1e', .9, 1, .5, undefined, .6); G.shake = .55; evp(['sh', .55, .2]); gsnd('boom'); } }
      if (k.sky > 0) { k.sky -= dt; p.inv = Math.max(p.inv, .2); p.lift = Math.min(260, (p.lift || 0) + dt * 900); k.sT -= dt; if (k.sT <= 0) { k.sT = .1; const pool = G.en.filter(e => !e.dead); const e = pool[(Math.random() * pool.length) | 0], a = Math.random() * 6.283, r = Math.random() * (AR - 100), x = e && Math.random() < .7 ? e.x : Math.cos(a) * r, y = e && Math.random() < .7 ? e.y : Math.sin(a) * r;
          KV(11, x, y, 300, 60, 160, '#ff7a2e', .3, 0, 0); fdo(.25, () => { aoe(p, x, y, 130, kd(p) * 1.8 * k.sK, 0, q => kBurn(q, kd(p) * .5, 2, p)); KV(7, x, y, 30, 60, 260, '#ff5a1e', .35, 0, 1); KV(9, x, y, 6, 60, 240, '#ff7a2e', .6, 1, .5, undefined, .5); }); }
        if (k.sky <= 0) { p.lift = 0; aoe(p, p.x, p.y, 460, kd(p) * 5 * k.sK, 500, e => kStun(e, 1.5)); addFx(p.x, p.y, 460, '#ff5a1e', .7); addFx(p.x, p.y, 260, '#ffffff', .35); KV(7, p.x, p.y, 80, 200, 1000, '#ff7a2e', .6, 0, 1); G.shake = .8; G.flash = .3; evp(['sh', .8, .3]); gsnd('boom'); } }
      k.cr = G.t - (k.c8 || -99) < 10; k.st = k.fury > 0 ? 'Braise ' + k.fury.toFixed(1) + ' s' : ''; },
    hit(p, e) { if (p.k.fury > 0 && !e.dead && !e.kbn) kBurn(e, kd(p) * .4, 2, p); },
    hurt(p, d) { let burn = false; for (const e of G.en) if (e.kbn && hyp(e.x - p.x, e.y - p.y) < 280) { burn = true; break; } return d * (burn ? .6 : .8); }
  },
  golem: {
    init(p) { p.k.gb = 0; p.k.lsd = G ? G.shards | 0 : 0; p.k.wv = G ? G.wave : 0; },
    E(p) { p.k.hun = 5; announce('FAIM DE CRISTAL', '#6ae0ff'); KV(15, p.x, p.y, 100, 80, 300, '#6ae0ff', .6, 0, 1); gsnd('pick'); },
    A(p) { const k = p.k; if (kOwnW(p) < 20) { p.cd.b = .3; if (p === G.p) { snd('no'); toast('Il faut 20 éclats'); } return; } p.spent = (p.spent | 0) + 20; for (const m of kMine(p, 'mini')) kDel(m);
      const an = kAng(p), c = mkPlayer({ hero: 'golem', name: '', skin: p.skin }, 0, 1); c.k = null; c.al = 'mini'; c.own = p; c.x = p.x + Math.cos(an) * 140; c.y = p.y + Math.sin(an) * 140; c.inv = 0; c.t = 10; c.ft = .4; c.gt = 1.5; c.hp = c.maxhp = Math.round(p.maxhp * .75); c.mv = 0; kAdd(c); clampR(c, AR - 80);
      addPil(c.x, c.y, 80, 900, '#6ae0ff', .8); KV(4, c.x, c.y, 60, 100, 340, '#6ae0ff', .5, 0, 2); announce('PETIT GOLEM', '#6ae0ff'); gsnd('slam'); },
    C(p, K) { const w = kOwnW(p), d = w * 2.5 * K; p.spent = (p.spent | 0) + Math.floor(w / 2); aoe(p, p.x, p.y, 560, d, 500); addFx(p.x, p.y, 560, '#6ae0ff', .7); addFx(p.x, p.y, 320, '#ffffff', .35);
      for (let i = 0; i < 10; i++) { const a = i * .628; KV(4, p.x + Math.cos(a) * 300, p.y + Math.sin(a) * 300, 40, 60, 220, '#9af0ff', .45, 0, 3); } KV(2, p.x, p.y, 6, 200, 1100, '#6ae0ff', .8, 1, 2); G.shake = .7; evp(['sh', .7, .3]); announce('SURCHARGE · ' + Math.round(d), '#6ae0ff'); gsnd('boom'); },
    R(p, K) { const k = p.k, tot = (p.maxhp * .15 + kOwnW(p) / 2.5) * K; kHeal(p, tot * .6); k.rg = tot * .4 / 10; k.rgT = 10; addPil(p.x, p.y, 130, 1300, '#6ae0ff', 1); KV(2, p.x, p.y, 6, 160, 600, '#9af0ff', 1, 1, 1); for (let i = 0; i < 6; i++) KV(4, p.x + rnd(-120, 120), p.y + rnd(-120, 120), 80, 50, 200, '#9af0ff', .6, 0, 2); gsnd('heal'); },
    off(p) { const k = p.k; if (k.gb) { p.maxhp -= k.gb; p.hp = Math.min(p.hp, p.maxhp); k.gb = 0; } },
    tick(p, dt) { const k = p.k, sd = G.shards | 0; if (k.hun > 0) { k.hun -= dt; if (sd > (k.lsd | 0)) { G.shards += sd - k.lsd; addTxt(p.x, p.y, 200, '+' + (sd - k.lsd), '#6ae0ff'); } } k.lsd = G.shards | 0;
      if (k.wv !== G.wave) { k.wv = G.wave; const nb = Math.floor(kOwnW(p) / 4); if (nb !== (k.gb | 0)) { const dd = nb - (k.gb | 0); p.maxhp += dd; if (dd > 0) p.hp += dd; else p.hp = Math.min(p.hp, p.maxhp); k.gb = nb; if (dd > 0) addTxt(p.x, p.y, 220, '+' + dd + ' PV MAX', '#6ae0ff', 1); } }
      if (k.rgT > 0) { k.rgT -= dt; kHealQ(p, k.rg * dt); }
      for (const m of kMine(p, 'mini')) { m.t -= dt; if (m.t <= 0 || m.hp <= 0) { addFx(m.x, m.y, 160, '#6ae0ff', .4); KV(4, m.x, m.y, 60, 80, 260, '#9af0ff', .4, 0, 3); kDel(m); continue; } kFight(p, m, dt, kd(p) * .9, .7, 300); clampR(m, AR - 60); m.gt -= dt; if (m.gt <= 0) { m.gt = 1.5; G.gems.push({ x: m.x + rnd(-40, 40), y: m.y + rnd(-40, 40) }); } }
      const w = kOwnW(p); k.cr = w > p.maxhp; k.st = 'Éclats ' + w + ' / ' + Math.round(p.maxhp) + (k.hun > 0 ? ' · faim ' + k.hun.toFixed(1) + ' s' : ''); }
  },
  arven: {
    strike(p, s, K) { const a = kAng(p), k = p.k, sov = k.sov > 0; let n = 0; const d = kd(p) * [2.6, 2.3, 4.2][s] * K, f = e => { dmgE(e, d, s === 2, p); n++; };
      if (s === 0) { kCone(p, a, .8, 360, f); KV(13, p.x + Math.cos(a) * 170, p.y + Math.sin(a) * 170, 10, 220, 480, '#4ae0c8', .3, 1, 0, -a + 1.571); }
      else if (s === 1) { kCone(p, a, 1.5, 400, e => { f(e); e.kx = Math.cos(a) * 500; e.ky = Math.sin(a) * 500; }); KV(14, p.x, p.y, 8, 200, 700, '#7af0ff', .35, 1, 3); KV(13, p.x + Math.cos(a) * 160, p.y + Math.sin(a) * 160, 10, 300, 560, '#bfe8ff', .3, 1, 0, -a + .2); }
      else { kLine(p.x, p.y, Math.cos(a), Math.sin(a), 700, 180, f); for (let i = 1; i <= 5; i++) KV(0, p.x + Math.cos(a) * i * 135, p.y + Math.sin(a) * i * 135, 6, 70, 260, '#4ae0c8', .35 + i * .05, 1); KV(5, p.x + Math.cos(a) * 80, p.y + Math.sin(a) * 80, 60, 80, 300, '#ffffff', .25, 0, 2); G.shake = Math.max(G.shake, .35); }
      gsnd(s === 2 ? 'slam' : 'salve');
      if (!n) { addTxt(p.x, p.y, 200, 'DANS LE VIDE', '#ff9a9a', 1); k.dn = 0; if (!sov) { this.setCh(p, 0); p.cd.a += 4; } return; }
      if (s < 2) { k.dn = s + 1; k.dw = G.t + 2.5; p.cd.a = .3; addTxt(p.x, p.y, 210, ['', 'FOUET !', 'PERCÉE !'][s + 1], '#7af0ff', 1); return; }
      k.dn = 0; const was5 = (k.ch | 0) >= 5; this.setCh(p, Math.min(5, (k.ch | 0) + 1)); p.cd.a = Math.max(1.5, 6 - (k.ch | 0)) * p.mods.cdr; if (sov) p.ult = Math.min(100, p.ult + 8); if (was5 && !k.ht) k.c5 = G.t; announce('TROIS MARÉES · ' + k.ch, '#4ae0c8'); },
    setCh(p, c) { const k = p.k, o = k.ch | 0; if (c === o) return; p.mods.dmg *= (1 + .05 * c) / (1 + .05 * o); k.ch = c; if (c < 5 && k.ht) { p.mods.dmg /= 1.3; k.ht = 0; } },
    E(p, K) { const k = p.k; const s = k.dn > 0 && G.t < k.dw ? k.dn : 0; this.strike(p, s, K); },
    A(p) { const k = p.k; for (const w of kMine(p, 'wall')) kDel(w); const hp = p.maxhp * .8 + 26 * G.wave; k.wall = kAdd({ al: 'wall', own: p, x: p.x, y: p.y, t: 6, hp, maxhp: hp }); addPil(p.x, p.y, 120, 1000, '#4ae0c8', .8); gsnd('onde'); },
    C(p) { const k = p.k; if (!k.ht) { p.mods.dmg *= 1.3; k.ht = 1; } k.c5 = -99; announce('MARÉE HAUTE', '#4ae0c8'); gsnd('ultc'); },
    R(p) { const k = p.k; if (!(k.sov > 0)) kMul(p, 'dmg', 1.5); k.sov = 10; k.dn = 0; p.cd.a = 0; addPil(p.x, p.y, 140, 1500, '#4ae0c8', 1); KV(2, p.x, p.y, 6, 200, 900, '#4ae0c8', .9, 1, 1.5); G.shake = .5; gsnd('ult'); },
    off(p) { const k = p.k; if (k.sov > 0) { p.mods.dmg /= 1.5; k.sov = 0; } this.setCh(p, 0); },
    tick(p, dt) { const k = p.k; if (k.dn > 0 && G.t > k.dw) { k.dn = 0; p.cd.a = Math.max(p.cd.a, 1.5); }
      if (k.sov > 0) { k.sov -= dt; kHealQ(p, p.maxhp * .015 * dt); if (Math.random() < dt * 6) KV(15, p.x + rnd(-50, 50), p.y + rnd(-50, 50), 90, 40, 110, '#7af0ff', .5, 0, 1); if (k.sov <= 0) p.mods.dmg /= 1.5; }
      const w = k.wall; if (w) { w.x = p.x; w.y = p.y; w.t -= dt; for (const s of G.sh) if (s.foe && s.life > 0 && hyp(s.x - p.x, s.y - p.y) < 250) { s.life = 0; w.hp -= s.dmg; KV(0, s.x, s.y, 40, 30, 90, '#7af0ff', .25, 0); }
        for (const e of G.en) { if (e.dead || e.m.boss) continue; const dx = e.x - p.x, dy = e.y - p.y, d = hyp(dx, dy) || 1; if (d < 250 + e.r * .4) { const t = 250 + e.r * .4; e.x = p.x + dx / d * t; e.y = p.y + dy / d * t; e.kx = dx / d * 300; e.ky = dy / d * 300; } }
        if (w.t <= 0 || w.hp <= 0) { kDel(w); k.wall = null; addFx(p.x, p.y, 260, '#4ae0c8', .45); KV(0, p.x, p.y, 8, 200, 420, '#7af0ff', .5, 1); } }
      k.cr = !k.ht && G.t - (k.c5 || -99) < 8; k.st = 'Maîtrise ' + (k.ch | 0) + ' / 5' + (k.dn ? ' · coup ' + (k.dn + 1) + ' / 3' : '') + (k.wall ? ' · mur ' + Math.round(100 * Math.max(0, k.wall.hp) / k.wall.maxhp) + ' %' : ''); },
    hit(p, e, d) { if (p.k.sov > 0) { const t = G.t; if (t - (p.k.lhT || 0) > .1) { p.k.lhT = t; kHealQ(p, Math.min(p.maxhp * .02, d * .1)); } } },
    hurt(p, d) { const w = p.k.wall; if (w && w.hp > 0) { w.hp -= d; addTxt(p.x, p.y, 170, 'MUR D’EAU', '#7af0ff', 1); return 0; } return d; }
  }
});
/* soin discret (sans texte à chaque image) */
function kHealQ(q, amt) { if (!q || q.dead || q.gone || amt <= 0) return; q.hp = Math.min(q.maxhp, q.hp + amt); }
/* l'éternuement draconique d'Ashryn : grand cône de feu */
function k8(p, a, K) { const d = kd(p) * 10 * K; kCone(p, a, .62, 860, e => { dmgE(e, d, true, p); kBurn(e, kd(p) * .8, 4, p); });
  for (let i = 1; i <= 6; i++) { const r = i * 130, w = .25 + i * .07; for (const s of [-1, 0, 1]) KV(12, p.x + Math.cos(a + s * w * .6) * r, p.y + Math.sin(a + s * w * .6) * r, 60, 80 + i * 30, 220 + i * 60, i % 2 ? '#ff7a2e' : '#ffb52e', .45 + i * .05, 0, 1); }
  KV(7, p.x + Math.cos(a) * 300, p.y + Math.sin(a) * 300, 60, 200, 900, '#ff5a1e', .6, 0, 1); G.shake = .8; G.flash = .3; evp(['sh', .8, .3]); announce('ÉTERNUEMENT DRACONIQUE', '#ff7a2e'); gsnd('boom'); }

/* changement de kit (Dex) : on annule les bonus de l'ancien, on prépare le nouveau */
{ const _kn = kNew; kNew = function (p, id) { const o = p.k; if (o && typeof o === 'object' && o.id && KS[o.id] && KS[o.id].off) { try { KS[o.id].off(p); } catch (x) { } } const r = _kn(p, id); if (KS[id] && KS[id].init) { try { KS[id].init(p); } catch (x) { } } return r; }; }
/* le petit golem attire les monstres (hors boss) */
{ const _nr = nearest; nearest = function (x, y) { const b = _nr(x, y); if (!G || !G.al || !G.al.length) return b; let m = null, md = 1320; for (const a of G.al) if (a.al === 'mini' && a.hp > 0) { const d = hyp(a.x - x, a.y - y); if (d < md) { md = d; m = a; } } if (!m) return b;
  for (const e of G.en) if (e.x === x && e.y === y) return e.m.boss ? b : m; return b; }; }
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
  const _hurt = hurt; hurt = function (p, d) { if (p && p.al === 'mini') { if (p.hp > 0 && G && G.state === 'play') { p.hp -= d * .6; p.blink = .3; addTxt(p.x, p.y, 150, '-' + Math.round(d * .6), '#9af0ff'); } return; } if (!kIsKit(p) || !p || p.dead || p.gone || p.inv > 0 || !G || G.state !== 'play') return _hurt(p, d); const S2 = KS[p.k.id]; if (S2 && S2.hurt) { try { d = S2.hurt(p, d); } catch (x) { } } const k = p.k; if (d > 0 && k.sh > 0) { const a = Math.min(k.sh, d); k.sh -= a; d -= a; if (d <= 0) { p.inv = .35; addTxt(p.x, p.y, 170, 'BOUCLIER', '#ffe27a', 1); spark(p.x, p.y, '#ffe27a', 6); return; } } if (d <= 0) return; return _hurt(p, d); };
  const _skill = skill; skill = function (k, p) { if (!G || G.state !== 'play' || NETROLE === 2) return _skill(k, p); p = p || G.p; if (!kIsKit(p) || p.dead || k === 'd') return _skill(k, p);
    const slot = { a: 0, b: 1, c: 2, u: 3 }[k], id = kKit(p, slot); if (!id) return _skill(k, p); const lv = p.tl[slot] || (p.k.dex && p.k.id !== 'nyxara' ? 1 : 0); if (!lv) return _skill(k, p); const S2 = KS[id], K = tk(lv), D = KDEF[id]; if (S2.can && !S2.can(p, k)) return;
    if (k === 'u') { if (p.ult < 100) return; p.ult = 0; gsnd('ultc'); if (p === G.p) vib(60); cine({ t: .9, f: p, zoom: 1.7, title: D.R[0].toUpperCase(), sub: D.n, col: p.h.col, end() { try { S2.R(p, K); } catch (x) { } } }); return; }
    if (p.cd[k] > 0) return; if (k === 'c') { if (!D.C) { if (p === G.p) toast('Dex n’a pas de combo'); return; } if (!p.k.cr) { if (p === G.p) { snd('no'); toast('Combo pas prêt : ' + D.C[3].toLowerCase()); } return; } }
    _skill(k, p); if (!(p.cd[k] > 0)) return; p.cd[k] = p.cdm[k] * p.mods.cdr; p.atk = .2; try { S2[k === 'a' ? 'E' : k === 'b' ? 'A' : 'C'](p, K); } catch (x) { } if (k === 'c') { G.shake = Math.max(G.shake, .4); } };
  const _upd = update; update = function (dt) { if (!G || NETROLE === 2 || G.state !== 'play') return _upd(dt);
    const held = []; for (const e of G.en) { if (e.kst > 0) { e.kst -= dt; held.push([e, e.x, e.y]); e.cd = Math.max(e.cd, .4); } if (e.kbn) { const b = e.kbn; b.t -= dt; b.n += dt; if (b.n >= .5) { b.n = 0; _kDmg(e, b.dps * .5, false, b.by); } if (b.t <= 0 || e.dead) e.kbn = null; } }
    _upd(dt); for (const h of held) if (!h[0].dead) { h[0].x = h[1]; h[0].y = h[2]; }
    if (!G || G.state !== 'play') return; for (const p of G.ps) { if (!kIsKit(p) || p.gone) continue; const k = p.k; if (k.dex && G.wave !== k.dw) { const first = !k.dw; k.dw = G.wave; if (!first) kDexRoll(p); } if (p.dead) { for (const a of kMine(p)) kDel(a); k.cr = 0; continue; } const S2 = KS[k.id]; if (S2 && S2.tick) { try { S2.tick(p, dt); } catch (x) { } } }
    const L = G.al; if (L) for (let i = L.length - 1; i >= 0; i--) if (!L[i].own || L[i].own.gone) L.splice(i, 1); }; }
/* instantané pour les invités : état du kit + alliés invoqués */
{ const AK = ['phx', 'forge', 'beam', 'clone', 'portal', 'well', 'dune', 'wall', 'mini', 'rift'], LN = k => k === 'beam' || k === 'rift';
  const _sn = snapshot; snapshot = function () { const d = _sn(), r = Math.round; d.ks = G.ps.map(p => kIsKit(p) ? [p.k.cr ? 1 : 0, p.k.st || ''] : 0); d.al = (G.al || []).map(a => [a.id, AK.indexOf(a.al), r(a.x), r(a.y), LN(a.al) ? r(a.x2) : +(a.fx || 0).toFixed(2), LN(a.al) ? r(a.y2) : +(a.fy || 1).toFixed(2), G.ps.indexOf(a.own), a.atk > 0 ? 1 : 0, a.mv ? 1 : 0]); return d; };
  const _as = applySnap; applySnap = function (d) { _as(d); if (!G || NETROLE !== 2 || !d) return; if (d.ks) d.ks.forEach((s, i) => { const p = G.ps[i]; if (p && s) { p.k = p.k && typeof p.k === 'object' ? p.k : { id: p.hero }; p.k.cr = s[0]; p.k.st = s[1]; } });
    if (d.al) { const old = new Map((G.al || []).map(a => [a.id, a])); G.al = d.al.map(s => { let a = old.get(s[0]); const own = G.ps[s[6]] || G.p, kind = AK[s[1]]; if (!a) { a = kind === 'clone' || kind === 'mini' ? Object.assign(mkPlayer({ hero: kind === 'mini' ? 'golem' : own.hero, name: '', skin: own.skin }, 0, 1), { k: null }) : {}; a.id = s[0]; a.al = kind; a.own = own; a.col = '#ff7a2e'; } a.x = s[2]; a.y = s[3]; if (LN(kind)) { a.x2 = s[4]; a.y2 = s[5]; } else { a.fx = s[4]; a.fy = s[5]; a.mvx = s[4]; a.mvy = s[5]; } a.atk = s[7] ? .2 : 0; a.mv = s[8]; a.inv = 0; a.blink = 0; return a; }); } }; }
/* ---- affichage en partie : combo (nom, condition, prêt ou non) et état du passif ---- */
{ const _ht = hudTick; hudTick = function () { _ht(); const p = G.p; if (!kIsKit(p)) return; const id = p.k.id || p.hero, D = KDEF[id] || KDEF[p.hero];
    if (!$('#k7c')) { const box = $('#cmbs'); if (!box) return; box.insertAdjacentHTML('beforeend', `<div class="cmb k7" id="k7c"><b id="k7n">${D.C ? D.C[0] : 'Pas de combo'}</b><span id="k7q">${D.C ? D.C[3] : 'Dex copie les autres gardiens'}</span></div><div class="k7p" id="k7p"></div>`); }
    const rdy = !!p.k.cr && !(p.cd.c > 0); hset('k7c', 'cls', 'cmb k7' + (rdy ? ' go' : '')); hset('k7p', 'text', p.k.st || ''); hset('bc', 'cls', 'ab' + (p.tl[2] || p.k.dex ? '' : ' lk') + (rdy ? ' rdy cnx' : ' k7w')); }; }
/* fiche du gardien : passif affiché dans le choix du gardien */
{ const _hr = SCR.hero; SCR.hero = function () { let h = _hr.apply(this, arguments); const D = KDEF[SEL]; if (!D) return h; return h.replace(/<button class="btn vio" data-a="go" data-v="htox"/, `<div class="k7pas"><b>${D.role} · Passif : ${D.pas[0]}</b><span>${D.pas[1]}</span></div><button class="btn vio" data-a="go" data-v="htox"`); }; }
