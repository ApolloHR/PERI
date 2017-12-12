import {Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'React';

const style = {
  map: {
    width: '50%',
    height: '400px',
  },
}

export class MapContainer extends React.Component {
  render() {

    const { username, tripName, destination, description, spots } = this.props.spots

    const markers = spots.map((spot) => {
      <Marker title={spot.spotName}
             position={{ lat:spot.lat, lng: spot.long }}
      />
    });

    return (
      <Map  style={style.map} google={this.props.google} zoom={10}
            initialCenter={{lat: 1.3521, lng: 103.8198}}>

        <Marker title={'Start'}
                name={'Current location!'}
                position={{lat:1.3521, lng:103.8198}}
        />

        <Marker title={'The Garden by the Bay'}
                name={'Current location!'}
                position={{lat:1.2816, lng:103.8636}}
        />

      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDFcE8bydJGUCcAourl590kYuRbK3HCLuQ'
})(MapContainer)