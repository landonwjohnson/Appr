import React, { Component } from 'react';
import './App.scss';
import AuthBody from './components/AuthBody/AuthBody';
import VUserBody from './components/VUserBody/VUserBody';

class App extends Component {
  constructor(){
    super();
    this.state = {
   
    }
  }
  render() {
    return (
      <div className="App">
          {/* <AuthBody /> */}
          <VUserBody />
      </div>
    );
  }
}

export default App;
