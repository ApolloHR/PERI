import React from 'react';
import { connect } from 'react-redux';
import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './map.jsx'

@connect((store) => {
  return {
    test: store.tripView.test,
    spots: store.tripView.trip
  }
})

class TripViewer extends React.Component {
  render () {
    console.log('this.props.spots.spots =====>', this.props.spots.spots)
    return (
      <div>
        <h3>{this.props.spots.tripName}</h3>
        <MapContainer spots={this.props.spots}/>
      </div>
    )
  }
}

export default TripViewer;