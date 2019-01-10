import React, { Component } from 'react';
import * as styles from './styles.css';
import Location from './WeatherInfo/Location';
import Temperature from './WeatherInfo/Temperature';
import ExtraInfo from './WeatherInfo/ExtraInfo';

const WeatherLocation = ({ forecast: { city, weather } }) => {
    const { temperature, pressure, humidity, weatherId } = weather;
    
    return (
        <div className={styles.WeatherLocation}>
            <Location city={city}/>
            <Temperature temperature={temperature} weatherId={weatherId}/>
            <ExtraInfo pressure={pressure} humidity={humidity}/>          
        </div>
    );
};

export default WeatherLocation;