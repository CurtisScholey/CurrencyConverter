// Javascript file providing functions for the tool

document.addEventListener('DOMContentLoaded', function() {
    const currencyOne = document.getElementById('currencyOne');
    const currencyTwo = document.getElementById('currencyTwo');
    const apiKey = '132e8ef7c1d49498628ffb91'; // API key

    // Fetch exchange rates and populate dropdowns
    async function fetchExchangeRates(baseCurrency = 'USD') {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`);
        const data = await response.json();
        const currencies = Object.keys(data.conversion_rates);

        populateDropdown(currencyOne, currencies);
        populateDropdown(currencyTwo, currencies);
    }

    // Populate dropdown with currency options
    function populateDropdown(dropdown, currencies) {
        dropdown.innerHTML = currencies.map(currency => `<option value="${currency}">${currency}</option>`).join('');
    }

    // Initialize
    fetchExchangeRates();
});
