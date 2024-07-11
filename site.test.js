const https = require('https'); //GETs https

//Test if the site is accessible
describe('Currency Converter Access Smoke test', () => {
    test('Should load the site successfully', (done) => {
        // GET request to site
        https.get('https://curtisscholey.github.io/CurrencyConverter/', (response) => {
            // Checking if HTTP code is 200 (this means request has succeeded)
            expect(response.statusCode).toBe(200);
            done();
            //e is a callback function to provide error message if failure occurs
        }).on('error', (e) => {
            done(e);
        });
    });
});