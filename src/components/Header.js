import React, { Component } from 'react';
import UserAvatar from '../img/placeholders/Landon-Thumb-Grey.jpg';
import AlertIcon from '../img/icons/Bell-02.svg';
import BoardsIcon from '../img/icons/boards.svg';

class Header extends Component {
  render() {
    return (
      <div>

          <div className="header-container">
                <div className="nav-bar">
                    <div className="board-con">
                    <div className="board-icon"><img src={BoardsIcon} /></div>
                    
                    <div className="board-text">Boards</div>
                    </div>
                    <div>
                        <div className="logo">Appr</div>
                    </div>
                <div className="user-con">
                    <div className="avatar"><img src={UserAvatar} /></div>
                    <div className="hello-user">Hello Jaysen!</div>
                    <div className="alert-icon"><img src={AlertIcon} /></div>
                    <div className="menu-btn">
                    <div className="menu-icon">
                        <div className="line"> </div>
                        <div className="line"> </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
      </div>
    );
  }
}

export default Header;
