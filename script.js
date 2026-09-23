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
