const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');
const menuLinks = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
});

menuLinks.forEach(elem => {
  elem.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});
