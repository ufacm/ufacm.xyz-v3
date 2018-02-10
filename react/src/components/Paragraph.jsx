import React from 'react';
import {Container, Segment, Header, Button, Divider} from 'semantic-ui-react';

export default function Paragraph({ title, content }) {
    return (
        <Segment textAlign='center' padded>
            <Container text>
                <Header textAlign='center' as='h3' style={{ fontSize: '2em' }}>{title}</Header>
                <p style={{ fontSize: '1.33em' }}>{content}</p>
                <Button as='a' size='large'>Learn More</Button>
            </Container>
        </Segment>
    );
}
