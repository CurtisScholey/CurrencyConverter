// logic.js

function convertCurrency(valueOne, rate) {
    var convertedValue = (valueOne * rate).toFixed(2);
    return convertedValue;
}

module.exports = {
    convertCurrency: convertCurrency
};
