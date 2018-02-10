import React from 'react';
import $ from 'jquery';
import {Button, Card, Divider, Header, Segment} from 'semantic-ui-react';
import Event from './Event.jsx';

export default class EventList extends React.Component {
    constructor() {
        super();
        this.state = {
            events: []
        }

        this.fetchEventsFromServer = this.fetchEventsFromServer.bind(this);
        this.setStateFromEvents = this.setStateFromEvents.bind(this);

        this.fetchEventsFromServer();
    }

    fetchEventsFromServer() {
        let url = '/jsons/events.json';
        $.ajax({
            url: url,
            type: 'GET',
            success: this.setStateFromEvents,
            error: this.onfail
        });
        console.log('EventList: Getting events');
    }

    setStateFromEvents(data) {
        this.setState({events: data.events});
    }

    render() {
        let events = [];
        if (this.state.events) {
            events = this.state.events.map(( event ) => ( new Event(event) ));
        }
        
        return (
            <Segment padded inverted>
                <Header textAlign='center' as='h2' style={{ fontSize: '2em' }}>Upcoming Events</Header>
                <Card.Group>
                    {events}
                </Card.Group>
            </Segment>
        );
    }
}
