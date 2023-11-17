import sounds from './sounds.json' assert { type:'json' }
const soundsCardsWrapper = document.querySelector('.sounds-cards__wrapper');


function createSoundCard (sound) {
  const {name: soundName, file: soundFile} = sound
  const card = document.createElement('article');
  card.classList.add('sound-card')
  card.textContent = soundName

  card.addEventListener('click', () => {
    const audio = new Audio()
    audio.preload = 'auto';
    audio.src = `../public/sounds/${soundFile}`
    audio.currentTime = 0;
    audio.play();
  })

  return card
}

const soundCards = sounds.map(createSoundCard)
soundsCardsWrapper.append(...soundCards)