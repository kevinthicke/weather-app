import React from 'react';
import { connect } from 'react-redux';
import WeatherLocation from '../WeatherLocation';
import moment from 'moment';

const ForecastExtended = ({ forecast }) => forecast.map(
    singleForecast => {
        const { dateTime: city, ...weather } = singleForecast;
        const data = { city, weather };
                
        return <WeatherLocation key={singleForecast.city} forecast={data}/>;
    })


const mapStateToProps = state => ({
    forecast: state.forecast
})

export default connect(mapStateToProps, null)(ForecastExtended);