import sounds from './sounds.json' assert { type:'json' }
const soundsCardsWrapper = document.querySelector('.sounds-cards__wrapper');

function createSoundCard (sound, audio) {
  const card = document.createElement('article');
  card.classList.add('sound-card')
  card.textContent = sound.name

  card.addEventListener('click', () => {
    audio.src = `/sounds/${sound.file}`
    audio.currentTime = 0;
    audio.play();
  })

  return card
}

const audio = new Audio()
audio.preload = 'auto'
audio.volume = 0.3;

const soundCards = sounds.map(sound => createSoundCard(sound, audio))
soundsCardsWrapper.append(...soundCards)