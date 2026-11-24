(()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];

/* Nombres letra por letra */
function split(el){let i=0;const walk=n=>{[...n.childNodes].forEach(c=>{if(c.nodeType===3){const f=document.createDocumentFragment();[...c.textContent].forEach(ch=>{if(/\s/.test(ch)){f.append(ch);return}const s=document.createElement('span');s.className='ch';s.style.setProperty('--i',i++);s.textContent=ch;f.append(s)});c.replaceWith(f)}else if(c.nodeType===1&&c.tagName!=='BR')walk(c)})};walk(el);el.setAttribute('aria-label',el.textContent.replace(/\s+/g,' ').trim())}
$$('header h1,#cover h1').forEach(split);

/* Entrada escalonada: retraso por hijo */
$$('.reveal').forEach(sec=>[...sec.children].forEach((c,i)=>c.style.setProperty('--d',(i*0.09).toFixed(2)+'s')));

/* Íconos que se dibujan */
$$('.icon path,.icon circle,.icon rect').forEach(p=>p.setAttribute('pathLength','1'));

/* Calendario diciembre 2026 (empieza martes) */
const cal=$('#cal-days');
if(cal){for(let d=0;d<=31;d++){const s=document.createElement('span');s.style.setProperty('--i',d);if(d>0){s.textContent=d;if((d+1)%7===0)s.classList.add('sun');if(d===27)s.classList.add('chosen')}cal.append(s)}}

/* Destellos en portada y encabezado */
['#cover','header'].forEach(sel=>{const host=$(sel);if(!host)return;for(let k=0;k<14;k++){const p=document.createElement('i');p.className='sparkle';p.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;--t:${2.5+Math.random()*3}s;--d:${-Math.random()*5}s`;host.append(p)}});

/* Cuenta regresiva con salto */
['days','hours','minutes','seconds'].forEach(id=>{const el=document.getElementById(id);if(!el)return;new MutationObserver(()=>{el.classList.remove('tick');void el.offsetWidth;el.classList.add('tick')}).observe(el,{childList:true})});
})();
