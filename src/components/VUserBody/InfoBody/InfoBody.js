import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';
import AccountSettings from './AccountSettings/AccountSettings';

class InfoBody extends Component {
  render() {
      const { userInfo, handleNameSubmit, handleEmailSubmit, handleAvatarSubmit, handleInitials } = this.props;
      const userid = this.props.match.params.userid
    return (
       <div>
         
        <Switch>
            <Route component={ Dashboard }  path="/user/:userid/dashboard"/>
            <Route path="/user/:userid/account/settings/:userid" render={(props) => (
                  <AccountSettings userid={userid} userInfo={userInfo} handleNameSubmit={handleNameSubmit} handleEmailSubmit={handleEmailSubmit} handleAvatarSubmit={handleAvatarSubmit} handleInitials={handleInitials}  {...props} />
            )}/>
        
        </Switch>
      </div>
    );
  }
}

export default InfoBody;
