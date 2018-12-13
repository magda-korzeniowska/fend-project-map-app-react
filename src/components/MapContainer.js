import React, { Component, Fragment }  from 'react';
import Map from './Map.js';
import LocationDetails from './LocationDetails'

class MapContainer extends Component {

	render() {

		return (
      <Fragment>
  			<Map
  				locations={this.props.locations}
          handleMarkerClick={this.props.handleMarkerClick}
          activeMarker={this.props.activeMarker}
          openModal={this.props.openModal}
          closeModal={this.props.closeModal}
  				googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCUj8C4MekWgZ5bZtuSeBW0ckKE3UC9LFU&v=3.exp'
  				loadingElement={<div style={{ height: `100%` }} />}
  				containerElement={<div style={{ height: `100vh` }} />}
  				mapElement={<div style={{ height: `100%` }} />}
  			/>
        <LocationDetails
          modal={this.props.modal}
          closeModal={this.props.closeModal}
        />
      </Fragment>
		);
	}
}
export default MapContainer;
