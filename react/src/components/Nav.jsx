import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="nav">
            <h3><a href="/">uf acm</a></h3>
            <p><a className="clickable" onClick={this.props.onLoginButtonClick}>Log In</a></p>
            <p><a className="clickable" onClick={this.props.onSignupButtonClick}>Sign Up</a></p>
        </div>
    }
}
export default Nav;
