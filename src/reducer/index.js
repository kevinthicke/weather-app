import { LOAD_WEATHER, LOAD_EXTENDED_FORECAST } from "../actions/types";

export default function reducer (state, action) {
    switch (action.type) {
        case LOAD_WEATHER: 
            return ({
                ...state,
                currentWeather: state.currentWeather.concat(action.currentWeather)
            });
        case LOAD_EXTENDED_FORECAST:
            return({
                ...state,
                forecast: action.forecast
            });
        default: 
            return state;
    }
}