import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProjectSidebar from './ProjectSidebar/ProjectSidebar';
import IdeasUsers from './Ideas_Users/Ideas_Users';
import Features from './Features/Features';
import View from './View/View';
import Controllers from './Controllers/Controllers';
import Schema from './Schema/Schema';
import Endpoints from './Endpoints/Endpoints';
import Tracking from './Tracking/Tracking';
import { BlurOverlay, ProjectBodyContainer } from './projectbodyStyles';
import UpdateBlocker from '../../../UpdateBlocker';


class ProjectBody extends Component {
  constructor(props){
    super(props)
    this.state={
      UI: {
        background: ''
      }
    }
    this.handleProjectBackground = this.handleProjectBackground.bind(this);
  }

  handleProjectBackground(e){
    let newBackground = e;
    this.setState({UI: {background: newBackground}})
  }

  render() {
    const {userid, projectid } = this.props.match.params;
    return (
      <ProjectBodyContainer>
          <UpdateBlocker>
              <ProjectSidebar handleProjectBackground={this.handleProjectBackground} projectid={projectid} userid={userid}/>
              <BlurOverlay backgroundProp={this.state.UI.background} />
              <Route component={ IdeasUsers } path="/user/:userid/project/:projectid/ideas" />
              <Route component={ Features }path="/user/:userid/project/:projectid/features"/>
              <Route component={ View } path="/user/:userid/project/:projectid/views" />
              <Route component={ Controllers } path="/user/:userid/project/:projectid/controllers" />
              <Route component={ Schema } path="/user/:userid/project/:projectid/schema" />
              <Route component={ Endpoints } path="/user/:userid/project/:projectid/endpoints" />
              <Route component={ Tracking } path="/user/:userid/project/:projectid/tracker"/>  
          </UpdateBlocker>
      </ProjectBodyContainer>
    );
  }
}

export default ProjectBody;
