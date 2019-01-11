import React from 'react';
import { connect } from 'react-redux';
import * as styles from './styles.css';

const ForecastExtended = (forecast) => {
    console.log(forecast);
    return (
        <div className={styles.ForecastExtended}>
        Forecast Extended
        </div>
    );
};

const mapStateToProps = state => ({
    forecast: state.forecast
})

export default connect(mapStateToProps, null)(ForecastExtended);