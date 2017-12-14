import React from 'react';
import { connect } from 'react-redux';
import { GoogleApiWrapper } from 'google-maps-react';
import { NavLink } from 'react-router-dom';
import { postTrip } from '../actions/tripsActions.js';
import MapContainer from './map.jsx'

@connect((store) => {
  return {
    spots: store.tripView.trip
  }
})


class TripViewer extends React.Component {
  render () {
    const style = {
      spot: {
        margin: 0,
      }
    }
    const { username, tripName, destination, description, spots } = this.props.spots;
    const trips = spots.map((spot, i) =>
      <div className="card" key={i}>
        <div className="">
          <figure className="image" style={style.spot}>
            <img src={spot.photo} alt="Placeholder image"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{spot.spotName}</p>
              <br></br>
              <p className="subtitle is-6">{spot.description}</p>
            </div>
          </div>
        </div>
      </div>
    )

    console.log(this.props.spots);
    return (
      <div>
        <MapContainer spots={this.props.spots}/>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h3 className="title has-text-centered">{ tripName }</h3>
            </div>
          </div>
        </section>
        <div className="container">
          <div>
            {trips}
          </div>
          <div className="block">
            <NavLink to="/" activeClassName="active">
              <button className="button"
                      onClick={() => this.props.dispatch(postTrip(this.props.spots))}>
                      POST
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default TripViewer;