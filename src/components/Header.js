import React, { Component } from 'react';
import UserAvatar from '../img/placeholders/Landon-Thumb-Grey.jpg';
import AlertIcon from '../img/icons/Bell-02.svg';
import BoardsIcon from '../img/icons/boards.svg';
import classnames from 'classnames';



class Header extends Component {
    constructor(){
        super();
        this.state ={
            rightMenuOpen: true,
            boardMenuOpen: true,
        }
        this.handleRightMenuClick = this.handleRightMenuClick.bind(this); 
        this.handleBoardMenuClick = this.handleBoardMenuClick.bind(this);
    }

    handleRightMenuClick(){
        if(this.state.rightMenuOpen){
            this.setState({rightMenuOpen: false})
        }
        else {
            this.setState({rightMenuOpen: true})
        }
    }

    handleBoardMenuClick(){
        if(this.state.boardMenuOpen){
            this.setState({boardMenuOpen: false})
        }
        else {
            this.setState({boardMenuOpen: true})
        }
    }
    
    
  render(){
    let rightMenuClass = classnames({
        "right-menu-container--hide": this.state.rightMenuOpen,
        "right-menu-container": true
    })

    var boardMenuClass = classnames({
        "board-menu-container--hide": this.state.boardMenuOpen,
        "board-menu-container": true
    })
  
  
    return (
      <div>
          <div className={boardMenuClass}>
          <a onClick={this.handleBoardMenuClick} href="#">close</a>
            <div className="boards-main-container">
            
                <div className="recent-boards-con">
                    <div className="text-12">RECENT BOARDS</div>
                        <div className="board-menu-item">
                            <div className="board-item-thumbnail">

                            </div>
                            <div className="board-item-name">
                                Placeholder
                            </div>
                        </div>
                    <div className="board-menu-item">
                        <div className="board-item-thumbnail">

                        </div>
                        <div className="board-item-name">
                            Placeholder
                        </div>
                    </div>
               
                </div>
                <div className="personal-boards-con">
                    <div className="text-12">PERSONAL BOARDS</div>
                        <div className="create-board-item">
                            <div className="create-board-thumbnail">
                                <div className="plus-symbol">+</div>
                            </div>
                            <div className="create-board-name">
                                Create Board
                            </div>
                        </div>
                </div>
            </div>
          </div>
          <div className="header-container">
                <div className="nav-bar">
                    <div className="board-con" href="#" onClick={this.handleBoardMenuClick} >
                    <div className="board-icon"><img src={BoardsIcon} /></div>
                    
                    <div className="board-text">Boards</div>
                    </div>
                    <div>
                        <div className="logo">Appr</div>
                    </div>
                <div className="user-con">
                 
                        <div className="avatar"><img src={UserAvatar} /></div>
                        <div className="hello-user">Hello Landon!</div>
                        <div className="alert-icon"><img src={AlertIcon} /></div>
                        <div id="bread-menu-toggle" href="#" onClick={this.handleRightMenuClick} >
                            <div className="bread-menu">
                                <div className="bread-top"> <span/> </div>
                                <div className="bread-bottom"> <span/> </div>
                            </div>
                        </div> 
                </div>
               
                </div>    
        </div>
        <div className={rightMenuClass}>
            <div className="right-menu-outter">
            <div className="right-menu-inner">
                <ul>
                    <li>Profile</li>
                    <li>Cards</li>
                    <li>Settings</li>
                    <li>Help</li>
                    <li>Shortcuts</li>
                    <li>Report Bugs</li>
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
