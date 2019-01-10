import { LOAD_WEATHER } from "../actions/types";

export default function reducer (state, action) {
    switch (action.type) {
        case LOAD_WEATHER: 
            return ({
                ...state,
                data: action.data
            });
        default: 
            return state;
    }
}