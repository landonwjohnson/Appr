import React, { Component } from 'react';
import Header from './Header/Header';
import { Route } from 'react-router-dom';
import InfoBody from './InfoBody/InfoBody';
import ProjectBody from './ProjectBody/ProjectBody';

class VUserBody extends Component {
  constructor(props){
    super(props);
    this.state ={
      userInfo:{
        firstName: 'Landon',
        lastName: 'Johnson',
        username: 'landomon',
        email: 'landonwjohnson@gmail.com',
        avatar: 'https://mir-s3-cdn-cf.behance.net/user/138/723b4f10146703.562fb8014adc6.png',
      },
      projectInfo:{
        background: ''
      }
    }

    //AccountSettings
      this.handleNameSubmit = this.handleNameSubmit.bind(this);
      this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
      this.handleAvatarSubmit = this.handleAvatarSubmit.bind(this);

    //Project
      this.handleProjectBackground = this.handleProjectBackground.bind(this);

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

  //Project
    handleProjectBackground(e){
      let newBackground = e;
      this.setState({projectInfo: {background: newBackground}})
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
    const { userid, projectid } = this.props.match.params;
    const {userInfo, projectInfo} = this.state;
    return (
      <div>
        <Header userInfo={userInfo} handleInitials={this.handleInitials} userid={userid} projectid={projectid}/>
        
            <Route path="/user/:userid/"  render={(props) => (
                <InfoBody userInfo={userInfo} handleNameSubmit={this.handleNameSubmit} handleEmailSubmit={this.handleEmailSubmit} handleAvatarSubmit={this.handleAvatarSubmit} handleInitials={this.handleInitials} {...props}/>)} userid={userid} projectid={projectid} />

            <Route path="/user/:userid/project/:projectid" render={(props) => (
                <ProjectBody projectInfo={projectInfo} handleProjectBackground={this.handleProjectBackground} {...props}/>)} userid={userid} projectid={projectid}/>

      </div>
    );
  }
}

export default VUserBody;




