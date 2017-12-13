import React from 'react';
import OneSpot from './oneSpot.jsx';


let AllTripInfo = (props) => (
  <div>
    <OneSpot trip={props}/>
    <div>Whole Trip Viewer</div>
    <div>{props.location.query.tripName}</div>
  </div>
);

export default AllTripInfo;