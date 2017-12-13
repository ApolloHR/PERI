import {Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';

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
      return <Marker
                    title={spot.spotName}
                    name={'testing'}
                    position={{ lat:spot.lat, lng: spot.long }}
              />
    });

    console.log(spots[0].lat, spots[0].long)
    return (
      <div>
        <Map  style={style.map} google={this.props.google} zoom={10}
              initialCenter={{lat: spots[0].lat, lng: spots[0].long}}>

          <Marker title={'Start'}
                  name={'Current location!'}
                  position={{lat:1.3521, lng:103.8198}}
          />

          <Marker title={'The Garden by the Bay'}
                  name={'Current location!'}
                  position={{lat:1.2816, lng:103.8636}}
          />
          {markers}
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCXBfFMVmtAzLxzykJh74QKlFPDV9IYLDI'
})(MapContainer)