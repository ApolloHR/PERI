import React from "react"
import { connect } from "react-redux"

@connect((store) => {
  return {
    trips: store.trips
  }
}, )
class Landing extends React.Component {

  render () {
    return (
      <div>
        <div>Search form goes here</div>
        <div>Landing Image wall goes here</div>
        <div>{this.props.trips.test}</div>
      </div>
    )
  }
}

export default Landing;