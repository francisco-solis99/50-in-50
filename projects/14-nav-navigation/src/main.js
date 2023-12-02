const buttonNav = document.querySelector('.close__button');
const nav = document.querySelector('nav');

buttonNav.addEventListener('click', () => {
  nav.classList.toggle('active');
});
