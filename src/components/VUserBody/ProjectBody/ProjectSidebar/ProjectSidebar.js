import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './projectsidebar.scss';
import NavMenu from './NavMenu/NavMenu';
import BackgroundMenu from './BackgroundMenu/BackgroundMenu';

export default class ProjectSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UI:{ 
                hideProjectMenu: false,
                hideBackgroundMenu: true
            }
        };
        this.toggleProjectMenu = this.toggleProjectMenu.bind(this);
    }

    toggleProjectMenu(){
        if(this.state.UI.hideProjectMenu === false){
            this.setState({ UI: { hideProjectMenu: true, hideBackgroundMenu: false } })
        }
        else if(this.state.UI.hideBackgroundMenu === false){
            this.setState({ UI: { hideProjectMenu: false, hideBackgroundMenu: true } })
        }
    }

    render() {
        let navMenuClass = classnames({
            "navMenu-wrapper": true,
            "navMenu--hide": this.state.UI.hideProjectMenu
        })

        let backgroundMenuClass = classnames({
            "backgroundMenu--hide": this.state.UI.hideBackgroundMenu,
            "backgroundMenu-wrapper": true
        })
        
        const { userid, projectid } = this.props;
        return (
            <div className="project-sidebar-container">
                <div className={`${navMenuClass}`}>
                    <NavMenu userid={userid} projectid={projectid} toggleProjectMenu={this.toggleProjectMenu}/>
                </div>
                <div className={backgroundMenuClass} toggleProjectMenu={this.toggleProjectMenu}>
                    <BackgroundMenu handleProjectBackground={this.props.handleProjectBackground} toggleProjectMenu={this.toggleProjectMenu} />
                </div>
            </div>
        )
    }
}