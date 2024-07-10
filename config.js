import dotenv from 'dotenv'; //Imports env

dotenv.config(); 

const apiKey = process.env.API_KEY; //Summons api key

console.log(apiKey); //Logging the API key for verification purposes

export { apiKey }; //Exports apikey
