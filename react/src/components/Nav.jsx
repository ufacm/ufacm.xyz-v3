import React from 'react';
import {Menu, Segment} from 'semantic-ui-react';


export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {active: props.tabs[0]};
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.setState({active: e.target.id});
        if (this.props.onChange)
            this.props.onChange({active: e.target.id});
    }

    render() {
        const active = this.state.active;

        const tabs = this.props.tabs.map((tabName) => (
            <Menu.Item onClick={this.onClick} id={tabName} key={tabName} active={active === tabName ? true : false} name={tabName} as='a' />
        ));

        if (this.props.subtle) {
            return (
                <div style={{textAlign: "center", width: '100%'}}>
                    <Menu compact pointing size='large'>
                        {tabs}
                    </Menu>
                </div>
            );
        } else {
            return (
                <Segment inverted style={{width: '100%'}}>
                    <Menu compact secondary pointing inverted size='large'>
                        {tabs}
                    </Menu>
                </Segment>
            );
        }
    }
}