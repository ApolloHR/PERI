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

  upvote() {
    var context = this;
    axios.post('/upvote', {
      trip: context.props.trip
    })
      .then ((res) => {
        console.log('Saved to db');
      })
      .catch((err) => {
        console.log('error =', err);
      });
  }

  parseHashtag (hashtag) {
    let hidden = {color: 'white'};
    let parsedTag = <div style={hidden}>#</div>;

    if (hashtag) {
      parsedTag = hashtag.split(' ').map(hash => {
        if (hash[hash.length - 1] === ',') {
          hash = hash.slice(0, hash.length - 1);
        }
        return <span>{hash + ' '}</span>;
      });
    }
    return parsedTag;
  }

  render() {
    const trip = this.props.trip;
    console.log('LINE 46 ONTRIPSPOTS ===>', trip);
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
              <div className="subtitle is-6">{trip.spots.length} Spots
                <a class="button is-primary is-small" onClick={this.upvote}>Upvote {trip.upvotes}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OneTripSpots;
