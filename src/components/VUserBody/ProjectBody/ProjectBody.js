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
import { BlurOverlay, ProjectBodyContainer, Frame } from './projectbodyStyles';
import { findProject, updateProject } from '../../../services/project.services';

class ProjectBody extends Component {
  constructor(props){
    super(props)
    this.state={
      project: {},
      UI: {
        colorTheme: '',
        backgroundPreview: ''
      }
    }
    this.handleProjectBackgroundPreview = this.handleProjectBackgroundPreview.bind(this);
    this.changeProjectBackground = this.changeProjectBackground.bind(this);
    this.clearProjectBackgroundPreview = this.clearProjectBackgroundPreview.bind(this);
  }


  componentWillMount() {
    const projectid = this.props.match.params.projectid;
    findProject(projectid)
        .then( res => {
            if (res.status !== 200) {
                console.log(res);
            }
            else {
                this.setState({ project: res.data[0] });
            }
        })
        .catch(err => {throw err});
}

  handleProjectBackgroundPreview(image, color){
    let newBackground = image;
    let newColor = color;
    this.setState({
      UI: {
        colorTheme: newColor,
        backgroundPreview: newBackground
      }
    })
  }

  clearProjectBackgroundPreview(){
    this.setState({
      UI: {
        colorTheme: '',
        backgroundPreview: ''
      }
    })
  }

  changeProjectBackground(){
    const projectid = this.props.match.params.projectid;
    let newBackground = this.state.UI.backgroundPreview;
    const { author_id, background, id, name, status_id } = this.state.project;
    const reqBody = {author_id: author_id, background: newBackground, id: id, name: name, status_id: status_id };
    updateProject(projectid, reqBody)
      .then( res => {
        if (res.status !== 200) {
          alert(res)
        }
      })
      .catch(err => {throw err});
  }



  render() {
    const { userid } = this.props.match.params;
    const projectid = this.state.project.id;
    const projectName = this.state.project.name;
    const { colorTheme, backgroundPreview } = this.state.UI;

    return (
      <ProjectBodyContainer>
              <ProjectSidebar 
                selectedBackground={this.state.UI.backgroundPreview || this.state.project.background} 
                handleProjectBackground={this.handleProjectBackgroundPreview}
                projectid={projectid} 
                userid={userid} 
                colorTheme={colorTheme}
                projectName={projectName}
                changeProjectBackground={this.changeProjectBackground}
                clearProjectBackgroundPreview={this.clearProjectBackgroundPreview}
              />
              <Frame> <BlurOverlay backgroundImage={backgroundPreview || this.state.project.background || null} colorTheme={colorTheme} /> </Frame>
              <Route component={ IdeasUsers } path="/user/:userid/project/:projectid/ideas" />
              <Route component={ Features }path="/user/:userid/project/:projectid/features"/>
              <Route component={ View } path="/user/:userid/project/:projectid/views" />
              <Route component={ Controllers } path="/user/:userid/project/:projectid/controllers" />
              <Route component={ Schema } path="/user/:userid/project/:projectid/schema" />
              <Route component={ Endpoints } path="/user/:userid/project/:projectid/endpoints" />
              {/* <Route component={ Tracking } path="/user/:userid/project/:projectid/tracker"/>   */}
              <Route path="/user/:userid/project/:projectid/tracker" render={(props) => (
                <Tracking projectid={projectid} {...props}/> )} />
      </ProjectBodyContainer>
    );
  }
}

export default ProjectBody;
