'use strict';
/* Groupe jusqu'à 3 joueurs. Les téléphones se connectent directement entre eux (WebRTC) ; le service public PeerJS
   ne sert qu'à se trouver grâce au code du groupe. En test (?nettest), un canal local du navigateur remplace le réseau. */
const NET = {
  role: 0, code: '', me: 0, lobby: [], peer: null, conns: [], hc: null, bc: null, id: Math.random().toString(36).slice(2, 8), test: /[?&]nettest/.test(location.search),
  send(d) { if (this.role !== 2) return; try { if (this.bc) this.bc.postMessage({ f: this.id, to: 'H', d }); else if (this.hc && this.hc.open) this.hc.send(d); } catch (e) {} },
  to(i, d) { if (this.role !== 1) return; const c = this.conns[i]; if (!c) return; try { if (this.bc) this.bc.postMessage({ f: 'H', to: c.id, d }); else if (c.open) c.send(d); } catch (e) {} },
  cast(d) { if (this.role !== 1) return; for (let i = 1; i < 3; i++) this.to(i, d); },
  lib(cb) { if (this.test || window.Peer) return cb(); const s = document.createElement('script'); s.src = 'peer.js?v=' + BUILD; s.onload = cb; s.onerror = () => { toast('Connexion impossible : vérifie ton réseau'); NET.leave(); }; document.head.appendChild(s); },
  host() {
    this.leave(true); this.role = 1; this.me = 0; this.code = !this.noSlug && S.named && pslug(S.name).length >= 3 ? pslug(S.name) : Array.from({ length: 5 }, () => 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[(Math.random() * 32) | 0]).join(''); this.lobby = [myInfo()]; this.conns = [null, null, null]; this.state = 'wait';
    this.lib(() => {
      if (this.role !== 1) return;
      if (this.test) { this.bc = new BroadcastChannel('ecl-' + this.code); this.bc.onmessage = e => { const m = e.data; if (m.to !== 'H') return; let i = this.conns.findIndex(c => c && c.id === m.f); if (i < 0) { if (this.rejoinBc && this.rejoinBc(m)) return; i = this.slot(); if (i < 0) return; this.conns[i] = { id: m.f }; } this.onHost(i, m.d); }; this.state = 'ok'; lobbyUI(); return; }
      const p = this.peer = new Peer('eclyptia-' + this.code);
      p.on('open', () => { this.state = 'ok'; lobbyUI(); });
      p.on('connection', c => { if (G && SCREEN === 'game' && this.rejoin && this.rejoin(c)) return; const i = this.slot(); if (i < 0 || (G && SCREEN === 'game')) { c.on('open', () => { c.send({ t: 'full' }); setTimeout(() => c.close(), 300); }); return; } this.conns[i] = c; c.on('data', d => this.onHost(this.conns.indexOf(c), d)); c.on('close', () => this.drop(this.conns.indexOf(c))); c.on('error', () => this.drop(this.conns.indexOf(c))); });
      p.on('error', e => { if (e && e.type === 'unavailable-id') { this.noSlug = true; this.host(); return; } if (this.state === 'wait') { toast('Impossible de créer le groupe (réseau)'); this.leave(); } });
      p.on('disconnected', () => { try { p.reconnect(); } catch (e) {} });
    });
    lobbyUI();
  },
  slot() { for (let i = 1; i < 3; i++) if (!this.conns[i]) return i; return -1; },
  join(code) {
    this.leave(true); this.role = 2; this.code = pslug(code); this.lobby = []; this.state = 'wait'; if (this.code.length < 3) { this.role = 0; return toast('Écris le pseudo de ton ami (ou son code)'); }
    this.lib(() => {
      if (this.role !== 2) return;
      const hello = () => { this.state = 'ok'; this.send({ t: 'hi', info: myInfo() }); };
      if (this.test) { this.bc = new BroadcastChannel('ecl-' + this.code); this.bc.onmessage = e => { const m = e.data; if (m.f === 'H' && m.to === this.id) this.onGuest(m.d); }; hello(); return; }
      const p = this.peer = new Peer();
      p.on('open', () => { const c = this.hc = p.connect('eclyptia-' + this.code, { reliable: true }); c.on('open', hello); c.on('data', d => this.onGuest(d)); c.on('close', () => this.lost()); c.on('error', () => this.lost()); });
      p.on('error', e => { toast(e && e.type === 'peer-unavailable' ? 'Groupe introuvable : vérifie le code' : 'Connexion au groupe impossible'); this.leave(); });
      setTimeout(() => { if (this.role === 2 && this.state === 'wait') { toast('Le groupe ne répond pas'); this.leave(); } }, 12000);
    });
    lobbyUI();
  },
  leave(quiet) {
    if (this.role === 1) this.cast({ t: 'bye' }); if (this.role === 2) this.send({ t: 'bye' });
    try { if (this.bc) this.bc.close(); } catch (e) {} try { if (this.peer) this.peer.destroy(); } catch (e) {}
    this.role = 0; this.code = ''; this.lobby = []; this.peer = this.hc = this.bc = null; this.conns = []; this.state = ''; if (!quiet) lobbyUI();
  },
  lost() { if (this.role !== 2) return; const inGame = G && SCREEN === 'game' && G.state !== 'end'; this.leave(true); toast("La connexion avec l'hôte est perdue"); if (inGame) { NETROLE = 0; G.state = 'play'; endRun(false); } else lobbyUI(); },
  drop(i) { if (this.role !== 1 || i < 0 || !this.conns[i]) return; this.conns[i] = null; if (G && SCREEN === 'game' && G.ps[i]) { G.ps[i].gone = true; G.ps[i].dead = true; G.ps[i].picked = true; announce(G.ps[i].name + ' a quitté la partie', '#ff6a6a'); if (G.state === 'pick' && G.ps.every(q => q.picked)) endPick(); if (!alive().length) endRun(false); } else { this.lobby[i] = null; this.sync(); } },
  sync() { if (this.role !== 1) return; this.lobby[0] = myInfo(); const l = this.lobby.map(x => x ? { hero: x.hero, name: x.name, skin: x.skin } : null); for (let i = 1; i < 3; i++) this.to(i, { t: 'lob', l, you: i, code: this.code }); lobbyUI(); },
  /* messages reçus par l'hôte */
  onHost(i, d) {
    if (!d || this.role !== 1 || i < 0) return;
    if (d.t === 'hi' || d.t === 'me') { if (G && SCREEN === 'game') return this.to(i, { t: 'full' }); if (d.info && HEROES[d.info.hero]) { d.info.name = String(d.info.name || 'Gardien').slice(0, 14); this.lobby[i] = d.info; if (d.t === 'hi') snd('pick'); this.sync(); } }
    else if (d.t === 'bye') this.drop(i);
    else if (!G || SCREEN !== 'game') return;
    else if (d.t === 'i') { const p = G.ps[this.idx(i)]; if (p && !p.dead) { p.x = clamp(+d.x || 0, -AR, AR); p.y = clamp(+d.y || 0, -AR, AR); p.mv = +d.m || 0; p.mvx = +d.a || 0; p.mvy = +d.b || 0; } }
    else if (d.t === 'k') { const p = G.ps[this.idx(i)]; if (p && 'abcdu'.includes(d.k)) skill(d.k, p); }
    else if (d.t === 'pc') applyPick(G.ps[this.idx(i)], d.i | 0, d.j | 0, d.buy || []);
  },
  idx(i) { return i; },
  start() {
    if (this.role !== 1) return; this.lobby[0] = myInfo(); this.map = [0, 1, 2].filter(i => this.lobby[i]); const infos = this.map.map(i => this.lobby[i]);
    const conns = this.conns; this.map.forEach((slot, k) => { if (slot) this.to(slot, { t: 'go', infos: infos.map(f => ({ hero: f.hero, name: f.name, skin: f.skin, hs: f.hs, tl: f.tl, tx: f.tx, ps: f.ps, wp: f.wp, bon: f.bon || {}, map: infos[0].map | 0, rk: infos[0].rk | 0 })), you: k }); });
    /* à partir d'ici, les joueurs sont numérotés dans l'ordre de la partie */
    const nc = [null, null, null]; this.map.forEach((slot, k) => { nc[k] = conns[slot]; }); this.conns = nc; this.lobby = infos; this.map = null;
    launch(infos, 0, infos.length > 1 ? 1 : 0);
  },
  /* messages reçus par un invité */
  onGuest(d) {
    if (!d || this.role !== 2) return;
    if (d.t === 'lob') { this.lobby = d.l; this.me = d.you; lobbyUI(); }
    else if (d.t === 'full') { toast('Ce groupe est complet ou déjà en partie'); this.leave(); }
    else if (d.t === 'bye') this.lost();
    else if (d.t === 'go') { this.me = d.you; launch(d.infos, d.you, 2); }
    else if (d.t === 's') applySnap(d);
    else if (d.t === 'pk') { if (G && G.state !== 'end') openPick(d.ch); }
    else if (d.t === 'end') { if (G && G.state !== 'end') { G.state = 'end'; over(''); grant(d.res); } }
  }
};
function lobbyUI() { if (typeof SCREEN !== 'undefined' && SCREEN === 'friends') show('friends'); }
addEventListener('pagehide', () => { if (NET.role) NET.leave(true); });
