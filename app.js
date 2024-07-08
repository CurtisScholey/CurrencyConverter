// app.js
require('dotenv').config(); // This loads the .env file contents into process.env

// Declare apiKey variable and initialize it with the API key from .env
let apiKey = process.env.API_KEY;

// Logging API key in console
console.log("API Key:", apiKey); // Output API key to console

// Function to fetch exchange rates (server-side logic)
async function fetchExchangeRates(baseCurrency = 'USD') {
    // Fetch exchange rates from the API using the base currency
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`);
    const data = await response.json(); // Parse JSON response
    return data;
}

module.exports = {
    fetchExchangeRates // Export the function for use in other parts of your Node.js application
};
