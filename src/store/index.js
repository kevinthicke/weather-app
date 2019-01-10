import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

const initialState = {
    data: {
        city: null,
        weather: {}
    }
}

export const store = createStore(
    reducer, 
    initialState, 
    applyMiddleware(thunk)
    );
