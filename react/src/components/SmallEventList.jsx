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
                <h3>{this.props.data.name}</h3>
                <p>{this.props.data.description}</p>
                <p><a href={this.props.data.url}>{this.props.data.url}</a></p>
            </div>
        )
    }
}

class SmallEventList extends React.Component {
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
      var page_id = 1776675752608125;
      var access_token = `EAACEdEose0cBABpMWugbY8DdEZBV8XHq6VSn5UVcxHokXLXzfLQRRoFDq0cPwO06pLMI4wYsZBUfpZCfzNK3MPDNo2ZA2CimKFHPJPyHVOG9p7L2jrG2WZAqJ80AAloFXnIRHbqlAZAWkYS6A6DITmc4yXNGSqPw2hjbBoCV9AMlvE8MbOgFZCgOT5DibVYRnyCI3osLl8S8QZDZD`;
      return fetch(`https://graph.facebook.com/v2.3/${page_id}?access_token=${access_token}&fields=events`)
      .then( res => res.json())
      .then( body =>{
        //TODO::needs to be parsed and put into a good format
        this.setStateFromEvents(body);
      })
        // let url = 'https://raw.githubusercontent.com/garyg1/garyg1.github.io/master/json/applets.json';
        // $.ajax({
        //     url: url,
        //     type: "GET",
        //     success: this.setStateFromEvents,
        //     error: this.onfail
        // });
    }

    setStateFromEvents(json_string) {
        let serverData = JSON.parse(json_string);
        let events = serverData.applets;

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
            events = this.state.events.map((event) =>
                <Event key={event.name} data={event}>
                </Event>
            );
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
            <div className="events-container white">
                <h2>Events</h2>
                <button onClick={this.refresh}>{refreshText}</button>
                <div className="events">{events}</div>
            </div>
        );
    }
}
export default SmallEventList;
