import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './project-setup-sidebar.scss';
import { findProject, updateProject } from '../../../../services/project.services'

export default class ProjectSetupSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChangeName = this.handleChangeName.bind(this);
    }

    componentWillMount() {
        const projectid = this.props.projectid;
        findProject(projectid)
            .then( res => {
                if (res.status !== 200) {
                    console.log(res);
                }
                else {
                    this.setState(res.data[0]);
                }
            })
            .catch(err => {throw err});
    }

    handleChangeName(e) {
        const projectid = this.props.projectid;
        const reqBody = { name: e.target.value };
        this.setState({ name: e.target.value });
        updateProject(projectid, reqBody)
            .then(res => res)
            .catch(err => {throw err});
    }

    render() {
        const { userid, projectid } = this.props;
        return (
            <div className="project-sidebar-container">
            <div className="project-sidebar-header">
                <input type="text" value={this.state.name} onChange={e => this.handleChangeName(e)} autoFocus/> 
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