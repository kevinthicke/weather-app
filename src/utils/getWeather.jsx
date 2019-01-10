import { urlWeather } from "./url";
import fetch from 'node-fetch';
import convertTemperaturefromKelvinToCentrigrates from "./temperatureConverter";

const limitWeatherData = data => {
    const {  
        main: { 
            temp,
            pressure,
            humidity
        },
        weather: [{
            id: weatherId
        }]
    } = data;

    const temperature = convertTemperaturefromKelvinToCentrigrates(temp);

    return ({ temperature, pressure, humidity, weatherId })
}

export default function getWeather(city) {
    const url = urlWeather(city);

    return fetch(url).then(
        response => response.json()).then( 
            fullData => limitWeatherData(fullData));
}