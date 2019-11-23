// import styles
import '../sass/main.scss';
import { toggleSearchForm } from './interaction';
import { showList } from './views';

const { localStorage } = window;
const appContainer = document.querySelector('.app');
const searchButton = document.querySelector('#searchBtn');
const listButtons = document.querySelectorAll('.header__link');

if (localStorage.getItem('savedList')) {
  console.log('Found list, creating it');
  showList();
} else {
  console.log('no list found, showing intro');
}

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  toggleSearchForm();
});

listButtons.forEach((button) => {
  button.addEventListener('click', showList);
});
