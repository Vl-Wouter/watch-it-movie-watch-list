import fetchFromInput from './search';
import { createSearchResults, createErrorView } from './views';
import { initList } from './local';

const resetFormInput = () => {
  document.querySelector('.search input').value = '';
};

const handleOutsideClick = (e) => {
  if (!document.querySelector('.search').contains(e.target)) {
    window.removeEventListener('click', (e) => handleOutsideClick(e));
    document.querySelector('.search').classList.remove('active');
  }
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
    .catch((err) => {
      createErrorView('noResults');
    });
  window.removeEventListener('click', (e) => handleOutsideClick(e));
};

export {
  toggleSearchForm,
  handleOutsideClick,
};
