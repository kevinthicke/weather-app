import React from 'react';
import { connect } from 'react-redux';
import WeatherLocation from './WeatherLocation';

const WeatherLocationsList = ({ aWeatherLocationProps }) => {
    const handleSelectedLocation = (city) => console.log('He recibido el click desde WeatherLocationList!' + city)

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

export default connect(mapStateToProps, null)(WeatherLocationsList)