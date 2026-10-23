(function () {
  "use strict";
  var doc = document;

  // Mobile menu: a disclosure button. Opening moves focus to the first link; while it is open Tab
  // cycles Menu and the links (the nav sits before the button in the DOM but after it on screen).
  // Escape closes it and returns focus. Desktop order is untouched: the menu button is hidden there.
  var btn = doc.querySelector(".menu-btn"), nav = doc.getElementById("site-nav");
  if (btn && nav) {
    var isOpen = function () { return btn.getAttribute("aria-expanded") === "true"; };
    var set = function (open, refocus) {
      btn.setAttribute("aria-expanded", String(open));
      nav.setAttribute("data-open", String(open));
      if (open) { var first = nav.querySelector("a"); if (first) first.focus(); }
      else if (refocus) btn.focus();
    };
    btn.addEventListener("click", function () { set(!isOpen()); });
    doc.addEventListener("keydown", function (e) {
      if (!isOpen()) return;
      if (e.key === "Escape") { set(false, true); return; }
      if (e.key !== "Tab" || btn.offsetParent === null) return;
      var ring = [btn].concat(Array.prototype.slice.call(nav.querySelectorAll("a")));
      var i = ring.indexOf(doc.activeElement);
      if (i < 0) return;
      e.preventDefault();
      ring[(i + (e.shiftKey ? ring.length - 1 : 1)) % ring.length].focus();
    });
  }

  // Provider-choice control: two buttons, one statement shown at a time.
  doc.querySelectorAll("[data-provider-control]").forEach(function (box) {
    var opts = box.querySelector(".opts"), buttons = box.querySelectorAll("button.opt"), outs = box.querySelectorAll("[data-out]");
    if (opts) opts.hidden = false;
    var pick = function (key) {
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.k === key)); });
      outs.forEach(function (o) { o.hidden = o.dataset.out !== key; });
    };
    buttons.forEach(function (b) { b.addEventListener("click", function () { pick(b.dataset.k); }); });
    pick("local");
  });

  // Email address is assembled here so it is not sitting in the HTML. Nothing is sent or stored by this page.
  var addr = "yewforge.partnerships" + "@" + "gmail.com";
  doc.querySelectorAll("[data-mail]").forEach(function (el) {
    var href = "mail" + "to:" + addr;
    if (el.dataset.subject) href += "?subject=" + encodeURIComponent(el.dataset.subject) + "&body=" + encodeURIComponent(el.dataset.body || "");
    el.href = href;
  });
  doc.querySelectorAll("[data-mail-text]").forEach(function (el) { el.textContent = addr; });
  doc.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
