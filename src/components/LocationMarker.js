import React, { Component}  from 'react';
import { InfoWindow, Marker } from "react-google-maps";

class LocationMarker extends Component {

  render() {
    return(
      <Marker
        onClick={(event => this.props.handleMarkerClick(event, this.props.position, this.props.id))}
        position={this.props.position}
        animation={this.props.activeMarker === this.props.id ? window.google.maps.Animation.BOUNCE : null}
      >
        {this.props.activeMarker === this.props.id &&
          <InfoWindow
            onCloseClick={this.props.handleMarkerClick}
          >
            <h3>{this.props.name}</h3>
          </InfoWindow>
        }
      </Marker>
    );
  }
}

export default LocationMarker;
