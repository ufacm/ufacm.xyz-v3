import React from 'react';

class Particle {
    /**
     * @param v: velocity of particle in pixels per tenth of second
     * @param angle: angle of particle motion, between 0 and 2*PI
     * @param deltaAngle: rate of change of angle in radians per tenth of second
     * @param radius: the radius of the circle in the particle drawing
     * @param lifetime: how long before particle returns 'Dead'.
     * @param opacity: the opacity of the particle, between 0 and 1
     */
    constructor(x, y, v, angle, deltaAngle, radius, opacity, lifetime) {
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

    getColor() {
        // age between 0 and 1
        let age = 1 - (this.deathTime - Date.now())/this.lifetime;

        // polynomial for ease-in/out
        let color = -64*(Math.pow(age - 0.5, 6)) + 1;

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

    update(t2) {
        let dt = (t2 - this.t1) / 100;
        this.x += this.v * Math.cos(this.angle) * dt;
        this.y += this.v * Math.sin(this.angle) * dt;

        this.angle += this.deltaAngle * dt;
        this.t1 = t2;
    }

    draw(ctx) {
        this.update(Date.now());
        ctx.beginPath();
        ctx.fillStyle = this.getColor();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();
    }

    isDead() {
        return Date.now() > this.deathTime;
    }

}

class ParticlesCanvas extends React.Component {
    constructor() {
        super();
        this.draw = this.draw.bind(this);
        this.addNewParticle = this.addNewParticle.bind(this);
        this.particles = [];

        this.PARTICLE_CREATION_INTERVAL = 50; // number of milliseconds between particle creations
        this.MAX_VELOCITY = 2.5;
    }

    componentDidMount() {
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
    addNewParticle() {

        let x = Math.random() * this.refs.canvas.width;
        let y = Math.random() * (this.refs.canvas.height - 50) + 50;
        let v = Math.random() * this.MAX_VELOCITY;
        let angle = Math.random() * Math.PI * 2;
        let deltaAngle = Math.PI * (Math.random()*0.2 - 0.1);
        let opacity = Math.random();
        let radius = Math.random() * 3 + 1;

        this.particles.push(new Particle(x, y, v, angle, deltaAngle, radius, opacity, 2000));

        window.setTimeout(this.addNewParticle, this.PARTICLE_CREATION_INTERVAL);
    }

    draw() {
        let canvas = this.refs.canvas;
        canvas.width = this.refs.div.clientWidth;
        canvas.height = this.refs.div.clientHeight;

        this.particles.forEach((particle, index, array) => {
            if (particle.isDead()) {
                array.splice(index, 1);
            }
            else {
                particle.draw(this.ctx);
            }
        });
        window.requestAnimationFrame(this.draw);
    }

    render() {
            return <div ref="div" className="particles-canvas-container">
                <canvas ref="canvas" className="particles-canvas"></canvas>
                </div>;
    }
}

export default ParticlesCanvas;
