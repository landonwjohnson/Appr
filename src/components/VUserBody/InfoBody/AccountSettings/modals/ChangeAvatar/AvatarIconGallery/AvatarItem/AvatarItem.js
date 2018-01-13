import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './avataritem.scss';
import classnames from 'classnames';

class AvatarItem extends Component {
    constructor(props){
        super(props);
        this.state ={
            
        }
        this.handleAvatarClick = this.handleAvatarClick.bind(this);
    }
 



    handleAvatarClick(backgroundSource){
        this.props.handleAvatarChange(backgroundSource);        
    }

 

    render() {
        let avatarPicItemClass = classnames({
            'avatarPicItem': true,
            'avatarPicItem--selected': this.props.selected
        })
        console.log(this.props)
        const { backgroundSource, portfolio, creatorName} = this.props;
      return (
            <li className={avatarPicItemClass} value={backgroundSource}  onClick={(e) => this.handleAvatarClick(backgroundSource)} style ={{ backgroundImage: `url(${backgroundSource})` }}> 
                <section className="attribution">
                    <Link to={portfolio} target="_blank">
                        <label>{creatorName}</label>
                    </Link>
                    
                    <span>SELECTED</span>
                    
                </section> </li>
      );
    }
  }

export default AvatarItem


