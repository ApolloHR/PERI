import React from 'react';
import OneSpot from './oneSpot.jsx';


let AllTripInfo = (props) => (
  <div>
    <div className="card">
      <div className="">
        <img src={props.location.query.thumbnail} alt="Placeholder image"/>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{props.location.query.tripName}</p>
            <br></br>
            <p className="subtitle is-6">{props.location.query.description}</p>
          </div>
        </div>
      </div>
    </div>
    <h3 class="title is-3">All Spots on This Trip:</h3>

    <OneSpot trip={props}/>

  </div>
);

export default AllTripInfo;