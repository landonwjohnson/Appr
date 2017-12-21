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
        initial: 'L',
        firstName: 'Landon',
        lastName: 'Johnson',
        username: 'landomon',
        email: 'landonwjohnson@gmail.com',
        avatar: '',
      },
      projectInfo:{
        background: ''
      }
    }

    //AccountSettings
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    // this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleAvatarChange = this.handleAvatarChange.bind(this);
    

    //Project
    this.handleProjectBackground = this.handleProjectBackground.bind(this);
  }

  
  //AccountSettings
  handleFirstNameChange(e){
    let newFirstName = e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
    let newInitial = this.state.userInfo.firstName.charAt(0).toUpperCase();
    this.setState({
        userInfo: {
          initial: newInitial,
          firstName: newFirstName,
          lastName: this.state.userInfo.lastName,
          username: this.state.userInfo.username,
          email: this.state.userInfo.email,
          avatar: this.state.userInfo.avatar
        }
      })
  }

  handleLastNameChange(e){
    let newLastName = e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();;
    this.setState({
        userInfo: {
          initial: this.state.initial,
          firstName: this.state.userInfo.firstName,
          lastName: newLastName,
          username: this.state.userInfo.username,
          email: this.state.userInfo.email,
          avatar: this.state.userInfo.avatar
        }
      })
  }

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

  handleEmailChange(e){
    let newEmail = e.toLowerCase();
    this.setState({
        userInfo: {
          initial: this.state.initial,
          firstName: this.state.userInfo.firstName,
          lastName: this.state.userInfo.lastName,
          username: this.state.userInfo.username,
          email: newEmail,
          avatar: this.state.userInfo.avatar
        }
      })
      this.handleUserName();
  }

  handleAvatarChange(e){
    let newAvatar = e.trim();
    this.setState({
        userInfo: {
          initial: this.state.initial,
          firstName: this.state.userInfo.firstName,
          lastName: this.state.userInfo.lastName,
          username: this.state.userInfo.username,
          email: this.state.userInfo.email,
          avatar: newAvatar
        }
      })
  }

  handleUserName(){
    let userName = this.state.userInfo.email;
    let getPosition = this.state.userInfo.email.indexOf("@");
    let result = userName.slice(0, getPosition);
    this.setState({
      userInfo: {
        initial: this.state.initial,
        firstName: this.state.userInfo.firstName,
        lastName: this.state.userInfo.lastName,
        username: result,
        email: this.state.userInfo.email,
        avatar: this.state.avatar
      }
    })
  }

  handleInitials(e){
    let userInitials;
    if(this.state.userInfo.avatar !== ''){
      userInitials = '';
    }
    else{
      userInitials = this.state.userInfo.firstName.charAt(0).toUpperCase();
    }
  }

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
                <InfoBody userInfo={userInfo} handleFirstNameChange={this.handleFirstNameChange} handleLastNameChange={this.handleLastNameChange} handleEmailChange={this.handleEmailChange} handleUserName={this.handleUserName} handleAvatarChange={this.handleAvatarChange} {...props}/>)} />

            <Route path="/user/:userid/project/:projectid" render={(props) => (
                <ProjectBody projectInfo={projectInfo} handleProjectBackground={this.handleProjectBackground} {...props}/>)} />

      </div>
    );
  }
}

export default VUserBody;




