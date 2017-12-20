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
        background: ' '
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
      <div className="body-container">
        <Header userInfo={this.state.userInfo} />
        <div>
            <Switch>
                <Route path="/user/:userid/" exact render={(props) => (
                    <InfoBody userInfo={this.state.userInfo}  {...props}/>
                )} />
                <Route path="/user/:userid/project/:projectid" exact render={(props) => (
                    <ProjectBody projectInfo={this.state.projectInfo} {...props} />
                )} />
            </Switch>
        </div>
      </div>
    );
  }
}

export default VUserBody;




