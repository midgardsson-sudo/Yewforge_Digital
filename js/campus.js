(function () {
  'use strict';

  /* Mobile nav toggle */
  var navToggle = document.querySelector('.nav-toggle');
  var nav       = document.querySelector('.site-nav');

  if (navToggle && nav) {
    function setMobileMenuOpen(isOpen) {
      nav.classList.toggle('is-open', isOpen);
      document.body.classList.toggle('mobile-menu-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    }

    navToggle.addEventListener('click', function () {
      setMobileMenuOpen(!nav.classList.contains('is-open'));
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    });

    nav.addEventListener('click', function (event) {
      if (event.target && event.target.closest('a')) {
        setMobileMenuOpen(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        setMobileMenuOpen(false);
        navToggle.focus();
      }
    });
  }

  /* Expandable reveal objects */
  var revealObjects = document.querySelectorAll('.reveal-object');

  revealObjects.forEach(function (object) {
    var button = object.querySelector('.object-face');
    if (!button) { return; }

    button.addEventListener('click', function () {
      var isOpen = object.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(isOpen));
    });
  });

  /* Formspree partner form */
  var partnerForm = document.querySelector('.partner-form');

  if (partnerForm && window.fetch && window.FormData) {
    var statusEl   = partnerForm.querySelector('.form-status');
    var submitBtn  = partnerForm.querySelector('button[type="submit"]');
    var defaultTxt = submitBtn ? submitBtn.textContent : '';

    partnerForm.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!partnerForm.checkValidity()) {
        partnerForm.reportValidity();
        return;
      }

      if (statusEl) {
        statusEl.textContent = 'Sending your enquiry\u2026';
        statusEl.className   = 'form-status';
      }

      partnerForm.classList.add('is-submitting');
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending\u2026'; }

      fetch(partnerForm.action, {
        method:  'POST',
        body:    new FormData(partnerForm),
        headers: { Accept: 'application/json' }
      })
        .then(function (res) {
          if (!res.ok) { throw new Error('Submission failed'); }
          partnerForm.reset();
          if (statusEl) {
            statusEl.textContent = 'Thank you. Your enquiry has been received.';
            statusEl.classList.add('is-success');
          }
        })
        .catch(function () {
          if (statusEl) {
            statusEl.textContent = 'Your message could not be sent right now. Please try again shortly.';
            statusEl.classList.add('is-error');
          }
        })
        .finally(function () {
          partnerForm.classList.remove('is-submitting');
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = defaultTxt; }
        });
    });
  }
})();
