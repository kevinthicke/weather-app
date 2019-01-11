import React from 'react';
import * as styles from './styles.css';

const ExtraInfo = ({ pressure, humidity }) => (
    <div className={styles.ExtraInfo}>
        <li className={styles.ExtraInfoItem}>
            <span>Pressure</span>
            <span>{ pressure } atm</span> 
        </li>
        <li className={styles.ExtraInfoItem}>
            <span>Humidity</span>
            <span>{ humidity }%</span>
        </li>
    </div>
)

export default ExtraInfo;