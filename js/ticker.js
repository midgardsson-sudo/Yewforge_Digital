(function (global) {
  "use strict";

  const DATA_URL = "/site-review.json";
  const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

  function validItem(item) {
    if (!item || typeof item !== "object") return false;
    if (typeof item.title !== "string" || !item.title.trim()) return false;
    if (typeof item.kind !== "string" || !item.kind.trim()) return false;
    if (typeof item.date !== "string" || !ISO_DATE.test(item.date)) return false;
    const date = new Date(item.date + "T00:00:00Z");
    if (Number.isNaN(date.valueOf()) || date.toISOString().slice(0, 10) !== item.date) return false;
    if (typeof item.link !== "string") return false;
    const link = new URL(item.link, global.location.origin);
    return link.origin === global.location.origin && link.pathname.startsWith("/");
  }

  function createList(items, hidden) {
    const list = document.createElement("ul");
    list.className = "yf-ticker-track";
    if (hidden) {
      list.setAttribute("aria-hidden", "true");
      list.inert = true;
    } else {
      list.setAttribute("aria-label", "Latest YewForge updates");
    }

    items.forEach(function (item) {
      const row = document.createElement("li");
      row.className = "yf-ticker-item";
      const date = document.createElement("time");
      date.dateTime = item.date;
      date.textContent = new Intl.DateTimeFormat("en-GB", {
        day: "numeric", month: "short", year: "numeric", timeZone: "UTC"
      }).format(new Date(item.date + "T00:00:00Z"));
      const kind = document.createElement("span");
      kind.className = "yf-ticker-kind";
      kind.textContent = item.kind;
      const link = document.createElement("a");
      link.href = item.link;
      link.textContent = item.title;
      row.append(date, kind, link);
      list.append(row);
    });
    return list;
  }

  function mount(root, items) {
    root.replaceChildren();
    root.classList.add("yf-updates");
    root.setAttribute("aria-busy", "false");

    const heading = document.createElement("h2");
    heading.className = "yf-visually-hidden";
    heading.textContent = "Latest updates";
    const control = document.createElement("button");
    control.className = "yf-ticker-control";
    control.type = "button";
    control.textContent = "Pause updates";
    control.setAttribute("aria-pressed", "false");

    const viewport = document.createElement("div");
    viewport.className = "yf-ticker-viewport";
    const run = document.createElement("div");
    run.className = "yf-ticker-run";
    run.append(createList(items, false));
    const moving = items.length > 1 && !global.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (moving) {
      root.classList.add("yf-updates--animated");
      run.append(createList(items, true));
    }
    else {
      control.disabled = true;
      control.textContent = "Updates are static";
      control.setAttribute("aria-label", "Updates are static because there is only one item or reduced motion is enabled");
    }
    viewport.append(run);

    control.addEventListener("click", function () {
      const paused = root.getAttribute("data-paused") === "true";
      root.setAttribute("data-paused", String(!paused));
      control.setAttribute("aria-pressed", String(!paused));
      control.textContent = paused ? "Pause updates" : "Resume updates";
    });

    root.append(heading, viewport, control);
  }

  function init(root) {
    if (!root || root.getAttribute("data-yf-ready") === "true") return Promise.resolve();
    root.setAttribute("data-yf-ready", "true");
    root.setAttribute("aria-busy", "true");
    return global.fetch(DATA_URL, { headers: { Accept: "application/json" } })
      .then(function (response) {
        if (!response.ok) throw new Error("Update data request failed");
        return response.json();
      })
      .then(function (review) {
        const items = review && review.ticker;
        if (!Array.isArray(items) || !items.length || !items.every(validItem)) {
          throw new Error("Update data did not match the expected format");
        }
        items.sort(function (a, b) { return b.date.localeCompare(a.date); });
        mount(root, items);
      })
      .catch(function () {
        root.replaceChildren();
        root.classList.add("yf-updates");
        root.setAttribute("aria-busy", "false");
        const status = document.createElement("p");
        status.className = "yf-ticker-status";
        status.textContent = "Latest updates are unavailable.";
        root.append(status);
      });
  }

  function initAll() {
    document.querySelectorAll("[data-yf-updates]").forEach(init);
  }

  global.YewForgeUpdatesTicker = Object.freeze({ init: init, initAll: initAll });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initAll);
  else initAll();
})(window);
