import { LOAD_WEATHER } from "../actions/types";

export default function reducer (state, action) {
    switch (action.type) {
        case LOAD_WEATHER: 
            return ({
                ...state,
                data: state.data.concat(action.data)
            });
        case 'LOAD_EXTENDED_FORECAST':
            return({
                ...state,
                forecast: action.forecast
            });
        default: 
            return state;
    }
}