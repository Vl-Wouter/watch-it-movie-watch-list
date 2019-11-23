// import styles
import '../sass/main.scss';
import { toggleSearchForm } from './interaction';
import { showList, showIntro } from './views';

const { localStorage } = window;
const appContainer = document.querySelector('.app');
const searchButton = document.querySelector('#searchBtn');
const listButtons = document.querySelectorAll('.header__link');

if (localStorage.getItem('savedList')) {
  showList();
} else {
  showIntro();
}

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
  toggleSearchForm();
});

listButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (localStorage.getItem('savedList')) {
      showList();
    } else {
      showIntro();
    }
  });
});
