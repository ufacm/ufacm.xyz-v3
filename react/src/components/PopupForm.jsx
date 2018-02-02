import React from 'react';
import $ from 'jquery';

export default class PopupForm extends React.Component {
    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
    }

    submitForm() {
        let form = $('#popup-form > form');
        let formData = form.serialize();

        $.post(this.props.formURL, (data) => {
            form.trigger('reset');
        });
    }

    render() {
        if (this.props.formType === "login") {
            return (
            <div id="popup-form" className="popup-form">
                <h2>Log In</h2>
                <form>
                    <input type="email" name="email" placeholder="Email"></input>
                    <input type="password" name="password" placeholder="Password"></input>
                </form>
                <button className="clickable button" onClick={this.props.close}>Close</button>
                <button className="clickable button" onClick={this.submitForm}>Log In</button>
            </div>
            );
        }
        else if (this.props.formType === "signup") {
            return (
            <div id="popup-form" className="popup-form">
                <h2>Sign Up</h2>
                <form>
                    <input type="email" name="email" placeholder="Email" ></input>
                    <input type="password" name="password" placeholder="Password"></input>
                    <input type="password" name="confirm-password" placeholder="Confirm Password"></input>
                </form>
                <button className="clickable button" onClick={this.props.close}>Close</button>
                <button className="clickable button" onClick={this.submitForm}>Sign Up</button>
            </div>
            );
        }
    }
}
