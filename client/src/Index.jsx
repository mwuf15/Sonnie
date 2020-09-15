import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const data = {
  character: {sunny:'https://homepictures.s3-us-west-1.amazonaws.com/MVP/pb2+copy.png', night: 'https://homepictures.s3-us-west-1.amazonaws.com/MVP/sleep+bear.png', rain:'https://homepictures.s3-us-west-1.amazonaws.com/MVP/rainbear.png', cloudy: 'https://homepictures.s3-us-west-1.amazonaws.com/MVP/cloudybear.png', haze: 'https://homepictures.s3-us-west-1.amazonaws.com/MVP/hazebear.png'},
  backgroundImages: {sunny: 'https://homepictures.s3-us-west-1.amazonaws.com/MVP/beach.jpg', night: 'https://homepictures.s3-us-west-1.amazonaws.com/MVP/night-sky-wide-wallpaper.jpg', haze:'https://homepictures.s3-us-west-1.amazonaws.com/MVP/citysmokeeee.jpg', cloudy: 'https://homepictures.s3-us-west-1.amazonaws.com/MVP/cloudy.jpg', rain: 'https://homepictures.s3-us-west-1.amazonaws.com/MVP/rain.gif' },
  battery: [12.3, 12.3, 12.2, 12.2, 12.2, 12.2, 12.1, 12.1, 12.3, 12.4, 12.5, 12.6, 13.0, 13.3, 13.6, 14.0, 14.6, 13.5, 13.0, 12.6, 12.6, 12.4, 12.4, 12.4],
  ampUsage: [5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.5, 5.8, 6.0, 6.0, 7.5, 8.0, 12.0, 14.0, 15.0, 15.0, 13.0, 11.0, 8.0, 8.0, 7.7, 5.9],
  statusIcon: {haze:<i className="fas fa-smog fa-6x"></i>, sunny: <i className="fas fa-sun fa-6x"></i>, rain: <i className="fas fa-cloud-rain fa-6x"></i>, cloudy: <i className="fas fa-cloud fa-6x"></i>, night: <i className="fas fa-moon fa-6x"></i> }

}
ReactDOM.render(<App data={data}/>, document.getElementById('app'));