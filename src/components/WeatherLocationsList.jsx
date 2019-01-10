import React from 'react';
import WeatherLocation from './WeatherLocation';

const WeatherLocationsList = ({ aCities }) => {
    return (
        <div>
            { aCities.map(city => <WeatherLocation key={city} city={city}/>) }
        </div>
    )
};

export default WeatherLocationsList;