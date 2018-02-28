import React, { Component } from 'react';
import classnames from 'classnames';
import './projectsidebar.scss';
import NavMenu from './NavMenu/NavMenu';
import BackgroundMenu from './BackgroundMenu/BackgroundMenu';
import { withRouter } from 'react-router-dom'

 class ProjectSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UI:{ 
                hideProjectMenu: false,
                hideSettingsMenu: true,
                hideBackgroundMenu: true
            }
        };
        this.toggleProjectMenu = this.toggleProjectMenu.bind(this);
    }
    

    toggleProjectMenu(){
        this.props.clearProjectBackgroundPreview();
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
        
        const {handleProjectBackground, userid, projectid, selectedBackground, changeProjectBackground, projectName } = this.props;
       
        return (

            
            <div className="project-sidebar">
                <span className="psb-divider" />
                <div className={`${navMenuClass}`}>
                    <NavMenu userid={userid} projectid={projectid} toggleProjectMenu={this.toggleProjectMenu}/>
                </div>
                <div className={backgroundMenuClass} toggleProjectMenu={this.toggleProjectMenu}>
                    <BackgroundMenu changeProjectBackground={changeProjectBackground} selectedBackground={selectedBackground}  handleProjectBackground={handleProjectBackground} toggleProjectMenu={this.toggleProjectMenu} />
                </div>
            </div>
        )
    }
}

export default withRouter(ProjectSidebar);