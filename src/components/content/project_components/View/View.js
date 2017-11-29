import React, { Component } from 'react';
import Header from '../../../Header/Header';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar'
import './view.scss';

class View extends Component {
  render() {
    return (
      <div>
      <Header />
        <div className="main-fix">
          <ProjectSetupSidebar />
          <div className="view-inner-con">
          <div className="view-top-label">
            <h1 className="project-label-name">View</h1>
              <div className="view-input-con">
                <div className="view-input-individual">
                  <label className="view-num-individual">1.</label>
                    <input className="view-input-name" placeholder="Name" type="text" />
                    <input className="view-input-imgurl" placeholder="Image URL" type="text" />
                    <button className="button">Save</button>
                    <span className="delete-x">&times;</span> 
                </div>
             
                <div className="view-add">
                  <a href="">+Add</a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default View;