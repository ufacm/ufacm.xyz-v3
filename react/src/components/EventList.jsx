import React from 'react';
import $ from 'jquery';

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className='event'>
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>
                <p><a href={this.props.url}>{this.props.url}</a></p>
            </div>
        )
    }
}

class EventList extends React.Component {
    constructor() {
        super();
        this.state = {
          events: []
        };

        this.getEventsFromServer();
    }

    getEventsFromServer() {
        let url = 'https://raw.githubusercontent.com/garyg1/garyg1.github.io/master/json/applets.json';
        $.get(url, this.setStateFromEvents.bind(this));
        // bind(this) allows this.setState() to be in correct scope
    }

    setStateFromEvents(json_string) {
        let serverData = JSON.parse(json_string);
        let events = serverData.applets;
        this.setState({events: events});
    }

    render() {
        const events = this.state.events.map((event) =>
            <Event key={event.name} name={event.name} description={event.description}
                url={event.url}>
            </Event>
        );
        return (
            <div className="event-container">
                <h2>Events</h2>
                {events}
            </div>
        );
    }
}
export default EventList;
