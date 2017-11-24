import React, { Component } from 'react';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar';
import './features.scss';
import Header from '../../../Header/Header';

class Features extends Component {
  render() {
    return (
      <div>
      <Header />
      <div className="features-body">
        

          <div className="features-wrapper">

          <ProjectSetupSidebar />

              <div className="features-area">
                  <h1>Features</h1>
                  <div className="features-input-one">
                        <h3>1.</h3>
                        <input placeholder="Feature"></input>
                        <button>Save</button>
                  </div>
                  <div className="features-input-two">
                        <h3>2.</h3>
                        <input placeholder="Feature"></input>
                        <button>Save</button>
                  </div>
                  <div className="features-add">
                      <a href="">+Add</a>
                  </div>
              </div>

          </div>

      </div>
      </div>
    );
  }
}

export default Features;