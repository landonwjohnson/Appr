import React, { Component } from 'react';
import Header from './Header/Header';
import { Route, withRouter } from 'react-router-dom';
import InfoBody from './InfoBody/InfoBody';
import ProjectBody from './ProjectBody/ProjectBody';
import { findUserInfo } from '../../services/account.services';

class VUserBody extends Component {
  constructor(props){
    super(props);
    this.state ={
      userInfo: {},
    }

    //AccountSettings
      this.handleNameSubmit = this.handleNameSubmit.bind(this);
      this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
      this.handleAvatarSubmit = this.handleAvatarSubmit.bind(this);

    //UI
      this.handleInitials = this.handleInitials.bind(this);
      this.handleColor = this.handleColor.bind(this);
  }

  componentWillMount(){
    const userid = this.props.match.params.userid;
    findUserInfo(userid)
    .then( res => {
        if (res.status !== 200) {
            alert(res);
        }
        else {
              this.setState({ 
                  userInfo: {   
                    id: res.data[0].id,
                    username: res.data[0].username,
                    avatar: res.data[0].avatar,
                    firstName: res.data[0].first_name,
                    lastName: res.data[0].last_name,
                    email: res.data[0].email
                  }
              });
        }
    })
    .catch(err => {throw err});
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
    const userInfo = this.state.userInfo;
    const userid = this.state.userInfo.id;
    return (
      <div>
        <Header userid={userid} userInfo={userInfo} handleInitials={this.handleInitials}/>
        <input type="color" onChange={(e) => console.log(e.target.value)}/>
            <Route path="/user/:userid/"  render={(props) => (
                <InfoBody userInfo={userInfo} handleNameSubmit={this.handleNameSubmit} handleEmailSubmit={this.handleEmailSubmit} handleAvatarSubmit={this.handleAvatarSubmit} handleInitials={this.handleInitials} {...props}/>)} />

            <Route path="/user/:userid/project/:projectid" render={(props) => (
                <ProjectBody  {...props}/>)} />

      </div>
    );
  }
}

export default withRouter(VUserBody);




