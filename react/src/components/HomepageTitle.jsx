import React from 'react';
import ParticlesCanvas from './ParticlesCanvas.jsx';
import LoginForm from './LoginForm.jsx';
import SignupForm from './SignupForm.jsx';
import {Button, Modal} from 'semantic-ui-react';

class HomepageTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="homepage-title">
          <div className="title-container">
            <img src="/images/acm_white.png"></img>
            <Modal trigger={<Button inverted>Sign Up</Button>} size='mini'>
                <SignupForm />
            </Modal>
            <Modal trigger={<Button inverted>Log In</Button>} size='mini'>
                <LoginForm />
            </Modal>
          </div>
          <ParticlesCanvas />
        </div>;
    }
}
export default HomepageTitle;
