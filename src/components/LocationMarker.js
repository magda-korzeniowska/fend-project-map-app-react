import React, { Component }  from 'react';
import { InfoWindow, Marker } from "react-google-maps";

class LocationMarker extends Component {

  render() {
    return (
      <Marker
        onClick={(event => this.props.handleMarkerClick(event, this.props.position, this.props.location.id))}
        position={this.props.position}
        animation={this.props.activeMarker === this.props.location.id ? window.google.maps.Animation.BOUNCE : null}
      >
        {this.props.activeMarker === this.props.location.id &&
          <InfoWindow
            onCloseClick={this.props.handleMarkerClick}
          >
            <div className="info-window">

              <h3>{this.props.location.name}</h3>
              <p>{this.props.location.title}</p>

              <button className="details-button"
                onClick={(event) => {
                  this.props.openModal();
                }}>Details</button>
            </div>
          </InfoWindow>
        }
      </Marker>
    );
  }
}

export default LocationMarker;
