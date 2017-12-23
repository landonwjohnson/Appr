import React, { Component } from 'react';
import '../modals.scss'
import ChangeAvatarURL from './AvatarChangeURL/AvatarChangeURL';
import PropTypes from 'prop-types';

class ChangeAvatar extends Component {
    constructor(props){
        super(props)
        this.state={
            avatar: this.props.userInfo.avatar
        }
        this.handleAvatarChange = this.handleAvatarChange.bind(this);
    }
    
    handleAvatarChange(e){
        let newAvatar = e.trim();
        this.setState({
            avatar: newAvatar
          })
      }
    render() {
        const {userInfo, handleAvatarSubmit, onCloseBtnClick } = this.props;
      return (
        <div className="modalStyle-inner">
            <div className="modal-account-settings-content">
                <div className="modal-header">
                    <div className="modal-header-placeholder"></div>
                    <h2 className="modal-title">Change Avatar</h2>
                    <span className="closeBtn" onClick={onCloseBtnClick}>&times;</span>
                </div>
                <form>
                <div className="changeAvatarURL-wrapper">
                    <ChangeAvatarURL userInfo={userInfo} handleAvatarChange={this.handleAvatarChange} />
                </div>
                <div className="submitModal">
                    <button id="updateAvatar" onClick={(e) => {handleAvatarSubmit(this.state.avatar)}}>
                    Update Avatar
                    </button>
                </div>
                </form>
            </div>
        </div>
      );
    }
  }

  ChangeAvatar.propTypes = { onCloseBtnClick: PropTypes.func }
  ChangeAvatar.defaultProps = { onCloseBtnClick: () => {} }
  export default ChangeAvatar;


