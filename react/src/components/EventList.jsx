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
            limit: parseInt(props.limit) || 8,
            err: false,
        };

        this.fetchEventsFromServer = this.fetchEventsFromServer.bind(this);
        this.setStateFromEvents = this.setStateFromEvents.bind(this);
        this.increaseLimit = this.increaseLimit.bind(this);
        this.resetLimit = this.resetLimit.bind(this);
        this.onfail = this.onfail.bind(this);

        this.fetchEventsFromServer();
    }

    fetchEventsFromServer() {
        let url = this.props.url;
        $.ajax({
            url: url,
            type: 'GET',
            success: this.setStateFromEvents,
            failure: this.onfail,
        });
        console.log('EventList: Getting events');
    }

    onfail(err) {
        this.setState({
            err: true,
        });

        console.log(err);
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

    render() {
        let events = [];
        if (this.state.events) {
            if (this.state.limit) {
                events = this.state.events.slice(0, this.state.limit)
                .map(( event, index ) => ( new Event(event, index) ));
            } else {
                events = this.state.events.slice()
                .map(( event, index ) => ( new Event(event, index) ));
            }
        }

        let err = '';
        if (this.state.err) {
            err = <Header>Failed to connect to server.</Header>;
        }
        
        return (
            <Responsive>
                <Container fluid textAlign="center" >
                {/* <Segment textAlign='center' clearing inverted={inverted? true : false}> */}
                    <Header textAlign='center' as='h3' style={{fontSize: '2em'}}>{this.props.title}</Header>
                    {err}
                    <Card.Group centered>
                        {events}
                    </Card.Group>
                    <Button basic onClick={this.increaseLimit} style={{marginTop: '10px'}} icon="chevron down" />
                {/* </Segment> */}
                </Container>
            </Responsive>
        );
    }
}
