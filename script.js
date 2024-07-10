import { apiKey } from './config.js';

document.addEventListener('DOMContentLoaded', function() {
    const inputOne = document.getElementById('inputOne'); // First input field for amount
    const inputTwo = document.getElementById('inputTwo'); // Second input field for amount
    const currencyOne = document.getElementById('currencyOne'); // First currency dropdown
    const currencyTwo = document.getElementById('currencyTwo'); // Second currency dropdown
    const conversionRateDisplay = document.getElementById('conversionRate'); // Display for conversion rate
    
    // Fetch exchange rates and populate dropdowns
    async function fetchExchangeRates(baseCurrency = 'USD') {
        // Fetch exchange rates from the API using the base currency
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`);
        const data = await response.json(); // Parse JSON response
        const currencies = Object.keys(data.conversion_rates); // Get list of available currencies

        // Populate both currency dropdowns with the list of currencies
        populateDropdown(currencyOne, currencies);
        populateDropdown(currencyTwo, currencies);

        // Update conversion rate display with default or current selections
        updateConversionRate();
    }

    // Populate dropdown with currency options
    function populateDropdown(dropdown, currencies) {
        // Map each currency to an option element and join them into a single string
        dropdown.innerHTML = currencies.map(currency => `<option value="${currency}">${currency}</option>`).join('');
    }

    // Update conversion rate display
    async function updateConversionRate() {
        // Get selected currencies from dropdowns
        const baseCurrency = currencyOne.value;
        const targetCurrency = currencyTwo.value;

        // Fetch exchange rates from the API using the selected base currency
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`);
        const data = await response.json(); // Parse JSON response

        // Get the conversion rate for the target currency
        const rate = data.conversion_rates[targetCurrency];
        // Update the conversion rate display text
        conversionRateDisplay.textContent = `1 ${baseCurrency} : ${rate} ${targetCurrency}`;
        
        // Calculate and display the converted amount in the second input field
        inputTwo.value = (inputOne.value * rate).toFixed(2);
    }

    // Event listeners to update conversion rate on input or dropdown change
    inputOne.addEventListener('input', updateConversionRate); // Update on input in the first field
    inputTwo.addEventListener('input', updateConversionRate); // Update on input in the second field
    currencyOne.addEventListener('change', updateConversionRate); // Update on change in the first dropdown
    currencyTwo.addEventListener('change', updateConversionRate); // Update on change in the second dropdown

    // Initialize with default base currency (USD)
    fetchExchangeRates(); // Fetch exchange rates and populate dropdowns on page load
});
