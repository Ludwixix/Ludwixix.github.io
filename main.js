(function () {
'use strict';
var themeToggle = document.getElementById('theme-toggle');
var savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
if (themeToggle) themeToggle.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
if (themeToggle) {
themeToggle.addEventListener('click', function () {
var current = document.documentElement.getAttribute('data-theme');
var next = current === 'dark' ? 'light' : 'dark';
document.documentElement.setAttribute('data-theme', next);
localStorage.setItem('theme', next);
themeToggle.textContent = next === 'dark' ? '🌙' : '☀️';
});
}
const guiMode = document.getElementById('gui-mode');
const cliMode = document.getElementById('cli-mode');
const guiBtn = document.getElementById('gui-btn');
const cliBtn = document.getElementById('cli-btn');
window.setMode = function (mode) {
if (mode === 'cli') {
guiMode.classList.add('hidden');
cliMode.classList.add('active');
guiBtn.classList.remove('active');
cliBtn.classList.add('active');
guiBtn.setAttribute('aria-checked', 'false');
cliBtn.setAttribute('aria-checked', 'true');
renderCLI();
} else {
guiMode.classList.remove('hidden');
cliMode.classList.remove('active');
guiBtn.classList.add('active');
cliBtn.classList.remove('active');
guiBtn.setAttribute('aria-checked', 'true');
cliBtn.setAttribute('aria-checked', 'false');
}
};
function renderCLI() {
const body = document.getElementById('terminal-body');
if (!body) return;
const lines = [
{ type: 'header', text: '╔══════════════════════════════════════════════════════════╗' },
{ type: 'header', text: '║  SAM LUDWIG — Infrastructure & M365 Engineer           ║' },
{ type: 'header', text: '║  Melbourne, VIC · sam.ludwig@gmail.com                 ║' },
{ type: 'header', text: '╚══════════════════════════════════════════════════════════╝' },
{ type: 'output', text: '' },
{ type: 'prompt', cmd: 'cat --about', output: [
'Infrastructure and M365 Engineer with 7+ years bridging',
'physical infrastructure and large-scale cloud environments.',
'Trusted by Victoria Police, Transurban, and the Dept of',
'Education to manage complex infrastructure at scale.',
]},
{ type: 'output', text: '' },
{ type: 'prompt', cmd: 'ls --metrics/', output: [
{ label: 'Users Supported', value: '660,000+' },
{ label: 'Uptime Achieved', value: '99.9%' },
{ label: 'Sites Managed', value: '1,500+' },
{ label: 'Repeat Incidents Reduced', value: '15%' },
{ label: 'Processing Speedup', value: '87%' },
{ label: 'Years Experience', value: '7+' },
]},
{ type: 'output', text: '' },
{ type: 'prompt', cmd: 'cat --certs', output: [
'🏅 Azure Administrator Associate (AZ-104)',
'☁️  Azure Fundamentals (AZ-900)',
'📋 ITIL 4 Foundation',
'🔄 Certified Scrum Master (CSM)',
'🎓 Coder Academy — Web Dev Bootcamp (2018)',
'📚 Diploma of Information Technology',
]},
{ type: 'output', text: '' },
{ type: 'prompt', cmd: 'grep -r "skills" --cloud/', output: [
'SharePoint Online ............ Expert',
'Exchange Hybrid .............. Expert',
'Entra ID / Azure AD .......... Advanced',
'Intune (MDM/MAM) ............. Expert',
'Windows Autopilot ............ Expert',
'PowerShell (Advanced/PnP) .... Expert',
'Active Directory ............. Expert',
'ITIL 4 ....................... Certified',
'ServiceNow ................... Advanced',
]},
{ type: 'output', text: '' },
{ type: 'prompt', cmd: 'cat --looking-for', output: [
'🟢 STATUS: OPEN TO WORK',
'',
'Target Roles:',
'  → Managed Services Engineer',
'  → IT Service Desk Lead',
'  → Systems Engineer',
'  → Infrastructure Engineer',
'  → Technical Consultant',
'  → M365 / SharePoint Engineer',
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
{ type: 'prompt', cmd: 'cat --contact', output: [
'✉️  sam.ludwig@gmail.com',
'💼 linkedin.com/in/sam-ludwig',
'🐙 github.com/Ludwixix',
'📄 Download Resume: SamLudwigResume.pdf',
]},
{ type: 'output', text: '' },
{ type: 'prompt', cmd: 'echo "Type a command or switch to GUI mode ↑"', output: [] },
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
setTimeout(renderLine, 30);
return;
} else if (line.type === 'cursor') {
div.innerHTML = '<span class="cli-prompt">$ </span><span class="cli-cursor"></span>';
} else {
div.innerHTML = '<span class="cli-output">' + esc(line.text) + '</span>';
}
body.appendChild(div);
i++;
setTimeout(renderLine, 15);
}
renderLine();
}
function esc(s) {
return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
var revealEls = document.querySelectorAll('.reveal');
var observer = new IntersectionObserver(function (entries) {
entries.forEach(function (entry) {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
entry.target.querySelectorAll('.skill-fill[data-width]').forEach(function (bar) {
bar.style.width = bar.dataset.width + '%';
});
entry.target.querySelectorAll('.fact-number[data-count]').forEach(function (el) {
animateCounter(el);
});
}
});
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
revealEls.forEach(function (el) { observer.observe(el); });
function animateCounter(el) {
var target = parseInt(el.dataset.count);
var suffix = el.dataset.suffix || '';
var duration = 1500;
var start = performance.now();
function tick(now) {
var progress = Math.min((now - start) / duration, 1);
var eased = 1 - Math.pow(1 - progress, 3);
var current = Math.round(target * eased);
el.textContent = current.toLocaleString() + suffix;
if (progress < 1) requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
}
var egg = document.getElementById('easter-egg');
if (egg) {
var clickCount = 0;
var quotes = [
'🚴 Keep pedalling!',
'☕ Powered by caffeine and PowerShell',
'🤖 Beep boop, I automate things',
'🏆 99.9% uptime, 100% vibes',
'🎮 This is not a game... or is it?',
'🔧 Have you tried turning it off and on again?',
'🚀 To infinity and the cloud!',
];
egg.addEventListener('click', function () {
clickCount++;
var msg = quotes[(clickCount - 1) % quotes.length];
var toast = document.createElement('div');
toast.style.cssText = 'position:fixed;bottom:60px;left:20px;background:#111;color:#00ff88;padding:12px 20px;border-radius:8px;border:1px solid #00ff8833;font-family:var(--font-mono);font-size:13px;z-index:1000;animation:fadeUp 0.3s forwards;opacity:0;';
toast.textContent = msg;
document.body.appendChild(toast);
setTimeout(function () { toast.style.opacity = '1'; }, 10);
setTimeout(function () { toast.style.opacity = '0'; setTimeout(function () { toast.remove(); }, 300); }, 2500);
});
egg.addEventListener('keydown', function (e) {
if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); egg.click(); }
});
}
var navLinks = document.querySelectorAll('nav a[href^="#"]');
var sections = [];
navLinks.forEach(function (link) {
var id = link.getAttribute('href').slice(1);
var section = document.getElementById(id);
if (section) sections.push({ el: section, link: link });
});
function updateActiveNav() {
var scrollY = window.scrollY + 120;
var current = null;
for (var i = 0; i < sections.length; i++) {
if (sections[i].el.offsetTop <= scrollY) current = sections[i];
}
navLinks.forEach(function (l) { l.classList.remove('active'); });
if (current) current.link.classList.add('active');
}
window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();
document.querySelectorAll('nav a').forEach(function (a) {
a.addEventListener('click', function (e) {
var href = a.getAttribute('href');
if (href && href.startsWith('#')) {
e.preventDefault();
var target = document.querySelector(href);
if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
});
});
var backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
window.addEventListener('scroll', function () {
if (window.scrollY > 500) {
backToTopBtn.classList.add('visible');
} else {
backToTopBtn.classList.remove('visible');
}
});
backToTopBtn.addEventListener('click', function () {
window.scrollTo({ top: 0, behavior: 'smooth' });
});
}
var shortcutsModal = document.getElementById('shortcuts-modal');
function showShortcuts() {
if (shortcutsModal) shortcutsModal.classList.add('visible');
}
function hideShortcuts() {
if (shortcutsModal) shortcutsModal.classList.remove('visible');
}
if (shortcutsModal) {
shortcutsModal.addEventListener('click', function (e) {
if (e.target === shortcutsModal) hideShortcuts();
});
}
document.addEventListener('keydown', function (e) {
if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
if (e.key === 'Escape') {
if (shortcutsModal && shortcutsModal.classList.contains('visible')) {
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
if (!e.ctrlKey && !e.metaKey) window.location.href = 'SamLudwigResume.pdf';
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
var form = document.querySelector('form[aria-label="Contact form"]');
if (form) {
form.setAttribute('action', 'https:
form.setAttribute('method', 'POST');
form.addEventListener('submit', function (e) {
var valid = true;
var fields = form.querySelectorAll('input[required], textarea[required]');
fields.forEach(function (field) {
var group = field.closest('.form-group');
if (!field.value.trim()) {
if (group) group.classList.add('error');
valid = false;
} else {
if (group) group.classList.remove('error');
}
if (field.type === 'email' && field.value) {
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(field.value)) {
if (group) group.classList.add('error');
valid = false;
}
}
});
if (!valid) {
e.preventDefault();
return;
}
var btn = form.querySelector('button[type="submit"]');
if (btn) {
btn.disabled = true;
btn.innerHTML = '<span>⏳</span> Sending...';
}
e.preventDefault();
var formData = new FormData(form);
fetch(form.action, {
method: 'POST',
body: formData,
headers: { 'Accept': 'application/json' }
}).then(function (response) {
if (response.ok) {
form.innerHTML = '<div style="text-align:center;padding:2rem 0;">
<div style="font-size:3rem;margin-bottom:1rem;">✅</div>
<h3 style="color:var(--accent);margin-bottom:0.5rem;">Message Sent!</h3>
<p style="color:var(--text-muted);">Thanks for reaching out. I\'ll get back to you within 24 hours.</p>
</div>';
} else {
throw new Error('Form submission failed');
}
}).catch(function () {
if (btn) {
btn.disabled = false;
btn.innerHTML = '<span>🚀</span> Send Message';
}
alert('Something went wrong. Please try emailing me directly at sam.ludwig@gmail.com');
});
});
}
function calculateReadingTime() {
var mainContent = document.getElementById('gui-mode');
if (!mainContent) return;
var text = mainContent.textContent || mainContent.innerText;
var wordCount = text.split(/\s+/).filter(function (w) { return w.length > 0; }).length;
var readingTime = Math.max(1, Math.ceil(wordCount / 200));
var el = document.getElementById('reading-time');
if (el) el.textContent = '📖 Estimated reading time: ~' + readingTime + ' minutes';
}
calculateReadingTime();
(function () {
var nav = document.querySelector('nav');
if (!nav) return;
var hamburger = document.createElement('button');
hamburger.className = 'nav-hamburger';
hamburger.setAttribute('aria-label', 'Toggle navigation');
hamburger.setAttribute('aria-expanded', 'false');
hamburger.innerHTML = '<span></span><span></span><span></span>';
nav.parentNode.insertBefore(hamburger, nav);
hamburger.addEventListener('click', function () {
var expanded = hamburger.getAttribute('aria-expanded') === 'true';
hamburger.setAttribute('aria-expanded', String(!expanded));
nav.classList.toggle('nav-open');
});
nav.querySelectorAll('a').forEach(function (a) {
a.addEventListener('click', function () {
hamburger.setAttribute('aria-expanded', 'false');
nav.classList.remove('nav-open');
});
});
});
})();