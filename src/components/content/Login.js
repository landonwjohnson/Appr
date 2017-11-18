import React, { Component } from 'react';
import PasswordIcon from '../../img/icons/Key-Icon.svg';
import UsernameIcon from '../../img/icons/Username-Icon.svg';

class Login extends Component {
  render() {
    return (
      <div>
          <div className="login-container">
                <div className="login-top">
                    <div className="logo-container">
                    <div className="logo-login">Logo</div>
                    </div>
                </div>
                <div className="login-middle">
                    <div className="usr-pswd-container">
                    <div className="usr-pswd-row">
                        <div className="lgn-icon-con">
                        <div className="lgn-icon"> 
                            <img src={UsernameIcon}/> 
                        </div>
                        </div>
                        <input className="usr-pswd-input" placeholder="Username" type="text" />
                    </div>
                    <div className="usr-pswd-row">
                        <div className="lgn-icon-con">
                        <div className="lgn-icon">
                            <img src={PasswordIcon}/> 
                        </div>
                        </div>
                        <input className="usr-pswd-input" placeholder="Password" type="text" />
                    </div>
                    
                    
                    <div className="login-btn-con">
                        <button className="login-btn"> LOGIN</button>
                    </div>
                    </div>
                </div>
                <div className="login-bottom"></div>
                </div>
      </div>
    );
  }
}

export default Login;
