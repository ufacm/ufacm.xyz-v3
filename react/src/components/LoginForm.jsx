import React from 'react';
import AbstractForm from './AbstractForm.jsx';
import {Button, Form, Container, Message, Header, Segment} from 'semantic-ui-react';
import $ from 'jquery';

export default class LoginForm extends AbstractForm {
    constructor() {
        super({
            fields: ['email', 'password'],
            url: '/login',
        });

        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissMessage = this.dismissMessage.bind(this);
        this.removeErrors = this.removeErrors.bind(this);
    }

    render() {
        const error = (this.state.failure)? <Message error onDismiss={this.dismissMessage} 
                                                header='Form Failed' content={this.state.errorName} /> : '';
        const title = (this.props.notitle)? '' : <Header textAlign='center' as="h3" style={{ fontSize: '2em' }}>Log In</Header>;

        return (
            <Segment padded>
            <Container>
                {title}
                {error}
                <Form>
                    <Form.Input onChange={this.changeFieldFactory('email')} label='Email' placeholder='Albert@ufl.edu' error={this.state.errors.email} />
                    <Form.Input onChange={this.changeFieldFactory('password')} label='Password' placeholder='Password' type='password' error={this.state.errors.password} />
                </Form>
                <Container textAlign='right'>
                    <Button primary onClick={this.handleSubmit} type='submit'>Log In</Button>
                </Container>
            </Container>
            </Segment>
        );
    }
}
