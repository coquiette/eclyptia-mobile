'use strict';
let W = 1672, H = 941;
let AR = 1300; const VERSION = 'mobile 1.7', BUILD = '17';
const $ = s => document.querySelector(s);
const ic = (n, cls) => `<img class="ici ${cls || ''}" src="img/ic/${n}.webp" draggable="false" alt="">`;
const rnd = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

const HEROES = {
  kaelion: { n: 'Kaelion', cls: 'Paladin solaire', img: 'h0', hp: 150, spd: 320, dmg: 14, rate: 2.2, col: '#ffc94a', cost: 0, tox: ['k1', 'k2', 'k3', 'k4'] },
  elyra:   { n: 'Elyra',   cls: 'Pyromancienne',   img: 'h1', hp: 100, spd: 345, dmg: 11, rate: 3.4, col: '#ff6a3d', cost: 0, tox: ['e1', 'e2', 'e3', 'e4'] },
  aria:    { n: 'Aria',    cls: 'Barde des marées', img: 'h2', hp: 110, spd: 340, dmg: 10, rate: 2.8, pierce: 2, col: '#5ac8ff', cost: 600, curr: 'coins', tox: ['a1', 'a2', 'a3', 'a4'] },
  vesper:  { n: 'Vesper',  cls: 'Lame du néant',   img: 'h3', hp: 95,  spd: 400, dmg: 13, rate: 2.6, crit: .25, col: '#b07bff', cost: 900, curr: 'coins', tox: ['v1', 'v2', 'v3', 'v4'] },
  brakkor: { n: 'Brakkor', cls: 'Forgeron runique', img: 'h6', hp: 190, spd: 290, dmg: 21, rate: 1.5, col: '#ff9d3d', cost: 1500, curr: 'coins', tox: ['b1', 'b2', 'b3', 'b4'] },
  nyxara:  { n: 'Nyxara',  cls: "Sorcière d'ombre", img: 'h5', hp: 90,  spd: 335, dmg: 9,  rate: 2.6, multi: 2, col: '#d06bff', cost: 250, curr: 'prisms', tox: ['n1', 'n2', 'n3', 'n4'] }
};
const HERO_IDS = Object.keys(HEROES);

/* TOX : les pouvoirs de combat. Chaque gardien a les siens : A (commun), B (rare), C (épique) et l'ultime (légendaire).
   On les débloque et on les améliore avec les étoiles des boosters de constellation. */
