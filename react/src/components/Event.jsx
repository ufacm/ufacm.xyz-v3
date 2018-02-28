import React from 'react';
import {Card, Icon, Button} from 'semantic-ui-react';

function Event({ name, description, date, location }, index, action, auth) {
    const signInButton = auth? <Button content={action || "Sign In"} labelPosition="left" icon="user" /> : '';
    return (
        <Card key={index}>
            <Card.Content>
            <Card.Header>
                {name}
            </Card.Header>
            <Card.Description textAlign="left">
                {description}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='calendar' />
                {date}
            </Card.Content>
            <Card.Content extra>
                <Icon name='pin' />
                {location}
            </Card.Content>
            <Card.Content style={{flexGrow: 0}}>
                {/* FlexGrow: 0 -- Don't make button row taller than it has to be */}
                {signInButton}
                <Button content="More" labelPosition="left" icon="arrow right" />
            </Card.Content>
        </Card>
    );
}

export default Event;
