import React, { Component } from 'react';
import Header from '../../../Header/Header';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar'
import './endpoints.scss';

class Endpoints extends Component {
  render() {
    return (
      <div>
      <Header />
        <div className="project-view">
          <ProjectSetupSidebar />
          <div className="endpoints-container">
          <div className="endpoints-inner-container">
        
            <label className="project-section-header">Endpoints</label>
            <div>

            </div>
            </div>
              
          </div>
        </div>
      </div>
    );
  }
}

export default Endpoints;