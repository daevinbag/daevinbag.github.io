(function() {
  const boot = document.getElementById('boot');
  const logEl = document.getElementById('boot-log');
  const fillEl = document.getElementById('boot-bar-fill');
  const pctEl = document.getElementById('boot-percent');

 
  // Edit the values on the right to personalize the boot log
  const log = [
    { at: 0,  text: '> initializing portfolio.exe' },
    { at: 15, text: '  user ..................... Daevin Bagcal' },
    { at: 30, text: '  role ..................... Programmer' },
    { at: 45, text: '  location ................. Honolulu, HI' },
    { at: 58, text: '  stack .................... Java / Python / Rust' },
    { at: 72, text: '  loading stuff ............ OK' },
    { at: 86, text: '  mounting /projects ....... OK' },
    { at: 96, text: '  warming up cursor ........ OK' },
    { at: 97, text: '> systems online.' },
  ];
 
  let printed = 0;
  let progress = 0;
  let finished = false;
  const DURATION = 1600; // ms, total animation time
  const start = performance.now();
 
  function tick(now) {
    if (finished) return;
    const elapsed = now - start;
    const t = Math.min(elapsed / DURATION, 1);
    progress = Math.round((1 - Math.pow(1 - t, 3)) * 100);
 
    fillEl.style.width = progress + '%';
    pctEl.textContent = progress + '%';
 
    while (printed < log.length && progress >= log[printed].at) {
      const line = document.createElement('div');
      line.textContent = log[printed].text;
      logEl.appendChild(line);
      printed++;
    }
 
    if (t < 1) {
      requestAnimationFrame(tick);
    } else {
      setTimeout(finish, 250); 
    }
  }
  
  function finish() {
    if (finished) return;
    finished = true;
    boot.classList.add('hidden');
  }
 
  function skip() { finish(); }
  boot.addEventListener('click', skip);
  window.addEventListener('keydown', skip, { once: true });
 
  requestAnimationFrame(tick);
  // dont let load last for more than this time
  setTimeout(finish, 1600);
})();