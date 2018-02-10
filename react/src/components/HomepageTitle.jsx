import React from 'react';
import ParticlesCanvas from './ParticlesCanvas.jsx';
import { Button } from 'semantic-ui-react';

class HomepageTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="homepage-title">
          <div className="title-container">
            <img src="/images/acm_white.png"></img>
            <Button inverted>Log In</Button>
            <Button inverted>Sign Up</Button>
          </div>
          <ParticlesCanvas />
        </div>;
    }
}
export default HomepageTitle;
