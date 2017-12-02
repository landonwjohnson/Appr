import React, { Component } from 'react';
import Header from '../../Header/Header';
import Nav_Sidebar from '../Nav_Sidebar/Nav_Sidebar';
import './features.scss';

class Features extends Component {
  render() {
    return (
      <div className="features-body">
          <Header />

          <div className="features-wrapper">

              <Nav_Sidebar />

              <div className="features-area">
                  <h1>Features</h1>
                  <div className="features-input-one">
                        <h3>1.</h3>
                        <input placeholder="Feature"/>
                        <button>Save</button>
                  </div>
                  <div className="features-input-two">
                        <h3>2.</h3>
                        <input placeholder="Feature"/>
                        <button>Save</button>
                  </div>
                  <div className="features-add">
                      <a href="">+Add</a>
                  </div>
              </div>

          </div>

      </div>
    );
  }
}

export default Features;