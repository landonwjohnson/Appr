import React, { Component } from 'react';
import Header from './Header/Header';
import { Route, withRouter } from 'react-router-dom';
import InfoBody from './InfoBody/InfoBody';
import ProjectBody from './ProjectBody/ProjectBody';
import { findUserInfo } from '../../services/account.services';
// import { url } from 'inspector';

import { findDashboardInfo, findPersonalProjects } from '../../services/dashboard.services';
import { updateUser, updateDashboard, updatePersonalProjects } from '../../actions/actionCreators';
import { connect } from 'react-redux';
import history from '../../history';

// import { url } from 'inspector';

class VUserBody extends Component {
  constructor(props){
    super(props);
    this.state ={
      userInfo: {},
    };

    //UI
      this.handleInitials = this.handleInitials.bind(this);
  };

  componentWillMount(){

    const userid = this.props.match.params.userid;
    findUserInfo(userid)
    .then( res => {
        if (res.data['newPath']) {
            let newPath = res.data['newPath'];
            console.log(newPath);
            console.log(this.props.match.params);
            console.log(this.props.match.path)
            history.goBack(`/${newPath}`);
        }
        else {
              let userInfo = {   
                  id: res.data[0].id,
                  username: res.data[0].username,
                  avatar: res.data[0].avatar,
                  first_name: res.data[0].first_name,
                  last_name: res.data[0].last_name,
                  email: res.data[0].email
                }

              this.props.updateUser(userInfo)

              findPersonalProjects(userid)
              .then( res => {
                console.log(res.data)
                this.props.updatePersonalProjects(res.data);
        
              })
        }
    })
    .catch(err => {throw err});




    // findDashboardInfo(userid)
    //     .then( res => {
    //       this.props.updateDashboard(res.data);
    //     })
    //     .catch(err => {throw err});
  }



  //UI
    handleInitials(){
      let userInitials;
      if(this.props.userInfo.first_name){
        if(this.props.userInfo.avatar !== ''){
          userInitials = '';
        }
        else{
          userInitials = this.props.userInfo.firstName.charAt(0).toUpperCase();
        }
        return userInitials
      }
    }

  render() {
    const userInfo = this.state.userInfo;
    const userid = this.state.userInfo.id;
    // const urlUserid = this.props.match.params.userid;
  //   let VUserBodyPage = 
  //   <div>
  //     <Header userid={userid}  handleInitials={this.handleInitials}/>
      
  //         <Route path="/user/:userid/"  render={(props) => (
  //             <InfoBody userInfo={userInfo} handleNameSubmit={this.handleNameSubmit} handleEmailSubmit={this.handleEmailSubmit} handleAvatarSubmit={this.handleAvatarSubmit} handleInitials={this.handleInitials} {...props}/>)} />

  //         <Route path="/user/:userid/project/:projectid" render={(props) => (
              
  //             <ProjectBody  {...props}/>)} />
  //  </div>
    // console.log(userid);
    // if (userid !== urlUserid) {
    //   VUserBodyPage = <div> You Cannot Pass! </div>
    // }
    return (
      <div>
      <Header userid={userid}  handleInitials={this.handleInitials}/>
      
        <Route path="/user/:userid/"  render={(props) => (
            <InfoBody userInfo={userInfo} handleInitials={this.handleInitials} {...props}/>)} />

        <Route path="/user/:userid/project/:projectid" render={(props) => (
          
      <ProjectBody  {...props}/>)} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect( mapStateToProps, { updateUser, updateDashboard, updatePersonalProjects } ) (VUserBody);





