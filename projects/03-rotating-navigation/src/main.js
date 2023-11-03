const menuBtn = document.querySelector('.menu__btn');
const wrapperContent = document.querySelector('.wrapper');

menuBtn.addEventListener('click', () => {
  wrapperContent.classList.toggle('menu__show-nav');
});
