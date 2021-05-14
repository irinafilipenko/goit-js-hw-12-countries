const baseUrl = 'https://restcountries.eu/rest/v2';

function fetchCountries(name) {
     
    const url = `${baseUrl}/name/${name}`;
    return fetch(url).then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.statusText);
            })
};
         
             
        
        export default { fetchCountries };


      