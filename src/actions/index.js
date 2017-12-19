import axios from 'axios';

// Udemy Weather API Key: 7fa8ec9df61e7491a3a249fc17e54cb0
const API_KEY = '7fa8ec9df61e7491a3a249fc17e54cb0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// npm install --save axios

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;  // always United States, thus 'us'
    const request = axios.get(url);  // returns a promise

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}