/* =========================================================
   Interbet — protótipo navegável (dados simulados)
   ========================================================= */
const $ = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => [...el.querySelectorAll(s)];

/* ---------------- ícones ---------------- */
const P = {
  bell:'<path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  back:'<path d="M9 14L4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/>',
  home:'<path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  flag:'<path d="M5 21V4"/><path d="M5 4h13l-2.5 4.5L18 13H5"/>',
  filter:'<path d="M4 6h16M7 12h10M10 18h4"/>',
  chart:'<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>',
  plus:'<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
  withdraw:'<rect x="3" y="10" width="14" height="10" rx="2"/><circle cx="10" cy="15" r="2"/><path d="M14 6h7M18 3l3 3-3 3"/>',
  users:'<circle cx="8" cy="8" r="3.5"/><circle cx="16.5" cy="8" r="3.5"/><path d="M2 20c.5-3.5 3-5.5 6-5.5s5.5 2 6 5.5M13 15c1-.6 2.2-.9 3.5-.9 3 0 5.5 2 6 5.5"/>',
  gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  updown:'<path d="M7 20V4M3 8l4-4 4 4M17 4v16M13 16l4 4 4-4"/>',
  bars:'<rect x="3" y="12" width="5" height="9" rx="1"/><rect x="9.5" y="4" width="5" height="17" rx="1"/><rect x="16" y="9" width="5" height="12" rx="1"/>',
  scan:'<path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"/><path d="M8 9v6M12 8v8M16 9v6"/>',
  edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5M21 12H9"/>',
  chevR:'<path d="M9 6l6 6-6 6"/>',
  chevD:'<path d="M6 9l6 6 6-6"/>',
  x:'<path d="M6 6l12 12M18 6L6 18"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7"/>',
  mega:'<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"/>',
  trophy:'<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
  help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6"/><path d="M12 17h.01"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  fb:'<path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V10H6v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2z"/>',
  cam:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  chat:'<path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.2A8.5 8.5 0 1 1 21 12z"/>',
  male:'<circle cx="10" cy="14" r="6"/><path d="M14.5 9.5L20 4M15 4h5v5"/>',
  female:'<circle cx="12" cy="9" r="6"/><path d="M12 15v7M9 19h6"/>',
  copy:'<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  ball:'<circle cx="12" cy="12" r="9"/><path d="M12 7l4.3 3.1-1.6 5H9.3l-1.6-5z"/><path d="M12 3v4M16.3 10.1l4.3-1.4M14.7 15.1l2.6 3.6M9.3 15.1l-2.6 3.6M7.7 10.1L3.4 8.7"/>',
  doc:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
  pix:'<path d="M12 2.5l4 4-4 4-4-4z" /><path d="M12 13.5l4 4-4 4-4-4z"/><path d="M2.5 12l4-4 4 4-4 4zM13.5 12l4-4 4 4-4 4z"/>',
  crown:'<path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5z"/>',
  history:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
  arrowR:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  inbox:'<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5h13L22 12v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6z"/>',
  send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',
};
const ic = (n, cls='') => `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true">${P[n]}</svg>`;

/* ---------------- dados ---------------- */
const T = {
  espm:{n:'ESPM', full:'ESPM', img:'espm'},
  mack:{n:'MACK', full:'Mackenzie', img:'mack'},
  poli:{n:'POLI-USP', s:'POLI', full:'Politécnica USP', img:'poli'},
  fea:{n:'FEA-USP', s:'FEA', full:'FEA USP', img:'fea'},
  eefe:{n:'EEFE-USP', s:'EEFE', full:'EEFE USP', img:'eefe'},
  axis:{n:'XI SETEMBRO', s:'AXIS', full:'XI de Setembro', img:'axis'},
  abc:{n:'MED ABC', s:'ABC', full:'Medicina ABC', color:'#1F7A55'},
  puc:{n:'PUC-SP', s:'PUC', full:'PUC-SP', color:'#0C4D8C'},
  insper:{n:'INSPER', full:'Insper', color:'#B3123A'},
};
const short = k => T[k].s || T[k].n;
const crest = (k, cls='crest', size) => {
  const t = T[k], st = size ? `style="width:${size}px;height:${size}px;font-size:${Math.round(size*.32)}px"` : '';
  return t.img
    ? `<img class="${cls}" src="img/${t.img}${size>80?'-lg':''}.png" alt="${t.full}" data-team="${k}" ${st}>`
    : `<span class="mono ${cls.replace('crest','')}" data-team="${k}" style="background:${t.color};${size?`width:${size}px;height:${size}px;font-size:${Math.round(size*.32)}px`:'font-size:11px'}">${(t.s||t.n).slice(0,4)}</span>`;
};

const today = new Date(); today.setHours(0,0,0,0);
const dayDate = off => { const d = new Date(today); d.setDate(d.getDate()+off); return d; };
const ddmm = d => String(d.getDate()).padStart(2,'0') + '/' + String(d.getMonth()+1).padStart(2,'0');
const MES = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
const longDate = d => `${d.getDate()} de ${MES[d.getMonth()]}`;
const DAYNAME = {'-1':'Ontem', '0':'Hoje', '1':'Amanhã'};

const COMP = { FM:'Futsal Masculino Série A', FF:'Futsal Feminino Série A' };
let MID = 0;
const M = (day, comp, round, phase, time, gym, a, b, o, score) => ({id:'m'+(MID++), day, comp, round, phase, time, gym, a, b, o, score});
const MATCHES = [
  M(-1,'FM',2,'Jogo 1','10:00','Ginásio 1','fea','mack',[2.10,3.20,2.60],[2,1]),
  M(-1,'FM',2,'Jogo 2','11:30','Ginásio 2','abc','poli',[1.90,3.30,2.80],[3,4]),
  M(-1,'FM',2,'Jogo 3','14:00','Ginásio 1','espm','mack',[2.40,2.40,2.40],[1,2]),
  M(-1,'FF',2,'Jogo 1','16:00','Ginásio 2','fea','mack',[2.20,3.10,2.50],[0,3]),
  M(-1,'FF',2,'Jogo 2','17:30','Ginásio 1','abc','poli',[2.00,3.40,2.70],[3,1]),
  M(0,'FM',3,'Jogo 1','09:00','Ginásio 1','fea','mack',[2.30,3.00,2.50],[2,3]),
  M(0,'FM',3,'Jogo 2','10:30','Ginásio 2','abc','poli',[2.10,3.10,2.70],[1,0]),
  M(0,'FM',3,'Jogo 3','15:00','Ginásio 1','espm','mack',[2.40,2.40,2.40]),
  M(0,'FM',3,'Jogo 4','16:00','Ginásio 2','poli','fea',[1.85,3.10,2.65]),
  M(0,'FF',3,'Semifinal','17:00','Ginásio 1','axis','eefe',[2.10,3.40,2.20]),
  M(0,'FF',3,'Semifinal','19:00','Ginásio 2','espm','insper',[2.75,3.00,1.95]),
  M(1,'FM',4,'Jogo 1','15:00','Ginásio 1','fea','espm',[2.40,2.40,2.40]),
  M(1,'FM',4,'Jogo 2','17:00','Ginásio 1','mack','poli',[2.40,2.40,2.40]),
  M(1,'FF',4,'Jogo 1','16:00','Ginásio 2','puc','eefe',[2.30,3.20,2.45]),
  M(1,'FF',4,'Jogo 2','18:00','Ginásio 2','mack','axis',[1.70,3.60,3.05]),
];
const byId = id => MATCHES.find(m => m.id === id);
const kickoff = m => { const d = dayDate(m.day); const [h,mi] = m.time.split(':'); d.setHours(+h, +mi); return d; };
const isOpen = m => !m.score && kickoff(m) > new Date();
const isLive = m => !m.score && kickoff(m) <= new Date();

