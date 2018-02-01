import React from 'react';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div class="nav">
            <h3>UF ACM</h3>
            <p><a href="/login">Log In</a></p>
            <p><a href="/signup">Sign Up</a></p>
        </div>
    }
}
export default Nav;
