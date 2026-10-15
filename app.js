(function () {
  "use strict";

  var screens = Array.prototype.slice.call(document.querySelectorAll('.screen'));
  var total = screens.length;
  var current = 0;

  var btnNext = document.getElementById('btnNext');
  var btnBefore = document.getElementById('btnBefore');
  var barra = document.getElementById('progresoBarra');

  // ---------- Sonidos sintéticos (Web Audio API, estilo UI) ----------
  var muted = false;
  var AC = null;
  function ctx() {
    if (!AC) { try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {} }
    if (AC && AC.state === 'suspended') AC.resume();
    return AC;
  }
  // Reproduce una secuencia de tonos: cada paso = [frecuencia, duración, tipo]
  function tono(freqs, dur, type) {
    if (muted) return;
    var ac = ctx(); if (!ac) return;
    var t = ac.currentTime;
    freqs.forEach(function (f, i) {
      var o = ac.createOscillator(), g = ac.createGain();
      o.type = type || 'sine';
      o.frequency.value = f;
      var start = t + i * dur;
      g.gain.setValueAtTime(0.0001, start);
      g.gain.exponentialRampToValueAtTime(0.25, start + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
      o.connect(g); g.connect(ac.destination);
      o.start(start); o.stop(start + dur);
    });
  }
  var S = {
    next:   { play: function () { tono([520], 0.09, 'triangle'); } },        // click suave
    before: { play: function () { tono([360], 0.09, 'triangle'); } },        // click grave
    // Éxito: pequeña fanfarria de logro (do-mi-sol-DO) tipo "¡bien hecho!"
    ok:     { play: function () { tono([523, 659, 784, 1046], 0.12, 'triangle'); } },
    error:  { play: function () { tono([200, 150], 0.14, 'square'); } }       // buzz de error
  };
  function play(a) { if (a && a.play) a.play(); }

  var btnMute = document.getElementById('btnMute');
  btnMute.addEventListener('click', function () { muted = !muted; btnMute.textContent = muted ? '🔇' : '🔊'; });

  // ---------- Actividades obligatorias por índice ----------
  // 5 = riesgos (ver los 6), 7 = drag&drop, y cada pantalla de quiz
  var completado = {};
  // obligatorias: riesgos (clic), dinámicas de arrastrar, cada quiz y cada mini-juego
  screens.forEach(function (sc, i) {
    if (sc.querySelector('.riesgos') ||
        sc.querySelector('.dnd') ||
        sc.querySelector('.equipar') ||
        sc.querySelector('.quiz-uno') ||
        sc.querySelector('.juego-wrap')) {
      completado[i] = false;
    }
  });
  function bloqueada(i) { return completado.hasOwnProperty(i) && !completado[i]; }

  // ----- Puntaje y logros -----
  var puntos = 0;
  var logros = [];
  function completar(i, pts, logro) {
    if (completado[i] === false) {              // solo la primera vez
      if (pts) puntos += pts;
      if (logro && logros.indexOf(logro) === -1) logros.push(logro);
    }
    completado[i] = true;
    if (current === i) update();
  }

  // ---------- Navegación ----------
  var anims = ['anim-der','anim-arriba','anim-zoom','anim-giro','anim-abajo','anim-flip','anim-izq'];
  function show(i, dir) {
    if (i < 0 || i >= total) return;
    screens[current].classList.remove('active');
    anims.forEach(function (a) { screens[current].classList.remove(a); });
    current = i;
    var sc = screens[current];
    anims.forEach(function (a) { sc.classList.remove(a); });
    // al retroceder siempre desliza desde la izquierda; al avanzar, animación variada por pantalla
    var anim = dir === 'izq' ? 'anim-izq' : anims[i % anims.length];
    void sc.offsetWidth; // reinicia la animación
    sc.classList.add('active', anim);
    if (i === total - 1) mostrarDiploma();
    update();
  }

  // ----- Resumen final / diploma -----
  function mostrarDiploma() {
    var elP = document.getElementById('finalPuntos');
    var elE = document.getElementById('finalEstrellas');
    var elL = document.getElementById('finalLogros');
    var elT = document.getElementById('finalTitulo');
    var elM = document.getElementById('finalMedalla');
    if (!elP) return;

    // conteo de quizzes acertados para un logro extra
    var quizOk = screens.filter(function (s, k) { return s.querySelector('.quiz-uno') && completado[k]; }).length;
    if (quizOk >= 1 && logros.indexOf('Aprobaste ' + quizOk + ' preguntas de evaluación') === -1) {
      logros.push('Respondiste bien ' + quizOk + ' preguntas de evaluación');
    }

    // animación de conteo de puntos
    var meta = puntos, n = 0;
    elP.textContent = '0';
    var iv = setInterval(function () {
      n += Math.max(1, Math.round(meta / 25));
      if (n >= meta) { n = meta; clearInterval(iv); }
      elP.textContent = n;
    }, 40);

    // estrellas y título según puntaje (máx aprox 185)
    var estrellas = puntos >= 150 ? 3 : puntos >= 90 ? 2 : 1;
    elE.textContent = '⭐'.repeat(estrellas) + '☆'.repeat(3 - estrellas);
    if (estrellas === 3) { elT.textContent = '¡CAMPEÓN DE LA SEGURIDAD!'; elM.textContent = '🏆'; }
    else if (estrellas === 2) { elT.textContent = '¡MUY BIEN, GUARDIÁN!'; elM.textContent = '🥈'; }
    else { elT.textContent = '¡BUEN TRABAJO!'; elM.textContent = '🏅'; }

    // lista de logros
    elL.innerHTML = '';
    if (logros.length === 0) { elL.innerHTML = '<li>Recorriste el curso de SST.</li>'; }
    else logros.forEach(function (lg) {
      var li = document.createElement('li'); li.textContent = '✔ ' + lg; elL.appendChild(li);
    });
  }
  function update() {
    barra.style.width = (current / (total - 1)) * 100 + '%';
    var esInicio = current === 0, esFinal = current === total - 1, trabada = bloqueada(current);
    btnBefore.disabled = esInicio;
    btnBefore.style.visibility = esInicio ? 'hidden' : 'visible';
    btnNext.style.visibility = (esInicio || esFinal) ? 'hidden' : 'visible';
    btnNext.disabled = esFinal || trabada;
    btnNext.title = trabada ? 'Completa la actividad para continuar' : '';
  }
  function next() { if (current < total - 1 && !bloqueada(current)) { play(S.next); show(current + 1, 'der'); } }
  function before() { if (current > 0) { play(S.before); show(current - 1, 'izq'); } }

  btnNext.addEventListener('click', next);
  btnBefore.addEventListener('click', before);
  document.querySelectorAll('[data-next]').forEach(function (b) { b.addEventListener('click', next); });
  document.querySelectorAll('[data-reset]').forEach(function (b) { b.addEventListener('click', function () { show(0, 'izq'); }); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') before();
  });

  // ---------- Riesgos (ver los 6) ----------
  var riesgoInfo = document.getElementById('riesgoInfo');
  var riesgosBtns = document.querySelectorAll('.riesgo');
  var vistos = {};
  riesgosBtns.forEach(function (b, idx) {
    b.addEventListener('click', function () {
      riesgosBtns.forEach(function (r) { r.classList.remove('sel'); });
      b.classList.add('sel');
      if (riesgoInfo) riesgoInfo.textContent = b.getAttribute('data-info');
      play(S.next);
      vistos[idx] = true;
      if (Object.keys(vistos).length === riesgosBtns.length) {
        completar(screens.indexOf(b.closest('.screen')), 20, 'Identificaste los 6 riesgos de la planta');
      }
    });
  });

  // ---------- Drag and drop (relacionar riesgo-definición) ----------
  var fichas = document.querySelectorAll('#fichas .ficha');
  var zonas = document.querySelectorAll('.zona');
  var dndFeedback = document.getElementById('dndFeedback');
  var arrastrada = null, aciertos = 0, totalFichas = fichas.length;
  fichas.forEach(function (f) {
    f.addEventListener('dragstart', function () { if (f.classList.contains('colocada')) return; arrastrada = f; f.classList.add('arrastrando'); });
    f.addEventListener('dragend', function () { f.classList.remove('arrastrando'); });
  });
  zonas.forEach(function (z) {
    z.addEventListener('dragover', function (e) { e.preventDefault(); });
    z.addEventListener('drop', function (e) {
      e.preventDefault();
      if (!arrastrada) return;
      var esperado = z.getAttribute('data-acepta'), id = arrastrada.getAttribute('data-id');
      if (esperado === id && !z.querySelector('.ficha')) {
        z.appendChild(arrastrada); arrastrada.classList.add('colocada'); arrastrada.setAttribute('draggable', 'false');
        z.classList.add('ok'); play(S.ok); aciertos++;
        if (aciertos === totalFichas) {
          dndFeedback.textContent = '✅ ¡Muy bien! Relacionaste todos los riesgos. Ya puedes continuar.';
          dndFeedback.style.color = 'var(--verde)';
          completar(screens.indexOf(z.closest('.screen')), 20, 'Relacionaste cada riesgo con su definición');
        }
      } else if (esperado !== id) {
        z.classList.add('mal'); play(S.error);
        dndFeedback.textContent = '❌ Esa no corresponde, inténtalo de nuevo.';
        dndFeedback.style.color = 'var(--rojo)';
        setTimeout(function () { z.classList.remove('mal'); }, 800);
      }
    });
  });

  // ---------- Quiz (una pregunta por pantalla) ----------
  document.querySelectorAll('.quiz-uno').forEach(function (q) {
    var correcta = q.getAttribute('data-correcta');
    var fb = q.querySelector('.quiz-feedback');
    var resuelta = false;
    var idx = screens.indexOf(q.closest('.screen'));
    q.querySelectorAll('.opcion').forEach(function (op) {
      op.addEventListener('click', function () {
        if (resuelta) return;
        var elegida = op.getAttribute('data-op');
        if (elegida === correcta) {
          resuelta = true;
          op.classList.add('correcta');
          play(S.ok);
          if (fb) { fb.textContent = '✅ ¡Correcto! Ya puedes continuar.'; fb.style.color = 'var(--verde)'; }
          completar(idx, 10, null);
        } else {
          op.classList.add('incorrecta'); play(S.error);
          if (fb) { fb.textContent = '❌ Incorrecto, vuelve a intentarlo.'; fb.style.color = 'var(--rojo)'; }
          var el = op;
          setTimeout(function () { el.classList.remove('incorrecta'); }, 900);
        }
      });
    });
  });

  // ---------- Dinámica: Equipa a Karen ----------
  var eppFichas = document.querySelectorAll('#eppFichas .ficha');
  var eppZonas = document.querySelectorAll('.zona-epp');
  var eppFeedback = document.getElementById('eppFeedback');
  var eppArrastrada = null, eppAciertos = 0, eppTotal = eppFichas.length;
  eppFichas.forEach(function (f) {
    f.addEventListener('dragstart', function () { if (f.classList.contains('colocada')) return; eppArrastrada = f; f.classList.add('arrastrando'); });
    f.addEventListener('dragend', function () { f.classList.remove('arrastrando'); });
  });
  eppZonas.forEach(function (z) {
    z.addEventListener('dragover', function (e) { e.preventDefault(); });
    z.addEventListener('drop', function (e) {
      e.preventDefault();
      if (!eppArrastrada) return;
      var esperado = z.getAttribute('data-epp'), id = eppArrastrada.getAttribute('data-epp');
      if (esperado === id && !z.classList.contains('puesta')) {
        z.classList.add('puesta');
        eppArrastrada.classList.add('colocada');
        eppArrastrada.setAttribute('draggable', 'false');
        eppArrastrada.style.opacity = '.45';
        play(S.ok);
        eppAciertos++;
        if (eppAciertos === eppTotal) {
          if (eppFeedback) { eppFeedback.textContent = '✅ ¡Karen está lista y protegida! Ya puedes continuar.'; eppFeedback.style.color = 'var(--verde)'; }
          completar(screens.indexOf(z.closest('.screen')), 20, 'Equipaste correctamente el EPP');
        }
      } else if (esperado !== id) {
        play(S.error);
        if (eppFeedback) { eppFeedback.textContent = '❌ Ese EPP no va ahí, inténtalo de nuevo.'; eppFeedback.style.color = 'var(--rojo)'; }
      }
    });
  });

  // ---------- Parallax con el mouse ----------
  var capas = document.querySelectorAll('.parallax .capa');
  var marco = document.querySelector('.marco');
  if (marco && capas.length) {
    marco.addEventListener('mousemove', function (e) {
      var r = marco.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      capas.forEach(function (c) {
        var d = c.classList.contains('capa-atras') ? 10 : c.classList.contains('capa-medio') ? 22 : 34;
        c.style.transform = 'translate(' + (x * d) + 'px,' + (y * d) + 'px)';
      });
    });
  }

  // ---------- Mini-juegos ----------
  if (window.SSTJuegos) {
    window.SSTJuegos.init(function (screenEl, nombreJuego) {
      var i = screens.indexOf(screenEl);
      if (i >= 0) completar(i, 25, 'Superaste el juego: ' + (nombreJuego || 'reto SST'));
    });
  }

  update();
})();
