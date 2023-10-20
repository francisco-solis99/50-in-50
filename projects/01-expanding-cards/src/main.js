const cardsList = document.querySelector('.cards__list');
const cards = document.querySelectorAll('.card__item');

cardsList.addEventListener('click', (e) => {
  if (!e.target.matches('.card')) return;
  expandCard(e.target.parentElement);
});

function expandCard (card) {
  // Styles of the card to expand
  card.style.flex = '10';
  setTimeout(() => {
    card.querySelector('figcaption').style.opacity = '1';
  }, 600);

  // Unexpand the rest of the cards
  const cardToExpandIndex = Number(card.dataset.index);
  cards.forEach((cardItem, index) => {
    if (cardToExpandIndex === index) return;
    cardItem.style.flex = '1';
    cardItem.querySelector('figcaption').style.opacity = '0';
  });
}
