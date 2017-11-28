import React, { Component } from 'react';
import './projectitem.scss'
import ProjectCard from './ProjectCards/ProjectCard';

class ProjectItem extends Component {
  render() {
    return (
      <div className="project-item-parent">
      <div className="project-item">
            <div className="project-item-block">
              <div className="prjt-item-inner">
                  <div className="prjt-item-header"> 
                    <label> {this.props.listName} </label>
                    <span> </span>
                  </div>
                  <div className="prjt-item-body">
                    <ul>
                    <ProjectCard  cardTitle="header V1" listName={this.props.listName} />
                    <ProjectCard  cardTitle="Group View" listName={this.props.listName} />
                    <ProjectCard  cardTitle="Mobile Nav Component" listName={this.props.listName} />
                    <ProjectCard  cardTitle="Horizontal Wheel Scrolling" listName={this.props.listName} />
                    <ProjectCard  cardTitle="Appr Website" listName={this.props.listName} />
                    <ProjectCard  cardTitle="Passing Props" listName={this.props.listName} />
                    <ProjectCard  cardTitle="Manage State" listName={this.props.listName} />
                    <ProjectCard  cardTitle="Another Placeholder" listName={this.props.listName} />
                    <ProjectCard  cardTitle="Party Component" listName={this.props.listName} />
                    <ProjectCard  cardTitle="The Cat App" listName={this.props.listName} />
                     
                      
                     
                    </ul>
                  </div>
                  <div className="prjt-item-footer">
                    <button>Add a task...</button>
                  </div>
            </div>
            </div>
      </div>
      </div>    

                      
                  

   
    );
  }
}

export default ProjectItem;

{/* <div className="dotmenu--open">
                    <div className="pop-over-menu">
                        <div className="pop-over-menu-wrapper">
                            <div className="menu-header">
                              <span className="menu-placeholder"></span>
                              <div classname="menu-title">
                                List Actions
                              </div>
                              <span className="delete-x"> &times;</span>
                            </div>
                            <ul>
                              <li>Archive This List</li>
                            </ul>
                        </div>
                    </div>
                    </div> */}