import React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { cloudinaryThumbnail } from "../actions/cloudinary.js";
import { cloudinaryTripInfo } from "../actions/cloudinary.js";
import { Link } from 'react-router-dom';

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

  render() {
    return (
  <div>
    <div className="container is-fluid">
      <div className="row">
        <div className="col-sm-6">
          <p className="title">Build a Trip!</p>
          <form >
            <div className="field">
              <label className="label">Trip Name</label>
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
              <label className="label">Destination</label>
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
            <label className="label">Trip Description</label>
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
              <label className="label">Add Hash Tags</label>
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
                <Link to="/buildSpot"
                  activeClassName="active">
                  <button
                    className="button is-primary"
                    type="submit"
                    value="submit"
                    onClick={this.handleSubmit.bind(this)} >
                    Submit
                  </button>
                </Link>
              </p>
            </div>
          </form>
          <div className="col-sm-6">
          <div id="uploaded" className="control">
            <button
              onClick={this.uploadWidget.bind(this)}
              className="button is-secondary">
              Add Cover Image
            </button>
          </div>
          </div>
          <div>
            <figure class="image is-128x128">
              <img src={this.props.cloudinaryStore.thumbnail}/>
              <p>{this.props.cloudinaryStore.tripInfo.tripName}</p>
              <p>{this.props.cloudinaryStore.tripInfo.description}</p>
            </figure>
          </div>
        </div>

  </div>
  )
  }
}
export default BuildTrip;