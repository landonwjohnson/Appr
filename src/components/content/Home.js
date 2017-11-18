import React, { Component } from 'react';
import Login from './Login';
import LandingSlider from './Landing-Slider';
import Header from '../Header';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
          <Login />
          <LandingSlider />
      </div>
    );
  }
}

export default Home;
