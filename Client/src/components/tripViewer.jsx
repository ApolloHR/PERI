import React from 'react';
import { connect } from 'react-redux';
import { GoogleApiWrapper } from 'google-maps-react';
import { NavLink } from 'react-router-dom';
import { postTrip } from '../actions/tripsActions.js';
import SpotMap from './spotMap.jsx';
import TripViewerOneSpot from './tripViewerOneSpot.jsx';

@connect((store) => {
  return {
    spots: store.cloudinary.tripInfo,
    spotsList: store.cloudinary.tripInfo.spots
  }
})

class TripViewer extends React.Component {
  render () {
    const style = {
      spot: {
        margin: 0,
      },
      container: {
        margin: '10%'
      }
    };

    const { username, tripName, destination, description, spots, hashtag, thumbnail } = this.props.spots;

    const trips = spots.map((spot, i) =>
      <div className="card block" key={i}>
        <div className="">
          <figure className="image" style={style.spot}>
            <img src={spot.photo} alt="Placeholder image"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-2">{spot.spotName}</p>
              <br></br>
              <p className="subtitle is-4">{spot.description}</p>
            </div>
          </div>
        </div>
      </div>
    );

    console.log('tripviewer thispropsspots =', this.props.spots);
    return (
      <div>
        <div className="container">
          <div className="columns">
            <div className="column">
              <p className="title is-size-2">{ tripName }</p>
              <p className="subtitle is-size-5">{ destination }</p>
              <button className="button is-primary is-outlined is-large"
                      onClick={() => this.props.dispatch(postTrip(this.props.spots))}>
                      POST YOUR TRIP
              </button>
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
              </div>
            </div>
          </section>
          <TripViewerOneSpot trip={ this.props.spots }/>
        </div>
      </div>
    );
  }
}


export default TripViewer;