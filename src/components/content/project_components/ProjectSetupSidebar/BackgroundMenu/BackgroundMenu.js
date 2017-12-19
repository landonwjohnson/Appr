import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './backgroundmenu.scss';
import HotSpringsUtah from '../../../../../img/backgrounds/Hot-Springs-Utah.jpg';
import ThistleHouseUtah from '../../../../../img/backgrounds/Thistle-House-Utah.jpg';

export default class BackgroundMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {},
            UI: {backgroundMenu: false}
        };
    }


    render() {
        return (
            <div>
                 <form>
                    <div className='project-background-header'>
                        <input className="change-background-url" type="url" placeholder="Enter Image URL" onChange={(e) => this.props.handleProjectBackground(e.target.value)} pattern={/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)jpg|png|gif?/g}/>
                    </div>
                    
                    <ul className='background-list'>
                            <li className="no-background-box" onClick={(e) => this.props.handleProjectBackground('')}>  <label>No Background</label>  </li>
                            <li className="background-box" onClick={(e) => this.props.handleProjectBackground(HotSpringsUtah)} style ={ { backgroundImage: `url(${HotSpringsUtah})` } }> <section className="attribution"><Link to="http://bit.ly/landonwjohnson-on-behance" className="attribution" target="_blank"><label>Landon Johnson</label></Link></section> </li>
                            <li className="background-box" onClick={(e) => this.props.handleProjectBackground(ThistleHouseUtah)} style ={ { backgroundImage: `url(${ThistleHouseUtah})` } }> <section className="attribution"><Link to="http://bit.ly/landonwjohnson-on-behance" className="attribution" target="_blank"><label>Landon Johnson</label></Link></section> </li>
                    </ul>

                    <div className='project-background-footer'>
                        <div className="project-sidebar-buttonset">
                            <button className="changeBackgroundBtn">Change</button>
                            <div onClick={this.props.toggleProjectMenu} className="closeBackgroundList"> <span /> </div>
                        </div>
                        
                    </div>
                </form>
            </div>
        )
    }
}