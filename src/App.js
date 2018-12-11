import React, { Component } from 'react';
import Header from './components/Header.js';
import MapContainer from './components/MapContainer.js';
import * as places from './data/locations.json';
import './App.css';

class App extends Component {

  state = {
    locations: [],
    // showInfoWindow: false,
    // activeMarker: {}
  }

  componentDidMount = () => {
    this.updateLocations()
  }

  updateLocations = () => {
    let locations = [];
    locations.push(...places.default);
    locations.map(location => {
      let photoUrl = [];
      let getPhotos = (query) => {
        const FLICKR_KEY = 'c009bc8d2af43bc3f121ddf3fae2f396';
        let num = 6;
        let pics = [];
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_KEY}&tags=${query}&per_page=${num}&page=1&format=json&nojsoncallback=1`)
          .then(res => res.json())
          .then(places => {
            let picArray = places.photos.photo.map(pic => {
              let src = 'http://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '.jpg';
              return src;
            })
            pics.push(...picArray);
          })
         photoUrl.push(pics);
      }

      getPhotos(location.name);
      location['photos'] = photoUrl[0]
      return locations;
    });

    this.setState({ locations: locations });
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
        <Header />
        <nav id="drawer" className="nav">
          <ul className="nav_list">
            <li className="nav_item"><a href="#">Location1</a></li>
            <li className="nav_item"><a href="#">Location2</a></li>
            <li className="nav_item"><a href="#">Location3</a></li>
          </ul>
        </nav>
        <main className="main_container">
          <MapContainer
            locations={this.state.locations}
            // showInfoWindow={this.state.showInfoWindow}
            // activeMarker={this.state.activeMarker}
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
