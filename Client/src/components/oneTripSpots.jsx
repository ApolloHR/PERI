import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class OneTripSpots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.upvote = this.upvote.bind(this);
  }

  upvote() {
    var context = this;
    axios.post('/upvote', {
      trip: context.props.trip
    })
      .then ((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>

          <div className="card trip-card">
            <div className="card-image">
              <figure className="image is-4by3" style={{margin: 0}}>
                <img src={this.props.trip.thumbnail} alt="Placeholder image"/>
              </figure>
            </div>
            <div className="card-content">
              <div className="media-content">
                <div className="title is-6">{this.props.trip.destination}</div>
                <div className="subtitle is-6">{this.props.trip.description}
                </div>
                <div className="subtitle is-6">{this.props.trip.spots.length} Spots
                  <a class="button is-primary is-small" onClick={this.upvote}>Upvote</a>
                </div>
              </div>
            </div>
          </div>

      </div>
    );
  }
}

export default OneTripSpots;