const RACE = [['mack',8.91],['fea',6.88],['axis',4.22],['eefe',3.31],['poli',3.55],['espm',2.91]];
const MODS = [
  {k:'Futebol', i:'m_soccer', off:'m_soccer_off'},{k:'Basquete', i:'m_basket'},{k:'Vôlei', i:'m_volley'},
  {k:'Futsal', i:'m_soccer2'},{k:'Handebol', i:'m_handball'},{k:'Integração', i:'m_beer'}
];
const TABLE = {
  FM:[['abc',31],['espm',28],['mack',25],['eefe',24],['fea',21],['axis',21],['puc',18],['insper',17],['poli',16]],
  FF:[['eefe',30],['axis',26],['fea',24],['abc',24],['espm',22],['mack',20],['puc',18],['insper',17],['poli',16]],
};
const statsFor = p => { const J = 14, E = p%3 === 0 ? 3 : p%3, V = (p-E)/3; return {J, V, E, D: J-V-E}; };
const USERS = [['Pedro Neves',1000.31],['Julia Santos',992.51],['Paulo Oliveira',883.20],['Caio Peixoto',623.54],['Sandra Dias',552.32],['Damião Lobo',441.02],['Lucas Souza',398.10],['Marta Sales',350.75],['Claudia Pato',301.40],['Denilson Bala',288.05],['Bruna Lima',254.60],['Rafael Costa',231.90]];
const PLAYERS_M = [['Pedro Jorge','GOL'],['Lucas Ruiz','DEF'],['Caio Souza','DEF'],['José Brito','DEF'],['David Ney','PIVÔ'],['César Oliva','GOL']];
const PLAYERS_F = [['Paula Goes','GOL'],['Tati Zuqui','DEF'],['Nanda Cruz','DEF'],['Paty Neves','DEF'],['Zoe Nascar','PIVÔ'],['Ana Toledo','GOL']];

/* ---------------- estado ---------------- */
const DEF = {
  logged:false, onboarded:false, team:null, terms:false, coins:100, confirmed:false, firstName:'',
  bets:[
    {id:'b1', mid:'m2', pick:2, stake:20, odd:2.40},
    {id:'b2', mid:'m0', pick:2, stake:20, odd:2.60},
    {id:'b3', mid:'m7', pick:1, stake:20, odd:2.40},
  ],
  notifs:[
    {id:'n1', kind:'mega', t:'Atenção ESPMrs', d:'Você tem um novo recado de um representante da sua atlética.', go:'notif-recado', read:false},
    {id:'n2', kind:'win', t:'Na mosca!', d:'Parabéns, sua aposta no jogo “ESPM x MACK” foi um sucesso! Confira o resultado.', go:'minhas-apostas-finalizadas', read:false},
    {id:'n3', kind:'lose', t:'Não foi dessa vez…', d:'Sua aposta no jogo “FEA-USP x MACK” não deu certo. Continue tentando!', go:'minhas-apostas-finalizadas', read:true},
    {id:'n4', kind:'trophy', t:'Bem-vindo ao Interbet', d:'Agora você pode aproveitar todas as vantagens de ser membro dessa festa!', read:true},
  ],
  history:[{t:'Bônus de boas-vindas', d:'Crédito inicial', v:100, kind:'in'}],
};
let S;
try { S = Object.assign(structuredClone(DEF), JSON.parse(localStorage.getItem('interbet') || '{}')); } catch(e) { S = structuredClone(DEF); }
const save = () => { try { localStorage.setItem('interbet', JSON.stringify(S)); } catch(e){} };

const fmt = v => 'x' + v.toFixed(2);
const money = v => (Math.round(v*100)/100).toLocaleString('pt-BR', {minimumFractionDigits: v % 1 ? 2 : 0, maximumFractionDigits: 2});
const BC = '<i class="bc"></i>';
const pickName = (m, p) => p === 1 ? 'Empate' : T[p === 0 ? m.a : m.b].n;
const betResult = b => { const m = byId(b.mid); if (!m || !m.score) return null; const [x,y] = m.score; const w = x>y?0:x<y?2:1; return w === b.pick ? 'win' : 'lose'; };

/* ---------------- UI helpers ---------------- */
let tt;
function toast(msg){ const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('show'), 2000); }
function setCoins(v){ S.coins = Math.round(v*100)/100; save(); $$('.js-coins').forEach(e => { e.textContent = money(S.coins); const p = e.closest('.coins'); if (p){ p.classList.remove('bump'); void p.offsetWidth; p.classList.add('bump'); } }); }
const go = h => { if (location.hash === '#'+h) render(); else location.hash = h; };
const pageHead = (title, tabs, active, back='home') => `
  <header class="phead ${tabs?'':'no-tabs'}">
    <div class="bar"><button class="back tap" data-back="${back}" aria-label="Voltar">${ic('back')}</button><h1>${title}</h1><span></span></div>
    ${tabs ? `<div class="tabs" role="tablist">${tabs.map(([k,l]) => `<button class="tap ${k===active?'on':''}" role="tab" aria-selected="${k===active}" data-tab="${k}">${l}</button>`).join('')}</div>` : ''}
  </header>`;

const oddsHTML = (m, selPick) => `<div class="odds">${[0,1,2].map(i => `
  <button class="odd tap ${i===1?'draw':''} ${selPick===i?'sel':''}" data-bet="${m.id}" data-pick="${i}">
    <small>${i===1?'Empate':short(i?m.b:m.a)}</small><b>${fmt(m.o[i])}</b></button>`).join('')}</div>`;

/* ---------------- views ---------------- */
const V = {};

V.login = () => `
<section class="login view">
  <div class="logo-mark"><div class="ath"></div></div>
  <div class="wordmark">interbet</div>
  <p class="tag">O app de apostas oficial dos jogos universitários</p>
  <div class="actions">
    <div class="ttl">Para acessar, faça seu login</div>
    <button class="sso tap" data-login><span class="sic">${ic('mail')}</span>Entrar com Google${ic('chevR','arrow')}</button>
    <button class="sso tap" data-login><span class="sic">${ic('fb')}</span>Entrar com Facebook${ic('chevR','arrow')}</button>
    <button class="sso tap" data-login><span class="sic">${ic('cam')}</span>Entrar com Instagram${ic('chevR','arrow')}</button>
  </div>
  <p class="legal">Ao entrar você concorda com os <a data-sheet="terms">termos de uso</a>.<br>Proibido para menores de 18 anos · Aposte com responsabilidade</p>
</section>`;

let ob = {step: S.team ? 2 : 1, q:''};
V['bem-vindo'] = () => {
  const sugg = ob.q.length ? Object.keys(T).filter(k => (T[k].full+' '+T[k].n).toLowerCase().includes(ob.q.toLowerCase())) : [];
  return `
<section class="chat view">
  <div class="brand-top"><div class="logo-mark"><div class="ath"></div></div><span>inter<em>bet</em></span></div>
  <div class="bubble r"><h2>Olá, João</h2><p>Seja bem-vindo à <em>inter<i>bet</i></em>!</p></div>
  <div class="bubble l" style="animation-delay:.25s">
    <p>Para começar, digite o nome da faculdade para a qual você torce:</p>
    <div class="inrow">
      <input id="obQ" placeholder="Ex.: ESPM, Mackenzie…" value="${S.team ? T[S.team].full : ob.q}" ${S.team?'disabled':''} autocomplete="off">
      ${S.team ? `<span class="ok">${ic('check')}Confirmado</span><button class="tap" data-ob-reset aria-label="Trocar atlética" style="border:0;padding:0;width:36px;color:var(--cinza);display:grid;place-items:center">${ic('x')}</button>` : `<button class="tap" data-ob-search>Buscar</button>`}
    </div>
    ${!S.team && ob.searched ? `<div class="sugg">${(sugg.length ? sugg : []).map(k => `<button class="tap" data-ob-team="${k}">${crest(k,'crest')}${T[k].full}</button>`).join('') || '<span class="muted" style="font-size:13px">Nenhuma atlética encontrada. Tente outro nome.</span>'}</div>` : ''}
  </div>
  ${S.team ? `
  <div class="bubble r">
    <p>Boa! Agora é só ler, aceitar as regras do jogo e correr pro abraço.</p>
    <div class="check ${S.terms?'on':''}" data-ob-terms role="checkbox" aria-checked="${S.terms}" tabindex="0"><span class="bx">${ic('check')}</span><span>Eu li e concordo com os <u data-sheet="terms">termos de uso</u></span></div>
  </div>
  <div style="margin-top:auto;padding-top:20px"><button class="btn tap" data-ob-done ${S.terms?'':'disabled'}>Começar a apostar ${ic('arrowR')}</button></div>` : ''}
</section>`;
};

