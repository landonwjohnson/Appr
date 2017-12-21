import React, { Component } from 'react';
import editIcon from '../../../../img/icons/Pencil-Icon.svg';
import './account-settings.scss';
import EditProfile from './modals/EditProfile';
import ChangeEmail from './modals/ChangeEmail';
import ChangePassword from './modals/ChangePassword'
import ChangeAvatar from './modals/ChangeAvatar';
import Header from '../../Header/Header';
import Modal from 'react-modal';
import { ModalBox } from './accountsettingsStyled';
import { findUser } from '../../../../services/account.services';

class AccountSettings extends Component {
  constructor(){
    super()
    this.state={
      modalIsOpen: false,
      emailModalOpen: false,
      passwordModalOpen: false,
      avatarModalOpen: false,

      userInfo: {
        firstName: 'Landon',
        lastName: 'Johnson',
        username: 'landonwjohnson',
        email: 'landonwjohnson@gmail.com',
        password: 'blee blee blop',
        avatar: ''
      }
    }
      this.openModal = this.openModal.bind(this);
      this.openEmailModal = this.openEmailModal.bind(this);
      this.openPasswordModal = this.openPasswordModal.bind(this);
      this.openAvatarModal = this.openAvatarModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.closeEmailModal = this.closeEmailModal.bind(this);
      this.closePasswordModal = this.closePasswordModal.bind(this);
      this.closeAvatarModal = this.closeAvatarModal.bind(this);
  }

    closeModal() {
      this.setState({modalIsOpen: false});
    }

    closeEmailModal(){
      this.setState({emailModalOpen: false})
    }

    closePasswordModal(){
      this.setState({passwordModalOpen: false});
    }

    closeAvatarModal(){
      this.setState({avatarModalOpen: false})
    }

    openModal() {
      this.setState({modalIsOpen: true});
    }

    openEmailModal(){
      this.setState({emailModalOpen: true});
    }

    openPasswordModal(){
      this.setState({passwordModalOpen: true});
    }

    openAvatarModal(){
      this.setState({avatarModalOpen: true})
    }
  
  render() {
    const { handleFirstNameChange, handleLastNameChange, handleEmailChange, handleAvatarChange, userInfo } = this.props;
    console.log(this.props)
    return (
      <div className="account-settings-container">
          <div className="profile-section-outter">
              <div className="profile-section-inner">
              <div className="wrapper">
                  <div className="change-initial" onClick={this.openAvatarModal}>  
                    <div>Change</div>
                  </div>
                  <div className="avatar-initial"  style={{backgroundImage: `url(${userInfo.avatar})`}} >
                  
                  <label>{userInfo.initial}</label>
                  </div>
                  <div className="name-username-edit-con">
                    <div className="name-and-username">
                        <div className="headline-22" onClick={this.openModal}>{userInfo.firstName} {userInfo.lastName} </div>
                        <div className="text-9">@{userInfo.username}</div>
                    </div>
                    <div className="edit-profile-btn" onClick={this.openModal}>
                      <div className="button-icon"><img src={editIcon} alt="edit profile"/></div>
                      Edit Profile
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="account-section">
            <div className="headline-30"> Account Settings </div>
            <div className="landscape-divider" />
            <div className="account-options">
              <div className="headline-20" onClick={this.openEmailModal}> Change Email </div>
              <div className="headline-20" onClick={this.openPasswordModal}> Change Password </div>
              <div className="headline-20"  onClick={this.openAvatarModal}> Change Avatar </div>
            </div>

          
          </div>





          <Modal 
              isOpen ={this.state.modalIsOpen} 
              onRequestClose={this.closeModal}
              className="modal-account-settings-content"
              style={ModalBox}
          >
              <EditProfile userInfo={userInfo} onCloseBtnClick={this.closeModal} handleFirstNameChange={handleFirstNameChange} handleLastNameChange={handleLastNameChange} />
          </Modal>

          <Modal 
              isOpen ={this.state.emailModalOpen} 
              onRequestClose={this.closeEmailModal}
              className="modal-account-settings-content"
              style={ModalBox}
          >
              <ChangeEmail userInfo={userInfo}  onCloseBtnClick={this.closeEmailModal} handleEmailChange={handleEmailChange}/>
          </Modal>

          <Modal 
              isOpen ={this.state.passwordModalOpen} 
              onRequestClose={this.closePasswordModal}
              className="modal-account-settings-content"
              style={ModalBox}
          >
              <ChangePassword userInfo={userInfo} onCloseBtnClick={this.closePasswordModal} />
          </Modal>

          <Modal 
              isOpen ={this.state.avatarModalOpen} 
              onRequestClose={this.closeAvatarModal}
              className="modal-account-settings-content"
              style={ModalBox}
          >
              <ChangeAvatar userInfo={userInfo} onCloseBtnClick={this.closeAvatarModal} handleAvatarChange={handleAvatarChange} showAvatarFail={this.showAvatarFail}/>
          </Modal>
      </div>
    );
  }
}

export default AccountSettings;