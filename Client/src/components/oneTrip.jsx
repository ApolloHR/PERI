import React from "react";
import {CardTitle, Card} from 'react-materialize';
import { Link } from "react-router-dom"


let OneTrip = ({trip}) => (

  <div>
    <Card className='small'
  header={<CardTitle image={trip.thumbnail}>{trip.destination}</CardTitle>}
  actions={[<Link to={{pathname: "/allTripInfo", query: trip}}>more info</Link>]}>
      <div>{trip.tripName}</div>
      <div>{trip.description}</div>
      <div>created by {trip.username}</div>
    </Card>
  </div>
)


export default OneTrip;
