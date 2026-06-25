(function () {
  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  var revealObjects = document.querySelectorAll(".reveal-object");

  revealObjects.forEach(function (object) {
    var button = object.querySelector(".object-face");

    if (!button) {
      return;
    }

    button.addEventListener("click", function () {
      var isOpen = object.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  var partnerForm = document.querySelector(".partner-form");

  if (partnerForm && window.fetch && window.FormData) {
    var status = partnerForm.querySelector(".form-status");
    var submitButton = partnerForm.querySelector('button[type="submit"]');
    var defaultButtonText = submitButton ? submitButton.textContent : "";

    partnerForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!partnerForm.checkValidity()) {
        partnerForm.reportValidity();
        return;
      }

      if (status) {
        status.textContent = "Sending your enquiry...";
        status.classList.remove("is-success", "is-error");
      }

      partnerForm.classList.add("is-submitting");

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
      }

      fetch(partnerForm.action, {
        method: "POST",
        body: new FormData(partnerForm),
        headers: {
          "Accept": "application/json"
        }
      }).then(function (response) {
        if (!response.ok) {
          throw new Error("Form submission failed");
        }

        partnerForm.reset();

        if (status) {
          status.textContent = "Thank you. Your enquiry has been received by Yewforge Digital.";
          status.classList.add("is-success");
          status.classList.remove("is-error");
        }
      }).catch(function () {
        if (status) {
          status.textContent = "Your message could not be sent just now. Please try again shortly.";
          status.classList.add("is-error");
          status.classList.remove("is-success");
        }
      }).finally(function () {
        partnerForm.classList.remove("is-submitting");

        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = defaultButtonText;
        }
      });
    });
  }
})();
