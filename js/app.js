let cu=0,cg=0,st={};
const $=s=>document.querySelector(s);
const sh=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
function parse(s){const m=s.match(/^(.*)\{(.*)\}(.*)$/);const o=m[2].split("|");
return{txt:m[3].trim()===""?m[1].trim():m[1]+"___"+m[3],ans:o[0],opts:o}}
function render(){
$("#tabs").innerHTML=D.map((d,i)=>`<button class="${i===cu?"on":""}" data-i="${i}">Ünite ${d.u}</button>`).join("");
$("#tabs").querySelectorAll("button").forEach(b=>b.onclick=()=>{cu=+b.dataset.i;cg=0;render()});
const u=D[cu],g=u.g[cg];
$("#sel").innerHTML=u.g.map((x,i)=>`<button class="${i===cg?"on":""}" data-i="${i}">${x[0]}</button>`).join("");
$("#sel").querySelectorAll("button").forEach(b=>b.onclick=()=>{cg=+b.dataset.i;render()});
let h=`<h2>Ünite ${u.u} – ${u.t}</h2><div class="note"><b>Kural:</b> ${g[1]}</div>`;
let ok=0,n=0;
g[2].forEach((raw,k)=>{const id=cu+"-"+cg+"-"+k,p=parse(raw);
const s=st[id]||(st[id]={o:sh(p.opts),pick:null,done:false});
if(s.done){n++;if(s.ok)ok++}
h+=`<div class="q" data-k="${k}"><p>${k+1}. ${p.txt}</p>`+s.o.map((o,i)=>{let c="o";if(s.done){if(o===p.ans)c+=" good";else if(i===s.pick)c+=" bad"}else if(i===s.pick)c+=" sel";
return `<button class="${c}" data-i="${i}" ${s.done?"disabled":""}>${o}</button>`}).join("")+
`<button class="v" ${s.pick===null||s.done?"disabled":""}>Doğrula</button>`+
(s.done?`<div class="fb"><b class="${s.ok?"g":"b"}">${s.ok?"Doğru!":"Yanlış."}</b> Doğru cevap: <b>${p.ans}</b></div>`:"")+`</div>`});
$("#out").innerHTML=h;
$("#score").textContent=`Puan: ${ok} / ${n} doğrulandı (toplam ${g[2].length} soru)`;
$("#out").querySelectorAll(".q").forEach(el=>{const k=+el.dataset.k,id=cu+"-"+cg+"-"+k,s=st[id],p=parse(g[2][k]);
const re=()=>{const y=window.scrollY;render();window.scrollTo(0,y)};
el.querySelectorAll(".o").forEach(b=>b.onclick=()=>{s.pick=+b.dataset.i;re()});
el.querySelector(".v").onclick=()=>{s.done=true;s.ok=s.o[s.pick]===p.ans;re()}})}
$("#reset").onclick=()=>{Object.keys(st).forEach(k=>{if(k.startsWith(cu+"-"+cg+"-"))delete st[k]});render()};
render();
