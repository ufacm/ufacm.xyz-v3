import React from 'react';
import AbstractForm from './AbstractForm.jsx';
import {Button, Form, Container, Message, Header, Segment} from 'semantic-ui-react';
import $ from 'jquery';

export default class LoginForm extends AbstractForm {
    constructor() {
        super({
            fields: ['name', 'email', 'message'],
            url: '/contactus',
        });

        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissMessage = this.dismissMessage.bind(this);
        this.removeErrors = this.removeErrors.bind(this);
    }

    render() {
        const error = (this.state.failure)? <Message error onDismiss={this.dismissMessage} 
                                                header='Form Failed' content={this.state.errorName} /> : '';
        const success = (this.state.success)? <Message success onDismiss={this.dismissMessage} 
                                                header='Form Completed' content='We got your message!' /> : '';                                                
        return (
            <Segment padded>
            <Container>
                <Header textAlign='center' as="h3" style={{ fontSize: '2em' }}>Contact Us</Header>
                    {success}
                    {error}
                    <Form>
                        <Form.Input onChange={this.changeFieldFactory('name')} label='Name' placeholder='Name' error={this.state.errors.name} />
                        <Form.Input onChange={this.changeFieldFactory('email')} label='Email' placeholder='Email' type='email' error={this.state.errors.email} />
                        <Form.TextArea onChange={this.changeFieldFactory('message')} label='Message' placeholder='Message' error={this.state.errors.message} />
                        <Button onClick={this.handleSubmit} type='submit'>Send</Button>
                    </Form>
            </Container>
            </Segment>
        );
    }
}
