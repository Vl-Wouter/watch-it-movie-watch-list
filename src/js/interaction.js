import fetchFromInput from './search';
import { createSearchResults, createErrorView } from './views';

const resetFormInput = () => {
  document.querySelector('.search input').value = '';
};

const toggleSearchForm = () => {
  const form = document.querySelector('.search');
  const inputData = new FormData(form);
  fetchFromInput(inputData)
    .then((results) => {
      resetFormInput();
      if (results.length > 0) {
        createSearchResults(results);
      } else {
        createErrorView('noResults');
      }
    })
    .catch(() => {
      createErrorView('noResults');
    });
};

export default toggleSearchForm;
