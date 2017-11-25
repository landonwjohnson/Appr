import React, { Component } from 'react';
import editIcon from '../../../img/icons/Pencil-Icon.svg';
import './account-settings.scss';
import EditProfile from './modals/EditProfile/EditProfile';
import Header from '../../Header/Header';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : 'auto',
    marginLeft            : 'auto',
    transform             : 'translate(0%, 40%)'
  }
};


class AccountSettings extends Component {
  constructor(){
    super()
    this.state={
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  

  render() {
    return (
      <div>
      <Header />
      <div className="account-settings-container">
          <div className="profile-section-outter">
              <div className="profile-section-inner">
              <div className="avatar-initial">
              L
              </div>
              <div className="name-username-edit-con">
                <div className="name-and-username">
                    <div className="headline-22">Landon Johnson </div>
                    <div className="text-9">@landonwjohnson</div>
                </div>
                <div className="edit-profile-btn" onClick={this.openModal}>
                  <div className="button-icon"><img src={editIcon}/></div>
                  Edit Profile
                  </div>
                </div>
            </div>
          </div>
          <div className="account-section">
            <div className="headline-30"> Account Settings </div>
            <div className="landscape-divider" />
            <div className="account-options">
              <div className="headline-20"> Change Email </div>
              <div className="headline-20"> Change Password </div>
              <div className="headline-20"> Change Avatar </div>
            </div>
          </div>
          <Modal 
            isOpen ={this.state.modalIsOpen} 
            onRequestClose={this.closeModal}
            className="modal-account-settings-content"
            overlayClassName="modalStyle"
            style={customStyles}
          >
            <EditProfile onCloseBtnClick={this.closeModal} />
          </Modal>
      </div>
      </div>
    );
  }
}

export default AccountSettings;
