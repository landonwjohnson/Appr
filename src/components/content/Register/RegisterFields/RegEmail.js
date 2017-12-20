import React, { Component } from 'react';
import classnames from 'classnames';

class RegEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEmailFail: false,
            showEmailSuccess: false
        }
        this.handleFailedEmail = this.handleFailedEmail.bind(this);
        this.handleSuccessEmail = this.handleSuccessEmail.bind(this);
        this.handleConstraint = this.handleConstraint.bind(this);
    }

    handleFailedEmail() {
        this.props.toggleReadySwitch('email', false);
        this.setState({
            showEmailFail: true,
            showEmailSuccess: false
        });
    }

    handleSuccessEmail() {
        this.props.toggleReadySwitch('email', true);
        this.setState({
            showEmailFail: false,
            showEmailSuccess: true
        });
    }

    handleConstraint(e) {
        const email = e.target.value;
        if (email.length > 0) {
            !email.includes('@') || email[email.length - 4] !== '.' ? this.handleFailedEmail() : this.handleSuccessEmail();
        }
        else {
            this.setState({
                showEmailFail: false,
                showEmailSuccess: false
            });
        }
    }

    render() {
        const { handleChangeInput } = this.props;
        let failEmailClass = classnames({
            "reg-field": true,
            "reg-field--fail": this.state.showEmailFail
        });
        let successEmailClass = classnames({
            "reg-field-fail": true,
            "reg-field--success": this.state.showEmailSuccess
        });

        return (
            <div className={`${failEmailClass} ${successEmailClass}`}>
                <label className="input-tag"> Email </label>
                <input className="input-solo" type="text" name="email" placeholder="e.g. kyloren@firstorder.org" onChange={e => { handleChangeInput(e), this.handleConstraint(e) }}/>
                <div className="reg-info">
                    <p className="invalid-text"> This email is invalid </p>
                    <p className="valid-text"> This email is valid </p>
                </div>
            </div>
        );
    }
}

export default RegEmail;
