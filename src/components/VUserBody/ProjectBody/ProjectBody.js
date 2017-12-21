import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ProjectSidebar from './ProjectSidebar/ProjectSidebar';
import IdeasUsers from './Ideas_Users/Ideas_Users';
import Features from './Features/Features';
import View from './View/View';
import Controllers from './Controllers/Controllers';
import Schema from './Schema/Schema';
import Endpoints from './Endpoints/Endpoints';
import Tracking from './Tracking/Tracking';



class ProjectBody extends Component {
  render() {
    console.log(this.props)
    const { projectInfo } = this.props;

    let blurOverlay ={
      'height': '100%',
      'width':  '100%',
      'position': 'absolute',
      'zIndex': '0',
      'backgroundImage': `url(${projectInfo.background})`,
      'filter': 'blur(7px)'
    }

    return (
      <div style={{'display': 'flex'}}>
        <ProjectSidebar />
        <div style={blurOverlay} />
              <Route component={ IdeasUsers } path="/user/:userid/project/:projectid/ideas" />
              <Route component={ Features }path="/user/:userid/project/:projectid/features"/>
              <Route component={ View } path="/user/:userid/project/:projectid/views" />
              <Route component={ Controllers } path="/user/:userid/project/:projectid/controllers" />
              <Route component={ Schema } path="/user/:userid/project/:projectid/schema" />
              <Route component={ Endpoints } path="/user/:userid/project/:projectid/endpoints" />
              <Route component={ Tracking } path="/user/:userid/project/:projectid/tracker"/>   
      </div>
    );
  }
}

export default ProjectBody;
