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

    // Push locations from local json file to an array
    let locations = [];
    locations.push(...places.default);

    locations.map(location => {

      //Get photos from Flickr
      let pictures = [];
      let getPictures = (query) => {
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
          .catch(error => {
            alert(`An error occurred while trying to fetch data from Flickr: ${error}`);
          })
         // Push all pictures of all locations to an array
         pictures.push(pics);
      }

      // Get information from Wikipedia
      let wikiData = [];
      let getWikiData = (query) => {
        fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=extracts&titles=${query.replace(/ /g, '_')}&exintro=1`)
          .then(res => {
            return res.json()})
          .then(places => {
            let content = places.query.pages[Object.keys(places.query.pages)[0]].extract;
            wikiData.push(content);
          })
          .catch(error => {
            alert(`An error occurred while trying to fetch data about ${query}: ${error}`);
          })
      }

      // Make a request for each location by location name
      getPictures(location.name);    // fetch images form Flicker
      getWikiData(location.name);  // fetch data form Wikipedia

      // array in array - push all pictures to 'location' array - 'photos' variable
      location['photos'] = pictures[0];
      location['wikiData'] = wikiData;

      return locations;
    });

    // Set the state of locations - updated by photos from Flick and data from Wikipedia
    this.setState({ locations: locations });
    console.log(locations)
  }


  // onMarkerClick = (location) => {
  //   this.setState({
  //     showInfoWindow: true,
  //     activeMarker: location
  //   })
  // }
  //
  // onMapClick = () => {
  //   this.setState({
  //     showInfoWindow: false,
  //     activeMarker: {}
  //   })
  // }

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
            // onMarkerClick={this.onMarkerClick}
            // onMapClick={this.onMapClick}
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
