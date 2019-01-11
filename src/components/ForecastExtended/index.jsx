import React from 'react';
import { connect } from 'react-redux';
import SingleForecast from './SingleForecast';

const ForecastExtendedStyle = {
    color: 'white',
    background: '#212529',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '3px',
}

const ListForecast = {
    marginLeft:'40px',
    width: '99%', 
    height:'500px',
    overflowY:'scroll',
    overflowX:'hidden'
}

const titleStyle = {
    background: '#428bca',
    textAlign: 'center',
    width: '400px',
    fontSize: '27pt',
    marginTop: '10px',
    marginBottom: '30px',
    borderRadius: '3px'
}

const ForecastExtended = ({ forecast }) => {
    
    const renderForecastExtended = () => forecast.map(
        (singleForecast, index) => {
            const { dateTime: city, ...weather } = singleForecast;
            const data = { city, weather };
                    
            return <SingleForecast key={index} forecast={data}/>;
        })
    
    return (
        <div style={ForecastExtendedStyle}>
            <span style={titleStyle}>Forecast Extended</span>
            <div style={ListForecast}>
                { renderForecastExtended() }
            </div>
        </div>
    )
}


const mapStateToProps = state => ({
    forecast: state.forecast
})

export default connect(mapStateToProps, null)(ForecastExtended);