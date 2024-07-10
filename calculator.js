// calculator.js

// Function to calculate and return conversion rate
function calculateConversionRate(data, baseCurrency, targetCurrency) {
    const rate = data.conversion_rates[targetCurrency];
    return {
        rate,
        displayText: `1 ${baseCurrency} : ${rate} ${targetCurrency}`
    };
}

module.exports = {
    calculateConversionRate
};
