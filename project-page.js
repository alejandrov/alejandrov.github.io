"use strict";
(() => {
 const copy = document.querySelector('#copy-project');
 copy.hidden = false;
 copy.addEventListener('click', async () => {
  const url = document.querySelector('link[rel="canonical"]').href;
  try { await navigator.clipboard.writeText(url); document.querySelector('#share-status').textContent = 'Enlace copiado.'; }
  catch { document.querySelector('#share-status').textContent = 'Enlace para compartir: ' + url; }
 });
 const controls = document.querySelector('.walkthrough-controls');
 if (!controls) return;
 controls.hidden = false;
 const play = document.querySelector('#play-walkthrough');
 const pause = document.querySelector('#pause-walkthrough');
 const stop = document.querySelector('#stop-walkthrough');
 const scenes = [...document.querySelectorAll('.demo-scene')];
 const steps = [...document.querySelectorAll('[data-demo-step]')];
 const titles = [...document.querySelectorAll('.walkthrough-steps h3')];
 const status = document.querySelector('#walkthrough-status');
 const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
 document.querySelector('.demo-navigation').hidden = false;
 let timer = null, index = 0, remaining = 6000, started = 0;
 function show(i) {
  index = i;
  scenes.forEach((scene,n) => { scene.hidden = n !== i; });
  steps.forEach((step,n) => step.setAttribute('aria-pressed', String(n === i)));
  status.textContent = `Paso ${i+1} de 3: ${titles[i].textContent}. Simulación con datos ficticios.`;
 }
 function halt() { clearTimeout(timer); timer = null; play.disabled = false; pause.hidden = true; }
 function schedule() {
  play.disabled = true; pause.hidden = false; stop.hidden = false; started = Date.now();
  timer = setTimeout(() => {
   timer = null; remaining = 6000;
   if (index === scenes.length-1) { halt(); play.textContent = 'Repetir recorrido'; status.textContent = 'Recorrido terminado. No se realizó ninguna operación real.'; }
   else { show(index+1); schedule(); }
  }, remaining);
 }
 play.addEventListener('click', () => {
  if (timer) return;
  if (play.textContent !== 'Continuar') { remaining = 6000; show(0); }
  play.textContent = 'Reproduciendo…'; schedule();
 });
 function pausePlayback() {
  if (!timer) return;
  remaining = Math.max(1,remaining-(Date.now()-started)); halt(); play.textContent = 'Continuar';
  status.textContent = `En pausa, paso ${index+1} de 3. Puedes continuar o elegir otro paso.`;
 }
 pause.addEventListener('click', pausePlayback);
 stop.addEventListener('click', () => { halt(); remaining = 6000; show(0); play.textContent = 'Iniciar recorrido'; stop.hidden = true; });
 steps.forEach((step,i) => step.addEventListener('click', () => { halt(); remaining=6000;show(i);play.textContent='Continuar';stop.hidden=false; }));
 document.addEventListener('visibilitychange', () => { if (document.hidden) pausePlayback(); });
 window.addEventListener('pagehide', halt);
 reduced.addEventListener('change', () => { if (reduced.matches) pausePlayback(); });
 show(0);
 if (reduced.matches) status.textContent = 'Movimiento reducido: usa los tres pasos para explorar a tu ritmo o inicia el recorrido.';
})();
