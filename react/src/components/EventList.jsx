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
          events: [],
          loadedEventsFromServer: false,
          failed: false
        };

        // bind(this) allows this.setState() to be in correct scope
        this.onfail = this.onfail.bind(this);
        this.setStateFromEvents = this.setStateFromEvents.bind(this);
        this.refresh = this.refresh.bind(this);

        this.getEventsFromServer();
    }

    refresh() {
        this.setState({failed: false, loadedEventsFromServer: false});
        this.getEventsFromServer()
    }

    getEventsFromServer() {
        let url = 'https://raw.githubusercontent.com/garyg1/garyg1.github.io/master/json/applets.json';
        $.ajax({
            url: url,
            type: "GET",
            success: this.setStateFromEvents,
            error: this.onfail
        });
    }

    setStateFromEvents(json_string) {
        let serverData = JSON.parse(json_string);
        let events = serverData.applets;
        window.setTimeout(function() {
            this.setState({
                events: events,
                loadedEventsFromServer: true,
                failed: false
            });
        }.bind(this), 500);
    }

    onfail() {
        console.log("failed");
        window.setTimeout(function() {
            this.setState({failed: true});
        }.bind(this), 500);
    }

    render() {
        var events;
        if (this.state.loadedEventsFromServer) {
            events = this.state.events.map((event) =>
                <Event key={event.name} name={event.name} description={event.description}
                    url={event.url}>
                </Event>
            );
        }
        else if (this.state.failed) {
            events = <p>Sorry, we couldn't fetch events at this time.</p>
        }
        else {
            events = <p>Fetching events...</p>
        }
        return (
            <div className="event-container">
                <h2>Events</h2>
                <button onClick={this.refresh}>Refresh</button>
                {events}
            </div>
        );
    }
}
export default EventList;
