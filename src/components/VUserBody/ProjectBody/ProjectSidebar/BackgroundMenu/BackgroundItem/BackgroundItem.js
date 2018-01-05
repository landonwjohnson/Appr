import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BackgroundItem extends Component {


    render() {
        const { handleProjectBackground, backgroundImageSource, portfolio, creatorName } = this.props;
        return (    
            <li className="background-box" 
                onClick={(e) => handleProjectBackground(backgroundImageSource, '#FFF')} style ={ { backgroundImage: `url(${backgroundImageSource})` } }> 
                    <section className="attribution">
                        <Link to={portfolio} className="attribution" target="_blank"><label>{creatorName}</label></Link>
                    </section> 
            </li>
        )
    }
}