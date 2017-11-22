import React, { Component } from 'react';
import './tracker.scss';
import ProjectSetupSidebar from '../ProjectSetupSidebar';

class Tracker extends Component {
  render() {
    return (
      <div className="tracker-container">
          <ProjectSetupSidebar />
      </div>
    );
  }
}

export default Tracker;