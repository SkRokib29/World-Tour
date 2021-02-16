fetch('https://restcountries.eu/rest/v2/all')
.then(res =>res.json())
.then(data =>displayCountries(data));

const displayCountries = countries =>{
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className ='un'
        const countryInfo =`
        <h3 class='govt'>${country.name}</h3>
        <p>${country.capital}</p>
        <button onClick="displayCountryDetail('${country.name}')" >Show Details</button>`;
        countryDiv.innerHTML =  countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}
const displayCountryDetail = name =>{
    window.scrollBy(0, -1000000)
    const url =`https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
    
}
const renderCountryInfo = country =>{
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
    <h3>${country.name}</h3>
    <p>Population :${country.population}</p>
    <p>Region :${country.region}</p>
    <img src="${country.flag}"></img>`
}
