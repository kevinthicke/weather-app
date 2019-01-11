import React from 'react';
import DateForecast from './DateForecast';
import WeatherForecast from './WeatherForecast';

const SingleForecastStyle = {
    width: '90%',
    height: '100px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    boxShadow: '0px 1px 0px 0px black, 0px -1px 0px 0px black'
}

const SingleForecast = ({ forecast: { city, weather }}) => {
    const { temperature, pressure, humidity, weatherId } = weather;
    return (
        <div style={SingleForecastStyle}>
            <DateForecast city={city} weatherId={weatherId}/>
            <WeatherForecast temperature={temperature} pressure={pressure} humidity={pressure}/>
        </div>
    );
};

export default SingleForecast;