import confetti from 'canvas-confetti';

// DOM references
const wrapper = document.querySelector('main'); ;

// Listen the keydown event
document.addEventListener('keydown', (event) => {
  const { key, keyCode, code } = event;
  showKeyCodeInfo({ key, keyCode, code });
  throwConfetti(key);
});

// Throw confetti when type the objective word
const cacheKeys = [];
const WORDS = ['js', 'paco', 'confetti'];
const MAX_LENGTHWORD = Math.max(...WORDS.map(word => word.length));

const cleanCacheKeys = () => {
  cacheKeys.length = 0;
};

function throwConfetti (keyPressed) {
  cacheKeys.push(keyPressed);
  const cacheKeysStr = cacheKeys.join('');
  // if the register length is more longer than the max longer from the words or some word does not begin with the current register is time to clean the register
  if (cacheKeysStr.length > MAX_LENGTHWORD || !WORDS.some(word => word.startsWith(cacheKeysStr))) {
    cleanCacheKeys();
    return;
  }
  // Check if the word in the cache register is equal to any word in the array of words to throw confetti
  if (WORDS.includes(cacheKeysStr)) {
    confetti();
    cleanCacheKeys();
  }
}

// Show the key information
function showKeyCodeInfo (info) {
  const squaresInfo = Object.entries(info)
    .map(([eName, eValue]) => createSquareInfo({ title: eName, value: eValue }));

  const wrapperSquares = document.createElement('div');
  wrapperSquares.classList.add('squares__wrapper');
  wrapperSquares.append(...squaresInfo);
  wrapper.replaceChildren(wrapperSquares);
}

// Create the key info DOM component
function createSquareInfo ({ title, value }) {
  const square = document.createElement('div');
  square.classList.add('square-info');
  square.innerHTML = `
    <span class="square__title">event.${title}</span>
    <div class="square__value">${value}</div>
  `;
  return square;
}

// Alternative with just one WORD
// function throwConfetti(){
// const indexLetter = WORD.indexOf(keyPressed, cacheKeys.length);

//   if (indexLetter < 0) cleanCacheKeys();

//   if (indexLetter === cacheKeys.length) {
//     cacheKeys.push(keyPressed);
//     if (cacheKeys.join('') === WORD) {
//       confetti();
//       cleanCacheKeys();
//     };
//   }
// }
