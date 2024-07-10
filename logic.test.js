import { convertCurrency } from './logic.js';

test('Currency Converter: Positive Value Conversion - 100 at 1.5', () => {
    const valueOne = 100;
    const rate = 1.5;
    const convertedValue = convertCurrency(valueOne, rate);
    expect(convertedValue).toBe('150.00');
});

test('Currency Converter: Positive Value Conversion - 200 at 2', () => {
    const valueOne = 200;
    const rate = 2;
    const convertedValue = convertCurrency(valueOne, rate);
    expect(convertedValue).toBe('400.00');
});

test('Currency Converter: Positive Value Conversion - 100.50 at 1.5', () => {
    const valueOne = 100.50;
    const rate = 1.5;
    const convertedValue = convertCurrency(valueOne, rate);
    expect(convertedValue).toBe('150.75');
});

test('Currency Converter: Positive Value Conversion - 200.25 at 200', () => {
    const valueOne = 200.25;
    const rate = 200;
    const convertedValue = convertCurrency(valueOne, rate);
    expect(convertedValue).toBe('40050.00');
});

test('Currency Converter: Negative Value Conversion - -100 at 1.5', () => {
    const valueOne = -100;
    const rate = 1.5;
    const convertedValue = convertCurrency(valueOne, rate);
    expect(convertedValue).toBe('-150.00');
});

test('Currency Converter: Negative Value Conversion - -200 at 2', () => {
    const valueOne = -200;
    const rate = 2;
    const convertedValue = convertCurrency(valueOne, rate);
    expect(convertedValue).toBe('-400.00');
});

test('Currency Converter: Zero and Edge Case Conversion - 0 at 1.5', () => {
    const valueOne = 0;
    const rate = 1.5;
    const convertedValue = convertCurrency(valueOne, rate);
    expect(convertedValue).toBe('0.00');
});