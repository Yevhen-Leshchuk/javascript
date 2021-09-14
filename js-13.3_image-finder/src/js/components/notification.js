import { info } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export function showMessageIncorrectInput(hits) {
  if (hits.length === 0) {
    return info({
      text: 'No images found!',
      width: '370px',
    })
  };
}
