import React, { Component } from 'react';
import './modals.scss'
import PropTypes from 'prop-types';

class ChangePassword extends Component {
    
    render() {
      return (
        <div className="modalStyle-inner">
            <div className="modal-account-settings-content">
                <div className="modal-header">
                    <div className="modal-header-placeholder"></div>
                    <h2 className="modal-title">Change Password</h2>
                    <span className="closeBtn" onClick={this.props.onCloseBtnClick}>&times;</span>
                </div>
                <div className="modal-body">
                <label className="modal-input-tag">New Password</label>
                <section className="modal-row">
                    <input className="modal-form" />
                </section>
                <label className="modal-input-tag">Confirm Password</label>
                <section className="modal-row">
                    <input className="modal-form" />
                </section>
                
                </div>
                <div className="submitModal">
                    <button id="updatePassword">
                    Update Password
                    </button>
                </div>
            </div>
        
        </div>
        
      );
    }
  }

  ChangePassword.propTypes = { onCloseBtnClick: PropTypes.func }
  ChangePassword.defaultProps = { onCloseBtnClick: () => {} }
  export default ChangePassword;


