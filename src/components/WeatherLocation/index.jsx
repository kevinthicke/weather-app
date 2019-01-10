import React, { Component } from 'react';
import * as styles from './styles.css';
import Location from './WeatherInfo/Location';
import Temperature from './WeatherInfo/Temperature';
import ExtraInfo from './WeatherInfo/ExtraInfo';
import getWeather from '../../utils/getWeather';

export default class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: null,
            weather: {}
        }
    }

    componentDidMount = () => {
        const { city } = this.props;
        this.getData(city);
    }

    getData = city => getWeather(city).then(
        limitedData => this.setState({city, weather: limitedData }));

    render() {
        const { 
            city, 
            weather: {
                temperature, 
                pressure, 
                humidity, 
                weatherId 
            }
        } = this.state;

        return (
            <div className={styles.WeatherLocation}>
                { city ? <Location city={city}/> : <Location city={"...loading"}/> }
                <Temperature temperature={temperature} weatherId={weatherId}/>
                <ExtraInfo pressure={pressure} humidity={humidity}/>          
            </div>
        );
    }
};
