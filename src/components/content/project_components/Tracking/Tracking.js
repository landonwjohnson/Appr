import React, { Component } from 'react';
import './tracking.scss'
import Header from '../../../Header/Header';
import ProjectItem from './ProjectItem/ProjectItem';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar';


// var mouseWheelEvt = function (event) {
//   if (document.body.doScroll)
//       document.body.doScroll(event.wheelDelta>0?"left":"right");
//   else if ((event.wheelDelta || event.detail) > 0)
//       document.body.scrollLeft -= 10;
//   else
//       document.body.scrollLeft += 10;

//   return false;
// }
// document.body.addEventListener("mousewheel", mouseWheelEvt);



class Tracking extends Component {
  
  render() {
    return (
      <div style={{"background": "grey", "height": "100vh", "overflow-y": "hidden"}}>
        <Header />
        <div className="main-fix">
        <ProjectSetupSidebar />
        <div className="tracking-container">
        
          <div className="tracking-wrapper">
          <div className="project-header">
            <label>Tracking</label>
         
          </div>
             
                <div className="project-items-container">
                    
                      <div className="add-list-wrapper">
                      <span className="add-list--after">
                         <div className="add-list-content">
                          <input placeholder="Add a list..." /> 
                          <div className="add-list-btn-set">
                            <button> Save </button>
                            <button> Close </button>
                            </div>
                        </div>
                      </span>
                      </div>
                    
                    <ProjectItem listName="To Do" />
                    <ProjectItem listName="Backlog" />
                    <ProjectItem listName="Repos" />
                    <ProjectItem listName="Schema" />
                    <ProjectItem listName="Database" />
                    <ProjectItem listName="Test" />
                    
                    
                    
                </div>

            

             
          </div>
        
          
       </div>
      </div>
      </div>
    );
  }
}

export default Tracking;