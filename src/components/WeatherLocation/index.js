import React from 'react';
import WeatherIcons from 'react-weathericons'
import * as styles from './styles.css';

const WeatherLocation = () => {
    return (
        <div className={styles.WeatherLocation}>
            <div className={styles.Location}>London</div>
            <div className={styles.Temperature}>
                <span className={styles.WeatherIcon}> <WeatherIcons name="day-sunny" size="3x"/> </span>
                <span className={styles.TempValue}> 21º</span>
            </div>
            <div className={styles.ExtraInfo}>
                <li className={styles.ExtraInfoItem}>
                    <span>Pressure</span>
                    <span>12194 atm</span> 
                </li>
                <li className={styles.ExtraInfoItem}>
                    <span>Humidity</span>
                    <span>91%</span>
                </li>
            </div> 
            
        </div>
    );
};

export default WeatherLocation;