import React from 'react';
import HomepageTitle from './HomepageTitle';
import Nav from './Nav';
import Paragraph from './Paragraph';
import EventContainer from './EventContainer'


class Homepage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div class="homepage">
            <Nav />
            <HomepageTitle />
            <div class="divider"></div>
            <Paragraph />
            <div class="divider"></div>
            <EventContainer />
        </div>;
    }
}
export default Homepage;
