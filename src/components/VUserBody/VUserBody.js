import React, { Component } from 'react';
import Header from './Header/Header';
import { Route } from 'react-router-dom';
import InfoBody from './InfoBody/InfoBody';
import ProjectBody from './ProjectBody/ProjectBody';
import KyloRen from '../../img/User_Customization/avatars/but_im_just_a_pilot__kylo_x_reader__by_beatlesmaniagrl-da0coeq.jpg';

class VUserBody extends Component {
  constructor(props){
    super(props);
    this.state ={
      userInfo:{
        firstName: 'Kylo',
        lastName: 'Ren',
        username: 'radar_tech_matt548',
        email: 'kyloren@firstorder.org',
        avatar: `${KyloRen}`,
      }
    }

    //AccountSettings
      this.handleNameSubmit = this.handleNameSubmit.bind(this);
      this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
      this.handleAvatarSubmit = this.handleAvatarSubmit.bind(this);

    //UI
      this.handleInitials = this.handleInitials.bind(this);
  }

  //Submit Account Settings Info
    handleNameSubmit(newFirst, newLast, newUserName){
      this.setState({
        userInfo: {
          firstName: newFirst,
          lastName: newLast,
          username: newUserName,
          email: this.state.userInfo.email,
          avatar: this.state.userInfo.avatar
        }
      })
    }

    handleEmailSubmit(newEmail){
      this.setState({
        userInfo: {
          firstName: this.state.userInfo.firstName,
          lastName: this.state.userInfo.lastName,
          username: this.state.userInfo.username,
          email: newEmail,
          avatar: this.state.userInfo.avatar
        }
      })
    }

    handleAvatarSubmit(newAvatar){
      this.setState({
        userInfo: {
          firstName: this.state.userInfo.firstName,
          lastName: this.state.userInfo.lastName,
          username: this.state.userInfo.username,
          email: this.state.userInfo.username,
          avatar: newAvatar
        }
      })
    }

  //UI
    handleInitials(e){
      let userInitials = e;
      if(this.state.userInfo.avatar !== ''){
        userInitials = '';
      }
      else{
        userInitials = this.state.userInfo.firstName.charAt(0).toUpperCase();
      }
      return userInitials
    }

  render() {
    const {userid, projectid } = this.props.match.params;
    const {userInfo, projectInfo} = this.state;
    return (
      <div>
        <Header userInfo={userInfo} handleInitials={this.handleInitials} userid={userid}/>
        
            <Route path="/user/:userid/"  render={(props) => (
                <InfoBody userInfo={userInfo} handleNameSubmit={this.handleNameSubmit} handleEmailSubmit={this.handleEmailSubmit} handleAvatarSubmit={this.handleAvatarSubmit} handleInitials={this.handleInitials} {...props}/>)} />

            <Route path="/user/:userid/project/:projectid" render={(props) => (
                <ProjectBody projectInfo={projectInfo} {...props}/>)} />

      </div>
    );
  }
}

export default VUserBody;




