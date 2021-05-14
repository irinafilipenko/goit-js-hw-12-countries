const baseUrl = 'https://restcountries.eu/rest/v2';

function fetchCountries(name) {
    
    const url = `${baseUrl}/name/${name}`;
    return fetch(url).then(response => {
        // console.log(response);
        return response.json()
        
    })
    
}
export default { fetchCountries };