import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';
import { updateMap } from '../actions/cart.js';
import MarkerList from './markerList.jsx';

const MapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCXBfFMVmtAzLxzykJh74QKlFPDV9IYLDI&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '800px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)( (props) => {
  let newLat = (props.spots.length > 0) ? props.spots[0].lat : 0;
  let newLng = (props.spots.length > 0) ? props.spots[0].long : 0;

  return (
    <div>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: newLat, lng: newLng }}
      >
        <MarkerList spots={props.spots}/>
      </GoogleMap>
    </div>
  );
});

//no longer need a stateful component
class SpotMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const spotList = this.props.spots || [];
    return (
      <div>
        <MapComponent
          spots={spotList}
        />
      </div>
    );
  }
}

export default SpotMap;