import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './board-menu.scss'
import { findDashboardInfo } from '../../../../services/dashboard.services';
import { createGroup } from '../../../../services/group.services';
import { createProject } from '../../../../services/project.services';


class BoardMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            groups: [],
            projects: []
        }
        this.handleCreateButton = this.handleCreateButton.bind(this);
    }

    componentWillReceiveProps(){
        const userid = this.props.userid;
		findDashboardInfo(userid)
			.then( res => {
				res.status !== 200 ? console.log(res) : this.setState(res.data);
			})
			.catch(err => {throw err});
    }

    handleCreateButton(buttonPressed) {
		const userid = this.props;
		let name = '';
		let reqBody = {};
		if (buttonPressed === 'group') {
			name = prompt('What is the name of your group?');
			reqBody = {createdByUserId: userid, name};
			createGroup(reqBody)
				.then( res => {
					if (res.data[0].id) {
						const groupid = res.data[0].id;
						this.props.history.push(`/user/${userid}/group/${groupid}/dashboard`);
					}
					else {
						alert(res.data.message);
					}
				})
				.catch(err => {throw err});
		}
		else if (buttonPressed === 'project') {
            name = prompt('What is the name of your project?');
           
			reqBody = {name, authorId: userid};
			createProject(reqBody)
				.then( res => {
					if (res.data[0].id) {
						const projectid = res.data[0].id;
                        this.props.history.push(`/user/${userid}/project/${projectid}/ideas`);
					}
					else {
						alert(res);
					}
				})
				.catch(err => {throw err});
        }
        this.props.closeMenus();
	}

  render() {
    const groups = this.state.groups;
    const projects = this.state.projects;
    const { userid, projectid, closeMenus } = this.props;
    const displayGroups = groups.map( group => {
        const index = groups.indexOf(group);
        return (
            <Link to={`/group-dashboard/${group.id}`} key={`group-${index}`}>
                  <div className="board-menu-item">
                  <div className="board-item-thumbnail">

                  </div>
                  <div className="board-item-name">
                      {group.name}
                  </div>
              </div>
            </Link>
        )
    })

    const displayProjects = projects.map( project => {
      const index = projects.indexOf(project);
      return (
          <Link to={`/user/${userid}/project/${project.id}/ideas`} onClick={closeMenus}>
                <div className="board-menu-item">
                <div className="board-item-thumbnail" style={{'background-image': `url(${project.background})`}}>

                </div>
                <div className="board-item-name">
                    {project.name}
                </div>
            </div>
          </Link>
      )
  })
  
    return (
        <div className="boards-main-container">
        <div className="board-menu-header">
        <div className="back-con" onClick={this.closeMenus}>
            <div className="back-icon"> </div>
            <div className="board-text">Hide</div>
        </div> 
        </div>
            <div className="personal-boards-con">
                <div className="text-12">PERSONAL PROJECTS</div>
        
                    {displayProjects}
        
                    
                        <div className="create-board-item" onClick={() => this.handleCreateButton('project')}>
                            <div className="create-board-thumbnail">
                                <div className="plus-symbol">+</div>
                            </div>
                            <div className="create-board-name">
                                Create Project
                            </div>
                        </div>
            </div>
            <div className="recent-boards-con">
                <div className="text-12">GROUP PROJECTS</div>
        
                {displayGroups}


                        <div className="create-board-item" onClick={() => this.handleCreateButton('group')}>
                            <div className="create-board-thumbnail">
                                <div className="plus-symbol">+</div>
                            </div>
                            <div className="create-board-name">
                                Create Group
                            </div>
                        </div>
            </div>
            
        </div>
    );
  }
}

export default BoardMenu;



