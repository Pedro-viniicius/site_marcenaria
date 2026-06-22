(function () {
  'use strict';

  const WHATSAPP_NUMBER = '553599817719';
  const DEFAULT_MESSAGE =
    'Olá, vim pelo site da Queiroz Marcenaria e Carpintaria e gostaria de conversar sobre um projeto em madeira.';

  function buildWhatsAppUrl(project) {
    const message = project
      ? `${DEFAULT_MESSAGE}\n\nTenho interesse em: ${project}.`
      : DEFAULT_MESSAGE;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  function setupWhatsAppLinks() {
    const links = document.querySelectorAll('[data-whatsapp]');

    links.forEach((link) => {
      const project = link.getAttribute('data-project');
      link.setAttribute('href', buildWhatsAppUrl(project));
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener');
    });
  }

  function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener('click', function (event) {
        const href = link.getAttribute('href');

        if (!href || href === '#') {
          return;
        }

        const target = document.querySelector(href);

        if (!target) {
          return;
        }

        event.preventDefault();

        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        closeMobileMenu();
      });
    });
  }

  function getMenuElements() {
    const toggle = document.querySelector(
      '[data-menu-toggle], .menu-toggle, .nav-toggle, .mobile-menu-toggle, .header-menu-button'
    );

    const menu = document.querySelector(
      '[data-menu], .main-nav, .nav-menu, .header-nav, nav'
    );

    return { toggle, menu };
  }

  function closeMobileMenu() {
    const { toggle, menu } = getMenuElements();

    if (menu) {
      menu.classList.remove('is-open', 'open', 'active');
    }

    if (toggle) {
      toggle.classList.remove('is-open', 'open', 'active');
      toggle.setAttribute('aria-expanded', 'false');
    }

    document.body.classList.remove('menu-open');
  }

  function setupMobileMenu() {
    const { toggle, menu } = getMenuElements();

    if (!toggle || !menu) {
      return;
    }

    toggle.setAttribute('aria-expanded', 'false');

    toggle.addEventListener('click', function () {
      const isOpen =
        menu.classList.contains('is-open') ||
        menu.classList.contains('open') ||
        menu.classList.contains('active');

      menu.classList.toggle('is-open', !isOpen);
      toggle.classList.toggle('is-open', !isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
      toggle.setAttribute('aria-expanded', String(!isOpen));
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    });
  }

  function setupFaqAccordion() {
    const detailItems = document.querySelectorAll('details.faq-item');

    detailItems.forEach((item) => {
      item.addEventListener('toggle', function () {
        if (!item.open) {
          return;
        }

        detailItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.open = false;
          }
        });
      });
    });

    const faqButtons = document.querySelectorAll(
      '[data-faq-question], .faq-question'
    );

    faqButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const item = button.closest('.faq-item');

        if (!item || item.tagName.toLowerCase() === 'details') {
          return;
        }

        item.classList.toggle('is-open');
      });
    });
  }

  function setupRevealOnScroll() {
    const elements = document.querySelectorAll('.reveal');

    if (!elements.length) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => {
        element.classList.add('is-visible', 'visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible', 'visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));
  }

  function setupHeaderOnScroll() {
    const header = document.querySelector('.site-header, header');

    if (!header) {
      return;
    }

    function updateHeaderState() {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    }

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
  }

  function setupServiceMedia() {
    const figures = document.querySelectorAll('.service-media[data-inspo]');

    if (!figures.length) {
      return;
    }

    figures.forEach((figure) => {
      const img = figure.querySelector('.service-media-img');

      if (!img) {
        return;
      }

      // A imagem aparece por padrão (assim ela é carregada normalmente).
      // Se o arquivo faltar ou falhar ao carregar, escondemos a imagem
      // quebrada e o bloco de espaço reservado (placeholder) aparece atrás.
      function showPlaceholder() {
        figure.classList.add('has-error');
      }

      // Imagem que já terminou de carregar com falha (naturalWidth === 0).
      if (img.complete && img.naturalWidth === 0) {
        showPlaceholder();
      }

      img.addEventListener('error', showPlaceholder);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setupWhatsAppLinks();
    setupSmoothScroll();
    setupMobileMenu();
    setupFaqAccordion();
    setupRevealOnScroll();
    setupHeaderOnScroll();
    setupServiceMedia();
  });
})();
