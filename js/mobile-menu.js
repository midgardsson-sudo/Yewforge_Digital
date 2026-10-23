(function () {
  var button = document.querySelector('.menu-toggle');
  var nav = document.getElementById('main-nav');
  if (!button || !nav) return;

  function setOpen(open, returnFocus) {
    nav.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
    if (open) {
      var first = nav.querySelector('a[href]');
      if (first) first.focus();
    } else if (returnFocus) {
      button.focus();
    }
  }

  button.addEventListener('click', function () {
    setOpen(button.getAttribute('aria-expanded') !== 'true', false);
  });

  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) setOpen(false, false);
  });

  document.addEventListener('keydown', function (event) {
    if (!nav.classList.contains('is-open')) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false, true);
      return;
    }
    if (event.key !== 'Tab') return;
    var items = [button].concat(Array.prototype.slice.call(nav.querySelectorAll('a[href]')));
    var first = items[0];
    var last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  document.addEventListener('click', function (event) {
    if (nav.classList.contains('is-open') && !nav.contains(event.target) && !button.contains(event.target)) {
      setOpen(false, false);
    }
  });
})();
