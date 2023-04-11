const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});

let prevScrollpos = window.pageYOffset;
let isScrollingUp;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  isScrollingUp = prevScrollpos > currentScrollPos;
  if (isScrollingUp) {
    document.querySelector('header').style.top = '0';
    menuToggle.classList.add('active');
    nav.classList.add('active');
  } else {
    document.querySelector('header').style.top = '-70px';
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
  }
  prevScrollpos = currentScrollPos;
};
