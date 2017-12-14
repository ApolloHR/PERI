import React from 'react';
import { Link } from 'react-router-dom';


let OneTrip = ({trip}) => (
  <div>
    <div className="card trip-card">
      <div className="card-image">
        <figure className="image" style={{margin: 0}}>
          <img src={trip.thumbnail} alt="Placeholder image"/>
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <div className="title is-2">{trip.tripName}</div>
          <div className="subtitle is-4">{trip.destination + ' - ' + trip.description}<br/>{trip.spots.length + ' locations on this trip'}
          </div>
        </div>
        <div className="column">
          <div className="subtitle is-8 is-pulled-left">Created by: {trip.username}</div>
          <Link className="is-pulled-right" to={{pathname: '/allTripInfo', query: trip}}>
            <button className="button is-primary is-outlined">see trip route</button>
          </Link>
          <br/>
        </div>
      </div>
    </div>
  </div>
);

export default OneTrip;
