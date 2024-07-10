const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom;
let container;

beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
    container = dom.window.document.body;
});

describe('Currency Converter Tests', () => {
    // Smoke tests for UI elements
    describe('UI Elements', () => {
        it('should have a title "Currency Converter"', () => {
            const title = container.querySelector('h1');
            expect(title).not.toBeNull();
            expect(title.textContent).toBe('Currency Converter');
        });

        it('should have two input fields', () => {
            const inputFields = container.querySelectorAll('.input-field');
            expect(inputFields.length).toBe(2);
        });

        it('should have two currency dropdowns', () => {
            const dropdowns = container.querySelectorAll('.currency-dropdown');
            expect(dropdowns.length).toBe(2);
        });

        it('should have a conversion rate display', () => {
            const conversionRate = container.querySelector('.conversion-rate');
            expect(conversionRate).not.toBeNull();
        });
    });

    // Input validation tests
    describe('Input Validation', () => {
        it('should allow a positive number in input field one', () => {
            const inputOne = container.querySelector('#inputOne');
            inputOne.value = '100';
            inputOne.dispatchEvent(new dom.window.Event('input'));
            expect(inputOne.value).toBe('100');
        });

        it('should allow a negative number in input field one', () => {
            const inputOne = container.querySelector('#inputOne');
            inputOne.value = '-50';
            inputOne.dispatchEvent(new dom.window.Event('input'));
            expect(inputOne.value).toBe('-50');
        });

        it('should allow the number 0 in input field one', () => {
            const inputOne = container.querySelector('#inputOne');
            inputOne.value = '0';
            inputOne.dispatchEvent(new dom.window.Event('input'));
            expect(inputOne.value).toBe('0');
        });

        it('should allow a number with two decimal places in input field one', () => {
            const inputOne = container.querySelector('#inputOne');
            inputOne.value = '123.45';
            inputOne.dispatchEvent(new dom.window.Event('input'));
            expect(inputOne.value).toBe('123.45');
        });

        it('should not allow a string of characters "abc" in input field one', () => {
            const inputOne = container.querySelector('#inputOne');
            inputOne.value = 'abc';
            inputOne.dispatchEvent(new dom.window.Event('input'));
            expect(inputOne.value).toBe('');
        });
    });
});
