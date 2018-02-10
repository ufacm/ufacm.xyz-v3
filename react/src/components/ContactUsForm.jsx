import React from 'react';
import {Button, Form, Container, Message, Header, Segment} from 'semantic-ui-react';
import $ from 'jquery';

export default class ContactUsForm extends React.Component {
    constructor() {
        super();

        this.state = {
            nameError: false,
            emailError: false,
            messageError: false,
            name: '',
            email: '',
            message: '',
            success: false,
            failure: false,
            errorName: 'There was an error',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissMessage = this.dismissMessage.bind(this);
        this.removeErrors = this.removeErrors.bind(this);
    }

    removeErrors() {
        this.setState({
            nameError: false,
            emailError: false,
            messageError: false,
            success: false,
            failure: false,
            errorName: 'There was an error',
        });
    }


    dismissMessage() {
        this.setState({success: false, failure: false});
        this.removeErrors();
    }

    handleSubmit() {
        $.ajax({
            type: 'POST',
            url: '/contactus',
            data: {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message,
            },
            success: () => {
                console.log('ContactUsForm: success');
                this.setState({success: true, failure: false});
                window.setTimeout(() => {
                    this.setState({success: false});
                }, 3000);
            },
            error: () => {
                console.log('ContactUsForm: error');
                this.setState({failure: true, success: false});
            }
        });
    }


    render() {
        const success = (this.state.success)? <Message success onDismiss={this.dismissMessage}
                                                header='Form Completed' content='We got your message' /> : '';
        const error = (this.state.failure)? <Message error onDismiss={this.dismissMessage} 
                                                header='Form Failed' content={this.state.errorName} /> : '';
        return (
            <Segment padded>
            <Container>
                <Header textAlign='center' as="h3" style={{ fontSize: '2em' }}>Contact Us</Header>
                    {success}
                    {error}
                    <Form>
                        <Form.Input onChange={(e) => this.setState({name: e.target.value})} label='Name' placeholder='Name' error={this.state.nameError} />
                        <Form.Input onChange={(e) => this.setState({email: e.target.value})} label='Email' placeholder='Email' error={this.state.emailError} />
                        <Form.TextArea onChange={(e) => this.setState({message: e.target.value})} label='Message' placeholder='Message' error={this.state.messageError} />
                        <Button onClick={this.handleSubmit} type='submit'>Submit</Button>
                    </Form>
            </Container>
            </Segment>
        );
    }
}