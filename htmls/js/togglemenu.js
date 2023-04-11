const showmenu = document.getElementById('showmenu');
const closemenu = document.getElementById('closemenu');
const fullscreen = document.getElementById('fullscreen');

showmenu.addEventListener('click', () => {
  fullscreen.classList.add('expand');
  closemenu.classList.add('display');
  showmenu.classList.add('display');
});
closemenu.addEventListener('click', () => {
  fullscreen.classList.remove('expand');
  closemenu.classList.remove('display');
  showmenu.classList.remove('display');
});


window.onscroll = function() {
  
  const currentScrollPos = window.pageYOffset;
  const height = (window.innerHeight * 0.8);

  console.log(currentScrollPos);

  if (currentScrollPos >= height) {
    fullscreen.classList.add('display-bg');
  }
  else {
    fullscreen.classList.remove('display-bg');
  }
};

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