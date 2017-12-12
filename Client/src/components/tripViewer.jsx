import React from 'react';
import { connect } from 'react-redux';
import { GoogleApiWrapper } from 'google-maps-react';
import MapsContainer from './map.jsx'

@connect((store) => {
  return {
    test: store.tripView.test,
    spots: store.tripView.trip
  }
})

class TripViewer extends React.Component {
  render () {
    return (
      <div>
        <h3>{this.props.test}</h3>
        <MapsContainer spots={this.props.spots}/>
      </div>
    )
  }
}

export default TripViewer;