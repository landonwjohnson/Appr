import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.scss';
import './dashboard-projects.scss';
import addIcon from '../../../img/icons/add-icon.svg';
import Header from '../../Header/Header';
import { findDashboardInfo } from '../../../services/dashboard.services';
import { createGroup } from '../../../services/group.services';
import { createProject } from '../../../services/project.services';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			groups: [],
			projects: []
		};
		this.handleCreateButton = this.handleCreateButton.bind(this);
	}

	componentWillMount() {
		const userid = this.props.match.params.userid;
		findDashboardInfo(userid)
			.then( res => {
				if (res.status !== 200) {
                    console.log(res);
				}
				else {
					this.setState(res.data);
				}
			})
			.catch(err => {throw err});
	}

	handleCreateButton(buttonPressed) {
		const userid = this.props.match.params.userid;
		let name = '';
		let reqBody = {};
		if (buttonPressed === 'group') {
			name = prompt('What is the name of your group?');
			reqBody = {createdByUserId: userid, name};
			createGroup(reqBody)
				.then( res => {
					if (res.data[0].id) {
						const groupid = res.data[0].id;
						this.props.history.push(`/user/${userid}/group/${groupid}/dashboard`);
					}
					else {
						alert(res.data.message);
					}
				})
				.catch(err => {throw err});
		}
		else if (buttonPressed === 'project') {
			name = prompt('What is the name of your project?');
			reqBody = {name, authorId: userid};
			createProject(reqBody)
				.then( res => {
					if (res.data[0].id) {
						const projectid = res.data[0].id;
						this.props.history.push(`/user/${userid}/project/${projectid}/ideas`);
					}
					else {
						alert(res);
					}
				})
				.catch(err => {throw err});
		}
	}

	render() {
		const userid = this.props.match.params.userid;
		const { groups, projects } = this.state
		const displayGroups = groups.map( group => {
			const index = groups.indexOf(group);
			return (
				<Link to={`/user/${userid}/group/${group.id}/dashboard`} key={`group-${index}`}>
					<li className="project-thumb">
						
							<div className="create-project-thumb-body"></div>
							<div className="create-project-thumb-footer">
								<label>{group.name}</label>
							</div>
						
					</li>
			  </Link>
			);
		});
		const displayProjects = projects.map( project => {
			const index = projects.indexOf(project);
			return (
				<Link to={`/user/${userid}/project/${project.id}/ideas`} key={`project-${index}`}>
					<li className="project-thumb">
							<div className="project-thumb-body">
							</div>
							<div className="project-thumb-footer">
								<label>{project.name}</label>
							</div>		
					</li>
				</Link>
			);
		});

		return (
			<div>
				<div className="dashboard-container">
					<div className="group-list-container">
							<label className="dash-section-title">Group Projects</label>
							<ul className="projects-list">
								{displayGroups}
								<li className="create-project-thumb" onClick={() => this.handleCreateButton('group')}>
									<div className="create-project-thumb-body"></div>
									<div className="create-project-thumb-footer">
										<label> Create New Project </label>
									</div>
								</li>
							</ul>
					</div>
					<div className="personal-list-container">
						<label className="dash-section-title">Personal Projects</label>
						<ul className="projects-list">
							{displayProjects}
							<li className="create-project-thumb" onClick={() => this.handleCreateButton('project')}>
								<div className="create-project-thumb-body"></div>
								<div className="create-project-thumb-footer">
									<label> Create New Project </label>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
