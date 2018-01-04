import React from 'react';
import axios from 'axios';
import Sticky from 'react-sticky-el';
import { connect } from 'react-redux';
import SpotMap from './spotMap.jsx';
import { addSpotToCart } from '../actions/cart.js';

@connect((store) => {
  return {
    trip: store.cloudinary.tripInfo
  }
})

class tripViewerOneSpot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: [],
      setToggle: []
    };
  }

  render () {
    console.log('TRIPVIEWER ONESPOT ===> ', this.props.trip)
    return (
      <div>
        <div className="container">
          <div className="spot-list">
            {this.props.trip.spots.map((spot, i) => {
              return (
                <div className="card" key={i}>
                  <figure className="image" >
                    <img src={spot.photo} alt="Placeholder image"/>
                  </figure>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">{spot.spotName}</p>
                        <p className="subtitle is-6">{spot.description}</p>
                        <div className="control">
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                </div>
              );
            })}
          </div>
          <div className="spot-map">
            <Sticky>
              <SpotMap spots={this.props.trip.spots}/>
            </Sticky>
          </div>
        </div>
      </div>
    );
  }
}

export default tripViewerOneSpot;