import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashProject extends Component {
    render() {
        const { userid, projectid, projectName, backgroundSource } = this.props;
        return (
            <Link to={`/user/${userid}/project/${projectid}/ideas`}>
                <li className="project-thumb" style={{backgroundImage: `url(${backgroundSource})`}} >
                    <div className="project-thumb-body" />
                    <div className="project-thumb-footer">
                        <label> {projectName} </label>
                    </div>
                </li>
            </Link>
        );
    }
}

export default DashProject;
