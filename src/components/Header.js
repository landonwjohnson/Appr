import React, { Component } from 'react';
import UserAvatar from '../img/placeholders/Landon-Thumb-Grey.jpg';
import AlertIcon from '../img/icons/Bell-02.svg';
import BoardsIcon from '../img/icons/boards.svg';



class Header extends Component {

    
    
  render(){
    let NavX = function() {
        document.getElementById("bread-menu-toggle").classList.toggle("active");
        }
  
  
    return (
      <div>
          <div className="board-menu-container"></div>
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
                        <div id="bread-menu-toggle" href="#" onClick={NavX}>
                            <div className="bread-menu">
                                <div className="bread-top"> <span/> </div>
                                <div className="bread-bottom"> <span/> </div>
                            </div>
                        </div> 
                </div>
               
                </div>    
        </div>
        <div className="left-menu-container">
            <div className="left-menu-outter">
            <div className="left-menu-inner">
                <ul>
                    <li>Profile</li>
                    <li>Cards</li>
                    <li>Settings</li>
                    <li>Help</li>
                    <li>Shortcuts</li>
                    <li>Change Language</li>
                    <li>Log Out</li>
                
                </ul>
            </div>
            </div>
        </div>
        
      
        
        

        
      </div>
    );
  }
}

export default Header;
