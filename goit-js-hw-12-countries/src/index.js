import './styles.css';
import cardTemplate from './templates/countrie.hbs';

var debounce = require('lodash.debounce');

const cardContainerEl = document.querySelector('.cardContainer');
const inputEl = document.querySelector('.input');

inputEl.addEventListener('input', onInputSearch);
const name = '';

function onInputSearch(e) {
    e.preventDefault();
    
    const searchQuery = e.currentTarget.value;
    console.log(searchQuery);

 fetchCountries(searchQuery)
    .then(renderCounriesCard)
    .catch(error => console.log(console.error()));
}

 



function fetchCountries(name) {
  return    fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(data => {
    return data.json()
    })
    // .then(renderCounriesCard)
    // .catch(error => {
    //     console.log(error)
    // });
  }

function renderCounriesCard(country) {
const markup = cardTemplate(country);
        console.log(markup);
        cardContainerEl.insertAdjacentHTML('beforeend', markup);
}