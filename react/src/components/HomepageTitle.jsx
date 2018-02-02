import React from 'react';
import PopupForm from './PopupForm';

class HomepageTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="homepage-title">
          <div>
            <h1>UF ACM</h1>
            <button className="button" onClick={this.props.onLoginButtonClick}>Log In</button>
            <button className="button" onClick={this.props.onSignupButtonClick}>Sign Up</button>
          </div>
        </div>;
    }
}
export default HomepageTitle;
