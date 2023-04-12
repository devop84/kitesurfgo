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
let startY = 0;
let endY = 0;
let direction = '';
const threshold = 50; // minimum distance required for swipe to be registered

// const myDiv = document.getElementById('myDiv');

document.addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY;
});

document.addEventListener('touchmove', (e) => {
  endY = e.touches[0].clientY;
  direction = endY - startY > 0 ? 'down' : 'up';
});

document.addEventListener('touchend', (e) => {
  const distance = Math.abs(startY - endY);
  
  if (direction === 'up' && distance > threshold) {
    fullscreen.style.top = '-70px';
  } else if (direction === 'down' && distance > threshold) {
    fullscreen.style.top = '0px';
  }
});