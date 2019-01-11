import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

const initialState = {
    data: [],
    forecast: []
}

export const store = createStore(
    reducer, 
    initialState, 
    applyMiddleware(thunk)
    );
