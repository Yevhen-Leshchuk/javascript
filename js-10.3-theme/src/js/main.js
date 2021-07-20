import itemsTemplate from '../templates/menu.hbs';
import menu from './menu.json'

//  V1.
// const refs = {
//   checkboxRef: document.querySelector('#theme-switch-toggle'),
//   menuRef: document.querySelector('.js-menu'),
//   bodyRef: document.querySelector('body'),
// };

// const markup = itemsTemplate(menu);
// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// refs.menuRef.insertAdjacentHTML('beforeend', markup);
// refs.checkboxRef.addEventListener('change', chooseTheme);

// const theme = localStorage.getItem('theme');

// if (theme === Theme.DARK) {
//   refs.bodyRef.classList.add(Theme.DARK);
//   refs.checkboxRef.checked = true;
// }

// function chooseTheme(e) {
//   if (e.target.checked) {
//     refs.bodyRef.classList.add(Theme.DARK);
//     refs.bodyRef.classList.remove(Theme.LIGHT);
//     localStorage.setItem('theme', Theme.DARK);
//   } else {
//     refs.bodyRef.classList.add(Theme.LIGHT);
//     refs.bodyRef.classList.remove(Theme.DARK);
//     localStorage.setItem('theme', Theme.LIGHT);
//   }
// }
//----------------------------------------------
// V2.

const refs = {
  checkboxRef: document.querySelector('#theme-switch-toggle'),
  menuRef: document.querySelector('.js-menu'),
  bodyRef: document.querySelector('body'),
};

const markup = itemsTemplate(menu);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.menuRef.insertAdjacentHTML('beforeend', markup);
refs.checkboxRef.addEventListener('change', chooseTheme);

function chooseTheme(e) {
  // e.target.checked ? chooseDarkTheme() : chooseLightTheme();
  if (e.target.checked) {
    chooseDarkTheme();
    return;
  }
  chooseLightTheme();
}

function currentTheme() {
  const theme = localStorage.getItem('theme');

  if (theme === Theme.LIGHT || theme === null) {
    chooseLightTheme();
    return;
  }
  // if (theme === Theme.DARK) {
  //   chooseDarkTheme();
  //   return;
  // }
  chooseDarkTheme();
}

function chooseDarkTheme() {
  refs.bodyRef.classList.add(Theme.DARK);
  refs.bodyRef.classList.remove(Theme.LIGHT);
  refs.checkboxRef.checked = true;
  localStorage.setItem('theme', Theme.DARK);
}

function chooseLightTheme() {
  refs.bodyRef.classList.add(Theme.LIGHT);
  refs.bodyRef.classList.remove(Theme.DARK);
  refs.checkboxRef.checked = false;
  localStorage.setItem('theme', Theme.LIGHT);
}

currentTheme()