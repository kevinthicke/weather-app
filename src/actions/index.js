import getWeather from './../utils/getWeather';
import { LOAD_WEATHER } from './types';

/*
Note: The function loadWeather returns a function. Redux don't know how to handle it natively. 
Most popular middleware that will let us return a function from your action creators is a 
'redux-thunk'.
*/

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

export { loadWeather }