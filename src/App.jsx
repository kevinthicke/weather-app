import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AppBar from './components/AppBar';
import WeatherLocation from './components/WeatherLocation';
import ForecastExtended from './components/ForecastExtended';
import WeatherLocationsList from './components/WeatherLocationsList';

const aCities = [ "London", "Bogota", "Cali" ];

export default class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <AppBar/>        
        </Row>
        <Row>
          <Col xs={12} md={5}>
            <WeatherLocationsList aCities={aCities}/>
          </Col>
          <Col xs={12} md={7}>
            <ForecastExtended/>
          </Col>
        </Row>
      </Grid>
    )
        
  }
}
