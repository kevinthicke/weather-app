import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

const initialState = {
    currentWeather: [],
    forecast: []
}

export const store = createStore(
    reducer, 
    initialState, 
    applyMiddleware(thunk)
    );
