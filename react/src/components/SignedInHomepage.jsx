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
        }
        this.removeResume = this.removeResume.bind(this);
        this.onResumeFormSubmit = this.onResumeFormSubmit.bind(this);
        this.sendResume = this.sendResume.bind(this);
    }

    removeResume() {
        return new Promise((resolve, reject) => {
            // $.ajax('/api/remove-resume')
            this.setState({resume: ''})
            setTimeout(() => {
                resolve();
            }, 1000);
        });
    }

    onResumeFormSubmit(file) {
        return new Promise((resolve, reject) => {
            this.sendResume(file, resolve, reject);
        });
    }

    sendResume(file, resolve, reject) {
        const uri = '/api/resume-upload';
        var xhr = new XMLHttpRequest();

        var formData = new FormData();
        formData.set('resume', file);
        
        xhr.open("POST", uri, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                this.setState({resume: file.name});
                resolve();
            } else if (xhr.readyState == 4) { // if DONE and some other status code
                reject();
            }
        };

        xhr.send(formData);
    }

    render() {
        return (
            <Responsive id='homepage'>
                <Grid stackable>
                    <Grid.Column width={6}>
                            <Header textAlign='center' as='h3' style={{fontSize: '2em'}}>You</Header>
                            <UserInfo onResumeRemove={this.removeResume} onResumeFormSubmit={this.onResumeFormSubmit} data={this.state} />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <EventList url='/jsons/events.json' limit='3' title='Events You Attended' />
                    </Grid.Column>
                </Grid>

            </Responsive>
        )
    }
}