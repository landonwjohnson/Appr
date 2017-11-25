import React, { Component } from 'react';
import Header from '../../../Header/Header';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar'
import './endpoints.scss';
import addIcon from '../../../../img/icons/add-icon.svg';

class Endpoints extends Component {
  render() {
    return (
      <div>
      <Header />
        <div className="main-fix">
          <ProjectSetupSidebar />
          <div className="endpoints-container">
          
          <div className="endpoints-wrapper">
            
            <div className="endpoints-inner-container">
            <label className="project-section-header">Endpoints</label>
              <div className="endpoint-list-container">
                <div className="endpoint-item">
                  
                  <div className="endpoint-section-con">
                    <div className="endpoint-label-con">
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
                  
                  <div className="endpoint-divider"> </div>



                  <div className="endpoint-section-con-bottom">
                    <div className="ep-field-con-bottom" />

                        <div className="ep-bottom-row">
                          <div className="req-res-label">
                            REQ
                          </div>
                            <div className="req-res-wrapper">
                              <input className="req-input-field" type="text" placeholder="username" />
                              <span>:</span>
                              <input className="req-input-field" type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="ep-bottom-row">
                        <div className="req-res-label">
                            
                          </div>
                        <button className="req-res-add"> + Add </button>
                        </div>
                  </div>


                  <div className="endpoint-section-con-bottom">
                    <div className="ep-field-con-bottom" />

                        <div className="ep-bottom-row">
                          <div className="req-res-label">
                            RES
                          </div>
                            <div className="req-res-wrapper">
                              <input className="req-input-field" type="text" placeholder="username" />
                              <span>:</span>
                              <input className="req-input-field" type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="ep-bottom-row">
                        <div className="req-res-label">
                            
                          </div>
                        <button className="req-res-add"> + Add </button>
                        </div>
                  </div>
                </div>


                <button className="add-endpoint-item">
                            <div className="add-endpoint-item-inner">
                                <div className="add-endpoint-item-body">
                                    <img src={addIcon} alt="Add New Controller"/>
                                </div>
                                <div className="add-endpoint-item-footer">
                                    <label>Add New Endpoint</label>
                                </div>
                            </div>
                        </button>


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