import React from 'react';
import {Card, Icon} from 'semantic-ui-react';

function Event({ name, description, date, location }) {
    return (
        <Card centered>
            <Card.Content>
            <Card.Header>
                {name}
            </Card.Header>
            <Card.Description>
                {description}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='calendar' />
                {date}
            </a>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='pin' />
                {location}
            </a>
            </Card.Content>
        </Card>
    );
}

export default Event;