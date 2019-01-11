import React from 'react';

const WeatherForecastStyle = {
    marginTop: '20px',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 2fr'
}

const itemStyle = {
    width: '180px',
    fontSize: '12pt',
    marginLeft: '10px'
}

const WeatherForecast = ({ temperature, humidity, pressure}) => {
    return (
        <div style={WeatherForecastStyle}>
            <span style={itemStyle}>{ temperature }ºC</span>
            <span style={itemStyle}>humidity { humidity } %</span>
            <span style={itemStyle}>pressure { pressure } atm</span>
        </div>
    );
};

export default WeatherForecast;