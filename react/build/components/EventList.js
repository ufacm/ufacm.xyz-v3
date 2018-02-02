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
            events: []
        };

        _this2.getEventsFromServer();
        return _this2;
    }

    _createClass(EventList, [{
        key: 'getEventsFromServer',
        value: function getEventsFromServer() {
            var url = 'https://raw.githubusercontent.com/garyg1/garyg1.github.io/master/json/applets.json';
            _jquery2.default.get(url, this.setStateFromEvents.bind(this));
            // bind(this) allows this.setState() to be in correct scope
        }
    }, {
        key: 'setStateFromEvents',
        value: function setStateFromEvents(json_string) {
            var serverData = JSON.parse(json_string);
            var events = serverData.applets;
            this.setState({ events: events });
        }
    }, {
        key: 'render',
        value: function render() {
            var events = this.state.events.map(function (event) {
                return _react2.default.createElement(Event, { key: event.name, name: event.name, description: event.description,
                    url: event.url });
            });
            return _react2.default.createElement(
                'div',
                { className: 'event-container' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Events'
                ),
                events
            );
        }
    }]);

    return EventList;
}(_react2.default.Component);

exports.default = EventList;