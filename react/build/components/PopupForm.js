"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PopupForm = function (_React$Component) {
    _inherits(PopupForm, _React$Component);

    function PopupForm() {
        _classCallCheck(this, PopupForm);

        return _possibleConstructorReturn(this, (PopupForm.__proto__ || Object.getPrototypeOf(PopupForm)).call(this));
    }

    _createClass(PopupForm, [{
        key: "render",
        value: function render() {
            if (this.props.formType === "login") {
                return _react2.default.createElement(
                    "div",
                    { className: "popup-form" },
                    _react2.default.createElement(
                        "h2",
                        null,
                        "Log In"
                    ),
                    _react2.default.createElement(
                        "form",
                        null,
                        _react2.default.createElement("input", { type: "email", name: "email", placeholder: "Email" }),
                        _react2.default.createElement("input", { type: "password", name: "password", placeholder: "Password" })
                    ),
                    _react2.default.createElement(
                        "button",
                        { className: "button", onClick: this.props.close },
                        "Close"
                    ),
                    _react2.default.createElement(
                        "button",
                        { className: "button" },
                        "Log In"
                    )
                );
            } else if (this.props.formType === "signup") {
                return _react2.default.createElement(
                    "div",
                    { className: "popup-form" },
                    _react2.default.createElement(
                        "h2",
                        null,
                        "Sign Up"
                    ),
                    _react2.default.createElement(
                        "form",
                        null,
                        _react2.default.createElement("input", { type: "email", name: "email", placeholder: "Email" }),
                        _react2.default.createElement("input", { type: "password", name: "password", placeholder: "Password" }),
                        _react2.default.createElement("input", { type: "password", name: "confirm-password", placeholder: "Confirm Password" })
                    ),
                    _react2.default.createElement(
                        "button",
                        { className: "button", onClick: this.props.close },
                        "Close"
                    ),
                    _react2.default.createElement(
                        "button",
                        { className: "button" },
                        "Sign Up"
                    )
                );
            }
        }
    }]);

    return PopupForm;
}(_react2.default.Component);

exports.default = PopupForm;