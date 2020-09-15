import React from 'react';
import PictureView from './PictureView.jsx';
import StatusBar from './StatusBar.jsx';
import PowerStatus from './PowerStatus.jsx';
import style from '../App.css';
import axios from 'axios';
import key from '../keyConfig.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    let d = new Date();
    let hour = d.getHours();
    this.state = {
      location: '',
      character: this.props.data.character,
      backgroundImages: this.props.data.backgroundImages,
      temperature: '',
      currentVolt: '',
      battery: this.props.data.battery[hour],
      ampUsage: this.props.data.ampUsage,
      solarPanel: '',
      annual: '',
      month: '',
      day: ''
    }
  }
componentDidMount() {
this.getApiData();
this.getWeather();
}

getApiData() {
  let url = ` https://developer.nrel.gov/api/pvwatts/v6.json?api_key=${key.Token}&lat=37.71&lon=-122&system_capacity=1&azimuth=180&tilt=35&array_type=1&module_type=1&losses=10&timeframe=hourly`;
  let d = new Date();
  let month = d.getMonth();
  let hour = d.getHours();
  axios.get(url)
    .then((response) => {
      console.log('api data', response.data);
      let total = (response.data.outputs.ac_annual).toFixed(2);
      let monthTotal = (response.data.outputs.ac_monthly[month]).toFixed(2);
      let current = (response.data.outputs.ac[hour]).toFixed(2);
      let currentDC = (response.data.outputs.dc[hour]).toFixed(2);
      let day = 0;
      for (let i = 0; i < hour; i++) {
        day += response.data.outputs.ac[i]
      }
      let dayTotal = (day/ hour).toFixed(2);
      console.log(dayTotal);
      this.setState({annual: total, month: monthTotal, currentVolt: current, day: dayTotal, solarPanel: currentDC})
    })
    .catch((err) => {
      console.log('error', err);
    })
}

getWeather() {
  let url = `http://api.weatherstack.com/current?access_key=${key.Weather}&query=San Francisco`;
  axios.get(url)
    .then((response) => {
      console.log('weather', response.data);
      let temp = (response.data.current.temperature);
      console.log(temp)
      let tempF = ((temp * 9/5) + 32).toFixed(0);
      console.log(tempF)
      this.setState({location: response.data.location.name, temperature: tempF})
    })
    .catch((err) => {
      console.log('error', err);
    })
}

  render() {
    return (
      <div className={style.container}>
        <PictureView volt={this.state.currentVolt} character={this.state.character} image={this.state.backgroundImages} location={this.state.location} temperature={this.state.temperature}/>
        <StatusBar battery={this.state.battery} amp={this.state.ampUsage} panel={this.state.solarPanel}/>
        <PowerStatus annual={this.state.annual} month={this.state.month} day={this.state.day}/>
      </div>
    );
  }
}

export default App;