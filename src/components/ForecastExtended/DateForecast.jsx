import React from 'react';

import WeatherIcons from 'react-weathericons';
import { getWeatherKeyword } from '../../utils/weatherIconsUtils';

const dateStyle = {
    color: 'white',
    fontWeight: 'bold'
}

const DateForecast = ({ city, weatherId }) => {
    const iconId = getWeatherKeyword(weatherId);
    return (
        <div style={dateStyle}>
        <WeatherIcons name={iconId} size="2x"/>
        <span style={{ marginLeft: '30px'}}>{ city }</span>
        </div>
    );
};

export default DateForecast;