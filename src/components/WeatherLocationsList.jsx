import React from 'react';
import { connect } from 'react-redux';
import WeatherLocation from './WeatherLocation';
import { loadExtendedForecast } from '../actions';

const WeatherLocationsList = ({ aCurrentWeather, handleSelectedLocation }) => {
    return aCurrentWeather.map(
                (data,index) => <WeatherLocation key={index} 
                                                 data={data}
                                                 onSelectedLocation={(city) => handleSelectedLocation(city)}/>) 
};

const mapStateToProps = state => ({
    aCurrentWeather: state.currentWeather
})

const mapDispatchToProps = dispatch => ({
    handleSelectedLocation: city => dispatch(loadExtendedForecast(city))
})

export default connect(mapStateToProps, mapDispatchToProps)(WeatherLocationsList)