import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './register.scss';
import classnames from "classnames";


class Register extends Component {
    constructor(){
        super()
        this.state={
            showEmailFail: false,
            showEmailSuccess: false,
            showPasswordFail: false,
            showPasswordSuccess: false,
            showNameFail: false
    }
      this.handleFailedEmail = this.handleFailedEmail.bind(this);
      this.handleSuccessEmail = this.handleSuccessEmail.bind(this);
      this.handleFailedPassword = this.handleFailedPassword.bind(this);
      this.handleSuccessPassword = this.handleSuccessPassword.bind(this);
    }

    handleFailedEmail() {
        this.setState({
            showEmailSuccess: false,
            showEmailFail: true
        });
    }

    handleSuccessEmail(){
        this.setState({
            showEmailFail: false,
            showEmailSuccess: true
        });
    }

    handleFailedPassword(){
        this.setState({
            showPasswordSuccess: false,
            showPasswordFail: true
        })
    }

    handleSuccessPassword(){
        this.setState({
            showPasswordFail: false,
            showPasswordSuccess: true
        })
    }

  render() {
      let failEmailClass = classnames({
          "reg-field": true,
          "reg-field--fail": this.state.showEmailFail
      })

      let successEmailClass = classnames({
        "reg-field-fail": true,
        "reg-field--success": this.state.showEmailSuccess
      })

      let failPasswordClass = classnames({
        "reg-field": true,
        "reg-field--fail": this.state.showPasswordFail
      })

      let successPasswordClass = classnames({
        "reg-field": true,
        "reg-field--success": this.state.showPasswordSuccess
      })
    return (
    
      <div className="register-container">
      
          {/* <div className="reg-header v2"> </div> */}
          <div className="option-container">
              <div className="option-container-inner">
                  {/* <div className="placeholder-div v2">  </div> */}
                  {/* <div className="option-divider" v2> </div> */}
                  <div className="create-account-outter">
                      <div className="create-account-inner">
                        <div className="create-account-tag"> Create an Account</div>
                            <div className="reg-field">
                                <label className="input-tag">
                                    Name
                                </label>
                                <div className="form-combined">
                                <input 
                                    className="input-combined"
                                    type="text" 
                                    placeholder="First"
                                />
                                <input 
                                    className="input-combined"
                                    type="text" 
                                    placeholder="Last"
                                />
                               
                                </div>
                                <div className="reg-info">
                                    <p className="invalid-text">This email is invalid</p>
                                    <p className="valid-text">This email is valid</p>
                                </div>
                            </div>
                            <div className={`${failEmailClass} ${successEmailClass}`}>
                                <label 
                                    className="input-tag">
                                    Email
                                </label>
                                <input 
                                    className="input-solo" 
                                    type="text" 
                                    placeholder="e.g, landonwjohnson@gmail.com"
                                    
                                />
                                <div className="reg-info">
                                    <p className="invalid-text">This email is invalid</p>
                                    <p className="valid-text">This email is valid</p>
                                </div>
                            </div>
                            <div className={`${successPasswordClass} ${failPasswordClass}`}>
                                <label 
                                    className="input-tag">
                                    Password
                                </label>
                                <input 
                                    className="input-solo"
                                    type="password" 
                                    placeholder="e.g, •••••••••••••"
                                />
                                <div className="reg-info">
                                    <p className="invalid-text">Try again</p>
                                    <p className="valid-text">Ready to go!</p>
                                </div>
                            </div>
                            <div className="reg-btn-footer">
                            <Link to="dashboard"><button className="create-account-btn not-enough-info-btn"> Create New Account </button> </Link>
                            </div>
                            
                      </div>
                      
                  </div>
              </div>
              <section>
                <button onClick={this.handleSuccessEmail}>Email Success</button>
                <button onClick={this.handleFailedEmail}>Email Failed</button>
              </section>

              <section>
                <button onClick={this.handleSuccessPassword}>Password Success</button>
                <button onClick={this.handleFailedPassword}>Password Failed</button>
              </section>
          </div>
        </div>
    );
  }
}

export default Register;