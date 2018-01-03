import React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { cloudinaryThumbnail } from "../actions/cloudinary.js";
import { cloudinaryTripInfo } from "../actions/cloudinary.js";
import { Link } from 'react-router-dom';

@connect ((store) => {
  return {
    cloudinaryStore: store.cloudinary,
    auth: store.login
  }
})

class PostTrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    }
  }

  //name change test
  uploadWidget() {
    let _this = this;
    this.setState({ clicked: true });
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
    if(this.props.auth.loggedIn === false) {
      //render "You must be logged in to perform that action"
      e.preventDefault();
      let msg = document.createElement('P');
      let message = document.createTextNode("You must be logged in to perform that action.");
      msg.appendChild(message);
      document.getElementById("submitbutton").appendChild(msg);
    } else if (this.props.auth.loggedIn === true) {
      let data = this.props.cloudinaryStore.tripInfo;
      data.thumbnail = this.props.cloudinaryStore.thumbnail[0];
      console.log('handleSubmit data =', data);
      this.props.dispatch(cloudinaryTripInfo(data));
    }
  }
//test
  render() {

    // if clicked is false then display this component
    let rightSection
    if (this.state.clicked === false) {
      rightSection =
        <div id="uploaded" className="control uploadImage">
          <button
            onClick={this.uploadWidget.bind(this)}
            className="button is-secondary uploadButton">
            Add Cover Image
          </button>
        </div>
    } else if (this.state.clicked === true) {
      rightSection =
       <figure className="image">
          <img src={this.props.cloudinaryStore.thumbnail} className="uploadImagePicture"/>
          <p className="title">{this.props.cloudinaryStore.tripInfo.tripName}</p>
          <p className="subtile">{this.props.cloudinaryStore.tripInfo.description}</p>
        </figure>
    }
    // if clicked is true then display the picture only

    return (
      <div>
        <div className="container is-fluid">
          <div className="row">
            <div className="col-sm-6">
              <p className="title">Post a Trip!</p>
              <form >
                <div className="field">
                  <label>Trip Name</label>
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
                  <label>Destination</label>
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
                <label>Trip Description</label>
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
                  <label>Add Hash Tags</label>
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
                <div id="submitbutton" className="field is-grouped">
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
            </div>
            <div className="col-sm-6">
              {rightSection}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default PostTrip;

// on click make the grey background disappear and display the cloudinary image
//