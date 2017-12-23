import React, { Component } from 'react';
import './modals.scss'
import PropTypes from 'prop-types';

class ChangeEmail extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: this.props.userInfo.email
        }
        
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleEmailChange(e){
        let newEmail = e.toLowerCase();
        this.setState({
            email: newEmail
          }) 
      }
    
    render() {
        const { handleEmailSubmit, userInfo } = this.props;
      return (
        <div className="modalStyle-inner">
            <div className="modal-account-settings-content">
                <div className="modal-header">
                    <div className="modal-header-placeholder"></div>
                    <h2 className="modal-title">Change Email</h2>
                    <span className="closeBtn" onClick={this.props.onCloseBtnClick}>&times;</span>
                </div>
                {/* <form> */}
                <div className="modal-body">
                    
                    <label className="modal-input-tag">Current Email</label>
                    <section className="modal-row">
                        <label className="current-email">{userInfo.email}</label>
                    </section>
                    <label className="modal-input-tag">New Email</label>
                    <section className="modal-row">
                        <input className="modal-form" type="email" autoFocus onChange={(e) => {this.handleEmailChange(e.target.value)}} maxLength={30} required/>
                    </section>
                </div>
                <div className="submitModal">
                    <button id="updateEmail" onClick={(e) => {handleEmailSubmit(this.state.email)}}>
                    Update Email
                    </button>
                </div>
                {/* </form> */}
            </div>
        </div>
        
      );
    }
  }

  ChangeEmail.propTypes = { onCloseBtnClick: PropTypes.func }
  ChangeEmail.defaultProps = { onCloseBtnClick: () => {} }
  export default ChangeEmail;


