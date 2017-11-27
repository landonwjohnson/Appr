import React, { Component } from 'react';
import './tracking.scss'
import Header from '../../../Header/Header';
import ProjectItem from './ProjectItem/ProjectItem';





class Tracking extends Component {
  
  render() {
    return (
      <div style={{"background": "grey", "height": "100vh", "overflow-y": "hidden"}}>
        <Header />
        <div className="main-fix">
        
        <div className="tracking-container">
        
          <div className="tracking-wrapper">
          <div className="project-header">
            <label>Appr</label>
          </div>
           
                <div className="project-items-container">
                    <ProjectItem listName="To Do" />
                    <ProjectItem listName="Backlog" />
                    <ProjectItem listName="Repos" />
                    <ProjectItem listName="Schema" />
                    <ProjectItem listName="Database" />
                    <ProjectItem listName="Test" />
                    <ProjectItem listName="Another Test" />
                </div>

            

             
          </div>
        
          
       </div>
      </div>
      </div>
    );
  }
}

export default Tracking;