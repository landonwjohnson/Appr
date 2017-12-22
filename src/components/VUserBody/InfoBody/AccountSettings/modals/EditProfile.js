import React, { Component } from 'react';
import './modals.scss'
import PropTypes from 'prop-types';

class EditProfile extends Component {
  constructor(props){
    super(props)
    this.state={
      firstName: this.props.userInfo.firstName,
      lastName: this.props.userInfo.lastName,
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);

  }

  handleFirstNameChange(e){
    let newFirstName = e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
    this.setState({
          firstName: newFirstName,
      })
  }

  handleLastNameChange(e){
    let newLastName = e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();;
    this.setState({
          lastName: newLastName
      })
  }
    
    render() {
      console.log(this.state)
      const { userInfo, handleNameSubmit, onCloseBtnClick } = this.props;
      return (
        <div className="modalStyle-inner">
            <div className="modal-account-settings-content">
              <div className="modal-header">
                <div className="modal-header-placeholder"></div>
                <h2 className="modal-title">Edit Profile</h2>
                <span onClick={onCloseBtnClick} className="closeBtn">&times;</span>
              </div>
              
                <div className="modal-body">
                  
                  <label className="modal-input-tag">First Name</label>
                    <section className="modal-row">
                      <input className="modal-form" placeholder={userInfo.firstName} onChange={ (e) => {this.handleFirstNameChange(e.target.value)}} autoFocus maxLength="18" />
                    </section>
                  
                  <label className="modal-input-tag">Last Name</label>
                    <section className="modal-row">
                      <input className="modal-form" placeholder={userInfo.lastName} onChange={ (e) => {this.handleLastNameChange(e.target.value)}} maxLength="18"/>
                    </section>
                  
                  {/* <label className="modal-input-tag">Username</label>
                    <section className="modal-row">
                      <input className="modal-form" placeholder={this.props.userInfo.username} onChange={ (e) => {this.props.handleUserNameChange(e.target.value)}} maxLength="18"/>
                    </section> */}
                </div>
              <div className="submitModal">
                <button id="updateProfile" onClick={(e) => {handleNameSubmit(this.state.firstName, this.state.lastName)}}>
                  Update Profile
                </button>
              </div>
            </div>
           </div>
      );
    }
  }

  EditProfile.propTypes = { onCloseBtnClick: PropTypes.func }
  EditProfile.defaultProps = { onCloseBtnClick: () => {} }
  export default EditProfile;


