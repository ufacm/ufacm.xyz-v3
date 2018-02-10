import React from 'react';
import AbstractForm from './AbstractForm.jsx';
import {Button, Form, Container, Message, Header, Segment} from 'semantic-ui-react';
import $ from 'jquery';

export default class LoginForm extends AbstractForm {
    constructor() {
        super({
            fields: ['email', 'password', 'confirmpassword'],
            url: '/signup',
        });

        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissMessage = this.dismissMessage.bind(this);
        this.removeErrors = this.removeErrors.bind(this);
    }

    render() {
        const error = (this.state.failure)? <Message error onDismiss={this.dismissMessage} 
                                                header='Form Failed' content={this.state.errorName} /> : '';
        return (
            <Segment padded>
            <Container>
                <Header textAlign='center' as="h3" style={{ fontSize: '2em' }}>Sign Up</Header>
                    {error}
                    <Form>
                        <Form.Input onChange={this.changeFieldFactory('email')} label='Email' placeholder='UFL Email' type='email' error={this.state.errors.email} />
                        <Form.Input onChange={this.changeFieldFactory('password')} label='Password' placeholder='Password' type='password' error={this.state.errors.password} />
                        <Form.Input onChange={this.changeFieldFactory('confirmpassword')} label='Confirm Password' placeholder='Confirm Password' type='password' error={this.state.errors.confirmpassword} />
                        <Button onClick={this.handleSubmit} type='submit'>Sign Up</Button>
                    </Form>
            </Container>
            </Segment>
        );
    }
}