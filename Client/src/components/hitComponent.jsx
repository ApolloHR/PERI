import React from 'react';
import { Link } from 'react-router-dom';

const HitComponent = (props) => {
  console.log('INSIDE HIT COMPONENT====> ', props);
  return (
    <div className="col-sm-3">
      <div >
        <Link to={{pathname: '/allTripInfo'}}>
          <div className="card trip-card card-height">
            <div className="card-image">
              <figure className="image is-4by3" style={{margin: 0}}>
                <img src={props.hit.thumbnail} alt="Placeholder image"/>
              </figure>
            </div>
            <div className="card-content">
              <div className="media-content">
                <div className="title is-6">{props.hit.tripName}</div>
                <div className="subtitle is-6">{props.hit.destination}
                </div>
                <div className="is-size-7">{props.hit.spots.length + ' locations on this trip'}
                </div>
                <div className="is-size-7">{'Created by: ' + props.hit.username}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>

  );
};

export default HitComponent;


