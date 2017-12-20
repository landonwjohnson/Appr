import React, { Component } from 'react';
import Header from './Header/Header';
import {Switch, Route} from 'react-router-dom';
import InfoBody from './InfoBody/InfoBody';
import './vuserbody.scss';
import ProjectBody from './ProjectBody/ProjectBody';

class VUserBody extends Component {
  constructor(props){
    super(props);
    this.state ={
      userInfo:{
        avatar: '',
      },
      projectInfo:{
        background: 't'
      }
    }
    this.handleProjectBackground = this.handleProjectBackground.bind(this);
  }

  handleProjectBackground(e){
    console.log(e)
    let newBackground = e;
    this.setState({projectInfo: {background: newBackground}})

    console.log(this.state.projectInfo.background)
  }

  render() {
    return (
      <div className="vuser">
        <Header userInfo={this.state.userInfo} />
        <div>
            <Switch>
                <Route path="/user/:userid/info" render={(props) => (
                    <InfoBody userInfo={this.state.userInfo}  {...props}/>
                )} />
                <Route component={ProjectBody} path="/user/:userid/project/:projectid" render={(props) => (
                    <ProjectBody background={this.state.projectInfo.background} {...props} />
                )} />
            </Switch>
        </div>
      </div>
    );
  }
}

export default VUserBody;




