/*
  Improve performance
  - Add only the new tags to the DOM, keep the one who were previously ✅
  - Change the tags text from the ones really changed ✅
  - Delete only the ones removed from the list of tags ✅
  - Evalute if there is not text in the textArea to does not do anything

  Improve code reading
  - Separete the actions into functions
  - Maybe Has an initial init function maybe
* */

const container = document.querySelector('main');
const textArea = document.querySelector('textarea');
const tagsList = document.createElement('ul');

textArea.addEventListener('input', (e) => {
  const currentTags = document.querySelectorAll('.tag') ?? [];
  const tagsArr = textArea.value.split(',').filter(item => item.trim());

  // UI CHANGES

  // if there is the same tags in the DOM than the tagsArr just change the changes on the text
  if (tagsArr.length === currentTags.length) {
    currentTags.forEach((tagEl, index) => {
      const tagText = tagsArr[index];
      if (tagEl.textContent !== tagText) tagEl.textContent = tagText;
    });
    return;
  }

  // Add new tags
  if (tagsArr.length > currentTags.length) {
    const start = currentTags.length ? tagsArr.length - 1 : 0;
    tagsArr.slice(start, tagsArr.length).forEach(tag => {
      const newTag = createTag(tag);
      tagsList.append(newTag);
    });

    // Add the list to the DOM only the first time
    if (!tagsList.isConnected) container.append(tagsList);
  }

  // Remove a tags
  const tagsToRemoved = [...currentTags].filter((tag, index) => tag.textContent !== tagsArr[index]);
  tagsToRemoved.forEach(tagEl => tagEl.remove());
});

function createTag (tag) {
  const tagElement = document.createElement('li');
  tagElement.classList.add('tag');
  tagElement.textContent = tag;
  return tagElement;
}
