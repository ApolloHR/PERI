//Created by Raymond, Re-purposed by Benji
import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';

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
          <Marker
            position={{ lat: spot.lat, lng: spot.long }}
            onClick={props.markerClick.bind(this, spot)}
          >
            {<InfoBox>
              <div className="infoBox-popup-box">
                <div className="infoBox-popup-content">{spot.spotName}
                  <img className="image is-64x64" src={spot.photo}/>
                </div>
              </div>
            </InfoBox>}
          </Marker>
        ))}
      </GoogleMap>
    </div>
  );
});

class SpotMap extends React.Component {
  constructor(props) {
    super(props);
  }


  markerClick(spot) {
    console.log('I got clicked');
    console.log(spot);
  }

  render() {
    const spotList = this.props.spots || [];

    return (
      <div>
        <MapComponent
          spots={spotList}
          markerClick={this.markerClick.bind(this)}
        />
      </div>
    );
  }
}
export default SpotMap;