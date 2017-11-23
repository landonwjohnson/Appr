import React, { Component } from 'react';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar';
import Header from '../../../Header/Header';

import './controllers.scss';

class Controllers extends Component {
  render() {
    return (
    <div>
        <Header />
    <div className="main-fix">
        <ProjectSetupSidebar />
        <div className="controllers-container">
      
        <div className="controllers-inner-container">
        
            <label className="project-section-header">Controllers</label>
            <div className="controller-list-container">
                        <div className="contro-item">
                            <div className="contro-item-inner">
                                <div className="contro-item-header">View 1</div>
                                <div className="contro-item-inputs">
                                <div className="contro-row-container">
                                    <label className="contro-row-name">When</label>
                                    <div className="contro-input-row">
                                        
                                        <input
                                            className="contro-input-field" 
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="contro-row-container">
                                    <label className="contro-row-name">Do</label>
                                    <div className="contro-input-row">
                                        
                                        <input
                                            className="contro-input-field" 
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className="contro-row-container">
                                    <label className="contro-row-name">Require</label>
                                    <div className="contro-input-row">
                                        
                                        <input
                                            className="contro-input-field" 
                                            type="text"
                                        />
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
            
            </div>
            
        </div>
        <button className="add-new-controller"> Add New Controller </button>
      </div>
      </div>
      </div>
    );
  }
}

export default Controllers;