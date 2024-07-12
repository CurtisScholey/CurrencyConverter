// logic.js


// converts currency by multiplying or dividing value by conversion rate
export function convertCurrency(value, rate, reverse) {
    var convertedValue;
    if (reverse) {
        convertedValue = (value / rate).toFixed(2); // converts value 2 -> 1 to 2 d.p.
    } else {
        convertedValue = (value * rate).toFixed(2); // normal conversion for 1 -> 2 to 2 d.p
    }
    return convertedValue;
}
