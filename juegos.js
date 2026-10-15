/* ======================================================================
   Mini-juegos SST — MENSHEN
   Expone window.SSTJuegos.init(onWin) que arranca los 3 juegos.
   Llama onWin(idPantalla) cuando se gana cada juego.
   ====================================================================== */
(function () {
  "use strict";

  var API = { init: init };
  window.SSTJuegos = API;

  var onWin = function () {};
  function init(cb) { onWin = cb || function () {}; iniciarCorredor(); iniciarAtrapa(); }

  function beep(freqs, dur, type) {
    try {
      var AC = window.__ssAC || (window.__ssAC = new (window.AudioContext || window.webkitAudioContext)());
      if (AC.state === 'suspended') AC.resume();
      var t = AC.currentTime;
      freqs.forEach(function (f, i) {
        var o = AC.createOscillator(), g = AC.createGain();
        o.type = type || 'sine'; o.frequency.value = f;
        var s = t + i * dur;
        g.gain.setValueAtTime(0.0001, s);
        g.gain.exponentialRampToValueAtTime(0.2, s + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0001, s + dur);
        o.connect(g); g.connect(AC.destination); o.start(s); o.stop(s + dur);
      });
    } catch (e) {}
  }
  var sOk = function () { beep([523, 659, 784, 1046], 0.1, 'triangle'); };
  var sHit = function () { beep([200, 150], 0.14, 'square'); };
  var sPick = function () { beep([700], 0.07, 'sine'); };

  /* ============ JUEGO 1: KAREN ESQUIVA (corredor) ============ */
  function iniciarCorredor() {
    var cv = document.getElementById('juegoCorredor');
    if (!cv) return;
    var ctx = cv.getContext('2d');
    var W = cv.width, H = cv.height, suelo = H - 24;
    var karen, obs, vel, score, meta = 8, corriendo = false, raf, saltando;
    var hud = document.getElementById('corredorHud');
    var btn = document.getElementById('corredorBtn');
    var NOMBRES = { '🔥': 'Fuego / superficie caliente', '🛢️': 'Derrame de aceite', '📦': 'Obstáculo en el piso' };

    function reset() {
      karen = { x: 46, y: suelo, w: 34, h: 46, vy: 0 };
      obs = []; vel = 3; score = 0; saltando = false;   // más lento y fácil
    }
    function salto() { if (!saltando && corriendo) { karen.vy = -13.5; saltando = true; } }  // salto más alto

    function loop() {
      ctx.clearRect(0, 0, W, H);
      // suelo
      ctx.fillStyle = '#223540'; ctx.fillRect(0, suelo + 6, W, H);
      ctx.fillStyle = '#ff7b08'; for (var i = 0; i < W; i += 36) ctx.fillRect(i, suelo + 6, 18, 4);
      // física Karen (gravedad suave = salto más flotante y fácil)
      karen.vy += 0.5; karen.y += karen.vy;
      if (karen.y >= suelo) { karen.y = suelo; karen.vy = 0; saltando = false; }
      // Karen (muñeco simple con casco)
      ctx.fillStyle = '#f6a81c'; ctx.fillRect(karen.x, karen.y - karen.h, karen.w, karen.h); // chaleco
      ctx.fillStyle = '#f6c69b'; ctx.beginPath(); ctx.arc(karen.x + 17, karen.y - karen.h - 8, 12, 0, 7); ctx.fill(); // cabeza
      ctx.fillStyle = '#ffcf1f'; ctx.fillRect(karen.x + 3, karen.y - karen.h - 20, 28, 9); // casco
      // obstáculos (peligros) — separados y a distinta altura (no lineales)
      if (obs.length === 0 || obs[obs.length - 1].x < W - 300 - Math.random() * 200) {
        var tipos = ['🔥', '🛢️', '📦'];
        // altura: 0 = en el piso; algunos flotan un poco (hay que saltar igual)
        var alto = Math.random() < 0.35 ? (30 + Math.random() * 30) : 0;
        obs.push({ x: W + 20, e: tipos[Math.floor(Math.random() * 3)], w: 28, h: 28, off: alto });
      }
      for (var j = obs.length - 1; j >= 0; j--) {
        var o = obs[j]; o.x -= vel;
        var oy = suelo + 2 - o.off;         // posición vertical del peligro
        // etiqueta didáctica encima del peligro
        var txt = NOMBRES[o.e] || '';
        ctx.save();
        ctx.font = 'bold 12px Rubik, sans-serif';
        var tw = ctx.measureText(txt).width;
        ctx.fillStyle = 'rgba(0,0,0,.6)';
        ctx.fillRect(o.x + 14 - tw / 2 - 6, oy - 56, tw + 12, 20);
        ctx.fillStyle = '#ffd21f';
        ctx.textAlign = 'center';
        ctx.fillText(txt, o.x + 14, oy - 42);
        ctx.restore();
        // el peligro
        ctx.font = '26px serif'; ctx.textAlign = 'left'; ctx.fillText(o.e, o.x, oy);
        // colisión (considera la altura del obstáculo)
        var karTop = karen.y - karen.h, karBot = karen.y;
        var obsTop = oy - 26, obsBot = oy;
        var xover = o.x < karen.x + karen.w - 6 && o.x + o.w > karen.x + 6;
        var yover = karBot > obsTop && karTop < obsBot;
        if (xover && yover) { sHit(); terminar(false); return; }
        if (o.x < -40) { obs.splice(j, 1); score++; vel += 0.08; if (hud) hud.textContent = 'Esquivados: ' + score + ' / ' + meta;
          if (score >= meta) { sOk(); terminar(true); return; } }
      }
      raf = requestAnimationFrame(loop);
    }
    function terminar(gano) {
      corriendo = false; cancelAnimationFrame(raf);
      if (gano) { if (hud) hud.textContent = '✅ ¡Lo lograste! Esquivaste todos los peligros.'; onWin(cv.closest('.screen'), 'Karen esquiva peligros'); }
      else { if (hud) hud.textContent = '💥 ¡Chocaste! Pulsa Jugar para reintentar.'; if (btn) btn.textContent = 'Reintentar'; }
    }
    function jugar() {
      reset(); corriendo = true; if (btn) btn.textContent = 'Jugando...';
      if (hud) hud.textContent = 'Esquivados: 0 / ' + meta;
      cancelAnimationFrame(raf); loop();
    }
    if (btn) btn.addEventListener('click', jugar);
    cv.addEventListener('click', salto);
    document.addEventListener('keydown', function (e) { if (e.code === 'Space' && cv.closest('.screen').classList.contains('active')) { e.preventDefault(); salto(); } });
    reset(); ctx.clearRect(0, 0, W, H);
  }

  /* ============ JUEGO 2: ATRAPA EL EPP ============ */
  function iniciarAtrapa() {
    var cv = document.getElementById('juegoAtrapa');
    if (!cv) return;
    var ctx = cv.getContext('2d');
    var W = cv.width, H = cv.height;
    var cesta, items, score, meta = 10, jugando = false, raf, left, right;
    var hud = document.getElementById('atrapaHud');
    var btn = document.getElementById('atrapaBtn');
    var EPP = ['🪖', '🥽', '🧤', '🥾', '🎧'], MAL = ['🔥', '🔪', '⚡'];
    var NOMBRES2 = {
      '🪖': 'Casco', '🥽': 'Gafas', '🧤': 'Guantes', '🥾': 'Botas', '🎧': 'Protección auditiva',
      '🔥': 'Fuego', '🔪': 'Objeto cortante', '⚡': 'Riesgo eléctrico'
    };

    function reset() { cesta = { x: W / 2 - 30, w: 60 }; items = []; score = 0; left = right = false; }
    function loop() {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#223540'; ctx.fillRect(0, H - 10, W, 10);
      if (left) cesta.x -= 6; if (right) cesta.x += 6;
      cesta.x = Math.max(0, Math.min(W - cesta.w, cesta.x));
      // cesta (Karen)
      ctx.fillStyle = '#f6a81c'; ctx.fillRect(cesta.x, H - 40, cesta.w, 22);
      ctx.fillStyle = '#ffcf1f'; ctx.fillRect(cesta.x + 14, H - 56, 32, 10);
      // generar
      if (Math.random() < 0.03) {
        var bueno = Math.random() < 0.65;
        var arr = bueno ? EPP : MAL;
        items.push({ x: 20 + Math.random() * (W - 40), y: -20, e: arr[Math.floor(Math.random() * arr.length)], bueno: bueno });
      }
      for (var i = items.length - 1; i >= 0; i--) {
        var it = items[i]; it.y += 3.2;
        // etiqueta con el nombre del objeto que cae
        var nom = NOMBRES2[it.e] || '';
        ctx.save();
        ctx.font = 'bold 11px Rubik, sans-serif';
        var tw = ctx.measureText(nom).width;
        ctx.fillStyle = it.bueno ? 'rgba(39,192,138,.85)' : 'rgba(244,67,63,.85)';
        ctx.fillRect(it.x - 2, it.y - 34, tw + 10, 16);
        ctx.fillStyle = '#fff'; ctx.textAlign = 'left';
        ctx.fillText(nom, it.x + 3, it.y - 22);
        ctx.restore();
        ctx.font = '26px serif'; ctx.textAlign = 'left'; ctx.fillText(it.e, it.x, it.y);
        if (it.y > H - 50 && it.x > cesta.x - 10 && it.x < cesta.x + cesta.w) {
          if (it.bueno) { score++; sPick(); } else { score = Math.max(0, score - 1); sHit(); }
          items.splice(i, 1);
          if (hud) hud.textContent = 'EPP recogido: ' + score + ' / ' + meta;
          if (score >= meta) { sOk(); jugando = false; cancelAnimationFrame(raf); hud.textContent = '✅ ¡Equipaste a Karen! Bien hecho.'; onWin(cv.closest('.screen'), 'Atrapa el EPP'); return; }
        } else if (it.y > H) { items.splice(i, 1); }
      }
      if (jugando) raf = requestAnimationFrame(loop);
    }
    function jugar() { reset(); jugando = true; btn.textContent = 'Jugando...'; hud.textContent = 'EPP recogido: 0 / ' + meta; cancelAnimationFrame(raf); loop(); }
    if (btn) btn.addEventListener('click', jugar);
    document.addEventListener('keydown', function (e) {
      if (!cv.closest('.screen').classList.contains('active')) return;
      if (e.key === 'ArrowLeft') left = true; if (e.key === 'ArrowRight') right = true;
    });
    document.addEventListener('keyup', function (e) { if (e.key === 'ArrowLeft') left = false; if (e.key === 'ArrowRight') right = false; });
    // control táctil / mouse
    cv.addEventListener('mousemove', function (e) { var r = cv.getBoundingClientRect(); cesta && (cesta.x = (e.clientX - r.left) * (W / r.width) - cesta.w / 2); });
    reset(); ctx.clearRect(0, 0, W, H);
  }

})();
