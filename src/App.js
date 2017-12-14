import React, { Component } from 'react';
import './App.scss';
import Body from './components/Body/Body';
import Tracking from './components/content/project_components/Tracking/Tracking';
import Features from './components/content/project_components/Features/Features';


class App extends Component {
  
  render() {
    return (
      <div className="App">
          {/* <Body /> */}

          //Landon Testing Stuff
          {/* <Tracking /> */}
          <Features />
      </div>
    );
  }
}

export default App;
