import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './modals.scss'

class EditProfile extends Component {
    render() {
      return (
        <div id="editProfileModal" className="modalStyle">
        <div className="modalStyle-inner">
            <div className="modal-account-settings-content">
              <div className="modal-header">
                <div className="modal-header-placeholder"></div>
                <h2 className="modal-title">Edit Profile</h2>
                <Link to="/"><span className="closeBtn">&times;</span></Link>
                
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
        </div> 
       
      );
    }
  }
  
  export default EditProfile;


