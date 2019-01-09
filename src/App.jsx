import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AppBar from './components/AppBar';
import WeatherLocation from './components/WeatherLocation';

export default class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <AppBar/>        
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <WeatherLocation/>
          </Col>
        </Row>
      </Grid>
    )
        
  }
}
