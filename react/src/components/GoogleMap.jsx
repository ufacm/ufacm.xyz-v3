import React from 'react';
import {Responsive, Segment, Container,  Header} from 'semantic-ui-react';



export default function GoogleMap(props) {
    return (
        <Responsive>
          <Container textAlign="center">
          {/* <Segment textAlign='center'> */}
            <Header textAlign='center' as='h3' style={{fontSize: '2em'}}>{props.title}</Header>
            <iframe frameBorder="0" style={{width: '100%', height: '100%', maxWidth: '600px', maxHeight: '600px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d866.8704288329208!2d-82.34539252659759!3d29.64779286121216!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4156837deaad6398!2sThe+Fishbowl+University+of+Florida+ACM+Office!5e0!3m2!1sen!2sus!4v1457289106346"></iframe>
          {/* </Segment> */}
          </Container>
        </Responsive>
    )
}