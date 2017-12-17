import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './register.scss';
import classnames from "classnames";
import { register, login } from '../../../services/auth.services';
import { findUsername } from '../../../services/account.services';
import { checkStrengthOf } from '../../../utils/auth.utils';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            username: '',
            showFirstNameFail: false,
            showFirstNameSuccess: false,
            showLastNameFail: false,
            showLastNameSuccess: false,
            showEmailFail: false,
            showEmailSuccess: false,
            showPasswordFail: false,
            showPasswordSuccess: false,
            showUsernameFail: false,
            showUsernameSuccess: false
        };
        this.handleFailedFirstName = this.handleFailedFirstName.bind(this);
        this.handleSuccessFirstName = this.handleSuccessFirstName.bind(this);
        this.handleFailedLastName = this.handleFailedLastName.bind(this);
        this.handleSuccessLastName = this.handleSuccessLastName.bind(this);
        this.handleFailedEmail = this.handleFailedEmail.bind(this);
        this.handleSuccessEmail = this.handleSuccessEmail.bind(this);
        this.handleFailedPassword = this.handleFailedPassword.bind(this);
        this.handleSuccessPassword = this.handleSuccessPassword.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleButtonRegister = this.handleButtonRegister.bind(this);
    }

    handleFailedFirstName() {
        this.setState({
            showFirstNameFail: true,
            showFirstNameSuccess: false
        });
    }

    handleSuccessFirstName() {
        this.setState({
            showFirstNameFail: false,
            showFirstNameSuccess: true
        });
    }

    handleFailedLastName() {
        this.setState({
            showLastNameFail: true,
            showLastNameSuccess: false
        });
    }

    handleSuccessLastName() {
        this.setState({
            showLastNameFail: false,
            showLastNameSuccess: true
        });
    }

    handleFailedEmail() {
        this.setState({
            showEmailFail: true,
            showEmailSuccess: false
        });
    }

    handleSuccessEmail() {
        this.setState({
            showEmailFail: false,
            showEmailSuccess: true
        });
    }

    handleFailedPassword() {
        this.setState({
            showPasswordFail: true,
            showPasswordSuccess: false
        });
    }

    handleSuccessPassword() {
        this.setState({
            showPasswordFail: false,
            showPasswordSuccess: true
        });
    }

    handleFailedUsername() {
        this.setState({
            showUsernameFail: true,
            showUsernameSuccess: false
        });
    }

    handleSuccessUsername() {
        this.setState({
            showUsernameFail: false,
            showUsernameSuccess: true
        });
    }

    handleChangeInput(e) {
        const key = e.target.name;
        const value = e.target.value;
        let newState = this.state[key];
        newState = value;
        this.setState({ [key]: newState });
        switch (key) {
            case 'firstName':
                value.length === 0 ? this.handleFailedFirstName() : this.handleSuccessFirstName();
                break;
            case 'lastName':
                value.length === 0 ? this.handleFailedLastName() : this.handleSuccessLastName();
                break;
            case 'email':
                if (value.length > 0) {
                    !value.includes('@') || value[value.length - 4] !== '.' ? this.handleFailedEmail() : this.handleSuccessEmail();
                }
                else {
                    this.setState({
                        showEmailFail: false,
                        showEmailSuccess: false
                    });
                }
                break;
            case 'password':
                if (value.length > 0) {
                    const strongPass = checkStrengthOf(value);
                    strongPass === false ? this.handleFailedPassword() : this.handleSuccessPassword();
                }
                else {
                    this.setState({
                        showPasswordFail: false,
                        showPasswordSuccess: false
                    });
                }
                break;
            case 'username':
                if (value.length > 0) {
                    this.handleSuccessUsername();
                    const reqBody = { username: value };
                    findUsername(reqBody)
                        .then( res => {
                            res.status !== 200 ? console.log(res) : this.handleFailedUsername();
                        })
                        .catch(err => {throw err});
                }
                else {
                    this.setState({
                        showUsernameFail: false,
                        showUsernameSuccess: false
                    });
                }
                break;
            default:
                break;
        }
    }

    handleButtonRegister() {
        const { firstName, lastName, email, password, username } = this.state;
        const reqBody = { firstName, lastName, email, password, username };
        const creds = { username: email, password };
        register(reqBody)
            .then( res => {
                if (res.data.message === 'Registration was successful!') {
                    login(creds)
                        .then( res => {
                            if (res.status === 200) {
                                this.props.history.push(`/user/${res.data.id}/dashboard`)
                            }
                            else {
                                alert(res.data);
                            }
                        })
                        .catch(err => {throw err});
                }
                else {
                    alert(res.data.message);
                }
            })
            .catch(err => {throw err});
    }

    render() {
        const { showFirstNameSuccess, showLastNameSuccess, showEmailSuccess, showPasswordSuccess, showUsernameSuccess } = this.state;
        let registerBtn = <div/>
        
        if (showFirstNameSuccess === true && showLastNameSuccess === true && showEmailSuccess === true && showPasswordSuccess === true && showUsernameSuccess === true) {
            registerBtn = <button className="create-account-btn not-enough-info-btn" onClick={this.handleButtonRegister}> Create New Account </button>
        }
        else {
            registerBtn = <button className="create-account-btn not-enough-info-btn"> Fill out all fields </button>
        }

        let failFirstNameClass = classnames({
            "reg-firstName": true,
            "reg-firstName--fail": this.state.showFirstNameFail
        });

        let successFirstNameClass = classnames({
            "reg-lastName": true,
            "reg-lastName--success": this.state.showFirstNameSuccess
        });

        let failLastNameClass = classnames({
            "reg-lastName": true,
            "reg-lastName--fail": this.state.showLastNameFail
        });

        let successLastNameClass = classnames({
            "reg-lastName": true,
            "reg-lastName--success": this.state.showLastNameSuccess
        });

        let failEmailClass = classnames({
            "reg-field": true,
            "reg-field--fail": this.state.showEmailFail
        });

        let successEmailClass = classnames({
            "reg-field-fail": true,
            "reg-field--success": this.state.showEmailSuccess
        });

        let failPasswordClass = classnames({
            "reg-field": true,
            "reg-field--fail": this.state.showPasswordFail
        });

        let successPasswordClass = classnames({
            "reg-field": true,
            "reg-field--success": this.state.showPasswordSuccess
        });

        let failUsernameClass = classnames({
            "reg-field": true,
            "reg-field--fail": this.state.showUsernameFail
        });

        let successUsernameClass = classnames({
            "reg-field": true,
            "reg-field--success": this.state.showUsernameSuccess
        });

        return (
            <div className="register-container">
                {/* <div className="reg-header v2"> </div> */}
                <div className="option-container">
                    <div className="option-container-inner">
                        {/* <div className="placeholder-div v2">  </div> */}
                        {/* <div className="option-divider" v2> </div> */}
                        <div className="create-account-outter">
                            <div className="create-account-inner">
                                <div className="create-account-tag"> Create an Account </div>
                                <div className="reg-field">
                                    <label className="input-tag"> Name </label>
                                    <div className="reg-combined-wrapper">
                                        <div className={`${failFirstNameClass} ${successFirstNameClass}`}>
                                            <input type="text" name="firstName" placeholder="First" onChange={e => this.handleChangeInput(e)}/>
                                            <div className="reg-info">
                                                <p className="invalid-text">Please type in your first name</p>
                                            </div>
                                        </div>
                                        <div className={`${failLastNameClass} ${successLastNameClass}`}>
                                            <input type="text" name="lastName" placeholder="Last" onChange={e => this.handleChangeInput(e)}/>
                                            <div className="reg-info">
                                                <p className="invalid-text"> Please type in your last name </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${failEmailClass} ${successEmailClass}`}>
                                    <label className="input-tag"> Email </label>
                                    <input className="input-solo" type="text" name="email" placeholder="e.g. kyloren@firstorder.org" onChange={e => this.handleChangeInput(e)} onInvalid={this.handleFailedEmail} required/>
                                    <div className="reg-info">
                                        <p className="invalid-text"> This email is invalid </p>
                                        <p className="valid-text"> This email is valid </p>
                                    </div>
                                </div>
                                <div className={`${successPasswordClass} ${failPasswordClass}`}>
                                    <label className="input-tag"> Password </label>
                                    <input className="input-solo" type="password" name="password" placeholder="e.g. ih8ud@ddy" onChange={e => this.handleChangeInput(e)}/>
                                    <div className="reg-info">
                                        <p className="invalid-text"> Try again </p>
                                        <p className="valid-text"> Ready to go! </p>
                                    </div>
                                </div>
                                <div className={`${successUsernameClass} ${failUsernameClass}`}>
                                    <label className="input-tag"> Create a Username </label>
                                    <input className="input-solo" type="text" name="username" placeholder="e.g. radar_tech_matt548" onChange={e => this.handleChangeInput(e)}/>
                                    <div className="reg-info">
                                        <p className="invalid-text"> Taken! </p>
                                        <p className="valid-text"> Available! </p>
                                    </div>
                                </div>
                                <div className="reg-btn-footer">
                                    {registerBtn}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
