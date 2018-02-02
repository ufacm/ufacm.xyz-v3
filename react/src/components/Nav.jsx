import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="nav">
            <h3><a href="/">UF ACM</a></h3>
            <p><a onClick={this.props.onLoginButtonClick}>Log In</a></p>
            <p><a onClick={this.props.onSignupButtonClick}>Sign Up</a></p>
        </div>
    }
}
export default Nav;
