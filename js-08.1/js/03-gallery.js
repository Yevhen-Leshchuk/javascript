const refs = {
  gallery: document.querySelector('.js-gallery'),
  largeImage: document.querySelector('.js-large-image'),
};

refs.gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const imageRef = event.target;
  const largeImageURL = imageRef.dataset.source;

  setLargeImage(largeImageURL);
}

function setLargeImage(url) {
  refs.largeImage.src = url;
  refs.largeImage.style.margin = 'auto';
}