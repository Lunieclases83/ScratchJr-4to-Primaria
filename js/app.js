
const skills=['Interfaz','Personajes','Escenarios','Eventos','Secuencias','Movimiento','Dirección','Posición','Rutas','Patrones','Repetición','Predicción','Prueba','Depuración','Planificación','Creación autónoma','Presentación'];
let done=JSON.parse(localStorage.getItem('scratchjrP1Done')||'[]');
function toggleMission(n){done.includes(n)?done=done.filter(x=>x!==n):done.push(n);localStorage.setItem('scratchjrP1Done',JSON.stringify(done));render();}
function render(){for(let i=1;i<=8;i++){let b=document.getElementById('btn'+i);if(b)b.textContent=done.includes(i)?'✓ Misión completada — desmarcar':'Marcar misión como completada'}
document.getElementById('bar').style.width=(done.length/8*100)+'%';document.getElementById('progressText').textContent=`${done.length} de 8 misiones completadas`;
let demonstrated=Math.min(skills.length,Math.floor(done.length/8*skills.length));document.getElementById('passport').innerHTML=skills.map((s,i)=>`<div class="skill"><strong>${i<demonstrated?'★':i<demonstrated+3?'◐':'○'} ${s}</strong><span>${i<demonstrated?'Demostrado':i<demonstrated+3?'En proceso':'Por desarrollar'}</span></div>`).join('');}
function tracking(){let saved=JSON.parse(localStorage.getItem('scratchjrTracking')||'{}');document.getElementById('tracking').innerHTML=Array.from({length:8},(_,i)=>{let n=i+1,v=saved[n]||{};return `<div class="trackrow"><b>Misión ${n}</b><select id="s${n}"><option>Pendiente</option><option ${v.status==='En proceso'?'selected':''}>En proceso</option><option ${v.status==='Completado'?'selected':''}>Completado</option><option ${v.status==='Reprogramado'?'selected':''}>Reprogramado</option></select><input id="o${n}" value="${v.obs||''}" placeholder="Próximo paso / observación"></div>`}).join('')}
function saveTracking(){let x={};for(let n=1;n<=8;n++)x[n]={status:document.getElementById('s'+n).value,obs:document.getElementById('o'+n).value};localStorage.setItem('scratchjrTracking',JSON.stringify(x));alert('Seguimiento guardado localmente en este navegador.')}
function resetProgress(){if(confirm('¿Reiniciar el progreso local del prototipo?')){localStorage.removeItem('scratchjrP1Done');done=[];render();}}
tracking();render();
