// main.js

function setupThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

function setupNavigation() {
    const nav = document.getElementById('main-nav');
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // Blur on scroll
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu toggle
    if (mobileToggle && mobileMenu) {
        const mobileLinks = document.querySelectorAll('.mobile-nav-link');

        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            const isOpen = mobileMenu.classList.contains('open');
            mobileToggle.setAttribute('aria-expanded', isOpen);
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.remove('open'));
        });
    }

    // Intersection Observer for highlight
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links .nav-link');

    const observerOptions = {
        root: null,
        rootMargin: '-60px 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const active = document.querySelector(`.nav-links .nav-link[href="#${entry.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

function setupExperienceToggle() {
    const btn = document.getElementById('toggle-experience-btn');
    const earlierRoles = document.getElementById('earlier-roles');

    if (btn && earlierRoles) {
        btn.addEventListener('click', () => {
            const isExpanded = earlierRoles.classList.toggle('expanded');
            btn.innerHTML = isExpanded ? 'Hide earlier roles &uarr;' : 'Show earlier roles &darr;';
        });
    }
}

function setupScrollReveal() {
    // Exclude #hero — it's above the fold on load
    const sections = document.querySelectorAll('section:not(#hero)');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // fire once
            }
        });
    }, {
        threshold: 0.08,        // trigger when 8% of section is visible
        rootMargin: '0px 0px -40px 0px'  // 40px before bottom of viewport
    });

    sections.forEach(section => {
        section.classList.add('reveal');
        observer.observe(section);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupThemeToggle();
    setupNavigation();
    setupExperienceToggle();
    setupScrollReveal();
});
