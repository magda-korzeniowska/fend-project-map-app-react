import React, { Component }  from 'react';
import { InfoWindow, Marker } from 'react-google-maps';
import * as Focus from '../utils/Focus';

class LocationMarker extends Component {

  render() {
    return (
      <Marker
        onClick={(event => this.props.handleMarkerClick(event, this.props.position, this.props.location))}
        position={this.props.position}
        animation={this.props.activeMarker === this.props.location ? window.google.maps.Animation.BOUNCE : null}
      >
        {this.props.activeMarker === this.props.location &&
          <InfoWindow
            onCloseClick={this.props.closeInfoWIndow}
          >
            <div className="info-window">

              <h3>{this.props.location.name}</h3>
              <p>{`(eng. ${this.props.location.title})`}</p>
              <button className="details-button"
                aria-label="Click for details of location"
                tabIndex={this.props.sideBar && this.props.activeMarker ? -1 : 0}
                onClick={(event) => {
                  this.props.openModal();
                  Focus.getFocus();
                }}>Details</button>
            </div>
          </InfoWindow>
        }
      </Marker>
    );
  }
}

export default LocationMarker;

//ZMIANA
