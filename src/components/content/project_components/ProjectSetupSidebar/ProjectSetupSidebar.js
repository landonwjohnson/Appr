import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './project-setup-sidebar.scss';

export default class ProjectSetupSidebar extends Component {
    render() {
        return (
            <div className="project-sidebar-container">
            <ul className="project-sidebar-inner">
                <Link to="ideas"><li className="psb-item">Ideas & Users</li></Link>
                <Link to="features"><li className="psb-item">Features</li></Link>
                <Link to="views"><li className="psb-item">Views</li></Link>
                <Link to="controllers"><li className="psb-item">Controllers</li></Link>
                <Link to="endpoints"><li className="psb-item">Endpoints</li></Link>
                <Link to="schema"><li className="psb-item">Schema</li></Link>
            </ul>
        </div>
        )
    }
}