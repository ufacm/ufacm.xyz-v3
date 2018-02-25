import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage.jsx';
import Nav from './components/Nav.jsx';
import EventList from './components/EventList.jsx';
import ContactUsForm from './components/ContactUsForm.jsx';
import {Responsive} from 'semantic-ui-react';

const USE_TRANSITIONS = true;

class Index extends React.Component {

  constructor() {
    super();

    this.state = {
      tab: 'Home',
    }

    this.onNavChange = this.onNavChange.bind(this);
  }

  onNavChange(data) {
    this.setState({tab: data.active});
  }


  render() {
    let hidden, visible;
    
    if (USE_TRANSITIONS) {
      const global = {transition: 'max-height 0.1s ease-in-out, opacity 0.1s ease-in-out', position: 'absolute', width: '100%'};
      
      hidden = Object.assign({opacity: 0, zIndex: 0, maxHeight: '0px', overflow: 'hidden'}, global);
      visible = Object.assign({opacity: 1, zIndex: 1, maxHeight: '5000px'}, global);
    
    } else {
      hidden = {display: 'none'};
      visible = {};
    }
    
    return (
      <Responsive id="homepage">
        <Nav tabs={['Home', 'Events', 'Contact']} onChange={this.onNavChange} />
        <div>
          <div style={this.state.tab === 'Home'? visible : hidden} >
            <Homepage />
          </div>
          <div style={this.state.tab === 'Events'? visible : hidden} >
            <EventList title="Events" url="/jsons/events.json" />
          </div>
          <div style={this.state.tab === 'Contact'? visible : hidden} >
            <ContactUsForm />
          </div>
        </div>
      </Responsive>
    )
  }
}


ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
