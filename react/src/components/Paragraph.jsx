import React from 'react';
import {Container, Segment, Header, Button, Divider} from 'semantic-ui-react';

import Globals from './Globals';
const inverted = Globals.inverted;

export default function Paragraph({ title, content }) {
    return (
        <Segment textAlign='center' inverted={inverted? true : false} padded>
            <Container text>
                <Header inverted={inverted? true : false} textAlign='center' as='h3' style={{ fontSize: '2em' }}>{title}</Header>
                <p style={{ fontSize: '1.33em' }}>{content}</p>
            </Container>
        </Segment>
    );
}
