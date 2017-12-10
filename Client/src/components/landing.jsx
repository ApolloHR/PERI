import React from "react"
import { connect } from "react-redux"
import OneTrip from "./oneTrip.jsx"
import { fetchTrips } from "../actions/tripsActions"

@connect((store) => {
  return {
    trips: store.trips
  }
})
class Landing extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchTrips())
  }

  render () {
    return (
      <div>
        <div>Search form goes here</div>
        <div>{this.props.trips.allTrips.map(tripObj => (
             <OneTrip trip={tripObj} />
        ))}</div>
      </div>
    )
  }
}

export default Landing;