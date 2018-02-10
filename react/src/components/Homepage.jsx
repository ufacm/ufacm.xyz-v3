import React from 'react';
import PropTypes from 'prop-types';
import HomepageTitle from './HomepageTitle.jsx';
import EventList from './EventList.jsx';
import Paragraph from './Paragraph.jsx';
import ContactUsForm from './ContactUsForm.jsx';
import Nav from './Nav.jsx';


import {Responsive, Segment} from 'semantic-ui-react';

export default class Homepage extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.hideFixedMenu = () => this.setState({ fixed: false });
        this.showFixedMenu = () => this.setState({ fixed: true });
    }

    render() {
        const { children } = this.props;
        const { fixed } = this.state;

        return (
            <Responsive>
                <Nav />
                <HomepageTitle />
                <Paragraph content="A group that does things" title="UF ACM is a group" />
                <EventList />
                <ContactUsForm />
            </Responsive>
        );
    }
}