import getWeather from './../utils/getWeather';
import { LOAD_WEATHER } from './types';
/*
Note: The function loadWeather returns a function. Redux don't know how to handle it natively. 
Most popular middleware that will let us return a function from your action creators is a 
'redux-thunk'.

const loadWeather = city => {
    return dispatch => getWeather(city).then(limitedData => {
        dispatch({ 
            type: LOAD_WEATHER, 
            data: { 
                city, 
                weather: limitedData } 
        })
    });
}
*/

/* for dev */

const data = {
        city: "London",
        weather: {
            temperature: 4,
            pressure: 1029,
            humidity: 75,
            weatherId: 500
    }
}

const loadWeather = dummyparameter => {
    return dispatch => {
        dispatch({ 
            type: LOAD_WEATHER, 
            data
        })
    }
}


export { loadWeather }