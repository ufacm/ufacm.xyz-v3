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

var PopupForm = function (_React$Component) {
    _inherits(PopupForm, _React$Component);

    function PopupForm(props) {
        _classCallCheck(this, PopupForm);

        var _this = _possibleConstructorReturn(this, (PopupForm.__proto__ || Object.getPrototypeOf(PopupForm)).call(this, props));

        _this.submitForm = _this.submitForm.bind(_this);
        return _this;
    }

    _createClass(PopupForm, [{
        key: 'submitForm',
        value: function submitForm() {
            var form = (0, _jquery2.default)('#popup-form > form');
            var formData = form.serialize();

            _jquery2.default.post(this.props.formURL, function (data) {
                form.trigger('reset');
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.formType === "login") {
                return _react2.default.createElement(
                    'div',
                    { id: 'popup-form', className: 'popup-form' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Log In'
                    ),
                    _react2.default.createElement(
                        'form',
                        null,
                        _react2.default.createElement('input', { type: 'email', name: 'email', placeholder: 'Email' }),
                        _react2.default.createElement('input', { type: 'password', name: 'password', placeholder: 'Password' })
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'clickable button', onClick: this.props.close },
                        'Close'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'clickable button', onClick: this.submitForm },
                        'Log In'
                    )
                );
            } else if (this.props.formType === "signup") {
                return _react2.default.createElement(
                    'div',
                    { id: 'popup-form', className: 'popup-form' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Sign Up'
                    ),
                    _react2.default.createElement(
                        'form',
                        null,
                        _react2.default.createElement('input', { type: 'email', name: 'email', placeholder: 'Email' }),
                        _react2.default.createElement('input', { type: 'password', name: 'password', placeholder: 'Password' }),
                        _react2.default.createElement('input', { type: 'password', name: 'confirm-password', placeholder: 'Confirm Password' })
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'clickable button', onClick: this.props.close },
                        'Close'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'clickable button', onClick: this.submitForm },
                        'Sign Up'
                    )
                );
            }
        }
    }]);

    return PopupForm;
}(_react2.default.Component);

exports.default = PopupForm;