/* ============================================
   Du vent dans les pages — Scripts
============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // Mobile nav toggle
    // ============================================
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('open');
            navToggle.classList.toggle('active');
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
                navToggle.classList.remove('active');
            });
        });
    }

    // ============================================
    // Header scroll
    // ============================================
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ============================================
    // Scroll Reveal
    // ============================================
    const revealElements = document.querySelectorAll('[data-reveal]');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay;
                if (delay !== undefined) {
                    entry.target.style.transitionDelay = `${parseInt(delay) * 0.15}s`;
                }
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // ============================================
    // Book catalogue filter
    // ============================================
    const catFilters = document.querySelectorAll('.cat-filter');
    const bookCards = document.querySelectorAll('.book-card');

    catFilters.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            catFilters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            bookCards.forEach(card => {
                const genre = card.dataset.genre;
                if (filter === 'all' || genre === filter) {
                    card.style.display = '';
                    card.style.animation = 'fadeInUp 0.4s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ============================================
    // Toast notifications
    // ============================================
    function showToast(message) {
        const existing = document.querySelector('.toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
            </svg>
            ${message}`;
        document.body.appendChild(toast);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => toast.classList.add('show'));
        });

        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 400);
        }, 2500);
    }

    // Expose toast globally
    window.showToast = showToast;

    // ============================================
    // Fade-in keyframe injection
    // ============================================
    if (!document.getElementById('dvdlp-animations')) {
        const style = document.createElement('style');
        style.id = 'dvdlp-animations';
        style.textContent = `
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(16px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    }

});
