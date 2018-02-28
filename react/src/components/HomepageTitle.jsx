import React from 'react';
import ParticlesCanvas from './ParticlesCanvas.jsx';
import LoginForm from './LoginForm.jsx';
import SignupForm from './SignupForm.jsx';
import {} from 'semantic-ui-react';

class HomepageTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="homepage-title">
          <div className="title-container">
            <img src="/images/acm_white.png"></img>
            <a href="/signup.html" className="ui button inverted">Sign Up</a>
            <a href="/login.html" className="ui button inverted">Log In</a>
          </div>
          <ParticlesCanvas />
        </div>;
    }
}
export default HomepageTitle;
