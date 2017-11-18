import React, { Component } from 'react';
import UserAvatar from '../img/placeholders/Landon-Thumb-Grey.jpg';
import AlertIcon from '../img/icons/Bell-02.svg';
import BoardsIcon from '../img/icons/boards.svg';
import Header from './Header';

class Register extends Component {
  render() {
    return (
      <div className="register-container">
          <div className="reg-header"> </div>
          <div className="option-container">
              <div className="option-container-inner">
                  <div className="placeholder-div">  </div>
                  <div className="option-divider"> </div>
                  <div className="create-account-outter">
                      <div className="create-account-inner">
                        <h1> Create an Account</h1>
                      </div>
                      <div className="input-tag">
                          Name
                      </div>
                  </div>
              </div>

          </div>
        </div>
    );
  }
}

export default Register;