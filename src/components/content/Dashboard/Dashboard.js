import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.scss';
import './dashboard-projects.scss';
import addIcon from '../../../img/icons/add-icon.svg';
import Header from '../../Header/Header';
import { findDashboardInfo } from '../../../services/dashboard.services';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			groups: [],
			projects: []
		};
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

	render() {

		return (
			<div>
				<Header />
				<div className="dashboard-container">
					<div className="group-list-container">
						<label className="dash-section-title">Groups</label>
						<ul className="groups-list">

							{/* groups render here */}
							{/* create a group renders here */}

						</ul>
					</div>
					<div className="personal-list-container">
						<label className="dash-section-title">Personal Projects</label>
						<ul className="projects-list">

							{/* projects render here */}

							<Link to="/ideas">
								<li className="create-project-thumb">
									<div className="create-project-thumb-body">
										<img src={addIcon} alt="add icon"/>
									</div>
									<div className="create-project-thumb-footer">
										<label>Create New Project</label>
									</div>
								</li>
							</Link>

						</ul>
					</div>
				</div>
			</div>

		);
	}
}

export default Dashboard;
