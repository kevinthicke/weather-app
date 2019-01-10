import React from 'react';
import WeatherIcons from 'react-weathericons';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as styles from './styles.css';
import { getWeatherKeyword } from '../../../utils/weatherIconsUtils';


const Temperature = ({ temperature, weatherId }) => {
    const iconId = getWeatherKeyword(weatherId);

    const renderTemperature = () => (
        <div className={styles.Temperature}>
            <span className={styles.WeatherIcon}> 
                <WeatherIcons name={iconId} size="3x"/> 
            </span>
            <span className={styles.TempValue}> { temperature }ºC </span>
        </div>
    );

    const renderLoading = () => (
        <div className={styles.TemperatureLoading}>
            <CircularProgress disableShrink />
        </div>
    )
    
    return temperature ? renderTemperature() : renderLoading();

};

export default Temperature;