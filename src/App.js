import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/content/Home/Home';
import Body from './components/Body/Body'
class App extends Component {
  render() {
    return (
      <div className="App">


          <Header />
          <Body />

        {/* <Route exact path="/" component={Home}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/ideas" component={Ideas_Users}/> 
        <Route path="/features" component={Features}/>
        <Route path="/view" component={View}/> */}
      </div>
    );
  }
}

export default App;
