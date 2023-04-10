const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});