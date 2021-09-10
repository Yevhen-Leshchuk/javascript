import imagesTemplate from '../templates/images.hbs';
import refs from './refs';

function updateImagesMarkup(images) {
  const markup = imagesTemplate(images);

  refs.imagesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateImagesMarkup;