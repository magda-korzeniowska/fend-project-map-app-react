import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import LocationMarker from "../components/LocationMarker.js";

const Map = withScriptjs(withGoogleMap((props) => {

  const markers = props.locations.map((location, index) =>
    <LocationMarker
      key={location.id}
      index={index}
      id={location.id}
      name={location.name}
      position={{
        lat: location.latlng.lat,
        lng: location.latlng.lng
      }}
      handleMarkerClick={props.handleMarkerClick}
      activeMarker={props.activeMarker}
    />
  );

  return (
    <GoogleMap
      defaultZoom={11.7}
      defaultCenter={{ lat: 32.7511678, lng: -17.001055 }}
      >
      {markers}
    </GoogleMap>
  );
}))

export default Map;
