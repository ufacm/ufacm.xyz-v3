import React from 'react';

class HomepageTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div class="homepage-title">
          <div>
            <h1>UF ACM</h1>
            <a class="button" href="/login">Log In</a>
            <a class="button" href="/signup">Sign Up</a>
          </div>
        </div>;
    }
}
export default HomepageTitle;
