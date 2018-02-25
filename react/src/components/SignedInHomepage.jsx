import React from 'react';
import Nav from './Nav.jsx';
import EventList from './EventList.jsx';
import UserInfo from './UserInfo.jsx';
import {Responsive, Grid, Header, Segment} from 'semantic-ui-react';

export default class SignedInHomepage extends React.Component {
    constructor() {
        super();

        this.state = {
            name: 'James Doe',
            email: 'a-longer-email-address@ufl.edu',
            resume: 'james-doe-resume.pdf',
            formData: {
                resume: null,
            },
        }

        this.onResumeChange = this.onResumeChange.bind(this);
        this.onResumeFormSubmit = this.onResumeFormSubmit.bind(this);
        this.sendResume = this.sendResume.bind(this);
    }

    onResumeChange(e) {
        this.setState({formData: {
            resume: e.target.files[0],
        }});
        console.log(e.target.files[0]);
    }

    onResumeFormSubmit(e) {
        e.preventDefault();
        this.sendResume(this.state.formData.resume);
    }

    sendResume(file) {
        const uri = '/api/resume-upload';
        var xhr = new XMLHttpRequest();

        var formData = new FormData();
        formData.set('resume', file);
        
        let it = formData.values();
        while(console.log(it.next()));
        
        xhr.open("POST", uri, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText); // handle response.
            }
        };

        xhr.send(formData);
    }

    render() {
        return (
            <Responsive id='homepage'>
                <Grid stackable>
                    <Grid.Column width={8}>
                        <Segment>
                            <Header textAlign='center' as='h3' style={{fontSize: '2em'}}>You</Header>
                            <UserInfo onResumeChange={this.onResumeChange} onResumeFormSubmit={this.onResumeFormSubmit} data={this.state} />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <EventList url='/jsons/events.json' limit='3' title='Events You Attended' />
                    </Grid.Column>
                </Grid>

            </Responsive>
        )
    }
}