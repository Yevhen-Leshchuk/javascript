import imagesTemplate from '../templates/images.hbs';
import refs from './refs';

function updateImagesMarkup(hits) { // Парсит разметку на страницу.
  const markup = imagesTemplate(hits); // Записывает в переменную markup разметку из imagesTemplate.

  refs.imagesContainer.insertAdjacentHTML('beforeend', markup); // Добавляет новую разметку к старой (перерисовывает все заново).
}

export default updateImagesMarkup;