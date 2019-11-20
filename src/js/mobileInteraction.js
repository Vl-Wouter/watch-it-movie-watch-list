const searchButton = document.querySelector('#openSearch');
const closeButton = document.querySelector('#closeSearch');
const searchContainer = document.querySelector('.search');

const openSearch = () => {
  searchContainer.classList.remove('-out');
};

const closeSearch = () => {
  searchContainer.classList.add('-out');
};

searchButton.addEventListener('click', openSearch);
closeButton.addEventListener('click', closeSearch);
