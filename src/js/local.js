const { localStorage } = window;

const initList = () => {
  const list = {
    movies: [],
    series: [],
  };

  localStorage.setItem('savedList', JSON.stringify(list));
};

const saveToList = (item) => {
  if (!localStorage.getItem('savedList')) initList();
  const list = JSON.parse(localStorage.getItem('savedList'));
  const { movies, series } = list;
  const { Type: type } = item;

  if (type === 'movie') {
    movies.push(item);
  } else {
    series.push(item);
  }

  localStorage.setItem('savedList', JSON.stringify(list));
};

const fetchList = () => JSON.parse(localStorage.getItem('savedList'));

const removeFromList = (type, id) => {
  const list = JSON.parse(localStorage.getItem('savedList'));
  const { movies, series } = list;
  if (type === 'movie') {
    const item = movies.find((element) => element.imdbID === id);
    const position = movies.indexOf(item);
    movies.splice(position, 1);
  } else {
    const item = series.find((element) => element.imdbID === id);
    const position = series.indexOf(item);
    series.splice(position, 1);
  }

  localStorage.setItem('savedList', JSON.stringify(list));
};

export {
  initList,
  saveToList,
  fetchList,
  removeFromList,
};
