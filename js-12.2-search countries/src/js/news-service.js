
export default {
  input: '',
  fetchCountries() {
    const url = `https://restcountries.eu/rest/v2/name/${this.query}`;

    return fetch(url)
      .then(response => response.json())
      .then(countries => {
        return countries;
      });
  },
  get query() {
    return this.input;
  },
  set query(value) {
    this.input = value;
  },
};