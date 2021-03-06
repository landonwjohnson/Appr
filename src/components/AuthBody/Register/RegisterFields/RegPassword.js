import React, { Component } from 'react';
import classnames from 'classnames';
import { checkStrengthOf } from '../../../../utils/auth.utils';

class RegPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPasswordFail: false,
            showPasswordSuccess: false
        }
        this.handleFailedPassword = this.handleFailedPassword.bind(this);
        this.handleSuccessPassword = this.handleSuccessPassword.bind(this);
        this.handleConstraint = this.handleConstraint.bind(this);
    }

    handleFailedPassword() {
        this.props.toggleReadySwitch('password', false);
        this.setState({
            showPasswordFail: true,
            showPasswordSuccess: false
        });
    }

    handleSuccessPassword() {
        this.props.toggleReadySwitch('password', true);
        this.setState({
            showPasswordFail: false,
            showPasswordSuccess: true
        });
    }

    handleConstraint(e) {
        const password = e.target.value;
        if (password.length > 0) {
            const strongPass = checkStrengthOf(password);
            strongPass === false ? this.handleFailedPassword() : this.handleSuccessPassword();
        }
        else {
            this.setState({
                showPasswordFail: false,
                showPasswordSuccess: false
            });
        }
    }

    render() {
        const { handleChangeInput } = this.props;
        let failPasswordClass = classnames({
            "reg-field": true,
            "reg-field--fail": this.state.showPasswordFail
        });
        let successPasswordClass = classnames({
            "reg-field": true,
            "reg-field--success": this.state.showPasswordSuccess
        });

        return (
            <div className={`${successPasswordClass} ${failPasswordClass}`}>
                <label className="input-tag"> Password </label>
                <input className="input-solo" type="password" name="password" placeholder="e.g. ih8d@ddy" onChange={e => { handleChangeInput(e), this.handleConstraint(e) }}/>
                <div className="reg-info">
                    <p className="invalid-text"> Try again </p>
                    <p className="valid-text"> Ready to go! </p>
                </div>
            </div>
        );
    }
}

export default RegPassword;
