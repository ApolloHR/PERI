import React from 'react';
import OneSpot from './oneSpot.jsx';


let AllTripInfo = (props) => (
  <div>
    <Card className='large' header={<CardTitle image={props.location.query.thumbnail}>{props.location.query.tripName}</CardTitle>} actions={[<a href='#'>Find Another Adventure</a>]}>{props.location.query.description}
    </Card>
    <a>All Spots on This Trip:</a>
    <OneSpot trip={props}/>
  </div>
);

export default AllTripInfo;