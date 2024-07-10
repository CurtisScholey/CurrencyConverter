const { apiKey } = require('./config');
const { calculateConversionRate } = require('./calculator');

document.addEventListener('DOMContentLoaded', function() {
    const inputOne = document.getElementById('inputOne');
    const inputTwo = document.getElementById('inputTwo');
    const currencyOne = document.getElementById('currencyOne');
    const currencyTwo = document.getElementById('currencyTwo');
    const conversionRateDisplay = document.getElementById('conversionRate');

    async function fetchExchangeRates(apiKey, baseCurrency = 'USD') {
        try {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`);
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Error fetching exchange rates:', error);
        }
    }

    function populateDropdown(dropdown, currencies) {
        dropdown.innerHTML = currencies.map(currency => `<option value="${currency}">${currency}</option>`).join('');
    }

    async function updateExchangeRates(baseCurrency = 'USD') {
        try {
            const data = await fetchExchangeRates(apiKey, baseCurrency);
            const currencies = Object.keys(data.conversion_rates);

            populateDropdown(currencyOne, currencies);
            populateDropdown(currencyTwo, currencies);

            updateConversionRate();
        } catch (error) {
            console.error('Error updating exchange rates:', error);
        }
    }

    async function updateConversionRate() {
        try {
            const baseCurrency = currencyOne.value;
            const targetCurrency = currencyTwo.value;

            const data = await fetchExchangeRates(apiKey, baseCurrency);
            const { rate, displayText } = calculateConversionRate(data, baseCurrency, targetCurrency);

            conversionRateDisplay.textContent = displayText;
            inputTwo.value = (inputOne.value * rate).toFixed(2);
        } catch (error) {
            console.error('Error updating conversion rate:', error);
        }
    }

    inputOne.addEventListener('input', updateConversionRate);
    inputTwo.addEventListener('input', updateConversionRate);
    currencyOne.addEventListener('change', updateExchangeRates);
    currencyTwo.addEventListener('change', updateExchangeRates);

    updateExchangeRates();
});
