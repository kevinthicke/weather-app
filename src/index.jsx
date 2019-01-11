import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import { loadWeather } from './actions';

const aCities = ["London", "Bogota", "Cali"];

aCities.forEach(city => {
    store.dispatch(loadWeather(city))
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app'));
