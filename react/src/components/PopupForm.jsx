import React from 'react';

export default class PopupForm extends React.Component {
    constructor() {
        super();
    }

    render() {
        if (this.props.formType === "login") {
            return (
            <div className="popup-form">
                <h2>Log In</h2>
                <form>
                    <input type="email" name="email" placeholder="Email"></input>
                    <input type="password" name="password" placeholder="Password"></input>
                </form>
                <button className="button" onClick={this.props.close}>Close</button>
                <button className="button">Log In</button>
            </div>
            );
        }
        else if (this.props.formType === "signup") {
            return (
            <div className="popup-form">
                <h2>Sign Up</h2>
                <form>
                    <input type="email" name="email" placeholder="Email" ></input>
                    <input type="password" name="password" placeholder="Password"></input>
                    <input type="password" name="confirm-password" placeholder="Confirm Password"></input>
                </form>
                <button className="button" onClick={this.props.close}>Close</button>
                <button className="button">Sign Up</button>
            </div>
            );
        }
    }
}
