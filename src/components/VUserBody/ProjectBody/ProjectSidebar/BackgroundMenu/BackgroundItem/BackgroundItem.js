import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BackgroundItem extends Component {


    render() {
        const { handleProjectBackground, backgroundSource, attribution, portfolio, creatorName } = this.props;
        return (    
            <li className="background-box" 
                onClick={(e) => handleProjectBackground(backgroundSource)} style ={ { backgroundImage: `url(${backgroundSource})` } }> 
                    <section className="attribution">
                        <Link to={portfolio} className="attribution" target="_blank"><label>{creatorName}</label></Link>
                    </section> 
            </li>
        )
    }
}