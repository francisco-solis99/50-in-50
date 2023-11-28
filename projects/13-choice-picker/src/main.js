/*
  Improve performance
  - Add only the new tags to the DOM, keep the one who were previously ✅
  - Change the tags text from the ones really changed ✅
  - Delete only the ones removed from the list of tags ✅

  Improve code reading
  - Separete the actions into functions ✅
* */

const container = document.querySelector('main');
const textArea = document.querySelector('textarea');
const tagsList = document.createElement('ul');

textArea.addEventListener('input', handleInputTags);

function handleInputTags () {
  const currentTags = document.querySelectorAll('.tag') ?? [];
  const tagsArr = textArea.value.split(',').filter(item => item.trim());

  // UI CHANGES

  // if there is the same tags in the DOM than the tagsArr just change the changes on the text
  if (tagsArr.length === currentTags.length) {
    changeText(currentTags, tagsArr);
    return;
  }

  // Add new tags
  if (tagsArr.length > currentTags.length) {
    addNewTags(currentTags, tagsArr);
    return;
  }

  // Remove a tags
  removeTags(currentTags, tagsArr);
}

function createTag (tag) {
  const tagElement = document.createElement('li');
  tagElement.classList.add('tag');
  tagElement.textContent = tag;
  return tagElement;
}

function removeTags (currentTags, tagsArr) {
  const tagsToRemoved = [...currentTags].filter((tag, index) => tag.textContent !== tagsArr[index]);
  tagsToRemoved.forEach(tagEl => tagEl.remove());
}

function changeText (currentTags, tagsArr) {
  currentTags.forEach((tagEl, index) => {
    const tagText = tagsArr[index];
    if (tagEl.textContent !== tagText) tagEl.textContent = tagText;
  });
}

function addNewTags (currentTags, tagsArr) {
  const start = currentTags.length ? tagsArr.length - 1 : 0;
  tagsArr.slice(start, tagsArr.length).forEach(tag => {
    const newTag = createTag(tag);
    tagsList.append(newTag);
  });

  // Add the list to the DOM only the first time
  if (!tagsList.isConnected) container.append(tagsList);
}
