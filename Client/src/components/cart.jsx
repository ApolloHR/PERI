import React from 'react';
import { render } from "react-dom";
import { connect } from 'react-redux';
import { GoogleApiWrapper } from 'google-maps-react';
import { Link } from 'react-router-dom';
import { postTrip } from '../actions/tripsActions.js';
import { cartThumbnail } from "../actions/cart.js";
import { cartTripInfo } from "../actions/cart.js";
import MapContainer from './map.jsx';

@connect((store) => {
  return {
    props: store.cart
  }
})

class Cart extends React.Component {

  uploadWidget() {
    let _this = this;
    window.cloudinary.openUploadWidget({ cloud_name: "peri", theme: "white", cropping: 'server', cropping_show_back_button: true, cropping_aspect_ratio: 1, sources: ["local", "url", "camera", "google_photos", "facebook", "instagram"], show_powered_by: false, upload_preset: "uploadperi", tags:["users"]},
    function(error, result) {
      if(error) {
        console.log("upload widget error =", error);
      }
      console.log('uploadwidget result =', result);
      let res = result.map((e) => {
        return e.url;
      })
      _this.props.dispatch(cartThumbnail(res));
    });
  }

  handleChange(e) {
    let info = this.props.props.tripInfo;
    info[e.target.name] = e.target.value;
    this.props.dispatch(cartTripInfo(info));
  }

  handleSubmit(e) {
    // e.preventDefault();
    let data = this.props.props.tripInfo;
    data.thumbnail = this.props.props.thumbnail[0];
    console.log('handleSubmit data =', data);
    this.props.dispatch(postTrip(data));
  }

  render() {
    const style = {
      spot: {
        margin: 0,
      },
      container: {
        margin: '10%'
      }
    };

    const { username, tripName, destination, description, spots } = this.props.props.tripInfo;
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
      console.log('tripviewer thispropsspots =', this.props.props);
      return (
        <div>
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <p className="title">Enter trip details</p>
              <form >
                <div className="field">
                  <label class="label">Trip Name</label>
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      id="tripname"
                      name="tripName"
                      placeholder="Enter Trip Name"
                      onChange={this.handleChange.bind(this)}
                    />
                  </p>
                </div>
                <div className="field">
                  <label class="label">Destination</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      id="destination"
                      name="destination"
                      placeholder="Enter Destination"
                      onChange={this.handleChange.bind(this)}
                    />
                  </div>
                </div>
                <div className="field">
                <label class="label">Trip Description</label>
                  <p className="control">
                    <textarea
                      className="textarea"
                      type="text"
                      id="tripdescription"
                      name="description"
                      placeholder="Enter Trip Description"
                      onChange={this.handleChange.bind(this)}
                    />
                  </p>
                </div>
                <div className="field">
                  <label class="label">Add Hash Tags</label>
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      id="hashtag"
                      name="hashtag"
                      placeholder="#Adventure #PERI"
                      onChange={this.handleChange.bind(this)}
                    />
                  </p>
                </div>
                <div className="field is-grouped">
                  <p className="control">
                    <Link to="/"
                      activeClassName="active">
                      <button
                        className="button is-primary"
                        type="submit"
                        value="submit"
                        onClick={this.handleSubmit.bind(this)}>
                        Submit
                      </button>
                    </Link>
                  </p>
                </div>
              </form>
              <div id="uploaded" className="control">
                <button
                  onClick={this.uploadWidget.bind(this)}
                  className="button is-secondary">
                  Add Cover Image
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <MapContainer spots={this.props.props.tripInfo}/>
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
            </div>
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
    )
  }
}
export default Cart;








    
