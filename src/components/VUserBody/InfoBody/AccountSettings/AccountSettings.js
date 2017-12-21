import React, { Component } from 'react';
import editIcon from '../../../../img/icons/Pencil-Icon.svg';
import './account-settings.scss';
import EditProfile from './modals/EditProfile';
import ChangeEmail from './modals/ChangeEmail';
import ChangePassword from './modals/ChangePassword'
import ChangeAvatar from './modals/ChangeAvatar';
import Header from '../../Header/Header';
import Modal from 'react-modal';
import { findUser } from '../../../../services/account.services';



const ModalBox = {

  overlay : {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    overflow: "hidden",
    width: "100%",
    zIndex: "5",
    
  },
  content : {
    borderRadius: "4px",
    outline: "none",
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "50%",
    bottom: "50%",
  }
};

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

    //Modals
      this.openModal = this.openModal.bind(this);
      this.openEmailModal = this.openEmailModal.bind(this);
      this.openPasswordModal = this.openPasswordModal.bind(this);
      this.openAvatarModal = this.openAvatarModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.closeEmailModal = this.closeEmailModal.bind(this);
      this.closePasswordModal = this.closePasswordModal.bind(this);
      this.closeAvatarModal = this.closeAvatarModal.bind(this);
    
    //Handle Inputs
      this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      this.handleLastNameChange = this.handleLastNameChange.bind(this);
      this.handleUserNameChange = this.handleUserNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handleAvatarChange = this.handleAvatarChange.bind(this);
  }

  //Modal Methods
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
  
  //Handling Changes Methods
    handleFirstNameChange(e){
      let newFirstName = e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
      this.setState({
          userInfo: {
            firstName: newFirstName,
            lastName: this.state.userInfo.lastName,
            username: this.state.userInfo.username,
            email: this.state.userInfo.email,
            avatar: this.state.userInfo.avatar
          }
        })
    }

    handleLastNameChange(e){
      let newLastName = e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();;
      this.setState({
          userInfo: {
            firstName: this.state.userInfo.firstName,
            lastName: newLastName,
            username: this.state.userInfo.username,
            email: this.state.userInfo.email,
            avatar: this.state.userInfo.avatar
          }
        })
    }

    handleUserNameChange(e){
      let newUserName = e;
      this.setState({
          userInfo: {
            firstName: this.state.userInfo.firstName,
            lastName: this.state.userInfo.lastName,
            username: newUserName,
            email: this.state.userInfo.email,
            avatar: this.state.userInfo.avatar
          }
        })
    }

    handleEmailChange(e){
      let newEmail = e.toLowerCase();
      this.setState({
          userInfo: {
            firstName: this.state.userInfo.firstName,
            lastName: this.state.userInfo.lastName,
            username: this.state.userInfo.username,
            email: newEmail,
            avatar: this.state.userInfo.avatar
          }
        })
    }

    handleAvatarChange(e){
      let newAvatar = e.trim();
      this.setState({
          userInfo: {
            firstName: this.state.userInfo.firstName,
            lastName: this.state.userInfo.lastName,
            username: this.state.userInfo.username,
            email: this.state.userInfo.email,
            avatar: newAvatar
          }
        })
    
    }

    handleInitials(e){
      let userInitials;
      if(this.props.userInfo.avatar !== ''){
        userInitials = '';
      }
      else{
        userInitials = this.state.userInfo.firstName.charAt(0).toUpperCase();
      }
      return userInitials;
    }

    handleUserName(){
      let userName = this.state.userInfo.email;
      var getPosition = this.state.userInfo.email.indexOf("@");
      return userName.slice(0, getPosition);
    }



  
  render() {
    console.log(this.props)
    return (
      <div className="account-settings-container">
          <div className="profile-section-outter">
              <div className="profile-section-inner">
              <div className="wrapper">
                  <div className="change-initial" onClick={this.openAvatarModal}>  
                    <div>Change</div>
                  </div>
                  <div className="avatar-initial"  style={{backgroundImage: `url(${this.props.userInfo.avatar})`}} >
                  
                  <label>{this.handleInitials()}</label>
                  </div>
                  <div className="name-username-edit-con">
                    <div className="name-and-username">
                        <div className="headline-22" onClick={this.openModal}>{this.state.userInfo.firstName} {this.state.userInfo.lastName} </div>
                        <div className="text-9">@{this.handleUserName()}</div>
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
              <EditProfile userInfo={this.state.userInfo} onCloseBtnClick={this.closeModal} handleFirstNameChange={this.handleFirstNameChange} handleLastNameChange={this.handleLastNameChange} handleUserNameChange={this.handleUserNameChange}/>
          </Modal>

          <Modal 
              isOpen ={this.state.emailModalOpen} 
              onRequestClose={this.closeEmailModal}
              className="modal-account-settings-content"
              style={ModalBox}
          >
              <ChangeEmail userInfo={this.state.userInfo}  onCloseBtnClick={this.closeEmailModal} handleEmailChange={this.handleEmailChange}/>
          </Modal>

          <Modal 
              isOpen ={this.state.passwordModalOpen} 
              onRequestClose={this.closePasswordModal}
              className="modal-account-settings-content"
              style={ModalBox}
          >
              <ChangePassword userInfo={this.state.userInfo} onCloseBtnClick={this.closePasswordModal} />
          </Modal>

          <Modal 
              isOpen ={this.state.avatarModalOpen} 
              onRequestClose={this.closeAvatarModal}
              className="modal-account-settings-content"
              style={ModalBox}
          >
              <ChangeAvatar userInfo={this.state.userInfo} onCloseBtnClick={this.closeAvatarModal} handleAvatarChange={this.handleAvatarChange} showAvatarFail={this.showAvatarFail}/>
          </Modal>
      </div>
    );
  }
}

export default AccountSettings;