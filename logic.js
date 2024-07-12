// logic.js


// converts currency by multiplying value by conversion rate
export function convertCurrency(value, rate, reverse) {
    var convertedValue;
    if (reverse) {
        convertedValue = (value / rate).toFixed(2); // reversed, for getting inputOne from inputTwo
    } else {
        convertedValue = (value * rate).toFixed(2); // normal conversion for one -> 2
    }
    return convertedValue;
}
