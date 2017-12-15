import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './project-setup-sidebar.scss';
import { findProject, updateProject } from '../../../../services/project.services';
import HotSpringsUtah from '../../../../img/backgrounds/Hot-Springs-Utah.jpg';
import ThistleHouseUtah from '../../../../img/backgrounds/Thistle-House-Utah.jpg';

export default class ProjectSetupSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author_id: 2,
            id: 1,
            name: "Defeat the Empire",
            status_id: 1,

            UI:{
                showBackgroundList: false
            }
           
        };
        this.handleChangeName = this.handleChangeName.bind(this);
    }

    componentWillMount() {
        const projectid = this.props.projectid;
        findProject(projectid)
            .then( res => {
                if (res.status !== 200) {
                    console.log(res);
                }
                else {
                    this.setState(res.data[0]);
                }
            })
            .catch(err => {throw err});
    }

    handleChangeName(e) {
        const projectid = this.props.projectid;
        const reqBody = { name: e.target.value };
        this.setState({ name: e.target.value });
        updateProject(projectid, reqBody)
            .then(res => res)
            .catch(err => {throw err});
    }

    render() {
        console.log(this.state)
        const { userid, projectid } = this.props;
        return (
            <div className="project-sidebar-container">
                 {/* <div className="project-sidebar-header" style={{'display': 'none'}}>
                     <label> Back </label>
                     <input type="text" value={this.state.name} onChange={e => this.handleChangeName(e)} autoFocus/> 
                 </div> */}

                <div className="project-sidebar-header-bg">
                    <input className="rename-project" type="text" value={this.state.name} onChange={e => this.handleChangeName(e)} autoFocus style={{'display': 'none'}}/> 
                    <input className="change-background-url" type="url" placeholder="Enter Image URL" pattern={/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)jpg|png|gif?/g}/>
                </div>
                
                <ul className="project-sidebar-inner" style={{'display': 'none'}}>
                    <Link to={`/user/${userid}/project/${projectid}/ideas`} className="psb-item"><li>Ideas & Users</li></Link>
                    <Link to={`/user/${userid}/project/${projectid}/features`} className="psb-item"><li >Features</li></Link>
                    <Link to={`/user/${userid}/project/${projectid}/views`}  className="psb-item"><li>Views</li></Link>
                    <Link to={`/user/${userid}/project/${projectid}/controllers`} className="psb-item"><li>Controllers</li></Link>
                    <Link to={`/user/${userid}/project/${projectid}/endpoints`} className="psb-item"><li>Endpoints</li></Link>
                    <Link to={`/user/${userid}/project/${projectid}/schema`} className="psb-item"><li >Schema</li></Link>
                    <Link to={`/user/${userid}/project/${projectid}/tracker`} className="psb-item"><li >Tracker</li></Link>
                </ul>

                <ul className="background-list">
                
                    <li className="no-background-box"><a> <label>No Background</label> </a> </li>
                    <li className="background-box" style ={ { backgroundImage: `url(${HotSpringsUtah})` } }> <section className="attribution"><Link to="http://bit.ly/landonwjohnson-on-behance" className="attribution" target="_blank"><label>Landon Johnson</label></Link></section> </li>
                    <li className="background-box" style ={ { backgroundImage: `url(${ThistleHouseUtah})` } }> <section className="attribution"><Link to="http://bit.ly/landonwjohnson-on-behance" className="attribution" target="_blank"><label>Landon Johnson</label></Link></section></li>
                    <li className="background-box" style ={ { backgroundImage: `url(${HotSpringsUtah})` } }> <section className="attribution"><Link to="http://bit.ly/landonwjohnson-on-behance" className="attribution" target="_blank"><label>Landon Johnson</label></Link></section> </li>
                    <li className="background-box" style ={ { backgroundImage: `url(${ThistleHouseUtah})` } }> <section className="attribution"><Link to="http://bit.ly/landonwjohnson-on-behance" className="attribution" target="_blank"><label>Landon Johnson</label></Link></section></li>
                    <li className="background-box" style ={ { backgroundImage: `url(${HotSpringsUtah})` } }> <section className="attribution"><Link to="http://bit.ly/landonwjohnson-on-behance" className="attribution" target="_blank"><label>Landon Johnson</label></Link></section> </li>
                    <li className="background-box" style ={ { backgroundImage: `url(${ThistleHouseUtah})` } }> <section className="attribution"><Link to="http://bit.ly/landonwjohnson-on-behance" className="attribution" target="_blank"><label>Landon Johnson</label></Link></section></li>
                    <li className="background-box" style ={ { backgroundImage: `url(${HotSpringsUtah})` } }> <section className="attribution"><Link to="http://bit.ly/landonwjohnson-on-behance" className="attribution" target="_blank"><label>Landon Johnson</label></Link></section> </li>
                    <li className="background-box" style ={ { backgroundImage: `url(${ThistleHouseUtah})` } }> <section className="attribution"><Link to="http://bit.ly/landonwjohnson-on-behance" className="attribution" target="_blank"><label>Landon Johnson</label></Link></section></li>
                    <li className="background-box" style ={ { backgroundImage: `url(${HotSpringsUtah})` } }> <section className="attribution"><Link to="http://bit.ly/landonwjohnson-on-behance" className="attribution" target="_blank"><label>Landon Johnson</label></Link></section> </li>
                    <li className="background-box" style ={ { backgroundImage: `url(${ThistleHouseUtah})` } }> <section className="attribution"><Link to="http://bit.ly/landonwjohnson-on-behance" className="attribution" target="_blank"><label>Landon Johnson</label></Link></section></li>
                    
                </ul>
                <div className="project-side-bar-footer">
                    <label>Change Background</label>
                    <div className="project-side-bar-buttonset">
                        <button>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}