import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    renderLink(name, onClick) {
        return <p><a className="clickable" onClick={onClick}>{name}</a></p>;
    }

    render() {
        console.log(this.props);
        if (this.props.signedin) {
            return <div className="nav">
                <h3><a href="/">uf acm</a></h3>
                {this.renderLink(this.props.user.name, null)}
                {this.renderLink("Events", null)}
                {this.renderLink("Upload Resume", null)}
                {this.renderLink("Log Out", null)}
            </div>
        }
        return <div className="nav">
            <h3><a href="/">uf acm</a></h3>
            {this.renderLink("Log In", this.props.onLoginButtonClick)}
            {this.renderLink("Sign Up", this.props.onSignupButtonClick)}
        </div>
    }
}
export default Nav;
