import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';
import AccountSettings from './AccountSettings/AccountSettings';

class InfoBody extends Component {
  render() {
      const { userInfo, handleNameSubmit, handleEmailSubmit } = this.props;
    return (
       <div>
         
        <Switch>
            <Route component={ Dashboard }  path="/user/:userid/dashboard"/>
            <Route path="/user/:userid/account/settings/:userid" render={(props) => (
                  <AccountSettings userInfo={userInfo} handleNameSubmit={handleNameSubmit} handleEmailSubmit={handleEmailSubmit} {...props} />
            )}/>
        
        </Switch>
      </div>
    );
  }
}

export default InfoBody;


