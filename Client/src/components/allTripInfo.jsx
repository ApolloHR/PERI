import React from 'react';
import OneSpot from './oneSpot.jsx';


let AllTripInfo = (props) => (
  <div>
    <Card className='large' header={<CardTitle image={props.location.query.thumbnail}>{props.location.query.tripName}</CardTitle>} actions={[<a href='#'>Find Another Adventure</a>]}>{props.location.query.description}
    </Card>
    <h3 class="title is-3">All Spots on This Trip:</h3>
    <OneSpot trip={props}/>
  </div>
);

export default AllTripInfo;