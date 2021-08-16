import { error, info } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import 'material-design-icons/iconfont/material-icons.css';

export function showMessageIncorrectInput(countries) {
  if (countries.status === 404) {
    error({
      text: 'Country not found! Incorrect input!',
      width: '370px',
    })
  };
}

export function showMessageSpecificQuery(countries) {
  if (countries.length > 10) {
    error({
      text: 'Too many matches found. Please enter a more specific query!',
      width: '370px',
    })
  };
}