import React from 'react';


let AllTripInfo = (props) => (
  <div>
    <div>Whole Trip Viewer</div>
    <div>{console.log(props)}</div>
    <div>{props.location.query.tripName}</div>
  </div>
);

export default AllTripInfo;