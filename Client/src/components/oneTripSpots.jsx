import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class OneTripSpots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upvotes: props.trip.upvotes
    };
  }

  parseHashtag (hashtag) {
    let hidden = {color: 'white'};
    let parsedTag = <div style={hidden}>#</div>;

    if (hashtag) {
      parsedTag = hashtag.split(' ').map((hash, i) => {
        if (hash[hash.length - 1] === ',') {
          hash = hash.slice(0, hash.length - 1);
        }
        return <span key={i}>{hash + ' '}</span>;
      });
    }
    return parsedTag;
  }

  render() {
    const trip = this.props.trip;

    let numSpots;

    if (trip.spots.length === 1) {
      numSpots = 'spot';
    } else {
      numSpots = 'spots';
    }

    return (
      <div className="col-sm-3">
        <div className="card trip-card card-height">
          <Link to={{pathname: '/allTripInfo', query: trip}}>
            <div className="card-image">
              <figure className="image is-4by3" style={{margin: 0}}>
                <img src={trip.thumbnail} alt="Placeholder image"/>
              </figure>
            </div>
          </Link>
          <div className="card-content">
            <div className="content">
              <div className="title is-5">{trip.tripName}</div>
              <div className="subtitle is-6">Destination is {trip.destination}</div>
              <div className="subtitle is-6">{trip.spots.length} {numSpots}</div>
              <div className="subtitle is-6">{trip.upvotes} upvotes</div>
              <div className="subtitle is-6">{this.parseHashtag.call(this, trip.hashtag)}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OneTripSpots;
