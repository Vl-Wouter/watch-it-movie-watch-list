import { saveToList, fetchList, removeFromList } from './local';


const appContainer = document.querySelector('.app');
const listLinks = document.querySelectorAll('.header__link');

const toggleActiveListLink = (active) => {
  if (active) {
    listLinks.forEach((link) => {
      link.classList.add('-active');
    });
  } else {
    listLinks.forEach((link) => {
      link.classList.remove('-active');
    });
  }
};

const resetApp = () => {
  appContainer.innerHTML = '';
};

const createGrid = (type, size = 0) => {
  let element;
  if (type === 'row') {
    element = document.createElement('section');
    element.classList.add('row');
  }
  return element;
};

const createTitle = (content, level = 1) => {
  const element = document.createElement(`h${level}`);
  element.innerText = content;
  return element;
};

const createMovie = (item, type = 'list') => {
  const {
    Title: title, Year: year, imdbID: id, Poster: poster, Type: movieType,
  } = item;
  const movieContainer = document.createElement('article');
  movieContainer.classList.add('col-12', 'col-md-3', 'col-lg-2', 'movie');

  // Create image
  const moviePoster = document.createElement('img');
  if (poster !== 'N/A') {
    moviePoster.src = poster;
  } else {
    moviePoster.src = 'https://images.unsplash.com/photo-1524245510371-a10ac6be9ec9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80';
  }
  moviePoster.classList.add('movie__poster');
  movieContainer.appendChild(moviePoster);

  const movieDetails = document.createElement('main');
  movieDetails.classList.add('movie__details');

  // Create movie title
  const movieTitle = document.createElement('h6');
  movieTitle.innerText = title;
  movieTitle.classList.add('movie__title');
  movieDetails.appendChild(movieTitle);

  // Create details
  if (type === 'search') {
    const movieContext = document.createElement('p');
    movieContext.innerText = `${movieType} | ${year}`;
    movieContext.classList.add('movie__extra');
    movieDetails.appendChild(movieContext);


    // Add event listener
    movieContainer.addEventListener('click', () => {
      saveToList(item);
      showList();
    });
  } else {
    const movieActions = document.createElement('section');
    movieActions.classList.add('movie__actions');

    const seenButton = document.createElement('button');
    seenButton.classList.add('btn', '-fill-primary');
    seenButton.innerHTML = 'Seen it';
    seenButton.addEventListener('click', (e) => {
      seenButton.closest('article').classList.add('-animate-out');
      setTimeout(() => {
        removeFromList(movieType, id);
        showList();
      }, 1000);
    });

    movieActions.appendChild(seenButton);

    movieDetails.appendChild(movieActions);
  }

  movieContainer.appendChild(movieDetails);

  return movieContainer;
};

const createSearchResults = (results) => {
  resetApp();
  toggleActiveListLink(false);
  const title = createTitle(`${results.length} result${results.length > 1 ? 's' : ''}:`, 3);
  const description = document.createElement('p');
  description.innerText = 'Click an item to add it to your list';
  const resultsRow = createGrid('row');
  // resultsRow.classList.add('-nowrap');
  results.forEach((result) => {
    const movieItem = createMovie(result, 'search');
    resultsRow.appendChild(movieItem);
  });
  appContainer.appendChild(title);
  appContainer.appendChild(description);
  appContainer.appendChild(resultsRow);
};

const createErrorView = (err) => {
  resetApp();
  let errView = {};

  if (err === 'noResults') {
    errView = {
      // eslint-disable-next-line quotes
      title: `No results found...`,
      message: 'Cannot find the movie you\'re looking for. Maybe it\'s already on your list?',
    };
  }

  const title = document.createElement('h3');
  title.classList.add('text-center');
  title.innerHTML = `<span class="iconify" data-icon="twemoji:face-screaming-in-fear" data-inline="true"></span> ${errView.title}`;
  const message = document.createElement('p');
  message.classList.add('text-center');
  message.innerText = errView.message;
  appContainer.appendChild(title);
  appContainer.appendChild(message);
};

const showList = () => {
  resetApp();
  const { movies, series } = fetchList();

  toggleActiveListLink(true);

  if (movies.length === 0 && series.length === 0) {
    showIntro();
  }

  if (movies.length > 0) {
    // Display movies
    const movieRow = createGrid('row');
    movieRow.classList.add('-nowrap');
    movies.forEach((movie) => {
      movieRow.appendChild(createMovie(movie, 'list'));
    });
    appContainer.appendChild(createTitle('Your Movies', 3));
    appContainer.appendChild(movieRow);
  }

  if (series.length > 0) {
    // Display series
    const seriesRow = createGrid('row');
    seriesRow.classList.add('-nowrap');
    series.forEach((serie) => {
      seriesRow.appendChild(createMovie(serie, 'list'));
    });
    appContainer.appendChild(createTitle('Your Series', 3));
    appContainer.appendChild(seriesRow);
  }
};

const showIntro = () => {
  resetApp();
  const title = document.createElement('h3');
  title.classList.add('text-center');
  title.innerText = 'Your list is empty!';

  const subTitle = document.createElement('p');
  subTitle.classList.add('text-center');
  subTitle.innerText = 'Start adding movies by using the searchbar above!';

  appContainer.appendChild(title);
  appContainer.appendChild(subTitle);
};

export {
  resetApp,
  createGrid,
  createSearchResults,
  createErrorView,
  showList,
  showIntro,
};
