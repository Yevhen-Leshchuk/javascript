import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';


function getImages(lightbox) { // Получает ссылку на массив элементов, переберает массив.
  lightbox.forEach((image) => {
    image.addEventListener('click', onOpenModal); // Слушатель событий на каждом элементе.
  });
}

function onOpenModal(event) { // Колбэк - открывает модальное окно по клику на изображение.
  const imageRef = event.target;
  const largeImageURL = imageRef.dataset.source;
  basicLightbox
    .create(`<img width="1400" height="900" src="${largeImageURL}">`) // Плагин basicLightbox создает
    .show()                                                             // элемент (изображение), и показывает его.
}

export default getImages;
