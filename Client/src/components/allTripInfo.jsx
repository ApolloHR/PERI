import React from 'react';
import OneSpot from "./oneSpot.jsx";


let AllTripInfo = (props) => (
  <div>
    <OneSpot trip={props.location.query.tripName}/>
    <div>Whole Trip Viewer</div>
    <div>{console.log(props)}</div>
    <div>{props.location.query.tripName}</div>
  </div>
);

export default AllTripInfo;