import React, { Component}  from 'react';
import { InfoWindow, Marker } from "react-google-maps";

class LocationMarker extends Component {

 state = {
   // isOpen: false,
   activeMarker: {}
 }

  onToggleOpen = (marker) => {
    this.setState({
      // isOpen: true,
      activeMarker: marker
    })
  }

  render() {
    return(
      <Marker
        key={this.props.id}
        position={this.props.position}
        onClick={() => this.onToggleOpen(this.props.index)}
      >
        {(this.state.activeMarker === this.props.index) &&
          <InfoWindow
            onCloseClick={() => this.onToggleOpen()}
          >
            <h3>{this.props.name}</h3>
          </InfoWindow>
        }
      </Marker>
    );
  }
}

export default LocationMarker;
