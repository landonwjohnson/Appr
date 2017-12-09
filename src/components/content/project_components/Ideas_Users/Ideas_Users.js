import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar';
import Header from '../../../Header/Header';
import './idea_users.scss';
import { createProjectIdea, findProjectIdeas, updateProjectIdea, deleteProjectIdea } from '../../../../services/project.idea.services';
import { findProjectUserFields } from '../../../../services/project.userfield.services';

class Ideas_Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ideas: [],
            userfields: []
        }
        this.handleAddIdeaButton = this.handleAddIdeaButton.bind(this);
        this.handleChangeIdea = this.handleChangeIdea.bind(this);
        this.submitChangeIdea = this.submitChangeIdea.bind(this);
        this.handleDeleteIdeaButton = this.handleDeleteIdeaButton.bind(this);
    }

    componentWillMount() {
        const projectid = this.props.match.params.projectid
        const ideaExamples = [
            { idea_data: 'e.g. Rule the Galaxy.' },
            { idea_data: 'e.g. Get Baby out of the corner.'}
        ];
        const userfieldExamples = [
            { target_demo_data: 'e.g. Jedi', skill_data: 'diplomacy', description_data: 'what a bunch of squares'},
            { target_demo_data: 'e.g. Sith', skill_data: 'violence', description_data: 'the cool kids table'}
        ];

        findProjectIdeas(projectid)
            .then( res => {
                if (res.status !== 200) {
                    console.log(res);
                }
                else {
                    if (res.data.length > 0) {
                        this.setState({ ideas: res.data });
                    }
                    else {
                        this.setState({ ideas: ideaExamples });
                    }
                }
            })
            .catch(err => {throw err});

        findProjectUserFields(projectid)
            .then(res => {
                if (res.status !== 200) {
                    console.log(res);
                }
                else {
                    if (res.data.length > 0) {
                        this.setState({ userfields: res.data });
                    }
                    else {
                        this.setState({ userfields: userfieldExamples });
                    }
                }
            })
            .catch(err => {throw err});
    }

    handleAddIdeaButton() {
        const projectid = this.props.match.params.projectid
        const body = {ideaData: ''};
        const newState = this.state.ideas;
        newState.push(body);
        this.setState({ ideas: newState });

        createProjectIdea( projectid, body)
            .then(res => {
                if (res.status !== 200) {
                    console.log(res);
                }
            })
            .catch(err => {throw err})
    }

    handleChangeIdea(e, index) {
        const newState = this.state.ideas;
        newState[index].idea_data = e.target.value;
        this.setState({ ideas: newState });
    }

    submitChangeIdea(e, index) {
        const projectid = this.props.match.params.projectid
        const ideaid = Number(e.target.id);
        const body = this.state.ideas[index].idea_data;

        updateProjectIdea(projectid, ideaid, body)
            .then(res => {
                if (res.status !== 200) {
                    console.log(res);
                }
            })
            .catch(err => {throw err});
    }

    handleDeleteIdeaButton(e, index) {
        const projectid = this.props.match.params.projectid
        const ideaid = Number(e.target.id);
        const newState = this.state.ideas;
        newState.splice(index, 1);
        this.setState({ ideas: newState });

        deleteProjectIdea(projectid, ideaid)
            .then(res => {
                if (res.status !== 200) {
                    console.log(res);
                }
            })
            .catch(err => {throw err});
    }

    render() {
        const ideas = this.state.ideas;
        const userfields = this.state.userfields;

        const displayIdeas = ideas.map( idea => {
            const index = ideas.indexOf(idea);
            return (
                <div className="ideas-item" key={`idea-${index}`}>
                    <section>
                        <label>{(index + 1) + '.'}</label>
                        <input id={idea.id} value={idea.idea_data} onChange={e => this.handleChangeIdea(e, index)} />
                    </section>
                    <button className="not-enough-info-btn" id={idea.id} onClick={e => this.submitChangeIdea(e, index)}> Save </button>
                    <span className="delete-x" id={idea.id} onClick={e => this.handleDeleteIdeaButton(e, index)}> &times; </span>
                </div>
            )
        });

        const displayUsers = userfields.map( userfield => {
            const index = userfields.indexOf(userfield);
            return (
                <div className="user-item" key={`userfield-${index}`}>
                    <section>
                        <label>{(index + 1) + '.'}</label>
                        <input id={userfield.id} value={userfield.target_demo_data}/>
                        <input id={userfield.id} value={userfield.skill_data}/>
                        <input id={userfield.id} value={userfield.description_data}/>
                    </section>
                    <button className="not-enough-info-btn" id={userfield.id}> Save </button>
                    <span className="delete-x" id={userfield.id}> &times; </span>
                </div>
            )
        });

        return (
            <div>
                <Header />
                <div className="main-fix">
                    <ProjectSetupSidebar />
                    <div className="ideasUsers-container">
                        <div className="ideasUsers-wrapper">
                            <div className="project-section-header">
                                <label> Ideas & Users </label>
                            </div>
                            <div className="ideas-users-area drop-shadow">
                                <div className="ideas-users-wrapper">
                                    <div className="area-title"> Ideas </div>
                                    <div className="ideas-list">
                                        {displayIdeas}
                                    </div>
                                    <div className="ideas-users-footer">
                                        <button className="add-button" id="ideas" onClick={this.handleAddIdeaButton}> <span/> Add Idea </button>
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
