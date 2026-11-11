'use strict';
let TTAB = 0, CH = null; let SCREEN = 'load', SEL = null, CSEL = 'larve', CTAB = 'mon', TSEL = 'k1', LAUNCH = null, toastT = 0;
const ui = () => $('#ui');
function toast(s) { const t = $('#toast'); t.textContent = s; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 2200); }
const spk = n => Array.from({ length: n }, (_, i) => `<i class="spk" style="left:${(i * 137.5) % 100}%;top:${20 + (i * 61) % 75}%;animation-delay:${(i * .37) % 3}s;animation-duration:${2.4 + (i % 4) * .5}s"></i>`).join('');
const stars = n => Array.from({ length: n }, (_, i) => `<i class="star" style="left:${(i * 61.8) % 100}%;top:${(i * 38.2) % 100}%;animation-delay:${(i * .29) % 2.4}s;width:${3 + i % 4}px;height:${3 + i % 4}px"></i>`).join('');
const cur = () => `<div class="cur"><span class="pill">${ic('prism')} ${S.prisms}</span><span class="pill">${ic('coin')} ${S.coins}</span></div>`;
const head = (t, bk) => `<div class="bg"></div>${spk(5)}<div class="top"><button class="back" data-a="go" data-v="${bk || 'menu'}">◀ RETOUR</button><div class="ttl">${t}</div>${cur()}</div>`;
const bst = cls => `<img class="ici ${cls || ''}" src="img/ui/bstar.webp" draggable="false" alt="">`;
const rewTxt = r => [r.coins ? r.coins + ' ' + ic('coin') : '', r.prisms ? r.prisms + ' ' + ic('prism') : '', r.orbs ? r.orbs + ' ' + bst() : '', r.cards ? r.cards + ' ' + ic('tox') : '', r.skin ? ic('crown') : '', r.passXp ? r.passXp + ' XP' : ''].filter(Boolean).join(' · ');
const pips = l => `<div class="pips">${Array.from({ length: 10 }, (_, i) => `<i class="${i < l ? 'on' : ''}"></i>`).join('')}</div>`;
function tfx(T, l) {
  const K = tk(l), x = v => '×' + (v * K).toFixed(1), cd = T.cd ? ' · recharge ' + tcd(T, l) + ' s' : '';
  if (T.t === 'pas') return 'Niveau ' + l + ' : +' + T.v * l + ' % · toujours actif';
  if (T.t === 'pulse') return T.nw + ' ondes · dégâts ' + x(T.dk) + cd;
  if (T.t === 'salve') return T.num + ' projectiles · dégâts ' + x(T.dk) + cd; if (T.t === 'onde') return 'Zone ' + T.rad + ' · dégâts ' + x(T.dk) + cd;
  if (T.t === 'heal') return '+' + Math.round(T.pct * K * 100) + ' % PV · bouclier ' + T.sh + ' s' + cd; if (T.t === 'rain') return T.num + ' météores · dégâts ' + x(T.dk) + cd;
  if (T.t === 'buff') return 'Dure ' + (T.dur * (1 + .05 * (l - 1))).toFixed(1) + ' s' + cd; if (T.t === 'blink') return 'Saut ' + T.dist + ' · dégâts ' + x(T.dk) + cd;
  if (T.t === 'slow') return 'Ralentit ' + T.dur + ' s · dégâts ' + x(T.dk) + cd; if (T.t === 'drain') return 'Dégâts ' + x(T.dk) + ' · soin par ennemi' + cd;
  return 'Tous les ennemis · dégâts ' + x(T.dk) + (T.hl ? ' · soin ' + Math.round(T.hl * 100) + ' %' : '') + ' · barre d\'ultime';
}
/* état d'un TOX : il s'améliore tout seul avec les copies trouvées dans les étoiles */
function tbtn(id) { const s = S.tox[id] || { l: 0, c: 0 }; return `<div class="tnote">${!s.l ? ic('lock') + ' À trouver dans une étoile' : s.l >= TMAX ? 'Niveau maximum' : 'Encore ' + (tneed(s.l) - s.c) + ' copie' + (tneed(s.l) - s.c > 1 ? 's' : '') + ' pour le niveau ' + (s.l + 1)}</div>`; }
const tbar = id => { const s = S.tox[id] || { l: 0, c: 0 }, need = s.l ? tneed(s.l) : 1; return s.l >= TMAX ? '' : `<div class="bar" style="height:26px"><i style="width:${Math.min(100, 100 * s.c / need)}%"></i><span>Copies : ${s.c} / ${need}</span></div>`; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const SCR = {
  menu() {
    const B = [['shop', 'Boutique'], ['codex', 'Codex'], ['pass', 'Pass'], ['quests', 'Quêtes'], ['profile', 'Profil'], ['collection', 'Collection'], ['friends', 'Groupe'], ['settings', 'Réglages']];
    return `<div class="m2"><div class="m2bg"></div><div class="m2sh"></div>${spk(10)}
      <button class="m2prof" data-a="go" data-v="profile"><span class="av">${himg(S.hero)}</span><span class="tx">${esc(S.name)}<span class="sub">Niv. ${level()} · Gardien de l'Aube</span><span class="bar"><i style="width:${(S.xp % 400) / 4}%"></i></span></span></button>
      <div class="m2cur"><span class="pill">${ic('prism')} ${S.prisms}</span><span class="pill">${ic('coin')} ${S.coins}</span></div>
      <div class="m2col"><img class="m2logo" src="img/ui/logo.webp" draggable="false" alt="Eclyptia">
        <div class="m2grid">${B.map((b, i) => `<button class="m2b" data-a="go" data-v="${b[0]}" style="--i:${i}"><img src="img/ui/b_${b[0]}.webp" draggable="false" alt="${b[1]}"></button>`).join('')}</div>
        <div class="m2row"><button class="orbbtn" data-a="orb">${orbImg('myst')}<span class="olab">BOOSTERS</span><b>${S.orbs || 0}</b></button><button class="m2play" data-a="go" data-v="hero"><img src="img/ui/play.webp" draggable="false" alt="Jouer"></button></div></div>
      <div class="ver">${VERSION}</div></div>`;
  },
  hero() {
    SEL = SEL || S.hero; const h = HEROES[SEL], own = S.owned.includes(SEL), hs = S.hs[SEL] || {};
    const st = (n, v, max) => `<div class="row"><span style="width:150px" class="sub">${n}</span><div class="bar grow"><i style="width:${Math.min(100, 100 * v / max)}%"></i></div></div>`;
    const mine = BOOSTS.filter(b => (S.boost[b.id] || 0) > 0);
    return head('CHOISIR SON GARDIEN') + `<div class="body">
      <div class="pn col" style="width:430px;align-items:center;text-align:center;gap:12px">
        <div class="card on heroshow" style="width:220px;height:220px;border-radius:50%">${himg(SEL)}</div>
        <div style="font-size:50px;line-height:1" class="gold">${h.n.toUpperCase()}</div><div class="sub">${h.cls}</div>
        <div class="row" style="gap:10px">${eqOf(SEL).map(id => `<span class="tmini ${(S.tox[id] || {}).l ? '' : 'lk'}" style="--rc:${RARC[TOX[id].r]}">${tic(id)}<b>${(S.tox[id] || {}).l || ic('lock')}</b></span>`).join('')}</div>
        <div class="col" style="width:100%;gap:8px">${st('PV', h.hp * (1 + .08 * (hs.hp || 0)), 250)}${st('Dégâts', h.dmg * (1 + .06 * (hs.dmg || 0)), 30)}${st('Vitesse', h.spd * (1 + .03 * (hs.spd || 0)), 500)}</div>
        <button class="btn vio" data-a="go" data-v="htox" style="width:100%;font-size:32px;padding:0 20px 6px">${ic('tox')} TOX DE ${h.n.toUpperCase()}</button>
      </div>
      <div class="col grow">
        <div class="grid grow" style="grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,1fr)">${HERO_IDS.map(id => { const x = HEROES[id], o = S.owned.includes(id); return `<button class="card ${id === SEL ? 'on' : ''} ${o ? '' : 'lock'}" data-a="sel" data-v="${id}">${himg(id)}${o ? '' : '<div class="lk">' + ic('lock') + '</div>'}<div class="tag">${x.n}${o ? '' : ' · ' + x.cost + ' ' + ic(x.curr === 'prisms' ? 'prism' : 'coin')}</div></button>`; }).join('')}</div>
        <div class="row"><div class="pn grow row sub" style="padding:10px 22px;min-height:100px;gap:10px">${mine.length ? 'Boosts :' + mine.map(b => `<button class="bchip ${S.bon[b.id] ? 'on' : ''}" data-a="bon" data-v="${b.id}"><img src="img/tx/${b.ic}.webp" draggable="false" alt=""><b>${S.boost[b.id]}</b></button>`).join('') : ic('swords') + ` Survis à ${LAST_WAVE} vagues, boss aux vagues 5 et 10. Les boosts s'achètent à la Boutique.`}</div>
        ${own ? `<button class="btn big" data-a="play">▶ JOUER</button>` : `<button class="btn big" data-a="buyHero" data-v="${SEL}">ACHETER ${h.cost} ${ic(h.curr === 'prisms' ? 'prism' : 'coin')}</button>`}</div>
      </div></div>`;
  },
  /* les TOX d'un gardien : 20 pouvoirs répartis sur 4 emplacements, leur niveau, les copies possédées, ce qui est équipé, et ses 2 armes */
  htox() {
    SEL = SEL || S.hero; const h = HEROES[SEL], hasSk = S.skins.includes(SEL), eq = eqOf(SEL), all = HTOX[SEL], ids = all.filter(id => TOX[id].s === TTAB), own = all.filter(id => (S.tox[id] || {}).l).length, W2 = WEAPONS[SEL], wo = !!(S.wpo && S.wpo[SEL]), wc = wpOf(SEL);
    const tabs = ['A', 'B', 'C', 'ULTIME'].map((t, i) => { const l = all.filter(id => TOX[id].s === i); return `<button class="ttab ${i === TTAB ? 'on' : ''}" data-a="ttab" data-v="${i}" style="--rc:${RARC[i]}">${tic(eq[i])}<span>${i < 3 ? 'TOX ' + t : t}<small>${RARN[i]} · ${l.filter(id => (S.tox[id] || {}).l).length}/${l.length}</small></span></button>`; }).join('');
    return head('TOX DE ' + h.n.toUpperCase(), 'hero') + `<div class="body">
      <div class="pn col txl" style="width:340px;flex:none;align-items:center;text-align:center;gap:8px;padding:22px 20px 20px">
        <div class="row" style="gap:14px;width:100%"><div class="card on heroshow" style="width:120px;height:120px;border-radius:50%;flex:none">${himg(SEL)}</div><div style="text-align:left"><div style="font-size:36px;line-height:1" class="gold">${h.n.toUpperCase()}</div><div class="sub" style="font-size:22px">${own} / ${all.length} TOX</div></div></div>
        <div class="sub" style="font-size:21px;line-height:1.15">Paliers : 10, 30, 50, 70 copies… Chaque palier rend le TOX plus fort.</div>
        <div class="wrow">${W2.map((w, i) => { const have = i === 0 || wo, on = wc === i; return `<button class="wpb ${on ? 'on' : ''} ${have ? '' : 'lk'}" data-a="wp" data-v="${i}"><img src="img/tx/wp_${SEL}${i}.webp" draggable="false" alt=""><b>${w.n}</b><small>${have ? (on ? 'ÉQUIPÉE' : w.d) : w.d}</small><em>${have ? (on ? '✔' : 'ÉQUIPER') : w.cost + ' ' + ic('coin')}</em></button>`; }).join('')}</div>
        <div class="row" style="gap:8px;width:100%;margin-top:auto"><button class="btn sm grow ${skinOf(SEL) ? 'gray' : ''}" data-a="skin" data-v="0" style="font-size:27px;padding:0 8px 4px;min-height:88px">Classique</button><button class="btn sm grow ${skinOf(SEL) ? '' : 'gray'}" data-a="skin" data-v="1" style="font-size:27px;padding:0 8px 4px;min-height:88px">${hasSk ? 'Tenue rare' : 'Verrouillée'}</button></div>
      </div>
      <div class="col grow" style="gap:12px;min-width:0"><div class="row" style="gap:10px">${tabs}</div>
      <div class="grid grow txg">${ids.map(id => { const T = TOX[id], s = S.tox[id] || { l: 0, c: 0 }, on = eq.includes(id); return `<div class="txc ${s.l ? '' : 'lk'} ${on ? 'on' : ''}" style="--rc:${RARC[T.r]}">
        <div class="tring">${tic(id)}${s.l ? `<b>Niv. ${s.l}</b>` : `<b>${ic('lock')}</b>`}</div>
        <div class="txt"><div class="tname">${T.n}</div><div class="sub">${T.d}</div><div class="sub gold">${tfx(T, s.l || 1)}</div>${s.l ? tbar(id) : ''}
          ${!s.l || s.l >= TMAX ? tbtn(id) : ''}${s.l ? (on ? '<span class="teq on">ÉQUIPÉ</span>' : `<button class="teq" data-a="teq" data-v="${id}">ÉQUIPER</button>`) : ''}</div></div>`; }).join('')}</div></div></div>`;
  },
  /* la boutique générale : uniquement des boosts (payés en prismes) et les boosters de constellation */
  shop() {
    return head('BOUTIQUE') + `<div class="body"><div class="grid grow" style="grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,1fr)">${BOOSTS.map(b => `<div class="pn col shopc bcard">
      <img class="bimg" src="img/tx/${b.ic}.webp" draggable="false" alt=""><div class="ribbon">${b.n}</div><div class="sub" style="font-size:23px">${b.d}</div>
      <button class="btn ${S.prisms < b.cost ? 'gray' : ''}" data-a="buyBoost" data-v="${b.id}">ACHETER ${b.cost} ${ic('prism')}</button><b class="bstock">${S.boost[b.id] || 0}</b></div>`).join('')}</div>
      <div class="pn col shopc orbp" style="width:380px"><div class="orbrow">${orbImg(0, 's')}${orbImg(1, 's')}${orbImg('myst', 'b')}${orbImg(2, 's')}${orbImg(3, 's')}</div><div class="ribbon">Constellations</div><div class="sub">4 étoiles à choisir par booster. La couleur de l'étoile donne la rareté du TOX… ou une tenue rare.</div><button class="btn ${S.orbs > 0 ? '' : 'gray'}" data-a="orb">OUVRIR (${S.orbs || 0})</button><button class="btn vio" data-a="buyOrb">ACHETER 80 ${ic('prism')}</button></div></div>`;
  },
  quests() {
    dayCheck();
    return head('QUÊTES') + `<div class="body"><div class="col" style="width:330px"><div class="tab on">${ic('calendar')} Journalières</div><div class="pn sub grow" style="padding:18px">Les quêtes se réinitialisent chaque jour à minuit.</div></div>
      <div class="pn col grow scroll">${QUESTS.map(q => { const v = Math.min(q.goal, q.get(S)), done = v >= q.goal, cl = S.q.claimed.includes(q.id); return `<div class="q"><div class="med sm">${ic(q.ic)}</div><div class="grow"><div>${q.t}</div><div class="bar" style="margin-top:6px"><i style="width:${100 * v / q.goal}%"></i><span>${v} / ${q.goal}</span></div><div class="sub" style="margin-top:4px">Récompense : ${rewTxt(q.rew)}</div></div>
        <button class="btn ${done && !cl ? '' : 'gray'}" data-a="claimQ" data-v="${q.id}">${cl ? 'REÇU ✔' : 'RÉCLAMER'}</button></div>`; }).join('')}</div></div>`;
  },
  /* codex : les monstres découverts et tous les TOX possédés avec leur niveau */
  codex() {
    const seen = MON_IDS.filter(i => S.codex[i]).length, tn = TOX_IDS.filter(i => (S.tox[i] || {}).l).length;
    const tabs = `<div class="col cxl" style="width:270px;flex:none"><button class="tab ${CTAB === 'mon' ? 'on' : ''}" data-a="ctab" data-v="mon">${ic('skull')}<span>Monstres<small>${seen} / ${MON_IDS.length}</small></span></button><button class="tab ${CTAB === 'tox' ? 'on' : ''}" data-a="ctab" data-v="tox">${ic('tox')}<span>TOX<small>${tn} / ${TOX_IDS.length}</small></span></button><div class="pn sub grow">${CTAB === 'mon' ? 'Chaque monstre vaincu en partie est ajouté ici, avec ses forces.' : 'Tes pouvoirs. Seules les étoiles des boosters les débloquent et les font monter de niveau.'}</div></div>`;
    if (CTAB === 'tox') {
      CH = CH || S.hero; const list = CH === 'pas' ? PASSIVE : HTOX[CH]; if (!list.includes(TSEL)) TSEL = list[0]; const T = TOX[TSEL], s = S.tox[TSEL] || { l: 0, c: 0 }, eq = CH === 'pas' ? [] : eqOf(CH);
      return head('CODEX') + `<div class="body cdx">${tabs}<div class="pn col grow" style="gap:14px;padding:22px 22px;min-width:0">
        <div class="row" style="gap:10px">${HERO_IDS.map(h => `<button class="chb ${h === CH ? 'on' : ''} ${S.owned.includes(h) ? '' : 'lk'}" data-a="chsel" data-v="${h}">${himg(h)}<b>${HTOX[h].filter(id => (S.tox[id] || {}).l).length}/${HTOX[h].length}</b></button>`).join('')}<button class="chb ${CH === 'pas' ? 'on' : ''}" data-a="chsel" data-v="pas">${ic('star')}<b>Passifs</b></button></div>
        <div class="cgrid grow">${list.map(id => { const x = S.tox[id] || { l: 0, c: 0 }; return `<button class="tcell ${id === TSEL ? 'on' : ''} ${x.l ? '' : 'lk'} ${eq.includes(id) ? 'eq' : ''}" data-a="tsel" data-v="${id}" style="--rc:${RARC[TOX[id].r]}">${tic(id)}<b>${x.l ? 'Niv. ' + x.l : ''}</b></button>`; }).join('')}</div></div>
        <div class="pn col tcard ${s.l ? '' : 'lk'}" style="width:440px;flex:none;--rc:${RARC[T.r]}"><div class="tring big">${tic(TSEL)}${s.l ? `<b>Niv. ${s.l}</b>` : `<b>${ic('lock')}</b>`}</div><div class="trar">${T.h ? (T.s === 3 ? 'ULTIME' : 'EMPLACEMENT ' + 'ABC'[T.s]) + ' · ' : ''}${RARN[T.r]}</div><div class="tname">${T.n}</div><div class="sub">${T.h ? HEROES[T.h].n + ' · ' + HEROES[T.h].cls : 'Passif · tous les gardiens'}</div><div class="sub">${T.d}</div><div class="gold sub">${tfx(T, s.l || 1)}</div>${s.l && s.l < TMAX ? `<div class="sub">Niveau suivant : ${tfx(T, s.l + 1)}</div>` : ''}<div style="width:100%">${s.l ? tbar(TSEL) : ''}</div>${tbtn(TSEL)}</div></div>`;
    }
    const m = MON[CSEL], ok = !!S.codex[CSEL];
    return head('CODEX') + `<div class="body cdx">${tabs}<div class="pn col grow">
      <div class="grid grow" style="grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(2,1fr)">${MON_IDS.map(id => { const o = !!S.codex[id]; return `<button class="card ${id === CSEL ? 'on' : ''} ${o ? '' : 'lock'}" data-a="csel" data-v="${id}"><img src="img/${MON[id].img}.jpg">${o ? '' : '<div class="lk">' + ic('lock') + '</div>'}<div class="tag">${o ? MON[id].n + ' · ×' + S.codex[id] : '???'}</div></button>`; }).join('')}</div></div>
      <div class="pn col cxm" style="width:500px;flex:none">${ok ? `<div class="card" style="height:270px"><img src="img/${m.img}.jpg"></div><div style="font-size:54px;line-height:1" class="gold">${m.n.toUpperCase()}</div><div class="sub">${m.d}</div>
        <div class="row"><div class="tile">PV<b>${m.hp}</b></div><div class="tile">Dégâts<b>${m.dmg}</b></div><div class="tile">Vitesse<b>${m.spd}</b></div></div><div class="row"><div class="tile">Vaincus<b>${S.codex[CSEL]}</b></div><div class="tile">Dès la vague<b>${m.boss ? '5' : m.from}</b></div></div>` : `<div class="grow col" style="align-items:center;justify-content:center;text-align:center"><div style="font-size:190px">${ic('lock')}</div><div class="sub">Vaincs cette créature en partie pour la découvrir.</div></div>`}</div></div>`;
  },
  /* pass : une ligne gratuite et une ligne premium qui rapporte plus */
  pass() {
    const lv = Math.min(PASS.length, Math.floor(S.passXp / PASS_STEP)), into = lv >= PASS.length ? PASS_STEP : S.passXp % PASS_STEP;
    const rw = r => r.skin ? ic('crown') + '<b>Tenue</b>' : r.cards ? ic('tox') + '<b>×' + r.cards + '</b>' : r.orbs ? bst() + '<b>×' + r.orbs + '</b>' : r.prisms ? ic('prism') + '<b>×' + r.prisms + '</b>' : ic('coin') + '<b>×' + r.coins + '</b>';
    const cell = (r, i, prem) => { const open = lv > i, cl = (prem ? S.passClaimP : S.passClaim).includes(i), can = open && !cl && (!prem || S.premium); return `<button class="pcell ${prem ? 'prem' : ''} ${can ? 'on' : ''} ${cl ? 'done' : ''}" data-a="${prem ? 'claimPP' : 'claimP'}" data-v="${i}">${rw(r)}<em>${cl ? '✔' : can ? 'PRENDRE' : prem && !S.premium ? ic('lock') : open ? '' : ic('lock')}</em></button>`; };
    return head('PASS DE SAISON') + `<div class="body col" style="gap:14px"><div class="pn row" style="padding:16px 30px"><div class="pill gold">Palier ${lv} / ${PASS.length}</div><div class="bar grow" style="height:40px"><i style="width:${100 * into / PASS_STEP}%"></i><span style="font-size:26px;line-height:34px">${into} / ${PASS_STEP} XP</span></div>
        ${S.premium ? `<div class="pill gold">${ic('crown')} PREMIUM ACTIF</div>` : `<button class="btn" data-a="buyPass"><img class="ici" src="img/tx/bx_pass.webp" alt=""> PASS PREMIUM ${PASS_PRICE}</button>`}</div>
      <div class="pn grow pgrid"><div class="plab">Palier</div>${PASS.map((_, i) => `<div class="pnum ${lv > i ? 'on' : ''}">${i + 1}</div>`).join('')}
        <div class="plab">GRATUIT</div>${PASS.map((r, i) => cell(r, i, 0)).join('')}
        <div class="plab gold col"><img src="img/tx/bx_pass.webp" alt="" style="width:74px;height:auto;display:block">PREMIUM</div>${PASSP.map((r, i) => cell(r, i, 1)).join('')}</div></div>`;
  },
  profile() {
    const s = S.stats, t = Math.floor(s.time / 60), fav = HEROES[S.hero];
    const tile = (n, v) => `<div class="tile">${n}<b>${v}</b></div>`;
    return head('PROFIL') + `<div class="body"><div class="pn col" style="width:470px;align-items:center;text-align:center">
      <div class="card on" style="width:230px;height:230px;border-radius:50%"><img src="img/${fav.img}.jpg"></div>
      <input id="nm" maxlength="14" value="${esc(S.name)}" style="width:100%;height:80px;border-radius:24px;border:4px solid #b890ff;background:#150a2e;color:#fff;text-align:center;font-size:40px">
      <div class="sub">Touche le pseudo pour le changer</div><button class="btn sm vio" data-a="go" data-v="accounts" style="width:100%">CHANGER DE COMPTE</button><div class="gold" style="font-size:40px">Niveau ${level()}</div>
      <div class="bar" style="width:100%"><i style="width:${(S.xp % 400) / 4}%"></i><span>${S.xp % 400} / 400 XP</span></div></div>
      <div class="col grow"><div class="row grow" style="align-items:stretch">${tile('Parties jouées', s.games)}${tile('Victoires', s.wins)}${tile('Vague max', s.maxWave)}</div>
      <div class="row grow" style="align-items:stretch">${tile('Ennemis vaincus', s.kills)}${tile('Boss vaincus', s.boss)}${tile('Temps de jeu', t + ' min')}</div>
      <div class="row"><button class="btn vio grow" data-a="go" data-v="collection">COLLECTION</button><button class="btn vio grow" data-a="go" data-v="settings">RÉGLAGES</button></div></div></div>`;
  },
  collection() {
    return head('COLLECTION') + `<div class="body col"><div class="pn row"><span class="grow">${ic('shield')} Gardiens débloqués</span><span class="gold">${S.owned.length} / ${HERO_IDS.length}</span></div>
      <div class="grid grow" style="grid-template-columns:repeat(6,1fr)">${HERO_IDS.map(id => { const x = HEROES[id], o = S.owned.includes(id); return `<button class="card ${o ? '' : 'lock'} ${id === S.hero ? 'on' : ''}" data-a="pick" data-v="${id}"><img src="img/${x.img}.jpg">${o ? '' : '<div class="lk">' + ic('lock') + '</div>'}<div class="tag">${x.n}<br><span class="sub">${o ? x.cls : x.cost + ' ' + ic(x.curr === 'prisms' ? 'prism' : 'coin')}</span></div></button>`; }).join('')}</div></div>`;
  },
  /* groupe : jusqu'à 3 joueurs dans la même partie */
  friends() {
    if (!NET.role) return head('GROUPE') + `<div class="body"><div class="pn col grow" style="align-items:center;justify-content:center;text-align:center;gap:22px"><div style="font-size:130px;line-height:1">${ic('friends')}</div><div style="font-size:52px;line-height:1" class="gold">Joue jusqu'à 3 dans la même partie</div><div class="sub" style="max-width:1000px">Crée un groupe et envoie le lien à tes amis, ou entre le code d'un groupe. La carte s'agrandit et les vagues sont plus dures avec chaque joueur.</div>
      <div class="row" style="gap:30px"><button class="btn big" data-a="grpHost">CRÉER UN GROUPE</button><div class="row"><input id="gcode" maxlength="14" placeholder="PSEUDO D\'UN AMI" autocapitalize="characters" autocomplete="off" style="width:240px;height:110px;border-radius:30px;border:5px solid #ffd45e;background:#150a2e;color:#fff;text-align:center;font-size:50px;letter-spacing:6px;text-transform:uppercase"><button class="btn vio" data-a="grpJoin">REJOINDRE</button></div></div></div></div>`;
    const host = NET.role === 1, L = [0, 1, 2].map(i => NET.lobby[i] || null), n = L.filter(Boolean).length, wait = NET.state === 'wait';
    return head('GROUPE') + `<div class="body"><div class="pn col" style="width:430px;align-items:center;text-align:center;justify-content:space-between"><div class="sub">Code du groupe</div><div class="gcode">${NET.code}</div><div class="sub">${wait ? 'Connexion…' : host ? 'Tu es l\'hôte : envoie ce code ou le lien.' : 'Connecté au groupe.'}</div>
        <button class="btn vio" data-a="grpInvite" style="width:100%">INVITER</button><button class="btn sm gray" data-a="grpLeave" style="width:100%">QUITTER LE GROUPE</button></div>
      <div class="col grow"><div class="row grow" style="align-items:stretch">${L.map((p, i) => p ? `<div class="pn col grow slot" style="align-items:center;text-align:center"><div class="card on heroshow" style="width:200px;height:200px;border-radius:50%">${himg(p.hero, p.skin)}</div><div style="font-size:40px;line-height:1">${esc(p.name)}</div><div class="sub gold">${HEROES[p.hero].n}${i === 0 ? ' · hôte' : ''}</div>${i === NET.me ? `<div class="row"><button class="btn sm vio" data-a="grpHero" data-v="-1">◀</button><span class="sub">Changer</span><button class="btn sm vio" data-a="grpHero" data-v="1">▶</button></div>` : ''}</div>` : `<div class="pn col grow slot" style="align-items:center;justify-content:center;text-align:center;opacity:.6"><div style="font-size:110px;line-height:1">${ic('friends')}</div><div class="sub">En attente d'un joueur…</div></div>`).join('')}</div>
        <div class="row"><div class="pn grow sub" style="min-height:100px">${n} joueur${n > 1 ? 's' : ''} · carte ${n > 1 ? 'agrandie' : 'normale'} · vagues ${n > 2 ? 'beaucoup plus dures' : n > 1 ? 'plus dures' : 'normales'}</div>${host ? `<button class="btn big ${wait ? 'gray' : ''}" data-a="grpStart">▶ LANCER</button>` : `<div class="pill gold" style="height:100px">En attente de l'hôte…</div>`}</div></div></div>`;
  },
  settings() {
    const sw = (k, n) => `<div class="q"><div class="grow">${n}</div><button class="btn sm ${S.set[k] ? '' : 'gray'}" data-a="tog" data-v="${k}" style="min-width:170px">${S.set[k] ? 'OUI' : 'NON'}</button></div>`;
    return head('RÉGLAGES') + `<div class="body"><div class="pn col grow setl" style="gap:8px;padding:24px 26px">
      <div class="q"><div class="grow">Taille des boutons</div>${[[.85, 'Petits'], [1, 'Normaux'], [1.18, 'Grands']].map(b => `<button class="btn sm ${S.set.btn === b[0] ? '' : 'gray'}" data-a="bsz" data-v="${b[0]}">${b[1]}</button>`).join('')}</div>
      ${sw('lefty', 'Mode gaucher (joystick à droite)')}${sw('vib', 'Vibrations')}
      <div class="q"><div class="grow">Sons / Musique</div><button class="btn sm ${S.set.snd ? '' : 'gray'}" data-a="tog" data-v="snd">SONS</button><button class="btn sm ${S.set.mus ? '' : 'gray'}" data-a="tog" data-v="mus">MUSIQUE</button></div>
      <div class="q"><div class="grow">Qualité graphique</div><button class="btn sm ${S.set.gfx ? 'gray' : ''}" data-a="gfx" data-v="0">Fluide</button><button class="btn sm ${S.set.gfx ? '' : 'gray'}" data-a="gfx" data-v="1">Haute</button></div>
      <div class="q"><div class="grow">Affichage<div class="sub">Si l'image est coupée, choisis « Compatible »</div></div><button class="btn sm ${S.set.fill ? 'gray' : ''}" data-a="fill" data-v="0">Compatible</button><button class="btn sm ${S.set.fill ? '' : 'gray'}" data-a="fill" data-v="1">Plein écran</button></div></div>
      <div class="pn col" style="width:420px;justify-content:space-between;text-align:center"><div class="sub">La progression est enregistrée sur cet appareil, dans ce navigateur.</div><div class="sub">Astuce : « Ajouter à l'écran d'accueil » dans le menu du navigateur lance le jeu en vrai plein écran.</div><div class="sub">ECLYPTIA ${VERSION}</div><button class="btn sm vio" data-a="pnotes">NOUVEAUTÉS</button><button class="btn sm gray" data-a="reset">RÉINITIALISER</button></div></div>`;
  },
  game() {
    const L = LAUNCH || { infos: [myInfo()], me: 0 }, f = L.infos[L.me], h = HEROES[f.hero], tb = (k, i, big) => { const id = (f.tx || h.tox)[i], lk = !f.tl[i]; return `<button class="ab ${lk ? 'lk' : ''}" id="b${k}" data-k="${k}"><em>${tic(id)}</em>${big ? '<small>ULTIME</small>' : ''}${lk ? '<span class="lkc">' + ic('lock') + '</span>' : ''}<div class="cd" id="cd${k}"></div>${big ? '' : `<div class="ct" id="ct${k}"></div>`}</button>`; };
    return `<div id="g3"><div class="neb"></div><div class="neb b"></div>${stars(40)}<div class="ecl"></div></div><canvas id="cv2" width="${W}" height="${H}"></canvas><div id="hud" class="${S.set.lefty ? 'lefty' : ''}">
      <div id="joyzone"><div id="joyb"><div id="joyk"></div></div></div>
      <div class="hhp">${himg(f.hero, f.skin)}<div class="grow"><div style="font-size:30px;line-height:1">${h.n}</div><div class="bar hpb"><i id="hpf"></i><span id="hpt"></span></div><div class="bar ulb"><i id="ulf"></i></div></div></div>
      <div id="team">${L.infos.map((q, i) => i === L.me ? '' : `<div class="tmb" id="tb${i}">${himg(q.hero, q.skin)}<div class="grow"><span>${esc(q.name)}</span><div class="bar"><i id="tm${i}" style="width:100%"></i></div></div></div>`).join('')}</div>
      <div class="hwave"><b id="wv">VAGUE 1</b><span id="lf"></span></div>
      <div class="htr"><span class="pill">${ic('shard')} <b id="shd">0</b></span><button class="rnd" data-a="pause">⏸</button></div>
      <div id="btns" style="transform:scale(${S.set.btn})">${tb('a', 0)}${tb('b', 1)}${tb('c', 2)}${tb('u', 3, 1)}
        <button class="ab" id="bd" data-k="d"><em>${ic('dash')}</em><div class="cd" id="cdd"></div><div class="ct" id="ctd"></div></button>
      </div><div id="over"></div></div>`;
  }
};

function show(n, enter) {
  SCREEN = n; ui().innerHTML = n === 'game' ? SCR[n]() : `<div class="scr ${enter ? 'enter' : ''}">${SCR[n]()}</div>`; if (n === 'game') bindGame();
  if (n === 'menu' && S.seen !== BUILD && !$('#pnotes')) setTimeout(() => { if (SCREEN === 'menu' && S.seen !== BUILD) ACT.pnotes(); }, 1500);
  if (n === 'menu' && enter) { for (let i = 0; i < 8; i++) setTimeout(() => { if (SCREEN === 'menu') snd('note', i); }, 400 + i * 55); setTimeout(() => { if (SCREEN === 'menu') snd('slam'); }, 930); }
}
function sweep() { const l = fxl(); if (!l || lite()) return; const s = document.createElement('i'); s.className = 'sweep'; l.appendChild(s); setTimeout(() => s.remove(), 650); }
function countUp(root) {
  root.querySelectorAll('[data-cnt]').forEach((el, i) => {
    const to = +el.dataset.cnt, pre = el.dataset.pre || '', t0 = performance.now() + 550 + i * 230, d = 700; let last = -1;
    const f = n => { if (!el.isConnected) return; const k = Math.max(0, Math.min(1, (n - t0) / d)), v = Math.round(to * (1 - Math.pow(1 - k, 3))); if (v !== last) { el.textContent = pre + v; last = v; if (k > 0) snd('tick'); } if (k < 1) requestAnimationFrame(f); else { el.classList.add('cdone'); snd('pop'); } };
    requestAnimationFrame(f);
  });
}
let BUSY = false;
function wipe(mid, hold, inner) {
  if (BUSY) return; BUSY = true; const w = $('#wipe'); w.querySelector('.wi').innerHTML = inner || '<div class="wmoon"></div>'; w.classList.add('in'); snd('wipe');
  setTimeout(() => { mid(); setTimeout(() => { w.classList.remove('in'); setTimeout(() => BUSY = false, 300); }, hold || 60); }, 360);
}
let NAVK = 0;
function nav(n) {
  if (BUSY) return; BUSY = true; const el = ui(), bk = n === 'menu', k = ++NAVK; el.classList.remove('in'); el.classList.toggle('bk', bk); el.classList.add('out'); snd('whoosh'); sweep();
  setTimeout(() => {
    try { if (n !== 'game') { G = null; NETROLE = 0; music(n === 'menu' ? 'menu' : 'pages'); } if (n === 'hero') SEL = S.hero; show(n, true); }
    catch (e) { report(e); }
    el.classList.remove('out'); void el.offsetWidth; el.classList.add('in'); if (n !== 'menu') snd('open');
    setTimeout(() => { BUSY = false; }, 90); setTimeout(() => { if (k === NAVK) el.classList.remove('in', 'bk'); }, 340);
  }, 100);
}
/* erreurs visibles + mise à jour automatique : l'icône de l'écran d'accueil garde sinon une vieille version en mémoire */
let REP = 0;
function report(e) { if (REP) return; REP = 1; setTimeout(() => REP = 0, 400); try { report2(e); } catch (_) {} }
function report2(e) { const m = (e && (e.message || e.reason && e.reason.message || e.reason)) || String(e); console.error(e); BUSY = false; const el = ui(); if (el) el.classList.remove('out'); toast('Erreur : ' + String(m).slice(0, 70)); }
addEventListener('error', report); addEventListener('unhandledrejection', report);
/* mise à jour obligatoire : dès qu'une nouvelle version est en ligne, un écran bloquant propose de redémarrer le jeu (après la partie en cours) */
let UPD = 0, NEWB = null, NEWN = null, PNI = 0;
function checkUpdate() {
  const now = Date.now(); if (now - UPD < 15000) return; UPD = now;
  fetch('version.json?t=' + now, { cache: 'no-store' }).then(r => r.json()).then(j => {
    if (!j || !j.build || String(j.build) === BUILD) return;
    try { if (sessionStorage.getItem('ecl_upd') === String(j.build)) return; } catch (e) {}   // déjà tenté pendant cette visite : on évite de tourner en rond
    NEWB = String(j.build); NEWN = j; askUpdate();
  }).catch(() => {});
}
/* notes de version */
function patchUI() {
  let d = $('#pnotes'); if (!d) { d = document.createElement('div'); d.id = 'pnotes'; $('#stage').appendChild(d); } const p = PATCH[PNI];
  d.innerHTML = `<div class="pn col pnp"><div class="row pnh"><img class="pnlogo" src="img/ui/logo.webp" draggable="false" alt=""><div class="grow"><div class="pnt">NOUVEAUTÉS · VERSION ${p.v}</div><div class="pns">${p.title}</div><div class="sub">${p.date}</div></div>
    <div class="row">${PNI < PATCH.length - 1 ? '<button class="btn sm vio" data-a="pnGo" data-v="1">◀ Avant</button>' : ''}${PNI > 0 ? '<button class="btn sm vio" data-a="pnGo" data-v="-1">Après ▶</button>' : ''}</div></div>
    <div class="pngrid n${Math.min(6, p.items.length)}">${p.items.map((x, i) => `<div class="pni" style="--i:${i}"><img src="img/${x.img}" draggable="false" alt=""><div><b>${x.t}</b><span>${x.d}</span></div></div>`).join('')}</div>
    <button class="btn big" data-a="pnClose">C'EST PARTI !</button></div>`;
}
function askUpdate() {
  if (!NEWB || document.getElementById('upd')) return;
  if (G && SCREEN === 'game' && G.state !== 'end') return;
  const d = document.createElement('div'); d.id = 'upd';
  d.innerHTML = `<div class="pn col updp"><img src="img/ui/bstar.webp" draggable="false" alt=""><div class="gold" style="font-size:60px;line-height:1">MISE À JOUR DISPONIBLE</div><div class="sub" style="font-size:30px">${NEWN && NEWN.v ? 'La version ' + esc(NEWN.v) + ' est prête.' : "Une nouvelle version d'ECLYPTIA est prête."} Le jeu va redémarrer ; ta progression est conservée.</div>${NEWN && NEWN.notes && NEWN.notes.length ? '<div class="updn">' + NEWN.notes.slice(0, 4).map(n => '<div>✦ ' + esc(n) + '</div>').join('') + '</div>' : ''}<button class="btn big" data-a="update">METTRE À JOUR</button></div>`;
  $('#stage').appendChild(d); snd('pick');
}
document.addEventListener('visibilitychange', () => { if (!document.hidden) { fitSoon(); checkUpdate(); } });
addEventListener('pageshow', checkUpdate); setInterval(() => { if (!document.hidden) checkUpdate(); }, 60000); setInterval(askUpdate, 4000);
function launch(infos, me, role) {
  if (!infos) { if (!S.owned.includes(S.hero)) S.hero = S.owned[0]; if (SEL && S.owned.includes(SEL)) S.hero = SEL; save(); infos = [myInfo()]; me = 0; role = 0; }
  goFull(); LAUNCH = { infos, me }; const f = infos[me], h = HEROES[f.hero];
  BUSY = true; const w = $('#wipe'); w.querySelector('.wi').innerHTML = `<div class="lbg"></div><div class="lcard">${infos.map((q, i) => `<span class="lpw">${himg(q.hero, q.skin)}</span>`).join('')}<div><b>${infos.length > 1 ? 'GROUPE DE ' + infos.length : h.n.toUpperCase()}</b><div class="sub" style="font-size:40px">${infos.length > 1 ? infos.map(q => esc(q.name)).join(' · ') : h.cls}</div><img class="lload" src="img/ui/loading.webp"></div></div>`; w.classList.add('in'); snd('wipe');
  setTimeout(() => { G = null; GEN.clear(); show('game'); music('game'); musLevel(0); }, 380);
  setTimeout(() => { startRun(infos, me, role); w.classList.remove('in'); snd('pick'); setTimeout(() => BUSY = false, 300); }, 1500);
}
function over(html) { const o = $('#over'); if (!o) return; if (html && G) { G.ann = null; G.banner = null; } o.classList.remove('on'); o.innerHTML = html; if (html) { void o.offsetWidth; o.classList.add('on'); } }
function pauseGame() { if (!G || G.state !== 'play' || multi()) return; G.state = 'pause'; const h = G.p.h; over(`<div class="big2">PAUSE</div><div class="row"><button class="btn big" data-a="resume">▶ REPRENDRE</button><button class="btn gray" data-a="quit">ABANDONNER</button></div><div class="row" style="gap:26px;font-size:28px">${G.p.tx.map((id, i) => `<span class="sub" style="opacity:${G.p.tl[i] ? 1 : .4}">${tic(id, 'in')} ${TOX[id].n}</span>`).join('')}<span class="sub">${ic('dash')} Esquive</span></div>`); }
function openPick(ch) {
  G.state = 'pick'; G.choices = ch || rollChoices(); snd('pick');
  over(`<div style="font-size:60px" class="gold">VAGUE ${G.wave} TERMINÉE — CHOISIS UNE BÉNÉDICTION</div><div class="row" style="gap:36px;animation:none">${G.choices.map((c, i) => `<button class="pick" data-a="upg" data-v="${i}"><em>${ic(UPG[c].ic)}</em>${UPG[c].n}</button>`).join('')}</div>`);
}
function showEnd(r) {
  const t = Math.floor(r.time / 60) + ':' + String(Math.floor(r.time % 60)).padStart(2, '0'), tile = (n, v, raw) => `<div class="tile etile">${n}<b ${raw ? '' : 'data-cnt="' + v + '"'}>${raw ? v : 0}</b></div>`, cn = v => `<i class="cn" data-cnt="${v}" data-pre="+">+0</i>`;
  const conf = r.win ? Array.from({ length: 46 }, (_, i) => `<i class="conf" style="left:${(i * 53) % 100}%;background:${['#ffd45e', '#ff6adf', '#7ad8ff', '#8cff7a', '#ff9a2e'][i % 5]};animation-duration:${2 + (i % 5) * .5}s!important;animation-delay:${-(i % 9) * .4}s!important"></i>`).join('') : '';
  over(`<div class="big2 ${r.win ? '' : 'lose'}">${r.win ? 'VICTOIRE' : 'DÉFAITE'}</div>
    <div class="row">${tile('Vague atteinte', r.wave)}${tile('Ennemis vaincus', r.kills)}${tile('Éclats', r.shards)}${tile('Temps', t, 1)}</div>
    <div class="pn row erew">Récompenses : <span class="gold">${cn(r.coins)} ${ic('coin')}</span><span class="gold">${cn(r.prisms)} ${ic('prism')}</span><span class="gold">${cn(r.xp)} XP</span>${r.orb ? '<span class="gold">+1 booster ' + bst() + '</span>' : ''}${r.lvlUp ? '<span>' + ic('star') + ' Niveau ' + level() + ' !</span>' : ''}</div>
    <div class="row">${r.n > 1 || NET.role ? '<button class="btn big" data-a="go" data-v="friends">RETOUR AU GROUPE</button>' : '<button class="btn big" data-a="play">🔁 REJOUER</button>'}${r.orb ? '<button class="btn vio" data-a="orb">' + bst() + ' OUVRIR LE BOOSTER</button>' : ''}<button class="btn vio" data-a="go" data-v="hero">GARDIEN</button><button class="btn gray" data-a="go" data-v="menu">MENU</button></div>${conf}`);
  countUp($('#over')); if (r.lvlUp) setTimeout(() => snd('lvl'), 2400);
}
function goFull() { try { const d = document.documentElement; if (document.fullscreenElement || document.webkitFullscreenElement) return; const p = (d.requestFullscreen || d.webkitRequestFullscreen || function () {}).call(d); if (p && p.then) p.then(() => { try { screen.orientation.lock('landscape').catch(() => {}); } catch (e) {} setTimeout(fit, 300); }).catch(() => {}); } catch (e) {} }
const no = s => { snd('err'); toast(s); };

const ACT = {
  go(v) { if (v === 'friends' && NET.role === 1) setTimeout(() => NET.sync(), 300); if (v === 'htox') { if (!SEL) SEL = S.hero; TTAB = 0; } nav(v); },
  sel(v) { SEL = v; if (S.owned.includes(v)) { S.hero = v; save(); } show('hero'); },
  pick(v) { if (S.owned.includes(v)) { S.hero = v; save(); show('collection'); } else { SEL = v; nav('hero'); setTimeout(() => SEL = v, 370); } },
  buyHero(v) { const h = HEROES[v], c = h.curr; if (S[c] < h.cost) return no('Pas assez de ' + (c === 'prisms' ? 'prismes' : 'pièces')); S[c] -= h.cost; S.owned.push(v); S.hero = v; save(); snd('buy'); toast(h.n + ' débloqué !'); show('hero'); },
  ttab(v) { TTAB = +v; show('htox'); },
  chsel(v) { CH = v; show('codex'); },
  wp(v) { const i = +v, h = SEL, w = WEAPONS[h][i]; S.wp = S.wp || {}; S.wpo = S.wpo || {}; if (i && !S.wpo[h]) { if (S.coins < w.cost) return no('Pas assez de pièces'); S.coins -= w.cost; S.wpo[h] = true; snd('buy'); toast(w.n + ' débloquée !'); } else snd('pick'); S.wp[h] = i; save(); show('htox'); },
  teq(v) { const T = TOX[v], si = T.s; if (!(S.tox[v] || {}).l) return no('Trouve d\'abord ce TOX dans une étoile'); (S.eq[T.h] = S.eq[T.h] || {})[si] = v; save(); snd('pick'); toast(T.n + ' équipé'); show('htox'); },
  tinfo() { no('Trouve la carte de ce TOX dans une étoile de booster'); },
  tsel(v) { TSEL = v; show('codex'); },
  ctab(v) { CTAB = v; show('codex'); },
  skin(v) { if (+v && !S.skins.includes(SEL)) return no('Tenue rare : elle se cache dans les étoiles légendaires'); S.skin[SEL] = +v; save(); snd('pick'); show('htox'); },
  bon(v) { S.bon[v] = !S.bon[v]; save(); snd('pop'); show('hero'); },
  buyBoost(v) { const b = BOOSTS.find(x => x.id === v); if (S.prisms < b.cost) return no('Pas assez de prismes'); S.prisms -= b.cost; S.boost[v] = (S.boost[v] || 0) + 1; S.bon[v] = true; save(); snd('buy'); toast(b.n + ' ajouté : il sera utilisé à ta prochaine partie'); show('shop'); },
  buyPass() { no('Le paiement en ligne n\'est pas encore branché : le Pass Premium arrive bientôt'); },
  claimQ(v) { const q = QUESTS.find(x => x.id === v); if (S.q.claimed.includes(v)) return; if (q.get(S) < q.goal) return no('Quête pas encore terminée'); S.q.claimed.push(v); toast(give(q.rew)); snd('claim'); show('quests'); flyRw(q.rew); },
  claimP(v) { const i = +v; if (S.passClaim.includes(i)) return; if (Math.floor(S.passXp / PASS_STEP) <= i) return no('Palier pas encore atteint'); S.passClaim.push(i); toast(give(PASS[i])); snd('claim'); show('pass'); flyRw(PASS[i]); },
  claimPP(v) { const i = +v; if (!S.premium) return no('Réservé au Pass Premium'); if (S.passClaimP.includes(i)) return; if (Math.floor(S.passXp / PASS_STEP) <= i) return no('Palier pas encore atteint'); S.passClaimP.push(i); toast(give(PASSP[i])); snd('claim'); show('pass'); flyRw(PASSP[i]); },
  grpHost() { NET.host(); },
  grpJoin() { const e = $('#gcode'); NET.join(e ? e.value : ''); },
  grpLeave() { NET.leave(); },
  grpInvite() { const url = location.origin + location.pathname + '?g=' + NET.code, d = { title: 'ECLYPTIA', text: 'Rejoins mon groupe sur ECLYPTIA ! Code : ' + NET.code, url }; if (navigator.share) navigator.share(d).catch(() => {}); else if (navigator.clipboard) navigator.clipboard.writeText(url).then(() => toast('Lien du groupe copié')).catch(() => toast(url)); else toast(url); },
  grpHero(v) { const o = S.owned, i = (o.indexOf(S.hero) + (+v) + o.length) % o.length; S.hero = o[i]; SEL = S.hero; save(); if (NET.role === 1) NET.sync(); else { NET.send({ t: 'me', info: myInfo() }); if (NET.lobby[NET.me]) { NET.lobby[NET.me].hero = S.hero; NET.lobby[NET.me].skin = skinOf(S.hero); } show('friends'); } },
  grpStart() { if (NET.state === 'wait') return no('Connexion en cours…'); NET.start(); },
  csel(v) { CSEL = v; show('codex'); },
  play() { launch(); },
  pause() { if (multi()) { if (ACT._q) { ACT._q = 0; NET.leave(true); NETROLE = 0; G.state = 'play'; endRun(false); } else { ACT._q = 1; toast('Pas de pause en groupe. Touche encore pour quitter la partie.'); setTimeout(() => ACT._q = 0, 3000); } return; } pauseGame(); },
  resume() { G.state = 'play'; over(''); },
  quit() { over(''); endRun(false); },
  upg(v) { snd('buy'); if (NETROLE === 2) { NET.send({ t: 'pc', i: +v }); over('<div class="gold" style="font-size:64px">En attente des autres joueurs…</div>'); return; } G.p.ch = G.choices; G.p.picked = false; applyPick(G.p, +v); if (G.state === 'pick') over('<div class="gold" style="font-size:64px">En attente des autres joueurs…</div>'); },
  tog(v) { S.set[v] = !S.set[v]; save(); if (v === 'mus') music(); show('settings'); },
  bsz(v) { S.set.btn = +v; save(); show('settings'); },
  gfx(v) { S.set.gfx = +v; save(); document.body.classList.toggle('lite', lite()); R3.resize(); show('settings'); },
  fs() { goFull(); },
  fill(v) { S.set.fill = +v; save(); fitKey = ''; fit(); if (+v) goFull(); show('settings'); },
  orb() { openOrb(); },
  orbClose() { closeOrb(); },
  orbAgain() { closeOrb(true); },
  buyOrb() { if (S.prisms < 80) return no('Pas assez de prismes'); S.prisms -= 80; S.orbs = (S.orbs || 0) + 1; save(); snd('buy'); toast('+1 booster'); show('shop'); },
  pnotes() { PNI = 0; patchUI(); snd('claim'); },
  pnGo(v) { PNI = clamp(PNI + (+v), 0, PATCH.length - 1); patchUI(); },
  pnClose() { const d = $('#pnotes'); if (d) d.remove(); S.seen = BUILD; save(); },
  update() { try { sessionStorage.setItem('ecl_upd', NEWB); } catch (e) {} if (NET.role) NET.leave(true); location.replace(location.pathname + '?v=' + NEWB); },
  start() { audio(); goFull(); snd('start'); music('menu'); nav('menu'); const m = /[?&]g=([A-Za-z0-9]{5})/.exec(location.search); if (m) setTimeout(() => { BUSY = false; nav('friends'); NET.join(m[1]); }, 1500); },
  reset() { if (ACT._r) { localStorage.removeItem(KEY); S = loadSave(); ACT._r = 0; toast('Sauvegarde effacée'); show('menu'); } else { ACT._r = 1; toast('Touche encore une fois pour tout effacer'); setTimeout(() => ACT._r = 0, 3000); } },
  share() { const d = { title: 'ECLYPTIA Mobile', text: 'Viens jouer à ECLYPTIA sur mobile !', url: location.href }; if (navigator.share) navigator.share(d).catch(() => {}); else if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(() => toast('Lien copié')).catch(() => toast(location.href)); else toast(location.href); }
};
document.addEventListener('click', e => { const b = e.target.closest('[data-a]'); if (!b || (BUSY && !/^(update|pn)/.test(b.dataset.a))) return; audio(); snd(b.classList.contains('back') ? 'back' : 'click', b.dataset.a + (b.dataset.v || '')); if (b.matches('.btn,.card,.tab,.m2b,.pick,.back,.m2prof,.orbbtn')) { b.classList.remove('tp'); void b.offsetWidth; b.classList.add('tp'); } ACT[b.dataset.a](b.dataset.v); });
document.addEventListener('change', e => { if (e.target.id === 'nm') { S.name = e.target.value.trim().slice(0, 14) || 'Gardien'; save(); } });

/* ---------- écran de lancement ---------- */
function splash() {
  SCREEN = 'load';
  ui().innerHTML = `<div class="sp2"><div class="sp2bg"></div><div class="sp2shade"></div>
    <img class="sp2logo" src="img/ui/logo.webp" draggable="false" alt="ECLYPTIA">
    <div class="sp2load" id="sp2load"><img class="sp2lbl" src="img/ui/loading.webp" draggable="false" alt="Chargement">
      <div class="sp2bar"><div class="sp2fill" id="sb"><img src="img/ui/fill.webp" draggable="false" alt=""></div><img class="sp2frame" src="img/ui/bar.webp" draggable="false" alt=""></div></div></div>`;
}
function boot() {
  document.body.classList.toggle('lite', lite()); setTimeout(bootOk, 6000);
  fit(); dayCheck(); requestAnimationFrame(frame);
  let prog = 0, ready = false; const t0 = performance.now();
  const setP = p => { prog = Math.max(prog, p); const b = $('#sb'); if (b) b.style.width = (prog * 100).toFixed(1) + '%'; };
  const done = () => {
    if (ready) return; ready = true; setP(1);
    const ld = $('#sp2load'); if (!ld) return;
    if (!R3.ok) { ld.innerHTML = "<div class=\"sub\" style=\"font-size:34px\">La 3D (WebGL) n'est pas disponible sur ce navigateur.</div>"; return; }
    setTimeout(() => { ld.outerHTML = '<button class="sp2play" data-a="start"><img src="img/ui/play.webp" draggable="false" alt="Jouer"></button>'; }, 350);
  };
  // d'abord les images de l'écran de chargement lui-même, puis tout le reste pendant que la barre avance
  preload(UI_IMG, () => {
    splash(); setP(.06);
    loadImages(() => { setP(.75); R3.init(); setP(.92); const wait = Math.max(0, 2400 - (performance.now() - t0)); const f = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve(); Promise.race([f, new Promise(r => setTimeout(r, 2500))]).then(() => setTimeout(done, wait)); }, p => setP(.06 + p * .69));
  });
}
try { boot(); } catch (e) { report(e); }
checkUpdate();
