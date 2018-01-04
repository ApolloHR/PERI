import React from 'react';
import { connect } from 'react-redux';
import { GoogleApiWrapper } from 'google-maps-react';
import { NavLink } from 'react-router-dom';
import { postTrip } from '../actions/tripsActions.js';
import SpotMap from './spotMap.jsx';

@connect((store) => {
  return {
    spots: store.cloudinary.tripInfo
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

    const { username, tripName, destination, description, spots } = this.props.spots;

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
        <SpotMap spots={this.props.spots}/>
        <div className="container">
          <section className="hero">
            <div className="hero-body">
              <div className="">
                <h3 className="title has-text-centered">{ tripName }</h3>
              </div>
            </div>
          </section>
          <br></br>
          <div className="">
            <div className="block">
              {trips}
            </div>
            <div className="level">
              <div className="level-left"></div>
              <div className="level-right">
                <div className="level-item">
                  <NavLink to="/" activeClassName="active">
                    <button className="button is-primary is-outlined is-large"
                            onClick={() => this.props.dispatch(postTrip(this.props.spots))}>
                            POST YOUR TRIP
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default TripViewer;