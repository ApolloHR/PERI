//Created by Raymond, Re-purposed by Benji
import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const SpotMap = compose(
  withProps({
    // googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCXBfFMVmtAzLxzykJh74QKlFPDV9IYLDI&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)( (props) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.spots.lat, lng: props.spots.long }}
  > <div>{console.log('lat:', props.spots.lat, 'lng:', props.spots.long)}</div>
    {
      <Marker position={{ lat: props.spots.lat, lng: props.spots.long }}/>
    }
  </GoogleMap>
));

export default SpotMap;