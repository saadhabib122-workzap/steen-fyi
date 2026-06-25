// ─── Dark Mode ───────────────────────────────────────────────────────────────

(function () {
  const saved = localStorage.getItem('steen-theme');
  const pref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', saved || pref);
})();

document.addEventListener('DOMContentLoaded', function () {

  // Dark mode toggle
  const html = document.documentElement;
  const toggles = document.querySelectorAll('.dark-toggle');

  function setTheme(t) {
    html.setAttribute('data-theme', t);
    localStorage.setItem('steen-theme', t);
  }

  toggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
    btn.setAttribute('aria-label', 'Toggle dark mode');
  });

  // ─── Nav Scroll ──────────────────────────────────────────────────────────────

  var nav = document.getElementById('main-nav');
  var isTransparent = nav && nav.classList.contains('nav--transparent');

  function updateNav() {
    if (!nav) return;
    if (window.scrollY > 48) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  if (nav) {
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  // ─── Mobile Menu ─────────────────────────────────────────────────────────────

  var hamburger = document.getElementById('hamburger');
  var drawer = document.getElementById('nav-drawer');

  if (hamburger && drawer) {
    hamburger.addEventListener('click', function () {
      var isOpen = drawer.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close on link click
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        drawer.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (drawer.classList.contains('open') && !nav.contains(e.target) && !drawer.contains(e.target)) {
        drawer.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // ─── Scroll Animations ───────────────────────────────────────────────────────

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  document.querySelectorAll('.anim').forEach(function (el) {
    observer.observe(el);
  });

  // ─── Active Nav Link ─────────────────────────────────────────────────────────

  var currentPath = window.location.pathname.replace(/\/$/, '').replace(/\.html$/, '');
  document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(function (link) {
    var href = link.getAttribute('href').replace(/\/$/, '').replace(/\.html$/, '');
    if (href === currentPath || (currentPath === '' && href === 'index') || (currentPath === '/index' && href === 'index')) {
      link.classList.add('active');
    }
  });

  // ─── Cookie Banner ───────────────────────────────────────────────────────────

  var cookieBanner = document.getElementById('cookie-banner');
  var cookieAccept = document.getElementById('cookie-accept');

  if (cookieBanner && !localStorage.getItem('steen-cookies')) {
    setTimeout(function () { cookieBanner.classList.add('visible'); }, 1800);
  }

  if (cookieAccept) {
    cookieAccept.addEventListener('click', function () {
      if (cookieBanner) cookieBanner.classList.remove('visible');
      localStorage.setItem('steen-cookies', '1');
    });
  }

  // ─── Contact/Booking Form Submit ─────────────────────────────────────────────

  document.querySelectorAll('.site-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('[type=submit]');
      if (btn) {
        var orig = btn.textContent;
        btn.textContent = 'Message Sent ✓';
        btn.disabled = true;
        setTimeout(function () { btn.textContent = orig; btn.disabled = false; }, 4000);
      }
    });
  });

});
