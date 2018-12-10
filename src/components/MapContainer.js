import React, { Component}  from 'react';
import Map from '../components/Map.js';

class MapContainer extends Component {

	render() {

		return (
			<Map
				locations={this.props.locations}
				googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyCUj8C4MekWgZ5bZtuSeBW0ckKE3UC9LFU&v=3.exp'
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `100vh` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}
export default MapContainer;
