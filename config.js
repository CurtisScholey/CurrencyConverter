require('dotenv').config();
const apiKey = process.env.API_KEY;
console.log(apiKey)
module.exports = {
    apiKey
};
