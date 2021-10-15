import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';
import refs from '../refs';

function getImages(arrayImages) {
  // Получает ссылку на массив элементов, переберает массив.
  arrayImages.forEach(image => {
    image.addEventListener('click', onOpenModal); // Слушатель событий на каждом элементе.
  });
}

function onOpenModal(event) {
  // Колбэк - открывает модальное окно по клику на изображение.
  refs.bodyRef.classList.add('is-hidden'); // Запрещает прокрутку страницы при открытой модалке.
  const imageRef = event.target;
  const largeImageURL = imageRef.dataset.source;
  basicLightbox
    .create(`<img width="1400" height="900" src="${largeImageURL}">`) // Плагин basicLightbox создает
    .show(); // элемент (изображение), и показывает его.
}

export default getImages;
