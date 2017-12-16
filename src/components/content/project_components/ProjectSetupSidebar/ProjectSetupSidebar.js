import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './project-setup-sidebar.scss';
import { findProject, updateProject } from '../../../../services/project.services';
import HotSpringsUtah from '../../../../img/backgrounds/Hot-Springs-Utah.jpg';
import ThistleHouseUtah from '../../../../img/backgrounds/Thistle-House-Utah.jpg';

export default class ProjectSetupSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {},
            UI: {backgroundMenu: false}
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.toggleBackgroundMenu = this.toggleBackgroundMenu.bind(this);
    }

    componentWillMount() {
        const projectid = this.props.projectid;
        findProject(projectid)
            .then( res => {
                if (res.status !== 200) {
                    console.log(res);
                }
                else {
                    this.setState({ project: res.data[0] });
                }
            })
            .catch(err => {throw err});
    }

    handleChangeName(e) {
        const projectid = this.props.projectid;
        const reqBody = { name: e.target.value };
        const newState = this.state.project;
        newState.name = e.target.value;
        this.setState({ project: newState });
        updateProject(projectid, reqBody)
            .then(res => res)
            .catch(err => {throw err});
    }

    toggleBackgroundMenu(){
        console.log('Background Menu')
        if(this.state.UI.backgroundMenu === false){
            this.setState({UI: {backgroundMenu: true}})
        }else{
            this.setState({UI: {backgroundMenu: false}})
        }
    }

    render() {
        let projectHeaderClass = classnames({
            "project-sidebar-header": this.state.UI.backgroundMenu,
            "project-background-header": this.state.UI.backgroundMenu
        })

        let projectListClass = classnames({
            "nav-list": this.state.UI.backgroundMenu,
            "background-list": this.state.UI.backgroundMenu
        })

        let projectFooterClass = classnames({
            "project-sidebar-footer": this.state.UI.backgroundMenu,
            "project-background-footer": this.state.UI.backgroundMenu
        })
        
        const { userid, projectid } = this.props;
        return (
            <div className="project-sidebar-container">
                 <form>
                <div className={`project-sidebar-header ${projectHeaderClass}`}>
                    <input className="rename-project" type="text" value={this.state.project.name} onChange={e => this.handleChangeName(e)} autoFocus /> 
                    <input className="change-background-url" type="url" placeholder="Enter Image URL" pattern={/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)jpg|png|gif?/g}/>
                </div>
                
                <ul className={`nav-list ${projectListClass} `} >
                    <Link to={`/user/${userid}/project/${projectid}/ideas`} className="nav-item"><li>Ideas & Users</li></Link>
                    <Link to={`/user/${userid}/project/${projectid}/features`} className="nav-item"><li >Features</li></Link>
                    <Link to={`/user/${userid}/project/${projectid}/views`}  className="nav-item"><li>Views</li></Link>
                    <Link to={`/user/${userid}/project/${projectid}/controllers`} className="nav-item"><li>Controllers</li></Link>
                    <Link to={`/user/${userid}/project/${projectid}/endpoints`} className="nav-item"><li>Endpoints</li></Link>
                    <Link to={`/user/${userid}/project/${projectid}/schema`} className="nav-item"><li >Schema</li></Link>
                    <Link to={`/user/${userid}/project/${projectid}/tracker`} className="nav-item"><li >Tracker</li></Link>


                    {/*Background Menu Items*/}
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

                <div className={`project-sidebar-footer ${projectFooterClass}`}>
                    <label onClick={this.toggleBackgroundMenu}>Change Background</label>
                    <div className="project-sidebar-buttonset">
                        <button className="changeBackgroundBtn">Change</button>
                        <div onClick={this.toggleBackgroundMenu} className="closeBackgroundList"> <span /> </div>
                    </div>
                    
                </div>
                </form>
            </div>
        )
    }
}