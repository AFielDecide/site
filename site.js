/* A Fiel Decide — JS mínimo do site estático (sem framework, por cláusula de replicabilidade) */
(function () {
  'use strict';

  // Contador da sangria: déficit de R$ 100 mi no 1º bimestre/2026 (59 dias) ≈ R$ 19,62/s.
  // "Desde que você abriu esta página": começa em 0 a cada carregamento, de propósito.
  var sangria = document.getElementById('sangria-live');
  if (sangria) {
    var PER_SEC = 100000000 / (59 * 86400);
    var t0 = Date.now();
    var tick = function () {
      sangria.textContent = 'R$ ' + (((Date.now() - t0) / 1000) * PER_SEC)
        .toLocaleString('pt-BR', { maximumFractionDigits: 0 });
    };
    tick();
    setInterval(tick, 200);
  }

  // Barra da meta. O site é estático e não consulta a API do Change.org, então a
  // contagem entra à mão aqui. O piso de 1,5% é ornamento (a barra não some do
  // layout); nenhum número de assinatura é exibido na página enquanto não houver
  // volume — quem mostra a contagem real é a própria página do abaixo-assinado.
  var ASSINATURAS = 0;
  var META = 50000;
  var meta = document.getElementById('meta-bar');
  if (meta) {
    var pct = Math.max(1.5, (ASSINATURAS / META) * 100);
    setTimeout(function () { meta.style.width = pct.toFixed(2) + '%'; }, 500);
  }

  // Menu mobile (< 860px)
  var btn = document.getElementById('menu-btn');
  var menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    var fecha = function () {
      menu.classList.remove('open');
      btn.lastChild.textContent = 'Menu';
      btn.setAttribute('aria-expanded', 'false');
    };
    btn.addEventListener('click', function () {
      var aberto = menu.classList.toggle('open');
      btn.lastChild.textContent = aberto ? 'Fechar' : 'Menu';
      btn.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) fecha(); });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 860) fecha();
    });
  }

  // Compartilhar
  var SHARE = {
    title: 'A Fiel Decide',
    text: 'O Corinthians é decidido por ~4 mil sócios. A gente é 35 milhões. Assina e chama a quebrada. #AFielDecide',
    url: location.href
  };
  document.querySelectorAll('[data-share]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      if (navigator.share) { navigator.share(SHARE).catch(function () {}); }
      else {
        window.open('https://wa.me/?text=' + encodeURIComponent(SHARE.text + ' ' + SHARE.url),
          '_blank', 'noopener');
      }
    });
  });

})();
