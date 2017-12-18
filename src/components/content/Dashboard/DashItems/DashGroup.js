import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashGroup extends Component {
    render() {
        const { userid, groupid, groupName } = this.props;
        return (
            <li className="project-thumb">
                <Link to={`/user/${userid}/group/${groupid}/dashboard`}>
                    <div className="project-thumb-body"/>
                    <div className="project-thumb-footer">
                        <label> {groupName} </label>
                    </div>
                </Link>
            </li>
        );
    }
}

export default DashGroup;
