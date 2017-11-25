import React, { Component } from 'react';
import Header from '../../../Header/Header';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar'
import './endpoints.scss';

class Endpoints extends Component {
  render() {
    return (
      <div>
      <Header />
        <div>
          <ProjectSetupSidebar />
          <div className="endpoints-container">
              
          </div>
        </div>
      </div>
    );
  }
}

export default Endpoints;