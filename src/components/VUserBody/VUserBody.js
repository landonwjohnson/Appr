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

    //Project
      this.handleProjectBackground = this.handleProjectBackground.bind(this);
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

  // handleFirstNameChange(e){
  //   let newFirstName = e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
  //   let newInitial = this.state.userInfo.firstName.charAt(0).toUpperCase();
  //   this.setState({
  //       userInfo: {
  //         initial: newInitial,
  //         firstName: newFirstName,
  //         lastName: this.state.userInfo.lastName,
  //         username: this.state.userInfo.username,
  //         email: this.state.userInfo.email,
  //         avatar: this.state.userInfo.avatar
  //       }
  //     })
  // }

  // handleLastNameChange(e){
  //   let newLastName = e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();;
  //   this.setState({
  //       userInfo: {
  //         initial: this.state.initial,
  //         firstName: this.state.userInfo.firstName,
  //         lastName: newLastName,
  //         username: this.state.userInfo.username,
  //         email: this.state.userInfo.email,
  //         avatar: this.state.userInfo.avatar
  //       }
  //     })
  // }

  // handleUserNameChange(e){
  //   let newUserName = e;
  //   this.setState({
  //       userInfo: {
  //         initial: this.state.initial,
  //         firstName: this.state.userInfo.firstName,
  //         lastName: this.state.userInfo.lastName,
  //         username: newUserName,
  //         email: this.state.userInfo.email,
  //         avatar: this.state.userInfo.avatar
  //       }
  //     })
  // }

  // handleEmailChange(e){
  //   let newEmail = e.toLowerCase();
  //   this.setState({
  //       userInfo: {
  //         initial: this.state.initial,
  //         firstName: this.state.userInfo.firstName,
  //         lastName: this.state.userInfo.lastName,
  //         username: this.state.userInfo.username,
  //         email: newEmail,
  //         avatar: this.state.userInfo.avatar
  //       }
  //     })
     
  // }

  // handleAvatarChange(e){
  //   let newAvatar = e.trim();
  //   this.setState({
  //       userInfo: {
  //         initial: this.state.initial,
  //         firstName: this.state.userInfo.firstName,
  //         lastName: this.state.userInfo.lastName,
  //         username: this.state.userInfo.username,
  //         email: this.state.userInfo.email,
  //         avatar: newAvatar
  //       }
  //     })
  // }

  //Project
  handleProjectBackground(e){
    let newBackground = e;
    this.setState({projectInfo: {background: newBackground}})
  }

  render() {
 
    const {userInfo, projectInfo} = this.state;
    return (
      <div>
        <Header userInfo={userInfo} />
        
            <Route path="/user/:userid/"  render={(props) => (
                <InfoBody userInfo={userInfo} handleNameSubmit={this.handleNameSubmit} handleEmailSubmit={this.handleEmailSubmit} {...props}/>)} />

            <Route path="/user/:userid/project/:projectid" render={(props) => (
                <ProjectBody projectInfo={projectInfo} handleProjectBackground={this.handleProjectBackground} {...props}/>)} />

      </div>
    );
  }
}

export default VUserBody;




