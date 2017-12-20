import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import IdeasUsers from './Ideas_Users/Ideas_Users';
import Features from './Features/Features';
import View from './View/View';
import Controllers from './Controllers/Controllers';
import Schema from './Schema/Schema';
import Endpoints from './Endpoints/Endpoints';
import Tracking from './Tracking/Tracking';

class ProjectBody extends Component {
  render() {
    return (
      <div> 
          <Switch>
              <Route component={ IdeasUsers } path="/user/:userid/project/:projectid/ideas"/>
              <Route path="/user/:userid/project/:projectid/features" render={(props) => (
                <Features background={this.state.projectInfo.background} handleProjectBackground={this.handleProjectBackground}  {...props} />
            )}/>
                <Route component={ View } path="/user/:userid/project/:projectid/views"/>
                <Route component={ Controllers } path="/user/:userid/project/:projectid/controllers"/>
                <Route component={ Schema } path="/user/:userid/project/:projectid/schema"/>
                <Route component={ Endpoints } path="/user/:userid/project/:projectid/endpoints"/>
                <Route component={ Tracking } path="/user/:userid/project/:projectid/tracker"/> */}>
          </Switch>
      </div>
    );
  }
}

export default ProjectBody;
