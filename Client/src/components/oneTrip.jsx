import React from 'react';
import {CardTitle, Card} from 'react-materialize';
import { Link } from 'react-router-dom';


let OneTrip = ({trip}) => (
  <div>
    <div class="card">
      <div class="card-image">
        <figure class="image" style={{margin: 0}}>
          <img src={trip.thumbnail} alt="Placeholder image"/>
        </figure>
      </div>
      <div class="card-content">
        <div class="media">

          <div class="media-content">
            <p class="title is-4">{trip.tripName}</p>
            <br/>
            <p class="subtitle is-6">{trip.destination + ' - ' + trip.description}</p>
          </div>
        </div>

        <div class="content">Created by: {trip.username}
          <Link class="is-pulled-right" to={{pathname: '/allTripInfo', query: trip}}>more info</Link>
          <br/>
        </div>
      </div>
    </div>
  </div>
);

export default OneTrip;
