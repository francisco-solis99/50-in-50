const loaderElement = document.querySelector('.loading');
const backgroundElement = document.querySelector('.background');

let counter = 0;
const initialBlurValue = Number(backgroundElement.dataset.initialBlur);

const intervalId = setInterval(() => {
  function updateDOM () {
    counter += 1;
    if (counter > 100) {
      loaderElement.style.display = 'none';
      clearInterval(intervalId);
      return;
    }
    const blurValue = initialBlurValue - (counter * initialBlurValue / 100);
    const opacityValue = 150 - counter;

    backgroundElement.style.setProperty('--blur-value', `${blurValue}px`);
    loaderElement.style.setProperty('--opacity-value', `${opacityValue}%`);
    loaderElement.textContent = `${counter}%`;
  }

  // TRANSITION API
  document.startViewTransition(() => updateDOM());
}, 30);
