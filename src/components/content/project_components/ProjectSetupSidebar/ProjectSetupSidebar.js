import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './project-setup-sidebar.scss';

export default class ProjectSetupSidebar extends Component {
    render() {
        const userid = this.props.userid;
        const projectid = this.props.projectid;
        return (
            <div className="project-sidebar-container">
            <div className="project-sidebar-header">
                <input type="text" placeholder="Project Name" autoFocus/> 
            </div>
            <ul className="project-sidebar-inner">
                <Link to={`/user/${userid}/project/${projectid}/ideas`} className="psb-item"><li>Ideas & Users</li></Link>
                <Link to={`/user/${userid}/project/${projectid}/features`} className="psb-item"><li >Features</li></Link>
                <Link to={`/user/${userid}/project/${projectid}/views`}  className="psb-item"><li>Views</li></Link>
                <Link to={`/user/${userid}/project/${projectid}/controllers`} className="psb-item"><li>Controllers</li></Link>
                <Link to={`/user/${userid}/project/${projectid}/endpoints`} className="psb-item"><li>Endpoints</li></Link>
                <Link to={`/user/${userid}/project/${projectid}/schema`} className="psb-item"><li >Schema</li></Link>
                <Link to={`/user/${userid}/project/${projectid}/tracker`} className="psb-item"><li >Tracker</li></Link>
            </ul>
        </div>
        )
    }
}