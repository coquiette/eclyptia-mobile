'use strict';
let W = 1672, H = 941;
let AR = 1300; const VERSION = 'mobile 5.0', BUILD = '50';
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
/* TOX de rechange : chaque gardien a un 2e pouvoir rare (emplacement B) et un 2e pouvoir épique (emplacement C), à équiper à la place des premiers */
Object.assign(TOX, {
  k5: { n: 'Marteau de lumière', t: 'rain', cd: 9, num: 5, dk: 3.4, rad: 170, d: 'Cinq marteaux de lumière tombent sur les ennemis.' },
  k6: { n: 'Ferveur', t: 'buff', cd: 14, dur: 6, rate: 1.7, spd: 1.2, d: 'Tu tires bien plus vite pendant quelques secondes.' },
  e5: { n: 'Pas de braise', t: 'blink', cd: 6.5, dist: 400, rad: 260, dk: 3, d: 'Tu te téléportes dans une explosion de feu.' },
  e6: { n: 'Cœur de braise', t: 'buff', cd: 13, dur: 5, rate: 1.9, spd: 1.15, d: 'Ta cadence de tir explose un court instant.' },
  a5: { n: 'Geyser', t: 'slow', cd: 9, rad: 420, dur: 4, dk: 2, d: 'Un geyser blesse et ralentit tout autour de toi.' },
  a6: { n: 'Pluie de notes', t: 'rain', cd: 12, num: 10, dk: 2.2, rad: 140, d: 'Dix notes tombent en rafale sur les ennemis.' },
  v5: { n: "Voile d'ombre", t: 'slow', cd: 8, rad: 380, dur: 3.5, dk: 2.6, d: 'Un voile blesse et ralentit les ennemis proches.' },
  v6: { n: 'Soif de sang', t: 'drain', cd: 10, rad: 320, dk: 2.8, heal: .06, d: 'Tranche autour de toi et te soigne pour chaque ennemi.' },
  b5: { n: 'Charge du bélier', t: 'blink', cd: 7, dist: 460, rad: 280, dk: 4, d: "Tu fonces et tu écrases tout à l'arrivée." },
  b6: { n: "Pluie d'étincelles", t: 'rain', cd: 12, num: 7, dk: 3.2, rad: 170, d: 'Sept gerbes de forge explosent sur les ennemis.' },
  n5: { n: "Nova d'ombre", t: 'onde', cd: 8, rad: 400, dk: 3, kb: 500, d: "Une explosion d'ombre repousse les ennemis." },
  n6: { n: 'Pacte sombre', t: 'buff', cd: 14, dur: 6, rate: 1.6, spd: 1.35, d: 'Tu tires et tu cours plus vite.' },
  /* TOX passifs : toujours actifs, pour tous les gardiens */
  p1: { n: 'Cœur vaillant', t: 'pas', k: 'hp', v: 4, d: 'PV max augmentés pour tous tes gardiens.' },
  p2: { n: 'Œil du faucon', t: 'pas', k: 'crit', v: 2, d: 'Chance de coup critique augmentée.' },
  p3: { n: 'Bottes du vent', t: 'pas', k: 'spd', v: 2, d: 'Vitesse de déplacement augmentée.' },
  p4: { n: 'Trèfle doré', t: 'pas', k: 'coins', v: 5, d: 'Plus de pièces à la fin de chaque partie.' }
});
/* 14 TOX de plus par gardien (20 au total) : plusieurs choix pour chaque emplacement A, B, C et pour l'ultime */
const MORE = {
  k7: { n: "Lames d'aurore", t:'salve',cd:3.5,num:5,dk:1.7,cone:.9,pierce:3, d: "Cinq projectiles perçants en éventail.", h: 'kaelion', s: 0 },
  k8: { n: "Rayon solaire", t:'salve',cd:4.5,num:1,dk:5.5,cone:.1,pierce:12,r:38,sp:1100, d: "Un énorme projectile qui traverse tout.", h: 'kaelion', s: 0 },
  k9: { n: "Éclats de lumière", t:'rain',cd:4.5,num:4,dk:2.2,rad:130, d: "Quatre frappes rapides sur les ennemis.", h: 'kaelion', s: 0 },
  k10: { n: "Charge héroïque", t:'blink',cd:4,dist:300,rad:200,dk:2.4, d: "Un bond court qui frappe à l'arrivée.", h: 'kaelion', s: 0 },
  k11: { n: "Halo tranchant", t:'onde',cd:3.5,rad:220,dk:2.6,kb:350, d: "Une petite onde, très vite rechargée.", h: 'kaelion', s: 0 },
  k12: { n: "Bouclier radieux", t:'heal',cd:10,pct:.12,sh:3.5, d: "Un long bouclier et un peu de soin.", h: 'kaelion', s: 1 },
  k13: { n: "Chaînes de lumière", t:'slow',cd:9,rad:440,dur:4,dk:1.8, d: "Blesse et ralentit une grande zone.", h: 'kaelion', s: 1 },
  k14: { n: "Colonne sacrée", t:'pulse',cd:9,nw:3,rad:320,dk:1.7,kb:250, d: "Trois ondes à la suite autour de toi.", h: 'kaelion', s: 1 },
  k15: { n: "Lances du zénith", t:'salve',cd:7,num:3,dk:3.4,cone:.5,pierce:5,r:30, d: "Trois gros projectiles perçants.", h: 'kaelion', s: 1 },
  k16: { n: "Aube guérisseuse", t:'heal',cd:15,pct:.45,sh:1.5, d: "Un très gros soin.", h: 'kaelion', s: 2 },
  k17: { n: "Châtiment", t:'drain',cd:11,rad:360,dk:2.6,heal:.05, d: "Blesse autour de toi et te soigne pour chaque ennemi.", h: 'kaelion', s: 2 },
  k18: { n: "Ailes solaires", t:'buff',cd:13,dur:6,rate:1.35,spd:1.6, d: "Tu cours beaucoup plus vite et tu tires plus vite.", h: 'kaelion', s: 2 },
  k19: { n: "Éclipse dorée", t:'ult',dk:7,bk:11,hl:.5, d: "Frappe tous les ennemis et te rend la moitié de tes PV.", h: 'kaelion', s: 3 },
  k20: { n: "Colère du soleil", t:'ult',dk:12.5,bk:18, d: "Des dégâts énormes sur tous les ennemis.", h: 'kaelion', s: 3 },
  e7: { n: "Dards de braise", t:'salve',cd:3.5,num:5,dk:1.7,cone:.9,pierce:3, d: "Cinq projectiles perçants en éventail.", h: 'elyra', s: 0 },
  e8: { n: "Comète", t:'salve',cd:4.5,num:1,dk:5.5,cone:.1,pierce:12,r:38,sp:1100, d: "Un énorme projectile qui traverse tout.", h: 'elyra', s: 0 },
  e9: { n: "Étincelles folles", t:'rain',cd:4.5,num:4,dk:2.2,rad:130, d: "Quatre frappes rapides sur les ennemis.", h: 'elyra', s: 0 },
  e10: { n: "Saut de flamme", t:'blink',cd:4,dist:300,rad:200,dk:2.4, d: "Un bond court qui frappe à l'arrivée.", h: 'elyra', s: 0 },
  e11: { n: "Souffle ardent", t:'onde',cd:3.5,rad:220,dk:2.6,kb:350, d: "Une petite onde, très vite rechargée.", h: 'elyra', s: 0 },
  e12: { n: "Voile de cendres", t:'heal',cd:10,pct:.12,sh:3.5, d: "Un long bouclier et un peu de soin.", h: 'elyra', s: 1 },
  e13: { n: "Terre brûlée", t:'slow',cd:9,rad:440,dur:4,dk:1.8, d: "Blesse et ralentit une grande zone.", h: 'elyra', s: 1 },
  e14: { n: "Triple explosion", t:'pulse',cd:9,nw:3,rad:320,dk:1.7,kb:250, d: "Trois ondes à la suite autour de toi.", h: 'elyra', s: 1 },
  e15: { n: "Trident de feu", t:'salve',cd:7,num:3,dk:3.4,cone:.5,pierce:5,r:30, d: "Trois gros projectiles perçants.", h: 'elyra', s: 1 },
  e16: { n: "Renaissance du phénix", t:'heal',cd:15,pct:.45,sh:1.5, d: "Un très gros soin.", h: 'elyra', s: 2 },
  e17: { n: "Flammes voraces", t:'drain',cd:11,rad:360,dk:2.6,heal:.05, d: "Blesse autour de toi et te soigne pour chaque ennemi.", h: 'elyra', s: 2 },
  e18: { n: "Traînée de feu", t:'buff',cd:13,dur:6,rate:1.35,spd:1.6, d: "Tu cours beaucoup plus vite et tu tires plus vite.", h: 'elyra', s: 2 },
  e19: { n: "Cœur du volcan", t:'ult',dk:7,bk:11,hl:.5, d: "Frappe tous les ennemis et te rend la moitié de tes PV.", h: 'elyra', s: 3 },
  e20: { n: "Apocalypse de feu", t:'ult',dk:12.5,bk:18, d: "Des dégâts énormes sur tous les ennemis.", h: 'elyra', s: 3 },
  a7: { n: "Bulles perçantes", t:'salve',cd:3.5,num:5,dk:1.7,cone:.9,pierce:3, d: "Cinq projectiles perçants en éventail.", h: 'aria', s: 0 },
  a8: { n: "Harpon des abysses", t:'salve',cd:4.5,num:1,dk:5.5,cone:.1,pierce:12,r:38,sp:1100, d: "Un énorme projectile qui traverse tout.", h: 'aria', s: 0 },
  a9: { n: "Gouttes chantantes", t:'rain',cd:4.5,num:4,dk:2.2,rad:130, d: "Quatre frappes rapides sur les ennemis.", h: 'aria', s: 0 },
  a10: { n: "Glissade marine", t:'blink',cd:4,dist:300,rad:200,dk:2.4, d: "Un bond court qui frappe à l'arrivée.", h: 'aria', s: 0 },
  a11: { n: "Clapotis", t:'onde',cd:3.5,rad:220,dk:2.6,kb:350, d: "Une petite onde, très vite rechargée.", h: 'aria', s: 0 },
  a12: { n: "Bulle protectrice", t:'heal',cd:10,pct:.12,sh:3.5, d: "Un long bouclier et un peu de soin.", h: 'aria', s: 1 },
  a13: { n: "Marée glacée", t:'slow',cd:9,rad:440,dur:4,dk:1.8, d: "Blesse et ralentit une grande zone.", h: 'aria', s: 1 },
  a14: { n: "Trois vagues", t:'pulse',cd:9,nw:3,rad:320,dk:1.7,kb:250, d: "Trois ondes à la suite autour de toi.", h: 'aria', s: 1 },
  a15: { n: "Tridents d'écume", t:'salve',cd:7,num:3,dk:3.4,cone:.5,pierce:5,r:30, d: "Trois gros projectiles perçants.", h: 'aria', s: 1 },
  a16: { n: "Source de vie", t:'heal',cd:15,pct:.45,sh:1.5, d: "Un très gros soin.", h: 'aria', s: 2 },
  a17: { n: "Chant de sirène", t:'drain',cd:11,rad:360,dk:2.6,heal:.05, d: "Blesse autour de toi et te soigne pour chaque ennemi.", h: 'aria', s: 2 },
  a18: { n: "Courant rapide", t:'buff',cd:13,dur:6,rate:1.35,spd:1.6, d: "Tu cours beaucoup plus vite et tu tires plus vite.", h: 'aria', s: 2 },
  a19: { n: "Hymne de l'océan", t:'ult',dk:7,bk:11,hl:.5, d: "Frappe tous les ennemis et te rend la moitié de tes PV.", h: 'aria', s: 3 },
  a20: { n: "Déluge", t:'ult',dk:12.5,bk:18, d: "Des dégâts énormes sur tous les ennemis.", h: 'aria', s: 3 },
  v7: { n: "Shurikens d'ombre", t:'salve',cd:3.5,num:5,dk:1.7,cone:.9,pierce:3, d: "Cinq projectiles perçants en éventail.", h: 'vesper', s: 0 },
  v8: { n: "Lame traversante", t:'salve',cd:4.5,num:1,dk:5.5,cone:.1,pierce:12,r:38,sp:1100, d: "Un énorme projectile qui traverse tout.", h: 'vesper', s: 0 },
  v9: { n: "Coups furtifs", t:'rain',cd:4.5,num:4,dk:2.2,rad:130, d: "Quatre frappes rapides sur les ennemis.", h: 'vesper', s: 0 },
  v10: { n: "Roulade d'ombre", t:'blink',cd:4,dist:300,rad:200,dk:2.4, d: "Un bond court qui frappe à l'arrivée.", h: 'vesper', s: 0 },
  v11: { n: "Tourbillon de lames", t:'onde',cd:3.5,rad:220,dk:2.6,kb:350, d: "Une petite onde, très vite rechargée.", h: 'vesper', s: 0 },
  v12: { n: "Cape d'ombre", t:'heal',cd:10,pct:.12,sh:3.5, d: "Un long bouclier et un peu de soin.", h: 'vesper', s: 1 },
  v13: { n: "Piège du néant", t:'slow',cd:9,rad:440,dur:4,dk:1.8, d: "Blesse et ralentit une grande zone.", h: 'vesper', s: 1 },
  v14: { n: "Triple entaille", t:'pulse',cd:9,nw:3,rad:320,dk:1.7,kb:250, d: "Trois ondes à la suite autour de toi.", h: 'vesper', s: 1 },
  v15: { n: "Kunais géants", t:'salve',cd:7,num:3,dk:3.4,cone:.5,pierce:5,r:30, d: "Trois gros projectiles perçants.", h: 'vesper', s: 1 },
  v16: { n: "Méditation sombre", t:'heal',cd:15,pct:.45,sh:1.5, d: "Un très gros soin.", h: 'vesper', s: 2 },
  v17: { n: "Baiser du néant", t:'drain',cd:11,rad:360,dk:2.6,heal:.05, d: "Blesse autour de toi et te soigne pour chaque ennemi.", h: 'vesper', s: 2 },
  v18: { n: "Vitesse fantôme", t:'buff',cd:13,dur:6,rate:1.35,spd:1.6, d: "Tu cours beaucoup plus vite et tu tires plus vite.", h: 'vesper', s: 2 },
  v19: { n: "Danse des ombres", t:'ult',dk:7,bk:11,hl:.5, d: "Frappe tous les ennemis et te rend la moitié de tes PV.", h: 'vesper', s: 3 },
  v20: { n: "Exécution", t:'ult',dk:12.5,bk:18, d: "Des dégâts énormes sur tous les ennemis.", h: 'vesper', s: 3 },
  b7: { n: "Clous runiques", t:'salve',cd:3.5,num:5,dk:1.7,cone:.9,pierce:3, d: "Cinq projectiles perçants en éventail.", h: 'brakkor', s: 0 },
  b8: { n: "Boulet de forge", t:'salve',cd:4.5,num:1,dk:5.5,cone:.1,pierce:12,r:38,sp:1100, d: "Un énorme projectile qui traverse tout.", h: 'brakkor', s: 0 },
  b9: { n: "Marteaux volants", t:'rain',cd:4.5,num:4,dk:2.2,rad:130, d: "Quatre frappes rapides sur les ennemis.", h: 'brakkor', s: 0 },
  b10: { n: "Bond du forgeron", t:'blink',cd:4,dist:300,rad:200,dk:2.4, d: "Un bond court qui frappe à l'arrivée.", h: 'brakkor', s: 0 },
  b11: { n: "Coup d'enclume", t:'onde',cd:3.5,rad:220,dk:2.6,kb:350, d: "Une petite onde, très vite rechargée.", h: 'brakkor', s: 0 },
  b12: { n: "Plaque runique", t:'heal',cd:10,pct:.12,sh:3.5, d: "Un long bouclier et un peu de soin.", h: 'brakkor', s: 1 },
  b13: { n: "Sol en fusion", t:'slow',cd:9,rad:440,dur:4,dk:1.8, d: "Blesse et ralentit une grande zone.", h: 'brakkor', s: 1 },
  b14: { n: "Triple martèlement", t:'pulse',cd:9,nw:3,rad:320,dk:1.7,kb:250, d: "Trois ondes à la suite autour de toi.", h: 'brakkor', s: 1 },
  b15: { n: "Haches de lancer", t:'salve',cd:7,num:3,dk:3.4,cone:.5,pierce:5,r:30, d: "Trois gros projectiles perçants.", h: 'brakkor', s: 1 },
  b16: { n: "Chope du forgeron", t:'heal',cd:15,pct:.45,sh:1.5, d: "Un très gros soin.", h: 'brakkor', s: 2 },
  b17: { n: "Rune vampire", t:'drain',cd:11,rad:360,dk:2.6,heal:.05, d: "Blesse autour de toi et te soigne pour chaque ennemi.", h: 'brakkor', s: 2 },
  b18: { n: "Forge en furie", t:'buff',cd:13,dur:6,rate:1.35,spd:1.6, d: "Tu cours beaucoup plus vite et tu tires plus vite.", h: 'brakkor', s: 2 },
  b19: { n: "Rune de vie", t:'ult',dk:7,bk:11,hl:.5, d: "Frappe tous les ennemis et te rend la moitié de tes PV.", h: 'brakkor', s: 3 },
  b20: { n: "Marteau des dieux", t:'ult',dk:12.5,bk:18, d: "Des dégâts énormes sur tous les ennemis.", h: 'brakkor', s: 3 },
  n7: { n: "Griffes d'ombre", t:'salve',cd:3.5,num:5,dk:1.7,cone:.9,pierce:3, d: "Cinq projectiles perçants en éventail.", h: 'nyxara', s: 0 },
  n8: { n: "Rayon du vide", t:'salve',cd:4.5,num:1,dk:5.5,cone:.1,pierce:12,r:38,sp:1100, d: "Un énorme projectile qui traverse tout.", h: 'nyxara', s: 0 },
  n9: { n: "Nuée de chauves-souris", t:'rain',cd:4.5,num:4,dk:2.2,rad:130, d: "Quatre frappes rapides sur les ennemis.", h: 'nyxara', s: 0 },
  n10: { n: "Pas de sorcière", t:'blink',cd:4,dist:300,rad:200,dk:2.4, d: "Un bond court qui frappe à l'arrivée.", h: 'nyxara', s: 0 },
  n11: { n: "Cri du corbeau", t:'onde',cd:3.5,rad:220,dk:2.6,kb:350, d: "Une petite onde, très vite rechargée.", h: 'nyxara', s: 0 },
  n12: { n: "Cercle de protection", t:'heal',cd:10,pct:.12,sh:3.5, d: "Un long bouclier et un peu de soin.", h: 'nyxara', s: 1 },
  n13: { n: "Brume maudite", t:'slow',cd:9,rad:440,dur:4,dk:1.8, d: "Blesse et ralentit une grande zone.", h: 'nyxara', s: 1 },
  n14: { n: "Triple maléfice", t:'pulse',cd:9,nw:3,rad:320,dk:1.7,kb:250, d: "Trois ondes à la suite autour de toi.", h: 'nyxara', s: 1 },
  n15: { n: "Faux spectrales", t:'salve',cd:7,num:3,dk:3.4,cone:.5,pierce:5,r:30, d: "Trois gros projectiles perçants.", h: 'nyxara', s: 1 },
  n16: { n: "Potion noire", t:'heal',cd:15,pct:.45,sh:1.5, d: "Un très gros soin.", h: 'nyxara', s: 2 },
  n17: { n: "Festin d'âmes", t:'drain',cd:11,rad:360,dk:2.6,heal:.05, d: "Blesse autour de toi et te soigne pour chaque ennemi.", h: 'nyxara', s: 2 },
  n18: { n: "Balai volant", t:'buff',cd:13,dur:6,rate:1.35,spd:1.6, d: "Tu cours beaucoup plus vite et tu tires plus vite.", h: 'nyxara', s: 2 },
  n19: { n: "Lune de sang", t:'ult',dk:7,bk:11,hl:.5, d: "Frappe tous les ennemis et te rend la moitié de tes PV.", h: 'nyxara', s: 3 },
  n20: { n: "Nuit éternelle", t:'ult',dk:12.5,bk:18, d: "Des dégâts énormes sur tous les ennemis.", h: 'nyxara', s: 3 },
};
/* armes : chaque gardien en a deux ; la seconde s'achète en pièces et change son tir de base */
const WEAPONS = {
  kaelion: [{ n: "Épée de l'aube", d: 'Arme de départ', m: {} }, { n: "Lance solaire", d: "Tirs perçants, plus forts mais plus lents", k: 'lance', m: { pierce:2,rate:.8,dmg:1.25 }, cost: 1500 }],
  elyra: [{ n: "Bâton de braise", d: 'Arme de départ', m: {} }, { n: "Sceptre du phénix", d: "Un projectile de plus, dégâts réduits", k: 'sceptre', m: { multi:1,dmg:.75 }, cost: 1500 }],
  aria: [{ n: "Lyre des marées", d: 'Arme de départ', m: {} }, { n: "Harpe de corail", d: "Tire plus vite, un peu moins fort", k: 'harp', m: { rate:1.3,dmg:.85 }, cost: 1500 }],
  vesper: [{ n: "Dagues du néant", d: 'Arme de départ', m: {} }, { n: "Faux d'ombre", d: "Beaucoup plus de coups critiques, tir plus lent", k: 'scythe', m: { crit:.15,rate:.85 }, cost: 1500 }],
  brakkor: [{ n: "Marteau runique", d: 'Arme de départ', m: {} }, { n: "Canon de forge", d: "Gros boulets très puissants, tir lent", k: 'cannon', m: { dmg:1.5,rate:.7,big:1 }, cost: 1500 }],
  nyxara: [{ n: "Bâton d'ombre", d: 'Arme de départ', m: {} }, { n: "Grimoire maudit", d: "Un projectile de plus qui traverse, dégâts réduits", k: 'book', m: { multi:1,pierce:1,dmg:.7 }, cost: 1500 }],
};
const ALT = { kaelion: ['k5', 'k6'], elyra: ['e5', 'e6'], aria: ['a5', 'a6'], vesper: ['v5', 'v6'], brakkor: ['b5', 'b6'], nyxara: ['n5', 'n6'] }, PASSIVE = ['p1', 'p2', 'p3', 'p4'], HTOX = {};
for (const h of HERO_IDS) { HEROES[h].tox.forEach((id, i) => { TOX[id].h = h; TOX[id].s = i; }); ALT[h].forEach((id, i) => { TOX[id].h = h; TOX[id].s = i + 1; TOX[id].alt = 1; }); }
Object.assign(TOX, MORE);
for (const id in TOX) { const T = TOX[id]; T.id = id; if (T.h) { T.r = T.s; (HTOX[T.h] = HTOX[T.h] || []).push(id); } }
for (const h of HERO_IDS) HTOX[h].sort((a, b) => TOX[a].s - TOX[b].s);
PASSIVE.forEach((id, i) => { TOX[id].r = i < 2 ? 1 : 2; });
const TOX_IDS = Object.keys(TOX), TMAX = 10;
/* les 4 TOX équipés d'un gardien (A, B, C, ultime) : au choix parmi ceux qu'il a débloqués pour chaque emplacement */
function eqOf(h) { const t = HEROES[h].tox.slice(), e = (S.eq && S.eq[h]) || {}; for (let s = 0; s < 4; s++) { const id = e[s]; if (id && TOX[id] && TOX[id].h === h && TOX[id].s === s && (S.tox[id] || {}).l) t[s] = id; else if (!(S.tox[t[s]] || {}).l) { const o = HTOX[h].find(x => TOX[x].s === s && (S.tox[x] || {}).l); if (o) t[s] = o; } } return t; }
const pasLv = id => (S.tox[id] || {}).l || 0;
const wpOf = h => (S.wp && S.wp[h] && S.wpo && S.wpo[h]) ? 1 : 0;
/* paliers de copies : 10 copies pour le niveau 2, puis 20 de plus à chaque niveau (30, 50, 70… copies au total) */
const tneed = l => l < 1 ? 1 : l === 1 ? 10 : 20, tcost = (l, r) => 80 * l * (r + 1);
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
const MAPS = ['Sanctuaire astral', 'Forêt enchantée', 'Désert solaire', 'Glacier éternel', 'Volcan de braise', 'Grotte de cristal', 'Cimetière des ombres', 'Jardin céleste', 'Abysses marins'];
const PATCH = [
  { v: '5.0', date: '12 novembre 2026', title: 'Des cartes entourées d’un vrai paysage', items: [
    { img: 'ic/wave.webp', t: 'Un monde autour de l’arène', d: 'Les neuf cartes ne flottent plus dans le vide : forêt, dunes, banquise, mer de lave, fond marin, cimetière brumeux, mer de nuages ou champ d’étoiles s’étendent tout autour.' },
    { img: 'ic/star.webp', t: 'Décors jusqu’à l’horizon', d: 'Arbres, cristaux, coraux, tombes, cactus… plantés partout autour, avec des reliefs au loin. Le sol de lave, l’eau et la brume sont animés.' } ] },
  { v: '4.9', date: '12 novembre 2026', title: 'Monstres fantômes corrigés', items: [
    { img: 'm0.jpg', t: 'Plus de monstres figés', d: 'À la fin du chrono, certains monstres restaient affichés sans bouger et sans pouvoir être touchés. Ils disparaissent maintenant correctement.' },
    { img: 'ic/skull.webp', t: 'Traces au sol', d: 'Un monstre vaincu laisse une tache discrète de sa couleur, qui reste au sol jusqu’à la fin de la partie.' },
    { img: 'ic/heart.webp', t: 'Barre de vie', d: 'Fiche du joueur refaite : grand portrait, grosse barre de vie, fine barre d’ultime, et rien d’autre.' },
    { img: 'kit/r_dice.webp', t: 'Relance', d: 'Les cartes se retournent face cachée, puis se dévoilent une à une. Les cartes épiques et légendaires arrivent avec un éclat.' } ] },
  { v: '4.8', date: '12 novembre 2026', title: 'Menu remis en ordre', items: [
    { img: 'kit/r_gift.webp', t: 'Plus de chevauchement', d: 'Le cadeau du jour et le TOX du jour sont maintenant l’un au-dessus de l’autre à gauche : ils ne passent plus sur le bouton Profil.' } ] },
  { v: '4.7', date: '12 novembre 2026', title: 'Vagues au chrono', items: [
    { img: 'ic/hourglass.webp', t: 'Tiens jusqu’au bout du temps', d: 'Une vague ne se gagne plus en tuant un nombre de monstres : il faut survivre jusqu’à la fin du chrono (25 à 50 secondes). Les monstres arrivent de plus en plus vite.' },
    { img: 'ic/skull.webp', t: 'Les boss restent des boss', d: 'Aux vagues 4, 7 et 10, pas de chrono : il faut battre le boss.' },
    { img: 'ic/wave.webp', t: 'Bandeau simplifié', d: 'En haut de l’écran : le numéro de la vague et le temps restant, rien d’autre.' },
    { img: 'kit/r_dice.webp', t: 'Relance animée', d: 'Dans la mini-boutique, les cartes se retournent une à une quand tu relances, sans recharger la page.' } ] },
  { v: '4.6', date: '12 novembre 2026', title: 'Menu plus voyant, téléphone plus frais', items: [
    { img: 'kit/r_gift.webp', t: 'Cadeau et TOX du jour', d: 'Deux gros boutons sur le menu : dorés et animés quand il y a quelque chose à prendre, violets avec le temps restant sinon.' },
    { img: 'ic/bolt.webp', t: 'Énergie', d: 'Nouveau réglage Auto, Éco ou Max. En Éco, le jeu tourne à 30 images par seconde et le téléphone chauffe moins.' },
    { img: 'ic/hourglass.webp', t: 'Au repos', d: 'Les animations des menus se mettent en pause après 20 secondes sans toucher l’écran, et le jeu calcule beaucoup moins pendant la mini-boutique et la pause.' } ] },
  { v: '4.5', date: '12 novembre 2026', title: 'Mini-boutique plus fluide', items: [
    { img: 'tx/k1.webp', t: 'Achat animé', d: 'La carte flashe, des étincelles jaillissent et l’icône s’envole jusqu’à son emplacement, sans recharger toute la boutique.' },
    { img: 'kit/r_lock.webp', t: 'Cadenas discret', d: 'Un petit cadenas en haut de chaque carte : il s’allume et la carte prend un liseré doré quand elle est gardée.' } ] },
  { v: '4.4', date: '12 novembre 2026', title: 'Cartes gardées et contours', items: [
    { img: 'kit/r_lock.webp', t: 'Garder une carte', d: 'Dans la mini-boutique, le bouton GARDER conserve une carte pendant les relances et jusqu’à la vague suivante (3 au maximum).' },
    { img: 'm0.jpg', t: 'Monstres plus visibles', d: 'Contour noir autour de chaque monstre, et un son à chaque apparition.' },
    { img: 'h0.jpg', t: 'Gardiens détourés', d: 'Contour blanc autour de ton gardien et de tes coéquipiers.' },
    { img: 'kit/r_music.webp', t: 'Sons et musique', d: 'Sons moins agressifs, et trois styles de musique au choix dans les Réglages : Doux, Épique ou Rétro.' } ] },
  { v: '4.3', date: '12 novembre 2026', title: 'Jeu hors ligne', items: [
    { img: 'ic/shield.webp', t: 'Joue sans internet', d: 'Le jeu garde tous ses fichiers sur ton appareil. Quand le menu affiche « hors ligne prêt » en bas à droite, tu peux jouer en solo sans réseau.' },
    { img: 'ic/friends.webp', t: 'Ce qui demande internet', d: 'Le groupe entre amis et les mises à jour ont toujours besoin d’une connexion.' } ] },
  { v: '4.2', date: '12 novembre 2026', title: 'Sauvegarde du compte', items: [
    { img: 'ic/shield.webp', t: 'Code de sauvegarde', d: 'Dans Profil, bouton SAUVEGARDE : un code contient tout ton compte. Copie-le ou envoie-le-toi, puis colle-le pour restaurer, même sur un autre appareil.' },
    { img: 'ic/chest.webp', t: 'Copies automatiques', d: 'Le jeu garde tout seul une copie des 3 derniers jours sur l’appareil.' },
    { img: 'kit/r_gift.webp', t: 'Cadeaux : une seule fois par jour', d: 'Le cadeau du jour et le TOX du jour ne peuvent plus être repris après un redémarrage du jeu ni en changeant l’heure du téléphone.' } ] },
  { v: '4.1', date: '12 novembre 2026', title: 'Boutons ronds illustrés', items: [
    { img: 'kit/r_pause.webp', t: 'Nouveaux boutons', d: 'Pause, relance de la mini-boutique, flèches du Codex, fermeture et cadeau du jour sont maintenant de vrais boutons illustrés.' } ] },
  { v: '4.0', date: '12 novembre 2026', title: 'Récompenses quotidiennes', items: [
    { img: 'ui/bstar.webp', t: 'Un cadeau par jour', d: 'Sept jours qui s’enchaînent : pièces, prismes, cartes TOX, puis des packs étoiles. La série repart à zéro si tu sautes un jour.' },
    { img: 'tx/k2.webp', t: 'Musiques retravaillées', d: 'Son plus chaud, mélodies construites sur des motifs qui reviennent, instruments plus doux et tempos un peu plus posés.' } ] },
  { v: '3.9', date: '11 novembre 2026', title: 'Stabilité et capes', items: [
    { img: 'tx/k3.webp', t: 'Jeu plus léger', d: 'Moins de mémoire utilisée : image 3D allégée, modèles inutiles libérés entre les parties, effets d’écran simplifiés.' },
    { img: 'ui/bstar.webp', t: 'Garde-fou', d: 'Si le téléphone ferme le jeu, il le signale au retour et passe tout seul en affichage allégé.' },
    { img: 'tx/k1.webp', t: 'Capes et robes', d: 'Le buste se tord beaucoup moins pour viser, le gardien recule en tirant derrière lui, et les capes restent près du corps.' } ] },
  { v: '3.8', date: '11 novembre 2026', title: 'Objets des gardiens', items: [
    { img: 'tx/ki1.webp', t: '48 objets, 8 par gardien', d: 'Anneaux, capes, bottes, amulettes… Un objet renforce le gardien lui-même : vitesse, PV, dégâts, cadence, critique, recharge, aimant ou chance.' },
    { img: 'tx/ni8.webp', t: 'Toujours actifs', d: 'Ils se trouvent dans les packs étoiles et le TOX du jour, montent de niveau avec les copies, et se voient dans le nouvel onglet OBJETS de chaque gardien.' },
    { img: 'tx/ei5.webp', t: 'En vente entre les vagues', d: 'La mini-boutique propose aussi des objets : chaque achat s’ajoute pour toute la partie et se cumule.' },
    { img: 'ui/bstar.webp', t: 'Chargement et transitions', d: 'Nouvel écran de chargement avec barre et conseil, pages qui s’ouvrent en cascade.' } ] },
  { v: '3.7', date: '11 novembre 2026', title: 'Mini-boutique en cartes', items: [
    { img: 'tx/k4.webp', t: 'Quatre grandes cartes', d: 'Entre les vagues, chaque TOX a sa carte avec une grande image, sa rareté, son emplacement et un gros bouton de prix.' },
    { img: 'tx/k1.webp', t: 'Ce que l’achat change, en images', d: 'Chaque carte montre si le TOX débloque un emplacement, remplace ton TOX actuel ou l’améliore d’un niveau.' } ] },
  { v: '3.6', date: '11 novembre 2026', title: 'Animations des gardiens', items: [
    { img: 'tx/k1.webp', t: 'Attaque en courant', d: 'Le haut du corps frappe ou lance ses sorts pendant que les jambes continuent de courir.' },
    { img: 'tx/k4.webp', t: 'Un geste par pouvoir', d: 'Fente pour le TOX A, petit saut pour le B, appui pour le C et grand saut tournoyant pour l’ultime.' },
    { img: 'ui/b_shop.webp', t: 'Menu et boutique sans cadres', d: 'Les cadres dorés autour des boutons du menu et de la boutique ont été retirés.' } ] },
  { v: '3.5', date: '11 novembre 2026', title: 'Écran de jeu épuré et nouvelles musiques', items: [
    { img: 'tx/k1.webp', t: 'Boutons sans cadre', d: 'En jeu, les pouvoirs, la pause et les combos n’ont plus de cadre. Un pouvoir flashe quand il est de nouveau prêt.' },
    { img: 'tx/k2.webp', t: 'Annonce de vague discrète', d: 'Plus de grande bande en travers de l’écran : un titre plus petit, qui disparaît plus vite.' },
    { img: 'ui/bstar.webp', t: 'Musiques', d: 'Cinq nouveaux morceaux, des passages calmes, des montées, et un changement de morceau deux fois plus fréquent.' },
    { img: 'tx/k3.webp', t: 'Fluidité', d: 'Le jeu baisse plus vite sa finesse d’image quand le téléphone peine, pour rester fluide.' } ] },
  { v: '3.4', date: '11 novembre 2026', title: 'Codex aéré et affichage en jeu allégé', items: [
    { img: 'ui/b_codex.webp', t: 'Codex refait', d: 'Les monstres sont sur des pages de 10 grandes cartes, avec une fiche plus lisible. Les TOX ont plus d’espace entre eux.' },
    { img: 'tx/k2.webp', t: 'Haut de l’écran plus léger en jeu', d: 'Le bandeau de vague et la fiche du gardien prennent beaucoup moins de place.' } ] },
  { v: '3.3', date: '11 novembre 2026', title: 'Nouvelle boutique et TOX du jour', items: [
    { img: 'ui/b_shop.webp', t: 'Boutique refaite', d: 'Quatre onglets avec de gros boutons : TOX du jour, offres, tenues en prismes, boosts et packs.' },
    { img: 'tx/k4.webp', t: 'TOX du jour', d: 'Chaque jour, 4 TOX offerts : tu en prends 1 seul, par lot de 5, 10, 20 ou même 50 copies avec de la chance.' },
    { img: 'tx/k1.webp', t: 'Mini-boutique entre les vagues', d: 'Une liste de 4 TOX avec leur prix en éclats, une relance payante de plus en plus chère, et tu peux en acheter plusieurs.' },
    { img: 'ui/bstar.webp', t: 'Achats animés et menu rangé', d: 'Chaque achat déclenche une vraie animation. Les packs étoiles et le TOX du jour sont en bas à gauche du menu.' } ] },
  { v: '3.2', date: '11 novembre 2026', title: 'Effets, Codex et monstres uniques', items: [
    { img: 'tx/k4.webp', t: 'Nouveaux effets visuels', d: 'Projectiles en comète avec traînée, éclairs de tir, aura sous les gardiens, explosions de pouvoir selon la rareté et ultimes bien plus spectaculaires.' },
    { img: 'h3.jpg', t: 'Déplacements retravaillés', d: 'Les gardiens penchent dans les virages, soulèvent de la poussière en courant et laissent une traînée en esquivant.' },
    { img: 'mx_bombe_mar.jpg', t: 'Chaque monstre a son identité', d: 'Les 18 monstres des cartes ont leur nom, leur portrait dans le Codex et leur caractère : ceux de la forêt sont plus résistants, les marins plus rapides, ceux du volcan frappent plus fort.' },
    { img: 'mx_xalven.jpg', t: 'Portraits des boss mythiques', d: 'Xalven, le Cyclope et Scorch ont leur vrai portrait dans le Codex.' } ] },
  { v: '3.1', date: '11 novembre 2026', title: 'Les cartes refaites', items: [
    { img: 'bg.jpg', t: '9 cartes retravaillées', d: 'Bordure de pierre autour de l\'arène, décors plus nombreux, et un sol animé sur chaque carte : lave qui pulse, eau qui ondule, feuilles, sable, givre…' },
    { img: 'm1.jpg', t: 'Des monstres selon la carte', d: '18 nouveaux monstres : créatures de la forêt et du désert, monstres marins dans les Abysses et le Glacier, monstres de lave dans le Volcan.' },
    { img: 'ui/play.webp', t: 'Nouvelle carte : Abysses marins', d: 'Coraux, algues, coquillages et monstres marins.' } ] },
  { v: '3.0', date: '11 novembre 2026', title: 'Boss mythiques, bénédictions et combos', items: [
    { img: 'm7.jpg', t: 'Boss mythiques', d: 'Des boss moyens aux vagues 4 et 7 et un gros boss mythique à la dernière vague (Xalven, le Cyclope ou Scorch), en plusieurs phases avec cinématiques. Moins de monstres pendant les vagues.' },
    { img: 'tx/k2.webp', t: 'Bénédictions et mini-boutique de TOX', d: 'À la fin de chaque vague : 1 bénédiction parmi 4, puis 1 TOX de ton gardien parmi 4. La chance fait sortir des TOX plus rares.' },
    { img: 'h0.jpg', t: 'Combos de gardien', d: 'Chaque gardien a 2 combos : lance tes pouvoirs dans le bon ordre pour déclencher une attaque dévastatrice. Le guide est affiché en jeu.' },
    { img: 'ui/b_friends.webp', t: 'Pseudo, comptes et amis', d: 'Choisis ton pseudo, tes amis le tapent pour rejoindre ton groupe. Plusieurs comptes possibles depuis le Profil.' },
    { img: 'ui/bstar.webp', t: 'Classé et paliers de TOX', d: 'Des rangs de Bronze à Mythique, de plus en plus durs. Chaque partie finie à la vague 4 donne 1 étoile de booster, une victoire en donne 2 (4 étoiles = 1 booster). Les TOX montent par paliers : 10, 30, 50, 70 copies…' },
    { img: 'ui/play.webp', t: 'Nouvel affichage en jeu', d: 'Barre de vie, vagues, barre de boss et compteurs agrandis, avec des « +1 » qui s\'envolent.' } ] },
  { v: '2.8', date: '11 novembre 2026', title: 'Nouvelles animations et musiques', items: [
    { img: 'h3.jpg', t: 'Les gardiens prennent vie', d: 'Animation d\'attente, coup d\'arme ou lancer de sort quand ils attaquent à l\'arrêt, et vraie chute quand ils tombent au combat.' },
    { img: 'ui/play.webp', t: 'Musiques moins répétitives', d: 'Plusieurs morceaux par ambiance, des arrangements qui changent sans arrêt, des mélodies improvisées et une tonalité différente selon la carte.' } ] },
  { v: '2.7', date: '11 novembre 2026', title: 'Tous les gardiens en vraie 3D', items: [
    { img: 'h2.jpg', t: 'Aria, Vesper, Brakkor et Nyxara', d: 'Les quatre derniers gardiens ont leur vrai modèle 3D animé. Les six héros et les sept monstres sont maintenant tous en 3D détaillée.' } ] },
  { v: '2.6', date: '11 novembre 2026', title: 'Les monstres en vraie 3D', items: [
    { img: 'm0.jpg', t: '7 nouveaux modèles de monstres', d: 'Larve d\'ombre, Chauve-souris, Esprit de glace, Bombe vivante, Mage corrompu, Garde de pierre et le boss Ver des sables ont chacun un vrai modèle 3D détaillé.' } ] },
  { v: '2.5', date: '11 novembre 2026', title: 'Animations corrigées', items: [
    { img: 'h0.jpg', t: 'Courir et tirer en même temps', d: 'Le personnage ne se retourne plus à chaque tir : ses jambes suivent ton déplacement et seul son buste vise l\'ennemi.' } ] },
  { v: '2.4', date: '11 novembre 2026', title: '8 cartes différentes', items: [
    { img: 'bg.jpg', t: 'Une nouvelle carte à chaque partie', d: 'Sanctuaire astral, Forêt enchantée, Désert solaire, Glacier éternel, Volcan de braise, Grotte de cristal, Cimetière des ombres et Jardin céleste : sol, ciel, lumière et décors changent.' },
    { img: 'h1.jpg', t: 'Elyra en 3D', d: 'La mage de feu a son vrai modèle 3D animé.' },
    { img: 'h0.jpg', t: 'Cape de Kaelion corrigée', d: 'Retravaillée dans Blender : elle ne se déforme plus et flotte quand il court.' } ] },
  { v: '2.3', date: '11 novembre 2026', title: 'Elyra en 3D, capes qui flottent', items: [
    { img: 'h1.jpg', t: 'Nouveau modèle 3D d\'Elyra', d: 'La mage de feu a son vrai modèle 3D animé, avec sa chevelure de flammes.' },
    { img: 'h0.jpg', t: 'Cape de Kaelion corrigée', d: 'Retravaillée dans Blender : la cape et les pans d\'armure ne se déforment plus et flottent quand il court.' } ] },
  { v: '2.2', date: '11 novembre 2026', title: 'Kaelion en vraie 3D', items: [
    { img: 'h0.jpg', t: 'Nouveau modèle 3D de Kaelion', d: 'Kaelion a un vrai modèle 3D détaillé, avec armure dorée et animation de course. Les autres gardiens et les monstres suivront.' } ] },
  { v: '2.1', date: '11 novembre 2026', title: 'Plus lisible, plus rapide', items: [
    { img: 'tx/k1.webp', t: 'Page TOX agrandie', d: 'Textes plus gros et boutons ÉQUIPER, onglets et armes plus faciles à toucher.' },
    { img: 'm0.jpg', t: 'Codex agrandi', d: 'Icônes des TOX et des monstres bien plus grandes, textes plus gros partout dans le Codex.' },
    { img: 'ui/play.webp', t: 'Transitions en glissé', d: 'Les pages glissent rapidement de côté : la navigation est deux fois plus vive.' } ] },
  { v: '2.0', date: '11 novembre 2026', title: '120 TOX et des armes', items: [
    { img: 'tx/k19.webp', t: '20 TOX par gardien', d: 'Chaque gardien a maintenant 20 pouvoirs : plusieurs choix pour chaque emplacement et pour l\'ultime.' },
    { img: 'tx/wp_kaelion1.webp', t: '2 armes par gardien', d: 'Une seconde arme à acheter en pièces : elle change le tir de base et l\'apparence.' },
    { img: 'ui/st_2.webp', t: 'Étoiles et niveaux', d: 'Les TOX montent de niveau tout seuls avec les copies trouvées dans les étoiles.' },
    { img: 'tx/k1.webp', t: 'Page TOX', d: 'Le bouton TOX de chaque gardien montre tous ses pouvoirs, ses copies et ce qui est équipé.' },
    { img: 'ui/b_shop.webp', t: 'Gros boutons', d: 'Les boutons de la boutique sont plus grands. Les boutiques de gardien sont retirées.' } ] },
  { v: '1.9', date: '11 novembre 2026', title: 'Les étoiles font tout', items: [
    { img: 'ui/st_2.webp', t: 'TOX améliorés par les étoiles', d: 'Fini les pièces : un TOX monte de niveau tout seul dès que tu as assez de copies.' },
    { img: 'tx/k1.webp', t: 'Bouton « TOX »', d: 'Chaque gardien a sa page TOX : ses 6 pouvoirs, leur niveau, tes copies et ce qui est équipé.' },
    { img: 'ui/b_shop.webp', t: 'Boutiques de gardien retirées', d: "Plus d'amélioration de statistiques à acheter. Tes bonus déjà achetés sont conservés." } ] },
  { v: '1.8', date: '11 novembre 2026', title: 'Étoiles, hordes et nouveaux pouvoirs', items: [
    { img: 'ui/st_3.webp', t: 'Boosters à 4 étoiles', d: "Chaque étoile révèle une carte : l'image du TOX, ce qu'il fait et tes copies." },
    { img: 'tx/k4.webp', t: 'Légendaire spectaculaire', d: 'Un TOX légendaire ou une tenue rare déclenche une grande révélation.' },
    { img: 'tx/n5.webp', t: '16 nouveaux TOX', d: 'Un 2e pouvoir rare et épique par gardien, à équiper dans sa boutique, et 4 passifs.' },
    { img: 'm0.jpg', t: 'Des hordes de monstres', d: 'Beaucoup plus de monstres dès la première vague, mais ils cognent moins fort.' },
    { img: 'ic/wave.webp', t: 'Nouvelles musiques', d: 'Trois musiques de plus : pages, combat avancé et constellations. Sons plus riches.' },
    { img: 'h0.jpg', t: 'Images plus nettes', d: 'Portraits des gardiens et des monstres redessinés, icônes en haute définition.' } ] },
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
const KEY0 = 'eclyptia_mobile_v1', ACCK = 'eclyptia_accounts';
/* plusieurs comptes sur le même appareil : chacun a sa propre sauvegarde */
let ACC = (() => { try { const a = JSON.parse(localStorage.getItem(ACCK)); if (a && a.list && a.list.length) return a; } catch (e) {} return { cur: 0, list: [{ id: 0 }] }; })();
let KEY = ACC.cur ? KEY0 + '_' + ACC.cur : KEY0;
const pslug = s => String(s || '').toUpperCase().normalize('NFD').replace(/[^A-Z0-9]/g, '').slice(0, 14);
function defSave() {
  const tox = {}; for (const id of TOX_IDS) tox[id] = { l: TOX[id].h && HEROES[TOX[id].h].tox[0] === id ? 1 : 0, c: 0 };
  const hs = {}; for (const h of HERO_IDS) hs[h] = { hp: 0, dmg: 0, spd: 0 };
  return { v: 2, named: false, friends: [], rp: 0, bst: 0, daily: null, dr: null, dmax: 0, crash: 0, crashAt: '', paid: [], starter: false, bkAt: 0, offOk: 0, name: 'Gardien', coins: 200, prisms: 50, xp: 0, passXp: 0, passClaim: [], passClaimP: [], premium: false, owned: ['kaelion', 'elyra'], hero: 'kaelion',
    up: { hp: 0, dmg: 0, spd: 0 }, hs, tox, skins: [], skin: {}, eq: {}, wp: {}, wpo: {}, boost: {}, bon: {}, bopen: 0, seen: '',
    stats: { games: 0, wins: 0, maxWave: 0, kills: 0, boss: 0, time: 0 }, codex: {}, orbs: 3, pity: 0,
    q: { day: '', kills: 0, wave: 0, games: 0, claimed: [] }, set: { btn: 1, lefty: false, vib: true, snd: true, mus: true, gfx: 1, fill: 1, mst: 0, eco: 0 } };
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
  for (const id in d.tox) if (d.tox[id] && typeof TOX !== 'undefined' && TOX[id]) autoLv(d.tox[id]);
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
/* les TOX montent de niveau tout seuls dès qu'il y a assez de copies : seules les étoiles des boosters les améliorent */
function autoLv(t) { let up = 0; while (t.l >= 1 && t.l < TMAX && t.c >= tneed(t.l)) { t.c -= tneed(t.l); t.l++; up++; } return up; }
let LASTUP = 0;
function addCard(id, n) { const t = S.tox[id] || (S.tox[id] = { l: 0, c: 0 }); t.c += n || 1; let unlocked = false; if (t.l === 0) { t.l = 1; t.c -= 1; unlocked = true; } LASTUP = autoLv(t); return unlocked; }
function randCard(rar, hero, main) {
  const own = S.owned, h = hero || (Math.random() < .6 ? S.hero : own[(Math.random() * own.length) | 0]);
  let r = rar; if (r === undefined) { const x = Math.random(); r = x < .5 ? 0 : x < .8 ? 1 : x < .95 ? 2 : 3; }
  if (main) return HEROES[h].tox[r];
  /* on favorise les TOX déjà possédés (pour les faire monter), tout en laissant en découvrir de nouveaux */
  const all = HTOX[h].filter(id => TOX[id].r === r), mine = all.filter(id => (S.tox[id] || {}).l), c = (mine.length && Math.random() < .5 ? mine : all).slice(); if (Math.random() < .12) for (const p of PASSIVE) if (TOX[p].r === r) c.push(p);
  return c[(Math.random() * c.length) | 0];
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
  preload(['ui/play.webp', 'bg.jpg', 'ui/menu.jpg', 'ui/booster.webp', 'ui/st_m.webp', 'ui/st_0.webp', 'ui/st_1.webp', 'ui/st_2.webp', 'ui/st_3.webp', 'ui/pagebg.jpg', 'kit/panel.webp', 'kit/ribbon.webp', 'kit/bgold.webp', 'kit/bvio.webp', 'kit/bgray.webp', 'kit/back.webp', 'kit/cardf.webp', 'kit/pillf.webp', 'kit/medf.webp', 'ui/bstar.webp'].concat(BOOSTS.map(b => 'tx/' + b.ic + '.webp')).concat(['tx/bx_pass.webp']).concat(['shop', 'codex', 'pass', 'quests', 'profile', 'collection', 'friends', 'settings'].map(n => 'ui/b_' + n + '.webp')).concat(IC_ALL.map(n => 'ic/' + n + '.webp')), done);
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
