import React from 'react';
import HomepageTitle from './HomepageTitle.jsx';
import Nav from './Nav.jsx';
import Paragraph from './Paragraph.jsx';
import SmallEventList from './SmallEventList.jsx';
import PopupForm from './PopupForm.jsx';


class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showLoginPopup: false,
            showSignupPopup: false
        }

        // bind scope to callback functions
        this.toggleLoginPopup = this.toggleLoginPopup.bind(this);
        this.toggleSignupPopup = this.toggleSignupPopup.bind(this);
        this.closePopups = this.closePopups.bind(this);
    }

    /**
     * Toggles LoginPopup between open/closed.
     */
    toggleLoginPopup() {
        if (this.state.showLoginPopup)
            this.closePopups();

        else
            this.setState({
                showSignupPopup: false,
                showLoginPopup: true
            });
    }

    /**
     * Toggles SignupPopup between open/closed.
     */
    toggleSignupPopup() {
        if (this.state.showSignupPopup)
            this.closePopups();

        else
            this.setState({
                showLoginPopup: false,
                showSignupPopup: true
            });
    }

    /** Closes login and signup popups. */
    closePopups() {
        this.setState({
            showLoginPopup: false,
            showSignupPopup: false
        });
    }

    render() {
        let loginPopup = <PopupForm close={this.closePopups}
                                    formType="login"
                                    formURL="/login" />;
        let signupPopup = <PopupForm close={this.closePopups}
                                    formType="signup"
                                    formURL="/signup" />;

        return <div className="homepage">
            {this.state.showLoginPopup? loginPopup : null}
            {this.state.showSignupPopup? signupPopup : null}
            <Nav onLoginButtonClick={this.toggleLoginPopup}
                onSignupButtonClick={this.toggleSignupPopup}/>
            <HomepageTitle onLoginButtonClick={this.toggleLoginPopup}
                        onSignupButtonClick={this.toggleSignupPopup}/>
            <div className="divider"></div>
            <Paragraph />
            <div className="divider"></div>
            <SmallEventList />
        </div>;
    }
}
export default Homepage;
