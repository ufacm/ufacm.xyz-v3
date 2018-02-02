'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Event = function (_React$Component) {
    _inherits(Event, _React$Component);

    function Event(props) {
        _classCallCheck(this, Event);

        var _this = _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this, props));

        _this.props = props;
        return _this;
    }

    _createClass(Event, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'event' },
                _react2.default.createElement(
                    'h3',
                    null,
                    this.props.name
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    this.props.description
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: this.props.url },
                        this.props.url
                    )
                )
            );
        }
    }]);

    return Event;
}(_react2.default.Component);

var EventList = function (_React$Component2) {
    _inherits(EventList, _React$Component2);

    function EventList() {
        _classCallCheck(this, EventList);

        var _this2 = _possibleConstructorReturn(this, (EventList.__proto__ || Object.getPrototypeOf(EventList)).call(this));

        _this2.state = {
            events: [],
            loadedEventsFromServer: false,
            waitingForServer: true,
            failed: false
        };

        // bind(this) allows this.setState() to be in correct scope
        _this2.onfail = _this2.onfail.bind(_this2);
        _this2.setStateFromEvents = _this2.setStateFromEvents.bind(_this2);
        _this2.refresh = _this2.refresh.bind(_this2);

        _this2.getEventsFromServer();
        return _this2;
    }

    _createClass(EventList, [{
        key: 'refresh',
        value: function refresh() {
            this.setState({ failed: false, waitingForServer: true });
            this.getEventsFromServer();
        }
    }, {
        key: 'getEventsFromServer',
        value: function getEventsFromServer() {
            var url = 'https://raw.githubusercontent.com/garyg1/garyg1.github.io/master/json/applets.json';
            _jquery2.default.ajax({
                url: url,
                type: "GET",
                success: this.setStateFromEvents,
                error: this.onfail
            });
        }
    }, {
        key: 'setStateFromEvents',
        value: function setStateFromEvents(json_string) {
            var serverData = JSON.parse(json_string);
            var events = serverData.applets;

            window.setTimeout(function () {
                this.setState({
                    events: events,
                    loadedEventsFromServer: true,
                    waitingForServer: false,
                    failed: false
                });
            }.bind(this), 0);
        }
    }, {
        key: 'onfail',
        value: function onfail() {
            console.log("failed");
            window.setTimeout(function () {
                this.setState({ failed: true, waitingForServer: false });
            }.bind(this), 500);
        }
    }, {
        key: 'render',
        value: function render() {
            var events;
            if (this.state.loadedEventsFromServer) {
                events = this.state.events.map(function (event) {
                    return _react2.default.createElement(Event, { key: event.name, name: event.name, description: event.description,
                        url: event.url });
                });
            } else if (this.state.failed) {
                events = _react2.default.createElement(
                    'p',
                    null,
                    'Sorry, we couldn\'t fetch events at this time.'
                );
            } else {
                events = _react2.default.createElement(
                    'p',
                    null,
                    'Fetching events...'
                );
            }

            var refreshText;
            if (this.state.waitingForServer) {
                refreshText = "Loading";
            } else {
                refreshText = "Refresh";
            }
            return _react2.default.createElement(
                'div',
                { className: 'events-container' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Events'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.refresh },
                    refreshText
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'events' },
                    events
                )
            );
        }
    }]);

    return EventList;
}(_react2.default.Component);

exports.default = EventList;