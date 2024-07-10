//import { apiKey } from './config.js';
import { convertCurrency } from './logic.js';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();
const apiKey = process.env.API_KEY;
console.log(`API Key: ${apiKey}`);

document.addEventListener('DOMContentLoaded', function() {
    const inputOne = document.getElementById('inputOne'); // First input field for amount
    const inputTwo = document.getElementById('inputTwo'); // Second input field for amount
    const currencyOne = document.getElementById('currencyOne'); // First currency dropdown
    const currencyTwo = document.getElementById('currencyTwo'); // Second currency dropdown
    const conversionRateDisplay = document.getElementById('conversionRate'); // Display for conversion rate
    
    // Fetch exchange rates and populate dropdowns
    async function fetchExchangeRates(baseCurrency = 'USD') {
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

        updateInputValues(rate);
    }

    // Update the input values based on the current rate
    function updateInputValues(rate) {
        const inputOneValue = parseFloat(inputOne.value);
        const inputTwoValue = parseFloat(inputTwo.value);

       if (document.activeElement === inputTwo){
        inputOne.value = (convertCurrency(inputTwoValue, rate))
       }
       else{
        inputTwo.value = (convertCurrency(inputOneValue, rate))
       }
    }

    // Event listeners to update conversion rate on input or dropdown change
    inputOne.addEventListener('input', () => updateConversionRate());
    inputTwo.addEventListener('input', () => updateConversionRate());
    currencyOne.addEventListener('change', updateConversionRate);
    currencyTwo.addEventListener('change', updateConversionRate);

    // Initialize with default base currency (USD)
    fetchExchangeRates();
});
