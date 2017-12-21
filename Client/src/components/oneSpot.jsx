import React from 'react';
import axios from 'axios';
import MapContainer from './map.jsx';
import SpotMap from './spotMap.jsx';
import { connect } from "react-redux";
import { render } from "react-dom";
import { addSpotToCart } from "../actions/cart.js";

@connect((store) => {
  return {
    cart: store.cart
  }
})

class OneSpot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: []
    };
  }

  componentDidMount() {
    var thisContext = this;

    axios.post('/spots', {
      tripId: this.props.trip.location.query.objectID
    })
      .then(function (response) {
        console.log(response);
        thisContext.setState({spots: response.data});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  addToCart(e) {
    console.log('add to cart bind this e =', e.target.value);
    this.props.dispatch(addSpotToCart(JSON.parse(e.target.value)));
  }

  render () {
    return (
      <div>
        {this.state.spots.map((spot) => {
          return (
            <div className="container">
              <div className="columns">
                <div className="column">
                  <div className="card">
                    <figure className="image" >
                      <img src={spot.photo} alt="Placeholder image"/>
                    </figure>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">{spot.spotName}</p>
                          <br></br>
                          <p className="subtitle is-6">{spot.description}</p>
                          <div className="control">
                            <button
                              className="button is-primary"
                              type="submit"
                              value={JSON.stringify(spot)}
                              onClick={this.addToCart.bind(this)} >
                              Add to my Trip!
                            </button>
                          </div>
                          <div class="modal">
                            <div class="modal-background"></div>
                            <div class="modal-content">
                              <SpotMap spots={spot}/>
                            </div>
                            <button class="modal-close is-large" aria-label="close">Map me</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                map of spot will go here
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}


export default OneSpot;
