const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-list');
const topbgchange = document.getElementById('top-bgchange');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
  topbgchange.classList.toggle('showbg');
});