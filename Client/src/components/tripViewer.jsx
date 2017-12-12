import React from 'react';
import { connect } from 'react-redux'

@connect((store) => {
  return {
    test: store.tripView.test
  }
})

class TripViewer extends React.Component {
  render () {
    return (
      <div>
        {this.props.test}
      </div>
    )
  }
}

export default TripViewer;