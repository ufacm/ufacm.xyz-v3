import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage.jsx';
import Nav from './components/Nav.jsx';
import EventList from './components/EventList.jsx';
import ContactUsForm from './components/ContactUsForm.jsx';
import {Responsive} from 'semantic-ui-react';

class Index extends React.Component {

  constructor() {
    super();

    this.state = {
      tab: "Home",
    }

    this.onNavChange = this.onNavChange.bind(this);
  }

  onNavChange(data) {
    this.setState({tab: data.active});
  }


  render() {

    console.log((this.state.tab === 'Events'? '' : 'none'))
    return (
      <Responsive id="homepage">
        <Nav tabs={['Home', 'Events', 'Contact']} onChange={this.onNavChange} />
      <div style={{display: (this.state.tab === 'Home'? '' : 'none')}} >
        <Homepage />
      </div>
      <div style={{display: (this.state.tab === 'Events'? '' : 'none')}} >
        <EventList title="Events" url="/jsons/events.json" />
      </div>
      <div style={{display: (this.state.tab === 'Contact'? '' : 'none')}} >
        <ContactUsForm />
      </div>
      </Responsive>
    )
  }
}


ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
