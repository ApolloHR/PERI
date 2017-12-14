import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMapComponent = compose(
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
    defaultCenter={{ lat: props.spots.spots[0].lat, lng: props.spots.spots[0].long }}
  >
    {
      props.spots.spots.map( (spot, i) =>
        <Marker position={{ lat: spot.lat, lng: spot.long }} key={ i }/>
      )
    }
  </GoogleMap>
));

export default MyMapComponent;

// import {Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// import React from 'react';

// const style = {
//   map: {
//     width: '50%',
//     height: '400px',
//   },
// };
// export class MapContainer extends React.Component {
//   render() {

//     const { username, tripName, destination, description, spots } = this.props.spots;
//     console.log(spots[0].lat, spots[0].long)
//     return (
//       <Map google={this.props.google}
//            zoom={10} style={style.map}
//            initialCenter= {{
//             lat: spots[0].lat,
//             lng: spots[0].long
//           }}>
//         { spots.map((spot) => console.log('hello world!')) }
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCXBfFMVmtAzLxzykJh74QKlFPDV9IYLDI'
// })(MapContainer);