import sounds from './sounds.json' assert { type:'json' }

const soundsCardsWrapper = document.querySelector('.sounds-cards__wrapper');

function createSoundCard (sound) {
  const card = document.createElement('article');
  card.classList.add('sound-card')
  card.textContent = sound.name
  return card
}

const soundCards = sounds.map(createSoundCard)

soundsCardsWrapper.append(...soundCards)