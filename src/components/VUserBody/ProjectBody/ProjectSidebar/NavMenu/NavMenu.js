import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './navmenu.scss';
import { findProject, updateProject } from '../../../../../services/project.services';

export default class ProjectSetupSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {},
            UI: {backgroundMenu: false}
        };
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
                    this.setState({ project: res.data[0] });
                }
            })
            .catch(err => {throw err});
    }

    componentWillReceiveProps(nextProps){
        const projectid = nextProps;
        findProject(projectid)
            .then( res => {
                if (res.status !== 200) {
                    console.log(res);
                }
                else {
                    this.setState({ project: res.data[0] });
                }
            })
            .catch(err => {throw err});
    }

    handleChangeName(e) {
        const projectid = this.props.projectid;
        const reqBody = { name: e.target.value };
        const newState = this.state.project;
        newState.name = e.target.value;
        this.setState({ project: newState });
        updateProject(projectid, reqBody)
            .then(res => res)
            .catch(err => {throw err});
    }

    render() {
        const { userid, projectid, projectName} = this.props;
        return (
            <div>
                <div className='project-sidebar-header'>
                    <input className="rename-project" type="text" placeholder={projectName} onChange={e => this.handleChangeName(e)}/> 
                </div>
                
                <ul className={'nav-list'} >
                    <NavLink activeClassName="nav-item--active" to={`/user/${userid}/project/${projectid}/ideas`} className="nav-item"><li>Ideas & Users</li></NavLink>
                    <NavLink activeClassName="nav-item--active" to={`/user/${userid}/project/${projectid}/features`} className="nav-item"><li >Features</li></NavLink>
                    <NavLink activeClassName="nav-item--active" to={`/user/${userid}/project/${projectid}/views`}  className="nav-item"><li>Views</li></NavLink>
                    <NavLink activeClassName="nav-item--active" to={`/user/${userid}/project/${projectid}/controllers`} className="nav-item"><li>Controllers</li></NavLink>
                    <NavLink activeClassName="nav-item--active" to={`/user/${userid}/project/${projectid}/endpoints`} className="nav-item"><li>Endpoints</li></NavLink>
                    <NavLink activeClassName="nav-item--active" to={`/user/${userid}/project/${projectid}/schema`} className="nav-item"><li >Schema</li></NavLink>
                    <NavLink activeClassName="nav-item--active" to={`/user/${userid}/project/${projectid}/tracker`} className="nav-item"><li >Tracker</li></NavLink>
                </ul>

                <div className='project-sidebar-footer'>
                    <label onClick={this.props.toggleProjectMenu}>Change Background</label>
                    
                </div>
            </div>
        )
    }
}