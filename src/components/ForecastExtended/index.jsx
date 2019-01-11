import React from 'react';
import { connect } from 'react-redux';
import WeatherLocation from '../WeatherLocation';

const ForecastExtended = ({ forecast }) => {
    console.log(forecast);
    return forecast.map(singleForecast => {
        const { temperature, pressure, humidity, weatherId } = singleForecast;
        const weather = { temperature, pressure, humidity, weatherId };
        const { unixTime: city } = singleForecast;
        const data = { city, weather };
        return (
            <WeatherLocation key={singleForecast.unixTime} forecast={data}/>
        )
    })
}


const mapStateToProps = state => ({
    forecast: state.forecast
})

export default connect(mapStateToProps, null)(ForecastExtended);