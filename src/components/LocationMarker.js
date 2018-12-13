import React, { Component }  from 'react';
import { InfoWindow, Marker } from "react-google-maps";

class LocationMarker extends Component {

  render() {
    return (
      <Marker
        onClick={(event => this.props.handleMarkerClick(event, this.props.position, this.props.id))}
        position={this.props.position}
        animation={this.props.activeMarker === this.props.id ? window.google.maps.Animation.BOUNCE : null}
      >
        {this.props.activeMarker === this.props.id &&
          <InfoWindow
            onCloseClick={this.props.handleMarkerClick}
          >
            <div className="info_window">

              <h2>{this.props.name}</h2>
              <h3>{this.props.engName}</h3>

              <button className="details_button"
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
