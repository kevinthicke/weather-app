import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as styles from './styles.css';
import Location from './WeatherInfo/Location';
import Temperature from './WeatherInfo/Temperature';
import ExtraInfo from './WeatherInfo/ExtraInfo';

class WeatherLocation extends Component {
    render() {
        const { city, weather: { humidity, pressure, temperature, weatherId }} = this.props.data;
        return (
            <div className={styles.WeatherLocation}>
                <Location city={city}/>
                <Temperature temperature={temperature} weatherId={weatherId}/>
                <ExtraInfo pressure={pressure} humidity={humidity}/>          
            </div>
        );
    }
};

const mapStateToProps = state => ({
    data: state.data
})

export default connect(mapStateToProps, null)(WeatherLocation);