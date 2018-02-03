import React from 'react';
import Nav from './Nav';
import EventList from './EventList'

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
