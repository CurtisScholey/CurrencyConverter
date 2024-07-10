require('dotenv').config();
const apiKeyConfig = process.env.API_KEY;
console.log(apiKeyConfig);

module.exports = {
    apiKeyConfig
};
