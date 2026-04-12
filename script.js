"use strict";

// Language switcher
    (function initLang() {
      const saved = localStorage.getItem('oksana-lang');
      if (saved === 'en') document.body.classList.add('lang-en');
    })();

    function toggleLang() {
      const isEn = document.body.classList.toggle('lang-en');
      localStorage.setItem('oksana-lang', isEn ? 'en' : 'ru');
      document.documentElement.lang = isEn ? 'en' : 'ru';
    }

    document.getElementById('langToggle').addEventListener('click', toggleLang);
    document.getElementById('langToggleMobile').addEventListener('click', toggleLang);

    // Navigation scroll
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    // Scroll reveal
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    revealEls.forEach(el => observer.observe(el));

    // Mobile menu
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileClose = document.getElementById('mobileClose');

    function closeMobileMenu() {
      mobileMenu.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    }

    function openMobileMenu() {
      mobileMenu.classList.add('open');
      navToggle.classList.add('active');
      navToggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('menu-open');
    }

    navToggle.addEventListener('click', () => {
      if (mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    mobileClose.addEventListener('click', closeMobileMenu);

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
    // Booking modal
    const modal = document.getElementById('bookingModal');
    const modalClose = document.getElementById('modalClose');

    function openModal() {
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    // Modal form submit
    function handleModalSubmit(e) {
      e.preventDefault();
      const btn = e.target.querySelector('.modal-submit');
      const orig = btn.innerHTML;
      btn.innerHTML = '<span class="ru">Отправлено ✓</span><span class="en">Sent ✓</span>';
      btn.style.background = '#5a8a5a';
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.background = '';
        closeModal();
      }, 2500);
    }

    // Contact form
    function handleSubmit(e) {
      e.preventDefault();
      const btn = e.target.querySelector('.form-submit');
      const orig = btn.innerHTML;
      btn.innerHTML = '<span class="ru">Отправлено ✓</span><span class="en">Sent ✓</span>';
      btn.style.background = '#5a8a5a';
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.style.background = '';
        e.target.reset();
      }, 3000);
    }
