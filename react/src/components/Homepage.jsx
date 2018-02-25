import React from 'react';
import HomepageTitle from './HomepageTitle.jsx';
import EventList from './EventList.jsx';
import Paragraph from './Paragraph.jsx';
import ContactUsForm from './ContactUsForm.jsx';
import Nav from './Nav.jsx';
import GoogleMap from './GoogleMap.jsx';


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
                <HomepageTitle />
                <GoogleMap title="Where are we?" />
                <EventList title="Upcoming Events" url="/jsons/events.json" limit='4' />
            </Responsive>
        );
    }
}

function ParallaxDivider() {
    return <Segment style={{backgroundColor: 'rgba(0, 0, 0, 0)', height: '250px'}} />
}