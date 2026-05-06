"use strict";

// Language switcher
    const titles = {
      ru: 'Оксана Иванова — Клинический и семейный психолог СПб | Консультация онлайн',
      en: 'Oksana Ivanova — Clinical & Family Psychologist SPb | Online Consultation'
    };
    const metaDescs = {
      ru: 'Клинический и семейный психолог в Санкт-Петербурге (СПб) и онлайн. Оксана Иванова. Помощь при тревоге, выгорании, кризисах в отношениях. Опыт 17 лет. Запишитесь на консультацию!',
      en: 'Clinical & family psychologist in Saint Petersburg (SPb) and online. Oksana Ivanova. Support for anxiety, burnout, relationship crises. 17 years experience. Book a consultation!'
    };

    (function initLang() {
      const saved = localStorage.getItem('oksana-lang');
      const metaDescEl = document.querySelector('meta[name="description"]');
      if (saved === 'en') {
        document.body.classList.add('lang-en');
        document.documentElement.lang = 'en';
        document.title = titles.en;
        if (metaDescEl) metaDescEl.content = metaDescs.en;
      } else {
        document.documentElement.lang = 'ru';
        document.title = titles.ru;
        if (metaDescEl) metaDescEl.content = metaDescs.ru;
      }
    })();

    function toggleLang() {
      const isEn = document.body.classList.toggle('lang-en');
      localStorage.setItem('oksana-lang', isEn ? 'en' : 'ru');
      document.documentElement.lang = isEn ? 'en' : 'ru';
      document.title = isEn ? titles.en : titles.ru;
      const metaDescEl = document.querySelector('meta[name="description"]');
      if (metaDescEl) metaDescEl.content = isEn ? metaDescs.en : metaDescs.ru;
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

    async function sendToBackend(formElement, btnElement) {
      const origHtml = btnElement.innerHTML;
      btnElement.innerHTML = '<span class="ru">Отправка...</span><span class="en">Sending...</span>';
      btnElement.style.opacity = '0.8';

      const formData = new FormData(formElement);
      const object = Object.fromEntries(formData);
      
      // Get human readable topic instead of value
      const selectEl = formElement.querySelector('select[name="topic"]');
      if (selectEl && selectEl.options[selectEl.selectedIndex]) {
          object.topic = selectEl.options[selectEl.selectedIndex].text;
      }

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(object)
        });
        const json = await response.json();
        
        if (response.status === 200) {
          btnElement.innerHTML = '<span class="ru">Отправлено ✓</span><span class="en">Sent ✓</span>';
          btnElement.style.background = '#5a8a5a';
          btnElement.style.opacity = '1';
          return true;
        } else {
          console.error("Backend Error:", json);
          btnElement.innerHTML = '<span class="ru">Ошибка ✕</span><span class="en">Error ✕</span>';
          btnElement.style.background = '#a84a4a';
          return false;
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        btnElement.innerHTML = '<span class="ru">Ошибка ✕</span><span class="en">Error ✕</span>';
        btnElement.style.background = '#a84a4a';
        return false;
      }
    }

    // Modal form submit
    async function handleModalSubmit(e) {
      e.preventDefault();
      const btn = e.target.querySelector('.modal-submit');
      const origHtml = btn.innerHTML;
      
      const success = await sendToBackend(e.target, btn);
      
      setTimeout(() => {
        btn.innerHTML = origHtml;
        btn.style.background = '';
        btn.style.opacity = '1';
        if (success) {
          e.target.reset();
          closeModal();
        }
      }, 3000);
    }

    // Contact form
    async function handleSubmit(e) {
      e.preventDefault();
      const btn = e.target.querySelector('.form-submit');
      const origHtml = btn.innerHTML;
      
      const success = await sendToBackend(e.target, btn);
      
      setTimeout(() => {
        btn.innerHTML = origHtml;
        btn.style.background = '';
        btn.style.opacity = '1';
        if (success) e.target.reset();
      }, 3000);
    }

    // Native Video Player Logic
    document.querySelectorAll('.video-wrapper').forEach(wrapper => {
      const video = wrapper.querySelector('.custom-video');
      const btn = wrapper.querySelector('.play-pause-btn');
      const playIcon = wrapper.querySelector('.play-icon');
      const overlay = wrapper.querySelector('.video-overlay-gradient');
      
      if (!video || !btn) return;

      wrapper.addEventListener('click', () => {
        if (video.paused) {
          // Pause all other videos
          document.querySelectorAll('.custom-video').forEach(v => {
            if (v !== video && !v.paused) {
              v.pause();
              const otherWrapper = v.closest('.video-wrapper');
              if (otherWrapper) {
                otherWrapper.querySelector('.play-icon').parentElement.style.opacity = '1';
                otherWrapper.querySelector('.video-overlay-gradient').style.opacity = '1';
              }
            }
          });
          
          video.play().then(() => {
            btn.style.opacity = '0';
            if (overlay) overlay.style.opacity = '0';
          }).catch(e => console.log("Video play failed:", e));
        } else {
          video.pause();
          btn.style.opacity = '1';
          if (overlay) overlay.style.opacity = '1';
        }
      });

      video.addEventListener('ended', () => {
        btn.style.opacity = '1';
        if (overlay) overlay.style.opacity = '1';
      });
    });

    // Video Carousel Scroll Logic
    const videoCarousel = document.getElementById('videoCarousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (videoCarousel && prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        const itemWidth = videoCarousel.querySelector('.video-wrapper').clientWidth;
        videoCarousel.scrollBy({ left: -(itemWidth + 24), behavior: 'smooth' }); // 24px is the gap (1.5rem)
      });

      nextBtn.addEventListener('click', () => {
        const itemWidth = videoCarousel.querySelector('.video-wrapper').clientWidth;
        videoCarousel.scrollBy({ left: itemWidth + 24, behavior: 'smooth' });
      });
    }
