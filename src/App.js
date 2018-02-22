import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import { Route } from 'react-router-dom';
import Register from './components/AuthBody/Register/Register';
import Login from './components/AuthBody/Login/Login';
import VUserBody from './components/VUserBody/VUserBody';
import Home from './components/AuthBody/Home/Home';
import io from 'socket.io-client';


class App extends Component {
  constructor(){
    super();
    this.state = {
   
    }
  }

  componentDidMount(){
    this.socket = io();
  }
  render() {
    return (
      <div className="App">
          <Route component={ Home } path="/" exact />
          <Route component={ Register }  path="/register" />
          <Route component={ Login }  path="/login"/>
          <Route component={ VUserBody } path="/user/:userid/"/>
      </div>
    );
  }
}

export default withRouter(App);
