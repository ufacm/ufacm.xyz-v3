import React from 'react';
import {Container, Segment, Header, Button, Divider} from 'semantic-ui-react';

export default function Paragraph({ title, content }) {
    return (
        <Segment padded>
            <Container text>
                <Header as='h3' style={{ fontSize: '2em' }}>{title}</Header>
                <p style={{ fontSize: '1.33em' }}>{content}</p>
                <Button as='a' size='large'>Read More</Button>
   </Container>
        </Segment>
    );
}