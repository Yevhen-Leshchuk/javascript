//import bootstrap from 'bootstrap';
import refs from './js/refs.js';
import apiService from './js/apiService';
import updateImagesMarkup from './js/update-images-markup';
import 'material-icons/iconfont/material-icons.css';
import './sass/styles.scss';

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', fetchImages);

function searchFormSubmitHandler(event) {
  event.preventDefault();
  if (!event.currentTarget.elements.query.value) {
    return;
  };

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;

  form.reset();
  clearContainer();
  apiService.resetPage();
  apiService.fetchImages().then(hits => {
    updateImagesMarkup(hits);
  });
}

function fetchImages() {
  apiService.fetchImages().then(hits => {
    updateImagesMarkup(hits);
  });
}

function clearContainer() {
  refs.imagesContainer.innerHTML = '';
}