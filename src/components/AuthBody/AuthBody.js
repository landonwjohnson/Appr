import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';


class AuthBody extends Component {
  render() {
    return (
      <div> 
        <Switch>
              <Route component={ Home } exact path="/"/>
              
        </Switch>
      </div>
    );
  }
}

export default AuthBody;
