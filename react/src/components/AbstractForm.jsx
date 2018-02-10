import React from 'react';
import {Button, Form, Container, Message, Header, Segment} from 'semantic-ui-react';
import $ from 'jquery';

export default class AbstractForm extends React.Component {

    /**
     * Constructs a new AbstractForm from the fields in data.fields with title in data.title and url in data.url.
     * @param {Object} data An object of the form {fields: ['Username', 'Password', 'etc'], url: '/target/post/url'}
     */
    constructor(data) {
        super();

        // initialze errors and fields from labels in data.fields
        let formFields = data.fields;
        let errors = {};
        let fields = {};

        for (let i = 0; i < formFields.length; i++) {
            errors[formFields[i]] = false;
            fields[formFields[i]] = '';
        }


        this.state = {
            errors: errors,
            fields: fields,
            failure: false,
            success: false,
            errorName: 'There was an error',
            url: data.url,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissMessage = this.dismissMessage.bind(this);
        this.removeErrors = this.removeErrors.bind(this);
        this.validate = this.validate.bind(this);
        this.clearFields = this.clearFields.bind(this);

    }

    clearFields() {
        let fields = {};
        for (let field in this.state.fields) {
            fields[field] = '';
        }

        this.setState({
            fields: fields,
        });

    }

    removeErrors() {
        let errors = {}
        for (let field in this.state.fields) {
            errors[field] = false;
        }

        this.setState({
            errors: errors,
            failure: false,
            errorName: 'There was an error',
        });
    }


    dismissMessage() {
        this.setState({failure: false, success: false});
        this.removeErrors();
    }

    handleSubmit() {
        if (this.validate(this.state.fields)) {
            this.removeErrors();
            $.ajax({
                type: 'POST',
                url: this.state.url,
                data: this.state.fields,
                success: () => {
                    console.log('Form: POST success to ' + this.state.url);
                    this.setState({success: true, failure: false});
                    this.clearFields();
                },
                error: () => {
                    console.log('Form: POST connection error to ' + this.state.url);
                    this.setState({
                        failure: true, 
                        success: false,
                        errorName: 'Could not connect to server.'
                    });
                }
            });
        }
    }

    /**
     * Returns whether the form data is valid. Default behavior is no validation (must be overriden).
     * @param {Object} data 
     */
    validate(data) {
        return true;
    }
    
    changeFieldFactory(field) {
        return (e) => {
            let f = field;
            this.changeField(f, e.target.value);
        };
    }

    changeField(field, newValue) {
        let fields = this.state.fields;
        fields[field] = newValue;
    }
}
