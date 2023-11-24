const API = 'https://icanhazdadjoke.com';

const jokesBtn = document.querySelector('.btn__joke');
const jokeElement = document.querySelector('.joke');
const jokeTextElement = jokeElement.querySelector('.joke__text');
const notification = document.querySelector('.notification');

// When load the page
loadNewJoke();
// When press the button
jokesBtn.addEventListener('click', loadNewJoke);

// UI Changes
async function loadNewJoke () {
  // UI changes
  jokeTextElement.textContent = '';
  jokeElement.classList.add('is-skeleton-visible');

  const joke = await getRandomJoke();
  if (!joke) {
    showNotification('Sorry we got some problems, try it again later');
    return;
  };
  changeJoke(joke);
}

function changeJoke (joke) {
  jokeElement.classList.remove('is-skeleton-visible');
  jokeTextElement.textContent = joke;
}

// Get the joke information
async function getRandomJoke () {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json'
    }
  };

  try {
    const jokeInfo = await fetch(API, options);
    const { joke, status } = await jokeInfo.json();
    if (status !== 200) throw Error('Something went wrong');
    return joke;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Show the notification
function showNotification (text) {
  const notificationTextEl = notification.querySelector('.notification__text');
  notificationTextEl.textContent = text;
  notification.classList.add('visible');
  setTimeout(() => {
    notification.classList.remove('visible');
  }, 5000);
}
