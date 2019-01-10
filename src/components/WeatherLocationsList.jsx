import React from 'react';
import { connect } from 'react-redux';
import WeatherLocation from './WeatherLocation';

const WeatherLocationsList = ({ aWeatherLocationProps }) => {
    return (
        <div>
            { aWeatherLocationProps.map(data => <WeatherLocation key={data.city} forecast={data}/>) }
        </div>
    )
};


const mapStateToProps = state => ({
    aWeatherLocationProps: state.data
})

export default connect(mapStateToProps, null)(WeatherLocationsList)