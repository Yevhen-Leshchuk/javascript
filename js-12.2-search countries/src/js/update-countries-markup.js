import countriesTpl from '../templates/countries.hbs';
import countryTpl from '../templates/country.hbs';
import refs from './refs';


export function updateCountryMarkup(country) {
    const markup = countryTpl(country);

    refs.countryContainer.insertAdjacentHTML('beforeend', markup);
}

export function updateCountriesMarkup(countries) {
    const markup = countriesTpl(countries);

    refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
}