// Scroll-driven side decorations for the home page.
// Left gutter: fintech (stock chart, candlesticks, coin) + a CU pennant.
// Right gutter: a ski run with a skier who carves down it as you scroll.
// Only shown when the window is wide enough to have empty side gutters.
(function(){
  const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
  const NS="http://www.w3.org/2000/svg";

  // ---- left: fintech ----
  const pts=[58,55,57,50,52,45,47,40,42,35,31,34,26,22,15].map((y,i)=>`${i*10},${y}`).join(" ");
  const candles=[[18,1],[26,1],[14,0],[30,1],[22,0],[34,1]].map(([h,up],i)=>{const x=10+i*18,y=60-h-(i*4);
    return `<g class="cdl ${up?"up":"dn"}" style="--i:${i}"><line x1="${x+5}" y1="${y-6}" x2="${x+5}" y2="${y+h+6}"/><rect x="${x}" y="${y}" width="10" height="${h}" rx="1.5"/></g>`}).join("");
  const left=`
  <div class="d d-chart"><div class="tkr"><span>$CAMP</span><b id="dTick">+0.0%</b></div>
    <svg viewBox="0 0 140 70"><g class="grid"><line x1="0" y1="20" x2="140" y2="20"/><line x1="0" y1="40" x2="140" y2="40"/><line x1="0" y1="60" x2="140" y2="60"/></g>
    <polyline id="dArea" points="0,70 ${pts} 140,70"/><polyline id="dLine" points="${pts}"/><circle id="dDot" r="3.5" cx="0" cy="58"/></svg></div>
  <div class="d d-candles"><svg viewBox="0 0 125 80">${candles}</svg></div>
  <div class="d d-coin"><div class="coin" id="dCoin"><span>$</span></div></div>
  <div class="d d-pennant"><svg viewBox="0 0 160 84" id="dFlag">
    <line class="pole" x1="6" y1="2" x2="6" y2="84"/>
    <g class="flag"><path class="pf" d="M8 8 L156 38 L8 68 Z"/><rect class="ph" x="8" y="8" width="9" height="60"/>
    <text class="pcu" x="26" y="46">CU</text><text class="psk" x="66" y="42">SKO BUFFS</text></g></svg></div>`;

  // ---- right: ski run ----
  const P="M100 190 C 40 260, 170 330, 100 420 S 30 580, 110 650 S 175 820, 95 975";
  const right=`<svg class="slope" viewBox="0 0 200 1000" preserveAspectRatio="xMidYMin meet">
    <polygon class="mt-b" points="0,175 30,110 55,140 92,48 128,120 152,88 200,160 200,200 0,200"/>
    <polygon class="cap" points="92,48 80,74 89,69 96,78 103,68 111,74"/>
    <polygon class="cap" points="152,88 144,104 151,101 157,108 163,100"/>
    <polygon class="cap" points="30,110 23,124 30,121 36,127"/>
    <polygon class="mt-f" points="0,200 25,160 55,185 85,150 120,180 150,155 200,190 200,215 0,215"/>
    <path class="piste" d="${P}"/><path class="track" id="dTrack" d="${P}"/>
    <g id="dTrees"></g><g id="dSigns"></g>
    <g id="dSkier"><g class="skier">
      <line class="ski" x1="-15" y1="10" x2="15" y2="10"/>
      <path class="leg" d="M-5 9 L-1 -1 M4 9 L2 -1"/>
      <line class="torso" x1="0" y1="-1" x2="5" y2="-12"/>
      <line class="pole" x1="4" y1="-8" x2="14" y2="9"/>
      <circle class="face" cx="7" cy="-16" r="3.6"/><path class="hat" d="M3.4 -16.5 A3.6 3.6 0 0 1 10.6 -16.5 Z"/>
    </g></g></svg>
    <div class="flakes">${Array.from({length:14},(_,i)=>`<i style="left:${(i*37)%100}%;animation-duration:${9+(i*7)%8}s;animation-delay:-${(i*13)%17}s;font-size:${8+(i*5)%8}px">✻</i>`).join("")}</div>`;

  const root=document.createElement("div");root.className="deco";root.setAttribute("aria-hidden","true");
  root.innerHTML=`<div class="rail l">${left}</div><div class="rail r">${right}</div>`;
  document.body.appendChild(root);

  // place trees and trail signs along the run
  const track=root.querySelector("#dTrack"),len=track.getTotalLength(),line=root.querySelector("#dLine"),llen=line.getTotalLength();
  track.style.strokeDasharray=len;line.style.strokeDasharray=llen;
  const at=(f,off)=>{const a=track.getPointAtLength(len*f),b=track.getPointAtLength(Math.min(len,len*f+1));const dx=b.x-a.x,dy=b.y-a.y,L=Math.hypot(dx,dy)||1;return{x:a.x-dy/L*off,y:a.y+dx/L*off}};
  let trees="";[.04,.1,.17,.24,.31,.38,.46,.53,.6,.67,.74,.81,.88,.95].forEach((f,i)=>{[34,-34].forEach((o,j)=>{if((i+j)%3==2)return;const p=at(f,o+(i%2?6:-4));const s=.8+((i*7+j*3)%5)/10;
    trees+=`<g transform="translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) scale(${s})"><polygon points="0,-16 -8,2 8,2"/><polygon points="0,-24 -6,-8 6,-8"/><rect x="-1.5" y="2" width="3" height="4"/></g>`})});
  root.querySelector("#dTrees").innerHTML=trees;
  const sign=(f,o,shape)=>{const p=at(f,o);return `<g class="sign" transform="translate(${p.x.toFixed(1)} ${p.y.toFixed(1)})"><line x1="0" y1="0" x2="0" y2="14"/>${shape}</g>`};
  root.querySelector("#dSigns").innerHTML=
    sign(.13,-22,`<circle cy="-4" r="7" class="s-green"/>`)+
    sign(.47,22,`<rect x="-6.5" y="-10.5" width="13" height="13" class="s-blue"/>`)+
    sign(.8,-22,`<rect x="-6" y="-10" width="12" height="12" transform="rotate(45 0 -4)" class="s-black"/>`);

  const skier=root.querySelector("#dSkier"),tick=root.querySelector("#dTick"),dot=root.querySelector("#dDot"),coin=root.querySelector("#dCoin"),
        flag=root.querySelector("#dFlag .flag"),cdl=[...root.querySelectorAll(".cdl")],blocks=[...root.querySelectorAll(".rail.l .d")];
  function frame(){
    const max=document.documentElement.scrollHeight-innerHeight,y=scrollY,p=reduce?.35:(max>0?Math.min(1,Math.max(0,y/max)):0);
    // skier position + direction along the run
    const a=track.getPointAtLength(len*p),b=track.getPointAtLength(Math.min(len,len*p+2)),dx=b.x-a.x,dy=b.y-a.y;
    const dir=dx>=0?1:-1,ang=Math.atan2(dy,Math.abs(dx))*180/Math.PI*.6;
    skier.setAttribute("transform",`translate(${a.x.toFixed(1)} ${(a.y-2).toFixed(1)}) scale(${dir} 1) rotate(${ang.toFixed(1)})`);
    track.style.strokeDashoffset=len*(1-p);
    // stock chart draws in over the first 70% of the page
    const q=.15+.85*Math.min(1,p/.7),pt=line.getPointAtLength(llen*q);
    line.style.strokeDashoffset=llen*(1-q);dot.setAttribute("cx",pt.x.toFixed(1));dot.setAttribute("cy",pt.y.toFixed(1));
    tick.textContent="+"+(Math.min(1,p/.7)*24.8+1.2).toFixed(1)+"%";
    if(reduce)return;
    cdl.forEach((g,i)=>g.style.transform=`translateY(${(Math.sin(y/140+i)*5).toFixed(1)}px) scaleY(${(1+.22*Math.sin(y/90+i*1.3)).toFixed(3)})`);
    coin.style.transform=`translateY(${(Math.sin(y/160)*10).toFixed(1)}px) scaleX(${Math.cos(y/70).toFixed(3)})`;
    flag.style.transform=`skewY(${(Math.sin(y/90)*5).toFixed(2)}deg) scaleX(${(1-.06*Math.abs(Math.sin(y/120))).toFixed(3)})`;
    blocks.forEach((el,i)=>el.style.translate=`${(Math.sin(y/260+i*1.7)*12).toFixed(1)}px ${(-p*(60+i*45)).toFixed(1)}px`);
  }
  let ticking=false;
  addEventListener("scroll",()=>{if(!ticking){ticking=true;requestAnimationFrame(()=>{frame();ticking=false})}},{passive:true});
  addEventListener("resize",frame);
  frame();
})();
