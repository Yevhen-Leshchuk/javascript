import { notice, error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export function showMessageIncorrectInput() {
  return notice({
    text: 'No images found!',
    width: '370px',
  });
}

export function showMessageNoInput() {
  return error({
    text: 'No input! Please enter query!',
    width: '370px',
  });
}
