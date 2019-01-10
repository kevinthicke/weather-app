import React from 'react';
import WeatherIcons from 'react-weathericons';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getWeatherKeyword } from '../../../utils/weatherIconsUtils';

const temperatureStyle = {
    background: '#5bc0de',
    color: '#292b2c',
    borderRadius: '2px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    padding: '20px'
}

const weatherIconStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const temperatureLoadingStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const Temperature = ({ temperature, weatherId }) => {
    const iconId = getWeatherKeyword(weatherId);

    const renderTemperature = () => (
        <div style={temperatureStyle}>
            <span className={weatherIconStyle}> 
                <WeatherIcons name={iconId} size="3x"/> 
            </span>
            <span className={{ fontSize: '21pt' }}> { temperature }ºC </span>
        </div>
    );

    const renderLoading = () => (
        <div className={temperatureLoadingStyle}>
            <CircularProgress disableShrink />
        </div>
    )
    
    return temperature ? renderTemperature() : renderLoading();

};

export default Temperature;