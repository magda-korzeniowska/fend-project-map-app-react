import React, { Component }  from 'react';
import { InfoWindow, Marker } from 'react-google-maps';

class LocationMarker extends Component {
  // constructor(props) {
  //       super(props);
  //       this.focusRef = React.createRef();
  //   }
  //
  //   getFocus = () => {
  //       this.focusRef.current.focus();
  //   }
  //
  //   ref={this.focusRef}

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
