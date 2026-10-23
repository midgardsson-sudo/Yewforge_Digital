(function () {
  "use strict";
  var doc = document;

  // Mobile menu: a disclosure button; Escape closes it and returns focus.
  var btn = doc.querySelector(".menu-btn"), nav = doc.getElementById("site-nav");
  if (btn && nav) {
    var set = function (open, refocus) {
      btn.setAttribute("aria-expanded", String(open));
      nav.setAttribute("data-open", String(open));
      if (!open && refocus) btn.focus();
    };
    btn.addEventListener("click", function () { set(btn.getAttribute("aria-expanded") !== "true"); });
    doc.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") set(false, true);
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
