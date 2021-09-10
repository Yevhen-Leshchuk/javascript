import updateImagesMarkup from './update-images-markup.js';


function fetchImages(searchQuery) {
  const apiKey = '23316117-157eac1742a52b03f27289157';
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(({ hits }) => {
      console.log(hits)
      updateImagesMarkup(hits);
    });
}

export default fetchImages;