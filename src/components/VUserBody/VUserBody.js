import React, { Component } from 'react';
import Header from './Header/Header';
import {Switch, Route} from 'react-router-dom';
import InfoBody from './InfoBody/InfoBody';
import ProjectBody from './ProjectBody/ProjectBody';

class VUserBody extends Component {
  constructor(props){
    super(props);
    this.state ={
      userInfo:{
        avatar: '',
      },
      projectInfo:{
        background: ''
      }
    }
    this.handleProjectBackground = this.handleProjectBackground.bind(this);
  }

  handleProjectBackground(e){
    let newBackground = e;
    this.setState({projectInfo: {background: newBackground}})
  }

  render() {
    return (
      <div>
        <Header userInfo={this.state.userInfo} />

            <Route path="/user/:userid/"  render={(props) => (
                <InfoBody userInfo={this.state.userInfo}   {...props}/>)} />

            <Route path="/user/:userid/project/:projectid" render={(props) => (
                <ProjectBody projectInfo={this.state.projectInfo} handleProjectBackground={this.handleProjectBackground} {...props}/>)} />

      </div>
    );
  }
}

export default VUserBody;




