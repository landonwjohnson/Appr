import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashGroup extends Component {
    render() {
        const { userid, groupid, groupName } = this.props;
        return (
            <Link to={`/user/${userid}/group/${groupid}/dashboard`}>
                <li className="project-thumb">
                    <div className="project-thumb-body"/>
                    <div className="project-thumb-footer">
                        <label> {groupName} </label>
                    </div>
                </li>
            </Link>
        );
    }
}

export default DashGroup;
