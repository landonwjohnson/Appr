import React, { Component } from 'react';
import './schema.scss';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar';
import Header from '../../../Header/Header';

class Schema extends Component {
  render() {
    return (
      <div>
      <Header />
        <div className="schema-container">
            <ProjectSetupSidebar />
        </div>
      </div>
    );
  }
}

export default Schema;