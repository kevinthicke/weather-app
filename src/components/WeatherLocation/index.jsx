import React, { Component } from 'react';
import * as styles from './styles.css';
import Location from './WeatherInfo/Location';
import Temperature from './WeatherInfo/Temperature';
import ExtraInfo from './WeatherInfo/ExtraInfo';

const WeatherLocation = ({ forecast: { city, weather }, onSelectedLocation }) => {
    const { temperature, pressure, humidity, weatherId } = weather;
    const handleInfoClick = () => onSelectedLocation(city)

    return (
        <div className={styles.WeatherLocation}>
            <Location city={city} onInfoClick={() => handleInfoClick(city)}/>
            <Temperature temperature={temperature} weatherId={weatherId}/>
            <ExtraInfo pressure={pressure} humidity={humidity}/>          
        </div>
    );
};

export default WeatherLocation;