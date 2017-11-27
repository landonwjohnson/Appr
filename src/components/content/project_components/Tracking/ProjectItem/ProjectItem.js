import React, { Component } from 'react';
import './projectitem.scss'
import ProjectCard from './ProjectCards/ProjectCard';

class ProjectItem extends Component {
  render() {
    return (
      <div className="project-item">
            <div className="project-item-block">
              <div className="prjt-item-inner">
                  <div className="prjt-item-header"> 
                    <label> {this.props.listName} </label>
                    <span></span>
                  </div>
                  <div className="prjt-item-body">
                    <ul>
                      <ProjectCard  cardTitle="Group View" listName={this.props.listName} />
                      <ProjectCard  cardTitle="Party Component" listName={this.props.listName} />
                      
                     
                    </ul>
                  </div>
                  <div className="prjt-item-footer">
                    <button>Add a Card ... </button>
                  </div>
            </div>
            </div>
      </div>
                       

                      
                  

   
    );
  }
}

export default ProjectItem;