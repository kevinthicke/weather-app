import React from 'react';
import { Button } from 'react-bootstrap';
import * as styles from './styles.css';

const Location = ({ city, onInfoClick }) => {
    return (
        <div className={styles.Location}>
            <span>{ city }</span>
            <Button bsStyle="success" className={styles.infoButton} onClick={onInfoClick}>
                + info
            </Button>
        </div>
    );
};

export default Location;