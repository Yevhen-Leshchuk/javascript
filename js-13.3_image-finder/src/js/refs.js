const searchForm = document.querySelector('.search-form');
const imagesContainer = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');
const loadMoreBtnLabel = document.querySelector('button[data-action = "load-more"]> .label');
const loadMoreBtnSpinner = document.querySelector('button[data-action = "load-more"]> .spinner');

export default { searchForm, imagesContainer, loadMoreBtn, loadMoreBtnLabel, loadMoreBtnSpinner };