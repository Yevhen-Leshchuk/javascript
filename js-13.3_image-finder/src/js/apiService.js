const apiKey = '23316117-157eac1742a52b03f27289157';

export default {
  searchQuery: '',
  page: 1,
  fetchImages() {

    const url = `https://pixabay.com/api/?image_type=photo&
    orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${apiKey}`;

    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        console.log(hits)
        this.incrementPage();
        return hits;
      });
  },
  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
