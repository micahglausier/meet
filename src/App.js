/* eslint-disable react-hooks/exhaustive-deps */

import EventList from "./components/EventList";
import CitySearch from "./components/CitySearch";
import NumberOfEvents from "./components/NumberOfEvents";
import CityEventsChart from "./components/CityEventsChart";
import EventGenresChart from "./components/EventGenresChart";

import { useState, useEffect } from "react";
import { getEvents, extractLocations } from "./api";
import { InfoAlert, ErrorAlert, WarningAlert } from "./components/Alert";

import "./App.css";


const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  // fetch event data and rerender on city or event number change
  useEffect(() => {
    // add warning alert when user tries offline search
    if (navigator.onLine) {
      setWarningAlert("");
    } else {
      setWarningAlert("The app is currently offline. To search for information, reconnect your device.")
    }
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    // filter events shown by selected city
    const filteredEvents =
      currentCity === "See all cities"
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  return (
    <div className="App">
      <div className="app-header">
          <h1 >Meet App</h1>
      </div>
      {/* render alert if there's a search error */}
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <div classname="search">
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert} />
      <NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert}/>
      </div>
      <div className="charts-container">
        <EventGenresChart events={events}/>
        <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      <EventList events={events} />
    </div>
  );
};

export default App;