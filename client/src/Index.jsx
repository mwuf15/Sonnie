import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const dummy = {
  location: 'San Francisco, CA',
  character: {sunnyBear:'https://homepictures.s3-us-west-1.amazonaws.com/MVP/pb2+copy.png'},
  backgroundImages: {sunny: 'https://homepictures.s3-us-west-1.amazonaws.com/MVP/beach.jpg', night: 'https://homepictures.s3-us-west-1.amazonaws.com/MVP/night-sky-wide-wallpaper.jpg'},
  temperature: '65º',
  volt: '62.3 v',
  battery: [12.3, 12.3, 12.2, 12.2, 12.2, 12.2, 12.1, 12.1, 12.3, 12.4, 12.5, 12.6, 13.0, 13.3, 13.6, 14.0, 14.6, 13.5, 13.0, 12.6, 12.6, 12.4, 12.4, 12.4],
  ampUsage: '5.5 A',
  solarPanel: '268.6 W'

}
ReactDOM.render(<App data={dummy}/>, document.getElementById('app'));