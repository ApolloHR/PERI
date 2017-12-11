import React from "react"
import { connect } from "react-redux"
import OneTrip from "./oneTrip.jsx"
import { fetchTrips } from "../actions/tripsActions"
import Login from "./login.jsx"

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
        <div>{this.props.trips.allTrips.map((tripObj, i) => (
             <OneTrip trip={tripObj} key={i}/>
        ))}</div>
        <Login />
        <div>Landing Image wall goes here</div>
        <div>{this.props.trips.test}</div>
      </div>
    )
  }
}

export default Landing;