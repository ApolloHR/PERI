import React from 'react';
import axios from 'axios';
import Sticky from 'react-sticky-el';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import SpotMap from './spotMap.jsx';
import { addSpotToCart } from '../actions/cart.js';

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
    const setToggle = this.state.spots.map( oneSpot => true );
    return (
      <div>
        <div className="container">
          <div className="spot-list">
            {this.state.spots.map((spot) => {
              console.log('each spot!!!', spot)
              return (
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
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="spot-map">
          <Sticky>
            <SpotMap spots={this.state.spots} setToggle={setToggle}/>
          </Sticky>
          </div>
        </div>
      </div>
    );
  }
}

export default OneSpot;