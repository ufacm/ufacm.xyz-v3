import React from 'react';
import {List, Segment} from 'semantic-ui-react';

export default function UserInfo({data}) {
    return (
        <List relaxed='very'>
            <List.Item>
                <List.Icon name='user' />
                <List.Content >{data.name}</List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='mail' />
                <List.Content >{data.email}</List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='file text' />
                <List.Content>{data.resume}</List.Content>
            </List.Item>
        </List>
    )
}