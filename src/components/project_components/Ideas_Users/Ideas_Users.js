import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Nav_Sidebar from '../Nav_Sidebar/Nav_Sidebar';
import './idea_users.scss';

class Ideas_Users extends Component {
  render() {
    return (
      <div className="ideas-users-body">
          <Header />

          <div className="ideas-users-wrapper">

              <Nav_Sidebar />

              <div className="ideas-users-input-area">

                    <div className="ideas-area">
                          <h1>Ideas</h1>
                          <div className="ideas-input-one">
                              <h3>1.</h3>
                              <input placeholder="Idea"/>
                              <button>Save</button>
                          </div>
                          <div className="ideas-input-two">
                              <h3>2.</h3>
                              <input placeholder="Idea"/>
                              <button>Save</button>
                          </div>
                          <div className="ideas-add-wrap">
                              <a href="" className="ideas-add">+Add</a>
                          </div>
                    </div>

                    <div className="users-area">
                          <h1>Users</h1>
                          <div className="users-input-one">
                              <input placeholder="Target Demographic"/>
                              <input placeholder="Technology Skill"/>
                              <input placeholder="Description"/>
                              <button>Save</button>
                          </div>
                          <div className="users-input-two">
                              <input placeholder="Target Demographic"/>
                              <input placeholder="Technology Skill"/>
                              <input placeholder="Description"/>
                              <button>Save</button>
                          </div>
                          <div className="users-add-wrap">
                              <a href="" className="users-add">+Add</a>
                          </div>
                    </div>

              </div>

          </div>

      </div>
    );
  }
}

export default Ideas_Users;