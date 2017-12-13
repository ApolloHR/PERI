import React from 'react';
import { CardTitle, Card } from 'react-materialize';
import OneSpot from './oneSpot.jsx';


let AllTripInfo = (props) => (
  <div>
    <Card className='large' header={<CardTitle image={props.location.query.thumbnail}>{props.location.query.tripName}</CardTitle>} actions={[<a href='#'>Find Another Adventure</a>]}>{props.location.query.description}
    </Card>
    <h2>All Spots on This Trip:</h2>
    <OneSpot trip={props}/>
  </div>
);

export default AllTripInfo;