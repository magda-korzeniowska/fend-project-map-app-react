import React, { Component }  from 'react';
import Map from './Map.js';

class MapContainer extends Component {

	render() {

		return (
			<Map
				locations={this.props.locations}
				center={this.props.center}
        handleMarkerClick={this.props.handleMarkerClick}
				closeInfoWIndow={this.props.closeInfoWIndow}
        activeMarker={this.props.activeMarker}
        modal={this.props.modal}
        openModal={this.props.openModal}
        closeModal={this.props.closeModal}
				sideBar={this.props.sideBar}
				googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCUj8C4MekWgZ5bZtuSeBW0ckKE3UC9LFU&v=3.exp'
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `100vh` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}
export default MapContainer;
