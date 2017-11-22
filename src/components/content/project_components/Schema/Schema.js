import React, { Component } from 'react';
import './schema.scss';
import ProjectSetupSidebar from '../ProjectSetupSidebar';

class Schema extends Component {
  render() {
    return (
      <div className="schema-container">
          <ProjectSetupSidebar />
      </div>
    );
  }
}

export default Schema;