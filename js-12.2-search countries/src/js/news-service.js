export default {
  fetchCountries() {
    const url = `https://restcountries.eu/rest/v2/name/${this.query}`;

    return fetch(url)
      .then(response => response.json());
  },
};