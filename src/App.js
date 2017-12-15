import React, { Component } from 'react';
import './App.scss';
import Body from './components/Body/Body';
import Tracking from './components/content/project_components/Tracking/Tracking';
import Features from './components/content/project_components/Features/Features';
import Controllers from './components/content/project_components/Controllers/Controllers';
import Schema from './components/content/project_components/Schema/Schema';
import Endpoints from './components/content/project_components/Endpoints/Endpoints';
class App extends Component {
  
  render() {
    return (
      <div className="App">
          {/* <Body /> */}

          //Landon Testing Stuff
          <Endpoints />
          <Schema />
          <Tracking />
          <Features />
          <Controllers />
      </div>
    );
  }
}

export default App;
