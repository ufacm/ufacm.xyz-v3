import React from 'react';
import ReactDOM from 'react-dom';
import SignedInHomepage from './components/SignedInHomepage.jsx';
import Nav from './components/Nav.jsx';
import EventList from './components/EventList.jsx';
import ContactUsForm from './components/ContactUsForm.jsx';
import {Responsive} from 'semantic-ui-react';

class SignedIn extends React.Component {

  constructor() {
    super();

    this.state = {
      tab: 'Profile',
    }

    this.onNavChange = this.onNavChange.bind(this);
  }

  onNavChange(data) {
    this.setState({tab: data.active});
  }


  render() {
    return (
      <Responsive id="homepage">
        <Nav tabs={['Profile', 'Events']} onChange={this.onNavChange} />
      <div style={{display: (this.state.tab === 'Profile'? '' : 'none')}} >
        <SignedInHomepage auth={true} />
      </div>
      <div style={{display: (this.state.tab === 'Events'? '' : 'none')}} >
        <EventList auth={true} title="All Events" url="/jsons/events.json" />
      </div>
      </Responsive>
    )
  }
}

ReactDOM.render(
  <SignedIn />,
  document.getElementById('root')
);
