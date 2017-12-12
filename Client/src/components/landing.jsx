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
        <form class="landing-search">
          <input type="text" placeholder="Find your next adventure..."/>
          <input type="submit" value="Search" />
        </form>
        <div>{this.props.trips.allTrips.map((tripObj, i) => (
             <OneTrip trip={tripObj} key={i}/>
        ))}</div>

        <div>Landing Image wall goes here</div>
        <Login />
        <div>{this.props.trips.test}</div>
      </div>
    )
  }
}

export default Landing;