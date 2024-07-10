/* --Code to use dotenv upon upscaling of the project--
import dotenv from 'dotenv'; //Imports env
dotenv.config(); 
const apiKey = process.env.API_KEY; //Summons api key
console.log(apiKey); //Logging the API key for verification purposes
export { apiKey }; //Exports apikey
*/

const apiKey = "132e8ef7c1d49498628ffb91";
console.log(apiKey);

export { apiKey };


