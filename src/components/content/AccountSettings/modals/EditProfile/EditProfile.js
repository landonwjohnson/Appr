import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './modals.scss'
import PropTypes from 'prop-types';

class EditProfile extends Component {
    
    render() {
      return (
        
        // <div className="modalStyle">
        <div className="modalStyle-inner">
            <div className="modal-account-settings-content">
              <div className="modal-header">
                <div className="modal-header-placeholder"></div>
                <h2 className="modal-title">Edit Profile</h2>
                <span onClick={this.props.onCloseBtnClick} className="closeBtn">&times;</span>
              </div>
              <div className="modal-body">
                <label className="modal-input-tag">First Name</label>
                  <section className="modal-row">
                    <input className="modal-form" />
                  </section>
                
                <label className="modal-input-tag">Last Name</label>
                  <section className="modal-row">
                    <input className="modal-form" />
                  </section>
                
                <label className="modal-input-tag">Email</label>
                  <section className="modal-row">
                    <input className="modal-form" />
                  </section>
              </div>
              <div className="submitModal">
                <button id="updateProfile">
                  Update Profile
                </button>
              </div>
            </div>
           </div>
        // </div> 
        
      );
    }
  }

  EditProfile.propTypes = { onCloseBtnClick: PropTypes.func }
  EditProfile.defaultProps = { onCloseBtnClick: () => {} }
  export default EditProfile;


