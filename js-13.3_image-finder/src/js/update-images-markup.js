import imagesTemplate from '../templates/images.hbs';
import refs from './refs';

function updateImagesMarkup(hits) {
  const markup = imagesTemplate(hits);

  refs.imagesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateImagesMarkup;