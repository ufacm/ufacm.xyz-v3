import React from 'react';
import {Segment, Menu, Responsive} from 'semantic-ui-react';


export default class Nav extends React.Component {
    constructor() {
        super();
        
        this.state = {active: 'About'};

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.setState({active: e.target.id});
    }

    render() {
        const active = this.state.active;
        return (
            <Segment inverted style={{padding: '1em'}} vertical>
                <Menu pointing inverted compact size='large' fixed='top'>
                    <Menu.Item onClick={this.onClick} id='Home' active={active === 'Home'? true : false} name='Home' as='a' />
                    <Menu.Item onClick={this.onClick} id='About' active={active === 'About'? true : false} name='About' as='a' />
                    <Menu.Item onClick={this.onClick} id='Events' active={active === 'Events'? true : false} name='Events' as='a' />
                    <Menu.Item onClick={this.onClick} id='Contact' active={active === 'Contact'? true : false} name='Contact' as='a' />
                </Menu>
            </Segment>
        );
    }
}