import React, { Component } from 'react';
import editIcon from '../../img/icons/Pencil-Icon.svg';

class AccountSettings extends Component {
  render() {
    return (
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
                <div className="edit-profile-btn">
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
      </div>
    );
  }
}

export default AccountSettings;
