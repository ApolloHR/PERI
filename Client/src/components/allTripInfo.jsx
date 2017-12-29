import React from 'react';
import OneSpot from './oneSpot.jsx';

class AllTripInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const { query } = this.props.location;

    return (
      <div>
        <div className="container">
          <div className="columns">
            <div className="column">
              <p className="title is-size-2">{query.tripName}</p>
              <p className="subtitle is-size-5">{query.destination}</p>
              <hr/>
              <p className="subtitle is-size-3">{query.description}</p>
              <p className="subtitle is-size-6">Created by {query.username}</p>
              <p className="subtitle is-size-6">{query.hashtag}</p>
              <hr/>
              <p className="subtitle is-size-6">{query.spots.length + ' spots on this trip'}</p>
              <hr/>
            </div>
            <div className="column">
              <figure className="image">
                <img src={query.thumbnail} alt="Placeholder image"/>
              </figure>
            </div>
          </div>
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  All Spots on This Trip:
                </h1>
                <a className="button is-primary">{'Add ' + query.spots.length + ' spot(s) to my trip'}</a>
              </div>
            </div>
          </section>
          <OneSpot trip={this.props}/>
        </div>
      </div>
    );
  }
}

export default AllTripInfo;