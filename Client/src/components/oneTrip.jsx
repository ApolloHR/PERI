import React from "react"

let OneTrip = ({trip}) => (

  <div>
    <img src={trip.thumbnail} />
    <div>{trip.destination}</div>
    <div>{trip.tripName}</div>
    <div>{trip.description}</div>
    <div>created by {trip.username}</div>
  </div>
)


export default OneTrip;
