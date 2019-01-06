import React, { Fragment } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import LocationMarker from "./LocationMarker.js";
import LocationDetails from "./LocationDetails.js";

const Map = withScriptjs(withGoogleMap((props) => {

  const markers = props.locations.map((location, index) =>
    <LocationMarker
      location={location}
      key={location.id}
      index={index}
      // id={location.id}
      // name={location.name}
      // engName={location.title}
      position={{
        lat: location.latlng.lat,
        lng: location.latlng.lng
      }}
      handleMarkerClick={props.handleMarkerClick}
      closeInfoWIndow={props.closeInfoWIndow}
      activeMarker={props.activeMarker}
      openModal={props.openModal}
      modal={props.modal}
      closeModal={props.closeModal}
    />
  );

  return (
    <Fragment>
      <GoogleMap
        defaultZoom={11.7}
        defaultCenter={{ lat: 32.7511678, lng: -17.001055 }}
        >
        {markers}
      </GoogleMap>
      <LocationDetails
        modal={props.modal}
        closeModal={props.closeModal}
        activeMarker={props.activeMarker}
      />
    </Fragment>
  );
}))

export default Map;
