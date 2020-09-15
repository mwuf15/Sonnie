import React from 'react';
import styles from '../PictureView.css';

const PictureView = ({ volt, character, image, location, temperature }) => (
  <div className={styles.imageContainer}>
    <img className={styles.image} src={image.sunny} ></img>
    <img className={styles.character} src={character.sunnyBear} ></img>
    <div className={styles.locationIcon}><i className="fas fa-map-marker-alt fa-4x"></i></div>
    <div className={styles.location}>{location}</div>
    <div className={styles.volt}>{volt} V</div>
    <div className={styles.voltIcon}><i className="fas fa-bolt fa-5x"></i></div>
    <div className={styles.temperatureIcon}><i className="fas fa-sun fa-5x"></i></div>
    <div className={styles.temperature}>{temperature} º</div>
  </div>
);

export default PictureView;