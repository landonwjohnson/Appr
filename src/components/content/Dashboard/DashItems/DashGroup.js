import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashGroup extends Component {
    render() {
        const { userid, groupid, groupName } = this.props;
        return (
            <li className="create-project-thumb">
                <Link to={`/user/${userid}/group/${groupid}/dashboard`}>
                    <div className="create-project-thumb-body">
                        <img src="https://cdn3.iconfinder.com/data/icons/blog-and-social-media-icons/512/Group_of_People-512.png" alt="add icon"/>
                    </div>
                    <div className="create-project-thumb-footer">
                        <label> {groupName} </label>
                    </div>
                </Link>
            </li>
        );
    }
}

export default DashGroup;
