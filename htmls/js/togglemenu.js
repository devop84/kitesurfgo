const menuToggle = document.getElementById('menu-toggle');
const topNav = document.getElementById('top-nav');
const topSection = document.getElementById('top')

menuToggle.addEventListener('click', () => {
  topNav.classList.toggle('display-block');
  topNav.classList.toggle('display-bg');
  topSection.classList.toggle('display-bg');
});

// let prevScrollpos = window.pageYOffset;
// let isScrollingUp;
// window.onscroll = function() {
//   const currentScrollPos = window.pageYOffset;
//   isScrollingUp = prevScrollpos > currentScrollPos;
//   if (isScrollingUp) {
//     topbgchange.classList.add('top-hide');
//   } else {
//     topbgchange.classList.remove('top-hide');
//   }
//   prevScrollpos = currentScrollPos;
// };