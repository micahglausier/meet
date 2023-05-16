import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfResults: 32
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  };

  updateEvents = (location, eventCount) => {
    console.log("Updating events for location and eventCount:", location, eventCount);
    const { numberOfResults } = this.state;
  
    getEvents(eventCount || numberOfResults).then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }

  updateNumberOfResults = async (eventCount) => {
    console.log("Updating number of results:", eventCount);
    this.setState({ numberOfResults: eventCount });
    const selectedLocation = document.querySelector('.suggestions li.selected')?.textContent || 'all';
    this.updateEvents(selectedLocation, eventCount);
  };

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfResults={this.state.numberOfResults} updateNumberOfResults={this.updateNumberOfResults} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}


export default App;
