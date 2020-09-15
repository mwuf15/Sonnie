import React from 'react';
import styles from '../PowerStatus.css';

const PowerStatus = ({annual, month, day, clickDay, clickMonth, clickTotal}) => (
  <div className={styles.powerStatusContainer}>
    <div className={styles.box1} onClick={clickDay} >
      <img className={styles.boxL} src='https://homepictures.s3-us-west-1.amazonaws.com/MVP/darkgrey.jpg' ></img>
      <div className={styles.title}>Day</div>
      <div className={styles.info}>{day} kWh</div>
    </div>
    <div className={styles.box1} onClick={clickMonth}>
      <img className={styles.boxM} src='https://homepictures.s3-us-west-1.amazonaws.com/MVP/darkgrey.jpg' ></img>
      <div className={styles.title}>Month</div>
      <div className={styles.info}>{month} kWh</div>
    </div>
    <div className={styles.box1} onClick={clickTotal}>
      <img className={styles.boxR} src='https://homepictures.s3-us-west-1.amazonaws.com/MVP/darkgrey.jpg' ></img>
      <div className={styles.title}>Total</div>
      <div className={styles.info}>{annual} kWh</div>
    </div>

  </div>
);

export default PowerStatus;