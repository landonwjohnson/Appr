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
import { findProjectFeatures } from '../../../services/project.feature.services';
import FeatureItem from './Features/FeatureItem/FeatureItem';

class ProjectBody extends Component {
  constructor(props){
    super(props)
    this.state={
        features: [],
      UI: {
        backgroundImage: '',
        colorTheme: '',
        backgroundPreview: ''
      }
    }
    this.handleProjectBackground = this.handleProjectBackground.bind(this);
    this.handleFeaturesSubmit = this.handleFeaturesSubmit.bind(this);
  }

  componentWillMount(){
    const projectid = this.props.match.params.projectid;
    findProjectFeatures(projectid)
      .then(
        res => {
          if (res.status !== 200){
            alert(res)
          }
          else{
              this.setState({
                features: res.data
              })
            }
          }
      )
  }

  handleFeaturesSubmit(newState){
    this.setState({
      features: newState
    })
  }

  handleProjectBackground(image, color){
    let newBackground = image;
    let newColor = color;
    this.setState({
      UI: {
        backgroundImage: newBackground,
        colorTheme: newColor
      }
    })

    console.table(this.state.UI)
  }

  render() {
    console.table(this.state.features)
    const { userid, projectid } = this.props.match.params;
    const { colorTheme, backgroundImage } = this.state.UI;
    const features = this.state.features;

    // const displayFeatures = features.map( feature => {
    //     const index = features.indexOf(feature);
    //     const id = feature.id;
    //     return (
    //       <FeatureItem index={index} projectid={projectid} id={id} featureData={feature.feature_data} />
    //     );
    // });

    return (
      <ProjectBodyContainer>
       
              <ProjectSidebar handleProjectBackground={this.handleProjectBackground} projectid={projectid} userid={userid} colorTheme={colorTheme}/>
              <Frame> <BlurOverlay backgroundImage={backgroundImage} colorTheme={colorTheme} /> </Frame>
              <Route component={ IdeasUsers } path="/user/:userid/project/:projectid/ideas" />
              {/* <Route component={ Features }path="/user/:userid/project/:projectid/features"/> */}

              <Route path="/user/:userid/project/:projectid/features"  render={(props) => (
                <Features featureState={features} handleFeaturesSubmit={this.handleFeaturesSubmit} {...props}/>)} />

              <Route component={ View } path="/user/:userid/project/:projectid/views" />
              <Route component={ Controllers } path="/user/:userid/project/:projectid/controllers" />
              <Route component={ Schema } path="/user/:userid/project/:projectid/schema" />
              <Route component={ Endpoints } path="/user/:userid/project/:projectid/endpoints" />
              <Route component={ Tracking } path="/user/:userid/project/:projectid/tracker"/>  
      </ProjectBodyContainer>
    );
  }
}

export default ProjectBody;
