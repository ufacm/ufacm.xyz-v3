import React from 'react';
import {Button, Form, Header, Input, List, Modal, Segment} from 'semantic-ui-react';

export default function UserInfo(props) {
    return (
        <div>
        <List relaxed='very'>
            <List.Item>
                <List.Icon name='user' />
                <List.Content >{props.data.name}</List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='mail' />
                <List.Content >{props.data.email}</List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='file text' />
                <List.Content>{props.data.resume}</List.Content>
            </List.Item>
        </List>
        <br />
        <Modal size="tiny" trigger={<Button content="Upload Resume" icon="file text" labelPosition="left" />}>
        <Segment padded>
            <Header>Upload Resume</Header>
            <Form onSubmit={props.onResumeFormSubmit} id="resume-form">
                <Form.Input onChange={props.onResumeChange} type="file" name="resume" icon="file text" iconPosition="left" fluid />
                <Button primary>Upload</Button>
            </Form>
        </Segment>
        </Modal>
        <Modal size="tiny" basic trigger={<Button content="Remove Resume" icon="trash" labelPosition="left" />}>
            <Modal.Content>Do you really want to remove your resume?</Modal.Content>
            <Modal.Actions>
                <Button basic inverted content="No" icon="left arrow" />
                <Button negative content="Yes, remove it" icon="trash" />
            </Modal.Actions>
        </Modal>
        </div>
    )
}