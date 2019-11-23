const { localStorage } = window;

const checkDuplicate = (item) => {
  const { movies, series } = JSON.parse(localStorage.getItem('savedList'));
  const { imdbID } = item;
  let match;
  if (item.Type === 'movie') {
    match = movies.find((movie) => movie.imdbID === imdbID);
  } else {
    match = series.find((serie) => serie.imdbID === imdbID);
  }

  if (match) {
    return true;
  }
  return false;
};

const filterResults = (data) => {
  const typeFilter = data.filter((item) => item.Type === 'movie' || item.Type === 'series');
  if (localStorage.getItem('savedList')) {
    return typeFilter.filter((item) => !checkDuplicate(item));
  }
  return typeFilter;
};

const fetchFromInput = (data) => new Promise((resolve, reject) => {
  const title = data.get('movieTitle');
  fetch(`https://www.omdbapi.com/?apikey=c223f3f3&s=${title}`)
    .then((response) => response.json())
    .then((res) => {
      const { Search: search } = res;
      if (search && search.length > 0) {
        resolve(filterResults(search));
      } else {
        resolve([]);
      }
    })
    .catch((err) => reject(err));
});

export default fetchFromInput;
