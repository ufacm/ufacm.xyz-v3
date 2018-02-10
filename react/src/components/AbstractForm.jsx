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
    }

    removeErrors() {

        let errors = {}
        let fields = {}
        for (let field in this.state.fields) {
            errors[field] = false;
            fields[field] = '';
        }

        this.setState({
            errors: errors,
            fields: fields,
            failure: false,
            errorName: 'There was an error',
        });
    }


    dismissMessage() {
        this.setState({failure: false, success: false});
        this.removeErrors();
    }

    handleSubmit() {
        $.ajax({
            type: 'POST',
            url: this.state.url,
            data: this.state.fields,
            success: () => {
                console.log('Form: success');
                this.setState({success: true, failure: false});
            },
            error: () => {
                console.log('Form: error');
                this.setState({failure: true, success: false});
            }
        });
    }

    /**
     * Returns whether the form data is valid. Default behavior is no validation (must be overloaded).
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
