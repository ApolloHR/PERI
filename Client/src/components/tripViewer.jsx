import React from 'react';
import { connect } from 'react-redux';
import { GoogleApiWrapper } from 'google-maps-react';
import MapsContainer from './map.jsx'

@connect((store) => {
  return {
    test: store.tripView.test
  }
})

class TripViewer extends React.Component {
  render () {
    return (
      <div>
        <h3>{this.props.test}</h3>
        <MapsContainer />
      </div>
    )
  }
}

export default TripViewer;