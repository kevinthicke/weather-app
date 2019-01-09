import React from 'react';
import { Navbar } from 'react-bootstrap';

const AppBar = () => {
    return (
        <Navbar inverse collapseOnSelect staticTop>
            <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">Weather App</a>
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>
    );
};

export default AppBar;