const RARN = ['COMMUNE', 'RARE', 'ÉPIQUE', 'LÉGENDAIRE'], RARC = ['#7fe0f0', '#5aa8ff', '#d58bff', '#ffd45e'];
const TOX = {
  k1: { n: 'Salve solaire', t: 'salve', cd: 5, num: 16, dk: 1.3, cone: 6.283, pierce: 1, col: '#ffe9a8', d: 'Seize rayons partent dans toutes les directions.' },
  k2: { n: 'Onde sacrée', t: 'onde', cd: 9, rad: 300, dk: 3.2, kb: 700, d: 'Une onde de choc repousse et blesse les ennemis proches.' },
  k3: { n: 'Bénédiction', t: 'heal', cd: 14, pct: .3, sh: 1.6, d: 'Rend des PV et protège un court instant.' },
  k4: { n: "Jugement de l'aube", t: 'ult', dk: 9, bk: 14, d: "L'aube frappe tous les ennemis de l'arène." },
  e1: { n: 'Gerbe de feu', t: 'salve', cd: 4, num: 7, dk: 2, cone: 1.1, pierce: 2, r: 24, col: '#ff7a2e', d: 'Sept boules de feu en éventail devant toi.' },
  e2: { n: 'Nova ardente', t: 'onde', cd: 8, rad: 360, dk: 2.6, kb: 400, d: 'Un anneau de flammes explose autour de toi.' },
  e3: { n: 'Pluie de météores', t: 'rain', cd: 13, num: 8, dk: 3, rad: 150, d: 'Huit météores tombent sur les ennemis.' },
  e4: { n: 'Supernova', t: 'ult', dk: 11, bk: 15, d: 'Une explosion solaire ravage toute la carte.' },
  a1: { n: 'Vague perçante', t: 'salve', cd: 4.5, num: 5, dk: 1.8, cone: .6, pierce: 6, r: 26, sp: 900, col: '#7ad8ff', d: "Cinq lames d'eau qui traversent tout." },
  a2: { n: 'Raz-de-marée', t: 'onde', cd: 9, rad: 420, dk: 2.2, kb: 1300, d: 'Une grande vague balaie les ennemis très loin.' },
  a3: { n: 'Chant apaisant', t: 'heal', cd: 13, pct: .4, sh: 2.2, d: 'Un chant qui soigne beaucoup et protège.' },
  a4: { n: 'Tempête des abysses', t: 'ult', dk: 8, bk: 12, slow: 5, d: 'Frappe tous les ennemis et les ralentit longtemps.' },
  v1: { n: 'Éventail de lames', t: 'salve', cd: 3.5, num: 9, dk: 1.6, cone: 1.6, pierce: 1, sp: 1000, col: '#c9a8ff', d: 'Neuf dagues rapides devant toi.' },
  v2: { n: "Pas de l'ombre", t: 'blink', cd: 6, dist: 420, rad: 240, dk: 3.4, d: "Tu te téléportes et tu tranches à l'arrivée." },
  v3: { n: 'Frénésie', t: 'buff', cd: 14, dur: 5, rate: 2, spd: 1.3, d: 'Cadence de tir doublée et vitesse augmentée.' },
  v4: { n: 'Mille entailles', t: 'ult', dk: 12, bk: 18, d: 'Mille coups de lame sur tous les ennemis.' },
  b1: { n: 'Marteau runique', t: 'onde', cd: 4.5, rad: 230, dk: 4.2, kb: 500, d: 'Un coup de marteau très puissant, de près.' },
  b2: { n: 'Séisme', t: 'slow', cd: 10, rad: 460, dur: 3.5, dk: 2.4, d: 'Le sol tremble : dégâts et ennemis ralentis.' },
  b3: { n: 'Armure de forge', t: 'heal', cd: 13, pct: .2, sh: 4, d: 'Un long bouclier et un peu de soin.' },
  b4: { n: 'Enclume céleste', t: 'ult', dk: 13, bk: 20, d: 'Une enclume géante écrase toute la carte.' },
  n1: { n: "Orbes d'ombre", t: 'salve', cd: 4.5, num: 12, dk: 1.2, cone: 6.283, pierce: 3, sp: 520, r: 22, col: '#d06bff', d: "Douze orbes lents qui traversent les ennemis." },
  n2: { n: 'Malédiction', t: 'slow', cd: 10, rad: 520, dur: 5, dk: 1.6, d: 'Maudit une grande zone : ennemis très ralentis.' },
  n3: { n: 'Drain vital', t: 'drain', cd: 11, rad: 340, dk: 2.2, heal: .05, d: 'Blesse les ennemis proches et te soigne pour chacun.' },
  n4: { n: 'Éclipse totale', t: 'ult', dk: 9, bk: 13, slow: 4, d: "L'éclipse frappe tout et ralentit les survivants." }
};
for (const h of HERO_IDS) HEROES[h].tox.forEach((id, i) => { TOX[id].h = h; TOX[id].r = i; TOX[id].id = id; });
const TOX_IDS = Object.keys(TOX), TMAX = 10;
const tneed = l => [1, 2, 3, 4, 5, 6, 8, 10, 12, 15][l] || 99, tcost = (l, r) => 80 * l * (r + 1);
const tk = l => 1 + .12 * (Math.max(1, l) - 1), tcd = (t, l) => +(t.cd * (1 - .025 * (Math.max(1, l) - 1))).toFixed(1);
/* tenues rares, trouvées dans les étoiles légendaires */
const SKINS = {
  kaelion: { n: "Chevalier de l'Éclipse", hue: 250, pal: { cloth: 0x2a1a4a, acc: 0xd58bff, cape: 0x5a2ab0, hair: 0xe9d8ff } },
  elyra: { n: 'Flamme azur', hue: 200, pal: { hair: 0x3fa9f5, cloth: 0x1a3f9a, acc: 0x7ad8ff, cape: 0x10245a, orb: 0x7ad8ff } },
  aria: { n: 'Sirène de corail', hue: 130, pal: { hair: 0xff7aa8, cloth: 0xd6426f, acc: 0xffd0e0, cape: 0x9a1a4a, orb: 0xff9ac0 } },
  vesper: { n: 'Ombre écarlate', hue: 90, pal: { hair: 0x601a24, cloth: 0x3a0a12, acc: 0xff4d6d, cape: 0xb02a3a } },
  brakkor: { n: 'Forge de givre', hue: 180, pal: { hair: 0xcfe8ff, cloth: 0x2a4a7a, acc: 0x9ad8ff, cape: 0x16304a } },
  nyxara: { n: "Sorcière d'émeraude", hue: 240, pal: { hair: 0x1a9a5a, cloth: 0x0a4a2a, acc: 0x6bffb0, cape: 0x06301a, orb: 0x6bffb0 } }
};
/* boosts : achetés en prismes, utilisés pour une partie */
const BOOSTS = [
  { id: 'coins', ic: 'bx_coins', n: 'Double pièces', d: 'Pièces ×2 à la fin de la partie', cost: 30 },
  { id: 'xp', ic: 'bx_xp', n: 'Double XP', d: 'XP et XP de pass ×2', cost: 30 },
  { id: 'revive', ic: 'bx_revive', n: 'Seconde chance', d: 'Reviens à la vie une fois', cost: 60 },
  { id: 'start', ic: 'bx_start', n: 'Départ fulgurant', d: 'Ultime chargé dès le début', cost: 40 },
  { id: 'magnet', ic: 'bx_magnet', n: 'Aimant géant', d: 'Attire les éclats de très loin', cost: 20 },
  { id: 'shield', ic: 'bx_shield', n: "Bouclier d'aube", d: '+25 % de PV max', cost: 25 }
];

