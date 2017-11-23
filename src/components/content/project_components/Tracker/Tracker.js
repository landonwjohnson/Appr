import React, { Component } from 'react';
import Header from '../../../Header/Header';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar'
import './tracker.scss';

class Tracker extends Component {
  render() {
    return (
      <div>
      <Header />
        <div>
          <ProjectSetupSidebar />
          <div className="tracker-container">
              
          </div>
        </div>
      </div>
    );
  }
}

export default Tracker;