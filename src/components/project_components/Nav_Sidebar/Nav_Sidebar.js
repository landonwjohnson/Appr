import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav_sidebar.scss';

export default class NavSidebar extends Component {
    render() {
        return (
            <div className="nav-sidebar">
            <h3><Link to="ideas" className="ideas-and-users">Ideas & Users</Link></h3>
            <h3><Link to="features" className="features">Features</Link></h3>
            <h3><Link to="view" className="view">View</Link></h3>
            <h3 to="controllers" className="controllers">Controllers</h3>
            <h3 to="endpoints" className="endpoints">Endpoints</h3>
            <h3 to="schema" className="schema">Schema</h3>
            <h3 to="tracker" className="tracker">Tracker</h3>
        </div>
        )
    }
}