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
        console.log('Upvote Successful =', res);
        context.setState({upvotes: res.data});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="card trip-card">
          <Link to={{pathname: '/allTripInfo', query: this.props.trip}}>
            <div className="card-image">
              <figure className="image is-4by3" style={{margin: 0}}>
                <img src={this.props.trip.thumbnail} alt="Placeholder image"/>
              </figure>
            </div>
          </Link>
          <div className="card-content">
            <div className="media-content">
              <div className="title is-6">{this.props.trip.destination}</div>
              <div className="subtitle is-6">{this.props.trip.description}
              </div>
              <div className="subtitle is-6">{this.props.trip.spots.length} Spots
                <a class="button is-primary is-small" onClick={this.upvote}>Upvote {this.state.upvotes}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OneTripSpots;
