import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar';
import Header from '../../../Header/Header';
import './idea_users.scss';

class Ideas_Users extends Component {
    constructor(props) {
        super(props);
        this.state={
            ideas: {
                arr: [
                    {
                     key: 1,
                     label: 1,
                     name: "Nyan Cat"
                    },
                    {
                     key: 2,
                     label: 2,
                     name: "Kitten Mittens"
                    }
                    
                ]
            },
            users: {
                arr: [
                    {
                     key: 1,
                     targetDemographic: 'Cat Lovers',
                     techSkill: 'not too good',
                     description: '#Selfies4Storm'
                    }
                ]
            }
        }
        this.addIdeaItemHandler = this.addIdeaItemHandler.bind(this);
        this.removeIdeaItemHandler = this.removeIdeaItemHandler.bind(this);
        this.addUserItemHandler = this.addUserItemHandler.bind(this);
        this.removeUserItemHandler = this.removeIdeaItemHandler.bind(this);

    }

    addIdeaItemHandler(){
        let IdeaList = this.state.ideas.arr;
        IdeaList.push({
            key: 3,
            label: 3,
            name: 'More Cats'
        });
        this.setState({ arr: IdeaList})

    }

    removeIdeaItemHandler(){

    }

    addUserItemHandler(){

    }

    removeUserItemHandler(){

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
            <span className="delete-x">&times;</span>
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