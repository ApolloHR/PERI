import React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { uploadTrip } from "../actions/uploadActions.js";
import { cloudinaryThumbnail } from "../actions/cloudinary.js";
import { cloudinaryTripInfo } from "../actions/cloudinary.js";
import { fetchTrips } from "../actions/tripsActions";
import { NavLink } from 'react-router-dom';

@connect ((store) => {
  return {
    cloudinaryStore: store.cloudinary
  }
})

class BuildTrip extends React.Component {

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
      _this.props.dispatch(cloudinaryThumbnail(res));
    });
  }

  handleChange(e) {
    let info = this.props.cloudinaryStore.tripInfo;
    info[e.target.name] = e.target.value;
    this.props.dispatch(cloudinaryTripInfo(info));
  }

  handleSubmit(e) {
    // e.preventDefault();
    let data = this.props.cloudinaryStore.tripInfo;
    data.thumbnail = this.props.cloudinaryStore.thumbnail[0];
    console.log('handleSubmit data =', data);
    this.props.dispatch(cloudinaryTripInfo(data));
  }

  submitTrip() {
  }

  render() {
    return (
  <div>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column main-search">
              <p className="title">Build a Trip!</p>
              <div className="field is-grouped">
                <form >
                  <div className="control is-expanded">
                   <label class="label">Trip Name</label>
                    <input
                      className="input"
                      type="text"
                      id="tripname"
                      name="tripName"
                      placeholder="Enter Trip Name"
                      onChange={this.handleChange.bind(this)}
                    />
                  </div>
                  <div className="control is-expanded">
                  <label class="label">Destination</label>
                    <input
                      className="input"
                      type="text"
                      id="destination"
                      name="destination"
                      placeholder="Enter Destination"
                      onChange={this.handleChange.bind(this)}
                    />
                  </div>
                  <div className="control is-expanded">
                  <label class="label">Trip Description</label>
                    <input
                      className="input"
                      type="text"
                      id="tripdescription"
                      name="description"
                      placeholder="Enter Trip Description"
                      onChange={this.handleChange.bind(this)}
                    />
                  </div>
                   <div className="control is-expanded">
                  <label class="label">Add Hash Tags</label>
                    <input
                      className="input"
                      type="text"
                      id="hashtag"
                      name="hashtag"
                      placeholder="#Adventure #PERI"
                      onChange={this.handleChange.bind(this)}
                    />
                  </div>
                  <div className="control">
                    <NavLink to="/buildSpot"
                      activeClassName="active">
                      <button
                        className="button is-primary"
                        type="submit"
                        value="submit"
                        onClick={this.handleSubmit.bind(this)} >
                        Submit
                      </button>
                    </NavLink>
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
        </div>
      </div>
    </section>
  </div>
  )
  }
}
export default BuildTrip;