import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './avataritem.scss';

class AvatarItem extends Component {
    constructor(props){
        super(props);
        this.state ={
            selected: false,
        }

        this.handleAvatarClick = this.handleAvatarClick.bind(this);
    }
 



    handleAvatarClick(backgroundSource){
        this.props.handleAvatarChange(backgroundSource);
        if(this.props.backgroundSource === this.props.oldAvatar){
            this.setState({selected: true})
        }
        this.props.handleAvatarChange(backgroundSource);
        
}

 

    render() {
        console.log(this.state)
        const { backgroundSource, portfolio, creatorName, oldAvatar} = this.props;
      return (
            <li className="avatarPicItem" value={backgroundSource}  onClick={(e) => this.handleAvatarClick(backgroundSource)} style ={{ backgroundImage: `url(${backgroundSource})` }}> <section className="attribution"><Link to={portfolio} target="_blank"><label>{creatorName}</label><span>SELECTED</span></Link></section> </li>
      );
    }
  }

export default AvatarItem


