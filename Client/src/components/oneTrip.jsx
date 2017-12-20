import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';


class OneTrip extends React.Component {
  constructor(props) {
    super(props);
  }

  parseHashtag (hashtag) {
    let hidden = {color: 'white'};
    let parsedTag = <div style={hidden}>#</div>;
    if (hashtag) {
      parsedTag = hashtag.split(' ').map(hash => {
        if (hash[hash.length - 1] === ',') {
          hash = hash.slice(0, hash.length - 1);
        }
        return <span>{hash}</span>;
      });
    }
    return parsedTag;
  }

  render () {
    const trip = this.props.trip;
    return (
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
                <div className="is-size-7">{this.parseHashtag.call(this, trip.hashtag)
                }</div>
              </div>
            </div>
            <div className="is-size-7">{'Created by: ' + trip.username}</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default OneTrip;
