const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
const apiKey = process.env.API_KEY;

console.log(apiKey);

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom;
let container;

beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
    container = dom.window.document.body;
});

describe('Currency Converter Smoke Test', () => {
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
