import React from "react";
import {CardTitle, Card} from 'react-materialize';


let OneTrip = ({trip}) => (

  <div>
    <Card className='small'
  header={<CardTitle image={trip.thumbnail}>{trip.destination}</CardTitle>}
  actions={[<a href='#'>View Full Trip</a>]}>
      <div>{trip.tripName}</div>
      <div>{trip.description}</div>
      <div>created by {trip.username}</div>
    </Card>
  </div>
)


export default OneTrip;
