//Created by Raymond, Re-purposed by Benji
import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

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
  return (
    <div>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 35.68921388888889, lng: 139.69170833333334 }}
      >
        {props.spots.map( spot => (
          <Marker position={{ lat: spot.lat, lng: spot.long }}/>
        ))}
      </GoogleMap>
    </div>
  );
});

class SpotMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const spotList = this.props.spots || [];

    return (
      <div>
        <MapComponent spots={spotList}/>
      </div>
    );
  }
}
export default SpotMap;