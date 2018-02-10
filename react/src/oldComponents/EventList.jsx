import React from 'react';
import $ from 'jquery';

class Event extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // TODO: this UI design is bad for mobile -- fix!
        return (
            <div className='event-large white'>
                <div className='event-large-header'>
                    <div>
                        <h3>{this.props.event.name}</h3>
                    </div>
                    <div>
                        <p>{this.props.event.date}</p>
                    </div>
                    <div>
                        <button className="button clickable">Sign In</button>
                    </div>
                </div>
                <div className='event-large-body'>
                    <img src={this.props.event.image_url} />
                    <div className='event-large-description'>
                        <p>{this.props.event.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default class EventList extends React.Component {
    constructor() {
        super();

        this.state = {
          events: [],
          loadedEventsFromServer: false,
          waitingForServer: true,
          failed: false
        };

        // bind(this) allows this.setState() to be in correct scope
        this.onfail = this.onfail.bind(this);
        this.setStateFromEvents = this.setStateFromEvents.bind(this);
        this.refresh = this.refresh.bind(this);

        this.getEventsFromServer();
    }

    refresh() {
        this.setState({failed: false, waitingForServer: true});
        this.getEventsFromServer()
    }

    getEventsFromServer() {
        let url = '/jsons/events.json';
        $.ajax({
            url: url,
            type: "GET",
            success: this.setStateFromEvents,
            error: this.onfail
        });
    }

    setStateFromEvents(json_string) {
        console.log(json_string);
        let serverData = json_string;
        let events = serverData.events;

        window.setTimeout(function() {
            this.setState({
                events: events,
                loadedEventsFromServer: true,
                waitingForServer: false,
                failed: false
            });
        }.bind(this), 0);
    }

    onfail() {
        console.log("failed");
        window.setTimeout(function() {
            this.setState({failed: true, waitingForServer: false});
        }.bind(this), 500);
    }

    render() {
        var events;
        if (this.state.loadedEventsFromServer) {
            events = this.state.events.map((event) => <Event key={event.name} event={event} />);
        }
        else if (this.state.failed) {
            events = <p>Sorry, we couldn't fetch events at this time.</p>
        }
        else {
            events = <p>Fetching events...</p>
        }

        var refreshText;
        if (this.state.waitingForServer) {
            refreshText = "Loading";
        }
        else {
            refreshText = "Refresh";
        }
        return (
            <div className="events-container">
                <h2>Events</h2>
                <button className="clickable button" onClick={this.refresh}>{refreshText}</button>
                <div className="events">{events}</div>
            </div>
        );
    }
}
