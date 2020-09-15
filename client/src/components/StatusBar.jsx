import React from 'react';
import styles from '../StatusBar.css';

const statusBar = ({battery, amp, panel }) => (
  <div className={styles.statusBarContainer}>
    <div className={styles.box1}>
      <div></div>
      <img className={styles.boxL} src='https://homepictures.s3-us-west-1.amazonaws.com/MVP/darkgrey.jpg' ></img>
      <div className={styles.solarIcon}><i className="fas fa-solar-panel fa-7x"></i></div>
      <div className={styles.panelInfo}>{panel} DC V</div>
    </div>
    <div className={styles.box1}>
      <img className={styles.boxM} src='https://homepictures.s3-us-west-1.amazonaws.com/MVP/darkgrey.jpg' ></img>
      <div className={styles.solarIcon}><i className="fas fa-car-battery fa-7x"></i></div>
      <div className={styles.batteryInfo}>{battery} V</div>
    </div>
    <div className={styles.box1}>
      <img className={styles.boxR} src='https://homepictures.s3-us-west-1.amazonaws.com/MVP/darkgrey.jpg' ></img>
      <div className={styles.solarIcon}><i className="fas fa-plug fa-7x"></i></div>
      <div className={styles.ampInfo}>{amp} A</div>
    </div>


  </div>
);

export default statusBar;