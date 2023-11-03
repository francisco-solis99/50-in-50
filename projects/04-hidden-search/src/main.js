const searcherBtn = document.querySelector('.searcher__btn');
const inputSearch = searcherBtn.previousElementSibling;
console.log(inputSearch);

searcherBtn.addEventListener('click', () => {
  inputSearch.classList.toggle('searcher__toggle');
});
