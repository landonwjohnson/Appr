import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthBody from './components/AuthBody/AuthBody';
import VUserBody from './components/VUserBody/VUserBody'


export default (

   <Switch>
        <Route component={ AuthBody } exact path="/"/>
        <Route component={ VUserBody } exact path ="/user/:userid/dashboard"/>
   </Switch>

);