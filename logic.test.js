import { convertCurrency } from './logic.js';

// Positive Value Conversion Tests
test('£100 at rate 1.5 should convert to 150.00', () => {
    const valueOne = 100;
    const rate = 1.5;
    const convertedValue = convertCurrency(valueOne, rate);
    expect(convertedValue).toBe('150.00');
});

test('£200 at rate 2 should convert to 400.00', () => {
    const valueOne = 200;
    const rate = 2;
    const convertedValue = convertCurrency(valueOne, rate);
    expect(convertedValue).toBe('400.00');
});

// Negative Value Conversion Tests
test('-£100 at rate 1.5 should convert to -150.00', () => {
    const valueOne = -100;
    const rate = 1.5;
    const convertedValue = convertCurrency(valueOne, rate);
    expect(convertedValue).toBe('-150.00');
});

test('-£200 at rate 2 should convert to -400.00', () => {
    const valueOne = -200;
    const rate = 2;
    const convertedValue = convertCurrency(valueOne, rate);
    expect(convertedValue).toBe('-400.00');
});

// Decimal Value Conversion Tests
test('£100.50 at rate 1.5 should convert to 150.75', () => {
    const valueOne = 100.50;
    const rate = 1.5;
    const convertedValue = convertCurrency(valueOne, rate);
    expect(convertedValue).toBe('150.75');
});

test('-£200.25 at rate 2.5 should convert to -500.63', () => {
    const valueOne = -200.25;
    const rate = 2.5;
    const convertedValue = convertCurrency(valueOne, rate);
    expect(convertedValue).toBe('-500.63');
});

// Zero Value Conversion Tests
test('£0 at rate 1.5 should convert to 0.00', () => {
    const valueOne = 0;
    const rate = 1.5;
    const convertedValue = convertCurrency(valueOne, rate);
    expect(convertedValue).toBe('0.00');
});

test('-£0 at rate 1.5 should convert to 0.00', () => {
    const valueOne = -0;
    const rate = 1.5;
    const convertedValue = convertCurrency(valueOne, rate);
    expect(convertedValue).toBe('0.00');
});

// Edge Case Conversion Tests
test('£999999 at rate 0.000001 should round to 1.00', () => {
    const valueOne = 999999;
    const rate = 0.000001;
    const convertedValue = convertCurrency(valueOne, rate);
    expect(convertedValue).toBe('1.00');
});

test('£0.000001 at rate 1000000 should convert to 1.00', () => {
    const valueOne = 0.000001;
    const rate = 1000000;
    const convertedValue = convertCurrency(valueOne, rate);
    expect(convertedValue).toBe('1.00');
});

test('reverse being true, 100 at rate .5 should be 200', () => {
    const valueOne = 100;
    const rate = 0.5;
    const reverse = true;
    const convertedValue = convertCurrenct(valueOne, rate, reverse);
    expect(convertedValue).toBe('200');
});