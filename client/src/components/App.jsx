import React from 'react';
import PictureView from './PictureView.jsx';
import StatusBar from './StatusBar.jsx';
import PowerStatus from './PowerStatus.jsx';
import DayGraph from './DayGraph.jsx';
import MonthGraph from './MonthGraph.jsx';
import TotalGraph from './TotalGraph.jsx';
import styles from '../App.css';
import axios from 'axios';
import key from '../keyConfig.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    let d = new Date();
    let hour = d.getHours();
    this.state = {
      location: '',
      time: '',
      character: '',
      backgroundImages: '',
      temperature: '',
      currentVolt: '',
      battery: '',
      ampUsage: '',
      solarPanel: '',
      annual: '',
      month: '',
      day: '',
      currentStatusIcon: '',
      displayDay: true,
      displayMonth: false,
      displayTotal: false,
      dayData: [],
      monthData: [],
      TotalData: [],
      monthDate: ''
    };
    this.clickHandlerDay = this.clickHandlerDay.bind(this);
    this.clickHandlerMonth = this.clickHandlerMonth.bind(this);
    this.clickHandlerTotal = this.clickHandlerTotal.bind(this);
  }

componentDidMount() {
this.getApiData();
this.getWeather();
}

getApiData() {
  let url = ` https://developer.nrel.gov/api/pvwatts/v6.json?api_key=${key.Token}&lat=37.71&lon=-122&system_capacity=1&azimuth=180&tilt=35&array_type=1&module_type=1&losses=10&timeframe=hourly`;
  let d = new Date();
  let month = d.getMonth();
  // let hour = d.getHours();
  let hour = 15;
  axios.get(url)
    .then((response) => {
      console.log('api data', response.data);
      let total = (response.data.outputs.ac_annual).toFixed(2);
      let monthTotal = (response.data.outputs.ac_monthly[month]).toFixed(2);
      let current = (response.data.outputs.ac[hour]).toFixed(2);
      let currentDC = (response.data.outputs.dc[hour]).toFixed(1);
      let batteryInfo = this.props.data.battery[hour];
      let usage = this.props.data.ampUsage[hour];
      let day = 0;
      let dataArr = [];
      let totaldata = response.data.outputs.dc_monthly;
      let monthly = response.data.outputs.solrad_monthly;
      for (let i = 0; i < hour; i++) {
        day += response.data.outputs.ac[i];
        dataArr.push(response.data.outputs.ac[i]);
      }
      let dayTotal = 0;
      if ( day === 0) {
        dayTotal = 0;
        // dataArr =[];
      } else {
        dayTotal = (day/ hour).toFixed(2);
      }
      console.log(dayTotal);
      this.setState({annual: total, month: monthTotal, currentVolt: current, day: dayTotal, solarPanel: currentDC, battery: batteryInfo, ampUsage: usage, dayData: dataArr, TotalData: totaldata , monthData: monthly, monthDate: month});
    })
    .catch((err) => {
      console.log('error', err);
    })
}

getWeather() {
  let d = new Date();
  let hour = d.getHours();
  let time = d.toLocaleTimeString();
  // let hour = 12;
  let url = `http://api.weatherstack.com/current?access_key=${key.Weather}&query=San Francisco`;
  axios.get(url)
    .then((response) => {
      console.log('weather', response.data);
      let temp = (response.data.current.temperature);
      // console.log(temp)
      let tempF = ((temp * 9/5) + 32).toFixed(0);
      let status = response.data.current.weather_descriptions[0];
      // console.log(status)
      let tempStatus = '';
      if (status.includes('Haze')) {
        tempStatus = 'haze';
      } else if (status.includes('Sunny')) {
        tempStatus = 'sunny';
      } else if (status.includes('rain')) {
        tempStatus ='rain';
      } else if (status.includes('cloudy')) {
        tempStatus = 'cloudy';
      } else {
        tempStatus = 'sunny';
      }

      if (hour > 20 || hour < 5) {
        tempStatus = 'night';
      }
      console.log(hour)
      let background = this.props.data.backgroundImages[tempStatus]
      let weatherIcon = this.props.data.statusIcon[tempStatus];
      let bear = this.props.data.character[tempStatus];
      this.setState({location: response.data.location.name, temperature: tempF, currentStatusIcon: weatherIcon, backgroundImages: background, character: bear, time: time})
    })
    .catch((err) => {
      console.log('error', err);
    })
}

clickHandlerDay() {
  console.log('clicked day');
  this.setState({displayDay: true, displayMonth:false, displayTotal:false})
}

clickHandlerMonth() {
  console.log('clicked month');
  this.setState({displayDay: false, displayMonth:true, displayTotal:false})
}

clickHandlerTotal() {
  console.log('clicked total');
  this.setState({displayDay: false, displayMonth:false, displayTotal:true})
}

  render() {
    const isDay = this.state.displayDay;
    const isMonth = this.state.displayMonth;
    const isTotal = this.state.displayTotal;
    return (
      <div className={styles.container}>
        <PictureView volt={this.state.currentVolt} character={this.state.character} image={this.state.backgroundImages} location={this.state.location} temperature={this.state.temperature} icon={this.state.currentStatusIcon} time={this.state.time}/>
        <StatusBar battery={this.state.battery} amp={this.state.ampUsage} panel={this.state.solarPanel}/>
        <PowerStatus annual={this.state.annual} month={this.state.month} day={this.state.day} clickDay={this.clickHandlerDay} clickMonth={this.clickHandlerMonth} clickTotal={this.clickHandlerTotal} DayStatus={isDay} MonthStatus={isMonth} TotalStatus={isTotal}/>
        <div className={styles.graph} >
          {isDay ? <DayGraph data={this.state.dayData} /> : null}
          {isMonth ? <MonthGraph data={this.state.monthData}/> : null}
          {isTotal ? <TotalGraph data={this.state.TotalData} month={this.state.monthDate}/> : null}

        </div>
      </div>
    );
  }
}

export default App;