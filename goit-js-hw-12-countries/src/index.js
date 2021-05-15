import './styles.css';
import cardTemplate from './templates/country.hbs';
import cardListTemplate from './templates/many-countries.hbs';
import API from './js/fetchCountries';
import getRefs from './js/get-refs';
import debounce from 'lodash.debounce';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const refs = getRefs();

refs.inputEl.addEventListener(
  'input',
  debounce(e => onInputSearch(e), 1000),
);

function onInputSearch(e) {
  clearContainer();

  const input = e.target;
  const searchQuery = input.value;

  if (!searchQuery) {
    return;
  } else {
    API.fetchCountries(searchQuery)
      .then(renderCounriesCard)
      .catch(onFetchError);
  }
}

function renderCounriesCard(country) {
  console.log(country.length);
  if (country.length === 1) {
    const markup = cardTemplate(country);

    refs.cardContainerEl.insertAdjacentHTML('beforeend', markup);
  }
  if (country.length >= 2 && country.length <= 10) {
    const markup = cardListTemplate(country);

    refs.cardContainerEl.insertAdjacentHTML('beforeend', markup);
  }
  if (country.length > 10) {
    error({
      text: 'Too many matches found. Please enter a more specific query!',
    });
  }
}

function onFetchError() {
  error({
    text: ' Invalid request',
  });
}

function clearContainer() {
  refs.cardContainerEl.innerHTML = ' ';
}
