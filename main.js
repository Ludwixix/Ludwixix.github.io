/**
 * main.js — Sam Ludwig Personal Site
 * Clean, Humble, Human & Robust
 */
(function () {
  'use strict';

  // ========== THEME TOGGLE ==========
  var themeToggle = document.getElementById('theme-toggle');
  var savedTheme = localStorage.getItem('theme');
  if (!savedTheme) {
    savedTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  document.documentElement.setAttribute('data-theme', savedTheme);
  if (themeToggle) themeToggle.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || 'dark';
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      themeToggle.textContent = next === 'dark' ? '🌙' : '☀️';
    });
  }

  // ========== SHORTCUTS TRIGGER BUTTON ==========
  var shortcutsTrigger = document.getElementById('shortcuts-trigger');
  if (shortcutsTrigger) {
    shortcutsTrigger.addEventListener('click', function () {
      showShortcuts();
    });
  }

  // ========== MODE TOGGLE (GUI / CLI) ==========
  var guiMode = document.getElementById('gui-mode');
  var cliMode = document.getElementById('cli-mode');
  var guiBtn = document.getElementById('gui-btn');
  var cliBtn = document.getElementById('cli-btn');

  window.setMode = function (mode) {
    if (mode === 'cli') {
      if (guiMode) guiMode.classList.add('hidden');
      if (cliMode) cliMode.classList.add('active');
      if (guiBtn) {
        guiBtn.classList.remove('active');
        guiBtn.setAttribute('aria-checked', 'false');
      }
      if (cliBtn) {
        cliBtn.classList.add('active');
        cliBtn.setAttribute('aria-checked', 'true');
      }
      renderCLI();
    } else {
      if (guiMode) guiMode.classList.remove('hidden');
      if (cliMode) cliMode.classList.remove('active');
      if (guiBtn) {
        guiBtn.classList.add('active');
        guiBtn.setAttribute('aria-checked', 'true');
      }
      if (cliBtn) {
        cliBtn.classList.remove('active');
        cliBtn.setAttribute('aria-checked', 'false');
      }
    }
  };

  // ========== CLI RENDERER ==========
  var cliRendered = false;
  function renderCLI() {
    if (cliRendered) return;
    cliRendered = true;
    var body = document.getElementById('terminal-body');
    if (!body) return;

    var lines = [
      { type: 'header', text: '┌─────────────────────────────────────────────────────────────┐' },
      { type: 'header', text: '│  SAM LUDWIG — Infrastructure & Systems Engineer             │' },
      { type: 'header', text: '│  Melbourne, VIC · sam.ludwig@gmail.com · 0405 993 245        │' },
      { type: 'header', text: '└─────────────────────────────────────────────────────────────┘' },
      { type: 'output', text: '' },
      { type: 'prompt', cmd: 'cat --about', output: [
        'Infrastructure and Systems Engineer with 6+ years managing',
        'enterprise-scale environments supporting 660,000+ users across',
        '1,500+ sites. Trusted by Victoria Police, Transurban, and the',
        'Department of Education Victoria to deliver automation-driven',
        'outcomes in hybrid cloud, identity, and endpoint management.',
      ]},
      { type: 'output', text: '' },
      { type: 'prompt', cmd: 'ls --metrics/', output: [
        { label: 'Years Experience', value: '6+' },
        { label: 'Users Supported', value: '660,000+' },
        { label: 'Sites & Endpoints', value: '1,500+' },
        { label: 'Uptime Achieved', value: '99.9%' },
        { label: 'Incident Reduction', value: '15%' },
        { label: 'Processing Speedup', value: '87%' },
      ]},
      { type: 'output', text: '' },
      { type: 'prompt', cmd: 'cat --certs', output: [
        '• Microsoft Certified: Azure Administrator Associate (AZ-104)',
        '• Microsoft Certified: Azure Fundamentals (AZ-900)',
        '• ITIL 4 Foundation',
        '• Coder Academy — Web Development Fast Track (2018)',
        '• Diploma of Information Technology',
      ]},
      { type: 'output', text: '' },
      { type: 'prompt', cmd: 'history --experience', output: [
        { role: 'Senior Managed Services Engineer', company: 'CapGemini (Dept of Education)', period: 'Dec 2021 — Present' },
        { role: 'L2/L3 Technical Support Engineer', company: 'Australia Post (via CapGemini)', period: '2023 — 2024' },
        { role: 'Endpoint Migration Engineer', company: 'St John of God Health Care', period: '2023' },
        { role: 'Application Support Engineer', company: 'Knosys', period: 'Dec 2020 — Dec 2021' },
        { role: 'SharePoint Developer', company: 'Engage Squared', period: 'Mar 2018 — Dec 2020' },
        { role: 'Telecommunications Technician', company: 'NBN', period: 'Oct 2016 — Nov 2017' },
      ]},
      { type: 'output', text: '' },
      { type: 'prompt', cmd: 'ls -l ~/projects/', output: [
        { label: '⚡ Job Dashboard (Featured)', value: 'github.com/Ludwixix/job-dashboard' },
        { label: '💼 365AdminApp Suite', value: 'github.com/Ludwixix/365AdminApp' },
        { label: '🧪 ServiceNow UI Engine', value: 'github.com/Ludwixix/YellowSnow' },
        { label: '🔧 M365 Diagnostic GUI', value: 'github.com/Ludwixix/pyspo-tool' },
        { label: '📚 MSP Playbook', value: 'mspplaybook.reviews' },
      ]},
      { type: 'output', text: '' },
      { type: 'prompt', cmd: 'cat --bike-lab', output: [
        'SCOTT FOIL RC & WORKSHOP ENGINEERING:',
        '  Chassis: Scott Foil RC HMX Carbon Aero Road',
        '  Drivetrain: Shimano Ultegra Di2 R8170 12-Speed Electronic',
        '  Power & Gearing: Magene spider power meter · CNC iridescent oval chainrings',
        '  Efficiency: Ceramic OSPW cage · Ultrasonic hot-melt paraffin/PTFE waxed chain',
        '  Wheelset: Magene Exar Carbon Aero Tubeless · Continental GP5000 S TR',
        '  Fit: Evolutio Physio Bike Fit · -10.2mm stem reach · 7° medial hood inward tilt',
        '  Cadence Target: ~100 RPM average pacing (dual power telemetry)',
        '',
        'Workshop Projects:',
        '  [✓] Di2 12s E-Tube BLE mapping & oval chainring ±0.2mm micro-trim indexing',
        '  [✓] Hydraulic disc 2-way mineral bleed & laser caliper alignment',
        '  [✓] Ultrasonic solvent stripping & hot-melt paraffin/PTFE waxing',
        '  [✓] Park Tool TS-2.2 truing stand spoke deflection balancing',
        '  → Workshop Gallery: https://ludwixix.github.io/scott-foil.html#my-build',
        '  → Strava Profile:   https://www.strava.com/athletes/26852234',
      ]},
      { type: 'output', text: '' },
      { type: 'prompt', cmd: 'cat --woodworking', output: [
        'TIMBER JOINERY & DRIVEWAY FABRICATION:',
        '  Primary Timbers: Tasmanian Oak (Eucalyptus regnans) · Radiata Pine · Merbau',
        '  Techniques: Dowel joinery · Pocket-hole joinery · Architectural scribing · Danish oil',
        '  Key Tools: Metabo 18V cordless · Japanese pull saw · Whetstone-honed chisels',
        '',
        'Workshop Projects:',
        '  [✓] Handcrafted Tasmanian Oak speaker risers & audio plinths',
        '  [✓] Architectural hardwood deck step & French door landing',
        '  [✓] 3-tier slatted pine entryway shoe bench with anti-racking aprons',
        '  [✓] Outdoor driveway vertical batten plinths & spacer jigs',
        '  → Workshop Archive: https://ludwixix.github.io/woodworking.html',
      ]},
      { type: 'output', text: '' },
      { type: 'prompt', cmd: 'cat --contact', output: [
        'Email:    sam.ludwig@gmail.com',
        'Phone:    0405 993 245',
        'LinkedIn: linkedin.com/in/sam-ludwig',
        'GitHub:   github.com/Ludwixix',
        'Strava:   strava.com/athletes/26852234',
        'Resume:   Sam_Ludwig_Resume.pdf',
      ]},
      { type: 'output', text: '' },
      { type: 'prompt', cmd: 'echo "Switch back to GUI mode anytime with [GUI] button or press Esc"', output: [] },
      { type: 'cursor', text: '' },
    ];

    body.innerHTML = '';
    var i = 0;
    function renderLine() {
      if (i >= lines.length) return;
      var line = lines[i];
      var div = document.createElement('div');
      div.className = 'cli-line';

      if (line.type === 'header') {
        div.innerHTML = '<span class="cli-header">' + esc(line.text) + '</span>';
      } else if (line.type === 'prompt') {
        div.innerHTML = '<span class="cli-prompt">$ </span><span class="cli-command">' + esc(line.cmd) + '</span>';
        body.appendChild(div);
        line.output.forEach(function (item) {
          var odiv = document.createElement('div');
          odiv.className = 'cli-line';
          if (typeof item === 'object') {
            if (item.role) {
              odiv.innerHTML = '<span class="cli-output">  ' + esc(item.role) + '</span> <span class="cli-highlight">@ ' + esc(item.company) + '</span> <span class="cli-output">(' + esc(item.period) + ')</span>';
            } else {
              odiv.innerHTML = '<span class="cli-output">  ' + esc(item.label) + ': </span><span class="cli-metric">' + esc(item.value) + '</span>';
            }
          } else {
            odiv.innerHTML = '<span class="cli-output">  ' + esc(item) + '</span>';
          }
          body.appendChild(odiv);
        });
        i++;
        setTimeout(renderLine, 25);
        return;
      } else if (line.type === 'cursor') {
        div.innerHTML = '<span class="cli-prompt">$ </span><span class="cli-cursor"></span>';
      } else {
        div.innerHTML = '<span class="cli-output">' + esc(line.text) + '</span>';
      }
      body.appendChild(div);
      i++;
      setTimeout(renderLine, 12);
    }
    renderLine();
  }

  function esc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // ========== SCROLL PROGRESS BAR ==========
  var progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    }, { passive: true });
  }

  // ========== ACTIVE NAV ON SCROLL ==========
  var navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
  var sections = [];
  navLinks.forEach(function (link) {
    var id = link.getAttribute('href').slice(1);
    var section = document.getElementById(id);
    if (section) sections.push({ el: section, link: link });
  });

  function updateActiveNav() {
    var scrollY = window.scrollY + 100;
    var current = null;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].el.offsetTop <= scrollY) current = sections[i];
    }
    navLinks.forEach(function (l) { l.classList.remove('active'); });
    if (current) current.link.classList.add('active');
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();

  // ========== SMOOTH SCROLL FOR NAV ==========
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // ========== IMAGE LIGHTBOX MODAL ==========
  var lightboxModal = document.getElementById('image-lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxCaption = document.getElementById('lightbox-caption');
  var lightboxClose = document.getElementById('lightbox-close');

  function openLightbox(src, caption) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = caption || 'Enlarged project photograph';
    if (lightboxCaption) lightboxCaption.textContent = caption || '';
    lightboxModal.classList.add('active');
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    if (lightboxImg) lightboxImg.src = '';
  }

  document.querySelectorAll('[data-lightbox]').forEach(function (el) {
    el.addEventListener('click', function () {
      var src = el.getAttribute('data-lightbox');
      var caption = el.getAttribute('data-caption');
      if (src) openLightbox(src, caption);
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }
  if (lightboxModal) {
    lightboxModal.addEventListener('click', function (e) {
      if (e.target === lightboxModal || e.target.classList.contains('lightbox-dialog')) {
        closeLightbox();
      }
    });
  }

  // ========== KEYBOARD SHORTCUTS MODAL ==========
  var shortcutsModal = document.getElementById('shortcuts-modal');

  function showShortcuts() {
    if (shortcutsModal) shortcutsModal.classList.add('active');
  }
  function hideShortcuts() {
    if (shortcutsModal) shortcutsModal.classList.remove('active');
  }

  if (shortcutsModal) {
    shortcutsModal.addEventListener('click', function (e) {
      if (e.target === shortcutsModal) hideShortcuts();
    });
    var closeBtn = document.getElementById('close-shortcuts');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        hideShortcuts();
      });
    }
  }

  document.addEventListener('keydown', function (e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === 'Escape') {
      if (lightboxModal && lightboxModal.classList.contains('active')) {
        closeLightbox();
      } else if (shortcutsModal && shortcutsModal.classList.contains('active')) {
        hideShortcuts();
      } else if (cliMode && cliMode.classList.contains('active')) {
        setMode('gui');
      }
      return;
    }

    switch (e.key) {
      case '?':
        showShortcuts();
        break;
      case 't':
      case 'T':
        if (!e.ctrlKey && !e.metaKey) window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'd':
      case 'D':
        if (!e.ctrlKey && !e.metaKey) window.location.href = 'Sam_Ludwig_Resume.pdf';
        break;
      case 'g':
      case 'G':
        setMode('gui');
        break;
      case 'c':
      case 'C':
        setMode('cli');
        break;
      case 'l':
      case 'L':
        if (!e.ctrlKey && !e.metaKey) {
          var toggle = document.getElementById('theme-toggle');
          if (toggle) toggle.click();
        }
        break;
    }
  });

  // ========== CONTACT FORM (FORMSPREE) ==========
  var form = document.querySelector('form[aria-label="Contact form"]');
  if (form) {
    form.addEventListener('submit', function (e) {
      var btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Sending...';
      }

      e.preventDefault();
      var formData = new FormData(form);
      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          form.innerHTML = '<div style="padding: 24px 0;"><h4 style="color:var(--accent); font-family:var(--font-mono); font-size:14px; margin-bottom:8px;">MESSAGE SENT</h4><p style="color:var(--text-muted); font-size:14px;">Thank you for getting in touch. I will respond to your email directly.</p></div>';
        } else {
          throw new Error('Form submission failed');
        }
      }).catch(function () {
        if (btn) {
          btn.disabled = false;
          btn.textContent = 'Send Message →';
        }
        alert('Could not submit form. Please email directly at sam.ludwig@gmail.com');
      });
    });
  }

})();