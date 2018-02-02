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

var LoginPopup = function (_React$Component) {
    _inherits(LoginPopup, _React$Component);

    function LoginPopup() {
        _classCallCheck(this, LoginPopup);

        return _possibleConstructorReturn(this, (LoginPopup.__proto__ || Object.getPrototypeOf(LoginPopup)).call(this));
    }

    _createClass(LoginPopup, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "login-popup" },
                _react2.default.createElement(
                    "form",
                    { name: "login-form" },
                    _react2.default.createElement("input", { type: "email", name: "email", placeholder: "Email" }),
                    _react2.default.createElement("input", { type: "password", name: "password", placeholder: "Password" })
                ),
                _react2.default.createElement(
                    "button",
                    { className: "close-button", onClick: this.props.close },
                    "Close"
                )
            );
        }
    }]);

    return LoginPopup;
}(_react2.default.Component);

exports.default = LoginPopup;