import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.scss';
import './dashboard-projects.scss';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
      <div className="personal-list-container">
          <label className="dash-section-title">Personal Projects</label>
          <ul className="projects-list">
              <li className="project-thumb">
                  <div className="project-thumb-body">
                      <div className="project-thumb-icon"></div>
                  </div>
                  <div className="project-thumb-footer">
                      <label>Houser</label>
                  </div>
              </li>
              
              <li className="project-thumb">
                  <div className="project-thumb-body">
                      <div className="project-thumb-icon"></div>
                  </div>
                  <div className="project-thumb-footer">
                      <label>HTTP Mini</label>
                  </div>
              </li>
              
              <li className="project-thumb">
                  <div className="project-thumb-body">
                      <div className="project-thumb-icon"></div>
                  </div>
                  <div className="project-thumb-footer">
                      <label>Shelfie</label>
                  </div>
              </li>
              
              <li className="project-thumb">
                  <div className="project-thumb-body">
                      <div className="project-thumb-icon"></div>
                  </div>
                  <div className="project-thumb-footer">
                      <label>Employee Manager</label>
                  </div>
              </li>
              
              <Link to="/ideas">
                  <li className="create-project-thumb">
                      <div className="create-project-thumb-body"></div>
                      <div className="create-project-thumb-footer">
                          <label>Create New Board</label>
                      </div>
                  </li>
              </Link>
          </ul>
      </div>


</div>

    );
  }
}

export default Dashboard;