import itemsTemplate from '../templates/menu.hbs';
import menu from './menu.json'
import '../sass/main.scss';


const refs = {
  checkboxRef: document.querySelector('#theme-switch-toggle'),
  menuRef: document.querySelector('.js-menu'),
};

const markup = itemsTemplate(menu);

refs.menuRef.insertAdjacentHTML('beforeend', markup);

savedTheme()

refs.checkboxRef.addEventListener('change', handleChangingTheme);

function handleChangingTheme(event) {
  if (event.target.checked) {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    localStorage.setItem('Theme', JSON.stringify('dark-theme'));
  } else {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    localStorage.setItem('Theme', JSON.stringify('light-theme'));

  }
}

function savedTheme() {
  const savedTheme = localStorage.getItem('Theme');
  const parsedTheme = JSON.parse(savedTheme);

  if (parsedTheme === 'dark-theme') {
    document.body.classList.add(parsedTheme);
    refs.checkboxRef.checked = true;
  }
}