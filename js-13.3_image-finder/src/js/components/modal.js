import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';


function getImages(lightbox) {
  lightbox.forEach((image) => {
    image.addEventListener('click', onOpenModal);
  });
}

function onOpenModal(event) {
  const imageRef = event.target;
  const largeImageURL = imageRef.dataset.source;
  basicLightbox
    .create(`<img width="1400" height="900" src="${largeImageURL}">`)
    .show()
}

export default getImages;
