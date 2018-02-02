'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _PopupForm = require('./PopupForm');

var _PopupForm2 = _interopRequireDefault(_PopupForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Particle = function () {
    /**
     * @param v: velocity of particle in pixels per tenth of second
     * @param angle: angle of particle motion, between 0 and 2*PI
     * @param deltaAngle: rate of change of angle in radians per tenth of second
     * @param radius: the radius of the circle in the particle drawing
     * @param lifetime: how long before particle returns 'Dead'.
     * @param opacity: the opacity of the particle, between 0 and 1
     */
    function Particle(x, y, v, angle, deltaAngle, radius, opacity, lifetime) {
        _classCallCheck(this, Particle);

        this.x = x;
        this.y = y;
        this.v = v;
        this.angle = angle;
        this.deltaAngle = deltaAngle;
        this.radius = radius;
        this.lifetime = lifetime;
        this.opacity = opacity;

        this.deathTime = Date.now() + lifetime;
        this.t1 = Date.now();
    }

    _createClass(Particle, [{
        key: 'getColor',
        value: function getColor() {
            // age between 0 and 1
            var age = 1 - (this.deathTime - Date.now()) / this.lifetime;

            // polynomial for ease-in/out
            var color = -64 * Math.pow(age - 0.5, 6) + 1;

            // don't draw near edges
            if (this.y < 100) {
                color *= this.y / 100;
            }

            // max opacity is 0.7
            color *= 0.7;

            // apply user-selected opacity
            color *= this.opacity;

            // return css color string (what ctx.fillStyle expects)
            return 'rgba(255, 255, 255, ' + color + ')';
        }
    }, {
        key: 'update',
        value: function update(t2) {
            var dt = (t2 - this.t1) / 100;
            this.x += this.v * Math.cos(this.angle) * dt;
            this.y += this.v * Math.sin(this.angle) * dt;

            this.angle += this.deltaAngle * dt;
            this.t1 = t2;
        }
    }, {
        key: 'draw',
        value: function draw(ctx) {
            this.update(Date.now());
            ctx.beginPath();
            ctx.fillStyle = this.getColor();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            ctx.fill();
        }
    }, {
        key: 'isDead',
        value: function isDead() {
            return Date.now() > this.deathTime;
        }
    }]);

    return Particle;
}();

var ParticlesCanvas = function (_React$Component) {
    _inherits(ParticlesCanvas, _React$Component);

    function ParticlesCanvas() {
        _classCallCheck(this, ParticlesCanvas);

        var _this = _possibleConstructorReturn(this, (ParticlesCanvas.__proto__ || Object.getPrototypeOf(ParticlesCanvas)).call(this));

        _this.draw = _this.draw.bind(_this);
        _this.addNewParticle = _this.addNewParticle.bind(_this);
        _this.particles = [];
        return _this;
    }

    _createClass(ParticlesCanvas, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.refs.canvas.width = this.refs.div.clientWidth;
            this.refs.canvas.height = this.refs.div.clientHeight / 2;
            this.ctx = this.refs.canvas.getContext('2d');
            this.draw();
            this.addNewParticle();
        }

        /**
         * Randomly generates a new particle with reasonable params,
         * pushes it to this.particles. Then schedules another call of
         * addNewParticle() 50ms later.
         */

    }, {
        key: 'addNewParticle',
        value: function addNewParticle() {

            var x = Math.random() * this.refs.canvas.width;
            var y = Math.random() * (this.refs.canvas.height - 50) + 50;
            var v = Math.random() * 3;
            var angle = Math.random() * Math.PI * 2;
            var deltaAngle = Math.PI * (Math.random() * 0.2 - 0.1);
            var opacity = Math.random();
            var radius = Math.random() * 3 + 1;

            this.particles.push(new Particle(x, y, v, angle, deltaAngle, radius, opacity, 2000));

            window.setTimeout(this.addNewParticle, 50);
        }
    }, {
        key: 'draw',
        value: function draw() {
            var _this2 = this;

            var canvas = this.refs.canvas;
            canvas.width = this.refs.div.clientWidth;
            canvas.height = this.refs.div.clientHeight;

            this.particles.forEach(function (particle, index, array) {
                if (particle.isDead()) {
                    array.splice(index, 1);
                } else {
                    particle.draw(_this2.ctx);
                }
            });
            window.requestAnimationFrame(this.draw);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { ref: 'div', className: 'particles-canvas-container' },
                _react2.default.createElement('canvas', { ref: 'canvas', className: 'particles-canvas' })
            );
        }
    }]);

    return ParticlesCanvas;
}(_react2.default.Component);

var HomepageTitle = function (_React$Component2) {
    _inherits(HomepageTitle, _React$Component2);

    function HomepageTitle(props) {
        _classCallCheck(this, HomepageTitle);

        return _possibleConstructorReturn(this, (HomepageTitle.__proto__ || Object.getPrototypeOf(HomepageTitle)).call(this, props));
    }

    _createClass(HomepageTitle, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'homepage-title' },
                _react2.default.createElement(
                    'div',
                    { className: 'title-container' },
                    _react2.default.createElement('img', { src: '/images/acm_white.png' }),
                    _react2.default.createElement(
                        'button',
                        { className: 'clickable button', onClick: this.props.onLoginButtonClick },
                        'Log In'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'clickable button', onClick: this.props.onSignupButtonClick },
                        'Sign Up'
                    )
                ),
                _react2.default.createElement(ParticlesCanvas, null)
            );
        }
    }]);

    return HomepageTitle;
}(_react2.default.Component);

exports.default = HomepageTitle;