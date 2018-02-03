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

var Nav = function (_React$Component) {
    _inherits(Nav, _React$Component);

    function Nav(props) {
        _classCallCheck(this, Nav);

        return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));
    }

    _createClass(Nav, [{
        key: "renderLink",
        value: function renderLink(name, onClick) {
            return _react2.default.createElement(
                "p",
                null,
                _react2.default.createElement(
                    "a",
                    { className: "clickable", onClick: onClick },
                    name
                )
            );
        }
    }, {
        key: "render",
        value: function render() {
            console.log(this.props);
            if (this.props.signedin) {
                return _react2.default.createElement(
                    "div",
                    { className: "nav" },
                    _react2.default.createElement(
                        "h3",
                        null,
                        _react2.default.createElement(
                            "a",
                            { href: "/" },
                            "uf acm"
                        )
                    ),
                    this.renderLink(this.props.user.name, null),
                    this.renderLink("Events", null),
                    this.renderLink("Upload Resume", null),
                    this.renderLink("Log Out", null)
                );
            }
            return _react2.default.createElement(
                "div",
                { className: "nav" },
                _react2.default.createElement(
                    "h3",
                    null,
                    _react2.default.createElement(
                        "a",
                        { href: "/" },
                        "uf acm"
                    )
                ),
                this.renderLink("Log In", this.props.onLoginButtonClick),
                this.renderLink("Sign Up", this.props.onSignupButtonClick)
            );
        }
    }]);

    return Nav;
}(_react2.default.Component);

exports.default = Nav;