const MON = {
  larve:  { n: "Larve d'ombre",  img: 'm0', hp: 22,  spd: 118, dmg: 8,  r: 28, col: '#b06bff', from: 1, w: 10, d: "Petite créature née des résidus de l'Éclipse. Faible seule, dangereuse en nombre." },
  chauve: { n: 'Chauve-souris violette', img: 'm3', hp: 14, spd: 195, dmg: 6, r: 24, col: '#d06bff', from: 2, w: 6, d: 'Rapide et fragile. Elle fonce droit sur le gardien.' },
  esprit: { n: 'Esprit de glace', img: 'm1', hp: 26,  spd: 100, dmg: 9,  r: 26, col: '#7ad8ff', from: 2, w: 4, ranged: 1, d: 'Garde ses distances et tire des éclats de givre.' },
  bombe:  { n: 'Bombe vivante',  img: 'm4', hp: 30,  spd: 148, dmg: 24, r: 28, col: '#ff7a2e', from: 3, w: 4, boom: 1, d: 'Court vers sa cible et explose au contact.' },
  mage:   { n: 'Mage corrompu',  img: 'm2', hp: 46,  spd: 83, dmg: 11, r: 30, col: '#c58bff', from: 4, w: 3, ranged: 3, d: "Lance trois orbes d'ombre en éventail." },
  garde:  { n: 'Garde de pierre', img: 'm5', hp: 170, spd: 73, dmg: 18, r: 42, col: '#c9a57a', from: 5, w: 2, d: 'Lent, très résistant, frappe fort.' },
  ver:    { n: 'Ver des sables', img: 'm6', hp: 950, spd: 88, dmg: 26, r: 84, col: '#ffcf5a', from: 99, w: 0, boss: 1, d: 'BOSS. Charge le gardien et crache un anneau de projectiles.' }
};
const MON_IDS = Object.keys(MON);
const LAST_WAVE = 10;

const UPG = [
  { ic: 'swords', n: 'Dégâts +20 %', f: m => m.dmg *= 1.2 },
  { ic: 'bolt', n: 'Cadence +15 %', f: m => m.rate *= 1.15 },
  { ic: 'heart', n: 'PV max +25 et soin', f: (m, p) => { p.maxhp += 25; p.hp = Math.min(p.maxhp, p.hp + 40); } },
  { ic: 'boot', n: 'Vitesse +12 %', f: m => m.spd *= 1.12 },
  { ic: 'multi', n: '+1 projectile', f: m => m.multi += 1 },
  { ic: 'pierce', n: 'Perforation +1', f: m => m.pierce += 1 },
  { ic: 'magnet', n: "Aimant à éclats", f: m => m.magnet += 90 },
  { ic: 'hourglass', n: 'Recharge −15 %', f: m => m.cdr *= .85 },
  { ic: 'leech', n: 'Vol de vie', f: m => m.leech += 1 },
  { ic: 'target', n: 'Critique +12 %', f: m => m.crit += .12 }
];

