import React, { Component } from 'react';
import Header from '../../../Header/Header';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar'
import './view.scss';

class View extends Component {
  render() {
    return (
      <div>
      <Header />
        <div>
          <ProjectSetupSidebar />
          <div className="view-container">
              
          </div>
        </div>
      </div>
    );
  }
}

export default View;