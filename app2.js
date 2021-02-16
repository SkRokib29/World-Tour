fetch('https://restcountries.eu/rest/v2/all')
.then(res =>res.json())
.then(data =>displayCountries(data));

const displayCountries = countries =>{
    // console.log(countries);
    const countriesDiv = document.getElementById("countries");
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement("div");
        const h3 = document.createElement("h3");
        h3.innerText = country.name;
        const p = document.createElement("p");
        p.innerText = country.capital;
        countryDiv.appendChild(h3);
        countryDiv.appendChild(p);
        countriesDiv.appendChild(countryDiv);
// previous 6 line code can be done by this method(20-25)..

const countryInfo = `
<h3>${country.name}</h3>
<p>${country.capital}</p>`

countryDiv.innerHTML = countryInfo;
countriesDiv.appendChild(countryDiv);

        
        
        // li.innerText = country.name;
        // countriesDiv.appendChild(li);
        
        // console.log(country.name);
        // console.log(country.capital);
        
    }
}

// above work can aslo be done by using foreach function.........
const displayCountries = countries =>{
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className ='un'
        const countryInfo =`
        <h3 class='govt'>${country.name}</h3>
        <p>${country.capital}</p>`;
        countryDiv.innerHTML =  countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}