const QUESTS = [
  { id: 'k', ic: 'skull', t: 'Vaincre 150 ennemis', goal: 150, get: s => s.q.kills, rew: { coins: 150, passXp: 150 } },
  { id: 'w', ic: 'wave', t: 'Atteindre la vague 5', goal: 5, get: s => s.q.wave, rew: { coins: 200, passXp: 150 } },
  { id: 'g', ic: 'pad', t: 'Jouer 2 parties', goal: 2, get: s => s.q.games, rew: { prisms: 20, passXp: 100 } }
];
const PASS_STEP = 300, PASS_PRICE = '4,99 €';
const PASS = [{ coins: 150 }, { orbs: 1 }, { coins: 250 }, { prisms: 20 }, { orbs: 1 }, { coins: 350 }, { prisms: 30 }, { orbs: 1 }, { coins: 500 }, { prisms: 80 }];
const PASSP = [{ prisms: 40 }, { orbs: 2 }, { cards: 3 }, { prisms: 60 }, { orbs: 2 }, { cards: 5 }, { prisms: 80 }, { orbs: 3 }, { cards: 8 }, { skin: 1, prisms: 200 }];
const SHOP_UP = [
  { id: 'hp', ic: 'heart', n: 'Vitalité', d: '+8 % PV' },
  { id: 'dmg', ic: 'swords', n: 'Puissance', d: '+6 % dégâts' },
  { id: 'spd', ic: 'boot', n: 'Célérité', d: '+3 % vitesse' }
];
const upCost = l => 100 * (l + 1);