let homeMod = 0, filterOpen = false;
V.home = () => {
  const upcoming = MATCHES.filter(isOpen);
  const unread = S.notifs.filter(n => !n.read).length;
  const days = [0,1].map(d => ({d, m: upcoming.filter(m => m.day === d)})).filter(x => x.m.length);
  return `
<div class="view">
  <header class="appbar" id="appbar">
    <button class="icon-btn tap" data-go="notificacoes" aria-label="Notificações">${ic('bell')}${unread?`<span class="badge">${unread}</span>`:''}</button>
    <div class="event-chip"><small>Evento</small><b>Integramix</b></div>
    <div class="wallet">
      <div class="lvl">Level 1 <i></i></div>
      <button class="coins tap" data-go="adicionar-saldo" title="Adicionar saldo"><span class="js-coins">${money(S.coins)}</span><img src="img/betcoin.png" alt="betcoins"></button>
    </div>
  </header>
  <section class="hero"><div class="stack">
    <button class="promo tap" data-sheet="promo">
      <div class="blob"></div><img class="dots" src="img/ad_orn11.svg" alt=""><img class="o1" src="img/ad_orn3.svg" alt=""><img class="o2" src="img/ad_orn2.svg" alt="">
      <div class="txt"><h3>Ganhe prêmios<br>de graça</h3><p>Acumule betcoins e troque no nosso stand durante o Integramix!</p></div>
      <img class="photo" src="img/ad-photo.png" alt="Brindes Interbet">
    </button>
    <section class="card-glass race">
      <div class="hd"><h4>Corrida pelo campeão <img src="img/c_trophy.svg" alt=""></h4><span>Odds atuais</span></div>
      <div class="row scroll-x">${RACE.map(([k,o]) => `<button class="champ tap" data-champ="${k}"><img src="img/${T[k].img}.png" alt=""><span class="n">${short(k)}</span><span class="o">${fmt(o)}</span></button>`).join('')}</div>
    </section>
    <nav class="mods-wrap" aria-label="Modalidades"><div class="row scroll-x">${MODS.map((m,i) => {
      const on = i===homeMod; return `<button class="mod tap ${on?'on':''}" data-mod="${i}" aria-pressed="${on}"><span class="c"><img src="img/${on?m.i+'_on':(m.off||m.i)}.svg" alt=""></span><span>${m.k}</span></button>`; }).join('')}</div></nav>
  </div></section>
  <main class="panel">
    <div class="sec-hd"><h2 class="sec-title">Destaques <img src="img/imgAkarIconsStar.svg" alt=""></h2>
      <button class="chip-btn tap ${filterOpen?'on':''}" data-filter>${ic('filter')}<span>${filterOpen?'FECHAR':'FILTRAR'}</span></button></div>
    <div class="filters ${filterOpen?'open':''}"><div class="in"><h5>Filtrar partidas</h5><div class="pills" data-pills><button class="tap">Atlética</button><button class="tap">Categoria</button><button class="tap">Finalizadas</button></div></div></div>
    <div class="highlights scroll-x">${upcoming.slice(0,6).map(m => `
      <article class="hcard">
        <div class="meta"><span>${m.time}</span><span class="dot"></span><u>${m.phase}</u><span class="dot"></span><span>${m.comp==='FF'?'♀':'♂'} ${m.gym}</span></div>
        <div class="versus"><div class="team">${crest(m.a)}<span>${short(m.a)}</span></div><div class="vs">VS</div><div class="team">${crest(m.b)}<span>${short(m.b)}</span></div></div>
        ${oddsHTML(m)}
      </article>`).join('')}</div>
    <section class="next">
      <div class="sec-hd"><h2 class="sec-title">Próximas partidas</h2></div>
      <div class="timeline">${days.map(x => `
        <div class="day ${x.d===0?'today':''}"><div class="dh"><b>${DAYNAME[x.d]}</b><span>${ddmm(dayDate(x.d))}</span></div>
          ${x.m.map(m => matchCard(m)).join('')}
        </div>`).join('')}</div>
    </section>
  </main>
</div>
<button class="help-fab tap" data-sheet="help" aria-label="Ajuda">${ic('help')}</button>`;
};

