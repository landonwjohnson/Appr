import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './css/styles.css';
import Header from './components/Header';
import Home from './components/content/Home';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Ideas_Users from './components/project_components/Ideas_Users';
import Features from './components/project_components/Features';
import View from './components/project_components/View';

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
