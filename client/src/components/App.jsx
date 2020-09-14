import React from 'react';
import PictureView from './PictureView.jsx';
import StatusBar from './StatusBar.jsx';
import style from '../App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.data.location,
      character: this.props.data.character,
      backgroundImages: this.props.data.backgroundImages,
      temperature: this.props.data.temperature,
      volt: this.props.data.volt
    }
  }


  render() {
    return (
      <div className={style.container}>
        <PictureView volt={this.state.volt} character={this.state.character} image={this.state.backgroundImages} location={this.state.location} temperature={this.state.temperature}/>
      </div>
    );
  }
}

export default App;