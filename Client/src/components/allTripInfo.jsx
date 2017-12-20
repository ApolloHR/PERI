import React from 'react';
import OneSpot from './oneSpot.jsx';


let AllTripInfo = (props) => (
  <div>
    <div className="container">
      <div className="columns">
        <div className="column">
          <p className="title">{props.location.query.tripName}</p>
          <p className="subtitle">{props.location.query.destination}</p>
          <hr/>
          <p className="subtitle">{props.location.query.description}</p>
          <hr/>
          <p className="subtitle">Created by {props.location.query.username}</p>
          <hr/>
          <p className="subtitle is-size-6">{props.location.query.spots.length + ' spots on this trip'}</p>
          <p className="subtitle is-size-6">{props.location.query.hashtag}</p>
          <hr/>
          <a className="button is-primary">Add All Spots From This Trip</a>
        </div>

        <div className="column">
          <figure className="image">
            <img src={props.location.query.thumbnail} alt="Placeholder image"/>
          </figure>
        </div>
      </div>
    </div>

    <h3 class="title is-3">All Spots on This Trip:</h3>


    <OneSpot trip={props}/>

  </div>
);

export default AllTripInfo;