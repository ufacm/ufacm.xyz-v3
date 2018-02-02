'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HomepageTitle = require('./HomepageTitle');

var _HomepageTitle2 = _interopRequireDefault(_HomepageTitle);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Paragraph = require('./Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _EventList = require('./EventList');

var _EventList2 = _interopRequireDefault(_EventList);

var _PopupForm = require('./PopupForm');

var _PopupForm2 = _interopRequireDefault(_PopupForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Homepage = function (_React$Component) {
    _inherits(Homepage, _React$Component);

    function Homepage(props) {
        _classCallCheck(this, Homepage);

        var _this = _possibleConstructorReturn(this, (Homepage.__proto__ || Object.getPrototypeOf(Homepage)).call(this, props));

        _this.state = {
            showLoginPopup: false,
            showSignupPopup: false

            // bind scope to callback functions
        };_this.toggleLoginPopup = _this.toggleLoginPopup.bind(_this);
        _this.toggleSignupPopup = _this.toggleSignupPopup.bind(_this);
        _this.closePopups = _this.closePopups.bind(_this);
        return _this;
    }

    /**
     * Toggles LoginPopup between open/closed.
     */


    _createClass(Homepage, [{
        key: 'toggleLoginPopup',
        value: function toggleLoginPopup() {
            if (this.state.showLoginPopup) this.closePopups();else this.setState({
                showSignupPopup: false,
                showLoginPopup: true
            });
        }

        /**
         * Toggles SignupPopup between open/closed.
         */

    }, {
        key: 'toggleSignupPopup',
        value: function toggleSignupPopup() {
            if (this.state.showSignupPopup) this.closePopups();else this.setState({
                showLoginPopup: false,
                showSignupPopup: true
            });
        }

        /** Closes login and signup popups. */

    }, {
        key: 'closePopups',
        value: function closePopups() {
            this.setState({
                showLoginPopup: false,
                showSignupPopup: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var loginPopup = _react2.default.createElement(_PopupForm2.default, { close: this.closePopups, formType: 'login' });
            var signupPopup = _react2.default.createElement(_PopupForm2.default, { close: this.closePopups, formType: 'signup' });

            return _react2.default.createElement(
                'div',
                { className: 'homepage' },
                this.state.showLoginPopup ? loginPopup : null,
                this.state.showSignupPopup ? signupPopup : null,
                _react2.default.createElement(_Nav2.default, { onLoginButtonClick: this.toggleLoginPopup,
                    onSignupButtonClick: this.toggleSignupPopup }),
                _react2.default.createElement(_HomepageTitle2.default, { onLoginButtonClick: this.toggleLoginPopup,
                    onSignupButtonClick: this.toggleSignupPopup }),
                _react2.default.createElement('div', { className: 'divider' }),
                _react2.default.createElement(_Paragraph2.default, null),
                _react2.default.createElement('div', { className: 'divider' }),
                _react2.default.createElement(_EventList2.default, null)
            );
        }
    }]);

    return Homepage;
}(_react2.default.Component);

exports.default = Homepage;