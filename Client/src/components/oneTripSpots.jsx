import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class OneTripSpots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upvotes: props.trip.upvotes
    };
    this.upvote = this.upvote.bind(this);
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
            <div className="media-content">
              <div className="title is-6">{trip.destination}</div>
              <div className="subtitle is-6">{trip.description}</div>
              <div className="subtitle is-6">{this.parseHashtag.call(this, trip.hashtag)}</div>
              <div className="level">
                <div className="subtitle is-6 level-left">{trip.spots.length} Spots</div>
                <div className="subtitle is-6 level-right">Upvote {trip.upvotes}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OneTripSpots;
