import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar';
import Header from '../../../Header/Header';
import './idea_users.scss';
import getUId from '../../../../utils/uid.utils';

class Ideas_Users extends Component {
    constructor(props) {
        super(props);
        this.state={
            ideas: [],
            users: []
        }
    }

  render() {
      const displayIdeas = this.state.ideas.arr.map( idea => {
        return(
            <div className="ideas-item">
            <section>
                <label>{idea.label + '.'}</label>
                <input placeholder={idea.name}></input>
            </section>
            <button className="not-enough-info-btn">Save</button>
            <span className="delete-x" onClick={this.removeIdeaItemHandler}>&times;</span>
            </div>
        )
      })

      const displayUsers = this.state.users.arr.map( user => {
          return(
            <div className="users-item">
            <section>
            <label>{user.label + '.'}</label>
                <input placeholder={user.targetDemographic}></input>
                <input placeholder={user.techSkill}></input>
                <input placeholder={user.description}></input>
            </section>
            <button className="not-enough-info-btn">Save</button>
            <span className="delete-x" onClick={this.removeUserItemHandler}>&times;</span>
        </div>
              
          )
      })
    return (
      <div>
      <Header />
      <div className="main-fix">
       <ProjectSetupSidebar />

          <div className="ideasUsers-container">
            <div className="ideasUsers-wrapper">
             <div className="project-section-header">
                <label>Ideas & Users</label>
            </div>
                    <div className="ideas-users-area drop-shadow">
                        <div className="ideas-users-wrapper">
                          <div className="area-title">Ideas</div>
                          <div className="ideas-list">

                           {displayIdeas}

                          </div>
                          <div className="ideas-users-footer">
                              <button className="add-button" onClick={this.addIdeaItemHandler}> <span/> Add Idea </button>
                          </div>
                          </div>
                    </div>

                    <div className="ideas-users-area drop-shadow">
                        <div className="ideas-users-wrapper">
                        <div className="area-title">Users</div>
                        <div className="users-list">

                            {displayUsers}

                          </div>
                          <div className="ideas-users-footer">
                              <button className="add-button" onClick={this.addUserItemHandler}> <span/> Add User </button>
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