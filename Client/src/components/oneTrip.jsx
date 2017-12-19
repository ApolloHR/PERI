import React from 'react';
import { Link } from 'react-router-dom';


let OneTrip = ({trip}) => (
  <div>
    <Link to={{pathname: '/allTripInfo', query: trip}}>
      <div className="card trip-card">
        <div className="card-image">
          <figure className="image is-4by3" style={{margin: 0}}>
            <img src={trip.thumbnail} alt="Placeholder image"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media-content">
            <div className="title is-6">{trip.tripName}</div>
            <div className="subtitle is-6">{trip.destination}
            </div>
            <div className="is-size-7">{trip.spots.length + ' locations on this trip'}
            </div>
            <div className="is-size-7">{'Created by: ' + trip.username}</div>
            <div className="is-size-7">{trip.hashtag.split(' ').map(hash => {
              if (hash[hash.length - 1] === ',') {
                hash = hash.slice(0, hash.length - 1);
              }
              return <span>{hash}</span>;
            })}</div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default OneTrip;
