// script.js

// Import the getApiKey function from app.js
const { getApiKey } = require('./app'); // Adjust the path as per your file structure

document.addEventListener('DOMContentLoaded', async function() {
    const inputOne = document.getElementById('inputOne'); // First input field for amount
    const inputTwo = document.getElementById('inputTwo'); // Second input field for amount
    const currencyOne = document.getElementById('currencyOne'); // First currency dropdown
    const currencyTwo = document.getElementById('currencyTwo'); // Second currency dropdown
    const conversionRateDisplay = document.getElementById('conversionRate'); // Display for conversion rate

    // Fetch exchange rates function
    async function fetchExchangeRates(baseCurrency = 'USD') {
        try {
            const apiKey = getApiKey(); // Get the API key
            // Fetch exchange rates from the API using the base currency
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`);
            const data = await response.json(); // Parse JSON response
            return data;
        } catch (error) {
            console.error('Error fetching exchange rates:', error);
        }
    }

    // Populate dropdown with currency options
    function populateDropdown(dropdown, currencies) {
        // Map each currency to an option element and join them into a single string
        dropdown.innerHTML = currencies.map(currency => `<option value="${currency}">${currency}</option>`).join('');
    }

    // Update conversion rate display
    async function updateConversionRate() {
        try {
            const apiKey = getApiKey(); // Get the API key
            // Get selected currencies from dropdowns
            const baseCurrency = currencyOne.value;
            const targetCurrency = currencyTwo.value;

            // Fetch exchange rates from the API using the selected base currency
            const data = await fetchExchangeRates(baseCurrency);

            // Get the conversion rate for the target currency
            const rate = data.conversion_rates[targetCurrency];
            
            // Update the conversion rate display text
            conversionRateDisplay.textContent = `1 ${baseCurrency} : ${rate} ${targetCurrency}`;

            // Calculate and display the converted amount in the second input field
            inputTwo.value = (inputOne.value * rate).toFixed(2);
        } catch (error) {
            console.error('Error updating conversion rate:', error);
        }
    }

    // Event listeners to update conversion rate on input or dropdown change
    inputOne.addEventListener('input', updateConversionRate); // Update on input in the first field
    inputTwo.addEventListener('input', updateConversionRate); // Update on input in the second field
    currencyOne.addEventListener('change', updateConversionRate); // Update on change in the first dropdown
    currencyTwo.addEventListener('change', updateConversionRate); // Update on change in the second dropdown

    // Initialize with default base currency (USD)
    fetchExchangeRates(); // Fetch exchange rates and populate dropdowns on page load
});
