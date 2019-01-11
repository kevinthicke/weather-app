import { urlForecast } from './url';
import filterForecastByHour, { unixTimeToString } from './moment';


const limitForecast = data => {
    const {
        city: {
            name
        },
        list: forecast
    } = data;

    const aFilteredForecastByHour = filterForecastByHour(forecast);
    
    return aFilteredForecastByHour.map(element => {
        const { 
            dt: unixTime,
            main: {
                humidity,
                pressure,
                temp: temperature
            },
            weather: [{
                id: weatherId
            }]
        } = element;

        const dateTime = unixTimeToString(unixTime);

        return({ dateTime, humidity, pressure, temperature, weatherId });
    });
}

export default function getForecast (city) {
    const url = urlForecast(city);
    return fetch(url).then(
        response => response.json()).then(
            data => limitForecast(data));
}
