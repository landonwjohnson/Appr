import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './board-menu.scss'
import { findDashboardInfo } from '../../../../services/dashboard.services';


class BoardMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            groups: [],
            projects: []
        }
    }

    componentWillMount(){
        const useridForSideBar = '7';
        findDashboardInfo(useridForSideBar)
            .then(res => {
                const {projects, groups} = res.data;
                if (res.status !== 200){
                    console.log(res);
                }
                else {
                    this.setState({projects, groups})
                }
            })
            .catch(err => {throw err})
    }

  render() {
    const groups = this.state.groups;
    const projects = this.state.projects;
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
          <Link to={`/group-dashboard/${project.id}`} key={`project-${index}`}>
                <div className="board-menu-item">
                <div className="board-item-thumbnail">

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
            <div className="recent-boards-con">
                <div className="text-12">GROUP PROJECTS</div>
        
                {displayGroups}
           
            </div>
            <div className="personal-boards-con">
                <div className="text-12">PERSONAL PROJECTS</div>
        
                    {displayProjects}
        
                    <Link to="/ideas" onClick={this.closeMenus}>
                        <div className="create-board-item">
                            <div className="create-board-thumbnail">
                                <div className="plus-symbol">+</div>
                            </div>
                            <div className="create-board-name">
                                Create Project
                            </div>
                        </div>
                    </Link>
            </div>
        </div>
    );
  }
}

export default BoardMenu;



