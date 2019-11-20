const searchForm = document.querySelector('#searchForm');

const searchMovie = async (e) => {
  if (e.preventDefault) e.preventDefault();
  // Create form data from form
  const search = new FormData(searchForm);
  // Get movie title from form data
  const query = search.get('movieTitle');
  const response = await fetch(`https://www.omdbapi.com/?apikey=c223f3f3&s=${query}`);
  const data = await response.json();
  console.log(data);
  // show the results in the search results
  data.forEach((result) => {
    addResult(result);
  });
};


searchForm.addEventListener('submit', searchMovie);
