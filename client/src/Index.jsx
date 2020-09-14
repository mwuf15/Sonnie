import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const dummy = {
  location: 'San Francisco, CA',
  character: {sunnyBear:'https://homepictures.s3-us-west-1.amazonaws.com/MVP/pb2+copy.png'},
  backgroundImages: {sunny: 'https://homepictures.s3-us-west-1.amazonaws.com/MVP/beach.jpg', night: 'https://homepictures.s3-us-west-1.amazonaws.com/MVP/night-sky-wide-wallpaper.jpg'},
  temperature: '65º',
  volt: '130 v'
}
ReactDOM.render(<App data={dummy}/>, document.getElementById('app'));