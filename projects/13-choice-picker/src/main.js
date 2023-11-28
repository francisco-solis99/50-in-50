/*
  Improve performance
  - Add only the new tags to the DOM, keep the one who were previously
  - Change the tags text from the ones really changed
  - Delete only the ones removed from the list of tags
  - Evalute if there is not text in the textArea to does not do anything

  Improve code reading
  - Separete the actions into functions
  - Maybe Has an initial init function maybe
* */

const container = document.querySelector('main');
const textArea = document.querySelector('textarea');
const tagsList = document.createElement('ul');

textArea.addEventListener('input', (e) => {
  // const currentTags = document.querySelectorAll('.tag');
  const tagsArr = textArea.value.split(',').filter(item => item.trim());

  const tags = tagsArr.map((tagText, index) => createTag(tagText));
  tagsList.replaceChildren(...tags);

  // Add the list to the DOM only the first time
  if (!tagsList.isConnected) container.append(tagsList);
});

// function changeTagsList() {

// }

function createTag (tag) {
  const tagElement = document.createElement('li');
  tagElement.classList.add('tag');
  tagElement.textContent = tag;
  return tagElement;
}
