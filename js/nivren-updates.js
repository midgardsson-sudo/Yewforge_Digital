/**
 * Nivren daily build updates — renders Jake-approved published entries only.
 * Drafts under nivren-updates/drafts/ are never fetched by this script.
 */
(function () {
  'use strict';

  var STATUS_CLASS = {
    'Working': 'is-working',
    'Experimental': 'is-experimental',
    'In development': 'is-in-development',
    'Blocked': 'is-blocked',
    'Planned': 'is-planned',
    'Released': 'is-released'
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function listHtml(items) {
    if (!items || !items.length) {
      return '<p class="nivren-update-muted">None recorded.</p>';
    }
    return '<ul>' + items.map(function (item) {
      return '<li>' + escapeHtml(item) + '</li>';
    }).join('') + '</ul>';
  }

  function evidenceHtml(items) {
    if (!items || !items.length) {
      return '<p class="nivren-update-muted">No evidence links yet.</p>';
    }
    return '<ul>' + items.map(function (item) {
      var label = escapeHtml(item.label || item.href || 'Evidence');
      var status = item.status ? ' <span class="status-chip ' + (STATUS_CLASS[item.status] || '') + '">' + escapeHtml(item.status) + '</span>' : '';
      if (item.href) {
        return '<li><a href="' + escapeHtml(item.href) + '">' + label + '</a>' + status + '</li>';
      }
      return '<li>' + label + status + '</li>';
    }).join('') + '</ul>';
  }

  function commitsHtml(items) {
    if (!items || !items.length) {
      return '<p class="nivren-update-muted">No public commit references.</p>';
    }
    return '<ul>' + items.map(function (item) {
      var sha = escapeHtml(item.sha || '');
      var msg = escapeHtml(item.message || '');
      var repo = escapeHtml(item.repo || '');
      return '<li><code>' + sha + '</code> — ' + msg + (repo ? ' <span class="nivren-update-muted">(' + repo + ')</span>' : '') + '</li>';
    }).join('') + '</ul>';
  }

  function cardHtml(update, mode) {
    var status = update.stability_status || 'In development';
    var statusClass = STATUS_CLASS[status] || 'is-in-development';
    var detail = '';
    if (mode === 'archive' || mode === 'full') {
      detail =
        '<div class="nivren-update-grid">' +
          '<div><h3>Completed</h3>' + listHtml(update.completed_work) + '</div>' +
          '<div><h3>Improvements</h3>' + listHtml(update.improvements) + '</div>' +
          '<div><h3>Discoveries</h3>' + listHtml(update.discoveries) + '</div>' +
          '<div><h3>Current problems</h3>' + listHtml(update.current_problems) + '</div>' +
          '<div><h3>Next steps</h3>' + listHtml(update.next_steps) + '</div>' +
          '<div><h3>Evidence</h3>' + evidenceHtml(update.screenshots_or_evidence) + '</div>' +
          '<div><h3>Public commits</h3>' + commitsHtml(update.related_public_commits) + '</div>' +
        '</div>';
    } else {
      detail = '<p>' + escapeHtml(update.summary || '') + '</p>';
    }

    return (
      '<article class="nivren-update-card" id="' + escapeHtml(update.id || '') + '">' +
        '<div class="nivren-update-meta">' +
          '<span class="status-chip ' + statusClass + '">' + escapeHtml(status) + '</span>' +
          '<span class="nivren-update-date">' + escapeHtml(update.date || '') + '</span>' +
          '<span class="nivren-update-session">Session ' + escapeHtml(update.session_number || '') + '</span>' +
        '</div>' +
        '<h3 class="nivren-update-title">' + escapeHtml(update.title || 'Build update') + '</h3>' +
        detail +
      '</article>'
    );
  }

  function resolveUrl(baseEl, relativePath) {
    try {
      return new URL(relativePath, baseEl.ownerDocument.baseURI || window.location.href).href;
    } catch (err) {
      return relativePath;
    }
  }

  function renderHost(host, manifest) {
    var mode = host.getAttribute('data-mode') || 'recent';
    var limitAttr = host.getAttribute('data-limit');
    var limit = limitAttr == null ? 3 : parseInt(limitAttr, 10);
    var updates = (manifest.updates || []).filter(function (item) {
      return item && item.visibility === 'public' && item.approval_status === 'published';
    });

    if (!updates.length) {
      host.innerHTML = '<p class="nivren-updates-empty">No published build updates yet. Approved sessions will appear here after Jake publishes them.</p>';
      return;
    }

    updates = updates.slice().sort(function (a, b) {
      return String(b.date || '').localeCompare(String(a.date || '')) || (b.session_number || 0) - (a.session_number || 0);
    });

    if (limit > 0) {
      updates = updates.slice(0, limit);
    }

    host.innerHTML = updates.map(function (update) {
      return cardHtml(update, mode);
    }).join('');
  }

  function boot() {
    var hosts = document.querySelectorAll('[data-nivren-updates]');
    if (!hosts.length) { return; }

    hosts.forEach(function (host) {
      var manifestPath = host.getAttribute('data-manifest') || 'nivren-updates/published/index.json';
      var url = resolveUrl(host, manifestPath);

      fetch(url, { credentials: 'same-origin' })
        .then(function (response) {
          if (!response.ok) { throw new Error('manifest ' + response.status); }
          return response.json();
        })
        .then(function (manifest) {
          renderHost(host, manifest);
        })
        .catch(function () {
          host.innerHTML = '<p class="nivren-updates-empty">Published updates could not be loaded right now. Try the <a href="/nivren-updates/archive/">build update archive</a>.</p>';
        });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
