import React, { Component } from 'react';
import editIcon from '../../../../img/icons/Pencil-Icon.svg';
import './account-settings.scss';
import EditProfile from './modals/EditProfile';
import ChangeEmail from './modals/ChangeEmail';
import ChangePassword from './modals/ChangePassword'
import ChangeAvatar from './modals/ChangeAvatar/ChangeAvatar';
import Modal from 'react-modal';
import { ModalBox } from './accountsettingsStyled';
import { findUserInfo } from '../../../../services/account.services';

class AccountSettings extends Component {
  constructor(props){
    super(props)
    this.state={
      profileModalOpen: false,
      emailModalOpen: false,
      passwordModalOpen: false,
      avatarModalOpen: false,
      userInfo: {}
    }
    //UI Modals
      this.openProfileModal = this.openProfileModal.bind(this);
      this.openEmailModal = this.openEmailModal.bind(this);
      this.openPasswordModal = this.openPasswordModal.bind(this);
      this.openAvatarModal = this.openAvatarModal.bind(this);
      this.closeProfileModal = this.closeProfileModal.bind(this);
      this.closeEmailModal = this.closeEmailModal.bind(this);
      this.closePasswordModal = this.closePasswordModal.bind(this);
      this.closeAvatarModal = this.closeAvatarModal.bind(this);
  }

  componentWillMount(){
    const userid = this.props.match.params.userid;
    findUserInfo(userid)
    .then( res => {
        if (res.status !== 200) {
            alert(res);
        }
        else {
              this.setState({ 
                  userInfo: {   
                    id: res.data[0].id,
                    username: res.data[0].username,
                    avatar: res.data[0].avatar,
                    firstName: res.data[0].first_name,
                    lastName: res.data[0].last_name,
                    email: res.data[0].email
                  }
              });
        }
    })
    .catch(err => {throw err});
  }

  //UI Modals
    closeProfileModal() {
      this.setState({profileModalOpen: false});
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

    openProfileModal() {
      this.setState({profileModalOpen: true});
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
    const userInfo = this.state.userInfo;
    const { handleNameSubmit, handleEmailSubmit, handleAvatarSubmit, handleInitials } = this.props;
    console.log(this.state)
    return (
      <div className="account-settings-container">
          <div className="profile-section-outter">
              <div className="profile-section-inner">
              <div className="wrapper">
                  <div className="change-initial" onClick={this.openAvatarModal}>  
                    <div>Change</div>
                  </div>
                  <div className="avatar-initial"  style={{backgroundImage: `url(${userInfo.avatar})`}} >
                  
                  {/* <label>{userInfo.firstName.charAt(0).toUpperCase()}</label> */}
                  <label>{handleInitials(userInfo.avatar)}</label>
                  </div>
                  <div className="name-username-edit-con">
                    <div className="name-and-username">
                        <div className="headline-22" onClick={this.openProfileModal}>{userInfo.firstName} {userInfo.lastName} </div>
                        <div className="text-9">@{userInfo.username}</div>
                    </div>
                    <div className="edit-profile-btn" onClick={this.openProfileModal}>
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
              isOpen ={this.state.profileModalOpen} 
              onRequestClose={this.closeProfileModal}
              className="modal-account-settings-content"
              style={ModalBox}
          >
              <EditProfile userInfo={userInfo} handleNameSubmit={handleNameSubmit} onCloseBtnClick={this.closeProfileModal} />
          </Modal>

          <Modal 
              isOpen ={this.state.emailModalOpen} 
              onRequestClose={this.closeEmailModal}
              className="modal-account-settings-content"
              style={ModalBox}
          >
              <ChangeEmail userInfo={userInfo}  onCloseBtnClick={this.closeEmailModal} handleEmailSubmit={handleEmailSubmit}/>
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
              <ChangeAvatar userInfo={userInfo} onCloseBtnClick={this.closeAvatarModal} handleAvatarSubmit={handleAvatarSubmit} showAvatarFail={this.showAvatarFail}/>
          </Modal>
      </div>
    );
  }
}

export default AccountSettings;