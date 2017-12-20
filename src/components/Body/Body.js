import React, { Component } from 'react';
// import router from '../../router';
import { Switch, Route } from 'react-router-dom';
import './body.scss';
import Header from '../Header/Header';
import ProjectSideBar from '../content/project_components/ProjectSetupSidebar/ProjectSidebar'

//For Router
import Home from '../content/Home/Home';
import Register from '../content/Register/Register';
import Login from '../content/Login/Login';
import Dashboard from '../content/Dashboard/Dashboard';
import AccountSettings from '../content/AccountSettings/AccountSettings';
import IdeasUsers from '../content/project_components/Ideas_Users/Ideas_Users';
import Features from '../content/project_components/Features/Features';
import View from '../content/project_components/View/View';
import Controllers from '../content/project_components/Controllers/Controllers';
import Schema from '../content/project_components/Schema/Schema';
import Endpoints from '../content/project_components/Endpoints/Endpoints';
import Tracking from '../content/project_components/Tracking/Tracking';

export default class Body extends Component {
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
        <Switch>
            <Route component={ Home } exact path="/"/>
            <Route component={ Register } path="/register"/>
            <Route component={ Login } path="/login"/>

            {/* Future Sub Routes */}
                <Route component={ Dashboard } path="/user/:userid/dashboard"/>
                <Route path="/user/:userid/account/settings/:userid" render={(props) => (
                    <AccountSettings userInfo={this.state.userInfo}  {...props} />
                )}/>
                <Route component={ IdeasUsers } path="/user/:userid/project/:projectid/ideas"/>
                <Route path="/user/:userid/project/:projectid/features" render={(props) => (
                    <Features background={this.state.projectInfo.background} handleProjectBackground={this.handleProjectBackground}  {...props} />
                )}/>
                <Route component={ View } path="/user/:userid/project/:projectid/views"/>
                <Route component={ Controllers } path="/user/:userid/project/:projectid/controllers"/>
                <Route component={ Schema } path="/user/:userid/project/:projectid/schema"/>
                <Route component={ Endpoints } path="/user/:userid/project/:projectid/endpoints"/>
                <Route component={ Tracking } path="/user/:userid/project/:projectid/tracker"/>
        </Switch>
      </div>
    );
  }
}
