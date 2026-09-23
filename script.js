const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#nav-principal');

menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Abrir menu' : 'Fechar menu');
  menu.classList.toggle('open', !expanded);
});

menu.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
    menu.classList.remove('open');
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll(
  '.hero-copy, .hero-art, .service-card, .about-heading, .about-main, .about-study, .about-principles article, .examples-heading, .example-list article, .participant-panel, .participant-photo, .participant-info-heading, .participant-faq details, .contact-intro, .contact-details, .map-frame'
);

if (!reduceMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('motion-enabled');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  revealTargets.forEach((element, index) => {
    element.dataset.reveal = '';
    element.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
    revealObserver.observe(element);
  });
}
