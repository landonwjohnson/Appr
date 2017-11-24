import React, { Component } from 'react';
import Header from '../../../Header/Header';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar'
import './endpoints.scss';

class Endpoints extends Component {
  render() {
    return (
      <div>
      <Header />
        <div className="project-view">
          {/* <ProjectSetupSidebar /> */}
          <div className="endpoints-container">
          <label className="project-section-header">Endpoints</label>
          <div className="endpoints-wrapper">
            <div className="endpoints-inner-container">
              
              <div className="endpoints-list-container">
                <div className="endpoint-item">
                  
                  <div className="endpoint-section-con">
                    <div className="endpoint-listing-con">
                      1.
                    </div>
                    <div className="ep-field-con">
                        <input className="url-input-field" type="text" placeholder="URL" />
                        <select className="http-verb-select">
                          <option>GET</option>
                          <option>POST</option>
                          <option>UPDATE</option>
                          <option>DELETE</option>
                        </select>
                    </div>
                  
                    
                  </div>
                </div>
          


              </div>
              </div>
            </div>  
              
          </div>
        </div>
      </div>
    );
  }
}

export default Endpoints;