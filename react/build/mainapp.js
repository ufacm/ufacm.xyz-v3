'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _SignedInHomepage = require('./components/SignedInHomepage');

var _SignedInHomepage2 = _interopRequireDefault(_SignedInHomepage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_SignedInHomepage2.default, null), document.getElementById('root'));