import React, { Component } from 'react';
import './App.scss';
import Body from './components/Body/Body';
import Header from './/components/Header/Header';
class App extends Component {
  constructor(){
    super();
    this.state = {
      location: ''
    }
  }
  render() {
    return (
      <div className="App">
          <Body location={this.state.location} />
      </div>
    );
  }
}

export default App;
