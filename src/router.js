import React from 'react';
import { Route, Switch} from 'react-router-dom';
import AccountSettings from './components/content/AccountSettings/AccountSettings';
// import GroupDashboard from 'UNDEFINED PATH';
// import GroupSettings from 'UNDEFINED PATH';
import Home from './components/content/Home/Home';
import Register from './components/content/Register/Register';
import Dashboard from './components/content/Dashboard/Dashboard';
import Login from './components/content/Login/Login';
import IdeasUsers from './components/content/project_components/Ideas_Users/Ideas_Users';
import Features from './components/content/project_components/Features/Features';
import Controllers from './components/content/project_components/Controllers/Controllers';
import View from './components/content/project_components/View/View';
import Schema from './components/content/project_components/Schema/Schema'
import Endpoints from './components/content/project_components/Endpoints/Endpoints';
import Tracking from './components/content/project_components/Tracking/Tracking';

export default (

    <Switch>
            <Route component={ Home } exact path="/"/>
            <Route component={ Register } path="/register"/>
            <Route component={ Login } path="/login"/>

            {/* Future Sub Routes */}
                <Route component={ Dashboard } path="/user/:userid/dashboard"/>
                <Route path="/user/:userid/account/settings/:userid" render={(props) => (
                    <AccountSettings userAvatar={this.state.userAvatar}  {...props} />
                )}/>
                {/* <Route component={ GroupDashboard } path="/user/:userid/group/:groupid/dashboard"/> */}
                {/* <Route component={ GroupSettings } path="/user/:userid/group/:groupid/settings"/> */}

            {/* Future Sub Routes In Wizard */}
                <Route component={ IdeasUsers } path="/user/:userid/project/:projectid/ideas"/>
                <Route component={ Features } path="/user/:userid/project/:projectid/features"/>
                <Route component={ View } path="/user/:userid/project/:projectid/views"/>
                <Route component={ Controllers } path="/user/:userid/project/:projectid/controllers"/>
                <Route component={ Schema } path="/user/:userid/project/:projectid/schema"/>
                <Route component={ Endpoints } path="/user/:userid/project/:projectid/endpoints"/>
                <Route component={ Tracking } path="/user/:userid/project/:projectid/tracker"/>
    </Switch>

);