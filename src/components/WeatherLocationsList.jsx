import React from 'react';
import { connect } from 'react-redux';
import WeatherLocation from './WeatherLocation';
import { loadExtendedForecast } from '../actions';

const WeatherLocationsList = ({ aWeatherLocationProps, handleSelectedLocation }) => {
    return (
        <div>
            { aWeatherLocationProps.map(
                (data,index) => <WeatherLocation key={index} 
                                                 forecast={data}
                                                 onSelectedLocation={(city) => handleSelectedLocation(city)}/>) }
        </div>
    )
};


const mapStateToProps = state => ({
    aWeatherLocationProps: state.data
})

const mapDispatchToProps = dispatch => ({
    handleSelectedLocation: city => dispatch(loadExtendedForecast(city))
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherLocationsList)