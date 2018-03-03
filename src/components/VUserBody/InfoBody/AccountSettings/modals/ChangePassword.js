import React, { Component } from 'react';
import './modals.scss'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ChangePassword extends Component {
    constructor(props){
        super(props)
        this.state = {
            password: ''
        }
    }
    
    render() {
      return (
        <div className="modalStyle-inner">
            <div className="modal-account-settings-content">
                <div className="modal-header">
                    <div className="modal-header-placeholder"></div>
                    <h2 className="modal-title">Change Password</h2>
                    <span className="closeBtn" onClick={this.props.onCloseBtnClick}>&times;</span>
                </div>
                <form>
                <div className="modal-body">
                <label className="modal-input-tag">New Password</label>
                <section className="modal-row">
                    <input type="password" className="modal-form" autoFocus required/>
                </section>
                <label className="modal-input-tag">Confirm Password</label>
                <section className="modal-row">
                    <input type="password" className="modal-form" required />
                </section>
                
                </div>
                <div className="submitModal">
                    <button type="submit" id="updatePassword">
                    Update Password
                    </button>
                </div>
                </form>
            </div>
        
        </div>
        
      );
    }
  }

  function mapStateToProps(state){
    return state
  }

  ChangePassword.propTypes = { onCloseBtnClick: PropTypes.func }
  ChangePassword.defaultProps = { onCloseBtnClick: () => {} }

  export default connect(mapStateToProps)(ChangePassword);


