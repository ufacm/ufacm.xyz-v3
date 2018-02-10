import React from 'react';
import Nav from './Nav.jsx';
import EventList from './EventList.jsx'

export default class SignedInHomepage extends React.Component {
    constructor() {
        super();
    }

    render() {
        let user = {name: "John Doe"};
        return (
        <div className="homepage">
            <Nav signedin="true" user={user} />
            <EventList />
        </div>
        );
    }
}
