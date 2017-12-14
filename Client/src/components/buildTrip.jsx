import React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
// import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import { uploadTrip } from "../actions/uploadActions.js";
import { cloudinaryAction } from "../actions/cloudinary.js";
import { fetchTrips } from "../actions/tripsActions";

@connect ((store) => {
  return {
    test: store.trips.uploadTrip,
    cloudinaryGallery: store.cloudinary
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
      _this.props.dispatch(cloudinaryAction(res));
    });
    console.log('this.props.cloudinaryGallery =', this.props.cloudinaryGallery);
  }

  saveData() {
    //assemble data object
    //send to trip previewer/post to server
  }

  handleChange(e) {
    this.props.dispatch(uploadTrip(e.target.value));
    console.log(this.props.test);
  }

  render() {
    return (
  <div>
    <div>Build a Trip!</div>
    <form onSubmit={this.handleSubmit}>
        <label> Trip Name: <input type="text" onChange={this.handleChange.bind(this)}/>
        </label><br></br>
        <label> Destination: <input type="text" onChange={this.handleChange.bind(this)} />
        </label><br></br>
        <label> Trip Description: <textarea onChange={this.handleChange.bind(this)}/>
        </label><br></br>
      <div id="uploaded" className="upload">
        <button onClick={this.uploadWidget.bind(this)} className="upload-button">
          Add Image
        </button>
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
  )
  }
}
export default BuildTrip;