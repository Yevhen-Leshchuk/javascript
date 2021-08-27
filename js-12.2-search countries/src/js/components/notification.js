import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export function showMessageIncorrectInput(countries) {
  if (countries.status === 404) {
    return error({
      text: 'Country not found! Incorrect input!',
      width: '370px',
    })
  };
}

export function showMessageSpecificQuery(countries) {
  if (countries.length > 10) {
    return error({
      text: 'Too many matches found. Please enter a more specific query!',
      width: '370px',
    })
  };
}