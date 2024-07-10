const { apiKey } = require('./config');

// Encapsulate the main logic in an async function
(async function() {
    try {
        const baseCurrency = 'USD'; // Default base currency

        // Fetch exchange rates and populate dropdowns
        async function fetchExchangeRates(baseCurrency) {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`);
            const data = await response.json();
            const currencies = Object.keys(data.conversion_rates);
            populateDropdown(currencyOne, currencies);
            populateDropdown(currencyTwo, currencies);
            updateConversionRate();
        }

        // Populate dropdown with currency options
        function populateDropdown(dropdown, currencies) {
            dropdown.innerHTML = currencies.map(currency => `<option value="${currency}">${currency}</option>`).join('');
        }

        // Update conversion rate display
        async function updateConversionRate() {
            const baseCurrency = currencyOne.value;
            const targetCurrency = currencyTwo.value;
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`);
            const data = await response.json();
            const rate = data.conversion_rates[targetCurrency];
            conversionRateDisplay.textContent = `1 ${baseCurrency} : ${rate} ${targetCurrency}`;
            inputTwo.value = (inputOne.value * rate).toFixed(2);
        }

        // DOMContentLoaded event listener
        document.addEventListener('DOMContentLoaded', async function() {
            const inputOne = document.getElementById('inputOne');
            const inputTwo = document.getElementById('inputTwo');
            const currencyOne = document.getElementById('currencyOne');
            const currencyTwo = document.getElementById('currencyTwo');
            const conversionRateDisplay = document.getElementById('conversionRate');

            // Event listeners
            inputOne.addEventListener('input', updateConversionRate);
            inputTwo.addEventListener('input', updateConversionRate);
            currencyOne.addEventListener('change', updateConversionRate);
            currencyTwo.addEventListener('change', updateConversionRate);

            // Initial fetch and setup
            await fetchExchangeRates(baseCurrency);
        });

    } catch (error) {
        console.error('Error:', error);
    }
})();
