import React from 'react';
import $ from 'jquery';
import {Button, Card, Container, Divider, Header, Segment, Responsive} from 'semantic-ui-react';
import Event from './Event.jsx';

import Globals from './Globals';

const inverted = Globals.inverted;

export default class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            limit: parseInt(props.limit)
        };

        this.fetchEventsFromServer = this.fetchEventsFromServer.bind(this);
        this.setStateFromEvents = this.setStateFromEvents.bind(this);
        this.increaseLimit = this.increaseLimit.bind(this);
        this.resetLimit = this.resetLimit.bind(this);

        this.fetchEventsFromServer();
    }

    fetchEventsFromServer() {
        let url = this.props.url;
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

    increaseLimit() {
        if (this.state.limit)
            this.setState({limit: this.state.limit + parseInt(this.props.limit) });
    }

    resetLimit() {
        if (this.state.limit)
            this.setState({limit: parseInt(this.props.limit) });
    }

    render() { console.log(this.state.limit, this.props.limit);
        let events = [];
        if (this.state.events) {
            events = this.state.events.slice(0, this.state.limit)
                .map(( event ) => ( new Event(event) ));
        }
        
        return (
            <Responsive>
                <Segment textAlign='center' clearing inverted={inverted? true : false}>
                    <Header textAlign='center' as='h3' style={{fontSize: '2em'}}>{this.props.title}</Header>
                    <Card.Group centered>
                        {events}
                    </Card.Group>
                    <Button onClick={this.increaseLimit} style={{marginTop: '10px'}}>More</Button>
                </Segment>
            </Responsive>
        );
    }
}
