import React, { Component } from 'react';
import logo from './logo.svg';
import './css/styles.css';
import Header from './components/Header';
import Home from './components/content/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Home />
      </div>
    );
  }
}

export default App;
