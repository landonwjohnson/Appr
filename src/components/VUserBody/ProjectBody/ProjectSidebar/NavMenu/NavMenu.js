import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './navmenu.scss';
import { findProject, updateProject } from '../../../../../services/project.services';
import { connect } from 'react-redux';
import { updateDashboard } from '../../../../../actions/actionCreators';
import { findDashboardInfo } from '../../../../../services/dashboard.services';

class ProjectSetupSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {},
            UI: {backgroundMenu: false}
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.pullFromBackend = this.pullFromBackend.bind(this);
    }

    pullFromBackend(projectid){
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

    componentDidMount() {
        const projectid = this.props.projectid;
        findProject(projectid)
    }


    handleChangeName(e) {
        const projectid = this.props.projectid;
        const userid = this.props.userInfo.id;
        let reqBody = {name: e.target.value, background: this.props.projectInfo.background }
        updateProject(projectid, reqBody)
            .then(res => {
                this.pullFromBackend(projectid)
                findDashboardInfo(userid)
                .then( res => {
                    this.props.updateDashboard(res.data)
                })
            })
            .catch(err => {throw err});
    }

    render() {
        const { userid, projectid, projectName, projectInfo } = this.props;
        return (
            <div>
                <div className='project-sidebar-header'>
                    <input className="rename-project" type="text" placeholder={projectInfo.name} onChange={e => this.handleChangeName(e)}/> 
                </div>
                
                <ul className={'nav-list'} >
                    <NavLink exact activeClassName="nav-item--active" to={`/user/${userid}/project/${projectid}/ideas`} className="nav-item" ><li>Ideas & Users</li></NavLink>
                    <NavLink exact activeClassName="nav-item--active" to={`/user/${userid}/project/${projectid}/features`} className="nav-item"><li >Features</li></NavLink>
                    <NavLink exact activeClassName="nav-item--active" to={`/user/${userid}/project/${projectid}/views`}  className="nav-item"><li>Views</li></NavLink>
                    <NavLink exact activeClassName="nav-item--active" to={`/user/${userid}/project/${projectid}/controllers`} className="nav-item"><li>Controllers</li></NavLink>
                    <NavLink exact activeClassName="nav-item--active" to={`/user/${userid}/project/${projectid}/endpoints`} className="nav-item"><li>Endpoints</li></NavLink>
                    <NavLink exact activeClassName="nav-item--active" to={`/user/${userid}/project/${projectid}/schema`} className="nav-item"><li >Schema</li></NavLink>
                    <NavLink exact activeClassName="nav-item--active" to={`/user/${userid}/project/${projectid}/tracker`} className="nav-item"><li >Tracker</li></NavLink>
                </ul>

                <div className='project-sidebar-footer'>
                    <label onClick={this.props.toggleProjectMenu}>Change Background</label>
                    
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    let { projectInfo, userInfo } = state;
    return {
        projectInfo,
        userInfo
    }
}

export default withRouter(connect(mapStateToProps, {updateDashboard})(ProjectSetupSidebar));