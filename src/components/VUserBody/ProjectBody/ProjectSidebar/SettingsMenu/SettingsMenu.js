import React, { Component } from 'react';
import './settingsmenu.scss';


export default class SettingsMenu extends Component {
        constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        let { toggleSettingsMenu, toggleBackgroundMenu } = this.props;

        return (
            <div>
                 
                    <div className='project-settings-header'>
                        <button onClick={(e) => toggleSettingsMenu()}/>
                        <div className="change-settings-title"> Settings </div>
                    </div>
                    
                    <ul className='settings-list'>
                        <li onClick={(e) => toggleBackgroundMenu()}>Change Background</li>
                        <li>Change Name</li>
                        <li>Archive Project</li>
                    </ul>

                    <div className='project-background-footer'>
                        <div className="project-sidebar-buttonset">
                        </div>
                        
                    </div>
                
            </div>
        )
    }
}