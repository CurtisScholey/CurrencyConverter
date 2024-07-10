// logic.js

export function convertCurrency(valueOne, rate) {
    var convertedValue = (valueOne * rate).toFixed(2);
    return convertedValue;
}