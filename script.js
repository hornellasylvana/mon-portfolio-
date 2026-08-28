const burgerBtn = document.getElementById('burger-btn');
const navMenu = document.getElementById('nav-menu');

// Ouvrir/Fermer le menu au clic
burgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  burgerBtn.classList.toggle('open');
});

// Fermer le menu au clic sur un lien et faire défiler jusqu'à la section
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    burgerBtn.classList.remove('open');
  });
});