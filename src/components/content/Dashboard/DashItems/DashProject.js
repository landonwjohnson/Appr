import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashProject extends Component {
    render() {
        const { userid, projectid, projectName } = this.props;
        return (
            <li className="project-thumb">
                <Link to={`/user/${userid}/project/${projectid}/ideas`}>
                    <div className="project-thumb-body"/>
                    <div className="project-thumb-footer">
                        <label> {projectName} </label>
                    </div>
                </Link>
            </li>
        );
    }
}

export default DashProject;