/* notes de version : affichées une fois après chaque mise à jour, et consultables dans les Réglages. La plus récente en premier. */
const PATCH = [
  { v: '1.7', date: '11 novembre 2026', title: 'Le journal des nouveautés', items: [
    { img: 'ui/b_codex.webp', t: 'Notes de version', d: 'Après chaque mise à jour, cet écran te montre tout ce qui a changé, en images.' },
    { img: 'ui/bstar.webp', t: 'Mise à jour annoncée', d: "L'écran de mise à jour indique maintenant ce que contient la nouvelle version." },
    { img: 'ic/gear.webp', t: 'Toujours disponible', d: 'Retrouve toutes les anciennes notes dans Réglages, bouton « Nouveautés ».' } ] },
  { v: '1.6', date: '11 novembre 2026', title: 'Mises à jour en un geste', items: [
    { img: 'ui/bstar.webp', t: 'Mise à jour obligatoire', d: 'Quand une nouvelle version sort, un écran te propose de redémarrer le jeu. Ta progression est conservée.' },
    { img: 'ic/shield.webp', t: 'Jamais en pleine partie', d: "L'écran attend la fin de ta partie pour ne pas la couper." } ] },
  { v: '1.5', date: '11 novembre 2026', title: 'Tout est plus lisible', items: [
    { img: 'ui/b_shop.webp', t: 'Pages nettoyées', d: 'Plus de textes qui se chevauchent dans les boutiques, le pass, le codex et les réglages.' },
    { img: 'ui/st_2.webp', t: 'Constellations', d: 'Les étiquettes de récompense ne se recouvrent plus.' },
    { img: 'ic/swords.webp', t: 'En combat', d: 'Les annonces de combo ne passent plus sur le bandeau de vague.' } ] },
  { v: '1.4', date: '11 novembre 2026', title: 'TOX, constellations et groupe', items: [
    { img: 'tx/k4.webp', t: 'Les TOX', d: 'Chaque gardien a ses 4 pouvoirs : commun, rare, épique et un ultime légendaire.' },
    { img: 'ui/st_3.webp', t: 'Étoiles de TOX', d: "La couleur de l'étoile donne la rareté de la carte. Une étoile légendaire peut cacher une tenue rare." },
    { img: 'ui/b_shop.webp', t: 'Boutiques', d: 'Une boutique par gardien pour améliorer ses TOX, et une boutique de boosts en prismes.' },
    { img: 'tx/bx_pass.webp', t: 'Pass de saison', d: 'Une ligne gratuite et une ligne Premium qui rapporte plus.' },
    { img: 'ic/friends.webp', t: 'Groupe à 3', d: 'Crée un groupe, envoie le code : la carte grandit et les vagues durcissent.' },
    { img: 'ic/wave.webp', t: 'Carte et musiques', d: 'Arène plus grande et plus belle, héros plus rapides, élites, frénésie et nouvelles musiques.' } ] }
];
const KEY = 'eclyptia_mobile_v1';
function defSave() {
  const tox = {}; for (const id of TOX_IDS) tox[id] = { l: TOX[id].r === 0 ? 1 : 0, c: 0 };
  const hs = {}; for (const h of HERO_IDS) hs[h] = { hp: 0, dmg: 0, spd: 0 };
  return { v: 2, name: 'Gardien', coins: 200, prisms: 50, xp: 0, passXp: 0, passClaim: [], passClaimP: [], premium: false, owned: ['kaelion', 'elyra'], hero: 'kaelion',
    up: { hp: 0, dmg: 0, spd: 0 }, hs, tox, skins: [], skin: {}, boost: {}, bon: {}, bopen: 0, seen: '',
    stats: { games: 0, wins: 0, maxWave: 0, kills: 0, boss: 0, time: 0 }, codex: {}, orbs: 3, pity: 0,
    q: { day: '', kills: 0, wave: 0, games: 0, claimed: [] }, set: { btn: 1, lefty: false, vib: true, snd: true, mus: true, gfx: 1, fill: 1 } };
}
function loadSave() {
  const d = defSave();
  try {
    const o = JSON.parse(localStorage.getItem(KEY));
    if (!o) d.seen = BUILD;   // nouveau joueur : pas de notes de version au premier lancement
    if (o) {
      for (const k in d) if (o[k] !== undefined) d[k] = (d[k] && typeof d[k] === 'object' && !Array.isArray(d[k])) ? Object.assign(d[k], o[k]) : o[k];
      if (!o.v) { d.v = 2; for (const h of HERO_IDS) d.hs[h] = Object.assign({ hp: 0, dmg: 0, spd: 0 }, o.up || {}); d.orbs = (o.orbs || 0) + 3; }   // ancienne sauvegarde : améliorations reportées sur chaque gardien, 3 boosters offerts
    }
  } catch (e) {}
  return d;
}
let S = loadSave();
/* garde-fou : si le chargement précédent n'est pas allé au bout (page plantée), on repart en mode léger */
const BOOTN = (() => { try { const c = +localStorage.getItem('ecl_boot') || 0; localStorage.setItem('ecl_boot', c + 1); return c; } catch (e) { return 0; } })();
if (BOOTN >= 1 || /[?&]safe/.test(location.search)) { S.set.gfx = 0; try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
const bootOk = () => { try { localStorage.setItem('ecl_boot', 0); } catch (e) {} };
const lite = () => S.set.gfx === 0;
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
function dayCheck() { const d = new Date().toDateString(); if (S.q.day !== d) { S.q = { day: d, kills: 0, wave: 0, games: 0, claimed: [] }; save(); } }
const level = () => 1 + Math.floor(S.xp / 400);
/* cartes de TOX : la première débloque le pouvoir, les suivantes servent à l'améliorer */
function addCard(id, n) { const t = S.tox[id] || (S.tox[id] = { l: 0, c: 0 }); t.c += n || 1; let unlocked = false; if (t.l === 0) { t.l = 1; t.c -= 1; unlocked = true; } return unlocked; }
function randCard(rar, hero) {
  const own = S.owned, h = hero || (Math.random() < .6 ? S.hero : own[(Math.random() * own.length) | 0]);
  let r = rar; if (r === undefined) { const x = Math.random(); r = x < .5 ? 0 : x < .8 ? 1 : x < .95 ? 2 : 3; }
  return HEROES[h].tox[r];
}
function give(r) {
  let t = [];
  if (r.coins) { S.coins += r.coins; t.push('+' + r.coins + ' pièces'); } if (r.prisms) { S.prisms += r.prisms; t.push('+' + r.prisms + ' prismes'); } if (r.passXp) { S.passXp += r.passXp; t.push('+' + r.passXp + ' XP pass'); }
  if (r.orbs) { S.orbs = (S.orbs || 0) + r.orbs; t.push('+' + r.orbs + ' booster' + (r.orbs > 1 ? 's' : '')); }
  if (r.cards) { for (let i = 0; i < r.cards; i++) addCard(randCard(undefined, S.hero)); t.push('+' + r.cards + ' cartes TOX'); }
  if (r.skin) { const lk = S.owned.filter(h => !S.skins.includes(h)); if (lk.length) { const h = lk[(Math.random() * lk.length) | 0]; S.skins.push(h); t.push('Tenue : ' + SKINS[h].n); } else { S.prisms += 100; t.push('+100 prismes'); } }
  save(); return t.join('  ');
}
const skinOf = h => (S.skin[h] && S.skins.includes(h)) ? 1 : 0;
const himg = (h, sk) => `<img src="img/${HEROES[h].img}.jpg" draggable="false" alt=""${(sk === undefined ? skinOf(h) : sk) ? ` style="filter:hue-rotate(${SKINS[h].hue}deg) saturate(1.15)"` : ''}>`;
const tic = (id, cls) => `<img class="tic ${cls || ''}" src="img/tx/${id}.webp" draggable="false" alt="">`;

function vib(ms) { if (S.set.vib && navigator.vibrate) { try { navigator.vibrate(ms); } catch (e) {} } }

/* images */
const IMG = {};
const UI_IMG = ['ui/splash.jpg', 'ui/logo.webp', 'ui/loading.webp', 'ui/bar.webp', 'ui/fill.webp'];
const IC_ALL = ['prism', 'coin', 'shard', 'chest', 'salve', 'onde', 'heal', 'ult', 'dash', 'lock', 'codex', 'shield', 'tox', 'friends', 'quest', 'crown', 'swords', 'bolt', 'heart', 'boot', 'multi', 'pierce', 'magnet', 'hourglass', 'leech', 'target', 'skull', 'wave', 'pad', 'calendar', 'star', 'gear'];
function preload(urls, cb, prog) { let left = urls.length; if (!left) return cb(); urls.forEach(u => { const im = new Image(); im.onload = im.onerror = () => { left--; if (prog) prog(1 - left / urls.length); if (left === 0) cb(); }; im.src = 'img/' + u; }); }
function loadImages(cb, prog) {
  const names = ['h0', 'h1', 'h2', 'h3', 'h5', 'h6', 'm0', 'm1', 'm2', 'm3', 'm4', 'm5', 'm6'];
  let left = names.length + 1; const done = () => { left--; if (prog) prog(1 - left / (names.length + 1)); if (left === 0) cb(); };
  names.forEach(n => { const im = new Image(); im.onload = im.onerror = done; im.src = 'img/' + n + '.jpg'; IMG[n] = im; });
  preload(['ui/play.webp', 'bg.jpg', 'ui/menu.jpg', 'ui/booster.webp', 'ui/st_m.webp', 'ui/st_0.webp', 'ui/st_1.webp', 'ui/st_2.webp', 'ui/st_3.webp', 'ui/pagebg.jpg', 'kit/panel.webp', 'kit/ribbon.webp', 'kit/bgold.webp', 'kit/bvio.webp', 'kit/bgray.webp', 'kit/back.webp', 'kit/cardf.webp', 'kit/pillf.webp', 'kit/medf.webp', 'ui/bstar.webp'].concat(TOX_IDS.map(i => 'tx/' + i + '.webp')).concat(BOOSTS.map(b => 'tx/' + b.ic + '.webp')).concat(['tx/bx_pass.webp']).concat(['shop', 'codex', 'pass', 'quests', 'profile', 'collection', 'friends', 'settings'].map(n => 'ui/b_' + n + '.webp')).concat(IC_ALL.map(n => 'ic/' + n + '.webp')), done);
}
const SPR = {};
function sprite(img, r, ring) {
  const k = img + '|' + r + '|' + ring; if (SPR[k]) return SPR[k];
  const c = document.createElement('canvas'), s = r * 2 + 12; c.width = c.height = s;
  const x = c.getContext('2d'), im = IMG[img];
  x.save(); x.beginPath(); x.arc(s / 2, s / 2, r, 0, 7); x.clip();
  x.fillStyle = '#2a1650'; x.fillRect(0, 0, s, s);
  if (im && im.naturalWidth) { const sc = Math.max(2 * r / im.naturalWidth, 2 * r / im.naturalHeight), w = im.naturalWidth * sc, h = im.naturalHeight * sc; x.drawImage(im, s / 2 - w / 2, s / 2 - h / 2, w, h); }
  x.restore();
  x.lineWidth = 6; x.strokeStyle = '#150a2e'; x.beginPath(); x.arc(s / 2, s / 2, r + 1, 0, 7); x.stroke();
  x.lineWidth = 3.5; x.strokeStyle = ring; x.beginPath(); x.arc(s / 2, s / 2, r, 0, 7); x.stroke();
  return SPR[k] = c;
}
