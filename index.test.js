const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Read the HTML file
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom;
let container;

beforeEach(() => {
  dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
  container = dom.window.document.body;

  // Make sure the script is included and runs
  dom.window.eval(fs.readFileSync(path.resolve(__dirname, './script.js'), 'utf8'));
});

// Utility function to wait for DOM updates
const waitForDOMUpdates = () => new Promise((resolve) => setTimeout(resolve, 100));

describe('Currency Converter Smoke Test', () => {
  // Test for title presence and content
  it('should have a title "Currency Converter"', () => {
    const title = container.querySelector('h1');
    expect(title).not.toBeNull();
    expect(title.textContent).toBe('Currency Converter');
  });

  // Test for two input fields
  it('should have two input fields', () => {
    const inputFields = container.querySelectorAll('.input-field');
    expect(inputFields.length).toBe(2);
  });

  // Test for two currency dropdowns
  it('should have two currency dropdowns', () => {
    const dropdowns = container.querySelectorAll('.currency-dropdown');
    expect(dropdowns.length).toBe(2);
  });

  // Test for conversion rate display
  it('should have a conversion rate display', () => {
    const conversionRate = container.querySelector('.conversion-rate');
    expect(conversionRate).not.toBeNull();
  });
});

describe('Currency Converter Integration Tests', () => {
  // Test if the dropdowns are populated with options using actual API
  it('should populate currency dropdowns with options from the API', async () => {
    await waitForDOMUpdates(); // Wait for DOM updates
    const currencyOne = container.querySelector('#currencyOne');
    const currencyTwo = container.querySelector('#currencyTwo');
    expect(currencyOne.children.length).toBeGreaterThan(0);
    expect(currencyTwo.children.length).toBeGreaterThan(0);
  });

  // Test if the conversion rate display updates correctly using actual API
  it('should update the conversion rate display and second input value when input value changes', async () => {
    const inputOne = container.querySelector('#inputOne');
    const inputTwo = container.querySelector('#inputTwo');
    const currencyOne = container.querySelector('#currencyOne');
    const currencyTwo = container.querySelector('#currencyTwo');
    const conversionRateDisplay = container.querySelector('#conversionRate');

    // Set initial values
    inputOne.value = 100;
    currencyOne.value = 'USD';
    currencyTwo.value = 'EUR';

    // Dispatch input event to trigger conversion
    inputOne.dispatchEvent(new dom.window.Event('input'));

    await waitForDOMUpdates(); // Wait for fetch and DOM updates

    const conversionRate = parseFloat(conversionRateDisplay.textContent.split(':')[1].trim());
    const expectedValue = (100 * conversionRate).toFixed(2);

    expect(inputTwo.value).toBe(expectedValue);
  });
});

describe('Currency Converter Unit Tests with Mocked Values', () => {
  // Mock the fetch function to simulate API responses with static conversion rates
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          conversion_rates: {
            USD: 1,
            EUR: 0.85,
            GBP: 0.75
          }
        })
      })
    );
  });

  afterAll(() => {
    global.fetch.mockRestore();
  });

  // Helper function to trigger input event
  function triggerInputEvent(inputElement) {
    inputElement.dispatchEvent(new dom.window.Event('input'));
  }

  // Test for positive number input
  it('should handle positive number input correctly', async () => {
    const inputOne = container.querySelector('#inputOne');
    const inputTwo = container.querySelector('#inputTwo');
    const currencyOne = container.querySelector('#currencyOne');
    const currencyTwo = container.querySelector('#currencyTwo');

    inputOne.value = 100;
    currencyOne.value = 'USD';
    currencyTwo.value = 'EUR';

    triggerInputEvent(inputOne);

    await new Promise((resolve) => setTimeout(resolve, 100)); // Wait for fetch and DOM updates

    const expectedValue = (100 * 0.85).toFixed(2);

    expect(inputTwo.value).toBe(expectedValue);
  });

  // Test for zero input
  it('should handle zero input correctly', async () => {
    const inputOne = container.querySelector('#inputOne');
    const inputTwo = container.querySelector('#inputTwo');
    const currencyOne = container.querySelector('#currencyOne');
    const currencyTwo = container.querySelector('#currencyTwo');

    inputOne.value = 0;
    currencyOne.value = 'USD';
    currencyTwo.value = 'EUR';

    triggerInputEvent(inputOne);

    await new Promise((resolve) => setTimeout(resolve, 100)); // Wait for fetch and DOM updates

    expect(inputTwo.value).toBe('0.00');
  });

  // Test for negative number input
  it('should handle negative number input correctly', async () => {
    const inputOne = container.querySelector('#inputOne');
    const inputTwo = container.querySelector('#inputTwo');
    const currencyOne = container.querySelector('#currencyOne');
    const currencyTwo = container.querySelector('#currencyTwo');

    inputOne.value = -100;
    currencyOne.value = 'USD';
    currencyTwo.value = 'EUR';

    triggerInputEvent(inputOne);

    await new Promise((resolve) => setTimeout(resolve, 100)); // Wait for fetch and DOM updates

    const expectedValue = (-100 * 0.85).toFixed(2);

    expect(inputTwo.value).toBe(expectedValue);
  });

  // Test to ensure text cannot be entered into input fields
  it('should not allow text input in the input fields', async () => {
    const inputOne = container.querySelector('#inputOne');
    const inputTwo = container.querySelector('#inputTwo');

    inputOne.value = 'text';
    inputTwo.value = 'text';

    // Dispatch input event to trigger any potential changes
    triggerInputEvent(inputOne);
    triggerInputEvent(inputTwo);

    await new Promise((resolve) => setTimeout(resolve, 100)); // Wait for fetch and DOM updates

    expect(inputOne.value).toBe('');
    expect(inputTwo.value).toBe('');
  });
});
