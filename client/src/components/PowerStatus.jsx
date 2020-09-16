import React from 'react';
import styles from '../PowerStatus.css';

const PowerStatus = ({annual, month, day, clickDay, clickMonth, clickTotal, DayStatus, MonthStatus, TotalStatus}) => {
  let selected1 = DayStatus ? styles.selectedBox1 : styles.box1;
  let selected2 = MonthStatus ? styles.selectedBox2 : styles.box2;
  let selected3 = TotalStatus ? styles.selectedBox3 : styles.box3;
  return(
  <div className={styles.powerStatusContainer}>
    <div className={selected1} onClick={clickDay} >
      <div className={styles.title}>Day</div>
      <div className={styles.info}>{day} kWh</div>
    </div>
    <div className={selected2} onClick={clickMonth}>
      {/* <img className={styles.boxM} src='https://homepictures.s3-us-west-1.amazonaws.com/MVP/darkgrey.jpg' ></img> */}
      <div className={styles.title}>Month</div>
      <div className={styles.info}>{month} kWh</div>
    </div>
    <div className={selected3} onClick={clickTotal}>
      {/* <img className={styles.boxR} src='https://homepictures.s3-us-west-1.amazonaws.com/MVP/darkgrey.jpg' ></img> */}
      <div className={styles.title}>Total</div>
      <div className={styles.info}>{annual} kWh</div>
    </div>
  </div>
  )
};

export default PowerStatus;