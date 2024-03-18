// NAV-BAR
const toggleMenu = document.getElementsByClassName('toggle-menu')[0]
const links = document.getElementsByClassName('links')[0]

toggleMenu.addEventListener('click', () => {
    links.classList.toggle('active')
});
// BUTTON ANIMATION
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
