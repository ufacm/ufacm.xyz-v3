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
    }

    render() {
        return (
            <Responsive id='homepage'>
                <Nav signedIn='true' />
                <Grid stackable>
                    <Grid.Column width={6}>
                        <Segment>
                            <Header textAlign='center' as='h3' style={{fontSize: '2em'}}>You</Header>
                            <UserInfo data={this.state} />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <EventList url='/jsons/events.json' limit='3' title='Events You Attended' />
                    </Grid.Column>
                </Grid>

            </Responsive>
        )
    }
}