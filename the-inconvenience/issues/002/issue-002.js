(() => {
  const spreads = Array.from(document.querySelectorAll('.ti-spread'));
  const prev = document.getElementById('prevButton');
  const next = document.getElementById('nextButton');
  const arrowPrev = document.getElementById('arrowPrev');
  const arrowNext = document.getElementById('arrowNext');
  const spreadLabel = document.getElementById('spreadLabel');
  const folioLabel = document.getElementById('folioLabel');

  if (!spreads.length || !prev || !next) return;

  const isDesktopReader = () => window.matchMedia('(min-width: 901px)').matches;
  const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = 0;
  let locked = false;

  function updateControls() {
    spreadLabel.textContent = `Spread ${current + 1} of ${spreads.length}`;
    folioLabel.textContent = `Folio ${spreads[current].dataset.folio}`;
    const atStart = current === 0;
    const atEnd = current === spreads.length - 1;
    prev.disabled = atStart;
    next.disabled = atEnd;
    if (arrowPrev) arrowPrev.disabled = atStart;
    if (arrowNext) arrowNext.disabled = atEnd;
  }

  function activate(index, direction = 'next', focus = false) {
    if (!isDesktopReader()) return;
    if (locked || index < 0 || index >= spreads.length || index === current) return;

    locked = true;
    const oldSpread = spreads[current];
    const newSpread = spreads[index];
    const turnClass = direction === 'next' ? 'turn-next' : 'turn-prev';
    const delay = reducedMotion() ? 1 : 280;

    oldSpread.classList.add(turnClass);

    window.setTimeout(() => {
      oldSpread.classList.remove('is-active', turnClass);
      oldSpread.setAttribute('aria-hidden', 'true');
      newSpread.classList.add('is-active');
      newSpread.removeAttribute('aria-hidden');
      current = index;
      updateControls();
      locked = false;
      if (focus) document.getElementById('issue').focus?.({ preventScroll: true });
      window.scrollTo({ top: Math.max(0, document.querySelector('.ti-spread-toolbar').offsetTop - 8), behavior: reducedMotion() ? 'auto' : 'smooth' });
    }, delay);
  }

  prev.addEventListener('click', () => activate(current - 1, 'prev'));
  next.addEventListener('click', () => activate(current + 1, 'next'));
  if (arrowPrev) arrowPrev.addEventListener('click', () => activate(current - 1, 'prev'));
  if (arrowNext) arrowNext.addEventListener('click', () => activate(current + 1, 'next'));

  document.addEventListener('keydown', (event) => {
    if (!isDesktopReader()) return;
    const target = event.target;
    if (target && /INPUT|TEXTAREA|SELECT|BUTTON/.test(target.tagName)) return;
    if (event.key === 'ArrowRight' || event.key === 'PageDown') {
      event.preventDefault();
      activate(current + 1, 'next');
    }
    if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
      event.preventDefault();
      activate(current - 1, 'prev');
    }
    if (event.key === 'Home') {
      event.preventDefault();
      activate(0, 'prev');
    }
    if (event.key === 'End') {
      event.preventDefault();
      activate(spreads.length - 1, 'next');
    }
  });

  function syncMode() {
    if (isDesktopReader()) {
      spreads.forEach((spread, index) => {
        spread.classList.toggle('is-active', index === current);
        if (index === current) spread.removeAttribute('aria-hidden');
        else spread.setAttribute('aria-hidden', 'true');
      });
    } else {
      spreads.forEach((spread) => {
        spread.classList.remove('turn-next', 'turn-prev');
        spread.removeAttribute('aria-hidden');
      });
    }
    updateControls();
  }

  window.matchMedia('(min-width: 901px)').addEventListener('change', syncMode);
  syncMode();
})();
