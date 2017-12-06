import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar';
import Header from '../../../Header/Header';
import './idea_users.scss';

class Ideas_Users extends Component {
  render() {
    return (
      <div>
      <Header />
      <div className="main-fix">
       <ProjectSetupSidebar />

          <div className="ideasUsers-container">
            <div className="ideasUsers-wrapper">
             <div className="project-section-header">
                <label>Ideas & Users</label>
                {/* <ul>
                    <li>What problem(s) does your app solve?</li>
                    <li>How does it solve those problems?</li>
                    <li>Who is your target user?</li>
                    <li>How much experience do they have with technology?</li>
                </ul> */}
            </div>
              

              
                    <div className="ideas-users-area drop-shadow">
                        <div className="ideas-users-wrapper">
                          <div className="area-title">Ideas</div>
                          <div className="ideas-list">
                            <div className="ideas-item">
                                <section>
                                    <label>1.</label>
                                    <input placeholder="Idea"></input>
                                </section>
                                <button className="not-enough-info-btn">Save</button>
                                <span className="delete-x">&times;</span>
                            </div>
                          </div>
                          <div className="ideas-users-footer">
                              <button className="add-button"> <span/> Add Idea </button>
                          </div>
                          </div>
                    </div>

                    <div className="ideas-users-area drop-shadow">
                        <div className="ideas-users-wrapper">
                        <div className="area-title">Users</div>
                        <div className="users-list">
                            <div className="users-item">
                                <section>
                                <label>1.</label>
                                    <input placeholder="Target Demographic"></input>
                                    <input placeholder="Technology Skill"></input>
                                    <input placeholder="Description"></input>
                                </section>
                                <button className="not-enough-info-btn">Save</button>
                                <span className="delete-x">&times;</span>
                            </div>
                          </div>
                          <div className="ideas-users-footer">
                              <button className="add-button"> <span/> Add User </button>
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

export default Ideas_Users;