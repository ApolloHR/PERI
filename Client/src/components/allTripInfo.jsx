import React from 'react';
import OneSpot from './oneSpot.jsx';


let AllTripInfo = (props) => (
  <div>
    <div className="container">
      <div className="columns">
        <div className="column">
          <p className="title is-size-2">{props.location.query.tripName}</p>
          <p className="subtitle is-size-5">{props.location.query.destination}</p>
          <hr/>
          <p className="subtitle is-size-3">{props.location.query.description}</p>
          <p className="subtitle is-size-6">Created by {props.location.query.username}</p>
          <p className="subtitle is-size-6">{props.location.query.hashtag}</p>
          <hr/>
          <p className="subtitle is-size-6">{props.location.query.spots.length + ' spots on this trip'}</p>
          <hr/>
        </div>
        <div className="column">
          <figure className="image">
            <img src={props.location.query.thumbnail} alt="Placeholder image"/>
          </figure>
        </div>
      </div>
    </div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            All Spots on This Trip:
          </h1>
          <a className="button is-primary">Add all spots</a>
        </div>
      </div>
    </section>

    <OneSpot trip={props}/>

  </div>
);

export default AllTripInfo;