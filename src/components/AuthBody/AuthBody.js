import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';


class AuthBody extends Component {
  render() {
    return (
      <div> 
              <Route component={ Home } exact path="/"/>
              <Route component={ Register } path="/register"/>
              <Route component={ Login } path="/login" />
      </div>
    );
  }
}

export default AuthBody;
