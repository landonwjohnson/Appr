import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import AccountSettings from './components/content/AccountSettings/AccountSettings';
import Home from './components/content/Home/Home';
import Register from './components/content/Register/Register';
import Dashboard from './components/content/Dashboard/Dashboard';
import Login from './components/content/Login/Login';
import IdeasUsers from './components/content/project_components/Ideas_Users/Ideas_Users';
import Features from './components/content/project_components/Features/Features';
import Controllers from './components/content/project_components/Controllers/Controllers';



export default  (
        <Switch>
            <Route component={ Home } path="/" exact/>
            <Route component={ Register } path="/register" exact/>
            <Route component={ Dashboard } path="/dashboard" exact/>
            <Route component={ AccountSettings } path="/account-settings" exact/>
            <Route component={ Login } path="/login" exact/>


            //Future Sub Routes In Wizard
            <Route component={ IdeasUsers } path="/ideas" exact/>
            <Route component={ Features } path="/features" exact/>
            <Route component={ Controllers } path="/controllers" exact/>

        </Switch> 
    )