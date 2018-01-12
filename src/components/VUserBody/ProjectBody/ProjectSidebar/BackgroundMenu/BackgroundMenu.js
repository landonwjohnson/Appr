import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './backgroundmenu.scss';
import { findProjectBackgrounds } from '../../../../../services/project.background.services';

import BackgroundItem from './BackgroundItem/BackgroundItem';


export default class BackgroundMenu extends Component {
        constructor(props) {
        super(props);
        this.state = {
            backgrounds: [],
            UI: {backgroundMenu: false}
        };
    }

    componentWillMount(){
        findProjectBackgrounds()
            .then( res => {
                if (res.status !== 200){
                    console.log(res);
                }
                else{
                    this.setState({ backgrounds: res.data })
                }
            })
    }


    render() {
        const { handleProjectBackground, selectedBackground } = this.props;
        const backgrounds = this.state.backgrounds;
        const displayBackgroundItems = backgrounds.map( background => {
            const index = backgrounds.indexOf(backgrounds);
            return(
                <BackgroundItem key={index} selected={background.background_url === selectedBackground} backgroundImageSource={background.background_url} creatorName={background.creator_name} portfolio={background.portfolio} handleProjectBackground={handleProjectBackground}/> 
            )
        })

        return (
            <div>
                 <form>
                    <div className='project-background-header'>
                        <input className="change-background-url" type="url" placeholder="Enter Image URL" onChange={(e) => this.props.handleProjectBackground(e.target.value)} pattern={/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)jpg|png|gif?/g}/>
                    </div>
                    
                    <ul className='background-list'>
                            <li className="no-background-box" onClick={(e) => handleProjectBackground('', '#FFF')}>  <label>No Background</label>  </li>
                            {displayBackgroundItems}
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