const matchCard = (m, bet) => `
  <article class="mcard">
    <div class="side">${bet ? `<span>${m.time}</span><span class="stake">Lance<b class="orange">${money(bet.stake)} ${BC}</b></span><span class="stake">${betResult(bet)==='lose'?'Prêmio':'Prêmio'}<b class="${betResult(bet)==='lose'?'red':'green'}">${betResult(bet)==='lose'?'—':money(bet.stake*bet.odd)+' '+BC}</b></span>`
      : `<b>${m.time}</b><span><u>${m.phase}</u></span>${ic(m.comp==='FF'?'female':'male')}<span>${m.gym}</span>`}</div>
    <div class="main">
      <div class="mrow"><div class="mteam">${crest(m.a)}<span>${short(m.a)}</span></div>${m.score?`<div class="vs num" style="font-size:18px">${m.score[0]} – ${m.score[1]}</div>`:'<div class="vs">VS</div>'}<div class="mteam r">${crest(m.b)}<span>${short(m.b)}</span></div></div>
      ${bet ? `<div class="pick-line">sua escolha</div>${oddsHTML(m, bet.pick).replace(/data-bet="[^"]+"/g,'disabled')}` : oddsHTML(m)}
    </div>
  </article>`;

V.evento = () => `
${pageHead('Evento', null, null)}
<div class="page view">
  ${[-1,0,1].map(d => {
    const ms = MATCHES.filter(m => m.day === d);
    return `<div class="ev-day ${d===0?'today':''}"><h3>${DAYNAME[d]}, ${longDate(dayDate(d))}</h3>
      ${['FM','FF'].map(c => { const g = ms.filter(m => m.comp === c); if(!g.length) return '';
        return `<div class="comp"><div class="comp-hd">${ic('ball')}${COMP[c]}<small>Rodada ${g[0].round}</small></div>
          ${g.map(m => `<div class="game">
             <div class="mteam">${crest(m.a)}<span>${short(m.a)}</span></div>
             <div class="score">${m.score
                ? `<span class="${m.score[0]>m.score[1]?'green':m.score[0]<m.score[1]?'red':''}">${m.score[0]}</span><span class="vs">VS</span><span class="${m.score[1]>m.score[0]?'green':m.score[1]<m.score[0]?'red':''}">${m.score[1]}</span>`
                : isLive(m) ? `<span class="muted" style="font-size:12px">ao vivo</span>`
                : `<button class="tap" data-bet="${m.id}" data-pick="0">${fmt(m.o[0])}</button><span class="vs">VS</span><button class="tap" data-bet="${m.id}" data-pick="2">${fmt(m.o[2])}</button>`}</div>
             <div class="mteam r">${crest(m.b)}<span>${short(m.b)}</span></div></div>`).join('')}
          <button class="more tap" data-go="classificacao-${c==='FM'?'m':'f'}">${d<0?'Ver tabela':d===0?'Ver tabela':'Ver mais'}</button></div>`; }).join('')}
    </div>`; }).join('')}
</div>`;

let rankTab = 'users';
V.rankings = () => {
  const me = {pos:31, name:'Você', v:S.coins};
  const top = USERS.slice(0,3);
  return `
${pageHead('Rankings', [['users','Top usuários'],['teams','Top atléticas']], rankTab)}
<div class="page view">
  ${rankTab === 'users' ? `
  <div class="podium">
    ${[[1,'second'],[0,'first'],[2,'third']].map(([i,c]) => `<div class="p ${c}">${i===0?`<svg class="i crown" viewBox="0 0 24 24" style="fill:#FFC93C;stroke:#FFC93C">${P.crown}</svg>`:''}<img src="img/avatar.png" alt=""><b>${top[i][0].split(' ')[0]}</b><span>${money(top[i][1])} ${BC}</span><div class="step">${i+1}º</div></div>`).join('')}
  </div>
  <div class="info-bar"><span>Minha colocação atual: <b>${me.pos}º</b></span><span>Dias restantes: <b>13</b></span></div>
  <div>${USERS.slice(3).map((u,i) => rankRow(i+4, `<img src="img/avatar.png" alt="">`, u[0], `${money(u[1])} ${BC}`)).join('')}
    <div class="hint" style="margin:10px 0">• • •</div>
    ${rankRow(me.pos, `<img src="img/avatar.png" alt="">`, 'Você', `${money(me.v)} ${BC}`, 'me')}
  </div>` : `
  <div class="info-bar"><span>Total de betcoins apostados por atlética</span></div>
  <div>${['mack','espm','poli','fea','axis','eefe','abc','puc','insper'].map((k,i) => rankRow(i+1, crest(k), T[k].full, `${money(18420 - i*1730)} ${BC}`, i<3?'top':'', `data-go="atletica-${k}"`)).join('')}</div>`}
</div>`;
};
const rankRow = (pos, img, name, val, cls='', attrs='') => `
  <button class="rank-row tap ${cls}" ${attrs}><span class="pos">${pos}<sup>º</sup></span><span class="body">${img}<span class="nm">${name}${pos===1&&!cls.includes('top')?'':''}</span><span class="val">${val}</span></span></button>`;

let clsTab = 'tabela', clsComp = 'FM', clsOpen = null, clsChooser = false;
V.classificacao = () => `
${pageHead('Classificação', [['tabela','Tabela'],['rodadas','Rodadas']], clsTab, 'evento')}
<div class="page view">
  <div class="switch-card"><p>Você está vendo a classificação do <span class="orange">${COMP[clsComp]}</span></p><button class="btn-outline sm tap" data-cls-change>Mudar</button></div>
  ${clsChooser ? `<div class="pills" style="justify-content:center">${['FM','FF'].map(c => `<button class="tap ${c===clsComp?'on':''}" data-cls-comp="${c}">${c==='FM'?'Futsal Masculino':'Futsal Feminino'}</button>`).join('')}</div>` : ''}
  ${clsTab === 'tabela' ? `
  <p class="hint">Toque em uma atlética para ver mais informações</p>
  <div>${TABLE[clsComp].map(([k,p],i) => { const s = statsFor(p); return `
    <button class="rank-row tap ${i<3?'top':''} ${clsOpen===i?'open':''}" data-cls-row="${i}" aria-expanded="${clsOpen===i}">
      <span class="pos">${i+1}<sup>º</sup></span>
      <span class="body">${crest(k)}<span class="nm">${T[k].full}</span><span class="val">${p} pts</span></span>
      <span class="stats"><span><small>Jogos</small><b>${s.J}</b></span><span><small>Vitórias</small><b>${s.V}</b></span><span><small>Empates</small><b>${s.E}</b></span><span><small>Derrotas</small><b>${s.D}</b></span></span>
    </button>`; }).join('')}</div>` : `
  ${[4,3,2].map(r => { const g = MATCHES.filter(m => m.comp === clsComp && m.round === r); if(!g.length) return '';
    return `<div class="comp"><div class="comp-hd">${ic('ball')}Rodada ${r}<small>${DAYNAME[g[0].day]}, ${ddmm(dayDate(g[0].day))}</small></div>
      ${g.map(m => `<div class="game"><div class="mteam">${crest(m.a)}<span>${short(m.a)}</span></div>
        <div class="score">${m.score?`<span>${m.score[0]}</span><span class="vs">VS</span><span>${m.score[1]}</span>`:`<span class="muted" style="font-size:12.5px;font-weight:700">${m.time}</span>`}</div>
        <div class="mteam r">${crest(m.b)}<span>${short(m.b)}</span></div></div>`).join('')}</div>`; }).join('')}`}
</div>`;

let betsTab = 'abertas';
V['minhas-apostas'] = () => {
  const open = S.bets.filter(b => !betResult(b)), done = S.bets.filter(b => betResult(b));
  const list = betsTab === 'abertas' ? open : done;
  const days = [...new Set(list.map(b => byId(b.mid).day))].sort((a,b) => betsTab==='abertas'?a-b:b-a);
  return `
${pageHead('Minhas apostas', [['abertas','Abertas'],['finalizadas','Finalizadas']], betsTab)}
<div class="page view">
  ${!list.length ? `<div class="empty">${ic('inbox')}<b>${betsTab==='abertas'?'Nenhuma aposta aberta':'Nenhuma aposta finalizada'}</b>Toque em uma odd na tela inicial para apostar.</div>` : `
  <div class="timeline" style="padding-inline:26px 0;margin-top:0">${days.map(d => `
    <div class="day ${d===0?'today':''}"><div class="dh"><b>${DAYNAME[d]}</b><span>${ddmm(dayDate(d))}</span></div>
      ${list.filter(b => byId(b.mid).day === d).map(b => { const r = betResult(b);
        return (r ? `<div class="pick-line" style="text-align:left;margin:0 0 6px 4px;font-size:12px;font-weight:800"><span class="${r==='win'?'green':'red'}">${r==='win'?'✓ Ganhou':'✕ Perdeu'}</span></div>` : '') + matchCard(byId(b.mid), b); }).join('')}
    </div>`).join('')}</div>`}
</div>`;
};

V.notificacoes = () => `
${pageHead('Notificações', null, null)}
<div class="page view">
  <div>${S.notifs.map(n => `
    <article class="notif ${n.read?'read':''}">
      <span class="new">NOVO</span>
      <div class="ic">${n.kind==='mega'?ic('mega'):n.kind==='trophy'?ic('trophy'):`<span class="circle">${ic(n.kind==='win'?'check':'x')}</span>`}</div>
      <div class="bd"><div class="tx"><h4>${n.t}</h4><p>${n.d}</p></div>${n.go?`<button class="btn-outline sm tap" data-notif="${n.id}">Ver</button>`:''}</div>
    </article>`).join('')}</div>
  ${S.notifs.some(n => !n.read) ? `<button class="btn ghost tap" data-notif-all>Marcar todas como lidas</button>` : ''}
</div>`;

V.configuracoes = () => `
${pageHead('Configurações', null, null)}
<div class="page view">
  <div>
    <button class="menu-row tap" data-go="confirmar-conta"><span class="ic">${ic('edit')}</span>CONFIRMAR CONTA<span class="tag ${S.confirmed?'':'warn'}">${S.confirmed?'Confirmada':'Pendente'}</span></button>
    ${S.team ? `<button class="menu-row tap" data-go="atletica-${S.team}"><span class="ic">${crest(S.team,'crest',26)}</span>MINHA ATLÉTICA${ic('chevR','chev')}</button>` : ''}
    <button class="menu-row tap" data-sheet="terms"><span class="ic">${ic('doc')}</span>TERMOS DE USO${ic('chevR','chev')}</button>
    <button class="menu-row tap" data-sheet="help"><span class="ic">${ic('help')}</span>AJUDA${ic('chevR','chev')}</button>
    <button class="menu-row tap danger" data-logout><span class="ic">${ic('logout')}</span>SAIR</button>
  </div>
  <p class="hint">Interbet · protótipo v1.0</p>
</div>`;

let addStep = 1, addVal = 20, addTab = 'add', addPaid = false;
V['adicionar-saldo'] = () => `
${pageHead('Adicionar saldo', [['add','Adicionar'],['hist','Histórico']], addTab)}
<div class="page view">
  ${addTab === 'hist' ? histHTML() : addStep === 1 ? `
  <p class="lead">Para adicionar saldo na sua conta, escolha o valor desejado:</p>
  <div class="stake-row"><label class="stake-input"><span>Valor (R$)</span><input id="addInput" inputmode="numeric" value="${addVal}" aria-label="Valor em reais"></label><span class="muted" style="font-size:12.5px;font-weight:700">1 BRL = 1 ${BC}</span></div>
  <div class="amounts">${[10,25,50,100,250,500].map(v => `<button class="tap ${v===addVal?'on':''}" data-amt="${v}">${v} ${BC}</button>`).join('')}</div>
  <div class="sec-label" style="margin-top:22px">Método de pagamento</div>
  <button class="paym tap"><span class="logo">${ic('pix')}</span><span><b>Pix</b><small>Aprovação em instantes</small></span><span class="radio on"></span></button>
  <button class="btn tap" data-add-next ${addVal>0?'':'disabled'}>Avançar ${ic('arrowR')}</button>` : `
  <p class="lead">Agora é só escanear o QR Code ou copiar o código Pix para pagar. Em instantes o saldo estará disponível na sua conta.</p>
  <div class="box"><div class="kv"><span>Valor</span><b class="orange">R$ ${money(addVal)}</b></div><div class="kv"><span>Status</span><b class="${addPaid?'green':'orange'}">${addPaid?'Pagamento confirmado':'Aguardando pagamento'}</b></div></div>
  <div class="qr"><canvas id="qr" width="29" height="29"></canvas><span class="demo">DEMONSTRAÇÃO</span></div>
  <p class="hint">Protótipo: nenhum pagamento real é processado.</p>
  ${addPaid ? `<button class="btn tap" data-go="home">Voltar ao início</button>` : `<button class="btn tap" data-add-pay>Simular pagamento</button><button class="btn ghost tap" data-add-back>Alterar valor</button>`}`}
</div>`;
const histHTML = () => S.history.length ? `<div>${S.history.slice().reverse().map(h => `
  <div class="hist-row"><span class="ic">${ic(h.kind==='in'?'plus':h.kind==='bet'?'chart':'withdraw')}</span><span class="tx"><b>${h.t}</b><small>${h.d}</small></span><span class="v ${h.v>0?'green':''}">${h.v>0?'+':''}${money(h.v)} ${BC}</span></div>`).join('')}</div>`
  : `<div class="empty">${ic('history')}<b>Sem movimentações</b></div>`;

let sacTab = 'saque', sacVal = '';
V['sacar-saldo'] = () => `
${pageHead('Sacar saldo', [['saque','Saque'],['hist','Histórico']], sacTab)}
<div class="page view">
  ${sacTab === 'hist' ? histHTML() : !S.confirmed ? `
  <div class="alert"><span class="mark">!</span><p>Para efetuar saques é necessário confirmar sua conta com alguns dados.</p><button class="btn-outline sm tap" data-go="confirmar-conta">Editar</button></div>
  <div class="empty">${ic('withdraw')}<b>Saque indisponível</b>Confirme sua conta para liberar os saques.</div>` : `
  <div class="alert ok"><span class="mark">${ic('check')}</span><p>Conta confirmada. O valor cai na chave Pix cadastrada.</p></div>
  <div class="box" style="text-align:center"><div class="sec-label">Saldo disponível</div><div style="font-size:32px;font-weight:800;margin-top:6px"><span class="js-coins">${money(S.coins)}</span> ${BC}</div></div>
  <label class="stake-input"><span>Valor do saque</span><input id="sacInput" inputmode="decimal" placeholder="0" value="${sacVal}"></label>
  <button class="btn tap" data-sac>Solicitar saque</button>
  <p class="hint">Protótipo: nenhum valor real é transferido.</p>`}
</div>`;

let pixType = 'cpf';
V['confirmar-conta'] = () => `
${pageHead('Confirmar conta', null, null, 'configuracoes')}
<form class="page view" id="confForm" novalidate>
  <p class="lead">Para sacar seu saldo e ter acesso a todos os recursos da plataforma, é necessário confirmar algumas informações:</p>
  <div class="field"><label for="fNome">Nome e sobrenome</label><input class="input" id="fNome" autocomplete="name" placeholder="Seu nome completo" value="${S.firstName?S.firstName:''}"></div>
  <div class="field"><label for="fCpf">CPF</label><input class="input" id="fCpf" inputmode="numeric" placeholder="000.000.000-00" maxlength="14"></div>
  <div class="field"><label>Chave Pix para saque</label>
    <div class="box"><div class="pills" style="margin-bottom:12px">${[['cpf','CPF/CNPJ'],['tel','Telefone'],['email','E-mail']].map(([k,l]) => `<button type="button" class="tap ${k===pixType?'on':''}" data-pix="${k}">${l}</button>`).join('')}</div>
    <input class="input" id="fPix" style="background:var(--roxo-medio)" placeholder="${pixType==='email'?'voce@email.com':pixType==='tel'?'(11) 90000-0000':'000.000.000-00'}"></div></div>
  <button class="btn tap" type="submit">Confirmar</button>
  ${S.confirmed ? `<p class="hint green">Sua conta já está confirmada.</p>` : ''}
</form>`;

V.atletica = (k='mack') => {
  const t = T[k], posM = TABLE.FM.findIndex(x => x[0]===k)+1, posF = TABLE.FF.findIndex(x => x[0]===k)+1;
  const sM = statsFor(TABLE.FM[posM-1][1]), sF = statsFor(TABLE.FF[posF-1][1]);
  const others = Object.keys(T).filter(x => x !== k);
  const acc = (c, pos, s, pl, open) => `
    <div class="acc ${open?'open':''}"><button class="tap" data-acc>${ic('ball')}${COMP[c]}${ic('chevD','chev')}</button>
      <div class="acc-body">
        <h5>Estatísticas</h5>
        <div class="sgrid"><span><small>Posição</small><b>#${pos}</b></span><span><small>V</small><b>${s.V}</b></span><span><small>E</small><b>${s.E}</b></span><span><small>D</small><b>${s.D}</b></span><span><small>Pts</small><b>${s.V*3+s.E}</b></span></div>
        <h5>Jogadores <button class="btn-outline sm tap" data-toast="Escalação dinâmica — em breve">Ver escalação</button></h5>
        <div class="players scroll-x">${pl.map(p => `<div class="player"><img src="img/avatar.png" alt=""><b>${p[0].split(' ')[0]}</b><small>${p[1]}</small></div>`).join('')}</div>
        <h5>Próximos confrontos</h5>
        <div>${others.slice(c==='FM'?0:2, c==='FM'?4:6).map((o,i) => `<div class="fixture"><b style="display:flex;align-items:center;gap:8px">${crest(o,'crest',26)}${T[o].n}</b><span>Integramix</span><span class="date-pill">${ddmm(dayDate(2+i*7))}</span></div>`).join('')}</div>
      </div></div>`;
  return `
${pageHead('Atlética', null, null)}
<div class="view">
  <div class="ath-hero"><div class="band"></div>${t.img?`<img src="img/${t.img}-lg.png" alt="${t.full}">`:`<span class="mono" style="width:148px;height:148px;margin:-90px auto 0;font-size:40px;background:${t.color};box-shadow:0 0 0 5px var(--roxo-medio);position:relative">${short(k)}</span>`}<h2>${t.full}</h2></div>
  <div class="page" style="padding-top:8px">
    <div class="stats2"><div><small>EQUIPES</small><b>2</b></div><div><small>RANKING INTERBET</small><b>${Math.max(1,['mack','espm','poli','fea','axis','eefe','abc','puc','insper'].indexOf(k)+1)}º</b></div></div>
    <div>${acc('FM', posM, sM, PLAYERS_M, true)}${acc('FF', posF, sF, PLAYERS_F, false)}</div>
  </div>
</div>`;
};

/* ---------------- sheets ---------------- */
const SH = {};
let betCtx = null, tmr;
SH.bet = ({mid, pick}) => {
  const m = byId(mid); betCtx = {m, pick: pick ?? null, stake: 10};
  return `<div class="bet-sheet">
    <h2>${COMP[m.comp].replace(' Série A','')}</h2><div class="sub"><span>${m.phase} · Rodada ${m.round}</span></div>
    <div class="body">
      <div class="match-box">
        <div class="versus"><div class="team">${crest(m.a,'crest',64)}<span>${short(m.a)}</span></div>
          <div class="mid"><span class="timer" id="timer">--:--:--</span>${m.time}<br>${DAYNAME[m.day]}, ${ddmm(dayDate(m.day))}<br>${m.gym}</div>
          <div class="team">${crest(m.b,'crest',64)}<span>${short(m.b)}</span></div></div>
        <div id="betOdds">${oddsHTML(m, betCtx.pick).replace(/data-bet=/g,'data-pick-in=')}</div>
      </div>
      <p class="chosen" id="chosen"></p>
      ${stakeHTML()}
      <button class="btn tap" id="betGo">Apostar</button>
    </div></div>`;
};
SH.champ = ({team}) => {
  betCtx = {champ:true, team, stake:10};
  const o = RACE.find(r => r[0]===team)[1];
  return `<h2>Corrida pelo Campeão</h2><div class="sub"><span>Integramix</span></div>
    <div class="body">
      <div class="champ-pick"><img id="champImg" src="img/${T[team].img}-lg.png" alt="">
        <select id="champSel" aria-label="Escolher campeão">${RACE.map(([k,o]) => `<option value="${k}" ${k===team?'selected':''}>${short(k)} · ${fmt(o)}</option>`).join('')}</select></div>
      <p class="chosen" id="chosen"></p>
      ${stakeHTML()}
      <button class="btn tap" id="betGo">Apostar</button>
    </div>`;
};
const stakeHTML = () => `
  <div class="stake-row"><label class="stake-input"><span>Valor da aposta</span><input id="stake" inputmode="decimal" value="10" aria-label="Valor da aposta"><i class="bc"></i></label>
    <div class="quick-st"><button class="tap" data-st="25">25</button><button class="tap" data-st="50">50</button></div></div>
  <div class="ret"><span>Retorno esperado<br><span class="bal">Saldo: ${money(S.coins)}</span></span><b id="ret">0 ${BC}</b></div>`;
SH.team = ({team}) => {
  const k = team, pos = TABLE.FM.findIndex(x => x[0]===k)+1;
  const past = MATCHES.filter(m => m.score && (m.a===k || m.b===k));
  const rows = past.length ? past : MATCHES.filter(m => m.score).slice(0,4);
  return `<div class="team-modal"><h2>${T[k].full} · Futsal</h2><div class="sub"><span>${pos||'—'}º lugar</span></div>
    <div class="body">
      ${T[k].img ? `<img class="big" src="img/${T[k].img}-lg.png" alt="">` : `<span class="mono big" style="width:130px;height:130px;margin:6px auto 0;background:${T[k].color}">${short(k)}</span>`}
      <div class="tabs inset" id="tmTabs"><button class="tap on" data-tm="res">Últimas partidas</button><button class="tap" data-tm="pl">Jogadores</button></div>
      <div class="box" id="tmBody">${teamResults(k, rows)}</div>
      <button class="btn-outline tap" style="align-self:center" data-go-close="atletica-${k}">Ver perfil completo</button>
    </div></div>`;
};
const teamResults = (k, rows) => rows.map(m => { const opp = m.a===k?m.b:m.a, my = m.a===k?m.score[0]:m.score[1], th = m.a===k?m.score[1]:m.score[0];
  return `<div class="res-row"><span style="color:var(--branco);font-size:13.5px;font-weight:700;display:flex;align-items:center;gap:8px">${crest(opp,'crest',26)}${T[opp].n}</span><span>Integramix</span><b class="${my>th?'w':'l'}">${my}-${th}</b></div>`; }).join('');
SH.help = () => `<h2>Ajuda</h2><div class="body">
  <div class="help-actions">
    <button class="menu-row tap" data-tutorial><span class="ic">${ic('help')}</span>Tutorial${ic('chevR','chev')}</button>
    <button class="menu-row tap" data-sheet="faq"><span class="ic">${ic('doc')}</span>Dúvidas frequentes${ic('chevR','chev')}</button>
    <button class="menu-row tap" data-sheet="report"><span class="ic">${ic('mega')}</span>Reportar problema${ic('chevR','chev')}</button>
  </div>
  <div class="sec-label" style="text-align:center;margin-top:8px">Contato</div>
  <div class="contact"><button class="tap" data-toast="Abrindo conversa com o suporte…" aria-label="Chat">${ic('chat')}</button><button class="tap" data-toast="@interbet" aria-label="Instagram">${ic('cam')}</button><button class="tap" data-toast="suporte@interbet.app" aria-label="E-mail">${ic('mail')}</button></div>
</div>`;
SH.faq = () => `<h2>Dúvidas frequentes</h2><div class="body faq">
  <details open><summary>O que são betcoins?${ic('chevD')}</summary><p>Betcoins são a moeda do Interbet. 1 real = 1 betcoin. Você usa para apostar e pode trocar por prêmios no stand do evento.</p></details>
  <details><summary>Como faço uma aposta?${ic('chevD')}</summary><p>Toque em uma odd em qualquer partida, escolha o valor e confirme em “Apostar”. A aposta aparece em Minhas apostas.</p></details>
  <details><summary>Como saco meu saldo?${ic('chevD')}</summary><p>Confirme sua conta em Configurações e depois use “Sacar saldo” no menu central.</p></details>
  <details><summary>O que é a Corrida pelo campeão?${ic('chevD')}</summary><p>É uma aposta em qual atlética vai ganhar o evento. As odds mudam conforme os resultados.</p></details>
</div>`;
SH.report = () => `<h2>Reportar problema</h2><div class="body">
  <textarea class="input" id="rep" rows="5" style="height:auto;padding:14px 16px;resize:none" placeholder="Descreva o que aconteceu…"></textarea>
  <button class="btn tap" data-report>${ic('send')} Enviar</button></div>`;
SH.terms = () => `<h2>Termos de uso</h2><div class="body terms">
  <p>Bem-vindo ao Interbet. Ao usar o app você concorda com estas regras.</p>
  <h4>1. Elegibilidade</h4><p>O uso é permitido apenas para maiores de 18 anos.</p>
  <h4>2. Betcoins</h4><p>Betcoins são créditos do app, adquiridos na proporção de 1 BRL = 1 betcoin, e podem ser trocados por prêmios no stand do evento.</p>
  <h4>3. Apostas</h4><p>Apostas confirmadas não podem ser canceladas. As odds valem no momento da confirmação.</p>
  <h4>4. Saques</h4><p>Saques exigem a confirmação da conta com nome, CPF e chave Pix.</p>
  <h4>5. Jogo responsável</h4><p>Aposte apenas o que pode perder. Se precisar de uma pausa, fale com o suporte.</p>
  <button class="btn tap" data-close style="margin-top:16px">Entendi</button></div>`;
SH.promo = () => `<h2>Ganhe prêmios de graça</h2><div class="body">
  <img src="img/ad-photo.png" alt="" style="width:240px;margin:0 auto">
  <p class="lead" style="text-align:center">Acumule betcoins apostando nas partidas e troque por mochila, caneca e copo Interbet no nosso stand durante o Integramix.</p>
  <button class="btn tap" data-close>Bora apostar</button></div>`;
SH.invite = () => `<h2>Convidar amigo</h2><div class="body">
  <p class="lead" style="text-align:center">Convide amigos para o Interbet e ganhe <b class="orange">20 ${BC}</b> quando eles fizerem a primeira aposta.</p>
  <div class="box" style="display:flex;align-items:center;gap:12px"><span style="flex:1;font-size:18px;font-weight:800;letter-spacing:.12em">JOAO-IB20</span><button class="btn-outline sm tap" data-copy="JOAO-IB20">${ic('copy')}</button></div>
  <button class="btn tap" data-copy="Bora apostar no Integramix! Use meu código JOAO-IB20 no Interbet.">Copiar convite</button></div>`;

function openSheet(name, arg={}){
  clearInterval(tmr);
  $('#sheetBody').innerHTML = SH[name](arg);
  $('.sheet .close').innerHTML = ic('x');
  $('#sheet').classList.add('open'); $('#sheet').setAttribute('aria-hidden','false');
  if (name === 'bet' || name === 'champ') initBet();
}
function closeSheet(){ $('#sheet').classList.remove('open'); $('#sheet').setAttribute('aria-hidden','true'); clearInterval(tmr); }

function initBet(){
  const upd = () => {
    const st = parseFloat(($('#stake').value || '0').replace(',','.')) || 0; betCtx.stake = st;
    let odd = 0, txt = '';
    if (betCtx.champ){ odd = RACE.find(r => r[0]===betCtx.team)[1]; txt = `Campeão escolhido: <b>${T[betCtx.team].n}</b> (<i>${fmt(odd)}</i>)`; }
    else if (betCtx.pick !== null){ odd = betCtx.m.o[betCtx.pick]; txt = `Resultado escolhido: <b>${pickName(betCtx.m, betCtx.pick)}</b> (<i>${fmt(odd)}</i>)`; }
    else txt = '<span class="muted">Escolha um resultado acima</span>';
    $('#chosen').innerHTML = txt;
    $('#ret').innerHTML = `${money(st*odd)} ${BC}`;
    const ok = odd && st > 0 && st <= S.coins;
    $('#betGo').disabled = !ok;
    $('#betGo').textContent = st > S.coins ? 'Saldo insuficiente' : 'Apostar';
  };
  betCtx.upd = upd; upd();
  $('#stake').addEventListener('input', upd);
  if (!betCtx.champ){
    const tick = () => { const ms = kickoff(betCtx.m) - new Date(); const s = Math.max(0, Math.floor(ms/1000));
      const el = $('#timer'); if (el) el.textContent = [Math.floor(s/3600), Math.floor(s%3600/60), s%60].map(x => String(x).padStart(2,'0')).join(':'); };
    tick(); tmr = setInterval(tick, 1000);
  } else {
    $('#champSel').addEventListener('change', e => { betCtx.team = e.target.value; $('#champImg').src = `img/${T[betCtx.team].img}-lg.png`; upd(); });
  }
}
function placeBet(){
  const st = betCtx.stake; if (!(st > 0) || st > S.coins) return;
  if (betCtx.champ){
    const odd = RACE.find(r => r[0]===betCtx.team)[1];
    S.history.push({t:'Aposta · Campeão', d:`${T[betCtx.team].n} ${fmt(odd)}`, v:-st, kind:'bet'});
    toast(`Aposta feita: ${T[betCtx.team].n} campeão ${fmt(odd)}`);
  } else {
    const m = betCtx.m, odd = m.o[betCtx.pick];
    S.bets.push({id:'b'+Date.now(), mid:m.id, pick:betCtx.pick, stake:st, odd});
    S.history.push({t:`Aposta · ${T[m.a].n} x ${T[m.b].n}`, d:`${pickName(m,betCtx.pick)} ${fmt(odd)}`, v:-st, kind:'bet'});
    toast(`Aposta feita: ${pickName(m,betCtx.pick)} ${fmt(odd)}`);
  }
  setCoins(S.coins - st); closeSheet();
  if (route().name === 'minhas-apostas') render();
}

/* ---------------- QR de demonstração ---------------- */
function drawQR(seed){
  const c = $('#qr'); if (!c) return; const x = c.getContext('2d'), n = 29;
  x.fillStyle = '#fff'; x.fillRect(0,0,n,n); x.fillStyle = '#111';
  let r = seed; const rnd = () => (r = (r*9301+49297) % 233280) / 233280;
  for (let i=0;i<n;i++) for (let j=0;j<n;j++) if (rnd() > .52) x.fillRect(i,j,1,1);
  [[0,0],[n-7,0],[0,n-7]].forEach(([a,b]) => { x.fillStyle='#fff'; x.fillRect(a-1<0?0:a-1,b-1<0?0:b-1,9,9); x.fillStyle='#111'; x.fillRect(a,b,7,7); x.fillStyle='#fff'; x.fillRect(a+1,b+1,5,5); x.fillStyle='#111'; x.fillRect(a+2,b+2,3,3); });
}

/* ---------------- roteamento ---------------- */
const NAV_VIEWS = ['home','evento','rankings','classificacao','minhas-apostas','notificacoes','configuracoes','adicionar-saldo','sacar-saldo','confirmar-conta','atletica'];
function route(){
  let h = (location.hash || '').slice(1);
  let name = h, arg;
  if (h.startsWith('atletica-')){ name = 'atletica'; arg = h.slice(9); if (!T[arg]) arg = 'mack'; }
  if (h.startsWith('classificacao-')) name = 'classificacao';
  if (h === 'minhas-apostas-finalizadas') name = 'minhas-apostas';
  if (!S.logged) name = 'login';
  else if (!S.onboarded && name !== 'bem-vindo') name = 'bem-vindo';
  else if (!V[name] || name === 'login') name = 'home';
  return {name, arg};
}
function render(){
  const {name, arg} = route();
  const withNav = NAV_VIEWS.includes(name);
  $('#root').innerHTML = V[name](arg);
  $('#app').classList.toggle('has-nav', withNav);
  $('#nav').hidden = !withNav;
  $('#tabFeed').classList.toggle('on', name === 'home'); $('#tabEvt').classList.toggle('on', name === 'evento');
  setQuick(false);
  if (name === 'adicionar-saldo' && addStep === 2) drawQR(addVal*7+13);
  if (name !== 'home') window.scrollTo(0,0);
}
function applyHash(){
  const h = location.hash.slice(1);
  if (h.startsWith('classificacao-')){ clsComp = h.endsWith('-f') ? 'FF' : 'FM'; clsTab = 'tabela'; clsOpen = null; }
  if (h === 'minhas-apostas-finalizadas') betsTab = 'finalizadas';
  if (h === 'minhas-apostas') betsTab = 'abertas';
  if (h === 'adicionar-saldo'){ addStep = 1; addTab = 'add'; }
}
const stack = [location.hash];
addEventListener('hashchange', () => {
  if (stack.length > 1 && stack[stack.length-2] === location.hash) stack.pop(); else stack.push(location.hash);
  applyHash(); closeSheet(); render();
});
applyHash();

/* ---------------- menu central ---------------- */
const QUICK = [['sacar-saldo','withdraw','Sacar saldo'],['invite','users','Convidar amigo'],['configuracoes','gear','Configurações'],['adicionar-saldo','scan','Adicionar saldo'],['minhas-apostas','updown','Minhas apostas'],['rankings','bars','Rankings']];
$('#quick').innerHTML = QUICK.map(([k,i,l]) => `<button class="tap" data-q="${k}">${ic(i)}${l}</button>`).join('');
$('#tabFeed').innerHTML = ic('home') + 'Feed'; $('#tabEvt').innerHTML = ic('flag') + 'Evento';
function setQuick(o){ $('#quick').classList.toggle('open', o); $('#scrim').classList.toggle('open', o); $('#fab').classList.toggle('open', o); $('#fab').setAttribute('aria-expanded', o); }
$('#fab').onclick = () => setQuick(!$('#quick').classList.contains('open'));
$('#scrim').onclick = () => setQuick(false);

/* ---------------- eventos ---------------- */
document.addEventListener('click', e => {
  const btn = e.target.closest('button');
  let el = e.target.closest('[data-sheet], [data-ob-terms], [data-close], u, a');
  const crestEl = e.target.closest('[data-team]');
  if (btn && (!el || btn.contains(el) === false)) el = btn;
  if (!el && crestEl) el = crestEl;
  if (!el) return;
  const d = el.dataset;

  if (d.close !== undefined || el.matches('[data-close]')) { closeSheet(); return; }
  if (d.q){ setQuick(false); if (d.q === 'invite') openSheet('invite'); else go(d.q); return; }
  if (d.go){ go(d.go); return; }
  if (d.goClose){ closeSheet(); go(d.goClose); return; }
  if (d.back){ if (stack.length > 1) history.back(); else go(d.back); return; }
  if (d.sheet){ e.stopPropagation(); openSheet(d.sheet); return; }
  if (d.toast){ toast(d.toast); return; }
  if (d.copy){ navigator.clipboard?.writeText(d.copy).then(() => toast('Copiado!')).catch(() => toast(d.copy)); return; }

  /* login / onboarding */
  if (d.login !== undefined){ S.logged = true; save(); go(S.onboarded ? 'home' : 'bem-vindo'); return; }
  if (d.obSearch !== undefined){ ob.q = $('#obQ').value.trim(); ob.searched = true; render(); setTimeout(() => $('#obQ')?.focus(), 0); return; }
  if (d.obTeam){ S.team = d.obTeam; save(); ob.searched = false; render(); return; }
  if (d.obReset !== undefined){ S.team = null; S.terms = false; ob.q=''; save(); render(); return; }
  if (el.matches('[data-ob-terms]') && !e.target.closest('u')){ S.terms = !S.terms; save(); render(); return; }
  if (d.obDone !== undefined){ S.onboarded = true; save(); go('home'); toast('Tudo pronto! Bons palpites 🍀'); return; }
  if (d.tutorial !== undefined){ closeSheet(); S.onboarded = false; save(); go('bem-vindo'); return; }
  if (d.logout !== undefined){ S.logged = false; save(); go('login'); return; }

  /* apostas */
  if (d.bet){ openSheet('bet', {mid:d.bet, pick: d.pick !== undefined ? +d.pick : null}); return; }
  if (d.pickIn){ betCtx.pick = +d.pick; $$('#betOdds .odd').forEach(b => b.classList.toggle('sel', +b.dataset.pick === betCtx.pick)); betCtx.upd(); return; }
  if (d.champ){ openSheet('champ', {team:d.champ}); return; }
  if (d.st){ $('#stake').value = d.st; betCtx.upd(); return; }
  if (el.id === 'betGo'){ placeBet(); return; }
  if (d.team && !el.closest('.sheet')){ openSheet('team', {team:d.team}); return; }
  if (d.tm){ $$('#tmTabs button').forEach(b => b.classList.toggle('on', b===el)); const k = $('[data-go-close]').dataset.goClose.slice(9);
    $('#tmBody').innerHTML = d.tm === 'pl' ? PLAYERS_M.map(p => `<div class="res-row"><span style="color:var(--branco);font-size:13.5px;font-weight:700;display:flex;align-items:center;gap:8px"><img src="img/avatar.png" style="width:26px;height:26px;border-radius:50%" alt="">${p[0]}</span><span></span><b style="background:rgba(255,255,255,.07)">${p[1]}</b></div>`).join('')
      : teamResults(k, MATCHES.filter(m => m.score && (m.a===k||m.b===k)).length ? MATCHES.filter(m => m.score && (m.a===k||m.b===k)) : MATCHES.filter(m => m.score).slice(0,4)); return; }

  /* home */
  if (d.mod){ homeMod = +d.mod; render(); toast(MODS[homeMod].k); return; }
  if (d.filter !== undefined){ filterOpen = !filterOpen; render(); return; }
  if (el.closest('[data-pills]')){ el.classList.toggle('on'); return; }

  /* abas */
  if (d.tab){ const n = route().name;
    if (n === 'rankings') rankTab = d.tab; if (n === 'classificacao') { clsTab = d.tab; clsOpen = null; }
    if (n === 'minhas-apostas') betsTab = d.tab; if (n === 'adicionar-saldo') addTab = d.tab; if (n === 'sacar-saldo') sacTab = d.tab;
    render(); return; }
  if (d.clsChange !== undefined){ clsChooser = !clsChooser; render(); return; }
  if (d.clsComp){ clsComp = d.clsComp; clsChooser = false; clsOpen = null; render(); return; }
  if (d.clsRow){ clsOpen = clsOpen === +d.clsRow ? null : +d.clsRow; render(); return; }
  if (d.acc !== undefined){ el.parentElement.classList.toggle('open'); return; }

  /* notificações */
  if (d.notif){ const n = S.notifs.find(x => x.id === d.notif); n.read = true; save();
    if (n.go === 'notif-recado') { toast('Recado: concentração amanhã às 13h no Ginásio 1!'); render(); } else go(n.go); return; }
  if (d.notifAll !== undefined){ S.notifs.forEach(n => n.read = true); save(); render(); return; }

  /* saldo */
  if (d.amt){ addVal = +d.amt; render(); return; }
  if (d.addNext !== undefined){ const v = parseFloat(($('#addInput').value||'').replace(',','.')); if (!(v > 0)) { toast('Informe um valor válido'); return; } addVal = v; addStep = 2; addPaid = false; render(); return; }
  if (d.addBack !== undefined){ addStep = 1; render(); return; }
  if (d.addPay !== undefined){ addPaid = true; S.history.push({t:'Depósito via Pix', d:`R$ ${money(addVal)} · simulado`, v:addVal, kind:'in'}); setCoins(S.coins + addVal); render(); toast(`+${money(addVal)} betcoins adicionados`); return; }
  if (d.sac !== undefined){ const v = parseFloat(($('#sacInput').value||'').replace(',','.'));
    if (!(v > 0)) { toast('Informe um valor válido'); return; } if (v > S.coins) { toast('Saldo insuficiente'); return; }
    S.history.push({t:'Saque solicitado', d:'Pix · simulado', v:-v, kind:'out'}); setCoins(S.coins - v); sacVal=''; toast('Saque solicitado!'); render(); return; }
  if (d.pix){ pixType = d.pix; $$('[data-pix]').forEach(b => b.classList.toggle('on', b===el)); $('#fPix').placeholder = pixType==='email'?'voce@email.com':pixType==='tel'?'(11) 90000-0000':'000.000.000-00'; return; }
  if (d.report !== undefined){ if (!$('#rep').value.trim()) { toast('Descreva o problema'); return; } closeSheet(); toast('Obrigado! Recebemos seu relato.'); return; }
});

document.addEventListener('input', e => {
  if (e.target.id === 'addInput'){ const v = parseFloat(e.target.value.replace(',','.')); addVal = v>0 ? v : 0; $$('[data-amt]').forEach(b => b.classList.toggle('on', +b.dataset.amt === addVal)); $('[data-add-next]').disabled = !(addVal>0); }
  if (e.target.id === 'sacInput') sacVal = e.target.value;
  if (e.target.id === 'fCpf'){ let v = e.target.value.replace(/\D/g,'').slice(0,11); v = v.replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2'); e.target.value = v; }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape'){ closeSheet(); setQuick(false); }
  if (e.key === 'Enter' && e.target.id === 'obQ'){ e.preventDefault(); $('[data-ob-search]')?.click(); }
  if ((e.key === ' ' || e.key === 'Enter') && e.target.matches('[data-ob-terms]')){ e.preventDefault(); e.target.click(); }
});
document.addEventListener('submit', e => {
  if (e.target.id !== 'confForm') return; e.preventDefault();
  const nome = $('#fNome'), cpf = $('#fCpf'), pix = $('#fPix'); let ok = true;
  [nome, cpf, pix].forEach(i => i.classList.remove('err'));
  if (nome.value.trim().split(/\s+/).length < 2){ nome.classList.add('err'); ok = false; }
  if (cpf.value.replace(/\D/g,'').length !== 11){ cpf.classList.add('err'); ok = false; }
  if (pix.value.trim().length < 5){ pix.classList.add('err'); ok = false; }
  if (!ok){ toast('Confira os campos destacados'); return; }
  S.confirmed = true; S.firstName = nome.value.trim(); save();
  toast('Conta confirmada!'); go('sacar-saldo');
});
addEventListener('scroll', () => $('#appbar')?.classList.toggle('scrolled', scrollY > 8), {passive:true});

render();
