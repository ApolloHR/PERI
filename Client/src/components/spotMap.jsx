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
  // let newLat = (props.spots.length > 0) ? props.spots[0].lat : 0;
  // let newLng = (props.spots.length > 0) ? props.spots[0].long : 0;
  let toggleAll = (props.setToggle.length > 0) ? true : false;
  return (
    <div>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 0, lng: 0 }}
      >
        {props.spots.reverse().map( (spot, index) => (
          <Marker
            position={{ lat: spot.lat, lng: spot.long }}
            onClick={props.markerClick.bind(this, spot, index)}
          >
            {toggleAll && props.setToggle[index] && <InfoBox options={{pixelOffset: new google.maps.Size(-40, -150)}} >
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

  markerClick(spot, index) {
    console.log('I got clicked');
    console.log(this.state);
    this.props.setToggle[index] = !this.props.setToggle[index];
  }

  render() {
    console.log('setting toggle', this.props.setToggle);
    const spotList = this.props.spots || [];
    return (
      <div>
        <MapComponent
          setToggle={this.props.setToggle}
          spots={spotList}
          markerClick={this.markerClick.bind(this)}
        />
      </div>
    );
  }
}
export default SpotMap;