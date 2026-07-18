// main.js

// Theme toggle — toggles html.light class (dark is default)
const toggleBtn = document.getElementById('theme-toggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const isLight = document.documentElement.classList.toggle('light');
    try {
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    } catch (e) {}
  });
}

// Scroll reveal — adds .visible to .reveal and .reveal-stagger elements
const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// Cursor glow on bento and project cards
document.querySelectorAll('.bento-card, .project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', ((e.clientX - rect.left) / rect.width * 100) + '%');
    card.style.setProperty('--mouse-y', ((e.clientY - rect.top) / rect.height * 100) + '%');
  });
});

// Active nav highlighting via IntersectionObserver
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-pill a');
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const match = document.querySelector(`.nav-pill a[href="#${entry.target.id}"]`);
      if (match) match.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(s => navObserver.observe(s));

// Earlier roles toggle
const earlierBtn = document.getElementById('toggle-earlier');
const earlierRoles = document.getElementById('earlier-roles');
if (earlierBtn && earlierRoles) {
  earlierBtn.addEventListener('click', () => {
    const isExpanded = earlierRoles.classList.toggle('expanded');
    earlierBtn.textContent = isExpanded ? 'Hide earlier roles ↑' : 'Show earlier roles ↓';
    earlierBtn.setAttribute('aria-expanded', isExpanded);
  });
}
