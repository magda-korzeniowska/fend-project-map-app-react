import React, { Fragment } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import PropTypes from 'prop-types';
import LocationMarker from "./LocationMarker.js";
import LocationDetails from "./LocationDetails.js";

const Map = withScriptjs(withGoogleMap((props) => {

  const markers = props.locations.map((location, index) =>
    <LocationMarker
      location={location}
      key={location.id}
      index={index}
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
      sideBar={props.sideBar}
    />
  );

  return (
    <Fragment>
      <GoogleMap
        defaultZoom={11.7}
        center={props.center}
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

Map.propTypes = {
  locations: PropTypes.array.isRequired,
}

export default Map;
