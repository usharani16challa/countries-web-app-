const countriesList = document.getElementById("countries-list");
const searchInput = document.getElementById("search-input");

const countries = [
    "India", "United States", "China", "Japan", "United Kingdom",
    "France", "Germany", "Australia", "Canada", "Italy",
    // Add more countries here...
];

function renderCountriesList(countriesToRender) {
    countriesList.innerHTML = "";
    countriesToRender.forEach((country) => {
        const countryListItem = document.createElement("li");
        countryListItem.textContent = country;
        countriesList.appendChild(countryListItem);
    });
}

renderCountriesList(countries);

searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCountries = countries.filter((country) =>
        country.toLowerCase().includes(searchTerm)
    );
    renderCountriesList(filteredCountries);
});


