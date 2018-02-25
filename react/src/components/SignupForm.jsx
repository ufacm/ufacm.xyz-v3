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

    validate(data) {
        const emailRegex = /[0-9a-zA-Z.!#$%&'*+-/=?^_`{|}~]+@ufl.edu$/;

        
        if (!emailRegex.test(data.email)) {
            this.setState({
                errors: {
                    email: true
                },
                failure: true,
                errorName: '"' + data.email + '" is not a valid @ufl.edu email',
            });
            return false;
        }

        if (data.password.length < 6) {
            this.setState({
                errors: {
                    password: true
                },
                failure: true,
                errorName: 'Password must be 6 characters long.',
            });
            return false;
        }

        if (data.password !== data.confirmpassword) {
            this.setState({
                errors: {
                    confirmpassword: true
                },
                failure: true,
                errorName: 'Passwords did not match.',
            });
            return false;
        }

        return true;
    }

    render() {
        const error = (this.state.failure)? <Message error onDismiss={this.dismissMessage} 
            header='Form Failed' content={this.state.errorName} /> : '';
                                                
        const title = (this.props.notitle)? '' : <Header textAlign='center' as="h3" style={{ fontSize: '2em' }}>Create an Account</Header>;
        return (
            <Segment padded>
            <Container>
                {title}
                {error}
                <Form>
                    <Form.Input onChange={this.changeFieldFactory('email')} label='Email' placeholder='Albert@ufl.edu' type='email' error={this.state.errors.email} />
                    <Form.Input onChange={this.changeFieldFactory('password')} label='Password' placeholder='Password' type='password' error={this.state.errors.password} />
                    <Form.Input onChange={this.changeFieldFactory('confirmpassword')} label='Confirm Password' placeholder='Confirm Password' type='password' error={this.state.errors.confirmpassword} />
                </Form>
                <Container textAlign='right' style={{marginTop: '10px'}}>
                    <Button primary onClick={this.handleSubmit} type='submit'>Sign Up</Button>
                </Container>
            </Container>
            </Segment>
        );
    }
}
