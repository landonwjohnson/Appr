import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashProject extends Component {
    render() {
        const { userid, projectid, projectName } = this.props;
        return (
            <li className="create-project-thumb">
                <Link to={`/user/${userid}/project/${projectid}/ideas`}>
                    <div className="create-project-thumb-body">
                        <img src="https://cdn1.iconfinder.com/data/icons/creative-concept/174/CREATIVE_CONCEPT_Black-08-512.png" alt="add icon"/>
                    </div>
                    <div className="create-project-thumb-footer">
                        <label> {projectName} </label>
                    </div>
                </Link>
            </li>
        );
    }
}

export default DashProject;
