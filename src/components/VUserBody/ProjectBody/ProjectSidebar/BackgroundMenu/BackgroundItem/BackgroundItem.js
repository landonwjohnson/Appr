import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './backgrounditem.scss';

export default class BackgroundItem extends Component {

    render() {
        const { handleProjectBackground, backgroundImageSource, portfolio, creatorName } = this.props;
        let backgroundItemClass = classnames({
            'backgroundThumb': true,
            'backgroundThumb--selected': this.props.selected
        })
        return (    
            <li className={backgroundItemClass} onClick={(e) => handleProjectBackground(backgroundImageSource, '#FFF')} style ={ { backgroundImage: `url(${backgroundImageSource})` } }> 
                    <section className="attribution">
                        <Link to={portfolio} target="_blank">
                            <label>{creatorName}</label>
                        </Link>
                        <span>SELECTED</span>
                    </section>
            </li>
        )
    }
}