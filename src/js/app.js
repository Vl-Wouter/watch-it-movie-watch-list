/* eslint-disable no-plusplus */
// Import scss
import '../sass/main.scss';
import './mobileInteraction';

feather.replace();

const searchForm = document.querySelector('#searchForm');
const resultContainer = document.querySelector('#searchResults');
const { localStorage } = window;
let favourites;

// Initialize saved list from local storage or create a new one
if (localStorage.getItem('savedList')) {
  favourites = JSON.parse(localStorage.getItem('savedList'));
} else {
  favourites = {
    series: [],
    movies: [],
  };
}

// Save list to localstorage and call update
const storeFavourites = () => {
  localStorage.setItem('savedList', JSON.stringify(favourites));
  // updateList()
};

const createElement = (type, parent, classes = [], id = null, content = null, src = null) => {
  const element = document.createElement(type);
  classes.forEach((className) => {
    element.classList.add(className);
  });
  if (id) element.id = id;
  if (content) element.innerHTML = content;
  if (src) element.src = src;
  parent.appendChild(element);
  if (type === 'button') feather.replace();
  return element;
};

const addToList = (item) => {
  const { Type } = item;
  item.watched = false;
  const { series, movies } = favourites;
  if (Type === 'series') series.push(item);
  else movies.push(item);

  storeFavourites();
};

const checkDuplicate = (item) => {
  const { Type: type } = item;
  const { movies, series } = favourites;
  if (type === 'movie') {
    const found = movies.find((movie) => movie.imdbId === item.imdbId);
    if (found) return true;
  } else {
    const found = series.find((seriesItem) => seriesItem.imdbId === item.imdbId);
    if (found) return true;
  }
  return false;
};

const addResult = (movie, index) => {
  const {
    Title, Year, Type, Poster,
  } = movie;
  const container = createElement('div', resultContainer, ['movie']);
  createElement('img', container, ['movie__poster'], null, null, Poster);
  const details = createElement('section', container, ['movie__details']);
  createElement('p', details, ['text-bold'], null, Title);
  createElement('p', details, [], null, `${Type}  | ${Year}`);
  const button = createElement('button', container, ['btn', '-round', '-primary'], null, '<i data-feather="plus"></i>');
  // button.setAttribute('data-movie', index);
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const checkFavourite = checkDuplicate(movie);
    if (!checkFavourite) addToList(movie);
    else console.log('This item is already favourited');
    button.innerHTML = '<i data-feather="check"></i>';
    feather.replace();
  });
};

const filterResponse = (array) => {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (item.Type === 'movie' || item.Type === 'series') {
      if (checkDuplicate(item)) {
        array.splice(i, 1);
        i--;
      }
    } else {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
};

const searchMovie = () => {
  // Create form data from form
  const search = new FormData(searchForm);
  // Get movie title from form data
  const query = search.get('movieTitle');
  fetch(`https://www.omdbapi.com/?apikey=[apikey]&s=${query}`)
    .then((response) => response.json())
    .then((data) => {
      const { Search } = data;
      const results = filterResponse(Search);
      resultContainer.innerHTML = '';
      if (results.length > 0) {
        results.forEach((result, i) => {
          addResult(result, i);
        });
      } else {
        createElement('p', resultContainer, [], null, `"${query}" returned 0 results...`);
      }
    });
};

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  searchMovie();
});
