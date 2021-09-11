import refs from './js/refs.js';
import fetchImages from './js/apiService';
import 'material-icons/iconfont/material-icons.css';
import './sass/styles.scss';

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);

function searchFormSubmitHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const inputValue = form.elements.query.value;
  form.reset();
  refs.imagesContainer.innerHTML = '';
  fetchImages(inputValue);
}