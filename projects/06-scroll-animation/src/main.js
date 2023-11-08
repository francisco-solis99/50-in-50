// Doing with the intersection observer
const cards = document.querySelectorAll('.card');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: '0.5'
};

const observer = new IntersectionObserver((entries) => { // eslint-disable-line
  entries.forEach((entry) => {
    entry.target.classList.toggle('show', entry.isIntersecting);
    if (entry.isIntersecting) {
      // Unobserve just once
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

cards.forEach(card => observer.observe(card));
