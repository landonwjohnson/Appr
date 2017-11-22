import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/content/Home/Home';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Ideas_Users from './components/project_components/Ideas_Users/Ideas_Users';
import Features from './components/project_components/Features/Features';
import View from './components/project_components/View/View';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/ideas" component={Ideas_Users}/> 
        <Route path="/features" component={Features}/>
        <Route path="/view" component={View}/>
      </div>
    );
  }
}

export default App;
