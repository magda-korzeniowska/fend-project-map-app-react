import React, { Component } from 'react';
import MapContainer from './components/MapContainer.js';
import * as locations from './data/locations.json';

class App extends Component {

  state = {
    locations: locations,
    showInfoWindow: false,
    activeMarker: {}
  }

  onMarkerClick = (location) => {
    this.setState({
      showInfoWindow: true,
      activeMarker: location
    })
  }

  onMapClick = () => {
    this.setState({
      showInfoWindow: false,
      activeMarker: {}
    })
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="page-title">MADEIRA - Must See Places</h1>
        </header>
        <main className="main-container">
          <MapContainer
            locations={this.state.locations}
            showInfoWindow={this.state.showInfoWindow}
            activeMarker={this.state.activeMarker}
            onMarkerClick={this.onMarkerClick}
            onMapClick={this.onMapClick}
          />
        </main>
        {/* <footer className="footer">
          <p>App created for UDACITY Nanodegree - Google Schoolarship Program. Copyright (c) 2018 </p>
        </footer> */}
      </div>
    );
  }
}

export default App;
