import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.jsx';
import LoginForm from './components/LoginForm.jsx';
import SignupForm from './components/SignupForm.jsx';
import {Container, Image} from 'semantic-ui-react';

class Accounts extends React.Component {

  constructor() {
    super();

    this.state = {
      tab: "Log In",
    }

    this.onNavChange = this.onNavChange.bind(this);
  }

  onNavChange(data) {
    this.setState({tab: data.active});
  }


  render() {

    console.log((this.state.tab === 'Events'? '' : 'none'))
    return (
            <Container style={{marginTop: '100px'}}>
                <Image src="images/acm.png" centered size="small" />
                <div style={{margin: '20px auto', maxWidth: '500px'}}>
                    <Nav subtle tabs={['Log In', 'Create An Account']} onChange={this.onNavChange} />
                    <div style={{display: (this.state.tab === 'Log In'? '' : 'none')}} >
                        <LoginForm notitle />
                    </div>
                    <div style={{display: (this.state.tab === 'Create An Account'? '' : 'none')}} >
                        <SignupForm notitle />
                    </div>
                </div>
            </Container>
    )
  }
}


ReactDOM.render(
  <Accounts />,
  document.getElementById('root')
);
