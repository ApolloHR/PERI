import React from 'react';
import axios from 'axios';
import OneSpot from './oneSpot.jsx';

class AllTripInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      tripName: '',
      destination: '',
      description: '',
      username: '',
      hashtag: '',
      spots: [],
      thumbnail: '',
      upvotes: 0
    };
  }

  componentDidMount() {
    axios.post('/getOneTrip', {
      trip: this.props.location.query
    })
      .then((response) => {
        console.log('hit the server! ', response.data);
        const { _id, tripName, destination, description, username, hashtag, spots, thumbnail, upvotes } = response.data;
        this.setState({
          _id: _id,
          tripName: tripName,
          destination: destination,
          description: description,
          username: username,
          hashtag: hashtag,
          spots: spots,
          thumbnail: thumbnail,
          upvotes: upvotes
        });
      })
      .catch((error) => {
        console.log('no server in sight');
      });
  }

  upvote() {
    axios.post('/upvote', {
      _id: this.state._id
    })
      .then ((response) => {
        this.setState({ upvotes: response.data.upvotes });
      })
      .catch((error) => {
        console.log('error =', error);
      });
  }

  render() {

    const { tripName, destination, description, username, hashtag, spots, thumbnail, upvotes } = this.state;

    return (
      <div>
        <div className="container">
          <div className="columns">
            <div className="column">
              <p className="title is-size-2">{ tripName }</p>
              <p className="subtitle is-size-5">{ destination }</p>
              <a className="button is-primary" onClick={ this.upvote.bind(this) }>Upvote { upvotes }</a>
              <hr/>
              <p className="subtitle is-size-3">{ description }</p>
              <p className="subtitle is-size-6">Created by { username }</p>
              <p className="subtitle is-size-6">{ hashtag }</p>
              <hr/>
              <p className="subtitle is-size-6">{ spots.length + ' spots on this trip' }</p>
              <hr/>
            </div>
            <div className="column">
              <figure className="image">
                <img src={ thumbnail } alt="Placeholder image"/>
              </figure>
            </div>
          </div>
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">
                  All Spots on This Trip:
                </h1>
                <a className="button is-primary">{ 'Add ' + spots.length + ' spot(s) to my trip' }</a>
              </div>
            </div>
          </section>
          <OneSpot trip={ this.props }/>
        </div>
      </div>
    );
  }
}

export default AllTripInfo;