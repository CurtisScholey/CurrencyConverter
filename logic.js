// logic.js


// converts currency by multiplying value by conversion rate
/*
export function convertCurrency(valueOne, rate) {
    var convertedValue = (valueOne * rate).toFixed(2);
    return convertedValue;
}*/

export function convertCurrency(value, rate, reverse) {
    var convertedValue;
    if (reverse) {
        convertedValue = (value / rate).toFixed(2);
    } else {
        convertedValue = (value * rate).toFixed(2);
    }
    return convertedValue;
}
