import React from 'react';
import {Menu, Segment} from 'semantic-ui-react';


export default class Nav extends React.Component {
    constructor() {
        super();
        
        this.state = {active: 'Home'};
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.setState({active: e.target.id});
    }

    render() {
        const active = this.state.active;
        if (this.props.signedIn) {
            return (
                <Segment inverted style={{width: '100%'}}>
                    <Menu compact secondary inverted pointing size='large'>
                        <Menu.Item onClick={this.onClick} id='Home' active={active === 'Home'? true : false} name='Home' as='a' />
                        <Menu.Item onClick={this.onClick} id='Events' active={active === 'Events'? true : false} name='Events' as='a' />
                        <Menu.Item onClick={this.onClick} id='Profile' active={active === 'Profile'? true : false} name='Profile' as='a' />
                    </Menu>
                </Segment>
            );
        }
        return (
            <Segment inverted style={{width: '100%'}}>
                <Menu compact secondary inverted pointing size='large'>
                    <Menu.Item onClick={this.onClick} id='Home' active={active === 'Home'? true : false} name='Home' as='a' />
                    <Menu.Item onClick={this.onClick} id='Events' active={active === 'Events'? true : false} name='Events' as='a' />
                    <Menu.Item onClick={this.onClick} id='Contact' active={active === 'Contact'? true : false} name='Contact' as='a' />
                </Menu>
            </Segment>
        );
    }
}