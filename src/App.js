import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './App.scss';
import { Route, Redirect } from 'react-router-dom';
import Register from './components/AuthBody/Register/Register';
import Login from './components/AuthBody/Login/Login';
import VUserBody from './components/VUserBody/VUserBody';
import Home from './components/AuthBody/Home/Home';
import { connect } from 'react-redux';

class App extends Component {
  constructor(){
    super();
    this.state = {
   
    }
  }
  render() {

    const PrivateRoute = ({component: Component, ...rest}) => (
      <Route {...rest} render={(props) => (
        this.props.authRouter.verifiedUser === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/',
            state: {from: props.location}
        }} />
      )}/>
    )

    return (
      <div className="App">
          <Route component={ Home } path="/" exact />
          <Route component={ Register }  path="/register" />
          <Route component={ Login }  path="/login"/>
          <PrivateRoute component={ VUserBody } path="/user/:userid"/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default withRouter(connect( mapStateToProps ) (App))